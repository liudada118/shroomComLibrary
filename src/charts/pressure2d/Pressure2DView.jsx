/**
 * Pressure2DView v4.0 — 医学级 2D 压力热力图实时展示组件
 *
 * 核心渲染管线：
 * 1. 原始矩阵 → 高斯模糊去噪（σ=1.2, 5×5核）
 * 2. 模糊矩阵 → 双三次插值上采样到高分辨率
 * 3. 高分辨率数据 → 颜色LUT映射 + alpha边缘渐变（消除锯齿）
 * 4. 离屏Canvas → 主Canvas（浏览器高质量缩放）
 *
 * 支持：insole / cushion / hand / multi-insole
 */
import { useRef, useEffect, useCallback, memo } from 'react';

/* ═══════════════════════════════════════════
   颜色查找表（LUT）— 预计算 256 级颜色
   ═══════════════════════════════════════════ */
const LUT_SIZE = 256;
const COLOR_LUT_R = new Uint8Array(LUT_SIZE);
const COLOR_LUT_G = new Uint8Array(LUT_SIZE);
const COLOR_LUT_B = new Uint8Array(LUT_SIZE);

(function buildLUT() {
  // 5段渐变：深蓝 → 蓝 → 青 → 绿 → 黄 → 红
  const stops = [
    { t: 0.00, r: 8,   g: 29,  b: 88  },   // 深蓝
    { t: 0.15, r: 15,  g: 82,  b: 186 },   // 蓝
    { t: 0.30, r: 0,   g: 181, b: 226 },   // 青
    { t: 0.45, r: 30,  g: 222, b: 120 },   // 青绿
    { t: 0.60, r: 120, g: 240, b: 40  },   // 绿
    { t: 0.75, r: 240, g: 228, b: 20  },   // 黄
    { t: 0.90, r: 255, g: 140, b: 0   },   // 橙
    { t: 1.00, r: 220, g: 20,  b: 0   },   // 红
  ];

  for (let i = 0; i < LUT_SIZE; i++) {
    const t = i / (LUT_SIZE - 1);
    // 找到所在区间
    let s0 = stops[0], s1 = stops[1];
    for (let j = 1; j < stops.length; j++) {
      if (t <= stops[j].t) { s0 = stops[j - 1]; s1 = stops[j]; break; }
    }
    const f = s1.t > s0.t ? (t - s0.t) / (s1.t - s0.t) : 0;
    // 平滑插值（smoothstep）
    const sf = f * f * (3 - 2 * f);
    COLOR_LUT_R[i] = Math.round(s0.r + (s1.r - s0.r) * sf);
    COLOR_LUT_G[i] = Math.round(s0.g + (s1.g - s0.g) * sf);
    COLOR_LUT_B[i] = Math.round(s0.b + (s1.b - s0.b) * sf);
  }
})();

/* ═══════════════════════════════════════════
   图像处理核心函数
   ═══════════════════════════════════════════ */

/**
 * 高斯模糊（对浮点矩阵进行就地模糊）
 * 使用可分离的两遍模糊（水平+垂直），5×5 核，σ≈1.4
 */
function gaussianBlur(matrix, passes = 1) {
  const rows = matrix.length;
  const cols = matrix[0]?.length || 0;
  if (rows < 3 || cols < 3) return matrix;

  // 5-tap 高斯核 (σ≈1.4): [1, 4, 6, 4, 1] / 16
  const kernel = [1 / 16, 4 / 16, 6 / 16, 4 / 16, 1 / 16];
  const kHalf = 2;

  // 创建输出缓冲区
  let src = matrix.map(row => Float32Array.from(row));
  let tmp = src.map(row => new Float32Array(row.length));

  for (let pass = 0; pass < passes; pass++) {
    // 水平模糊
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        let sum = 0;
        for (let k = -kHalf; k <= kHalf; k++) {
          const cc = Math.min(cols - 1, Math.max(0, c + k));
          sum += src[r][cc] * kernel[k + kHalf];
        }
        tmp[r][c] = sum;
      }
    }
    // 垂直模糊
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        let sum = 0;
        for (let k = -kHalf; k <= kHalf; k++) {
          const rr = Math.min(rows - 1, Math.max(0, r + k));
          sum += tmp[rr][c] * kernel[k + kHalf];
        }
        src[r][c] = sum;
      }
    }
  }

  return src.map(row => Array.from(row));
}

/**
 * 双三次插值上采样 + 颜色映射 → ImageData
 * 使用 Catmull-Rom 样条实现真正的双三次插值
 */
function renderSmoothHeatmap(matrix, targetW, targetH, maxVal, fadeThreshold = 3) {
  const rows = matrix.length;
  const cols = matrix[0]?.length || 0;
  if (!rows || !cols) return null;

  const imgData = new ImageData(targetW, targetH);
  const pixels = imgData.data;
  const invMax = maxVal > 0 ? (LUT_SIZE - 1) / maxVal : 0;

  // Catmull-Rom 插值函数
  const cubicInterp = (p0, p1, p2, p3, t) => {
    const t2 = t * t;
    const t3 = t2 * t;
    return 0.5 * (
      (2 * p1) +
      (-p0 + p2) * t +
      (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
      (-p0 + 3 * p1 - 3 * p2 + p3) * t3
    );
  };

  // 安全取值
  const getVal = (r, c) => {
    r = Math.max(0, Math.min(rows - 1, r));
    c = Math.max(0, Math.min(cols - 1, c));
    return matrix[r][c] || 0;
  };

  for (let py = 0; py < targetH; py++) {
    const srcY = (py + 0.5) / targetH * rows - 0.5;
    const iy = Math.floor(srcY);
    const fy = srcY - iy;

    for (let px = 0; px < targetW; px++) {
      const srcX = (px + 0.5) / targetW * cols - 0.5;
      const ix = Math.floor(srcX);
      const fx = srcX - ix;

      // 双三次插值：先对4行做水平插值，再对结果做垂直插值
      const col0 = cubicInterp(getVal(iy - 1, ix - 1), getVal(iy - 1, ix), getVal(iy - 1, ix + 1), getVal(iy - 1, ix + 2), fx);
      const col1 = cubicInterp(getVal(iy, ix - 1), getVal(iy, ix), getVal(iy, ix + 1), getVal(iy, ix + 2), fx);
      const col2 = cubicInterp(getVal(iy + 1, ix - 1), getVal(iy + 1, ix), getVal(iy + 1, ix + 1), getVal(iy + 1, ix + 2), fx);
      const col3 = cubicInterp(getVal(iy + 2, ix - 1), getVal(iy + 2, ix), getVal(iy + 2, ix + 1), getVal(iy + 2, ix + 2), fx);

      let val = cubicInterp(col0, col1, col2, col3, fy);
      val = Math.max(0, val); // 防止负值

      const offset = (py * targetW + px) * 4;

      if (val < 0.5) {
        // 完全透明/背景
        pixels[offset] = 245;
        pixels[offset + 1] = 247;
        pixels[offset + 2] = 250;
        pixels[offset + 3] = 255;
      } else if (val < fadeThreshold) {
        // 边缘渐变区域：从背景色平滑过渡到热力图颜色
        const alpha = val / fadeThreshold;
        // smoothstep
        const sa = alpha * alpha * (3 - 2 * alpha);
        const lutIdx = Math.min(LUT_SIZE - 1, Math.round(val * invMax));
        const cr = COLOR_LUT_R[lutIdx];
        const cg = COLOR_LUT_G[lutIdx];
        const cb = COLOR_LUT_B[lutIdx];
        // 与背景色混合
        pixels[offset]     = Math.round(245 * (1 - sa) + cr * sa);
        pixels[offset + 1] = Math.round(247 * (1 - sa) + cg * sa);
        pixels[offset + 2] = Math.round(250 * (1 - sa) + cb * sa);
        pixels[offset + 3] = 255;
      } else {
        const lutIdx = Math.min(LUT_SIZE - 1, Math.round(val * invMax));
        pixels[offset]     = COLOR_LUT_R[lutIdx];
        pixels[offset + 1] = COLOR_LUT_G[lutIdx];
        pixels[offset + 2] = COLOR_LUT_B[lutIdx];
        pixels[offset + 3] = 255;
      }
    }
  }

  return imgData;
}

/* ═══════════════════════════════════════════
   绘制辅助函数
   ═══════════════════════════════════════════ */

function roundRectClip(ctx, x, y, w, h, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + w - radius, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
  ctx.lineTo(x + w, y + h - radius);
  ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
  ctx.lineTo(x + radius, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function drawCOP(ctx, copX, copY, x, y, w, h, rows, cols, color = '#FF3333') {
  if (copX == null || copY == null || isNaN(copX) || isNaN(copY)) return;
  const px = x + (copY / cols) * w;
  const py = y + (copX / rows) * h;

  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.moveTo(px, y);
  ctx.lineTo(px, y + h);
  ctx.moveTo(x, py);
  ctx.lineTo(x + w, py);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.globalAlpha = 1;

  // 外圈
  ctx.beginPath();
  ctx.arc(px, py, 6, 0, Math.PI * 2);
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.stroke();
  // 内点
  ctx.beginPath();
  ctx.arc(px, py, 2.5, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

function drawColorBar(ctx, x, y, w, h, maxVal) {
  // 渐变条
  for (let i = 0; i < h; i++) {
    const t = 1 - i / h;
    const lutIdx = Math.round(t * (LUT_SIZE - 1));
    ctx.fillStyle = `rgb(${COLOR_LUT_R[lutIdx]},${COLOR_LUT_G[lutIdx]},${COLOR_LUT_B[lutIdx]})`;
    ctx.fillRect(x, y + i, w, 1);
  }
  // 圆角边框
  ctx.strokeStyle = 'rgba(0,0,0,0.06)';
  ctx.lineWidth = 0.5;
  roundRectClip(ctx, x, y, w, h, 3);
  ctx.stroke();

  // 刻度
  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.font = '500 10px -apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  const ticks = 5;
  for (let i = 0; i <= ticks; i++) {
    const ty = y + (i / ticks) * h;
    const val = maxVal * (1 - i / ticks);
    ctx.fillText(Math.round(val), x + w + 4, ty);
  }
}

function drawLabel(ctx, text, x, y) {
  ctx.fillStyle = 'rgba(0,0,0,0.5)';
  ctx.font = '600 11px -apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText(text, x, y);
}

function drawPanelFrame(ctx, x, y, w, h, radius = 8) {
  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,0.04)';
  ctx.shadowBlur = 6;
  ctx.shadowOffsetY = 1;
  ctx.strokeStyle = 'rgba(0,0,0,0.06)';
  ctx.lineWidth = 0.5;
  roundRectClip(ctx, x, y, w, h, radius);
  ctx.stroke();
  ctx.restore();
}

/* ═══════════════════════════════════════════
   渲染管线：矩阵 → 模糊 → 上采样 → Canvas
   ═══════════════════════════════════════════ */

/**
 * 完整渲染管线：高斯模糊 → 双三次插值上采样 → 颜色映射
 * @returns {HTMLCanvasElement} 离屏canvas
 */
function renderPipeline(matrix, drawW, drawH, maxV, blurPasses = 2, fadeThreshold = 3) {
  const rows = matrix.length;
  const cols = matrix[0]?.length || 0;
  if (!rows || !cols) return null;

  // Step 1: 高斯模糊去噪
  const blurred = gaussianBlur(matrix, blurPasses);

  // Step 2: 确定上采样分辨率
  // 使用较高倍率确保平滑，但限制在合理范围内避免性能问题
  const upScale = Math.max(8, Math.ceil(Math.max(drawW, drawH) / Math.max(rows, cols)));
  const upW = Math.min(Math.round(drawW), cols * upScale);
  const upH = Math.min(Math.round(drawH), rows * upScale);

  // Step 3: 双三次插值 + 颜色映射
  const imgData = renderSmoothHeatmap(blurred, upW, upH, maxV, fadeThreshold);
  if (!imgData) return null;

  // Step 4: 写入离屏canvas
  const offCanvas = document.createElement('canvas');
  offCanvas.width = upW;
  offCanvas.height = upH;
  const offCtx = offCanvas.getContext('2d');
  offCtx.putImageData(imgData, 0, 0);

  return offCanvas;
}

/* ═══════════════════════════════════════════
   Pressure2DView 组件
   ═══════════════════════════════════════════ */

function Pressure2DView({
  type = 'insole',
  dataRef,
  matrices,
  threshold = 0,
  cop,
  cops,
  labels,
  maxValue,
  style
}) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const maxValRef = useRef(100);

  /** 计算矩阵最大值并平滑 */
  const updateMaxVal = useCallback((matrix) => {
    let curMax = 0;
    for (let r = 0; r < matrix.length; r++) {
      const row = matrix[r];
      if (!row) continue;
      for (let c = 0; c < row.length; c++) {
        if (row[c] > curMax) curMax = row[c];
      }
    }
    if (maxValue) {
      maxValRef.current = maxValue;
    } else {
      maxValRef.current = maxValRef.current * 0.92 + Math.max(curMax, 10) * 0.08;
    }
    return maxValRef.current;
  }, [maxValue]);

  /** 绘制单个热力图面板 */
  const drawHeatmapPanel = useCallback((ctx, matrix, x, y, w, h, label, copData, blurPasses = 2) => {
    const rows = matrix.length;
    const cols = matrix[0]?.length || 0;
    const maxV = maxValRef.current;

    // 根据矩阵大小调整模糊强度
    const blur = rows <= 16 ? 1 : blurPasses;
    // 根据数据范围调整边缘渐变阈值
    const fadeThresh = Math.max(2, maxV * 0.02);

    const img = renderPipeline(matrix, w * 1.5, h * 1.5, maxV, blur, fadeThresh);
    if (img) {
      ctx.save();
      roundRectClip(ctx, x, y, w, h, 6);
      ctx.clip();
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, x, y, w, h);
      ctx.restore();
    }
    drawPanelFrame(ctx, x, y, w, h, 6);
    if (label) drawLabel(ctx, label, x + w / 2, y + h + 4);

    if (copData) {
      drawCOP(ctx, copData.x, copData.y, x, y, w, h, rows, cols, '#FF3333');
    }
  }, []);

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    const pxW = Math.round(rect.width * dpr);
    const pxH = Math.round(rect.height * dpr);
    if (canvas.width !== pxW || canvas.height !== pxH) {
      canvas.width = pxW;
      canvas.height = pxH;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const W = rect.width;
    const H = rect.height;

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#F5F7FA';
    ctx.fillRect(0, 0, W, H);

    const showWaiting = (msg = '等待数据...') => {
      ctx.fillStyle = 'rgba(0,0,0,0.12)';
      ctx.font = '500 13px -apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(msg, W / 2, H / 2);
    };

    // ═══════════════════════════════════════
    // 单矩阵模式：insole / cushion
    // ═══════════════════════════════════════
    if (type === 'insole' || type === 'cushion') {
      const matrix = dataRef?.current;
      if (!matrix || !matrix.length || !matrix[0]?.length) {
        showWaiting();
        animRef.current = requestAnimationFrame(render);
        return;
      }

      const rows = matrix.length;
      const cols = matrix[0].length;
      updateMaxVal(matrix);

      const padding = 24;
      const colorBarW = 14;
      const colorBarGap = 32;
      const availW = W - padding * 2 - colorBarW - colorBarGap;
      const availH = H - padding * 2 - 22;

      if (type === 'insole') {
        // 64×64 → 左32列=左脚，右32列=右脚
        const halfCols = Math.floor(cols / 2);
        const gap = 16;
        const footW = (availW - gap) / 2;
        const footH = availH;
        const cellAspect = rows / halfCols;
        let drawW = footW;
        let drawH = drawW * cellAspect;
        if (drawH > footH) { drawH = footH; drawW = drawH / cellAspect; }

        const leftX = padding + (footW - drawW) / 2;
        const rightX = padding + footW + gap + (footW - drawW) / 2;
        const topY = padding + (footH - drawH) / 2;

        const leftMatrix = matrix.map(row => row.slice(0, halfCols));
        const rightMatrix = matrix.map(row => row.slice(halfCols));

        drawHeatmapPanel(ctx, leftMatrix, leftX, topY, drawW, drawH, '左脚', null, 2);
        drawHeatmapPanel(ctx, rightMatrix, rightX, topY, drawW, drawH, '右脚', null, 2);

        if (cop) {
          drawCOP(ctx, cop.x, cop.y, leftX, topY, drawW * 2 + gap, drawH, rows, cols, '#FF3333');
        }
      } else {
        // 坐垫：单矩阵居中
        const cellAspect = rows / cols;
        let drawW = availW;
        let drawH = drawW * cellAspect;
        if (drawH > availH) { drawH = availH; drawW = drawH / cellAspect; }
        const drawX = padding + (availW - drawW) / 2;
        const drawY = padding + (availH - drawH) / 2;

        drawHeatmapPanel(ctx, matrix, drawX, drawY, drawW, drawH, labels?.[0] || '坐垫压力', cop, 2);
      }

      drawColorBar(ctx, W - padding - colorBarW, padding, colorBarW, availH, maxValRef.current);

    // ═══════════════════════════════════════
    // 多脚垫模式（步态评估：4个脚垫）
    // ═══════════════════════════════════════
    } else if (type === 'multi-insole') {
      const mats = dataRef?.current || matrices || [];
      const copList = cops || [];
      const labelList = labels || [];
      const count = mats.length || 4;

      if (mats.length === 0 || !mats[0]) {
        showWaiting();
        animRef.current = requestAnimationFrame(render);
        return;
      }

      // 计算全局最大值
      let curMax = 0;
      mats.forEach(m => {
        if (!m) return;
        for (let r = 0; r < m.length; r++) {
          for (let c = 0; c < (m[r]?.length || 0); c++) {
            if (m[r][c] > curMax) curMax = m[r][c];
          }
        }
      });
      if (maxValue) {
        maxValRef.current = maxValue;
      } else {
        maxValRef.current = maxValRef.current * 0.92 + Math.max(curMax, 10) * 0.08;
      }

      const padding = 18;
      const colorBarW = 12;
      const colorBarGap = 28;
      const gap = 10;
      const availW = W - padding * 2 - colorBarW - colorBarGap;
      const availH = H - padding * 2 - 18;

      const gridCols = 2;
      const gridRows = Math.ceil(count / gridCols);
      const cellW = (availW - gap * (gridCols - 1)) / gridCols;
      const cellH = (availH - gap * (gridRows - 1)) / gridRows;

      for (let i = 0; i < count; i++) {
        const col = i % gridCols;
        const row = Math.floor(i / gridCols);
        const cx = padding + col * (cellW + gap);
        const cy = padding + row * (cellH + gap);

        const m = mats[i];
        if (!m || !m.length) continue;

        const mRows = m.length;
        const mCols = m[0]?.length || 0;
        const aspect = mRows / mCols;
        let dw = cellW;
        let dh = dw * aspect;
        if (dh > cellH - 18) { dh = cellH - 18; dw = dh / aspect; }
        const dx = cx + (cellW - dw) / 2;
        const dy = cy + (cellH - 18 - dh) / 2;

        drawHeatmapPanel(ctx, m, dx, dy, dw, dh, labelList[i] || `脚垫${i + 1}`, copList[i], 2);
      }

      drawColorBar(ctx, W - padding - colorBarW, padding, colorBarW, availH, maxValRef.current);

    // ═══════════════════════════════════════
    // 手套模式
    // ═══════════════════════════════════════
    } else if (type === 'hand') {
      const data = dataRef?.current;
      if (!data) {
        showWaiting();
        animRef.current = requestAnimationFrame(render);
        return;
      }

      if (Array.isArray(data) && Array.isArray(data[0])) {
        // 矩阵模式（16×16）
        updateMaxVal(data);

        const padding = 24;
        const colorBarW = 14;
        const colorBarGap = 32;
        const availW = W - padding * 2 - colorBarW - colorBarGap;
        const availH = H - padding * 2 - 22;
        const rows = data.length;
        const cols = data[0].length;
        const aspect = rows / cols;
        let drawW = availW;
        let drawH = drawW * aspect;
        if (drawH > availH) { drawH = availH; drawW = drawH / aspect; }
        const drawX = padding + (availW - drawW) / 2;
        const drawY = padding + (availH - drawH) / 2;

        drawHeatmapPanel(ctx, data, drawX, drawY, drawW, drawH, labels?.[0] || '手部压力', null, 1);
        drawColorBar(ctx, W - padding - colorBarW, padding, colorBarW, availH, maxValRef.current);
      } else {
        // 一维传感器数组 → 气泡图（fallback）
        const values = Array.isArray(data) ? data : [data];
        let curMax = Math.max(...values, 10);
        maxValRef.current = maxValRef.current * 0.92 + curMax * 0.08;

        const padding = 30;
        const count = values.length;
        const nCols = Math.min(count, 8);
        const nRows = Math.ceil(count / nCols);
        const cellW = (W - padding * 2) / nCols;
        const cellH = (H - padding * 2 - 20) / nRows;
        const maxR = Math.min(cellW, cellH) * 0.38;

        values.forEach((v, i) => {
          const col = i % nCols;
          const row = Math.floor(i / nCols);
          const cx = padding + col * cellW + cellW / 2;
          const cy = padding + row * cellH + cellH / 2;
          const t = Math.min(v / maxValRef.current, 1);
          const radius = maxR * 0.3 + maxR * 0.7 * t;
          const lutIdx = Math.round(t * (LUT_SIZE - 1));

          const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 1.3);
          grad.addColorStop(0, `rgba(${COLOR_LUT_R[lutIdx]},${COLOR_LUT_G[lutIdx]},${COLOR_LUT_B[lutIdx]},0.8)`);
          grad.addColorStop(0.7, `rgba(${COLOR_LUT_R[lutIdx]},${COLOR_LUT_G[lutIdx]},${COLOR_LUT_B[lutIdx]},0.3)`);
          grad.addColorStop(1, `rgba(${COLOR_LUT_R[lutIdx]},${COLOR_LUT_G[lutIdx]},${COLOR_LUT_B[lutIdx]},0)`);
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(cx, cy, radius * 1.3, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.arc(cx, cy, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgb(${COLOR_LUT_R[lutIdx]},${COLOR_LUT_G[lutIdx]},${COLOR_LUT_B[lutIdx]})`;
          ctx.fill();
        });
      }
    }

    animRef.current = requestAnimationFrame(render);
  }, [type, dataRef, matrices, threshold, cop, cops, labels, maxValue, updateMaxVal, drawHeatmapPanel]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(render);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [render]);

  return (
    <div className="w-full h-full relative" style={{ background: '#F5F7FA', borderRadius: '12px', ...style }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block', imageRendering: 'auto' }}
      />
    </div>
  );
}

export default memo(Pressure2DView);
