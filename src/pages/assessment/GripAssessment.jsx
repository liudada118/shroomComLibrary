import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAssessment } from '../../contexts/AssessmentContext';
import HandModel from '../../components/three/HandModel';
import Pressure2DView from '../../components/charts/Pressure2DView';
import ViewToggle from '../../components/ui/ViewToggle';
import GripReport from '../../components/report/GripReport';
import EChart from '../../components/ui/EChart';
import { HeatmapCanvas } from '../../lib/heatmap';
import { mapLeftHand, mapRightHand, generateSimulatedSensorData } from '../../lib/gripDataMapping';
import { getDeviceManager } from '../../lib/DeviceManager';
import DevicePanel from '../../components/ui/DevicePanel';
import { useChannelData } from '../../hooks/useDeviceManager';

/* ─── 步骤指示器 (蔡司风格) ─── */
function StepIndicator({ current, steps }) {
  return (
    <div className="flex items-center gap-1">
      {steps.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <React.Fragment key={i}>
            {i > 0 && <div className="zeiss-step-line" style={done ? { background: 'var(--success)' } : {}} />}
            <div className="flex flex-col items-center gap-1">
              <div className={`zeiss-step-circle ${done ? 'completed' : active ? 'active' : 'pending'}`}>
                {done ? (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                ) : i + 1}
              </div>
              <span className="text-[10px] font-medium" style={{ color: done || active ? 'var(--zeiss-blue)' : 'var(--text-muted)' }}>{label}</span>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

/* ─── 左侧统一数据面板 ─── */
function LeftDataPanel({ leftData, rightData, leftStats, rightStats, phase, timer, fmtTime }) {
  const isLeftActive = phase.startsWith('left');
  const isRightActive = phase.startsWith('right');
  const isRecording = phase.includes('recording');

  const leftLineOpt = useMemo(() => ({
    animation: false,
    grid: { top: 8, bottom: 16, left: 32, right: 8 },
    xAxis: { type: 'category', data: leftData.map((_, i) => i), show: false, boundaryGap: false },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: '#F0F2F5' } }, axisLabel: { color: '#8896A6', fontSize: 9 } },
    series: [{ type: 'line', data: leftData.map(d => d.value), smooth: true, symbol: 'none',
      lineStyle: { color: '#0066CC', width: 1.5 },
      areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(0,102,204,0.15)' }, { offset: 1, color: 'rgba(0,102,204,0)' }] } }
    }]
  }), [leftData]);

  const rightLineOpt = useMemo(() => ({
    animation: false,
    grid: { top: 8, bottom: 16, left: 32, right: 8 },
    xAxis: { type: 'category', data: rightData.map((_, i) => i), show: false, boundaryGap: false },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: '#F0F2F5' } }, axisLabel: { color: '#8896A6', fontSize: 9 } },
    series: [{ type: 'line', data: rightData.map(d => d.value), smooth: true, symbol: 'none',
      lineStyle: { color: '#059669', width: 1.5 },
      areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(5,150,105,0.15)' }, { offset: 1, color: 'rgba(5,150,105,0)' }] } }
    }]
  }), [rightData]);

  const leftNormalOpt = useMemo(() => {
    const mean = parseFloat(leftStats.mean) || 190;
    const std = leftStats.std || 15;
    const xs = Array.from({ length: 100 }, (_, i) => (mean - 4 * std + i * 8 * std / 100).toFixed(1));
    const ys = xs.map(x => (1 / (std * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * ((x - mean) / std) ** 2));
    return {
      animation: false,
      grid: { top: 8, bottom: 16, left: 32, right: 8 },
      xAxis: { type: 'category', data: xs, axisLabel: { color: '#8896A6', fontSize: 8, interval: 24 }, boundaryGap: false },
      yAxis: { type: 'value', splitLine: { lineStyle: { color: '#F0F2F5' } }, axisLabel: { color: '#8896A6', fontSize: 9 } },
      series: [{ type: 'line', data: ys, smooth: true, symbol: 'none',
        lineStyle: { color: '#0891B2', width: 1.5 },
        areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(8,145,178,0.12)' }, { offset: 1, color: 'rgba(8,145,178,0)' }] } }
      }]
    };
  }, [leftStats.mean, leftStats.std]);

  const rightNormalOpt = useMemo(() => {
    const mean = parseFloat(rightStats.mean) || 190;
    const std = rightStats.std || 15;
    const xs = Array.from({ length: 100 }, (_, i) => (mean - 4 * std + i * 8 * std / 100).toFixed(1));
    const ys = xs.map(x => (1 / (std * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * ((x - mean) / std) ** 2));
    return {
      animation: false,
      grid: { top: 8, bottom: 16, left: 32, right: 8 },
      xAxis: { type: 'category', data: xs, axisLabel: { color: '#8896A6', fontSize: 8, interval: 24 }, boundaryGap: false },
      yAxis: { type: 'value', splitLine: { lineStyle: { color: '#F0F2F5' } }, axisLabel: { color: '#8896A6', fontSize: 9 } },
      series: [{ type: 'line', data: ys, smooth: true, symbol: 'none',
        lineStyle: { color: '#0891B2', width: 1.5 },
        areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(8,145,178,0.12)' }, { offset: 1, color: 'rgba(8,145,178,0)' }] } }
      }]
    };
  }, [rightStats.mean, rightStats.std]);

  const Metric = ({ label, value, color }) => (
    <div className="zeiss-data-row">
      <span className="zeiss-data-label text-[11px]">{label}</span>
      <span className="zeiss-data-value text-xs font-semibold" style={{ color }}>{value}</span>
    </div>
  );

  return (
    <div className="h-full flex flex-col gap-3 overflow-y-auto">
      {/* 采集状态 */}
      {isRecording && (
        <div className="zeiss-card p-3 flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: '#DC2626' }} />
          <span className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
            {isLeftActive ? '左手' : '右手'}采集中
          </span>
          <span className="font-mono text-sm font-bold ml-auto" style={{ color: '#0066CC' }}>{fmtTime(timer)}</span>
        </div>
      )}

      {/* 左手数据 */}
      <div className={`zeiss-card overflow-hidden transition-opacity ${isLeftActive ? 'opacity-100' : 'opacity-50'}`}>
        <div className="px-4 py-2.5 flex items-center gap-2" style={{ borderBottom: '1px solid var(--border-light)' }}>
          <div className="w-2 h-2 rounded-full" style={{ background: isLeftActive ? '#0066CC' : 'var(--border-light)' }} />
          <h3 className="text-xs font-semibold" style={{ color: 'var(--text-tertiary)' }}>左手 · 压力曲线</h3>
        </div>
        <div className="h-[90px] px-1"><EChart option={leftLineOpt} height={90} /></div>
        <div className="px-4 py-2 space-y-1.5">
          <Metric label="平均压力" value={leftStats.avg + ' mmHg'} color="#0066CC" />
          <Metric label="最大压力" value={leftStats.max + ' mmHg'} color="#0066CC" />
          <Metric label="压力总和" value={leftStats.sum + ' mmHg'} color="#0066CC" />
        </div>
      </div>

      {/* 左手正态分布 */}
      <div className={`zeiss-card overflow-hidden transition-opacity ${isLeftActive ? 'opacity-100' : 'opacity-50'}`}>
        <div className="px-4 py-2.5 flex items-center gap-2" style={{ borderBottom: '1px solid var(--border-light)' }}>
          <div className="w-2 h-2 rounded-full" style={{ background: isLeftActive ? '#0891B2' : 'var(--border-light)' }} />
          <h3 className="text-xs font-semibold" style={{ color: 'var(--text-tertiary)' }}>左手 · 正态分布</h3>
        </div>
        <div className="h-[80px] px-1"><EChart option={leftNormalOpt} height={80} /></div>
        <div className="grid grid-cols-4 gap-1 px-3 py-2">
          {[{ l: '均值', v: leftStats.mean }, { l: '方差', v: leftStats.variance }, { l: '偏度', v: leftStats.skewness }, { l: '峰度', v: leftStats.kurtosis }].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-[9px]" style={{ color: 'var(--text-muted)' }}>{item.l}</div>
              <div className="text-[11px] font-bold" style={{ color: '#0891B2' }}>{item.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 右手数据 */}
      <div className={`zeiss-card overflow-hidden transition-opacity ${isRightActive ? 'opacity-100' : 'opacity-50'}`}>
        <div className="px-4 py-2.5 flex items-center gap-2" style={{ borderBottom: '1px solid var(--border-light)' }}>
          <div className="w-2 h-2 rounded-full" style={{ background: isRightActive ? '#059669' : 'var(--border-light)' }} />
          <h3 className="text-xs font-semibold" style={{ color: 'var(--text-tertiary)' }}>右手 · 压力曲线</h3>
        </div>
        <div className="h-[90px] px-1"><EChart option={rightLineOpt} height={90} /></div>
        <div className="px-4 py-2 space-y-1.5">
          <Metric label="平均压力" value={rightStats.avg + ' mmHg'} color="#059669" />
          <Metric label="最大压力" value={rightStats.max + ' mmHg'} color="#059669" />
          <Metric label="压力总和" value={rightStats.sum + ' mmHg'} color="#059669" />
        </div>
      </div>

      {/* 右手正态分布 */}
      <div className={`zeiss-card overflow-hidden transition-opacity ${isRightActive ? 'opacity-100' : 'opacity-50'}`}>
        <div className="px-4 py-2.5 flex items-center gap-2" style={{ borderBottom: '1px solid var(--border-light)' }}>
          <div className="w-2 h-2 rounded-full" style={{ background: isRightActive ? '#0891B2' : 'var(--border-light)' }} />
          <h3 className="text-xs font-semibold" style={{ color: 'var(--text-tertiary)' }}>右手 · 正态分布</h3>
        </div>
        <div className="h-[80px] px-1"><EChart option={rightNormalOpt} height={80} /></div>
        <div className="grid grid-cols-4 gap-1 px-3 py-2">
          {[{ l: '均值', v: rightStats.mean }, { l: '方差', v: rightStats.variance }, { l: '偏度', v: rightStats.skewness }, { l: '峰度', v: rightStats.kurtosis }].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-[9px]" style={{ color: 'var(--text-muted)' }}>{item.l}</div>
              <div className="text-[11px] font-bold" style={{ color: '#0891B2' }}>{item.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── 主组件 ─── */
export default function GripAssessment() {
  const navigate = useNavigate();
  const { patientInfo, institution, completeAssessment } = useAssessment();
  const videoRef = useRef(null);

  const [deviceStatus, setDeviceStatus] = useState('disconnected');
  const [phase, setPhase] = useState('left-idle');
  const [viewMode, setViewMode] = useState('3d');
  const handDataRef = useRef(null); // 2D 视图用的数据引用
  const [reportMode, setReportMode] = useState('static');
  const [timer, setTimer] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [leftData, setLeftData] = useState([]);
  const [rightData, setRightData] = useState([]);
  const [showLeftToast, setShowLeftToast] = useState(false);
  const [showCompleteDialog, setShowCompleteDialog] = useState(false);
  const timerRef = useRef(null);

  // Heatmap state
  const [heatmapCanvas, setHeatmapCanvas] = useState(null);
  const [heatmapVersion, setHeatmapVersion] = useState(0);
  const bodyCanvasRef = useRef(null);
  const frameRef = useRef(0);

  // Initialize HeatmapCanvas
  useEffect(() => {
    if (!bodyCanvasRef.current) {
      bodyCanvasRef.current = new HeatmapCanvas(30, 30, 1, 1, 'hand', {
        min: 0,
        max: 500,
        size: 40
      });
      setHeatmapCanvas(bodyCanvasRef.current.canvas);
    }
  }, []);

  const leftStats = useMemo(() => {
    if (leftData.length === 0) return { avg: '0.00', max: '0.00', sum: '0.00', mean: '0.00', variance: '0.00', skewness: '0.00', kurtosis: '0.00', std: 15 };
    const vals = leftData.map(d => d.value);
    const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
    const max = Math.max(...vals);
    const std = Math.sqrt(vals.reduce((s, v) => s + (v - avg) ** 2, 0) / vals.length);
    return { avg: avg.toFixed(2), max: max.toFixed(2), sum: (avg * vals.length / 10).toFixed(2), mean: avg.toFixed(2), variance: (std ** 2).toFixed(2), skewness: '0.12', kurtosis: '2.85', std };
  }, [leftData]);

  const rightStats = useMemo(() => {
    if (rightData.length === 0) return { avg: '0.00', max: '0.00', sum: '0.00', mean: '0.00', variance: '0.00', skewness: '0.00', kurtosis: '0.00', std: 15 };
    const vals = rightData.map(d => d.value);
    const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
    const max = Math.max(...vals);
    const std = Math.sqrt(vals.reduce((s, v) => s + (v - avg) ** 2, 0) / vals.length);
    return { avg: avg.toFixed(2), max: max.toFixed(2), sum: (avg * vals.length / 10).toFixed(2), mean: avg.toFixed(2), variance: (std ** 2).toFixed(2), skewness: '-0.08', kurtosis: '3.12', std };
  }, [rightData]);

  const stepIndex = phase.startsWith('left') ? 0 : phase.startsWith('right') ? 1 : 2;

  // ─── 通过 useChannelData 订阅左右手通道数据 ───
  useChannelData(['HL', 'HR'], useCallback((channel, matrix, meta) => {
    if (deviceStatus !== 'connected') setDeviceStatus('connected');
    // 手套数据回调
    console.log(`[GripAssessment] 收到手套数据: ${channel}`, meta);
  }, [deviceStatus]));

  const handleConnect = async () => {
    setDeviceStatus('connecting');
    try {
      const dm = getDeviceManager();
      const result = await dm.authorizeAndConnect();
      if (result) {
        setDeviceStatus('connected');
      } else {
        setDeviceStatus('disconnected');
      }
    } catch (err) {
      console.error('连接失败:', err);
      setDeviceStatus('disconnected');
    }
  };
  const handleSimulate = () => setDeviceStatus('connected');

  const startRecording = () => {
    const isLeft = phase === 'left-idle';
    setPhase(isLeft ? 'left-recording' : 'right-recording');
    setTimer(0);
    frameRef.current = 0;
    timerRef.current = setInterval(() => {
      setTimer(p => p + 1);
      frameRef.current += 1;

      // Generate simulated sensor data and map to heatmap
      const sensorData = generateSimulatedSensorData(isLeft, frameRef.current);
      const totalPressure = sensorData.reduce((a, b) => a + b, 0);
      const avgPressure = totalPressure / sensorData.length;
      setPressure(avgPressure);

      // 更新 2D 视图数据引用：将一维 256 数组 reshape 为 16×16 矩阵
      const matrix16x16 = [];
      for (let r = 0; r < 16; r++) {
        matrix16x16.push(sensorData.slice(r * 16, (r + 1) * 16));
      }
      handDataRef.current = matrix16x16;

      const setter = isLeft ? setLeftData : setRightData;
      setter(prev => {
        const next = [...prev, { time: prev.length, value: avgPressure }];
        return next.length > 200 ? next.slice(-200) : next;
      });

      // Update heatmap texture on the 3D model
      if (bodyCanvasRef.current) {
        try {
          const mapped = isLeft ? mapLeftHand(sensorData) : mapRightHand(sensorData);
          bodyCanvasRef.current.changeHeatmap(mapped, 1, 1, 0);
          setHeatmapVersion(v => v + 1);
        } catch (e) {
          // fallback: ignore mapping errors in simulation
        }
      }
    }, 100);
  };

  const stopRecording = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    if (phase === 'left-recording') {
      setShowLeftToast(true);
      setTimeout(() => setShowLeftToast(false), 3000);
      setPhase('right-idle');
      setTimer(0);
    } else {
      setPhase('processing');
      setTimeout(() => setShowCompleteDialog(true), 2000);
    }
  };

  const viewReport = () => {
    setShowCompleteDialog(false);
    setPhase('report');
    setReportMode('static');
    completeAssessment('grip', { completed: true }, { leftData, rightData });
  };

  const handleClose = () => navigate('/dashboard');
  const fmtTime = (t) => {
    const s = Math.floor(t / 10);
    return `${String(Math.floor(s / 3600)).padStart(2, '0')}:${String(Math.floor((s % 3600) / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  };

  useEffect(() => () => { if (timerRef.current) clearInterval(timerRef.current); }, []);

  /* ─── 报告模式 ─── */
  if (phase === 'report') {
    if (reportMode === 'dynamic') {
      return (
        <div className="h-screen w-screen flex flex-col overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
          <header className="h-14 flex items-center justify-between px-6 shrink-0 z-20"
            style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-light)', boxShadow: 'var(--shadow-xs)' }}>
            <div className="flex items-center gap-3">
              <img src="./logo1.png" alt="Logo" className="w-8 h-8 rounded-lg" />
              <h1 className="text-[15px] font-bold" style={{ color: 'var(--text-primary)' }}>
                肌少症/老年人评估及监测系统
                <span className="ml-2 font-normal" style={{ color: 'var(--text-muted)' }}>——1.握力评估</span>
              </h1>
            </div>
            <div className="flex items-center gap-5">
              <StepIndicator current={2} steps={['左手', '右手', '完成']} />
              <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{patientInfo?.name || '未知'}</span>
              <span className="text-sm" style={{ color: 'var(--text-tertiary)' }}>{institution || ''}</span>
              <button onClick={() => navigate('/history')} className="zeiss-btn-ghost text-xs">历史记录</button>
            </div>
          </header>
          <main className="flex-1 flex flex-col items-center justify-center p-6 z-10">
            <div className="zeiss-card p-6 flex flex-col items-center gap-4 max-w-4xl w-full">
              <div className="flex items-center justify-between w-full">
                <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{patientInfo?.name}的握力评估动态报告</h2>
                <div className="flex items-center gap-3">
                  <button onClick={() => setReportMode('static')}
                    className="zeiss-btn-secondary flex items-center gap-2 text-xs py-2 px-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    切换静态报告
                  </button>
                  <button onClick={handleClose} className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors"
                    style={{ color: 'var(--text-muted)' }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              </div>
              <video ref={videoRef} src="./assets/dynamic_report.mp4" controls className="w-full rounded-xl" style={{ maxHeight: '70vh', background: '#000' }} />
            </div>
          </main>
        </div>
      );
    }

    return (
      <div className="h-screen w-screen flex flex-col overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
        <header className="h-14 flex items-center justify-between px-6 shrink-0 z-20"
          style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-light)', boxShadow: 'var(--shadow-xs)' }}>
          <div className="flex items-center gap-3">
            <button onClick={handleClose} className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors"
              style={{ color: 'var(--text-muted)' }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <img src="./logo1.png" alt="Logo" className="w-8 h-8 rounded-lg" />
            <h1 className="text-[15px] font-bold" style={{ color: 'var(--text-primary)' }}>
              肌少症/老年人评估及监测系统
              <span className="ml-2 font-normal" style={{ color: 'var(--text-muted)' }}>——1.握力评估</span>
            </h1>
          </div>
          <div className="flex items-center gap-5">
            <StepIndicator current={2} steps={['左手', '右手', '完成']} />
            <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{patientInfo?.name || '未知'}</span>
            <span className="text-sm" style={{ color: 'var(--text-tertiary)' }}>{institution || ''}</span>
            <button onClick={() => setReportMode(reportMode === 'static' ? 'dynamic' : 'static')}
              className="zeiss-btn-ghost text-xs flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              {reportMode === 'static' ? '动态报告' : '静态报告'}
            </button>
            <button onClick={handleClose} className="zeiss-btn-primary text-xs py-2 px-4">返回首页</button>
          </div>
        </header>
        <main className="flex-1 min-h-0 z-10">
          <GripReport patientName={patientInfo?.name || '未知'} onClose={handleClose} onSwitchDynamic={() => setReportMode('dynamic')} />
        </main>
      </div>
    );
  }

  /* ─── 采集模式 — 左侧数据面板 + 右侧3D手模型 ─── */
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      {/* Header */}
      <header className="assessment-header">
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <button onClick={handleClose} className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors shrink-0"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-hover)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <img src="./logo1.png" alt="Logo" className="w-7 h-7 md:w-8 md:h-8 rounded-lg shrink-0" />
          <h1 className="text-[13px] md:text-[15px] font-bold truncate" style={{ color: 'var(--text-primary)' }}>
            <span className="hidden lg:inline">肌少症/老年人评估及监测系统——</span>1.握力评估
          </h1>
        </div>
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <StepIndicator current={stepIndex} steps={['左手', '右手', '完成']} />

          {/* 设备状态 */}
          <div className="hidden sm:flex items-center gap-2">
            <DevicePanel compact assessmentType="grip" />
            {deviceStatus === 'disconnected' && (
              <button onClick={handleSimulate} className="text-xs font-medium px-2 py-1 rounded" style={{ color: '#0891B2', background: 'rgba(8,145,178,0.08)', border: '1px solid #0891B2' }}>模拟</button>
            )}
          </div>

          <span className="text-sm font-medium hidden md:inline" style={{ color: 'var(--text-primary)' }}>{patientInfo?.name || '未知'}</span>
          <button onClick={() => navigate('/history')} className="zeiss-btn-ghost text-xs hidden lg:inline-flex">历史记录</button>
        </div>
      </header>

      {/* Toast */}
      {showLeftToast && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 z-50 animate-slideUp"
          style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-lg)', borderRadius: 'var(--radius-md)', padding: '10px 20px' }}>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'var(--zeiss-blue)' }}>
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
            </div>
            <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>左手采集完成</span>
          </div>
        </div>
      )}

      {/* 报告完成弹窗 */}
      {showCompleteDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center zeiss-overlay animate-fadeIn">
          <div className="zeiss-dialog p-8 flex flex-col items-center gap-4 min-w-[340px] animate-scaleIn">
            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'var(--success-light)' }}>
              <svg className="w-7 h-7" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>采集完成，报告已生成</h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>您可以查看报告或返回首页继续其他评估</p>
            <div className="flex gap-3 w-full mt-2">
              <button onClick={() => { setShowCompleteDialog(false); completeAssessment('grip', { completed: true }, { leftData, rightData }); navigate('/dashboard'); }}
                className="zeiss-btn-secondary flex-1 py-3 text-sm">返回首页</button>
              <button onClick={viewReport}
                className="zeiss-btn-primary flex-1 py-3 text-sm">查看报告</button>
            </div>
          </div>
        </div>
      )}

      {/* Main: 左侧面板 + 右侧3D */}
      <main className="flex-1 flex min-h-0 relative z-10">
        {/* 左侧数据面板 */}
        <div className="assessment-side-panel">
          <LeftDataPanel
            leftData={leftData} rightData={rightData}
            leftStats={leftStats} rightStats={rightStats}
            phase={phase} timer={timer} fmtTime={fmtTime}
          />
        </div>

        {/* 右侧可视化区域 - 支持 3D/2D 切换 */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          <div className="relative w-full h-full flex items-center justify-center model-container m-3 rounded-xl">
            {/* 3D 视图 */}
            {viewMode === '3d' && (
              <HandModel isRecording={phase.includes('recording')} pressureValue={pressure} isLeftHand={phase.startsWith('left')} heatmapCanvas={heatmapCanvas} heatmapVersion={heatmapVersion} />
            )}

            {/* 2D 视图 */}
            {viewMode === '2d' && (
              <Pressure2DView
                type="hand"
                dataRef={handDataRef}
                labels={[phase.startsWith('left') ? '左手压力' : '右手压力']}
              />
            )}

            {/* 浮动：视图切换 - 左上角 */}
            <div className="absolute top-3 left-3 z-10">
              <ViewToggle viewMode={viewMode} onToggle={setViewMode} />
            </div>

            {phase === 'processing' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl" style={{ background: 'rgba(245,246,248,0.8)', backdropFilter: 'blur(4px)' }}>
                <div className="w-64 h-2 rounded-full overflow-hidden mb-4" style={{ background: 'var(--border-light)' }}>
                  <div className="h-full rounded-full progress-animate" style={{ background: 'var(--zeiss-blue)' }} />
                </div>
                <p className="font-medium text-sm" style={{ color: 'var(--text-secondary)' }}>正在汇总采集数据并生成报告，请稍候...</p>
              </div>
            )}
          </div>

          {/* 控制按钮 */}
          {phase !== 'processing' && (
            <div className="absolute bottom-10 z-20 flex flex-col items-center gap-3">
              {phase.includes('idle') && deviceStatus === 'connected' && (
                <>
                  <button onClick={startRecording}
                    className="w-16 h-16 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                    style={{ border: '3px solid var(--border-medium)', background: 'transparent' }}>
                    <div className="w-11 h-11 rounded-full" style={{ background: 'linear-gradient(135deg, #F0F4F8, #FFFFFF)', boxShadow: 'var(--shadow-sm)' }} />
                  </button>
                  <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>开始采集{phase === 'left-idle' ? '左手' : '右手'}</span>
                </>
              )}
              {phase.includes('idle') && deviceStatus !== 'connected' && (
                <span className="text-sm px-5 py-2.5 rounded-lg" style={{ color: 'var(--text-muted)', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>
                  请先连接设备或选择模拟模式
                </span>
              )}
              {phase.includes('recording') && (
                <>
                  <button onClick={stopRecording}
                    className="w-16 h-16 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                    style={{ border: '3px solid var(--zeiss-blue)', background: 'rgba(0,102,204,0.05)' }}>
                    <div className="w-7 h-7 rounded-sm" style={{ background: 'var(--zeiss-blue)' }} />
                  </button>
                  <div className="flex items-center gap-3 text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                    <span>结束采集{phase === 'left-recording' ? '左手' : '右手'}</span>
                    <span className="font-mono px-3 py-1 rounded-md" style={{ background: 'var(--zeiss-blue-light)', color: 'var(--zeiss-blue)' }}>{fmtTime(timer)}</span>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </main>

      <div className="h-6 flex items-center px-6 shrink-0 z-10">
        <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>powered by 矩侨工业</span>
      </div>
    </div>
  );
}
