/**
 * DeviceManager v2.4 - 设备管理器（Electron 零弹窗一键连接版）
 *
 * 管理 7 个串口设备的自动识别与连接：
 * - 1 对手套（波特率 921600）→ 帧内类型位区分左右手
 * - 1 个坐垫（波特率 1000000）→ 唯一波特率识别
 * - 4 个脚垫（波特率 3000000）→ AT 指令获取 MAC，硬编码映射自动分配
 *
 * 一键连接流程（Electron 环境，完全零弹窗）：
 * 1. 通知 Electron 主进程开启自动选择模式
 * 2. 循环调用 requestPort()，主进程自动依次返回每个串口端口
 * 3. 对每个端口进行波特率探测，识别设备类型
 * 4. 脚垫发送 AT 指令获取 MAC 地址（失败持续重试，最多30次）
 * 5. 根据硬编码 MAC→顺序映射表自动绑定 foot1-4
 * 6. 通知主进程关闭自动选择模式
 *
 * 评估-设备映射：
 * - 握力评估 → HL(左手) + HR(右手)
 * - 起坐评估 → seat(坐垫) + foot1(脚垫1)
 * - 静态站立 → foot1(脚垫1)
 * - 动态步态 → foot1 + foot2 + foot3 + foot4
 */

import { SerialPortConnection, BAUD_DEVICE_MAP } from './UnifiedSerialService.js';

/** 候选波特率（按尝试顺序） */
const CANDIDATE_BAUD_RATES = [3000000, 1000000, 921600];

/** 波特率验证超时（毫秒） */
const BAUD_VALIDATE_TIMEOUT = 2000;

/** 最大扫描端口数（防止无限循环） */
const MAX_SCAN_PORTS = 15;

/** localStorage key */
const FOOTPAD_CONFIG_KEY = 'footpad_mac_config';

/** 硬编码脚垫 MAC 地址映射表（优先级高于 localStorage 配置） */
const HARDCODED_FOOTPAD_MAC_MAP = {
  '260030000251333039343533': 4,  // foot4
  '090030000251333039343533': 1,  // foot1
  '4A0030000251333039343533': 3,  // foot3
  '30002F000251333039343533': 2,  // foot2
};

/** 检测是否在 Electron 环境中 */
const isElectron = () => !!(window.electronAPI && window.electronAPI.isElectron);

/** 评估类型 → 所需通道映射 */
export const ASSESSMENT_CHANNELS = {
  grip: ['HL', 'HR'],
  sitstand: ['seat', 'foot1'],
  standing: ['foot1'],
  gait: ['foot1', 'foot2', 'foot3', 'foot4'],
};

export class DeviceManager {
  constructor() {
    /** @type {Map<string, SerialPortConnection>} */
    this.connections = new Map();

    /** 设备计数器 */
    this._counter = 0;

    /** 脚垫 MAC→顺序 配置 */
    this._footpadConfig = this._loadFootpadConfig();

    /** 帧回调列表（支持多订阅者） */
    this._frameListeners = [];

    // 回调
    this._onDeviceListChange = null;
    this._onLog = null;
    this._onStatusChange = null;

    /** 连接状态 */
    this._isConnecting = false;
  }

  // ============================================================
  // 公共 API
  // ============================================================

  /**
   * 一键连接所有设备 - 真正的零弹窗！
   * 
   * Electron 环境：
   *   1. 通知主进程开启自动选择模式
   *   2. 循环调用 requestPort()，主进程自动返回下一个未选过的端口
   *   3. 当所有端口都选完后，requestPort() 会返回空/报错，循环结束
   *   4. 对每个获取到的端口进行波特率探测和设备识别
   * 
   * 浏览器环境（降级）：
   *   使用 getPorts() 获取已授权端口
   * 
   * @param {function} [onProgress] - 进度回调 (phase, detail)
   * @returns {Promise<Array>} 已连接设备列表
   */
  async connectAllDevices(onProgress = null) {
    if (this._isConnecting) {
      this._log('正在连接中，请勿重复操作', 'warn');
      return [];
    }
    this._isConnecting = true;

    if (!('serial' in navigator)) {
      this._log('浏览器不支持 Web Serial API，请使用 Chrome/Edge 浏览器', 'error');
      this._isConnecting = false;
      return [];
    }

    try {
      let ports = [];

      if (isElectron()) {
        // ── Electron 环境：自动扫描所有串口，零弹窗 ──
        if (onProgress) onProgress('scanning', '正在自动扫描所有串口设备...');
        this._log('Electron 环境，启动自动扫描模式');

        // 通知主进程开启自动选择模式
        await window.electronAPI.startAutoSelect();

        // 循环调用 requestPort()，主进程会自动返回下一个端口
        for (let i = 0; i < MAX_SCAN_PORTS; i++) {
          try {
            if (onProgress) onProgress('scanning', `正在扫描第 ${i + 1} 个串口...`);
            const port = await navigator.serial.requestPort();

            // 检查是否已连接
            let alreadyConnected = false;
            for (const [, conn] of this.connections) {
              if (conn.port === port) {
                alreadyConnected = true;
                break;
              }
            }

            // 检查是否已在本轮扫描中获取过（同一个 port 对象）
            if (!alreadyConnected && !ports.includes(port)) {
              ports.push(port);
              this._log(`扫描到端口 ${ports.length}`);
            }
          } catch (e) {
            // requestPort 失败 = 没有更多端口了
            if (e.name === 'NotFoundError') {
              this._log(`扫描完成，共发现 ${ports.length} 个新端口`);
            } else {
              this._log(`扫描端口时出错: ${e.message}`, 'warn');
            }
            break;
          }
        }

        // 关闭自动选择模式
        await window.electronAPI.stopAutoSelect();

      } else {
        // ── 浏览器环境：使用 getPorts() 获取已授权端口 ──
        if (onProgress) onProgress('scanning', '正在扫描已授权的串口设备...');
        const allPorts = await navigator.serial.getPorts();
        this._log(`发现 ${allPorts.length} 个已授权端口`);

        // 过滤掉已连接的端口
        const connectedPorts = new Set();
        for (const [, conn] of this.connections) {
          if (conn.port) connectedPorts.add(conn.port);
        }
        ports = allPorts.filter(p => !connectedPorts.has(p));
      }

      if (ports.length === 0) {
        this._log('没有发现新的串口设备');
        if (onProgress) onProgress('no_ports', '未发现串口设备');
        this._isConnecting = false;
        return [];
      }

      // ── 逐个探测波特率并连接 ──
      if (onProgress) onProgress('probing', `正在自动识别 ${ports.length} 个设备...`);

      const results = [];
      for (let i = 0; i < ports.length; i++) {
        const port = ports[i];
        if (onProgress) onProgress('probing', `正在识别设备 ${i + 1}/${ports.length}...`);

        const result = await this._probeAndConnect(port);
        if (result) {
          results.push(result);
          if (onProgress) onProgress('connected', `已识别: ${this._getDeviceLabel(result.type)} (${i + 1}/${ports.length})`);
        } else {
          this._log(`端口 ${i + 1} 识别失败，跳过`, 'warn');
        }
      }

      // ── 脚垫 MAC 查询和自动绑定 ──
      const footpads = results.filter(r => r.type === 'footpad');
      if (footpads.length > 0) {
        if (onProgress) onProgress('configuring', '正在查询脚垫 MAC 地址...');
        await this._queryAllFootpadMacs();
        this._autoBindFootpads();
      }

      this._notifyDeviceListChange();

      // 汇总
      const summary = this.getStatusSummary();
      this._log(`一键连接完成：手套 ${summary.glove}，坐垫 ${summary.seat}，脚垫 ${summary.footpad}`);
      if (onProgress) onProgress('done', `连接完成：共 ${summary.total} 个设备`);

      this._isConnecting = false;
      return results;

    } catch (e) {
      this._log(`一键连接失败: ${e.message}`, 'error');
      if (onProgress) onProgress('error', `连接失败: ${e.message}`);
      // 确保关闭自动选择模式
      if (isElectron()) {
        try { await window.electronAPI.stopAutoSelect(); } catch (_) {}
      }
      this._isConnecting = false;
      return [];
    }
  }

  /**
   * 授权并连接一个新串口设备
   * 
   * Electron 环境下也会自动选择（主进程自动返回下一个可用端口）
   * 
   * @param {boolean} [autoConnect=true] - 获取端口后是否自动探测连接
   * @returns {Promise<{id: string, type: string}|null>}
   */
  async authorizeAndConnect(autoConnect = true) {
    if (!('serial' in navigator)) {
      this._log('浏览器不支持 Web Serial API', 'error');
      return null;
    }

    try {
      const port = await navigator.serial.requestPort();

      // 检查是否已连接
      for (const [, conn] of this.connections) {
        if (conn.port === port) {
          this._log('该设备已连接', 'warn');
          return null;
        }
      }

      if (!autoConnect) {
        this._log('端口已获取（未连接）');
        return { id: null, type: 'authorized' };
      }

      const result = await this._probeAndConnect(port);
      if (result && result.type === 'footpad') {
        const conn = this.connections.get(result.id);
        if (conn) {
          setTimeout(async () => {
            await conn.queryMacAddress();
            this._autoBindFootpad(conn);
            this._notifyDeviceListChange();
          }, 500);
        }
      }
      this._notifyDeviceListChange();
      return result;
    } catch (e) {
      if (e.name === 'NotFoundError') {
        this._log('没有可用的串口设备');
      } else {
        this._log(`连接失败: ${e.message}`, 'error');
      }
      return null;
    }
  }

  /**
   * 获取已授权端口数量（无弹窗）
   * @returns {Promise<number>}
   */
  async getAuthorizedPortCount() {
    if (!('serial' in navigator)) return 0;
    try {
      const ports = await navigator.serial.getPorts();
      return ports.length;
    } catch (_) {
      return 0;
    }
  }

  /**
   * 连接一个新设备 — 兼容旧 API
   * @deprecated 请使用 authorizeAndConnect()
   */
  async connectOneDevice() {
    return this.authorizeAndConnect(true);
  }

  /**
   * 断开指定设备
   */
  async disconnectDevice(deviceId) {
    const conn = this.connections.get(deviceId);
    if (conn) {
      await conn.disconnect();
      this.connections.delete(deviceId);
      this._notifyDeviceListChange();
    }
  }

  /**
   * 断开所有设备
   */
  async disconnectAll() {
    const promises = [];
    for (const [, conn] of this.connections) {
      promises.push(conn.disconnect());
    }
    await Promise.all(promises);
    this.connections.clear();
    this._notifyDeviceListChange();
    this._log('所有设备已断开');

    // 重置 Electron 的已选端口记录
    if (isElectron()) {
      try { await window.electronAPI.resetSelected(); } catch (_) {}
    }
  }

  /**
   * 获取设备列表
   */
  getDeviceList() {
    const list = [];
    for (const [id, conn] of this.connections) {
      list.push({
        id,
        deviceType: conn.deviceType,
        baudRate: conn.baudRate,
        isConnected: conn.isConnected,
        isOnline: conn._isOnline,
        fps: conn.fps,
        macAddress: conn.macAddress,
        footpadIndex: conn.footpadIndex,
      });
    }
    return list;
  }

  /**
   * 获取设备状态摘要
   */
  getStatusSummary() {
    const list = this.getDeviceList();
    return {
      total: list.length,
      glove: list.filter(d => d.deviceType === 'glove').length,
      seat: list.filter(d => d.deviceType === 'seat').length,
      footpad: list.filter(d => d.deviceType === 'footpad').length,
      allOnline: list.length > 0 && list.every(d => d.isOnline),
      footpadConfigured: list.filter(d => d.deviceType === 'footpad' && d.footpadIndex).length,
    };
  }

  /**
   * 获取指定通道的连接
   * @param {string} channel - 'HL'|'HR'|'seat'|'foot1'|'foot2'|'foot3'|'foot4'
   * @returns {SerialPortConnection|null}
   */
  getConnectionByChannel(channel) {
    if (channel === 'HL' || channel === 'HR') {
      for (const [, conn] of this.connections) {
        if (conn.deviceType === 'glove') return conn;
      }
    } else if (channel === 'seat') {
      for (const [, conn] of this.connections) {
        if (conn.deviceType === 'seat') return conn;
      }
    } else if (channel.startsWith('foot')) {
      const idx = parseInt(channel.replace('foot', ''));
      for (const [, conn] of this.connections) {
        if (conn.deviceType === 'footpad' && conn.footpadIndex === idx) return conn;
      }
    }
    return null;
  }

  /**
   * 检查指定评估所需的设备是否全部就绪
   * @param {string} assessmentType - 'grip'|'sitstand'|'standing'|'gait'
   * @returns {{ ready: boolean, missing: string[], connected: string[] }}
   */
  checkAssessmentReady(assessmentType) {
    const channels = ASSESSMENT_CHANNELS[assessmentType] || [];
    const connected = [];
    const missing = [];

    for (const ch of channels) {
      const conn = this.getConnectionByChannel(ch);
      if (conn && conn.isConnected) {
        connected.push(ch);
      } else {
        missing.push(ch);
      }
    }

    return {
      ready: missing.length === 0,
      missing,
      connected,
    };
  }

  // ============================================================
  // 帧数据订阅（支持多订阅者）
  // ============================================================

  /**
   * 添加帧数据监听器
   * @param {function} cb - (channel, matrix, meta) => void
   * @returns {function} 取消订阅函数
   */
  addFrameListener(cb) {
    this._frameListeners.push(cb);
    return () => {
      this._frameListeners = this._frameListeners.filter(l => l !== cb);
    };
  }

  /**
   * 兼容旧 API：设置帧回调
   */
  onFrame(cb) {
    return this.addFrameListener(cb);
  }

  _broadcastFrame(channel, matrix, meta) {
    for (const listener of this._frameListeners) {
      try {
        listener(channel, matrix, meta);
      } catch (e) {
        console.error('[DeviceManager] 帧回调错误:', e);
      }
    }
  }

  // ============================================================
  // 脚垫配置
  // ============================================================

  getFootpadConfig() {
    return { ...this._footpadConfig };
  }

  setFootpadConfig(config) {
    this._footpadConfig = { ...config };
    this._saveFootpadConfig();

    // 重新绑定已连接的脚垫
    for (const [, conn] of this.connections) {
      if (conn.deviceType === 'footpad' && conn.macAddress) {
        const idx = this._footpadConfig[conn.macAddress];
        if (idx) {
          conn.setFootpadIndex(idx);
        }
      }
    }

    this._notifyDeviceListChange();
    this._log('脚垫配置已更新');
  }

  getFootpadMacList() {
    const macs = [];
    for (const [id, conn] of this.connections) {
      if (conn.deviceType === 'footpad') {
        macs.push({
          id,
          macAddress: conn.macAddress || '未知',
          footpadIndex: conn.footpadIndex,
        });
      }
    }
    return macs;
  }

  async refreshFootpadMacs() {
    await this._queryAllFootpadMacs();
    this._autoBindFootpads();
    this._notifyDeviceListChange();
  }

  // ============================================================
  // 回调设置
  // ============================================================

  onDeviceListChange(cb) { this._onDeviceListChange = cb; }
  onLog(cb) { this._onLog = cb; }
  onStatusChange(cb) { this._onStatusChange = cb; }

  // ============================================================
  // 内部 - 波特率探测与连接
  // ============================================================

  async _probeAndConnect(port) {
    this._counter++;
    const deviceId = `dev_${this._counter}`;

    for (const baudRate of CANDIDATE_BAUD_RATES) {
      this._log(`[${deviceId}] 尝试波特率 ${baudRate}...`);

      try {
        await port.open({ baudRate });

        const valid = await this._validateBaudRate(port, BAUD_VALIDATE_TIMEOUT);

        if (valid) {
          this._log(`[${deviceId}] 波特率 ${baudRate} 验证成功`);
          try { await port.close(); } catch (_) {}

          // 创建连接
          const conn = new SerialPortConnection(deviceId);
          this._setupConnectionCallbacks(conn);

          const success = await conn.connect(port, baudRate);
          if (success) {
            this.connections.set(deviceId, conn);
            this._notifyDeviceListChange();
            return { id: deviceId, type: conn.deviceType };
          }
        } else {
          this._log(`[${deviceId}] 波特率 ${baudRate} 未检测到有效帧`);
          try { await port.close(); } catch (_) {}
        }
      } catch (e) {
        this._log(`[${deviceId}] 波特率 ${baudRate} 失败: ${e.message}`, 'warn');
        try { await port.close(); } catch (_) {}
      }
    }

    this._log(`[${deviceId}] 所有波特率探测失败`, 'error');
    return null;
  }

  async _validateBaudRate(port, timeoutMs) {
    return new Promise((resolve) => {
      let found = false;
      const tempBuf = [];
      const reader = port.readable.getReader();

      const timer = setTimeout(() => {
        if (!found) {
          reader.cancel().catch(() => {});
          resolve(false);
        }
      }, timeoutMs);

      const read = async () => {
        try {
          while (!found) {
            const { value, done } = await reader.read();
            if (done) break;
            if (value) {
              for (let i = 0; i < value.length; i++) {
                tempBuf.push(value[i]);
                if (tempBuf.length >= 4) {
                  const l = tempBuf.length;
                  if (tempBuf[l - 4] === 0xAA && tempBuf[l - 3] === 0x55 &&
                      tempBuf[l - 2] === 0x03 && tempBuf[l - 1] === 0x99) {
                    found = true;
                    clearTimeout(timer);
                    try { reader.releaseLock(); } catch (_) {}
                    resolve(true);
                    return;
                  }
                }
              }
            }
          }
        } catch (_) {}
        finally {
          try { reader.releaseLock(); } catch (_) {}
        }
      };
      read();
    });
  }

  _setupConnectionCallbacks(conn) {
    conn.onFrame((channel, matrix, meta) => {
      this._broadcastFrame(channel, matrix, meta);
    });

    conn.onLog((msg, type) => {
      this._log(msg, type);
    });

    conn.onStatus((status, id) => {
      if (this._onStatusChange) {
        this._onStatusChange(id, status);
      }
      this._notifyDeviceListChange();
    });
  }

  // ============================================================
  // 内部 - 脚垫 MAC 查询与绑定
  // ============================================================

  /**
   * 查询所有脚垫的 MAC 地址
   * 串行执行（避免并发 AT 指令冲突）
   * 每个脚垫会持续重试直到获取到 MAC 地址
   */
  async _queryAllFootpadMacs() {
    const footpads = [];
    for (const [id, conn] of this.connections) {
      if (conn.deviceType === 'footpad' && !conn.macAddress) {
        footpads.push({ id, conn });
      }
    }
    
    console.log(`[AT-DEBUG] 开始查询 ${footpads.length} 个脚垫的 MAC 地址`);
    console.log(`[AT-DEBUG] 脚垫列表:`, footpads.map(f => `${f.id}(label=${f.conn.label})`));
    this._log(`开始查询 ${footpads.length} 个脚垫的 MAC 地址（将持续重试直到成功）`);
    
    for (const { id, conn } of footpads) {
      console.log(`[AT-DEBUG] ========== 开始查询脚垫 ${id} (label=${conn.label}) ==========`);
      console.log(`[AT-DEBUG] 端口状态: isConnected=${conn.isConnected}, port.readable=${!!conn.port?.readable}, port.writable=${!!conn.port?.writable}`);
      this._log(`正在查询脚垫 ${id} 的 MAC 地址...`);
      const mac = await conn.queryMacAddress(30, 2000); // 最多重试30次，每次2秒
      if (mac) {
        console.log(`[AT-DEBUG] ✅✅ 脚垫 ${id} MAC 获取成功: ${mac}`);
        this._log(`脚垫 ${id} MAC 地址: ${mac}`);
      } else {
        console.log(`[AT-DEBUG] ❌❌ 脚垫 ${id} MAC 获取失败，已重试30次`);
        this._log(`脚垫 ${id} MAC 地址查询失败`, 'error');
      }
    }
  }

  _autoBindFootpads() {
    for (const [, conn] of this.connections) {
      if (conn.deviceType === 'footpad') {
        this._autoBindFootpad(conn);
      }
    }
  }

  _autoBindFootpad(conn) {
    if (!conn.macAddress) return;
    
    // 统一转大写进行匹配
    const macUpper = conn.macAddress.toUpperCase();
    
    // 优先使用硬编码映射表
    let idx = null;
    for (const [mac, footIdx] of Object.entries(HARDCODED_FOOTPAD_MAC_MAP)) {
      if (mac.toUpperCase() === macUpper) {
        idx = footIdx;
        break;
      }
    }
    
    // 其次使用 localStorage 配置
    if (!idx) {
      idx = this._footpadConfig[conn.macAddress] || this._footpadConfig[macUpper];
    }
    
    if (idx) {
      conn.setFootpadIndex(idx);
      this._log(`脚垫 MAC ${macUpper} → foot${idx}`);
    } else {
      this._log(`脚垫 MAC ${macUpper} 未在映射表中找到，请检查配置`, 'warn');
    }
  }

  // ============================================================
  // 内部 - 脚垫配置持久化
  // ============================================================

  _loadFootpadConfig() {
    try {
      const raw = localStorage.getItem(FOOTPAD_CONFIG_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (_) {
      return {};
    }
  }

  _saveFootpadConfig() {
    try {
      localStorage.setItem(FOOTPAD_CONFIG_KEY, JSON.stringify(this._footpadConfig));
    } catch (_) {}
  }

  // ============================================================
  // 内部 - 工具方法
  // ============================================================

  _getDeviceLabel(type) {
    const labels = { glove: '手套', seat: '坐垫', footpad: '脚垫' };
    return labels[type] || '未知设备';
  }

  _notifyDeviceListChange() {
    if (this._onDeviceListChange) {
      this._onDeviceListChange(this.getDeviceList());
    }
  }

  _log(msg, type = 'info') {
    const prefix = '[DeviceManager]';
    if (this._onLog) this._onLog(`${prefix} ${msg}`, type);
    if (type === 'error') console.error(`${prefix} ${msg}`);
    else if (type === 'warn') console.warn(`${prefix} ${msg}`);
    else console.log(`${prefix} ${msg}`);
  }

  // ============================================================
  // 清理
  // ============================================================

  destroy() {
    this.disconnectAll();
    this._frameListeners = [];
    this._onDeviceListChange = null;
    this._onLog = null;
    this._onStatusChange = null;
  }
}

// ============================================================
// 单例
// ============================================================

let _instance = null;

export function getDeviceManager() {
  if (!_instance) {
    _instance = new DeviceManager();
  }
  return _instance;
}

export default DeviceManager;
