/**
 * UnifiedSerialService v2.0 - 统一串口解析服务
 *
 * 支持 7 个串口设备同时连接：
 * - 1 对左右手手套（波特率 921600，帧长 130+146 分包）
 * - 1 个坐垫（波特率 1000000，帧长 1024）
 * - 4 个脚垫（波特率 3000000，帧长 4096）
 *
 * 帧协议：
 * - 定界符：AA 55 03 99
 * - 帧结构：[数据载荷] + [AA 55 03 99]
 *
 * 手套帧（130+146 分包）：
 * - 第一帧 130 字节：[顺序位=1] [类型位: 1=左手,2=右手] [128字节数据]
 * - 第二帧 146 字节：[顺序位=2] [类型位: 1=左手,2=右手] [128字节数据] [16字节四元数-忽略]
 * - 两帧拼接后得到 256 字节 = 16×16 矩阵
 *
 * 坐垫帧（1024 字节）：
 * - 1024 字节 = 32×32 矩阵
 *
 * 脚垫帧（4096 字节）：
 * - 4096 字节 = 64×64 矩阵
 */

/** 帧定界符 */
const DELIMITER = new Uint8Array([0xAA, 0x55, 0x03, 0x99]);

/** 波特率 → 设备类型映射 */
export const BAUD_DEVICE_MAP = {
  921600: 'glove',     // 手套（左右手共用一个串口）
  1000000: 'seat',     // 坐垫
  3000000: 'footpad',  // 脚垫
};

/** 有效帧长度 */
const VALID_FRAME_LENGTHS = new Set([130, 146, 1024, 4096]);

/** 降噪阈值 */
const NOISE_THRESHOLD = {
  glove: 1,
  seat: 2,
  footpad: 3,
};

/**
 * 单个串口连接的解析服务
 */
export class SerialPortConnection {
  /**
   * @param {string} id - 连接唯一标识
   */
  constructor(id) {
    this.id = id;
    this.port = null;
    this.reader = null;
    this.baudRate = null;
    this.deviceType = null; // 'glove' | 'seat' | 'footpad'

    // 脚垫专属
    this.macAddress = null;
    this.footpadIndex = null; // 1-4

    // 缓冲区
    this.buffer = new Uint8Array(0);

    // 手套分包缓存：{ 'HL': { frame1: null, frame2: null }, 'HR': { ... } }
    this.gloveSplitCache = {
      HL: { frame1: null, frame2: null },
      HR: { frame1: null, frame2: null },
    };

    // 状态
    this.isConnected = false;
    this.lastDataTime = 0;
    this._isOnline = false;

    // 帧率
    this.frameCount = 0;
    this.lastFpsTime = Date.now();
    this.fps = 0;

    // 回调
    this._onFrame = null;    // (channel, matrix, meta) => void
    this._onLog = null;      // (msg, type) => void
    this._onStatus = null;   // (status) => void
    this._onMacAddress = null; // (mac) => void — 脚垫 AT 响应

    // 在线检测
    this._onlineTimer = null;
  }

  // ============================================================
  // 公共 API
  // ============================================================

  /**
   * 连接串口
   * @param {SerialPort} port - Web Serial API 端口对象
   * @param {number} baudRate - 波特率
   * @returns {Promise<boolean>}
   */
  async connect(port, baudRate) {
    try {
      this.port = port;
      this.baudRate = baudRate;
      this.deviceType = BAUD_DEVICE_MAP[baudRate] || 'unknown';

      await this.port.open({ baudRate });
      this.isConnected = true;
      this.lastDataTime = Date.now();
      this.buffer = new Uint8Array(0);

      this._log(`已连接，波特率 ${baudRate}，设备类型 ${this.deviceType}`);
      this._notify('connected');

      // 启动在线检测
      this._startOnlineCheck();

      // 启动读取循环
      this._readLoop();

      return true;
    } catch (e) {
      this._log(`连接失败: ${e.message}`, 'error');
      this._notify('error');
      return false;
    }
  }

  /**
   * 断开连接
   */
  async disconnect() {
    this._stopOnlineCheck();
    try {
      if (this.reader) {
        await this.reader.cancel();
        this.reader = null;
      }
      if (this.port) {
        await this.port.close();
      }
    } catch (e) {
      this._log(`断开出错: ${e.message}`, 'warn');
    }
    this.isConnected = false;
    this._isOnline = false;
    this.buffer = new Uint8Array(0);
    this._notify('disconnected');
  }

  /**
   * 发送 AT 指令查询脚垫 MAC 地址（带重试机制）
   * 设备有时候发送AT指令不会返回MAC地址，需要持续重试
   * @param {number} [maxRetries=30] - 最大重试次数
   * @param {number} [retryInterval=2000] - 每次重试间隔（毫秒）
   * @returns {Promise<string|null>} MAC 地址
   */
  async queryMacAddress(maxRetries = 30, retryInterval = 2000) {
    if (!this.port || !this.port.writable) return null;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      this._log(`AT 指令查询 MAC 地址（第 ${attempt}/${maxRetries} 次）...`);

      const mac = await this._sendATOnce();
      if (mac) {
        this.macAddress = mac;
        this._log(`MAC 地址获取成功: ${mac}（第 ${attempt} 次尝试）`);
        return mac;
      }

      // 未返回，等待后重试
      if (attempt < maxRetries) {
        this._log(`AT 指令未返回 MAC 地址，${retryInterval}ms 后重试...`, 'warn');
        await new Promise(r => setTimeout(r, retryInterval));
      }
    }

    this._log(`AT 指令查询 MAC 地址失败，已重试 ${maxRetries} 次`, 'error');
    return null;
  }

  /**
   * 发送一次 AT 指令并等待响应
   * 指令：AT+NAME=ESP32\r\n (hex: 41542B4E414D453D45535033320d0a)
   * 响应格式包含 "Unique ID: XXXXXXXX" 和 "Versions: XXXXXX"
   * @returns {Promise<string|null>}
   */
  async _sendATOnce() {
    if (!this.port || !this.port.writable) {
      console.log(`[AT-DEBUG][${this.label}] port 或 writable 不可用, port=${!!this.port}, writable=${!!this.port?.writable}`);
      return null;
    }

    // 清空 AT 响应缓冲区
    this._atResponseBuffer = '';

    return new Promise(async (resolve) => {
      const timeout = setTimeout(() => {
        console.log(`[AT-DEBUG][${this.label}] AT 指令 3秒超时，未收到响应。缓冲区内容: "${this._atResponseBuffer}"`);
        this._onMacAddress = null;
        resolve(null);
      }, 3000);

      this._onMacAddress = (mac) => {
        clearTimeout(timeout);
        this._onMacAddress = null;
        console.log(`[AT-DEBUG][${this.label}] ✅ 成功获取 MAC: ${mac}`);
        resolve(mac);
      };

      try {
        const writer = this.port.writable.getWriter();
        // AT+NAME=ESP32\r\n
        const cmd = new Uint8Array([0x41, 0x54, 0x2B, 0x4E, 0x41, 0x4D, 0x45, 0x3D, 0x45, 0x53, 0x50, 0x33, 0x32, 0x0D, 0x0A]);
        await writer.write(cmd);
        writer.releaseLock();
        console.log(`[AT-DEBUG][${this.label}] → 已发送 AT+NAME=ESP32 (15 bytes)`);
        this._log('已发送 AT+NAME=ESP32 指令');
      } catch (e) {
        clearTimeout(timeout);
        this._onMacAddress = null;
        console.log(`[AT-DEBUG][${this.label}] ❌ 发送失败: ${e.message}`);
        this._log(`发送 AT 指令失败: ${e.message}`, 'error');
        resolve(null);
      }
    });
  }

  /**
   * 绑定脚垫顺序
   */
  setFootpadIndex(index) {
    this.footpadIndex = index;
    this._log(`脚垫顺序设置为 ${index}`);
  }

  // ============================================================
  // 回调设置
  // ============================================================

  onFrame(cb) { this._onFrame = cb; }
  onLog(cb) { this._onLog = cb; }
  onStatus(cb) { this._onStatus = cb; }

  // ============================================================
  // 内部 - 数据读取
  // ============================================================

  async _readLoop() {
    if (!this.port?.readable) return;
    this.reader = this.port.readable.getReader();

    try {
      while (true) {
        const { value, done } = await this.reader.read();
        if (done) break;
        if (value) {
          this.lastDataTime = Date.now();
          this._appendAndParse(value);
        }
      }
    } catch (e) {
      if (this.isConnected) {
        this._log(`读取错误: ${e.message}`, 'error');
      }
    } finally {
      try { this.reader.releaseLock(); } catch (_) {}
      this.reader = null;
    }
  }

  /**
   * 追加数据到缓冲区并解析
   */
  _appendAndParse(chunk) {
    // 检查是否为 AT 响应文本
    if (this._onMacAddress) {
      this._checkATResponse(chunk);
    }

    // 追加到缓冲区
    const newBuf = new Uint8Array(this.buffer.length + chunk.length);
    newBuf.set(this.buffer);
    newBuf.set(chunk, this.buffer.length);
    this.buffer = newBuf;

    // 按定界符切包
    while (true) {
      const idx = this._findDelimiter();
      if (idx === -1) {
        // 防止缓冲区无限增长
        if (this.buffer.length > 20000) {
          this.buffer = this.buffer.slice(this.buffer.length - 10000);
        }
        break;
      }

      const payloadLen = idx;
      if (VALID_FRAME_LENGTHS.has(payloadLen)) {
        const payload = this.buffer.slice(0, idx);
        this._handleFrame(payloadLen, payload);
      }

      // 跳过定界符
      this.buffer = this.buffer.slice(idx + 4);
    }
  }

  /**
   * 查找定界符 AA 55 03 99
   */
  _findDelimiter() {
    for (let i = 0; i <= this.buffer.length - 4; i++) {
      if (this.buffer[i] === 0xAA && this.buffer[i + 1] === 0x55 &&
          this.buffer[i + 2] === 0x03 && this.buffer[i + 3] === 0x99) {
        return i;
      }
    }
    return -1;
  }

  /**
   * 检查 AT 指令响应
   * 
   * 设备响应格式示例：
   *   Unique ID: 260030000251333039343533
   *   Versions: C40510
   * 
   * 提取 Unique ID 作为 MAC 地址（设备唯一标识符）
   */
  _checkATResponse(chunk) {
    try {
      const text = new TextDecoder().decode(chunk);
      
      // 累积 AT 响应文本（可能分多个 chunk 到达）
      if (!this._atResponseBuffer) this._atResponseBuffer = '';
      this._atResponseBuffer += text;
      
      // 详细日志：打印每个收到的 chunk
      console.log(`[AT-DEBUG][${this.label}] ← 收到数据 chunk (${chunk.length} bytes): "${text.replace(/\r/g, '\\r').replace(/\n/g, '\\n')}"`);
      console.log(`[AT-DEBUG][${this.label}]   缓冲区总内容: "${this._atResponseBuffer.replace(/\r/g, '\\r').replace(/\n/g, '\\n')}"`);
      
      // 打印 chunk 的 hex 值，方便对比
      const hexStr = Array.from(chunk).map(b => b.toString(16).padStart(2, '0')).join(' ');
      console.log(`[AT-DEBUG][${this.label}]   HEX: ${hexStr}`);
      
      let mac = null;
      
      // 格式1（优先）：解析 "Unique ID: XXXXXXXX" 格式
      if (this._atResponseBuffer.includes('Unique ID')) {
        console.log(`[AT-DEBUG][${this.label}] ✅ 检测到 'Unique ID' 关键字`);
        const uniqueIdMatch = this._atResponseBuffer.match(/Unique ID:\s*([^\s\-]+)/);
        if (uniqueIdMatch) {
          mac = uniqueIdMatch[1].toUpperCase();
          console.log(`[AT-DEBUG][${this.label}] ✅ 提取到 Unique ID: ${mac}`);
          this._log(`解析到 Unique ID: ${mac}`);
          
          // 顺便提取版本号
          const versionMatch = this._atResponseBuffer.match(/Versions:\s*([^\s\-]+)/);
          if (versionMatch) {
            console.log(`[AT-DEBUG][${this.label}] 固件版本: ${versionMatch[1]}`);
            this._log(`设备固件版本: ${versionMatch[1]}`);
          }
        } else {
          console.log(`[AT-DEBUG][${this.label}] ⚠️ 含有 'Unique ID' 但正则匹配失败`);
        }
      }
      
      // 格式2：标准 MAC XX:XX:XX:XX:XX:XX 或 XX-XX-XX-XX-XX-XX
      if (!mac) {
        const colonMatch = this._atResponseBuffer.match(/([0-9A-Fa-f]{2}[:-]){5}[0-9A-Fa-f]{2}/);
        if (colonMatch) {
          mac = colonMatch[0].replace(/[:-]/g, '').toUpperCase();
          console.log(`[AT-DEBUG][${this.label}] ✅ 匹配到标准 MAC: ${mac}`);
        }
      }
      
      // 格式3：纯 24 位 hex 字符串
      if (!mac) {
        const hexMatch = this._atResponseBuffer.match(/[0-9A-Fa-f]{24}/);
        if (hexMatch) {
          mac = hexMatch[0].toUpperCase();
          console.log(`[AT-DEBUG][${this.label}] ✅ 匹配到 24位 hex: ${mac}`);
        }
      }
      
      if (mac && this._onMacAddress) {
        console.log(`[AT-DEBUG][${this.label}] ✅✅ 最终 MAC 结果: ${mac}，触发回调`);
        this._log(`收到设备标识: ${mac}`);
        this._atResponseBuffer = '';
        this._onMacAddress(mac);
      } else if (!mac) {
        console.log(`[AT-DEBUG][${this.label}] ❌ 本次 chunk 未匹配到任何 MAC 格式，继续等待...`);
      }
    } catch (err) {
      console.log(`[AT-DEBUG][${this.label}] ❌ _checkATResponse 异常: ${err.message}`);
    }
  }

  // ============================================================
  // 内部 - 帧解析
  // ============================================================

  _handleFrame(length, payload) {
    this._updateFps();

    switch (length) {
      case 130:
        this._handleGloveFrame1(payload);
        break;
      case 146:
        this._handleGloveFrame2(payload);
        break;
      case 1024:
        this._handleSeatFrame(payload);
        break;
      case 4096:
        this._handleFootpadFrame(payload);
        break;
    }
  }

  /**
   * 手套第一帧（130 字节）
   * [顺序位=1] [类型位: 1=左手,2=右手] [128字节数据]
   */
  _handleGloveFrame1(payload) {
    const order = payload[0];  // 应该是 1
    const type = payload[1];   // 1=左手, 2=右手
    const data = Array.from(payload.slice(2)); // 128 字节

    const channel = type === 1 ? 'HL' : 'HR';
    this.gloveSplitCache[channel].frame1 = data;

    // 检查是否两帧都到齐
    this._tryAssembleGlove(channel);
  }

  /**
   * 手套第二帧（146 字节）
   * [顺序位=2] [类型位: 1=左手,2=右手] [128字节数据] [16字节四元数-忽略]
   */
  _handleGloveFrame2(payload) {
    const order = payload[0];  // 应该是 2
    const type = payload[1];   // 1=左手, 2=右手
    const data = Array.from(payload.slice(2, 130)); // 128 字节数据，忽略后16字节四元数

    const channel = type === 1 ? 'HL' : 'HR';
    this.gloveSplitCache[channel].frame2 = data;

    // 检查是否两帧都到齐
    this._tryAssembleGlove(channel);
  }

  /**
   * 尝试组装手套完整矩阵
   */
  _tryAssembleGlove(channel) {
    const cache = this.gloveSplitCache[channel];
    if (!cache.frame1 || !cache.frame2) return;

    // 拼接两帧：128 + 128 = 256 字节 = 16×16 矩阵
    const fullData = [...cache.frame1, ...cache.frame2];
    cache.frame1 = null;
    cache.frame2 = null;

    const rows = 16;
    const cols = 16;
    let matrix = this._buildMatrix(fullData, rows, cols);
    matrix = this._denoise(matrix, NOISE_THRESHOLD.glove);

    this._emitFrame(channel, matrix, {
      type: 'glove',
      channel,
      rows,
      cols,
      maxVal: this._matrixMax(matrix),
    });
  }

  /**
   * 坐垫帧（1024 字节 = 32×32）
   */
  _handleSeatFrame(payload) {
    const rows = 32;
    const cols = 32;
    const data = Array.from(payload);
    let matrix = this._buildMatrix(data, rows, cols);

    // 坐垫数据镜像重排（前15行镜像交换 + 旋转）
    matrix = this._mirrorSeatData(matrix, rows, cols);
    matrix = this._rotateMatrix90(matrix);
    matrix = this._denoise(matrix, NOISE_THRESHOLD.seat);

    this._emitFrame('seat', matrix, {
      type: 'seat',
      channel: 'seat',
      rows: cols, // 旋转后行列互换
      cols: rows,
      maxVal: this._matrixMax(matrix),
    });
  }

  /**
   * 脚垫帧（4096 字节 = 64×64）
   */
  _handleFootpadFrame(payload) {
    const rows = 64;
    const cols = 64;
    const data = Array.from(payload);
    let matrix = this._buildMatrix(data, rows, cols);

    matrix = this._rotateMatrix90(matrix);
    matrix = this._denoise(matrix, NOISE_THRESHOLD.footpad);

    // 通道名称：foot1 / foot2 / foot3 / foot4
    const channel = this.footpadIndex ? `foot${this.footpadIndex}` : 'footpad';

    this._emitFrame(channel, matrix, {
      type: 'footpad',
      channel,
      footpadIndex: this.footpadIndex,
      macAddress: this.macAddress,
      rows: cols,
      cols: rows,
      maxVal: this._matrixMax(matrix),
    });
  }

  // ============================================================
  // 矩阵工具
  // ============================================================

  _buildMatrix(data, rows, cols) {
    const matrix = [];
    for (let r = 0; r < rows; r++) {
      const row = [];
      for (let c = 0; c < cols; c++) {
        const idx = r * cols + c;
        row.push(idx < data.length ? data[idx] : 0);
      }
      matrix.push(row);
    }
    return matrix;
  }

  _rotateMatrix90(matrix) {
    const rows = matrix.length;
    const cols = matrix[0]?.length || 0;
    const rotated = [];
    for (let c = 0; c < cols; c++) {
      const newRow = [];
      for (let r = rows - 1; r >= 0; r--) {
        newRow.push(matrix[r][c]);
      }
      rotated.push(newRow);
    }
    return rotated;
  }

  _mirrorSeatData(matrix, rows, cols) {
    const flat = matrix.flat();
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < cols; j++) {
        const idx1 = i * cols + j;
        const idx2 = (14 - i) * cols + j;
        [flat[idx1], flat[idx2]] = [flat[idx2], flat[idx1]];
      }
    }
    const first15 = flat.splice(0, 15 * cols);
    const reordered = [...flat, ...first15];
    return this._buildMatrix(reordered, rows, cols);
  }

  _denoise(matrix, threshold) {
    return matrix.map(row => row.map(v => v < threshold ? 0 : v));
  }

  _matrixMax(matrix) {
    let max = 0;
    for (const row of matrix) for (const v of row) if (v > max) max = v;
    return max;
  }

  // ============================================================
  // 在线检测
  // ============================================================

  _startOnlineCheck() {
    this._stopOnlineCheck();
    this._onlineTimer = setInterval(() => {
      const wasOnline = this._isOnline;
      this._isOnline = (Date.now() - this.lastDataTime) < 1000;
      if (wasOnline && !this._isOnline) {
        this._log('设备离线', 'warn');
        this._notify('offline');
      } else if (!wasOnline && this._isOnline) {
        this._log('设备在线');
        this._notify('online');
      }
    }, 500);
  }

  _stopOnlineCheck() {
    if (this._onlineTimer) {
      clearInterval(this._onlineTimer);
      this._onlineTimer = null;
    }
  }

  // ============================================================
  // 帧率
  // ============================================================

  _updateFps() {
    this.frameCount++;
    const now = Date.now();
    if (now - this.lastFpsTime >= 1000) {
      this.fps = this.frameCount;
      this.frameCount = 0;
      this.lastFpsTime = now;
    }
  }

  // ============================================================
  // 事件发射
  // ============================================================

  _emitFrame(channel, matrix, meta) {
    if (this._onFrame) {
      this._onFrame(channel, matrix, { ...meta, timestamp: Date.now(), connectionId: this.id });
    }
  }

  _log(msg, type = 'info') {
    const prefix = `[Serial:${this.id}]`;
    if (this._onLog) this._onLog(`${prefix} ${msg}`, type);
    if (type === 'error') console.error(`${prefix} ${msg}`);
    else if (type === 'warn') console.warn(`${prefix} ${msg}`);
    else console.log(`${prefix} ${msg}`);
  }

  _notify(status) {
    if (this._onStatus) this._onStatus(status, this.id);
  }

  destroy() {
    this.disconnect();
    this._onFrame = null;
    this._onLog = null;
    this._onStatus = null;
    this._onMacAddress = null;
  }
}

export default SerialPortConnection;
