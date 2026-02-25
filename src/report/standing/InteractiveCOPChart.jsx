import { useRef, useEffect, useState, useCallback } from 'react';

/** COP 轨迹专用颜色：亮红 → 白色 */
function copLineColor(t) {
  const r = 255;
  const g = Math.round(45 + t * (255 - 45));
  const b = Math.round(85 + t * (255 - 85));
  return `rgb(${r},${g},${b})`;
}

function heatColor(v, max) {
  if (v <= 0) return 'rgba(0,0,0,0)';
  const t = Math.min(v / max, 1);
  if (t < 0.25) { const s = t / 0.25; return `rgba(0,0,${Math.round(255*s)},0.3)`; }
  if (t < 0.5) { const s = (t-0.25)/0.25; return `rgba(0,${Math.round(255*s)},${Math.round(255*(1-s))},0.35)`; }
  if (t < 0.75) { const s = (t-0.5)/0.25; return `rgba(${Math.round(255*s)},255,0,0.4)`; }
  const s = (t-0.75)/0.25; return `rgba(255,${Math.round(255*(1-s))},0,0.45)`;
}

function normalizeSectionCoords(raw) {
  if (Array.isArray(raw)) return raw;
  if (raw && typeof raw === 'object') {
    const keys = Object.keys(raw).sort((a, b) => Number(a) - Number(b));
    return keys.map((k) => raw[k]);
  }
  return [[], [], [], []];
}

function getBounds(coords) {
  if (coords.length === 0) return { minR: 0, maxR: 0, minC: 0, maxC: 0 };
  let minR = Infinity, maxR = -Infinity, minC = Infinity, maxC = -Infinity;
  for (const [r, c] of coords) {
    if (r < minR) minR = r;
    if (r > maxR) maxR = r;
    if (c < minC) minC = c;
    if (c > maxC) maxC = c;
  }
  return { minR, maxR, minC, maxC };
}

/**
 * 计算坐标的紧凑边界（去掉离群噪音点）
 * 使用连通域分析，只保留最大的连通区域来计算边界
 */
function getTightBounds(allCoords) {
  if (allCoords.length === 0) return { minR: 0, maxR: 0, minC: 0, maxC: 0 };
  const coordSet = new Set(allCoords.map(([r, c]) => `${r},${c}`));
  const visited = new Set();
  const components = [];
  for (const [r, c] of allCoords) {
    const key = `${r},${c}`;
    if (visited.has(key)) continue;
    const queue = [[r, c]];
    visited.add(key);
    const component = [];
    while (queue.length > 0) {
      const [cr, cc] = queue.shift();
      component.push([cr, cc]);
      for (const [dr, dc] of [[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]]) {
        const nr = cr + dr, nc = cc + dc;
        const nk = `${nr},${nc}`;
        if (coordSet.has(nk) && !visited.has(nk)) {
          visited.add(nk);
          queue.push([nr, nc]);
        }
      }
    }
    components.push(component);
  }
  components.sort((a, b) => b.length - a.length);
  const mainComponent = components[0] || allCoords;
  let minR = Infinity, maxR = -Infinity, minC = Infinity, maxC = -Infinity;
  for (const [r, c] of mainComponent) {
    if (r < minR) minR = r;
    if (r > maxR) maxR = r;
    if (c < minC) minC = c;
    if (c > maxC) maxC = c;
  }
  return { minR, maxR, minC, maxC };
}

/**
 * 绘制单只脚: 足印轮廓 + 热力图 + COP轨迹 — 独立缩放充满半区
 */
function drawFootCOP(ctx, copPts, sectionCoords, peakMatrix, offsetX, width, canvasH, hoveredIdx, title, tightBounds) {
  const pad = 4;
  const titleH = 20;
  const drawW = width - pad * 2;
  const drawH = canvasH - titleH - pad * 2;

  // 标题
  ctx.fillStyle = '#333';
  ctx.font = 'bold 14px "Noto Sans SC", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(title, offsetX + width / 2, 16);

  const allCoords = sectionCoords ? sectionCoords.flat() : [];
  if (allCoords.length === 0 && copPts.length === 0) {
    ctx.fillStyle = '#999';
    ctx.font = '12px "Noto Sans SC", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('无数据', offsetX + width / 2, canvasH / 2);
    return;
  }

  // 使用紧凑边界（去掉离群噪音点）
  const bounds = tightBounds || getTightBounds(allCoords);
  let minR = bounds.minR;
  let maxR = bounds.maxR;
  let minC = bounds.minC;
  let maxC = bounds.maxC;
  // 只轻微扩展边界以包含 COP 点（最多2个单元格）
  for (const pt of copPts) {
    if (pt[0] < minR && pt[0] >= bounds.minR - 2) minR = Math.floor(pt[0]);
    if (pt[0] > maxR && pt[0] <= bounds.maxR + 2) maxR = Math.ceil(pt[0]);
    if (pt[1] < minC && pt[1] >= bounds.minC - 2) minC = Math.floor(pt[1]);
    if (pt[1] > maxC && pt[1] <= bounds.maxC + 2) maxC = Math.ceil(pt[1]);
  }

  const rowSpan = (maxR - minR + 1) || 1;
  const colSpan = (maxC - minC + 1) || 1;

  // 独立缩放，充满绘图区域
  const scale = Math.min(drawW / colSpan, drawH / rowSpan);
  const footW = colSpan * scale;
  const footH = rowSpan * scale;
  const footX = offsetX + pad + (drawW - footW) / 2;
  const footY = titleH + pad + (drawH - footH) / 2;

  // 网格
  ctx.strokeStyle = 'rgba(0,0,0,0.05)';
  ctx.lineWidth = 0.5;
  const gridStep = Math.max(4, Math.round(rowSpan / 8));
  for (let r = minR; r <= maxR; r += gridStep) {
    const gy = footY + (r - minR) * scale;
    ctx.beginPath(); ctx.moveTo(footX, gy); ctx.lineTo(footX + footW, gy); ctx.stroke();
  }
  for (let c = minC; c <= maxC; c += gridStep) {
    const gx = footX + (c - minC) * scale;
    ctx.beginPath(); ctx.moveTo(gx, footY); ctx.lineTo(gx, footY + footH); ctx.stroke();
  }

  // 足印轮廓 + 热力图
  if (allCoords.length > 0) {
    const pressureMap = new Map();
    let maxVal = 0;
    if (peakMatrix && peakMatrix.length === 64) {
      for (const [r, c] of allCoords) {
        const v = (peakMatrix[r] && peakMatrix[r][c]) || 0;
        if (v > 0) {
          pressureMap.set(`${r},${c}`, v);
          if (v > maxVal) maxVal = v;
        }
      }
    }

    const cellSize = Math.max(scale * 0.92, 2);
    for (const [r, c] of allCoords) {
      // 裁剪掉超出紧凑边界的离群点
      if (r < minR || r > maxR || c < minC || c > maxC) continue;
      const px = footX + (c - minC) * scale;
      const py = footY + (r - minR) * scale;
      const v = pressureMap.get(`${r},${c}`) || 0;
      if (v > 0 && maxVal > 0) {
        ctx.fillStyle = heatColor(v, maxVal);
      } else {
        ctx.fillStyle = 'rgba(180, 180, 180, 0.25)';
      }
      ctx.fillRect(px - cellSize / 2, py - cellSize / 2, cellSize, cellSize);
    }
  }

  // COP 轨迹
  if (copPts.length === 0) return;

  const toCanvas = (copX, copY) => ({
    px: footX + (copY - minC) * scale,
    py: footY + (copX - minR) * scale,
  });

  const n = copPts.length;
  if (n >= 2) {
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 4;
    for (let i = 0; i < n - 1; i++) {
      const from = toCanvas(copPts[i][0], copPts[i][1]);
      const to = toCanvas(copPts[i + 1][0], copPts[i + 1][1]);
      ctx.strokeStyle = 'rgba(0,0,0,0.4)';
      ctx.beginPath(); ctx.moveTo(from.px, from.py); ctx.lineTo(to.px, to.py); ctx.stroke();
    }
    ctx.lineWidth = 2.5;
    for (let i = 0; i < n - 1; i++) {
      const from = toCanvas(copPts[i][0], copPts[i][1]);
      const to = toCanvas(copPts[i + 1][0], copPts[i + 1][1]);
      const t = i / (n - 1);
      ctx.strokeStyle = copLineColor(t);
      ctx.beginPath(); ctx.moveTo(from.px, from.py); ctx.lineTo(to.px, to.py); ctx.stroke();
    }
  }

  if (hoveredIdx !== null && hoveredIdx >= 0 && hoveredIdx < n) {
    const { px, py } = toCanvas(copPts[hoveredIdx][0], copPts[hoveredIdx][1]);
    const t = n > 1 ? hoveredIdx / (n - 1) : 0;
    ctx.beginPath(); ctx.arc(px, py, 5, 0, Math.PI * 2);
    ctx.fillStyle = copLineColor(t); ctx.fill();
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke();
  }
}

export default function InteractiveCOPChart({ leftCopRaw, rightCopRaw, peakFrameData, leftSectionCoords, rightSectionCoords, peakMatrix }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [tooltip, setTooltip] = useState(null);

  const leftPanelCop = leftCopRaw || [];
  const rightPanelCop = rightCopRaw || [];
  const leftSC = leftSectionCoords ? normalizeSectionCoords(leftSectionCoords) : [[], [], [], []];
  const rightSC = rightSectionCoords ? normalizeSectionCoords(rightSectionCoords) : [[], [], [], []];

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const halfW = rect.width / 2;

    // 使用紧凑边界（去掉离群噪音点）
    const leftAll = leftSC.flat();
    const rightAll = rightSC.flat();
    const leftTightBounds = getTightBounds(leftAll);
    const rightTightBounds = getTightBounds(rightAll);

    const leftRowSpan = leftAll.length > 0 ? leftTightBounds.maxR - leftTightBounds.minR + 1 : 0;
    const rightRowSpan = rightAll.length > 0 ? rightTightBounds.maxR - rightTightBounds.minR + 1 : 0;
    const leftColSpan = leftAll.length > 0 ? leftTightBounds.maxC - leftTightBounds.minC + 1 : 0;
    const rightColSpan = rightAll.length > 0 ? rightTightBounds.maxC - rightTightBounds.minC + 1 : 0;
    const maxRowSpan = Math.max(leftRowSpan, rightRowSpan) || 1;
    const maxColSpan = Math.max(leftColSpan, rightColSpan) || 1;

    const pad = 4; const titleH = 20;
    const drawW = halfW - pad * 2;
    const scaleByW = drawW / maxColSpan;
    const neededH = titleH + pad * 2 + maxRowSpan * scaleByW;
    // 去掉 800px 上限，让画布完全自适应
    const canvasH = Math.max(neededH, 250);

    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = canvasH * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${canvasH}px`;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, rect.width, canvasH);
    ctx.fillStyle = '#fafafa';
    ctx.fillRect(0, 0, rect.width, canvasH);

    drawFootCOP(ctx, leftPanelCop, leftSC, peakMatrix, 0, halfW, canvasH,
      hoveredPoint?.side === 'left' ? hoveredPoint.idx : null, '左脚 COP', leftTightBounds);
    drawFootCOP(ctx, rightPanelCop, rightSC, peakMatrix, halfW, halfW, canvasH,
      hoveredPoint?.side === 'right' ? hoveredPoint.idx : null, '右脚 COP', rightTightBounds);

    ctx.strokeStyle = '#ccc'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(halfW, 10); ctx.lineTo(halfW, canvasH - 10); ctx.stroke();
  }, [leftPanelCop, rightPanelCop, hoveredPoint, leftSC, rightSC, peakMatrix]);

  useEffect(() => { draw(); }, [draw]);
  useEffect(() => {
    const onResize = () => draw();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [draw]);

  const handleMouseMove = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasRect = canvas.getBoundingClientRect();
    const mx = e.clientX - canvasRect.left;
    const my = e.clientY - canvasRect.top;
    const halfW = canvasRect.width / 2;
    const side = mx < halfW ? 'left' : 'right';
    const pts = side === 'left' ? leftPanelCop : rightPanelCop;
    if (pts.length === 0) { setHoveredPoint(null); setTooltip(null); return; }

    const sc = side === 'left' ? leftSC : rightSC;
    const allCoords = sc.flat();
    const bounds = getTightBounds(allCoords);

    let minR = bounds.minR;
    let maxR = bounds.maxR;
    let minC = bounds.minC;
    let maxC = bounds.maxC;
    for (const pt of pts) {
      if (pt[0] < minR && pt[0] >= bounds.minR - 2) minR = Math.floor(pt[0]);
      if (pt[0] > maxR && pt[0] <= bounds.maxR + 2) maxR = Math.ceil(pt[0]);
      if (pt[1] < minC && pt[1] >= bounds.minC - 2) minC = Math.floor(pt[1]);
      if (pt[1] > maxC && pt[1] <= bounds.maxC + 2) maxC = Math.ceil(pt[1]);
    }

    const rowSpan = (maxR - minR + 1) || 1;
    const colSpan = (maxC - minC + 1) || 1;

    const pad = 4; const titleH = 20;
    const oX = side === 'right' ? halfW : 0;
    const drawW = halfW - pad * 2;
    const drawH = canvasRect.height - titleH - pad * 2;
    const scale = Math.min(drawW / colSpan, drawH / rowSpan);
    const footW = colSpan * scale;
    const footH = rowSpan * scale;
    const footX = oX + pad + (drawW - footW) / 2;
    const footY = titleH + pad + (drawH - footH) / 2;

    let bestDist = Infinity; let bestIdx = -1;
    for (let i = 0; i < pts.length; i++) {
      const px = footX + (pts[i][1] - minC) * scale;
      const py = footY + (pts[i][0] - minR) * scale;
      const d = (mx - px) ** 2 + (my - py) ** 2;
      if (d < bestDist) { bestDist = d; bestIdx = i; }
    }
    if (bestDist > 400) { setHoveredPoint(null); setTooltip(null); return; }

    setHoveredPoint({ side, idx: bestIdx });
    setTooltip({
      x: e.clientX - canvasRect.left, y: e.clientY - canvasRect.top, side,
      frameIndex: bestIdx, totalFrames: pts.length,
      copX: Math.round(pts[bestIdx][0] * 7 * 10) / 10,
      copY: Math.round(pts[bestIdx][1] * 7 * 10) / 10,
    });
  }, [leftPanelCop, rightPanelCop, leftSC, rightSC]);

  const handleMouseLeave = useCallback(() => { setHoveredPoint(null); setTooltip(null); }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <canvas ref={canvasRef} className="w-full rounded-lg cursor-crosshair"
        onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} />
      {tooltip && (
        <div className="absolute pointer-events-none z-10 bg-white/95 border border-gray-200 rounded-lg shadow-lg px-3 py-2 text-sm"
          style={{ left: Math.min(tooltip.x + 12, (containerRef.current?.clientWidth || 400) - 200), top: tooltip.y - 80 }}>
          <div className="font-semibold text-gray-800">
            {tooltip.side === 'left' ? '左脚' : '右脚'} · 帧 {tooltip.frameIndex + 1}/{tooltip.totalFrames}
          </div>
          <div className="text-gray-600 mt-1">COP X: {tooltip.copX} mm</div>
          <div className="text-gray-600">COP Y: {tooltip.copY} mm</div>
        </div>
      )}
      <div className="flex items-center justify-center gap-2 mt-3">
        <span className="text-xs text-gray-500">起始</span>
        <div className="w-32 h-3 rounded" style={{
          background: `linear-gradient(to right, ${copLineColor(0)}, ${copLineColor(0.25)}, ${copLineColor(0.5)}, ${copLineColor(0.75)}, ${copLineColor(1)})`
        }} />
        <span className="text-xs text-gray-500">结束</span>
      </div>
    </div>
  );
}
