import React, { useEffect, useMemo, useState } from 'react'
import * as echarts from 'echarts'

/* ─── 原有组件 ─── */
import SimpleLineChart from './charts/simple/SimpleLineChart'
import ReplayWindowLineChart from './charts/replay/ReplayWindowLineChart'
import NumThreeColor from './heatmap/threeNum/NumThreeColor'
import CanvasHeatmap from './heatmap/canvasMap/CanvasHeatmap'
import ThreeAndCarPoint from './heatmap/threePoint/ThreeAndCarPoint'
import WebglHeatmap from './heatmap/webglMap/WebglHeatmap'
import HandHeatmapModel from './heatmap/handmodal/HandHeatmapModel'
import PlaybackBar from './playback/PlaybackBar'
import { Scene as ThreeSinkScene } from './heatmap/threeSink/Scene'
import SitAndFootScene from './heatmap/sitAndfoot/ThreeScene'
import FootLenScene from './heatmap/footLen/ThreeScene'
import FootSinkScene from './heatmap/footSink/ThreeScene'

/* ─── 新增：图表组件 ─── */
import Pressure2DView from './charts/pressure2d/Pressure2DView'
import { PressureChart } from './charts/pressureLine/PressureChart'
import EChart from './charts/echart/EChart'

/* ─── 新增：3D 模型 ─── */
import InsoleScene from './heatmap/insole/InsoleScene'
import { FootModel } from './heatmap/foot/FootModel'
import { HumanModel } from './heatmap/human/HumanModel'

/* ─── 新增：UI 组件 ─── */
import { Button } from './ui/Button'
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card'
import { Input } from './ui/Input'
import { Select, SelectItem } from './ui/Select'
import ViewToggle from './ui/ViewToggle'

/* ─── 新增：报告组件 ─── */
import GripReport from './report/grip/GripReport'
import StandingReport from './report/standing/StandingReport'

/* ─── 新增：步态组件 ─── */
import { FootprintHeatmapCanvas, PressureEvolutionCanvas, GaitAverageSummaryCanvas } from './gait/GaitVisualizations'

/* ═══════════════════════════════════════════
   工具函数
   ═══════════════════════════════════════════ */
const toNumber = (value, fallback = 0) => {
  const num = Number(value)
  return Number.isFinite(num) ? num : fallback
}
const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

const buildFlat = (length, maxValue) =>
  Array.from({ length }, () => Math.round(Math.random() * maxValue))

const buildGrid = (size, maxValue) => {
  const rows = new Array(size)
  for (let r = 0; r < size; r++) {
    const row = new Array(size)
    for (let c = 0; c < size; c++) row[c] = Math.round(Math.random() * maxValue)
    rows[r] = row
  }
  return rows
}

/* ═══════════════════════════════════════════
   静态数据
   ═══════════════════════════════════════════ */
const area1 = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  { offset: 0, color: 'rgba(63,211,228,1)' },
  { offset: 0.65, color: 'rgba(39,117,143,0.26)' },
  { offset: 1, color: 'rgba(26,28,32,0)' }
])

const example = {
  xData: [1, 2, 3, 4, 5],
  yData: { a: [1, 3, 2, 4, 5], b: [2, 2, 3, 3, 4] },
  yMax: 6,
  lineColors: ['#12D0BE', '#D3C2FF'],
  areaColors: [area1, null],
  style: { height: '7.5rem', width: '20.35rem', opacity: 0.8 }
}

/* ═══════════════════════════════════════════
   App
   ═══════════════════════════════════════════ */
export default function App() {
  /* ─── 原有组件状态 ─── */
  const line1 = useMemo(() => Array.from({ length: 500 }, () => Math.round(Math.random() * 300)), [])
  const line2 = useMemo(() => Array.from({ length: 500 }, () => Math.round(Math.random() * 200)), [])
  const [idx, setIdx] = useState(0)
  const [activeKey, setActiveKey] = useState('realtime')

  const [chartsOpen, setChartsOpen] = useState(true)
  const [renderOpen, setRenderOpen] = useState(true)
  const [uiOpen, setUiOpen] = useState(true)
  const [sarcopeniaOpen, setSarcopeniaOpen] = useState(true)

  /* 矩阵参数 */
  const [matrixRows, setMatrixRows] = useState(16)
  const [matrixCols, setMatrixCols] = useState(16)
  const [matrixSize, setMatrixSize] = useState(4)
  const [matrixMin, setMatrixMin] = useState(0)
  const [matrixMax, setMatrixMax] = useState(300)
  const [matrixColors, setMatrixColors] = useState(['#12D0BE', '#E2E8F0', '#D3C2FF'])
  const [matrixColorsInput, setMatrixColorsInput] = useState('#12D0BE,#E2E8F0,#D3C2FF')

  /* 热力图参数 */
  const [heatRows, setHeatRows] = useState(32)
  const [heatCols, setHeatCols] = useState(32)

  /* WebGL 参数 */
  const [webglSize, setWebglSize] = useState(64)
  const [webglMax, setWebglMax] = useState(12)

  /* 手部模型参数 */
  const [handType, setHandType] = useState('left')
  const [handRecording, setHandRecording] = useState(false)
  const [handData, setHandData] = useState(null)

  /* 下陷渲染参数 */
  const [sinkShowHeatmap, setSinkShowHeatmap] = useState(true)
  const [sinkDepthScale, setSinkDepthScale] = useState(0.35)
  const [sinkRealtimeData, setSinkRealtimeData] = useState(null)

  /* 新增组件状态 */
  const [viewMode, setViewMode] = useState('3d')
  const [insoleShowHeatmap, setInsoleShowHeatmap] = useState(true)
  const [insoleDepthScale, setInsoleDepthScale] = useState(0.3)
  const [humanType, setHumanType] = useState('sitstand')

  /* 动态数据 */
  const matrixData = useMemo(() => buildFlat(matrixRows * matrixCols, matrixMax), [matrixRows, matrixCols, matrixMax])
  const heatData = useMemo(() => buildFlat(heatRows * heatCols, 255), [heatRows, heatCols])
  const webglData = useMemo(() => buildFlat(webglSize * webglSize, webglMax), [webglSize, webglMax])

  const pressure2dData = useMemo(() => {
    const rows = 32, cols = 32, matrix = []
    for (let i = 0; i < rows; i++) {
      const row = new Float32Array(cols)
      for (let j = 0; j < cols; j++) {
        const dist = Math.sqrt((i - rows / 2) ** 2 + (j - cols / 2) ** 2)
        row[j] = Math.max(0, 255 * (1 - dist / (rows * 0.6))) * (0.8 + Math.random() * 0.4)
      }
      matrix.push(row)
    }
    return matrix
  }, [])

  const pressureLineData = useMemo(() =>
    Array.from({ length: 50 }, (_, i) => Math.sin(i * 0.2) * 100 + 150), [])

  const echartOption = useMemo(() => ({
    animation: false,
    grid: { top: 20, bottom: 30, left: 40, right: 20 },
    xAxis: { type: 'category', data: Array.from({ length: 20 }, (_, i) => i + 1) },
    yAxis: { type: 'value' },
    series: [{ type: 'bar', data: Array.from({ length: 20 }, () => Math.round(Math.random() * 100)), itemStyle: { color: '#0066CC' } }]
  }), [])

  /* 定时更新 */
  useEffect(() => {
    const t = setInterval(() => setIdx(p => (p >= line1.length ? 0 : p + 1)), 50)
    return () => clearInterval(t)
  }, [line1.length])

  useEffect(() => {
    if (activeKey !== 'three-sink' && activeKey !== 'insole-3d') return
    const t = setInterval(() => setSinkRealtimeData(buildGrid(64, 255)), 200)
    return () => clearInterval(t)
  }, [activeKey])

  useEffect(() => {
    if (activeKey !== 'hand-heatmap') return
    const t = setInterval(() => setHandData(buildFlat(16 * 16, 500)), 200)
    return () => clearInterval(t)
  }, [activeKey])

  /* ═══════════════════════════════════════════
     渲染
     ═══════════════════════════════════════════ */
  return (
    <div className="docs">
      <header className="docs-hero">
        <div>
          <h1>shroomComLibrary</h1>
          <p>轻量 React 组件库，支持图表、渲染、UI 与肌少症评估组件的快速接入与复用。</p>
        </div>
        <div className="docs-cta">
          <code>npm i shroomcomlibrary echarts three</code>
        </div>
      </header>

      <main className="docs-body">
        {/* ─── 侧边栏 ─── */}
        <aside className="docs-sider">
          <div className="sider-title">组件分类</div>

          {/* 图表 */}
          <div className="sider-group">
            <button className="sider-group-title" type="button"
              onClick={() => setChartsOpen(p => !p)} aria-expanded={chartsOpen}>
              图表 <span className={chartsOpen ? 'chevron is-open' : 'chevron'}>▾</span>
            </button>
            {chartsOpen && (
              <nav className="sider-list">
                <button className={activeKey === 'realtime' ? 'is-active' : ''}
                  onClick={() => setActiveKey('realtime')} type="button">实时折线图</button>
                <button className={activeKey === 'replay' ? 'is-active' : ''}
                  onClick={() => setActiveKey('replay')} type="button">回放折线图</button>
                <button className={activeKey === 'echart' ? 'is-active' : ''}
                  onClick={() => setActiveKey('echart')} type="button">EChart 通用封装</button>
                <button className={activeKey === 'pressure-line' ? 'is-active' : ''}
                  onClick={() => setActiveKey('pressure-line')} type="button">压力曲线图</button>
                <button className={activeKey === 'pressure-2d' ? 'is-active' : ''}
                  onClick={() => setActiveKey('pressure-2d')} type="button">2D 压力热力图</button>
              </nav>
            )}
          </div>

          {/* 渲染 */}
          <div className="sider-group">
            <button className="sider-group-title" type="button"
              onClick={() => setRenderOpen(p => !p)} aria-expanded={renderOpen}>
              渲染 <span className={renderOpen ? 'chevron is-open' : 'chevron'}>▾</span>
            </button>
            {renderOpen && (
              <nav className="sider-list">
                <button className={activeKey === 'matrix' ? 'is-active' : ''}
                  onClick={() => setActiveKey('matrix')} type="button">数字矩阵</button>
                <button className={activeKey === 'canvas-heatmap' ? 'is-active' : ''}
                  onClick={() => setActiveKey('canvas-heatmap')} type="button">Canvas 热力图</button>
                <button className={activeKey === 'webgl-heatmap' ? 'is-active' : ''}
                  onClick={() => setActiveKey('webgl-heatmap')} type="button">WebGL 热力图</button>
                <button className={activeKey === 'hand-heatmap' ? 'is-active' : ''}
                  onClick={() => setActiveKey('hand-heatmap')} type="button">手部热力图</button>
                <button className={activeKey === 'three-sink' ? 'is-active' : ''}
                  onClick={() => setActiveKey('three-sink')} type="button">下陷渲染</button>
                <button className={activeKey === 'insole-3d' ? 'is-active' : ''}
                  onClick={() => setActiveKey('insole-3d')} type="button">鞋垫 3D 模型</button>
                <button className={activeKey === 'foot-3d' ? 'is-active' : ''}
                  onClick={() => setActiveKey('foot-3d')} type="button">足部 3D 模型</button>
                <button className={activeKey === 'human-3d' ? 'is-active' : ''}
                  onClick={() => setActiveKey('human-3d')} type="button">人体 3D 模型</button>
                <button className={activeKey === 'sit-and-foot' ? 'is-active' : ''}
                  onClick={() => setActiveKey('sit-and-foot')} type="button">起坐渲染</button>
                <button className={activeKey === 'foot-len' ? 'is-active' : ''}
                  onClick={() => setActiveKey('foot-len')} type="button">步道渲染</button>
                <button className={activeKey === 'foot-sink' ? 'is-active' : ''}
                  onClick={() => setActiveKey('foot-sink')} type="button">步道下陷</button>
              </nav>
            )}
          </div>

          {/* UI 组件 */}
          <div className="sider-group">
            <button className="sider-group-title" type="button"
              onClick={() => setUiOpen(p => !p)} aria-expanded={uiOpen}>
              UI 组件 <span className={uiOpen ? 'chevron is-open' : 'chevron'}>▾</span>
            </button>
            {uiOpen && (
              <nav className="sider-list">
                <button className={activeKey === 'ui-playback' ? 'is-active' : ''}
                  onClick={() => setActiveKey('ui-playback')} type="button">回放控制条</button>
                <button className={activeKey === 'ui-button' ? 'is-active' : ''}
                  onClick={() => setActiveKey('ui-button')} type="button">Button 按钮</button>
                <button className={activeKey === 'ui-card' ? 'is-active' : ''}
                  onClick={() => setActiveKey('ui-card')} type="button">Card 卡片</button>
                <button className={activeKey === 'ui-input' ? 'is-active' : ''}
                  onClick={() => setActiveKey('ui-input')} type="button">Input 输入框</button>
                <button className={activeKey === 'ui-select' ? 'is-active' : ''}
                  onClick={() => setActiveKey('ui-select')} type="button">Select 选择器</button>
                <button className={activeKey === 'ui-view-toggle' ? 'is-active' : ''}
                  onClick={() => setActiveKey('ui-view-toggle')} type="button">ViewToggle 切换</button>
              </nav>
            )}
          </div>

          {/* 肌少症评估 */}
          <div className="sider-group">
            <button className="sider-group-title" type="button"
              onClick={() => setSarcopeniaOpen(p => !p)} aria-expanded={sarcopeniaOpen}>
              评估报告 <span className={sarcopeniaOpen ? 'chevron is-open' : 'chevron'}>▾</span>
            </button>
            {sarcopeniaOpen && (
              <nav className="sider-list">
                <button className={activeKey === 'report-grip' ? 'is-active' : ''}
                  onClick={() => setActiveKey('report-grip')} type="button">握力评估报告</button>
                <button className={activeKey === 'report-standing' ? 'is-active' : ''}
                  onClick={() => setActiveKey('report-standing')} type="button">站立评估报告</button>
                <button className={activeKey === 'gait-timeline' ? 'is-active' : ''}
                  onClick={() => setActiveKey('gait-timeline')} type="button">步态时间线</button>
              </nav>
            )}
          </div>
        </aside>

        {/* ─── 内容区 ─── */}
        <section className="docs-content single">

          {/* ═══ 实时折线图 ═══ */}
          {activeKey === 'realtime' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>实时折线图</h2>
                <span className="section-desc">多折线面积图，支持渐变填充。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>SimpleLineChart</h3><p>实时折线图，适合展示多系列趋势。</p></div>
                  <div className="component-tag">图表类</div>
                </div>
                <div className="component-demo">
                  <SimpleLineChart {...example} />
                </div>
                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre><code>{`import { SimpleLineChart } from 'shroomcomlibrary/charts/realtime'

<SimpleLineChart
  xData={[1, 2, 3, 4, 5]}
  yData={{ a: [1, 3, 2, 4, 5], b: [2, 2, 3, 3, 4] }}
  yMax={6}
  lineColors={['#12D0BE', '#D3C2FF']}
  areaColors={[area1, null]}
  style={{ height: '7.5rem', width: '20.35rem' }}
/>`}</code></pre>
                </div>
                <div className="component-props">
                  <div className="usage-title">Props</div>
                  <div className="props-grid">
                    <div className="props-row"><div className="props-name">xData</div><div>数组，x 轴数据。</div></div>
                    <div className="props-row"><div className="props-name">yData</div><div>对象，系列数据。</div></div>
                    <div className="props-row"><div className="props-name">yMax</div><div>数字，y 轴最大值。</div></div>
                    <div className="props-row"><div className="props-name">lineColors</div><div>数组，折线颜色。</div></div>
                    <div className="props-row"><div className="props-name">areaColors</div><div>数组，面积颜色。</div></div>
                    <div className="props-row"><div className="props-name">style</div><div>容器样式，需要显式宽高。</div></div>
                  </div>
                </div>
              </article>
            </section>
          )}

          {/* ═══ 回放折线图 ═══ */}
          {activeKey === 'replay' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>回放折线图</h2>
                <span className="section-desc">用于数据回放与滑动窗口展示。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>ReplayWindowLineChart</h3><p>回放折线图，支持外部传入多条线。</p></div>
                  <div className="component-tag">图表类</div>
                </div>
                <div className="component-demo">
                  <ReplayWindowLineChart
                    series={[
                      { name: 'line1', data: line1, color: '#12D0BE' },
                      { name: 'line2', data: line2, color: '#D3C2FF', showLastDot: true }
                    ]}
                    yMax={320} style={{ height: '7.5rem' }}
                  />
                </div>
                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre><code>{`import { ReplayWindowLineChart } from 'shroomcomlibrary/charts/replay'

<ReplayWindowLineChart
  series={[{ name: 'line1', data: data1, color: '#12D0BE' }]}
  yMax={320}
  style={{ height: '7.5rem' }}
/>`}</code></pre>
                </div>
              </article>
            </section>
          )}

          {/* ═══ EChart 通用封装 ═══ */}
          {activeKey === 'echart' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>EChart 通用封装</h2>
                <span className="section-desc">基于 ECharts 的通用图表组件，传入 option 即可渲染。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>EChart</h3><p>支持任意 ECharts 配置项，自动响应容器大小。</p></div>
                  <div className="component-tag">新增 · 图表类</div>
                </div>
                <div className="component-demo" style={{ background: '#fff', padding: '1rem' }}>
                  <EChart option={echartOption} height={200} />
                </div>
                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre><code>{`import { EChart } from 'shroomcomlibrary/charts/echart'

<EChart option={echartsOption} height={200} />`}</code></pre>
                </div>
                <div className="component-props">
                  <div className="usage-title">Props</div>
                  <div className="props-grid">
                    <div className="props-row"><div className="props-name">option</div><div>ECharts 配置对象。</div></div>
                    <div className="props-row"><div className="props-name">height</div><div>图表高度（px）。</div></div>
                  </div>
                </div>
              </article>
            </section>
          )}

          {/* ═══ 压力曲线图 ═══ */}
          {activeKey === 'pressure-line' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>压力曲线图</h2>
                <span className="section-desc">实时压力数据的折线图展示。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>PressureChart</h3><p>展示压力传感器的实时曲线数据。</p></div>
                  <div className="component-tag">新增 · 图表类</div>
                </div>
                <div className="component-demo" style={{ background: '#fff', padding: '1rem' }}>
                  <PressureChart data={pressureLineData} title="压力总和曲线" />
                </div>
                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre><code>{`import { PressureChart } from 'shroomcomlibrary/charts/pressureLine'

<PressureChart data={pressureData} title="压力总和曲线" />`}</code></pre>
                </div>
              </article>
            </section>
          )}

          {/* ═══ 2D 压力热力图 ═══ */}
          {activeKey === 'pressure-2d' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>2D 压力热力图</h2>
                <span className="section-desc">用 Canvas 渲染的 2D 足底/手部压力分布图。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>Pressure2DView</h3><p>支持鞋垫、坐垫等多种传感器类型的 2D 压力可视化。</p></div>
                  <div className="component-tag">新增 · 图表类</div>
                </div>
                <div className="component-demo" style={{ background: '#fff', padding: '1rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <Pressure2DView data={pressure2dData} rows={32} cols={32} width={180} height={280} type="insole" side="left" />
                    <div style={{ color: '#666', marginTop: 8, fontSize: '0.85rem' }}>左脚</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <Pressure2DView data={pressure2dData} rows={32} cols={32} width={180} height={280} type="insole" side="right" />
                    <div style={{ color: '#666', marginTop: 8, fontSize: '0.85rem' }}>右脚</div>
                  </div>
                </div>
                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre><code>{`import { Pressure2DView } from 'shroomcomlibrary/charts/pressure2d'

<Pressure2DView
  data={matrix}
  rows={32} cols={32}
  width={180} height={280}
  type="insole" side="left"
/>`}</code></pre>
                </div>
                <div className="component-props">
                  <div className="usage-title">Props</div>
                  <div className="props-grid">
                    <div className="props-row"><div className="props-name">data</div><div>二维数组，压力矩阵数据。</div></div>
                    <div className="props-row"><div className="props-name">rows / cols</div><div>矩阵行列数。</div></div>
                    <div className="props-row"><div className="props-name">width / height</div><div>Canvas 尺寸。</div></div>
                    <div className="props-row"><div className="props-name">type</div><div>"insole" | "seat" 传感器类型。</div></div>
                    <div className="props-row"><div className="props-name">side</div><div>"left" | "right" 左右侧。</div></div>
                  </div>
                </div>
              </article>
            </section>
          )}

          {/* ═══ 数字矩阵 ═══ */}
          {activeKey === 'matrix' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>数字矩阵</h2>
                <span className="section-desc">Three.js 数字矩阵渲染，可缩放拖拽。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>NumThreeColor</h3><p>支持自定义颜色、矩阵大小与数据源。</p></div>
                  <div className="component-tag">渲染类</div>
                </div>
                <div className="component-demo">
                  <NumThreeColor data={matrixData} rows={matrixRows} cols={matrixCols}
                    size={matrixSize} min={matrixMin} max={matrixMax} colors={matrixColors}
                    style={{ height: '20rem', width: '100%' }} />
                </div>
                <div className="component-controls">
                  <div className="control-row">
                    <span className="control-label">行 × 列</span>
                    <div className="control-inline">
                      <input type="number" value={matrixRows} onChange={e => setMatrixRows(toNumber(e.target.value, 16))} />
                      <span>×</span>
                      <input type="number" value={matrixCols} onChange={e => setMatrixCols(toNumber(e.target.value, 16))} />
                    </div>
                  </div>
                  <div className="control-row">
                    <span className="control-label">字号</span>
                    <input type="number" value={matrixSize} onChange={e => setMatrixSize(toNumber(e.target.value, 4))} />
                  </div>
                  <div className="control-row">
                    <span className="control-label">颜色</span>
                    <input type="text" value={matrixColorsInput}
                      onChange={e => { setMatrixColorsInput(e.target.value); const c = e.target.value.split(',').map(s => s.trim()).filter(Boolean); if (c.length >= 2) setMatrixColors(c) }} />
                  </div>
                </div>
                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre><code>{`import { NumThreeColor } from 'shroomcomlibrary/heatmap/matrix'

<NumThreeColor
  data={flatArray}
  rows={16} cols={16} size={4}
  min={0} max={300}
  colors={['#12D0BE', '#E2E8F0', '#D3C2FF']}
  style={{ height: '20rem', width: '100%' }}
/>`}</code></pre>
                </div>
              </article>
            </section>
          )}

          {/* ═══ Canvas 热力图 ═══ */}
          {activeKey === 'canvas-heatmap' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>Canvas 热力图</h2>
                <span className="section-desc">Canvas 渲染的高性能热力图。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>CanvasHeatmap</h3><p>支持自定义颜色、过滤阈值与模糊效果。</p></div>
                  <div className="component-tag">渲染类</div>
                </div>
                <div className="component-demo">
                  <CanvasHeatmap data={heatData} rows={heatRows} cols={heatCols}
                    style={{ height: '20rem', width: '100%' }} />
                </div>
              </article>
            </section>
          )}

          {/* ═══ WebGL 热力图 ═══ */}
          {activeKey === 'webgl-heatmap' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>WebGL 热力图</h2>
                <span className="section-desc">GPU 加速的高性能热力图渲染。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>WebglHeatmap</h3><p>WebGL 渲染，适合大矩阵实时更新。</p></div>
                  <div className="component-tag">渲染类</div>
                </div>
                <div className="component-demo">
                  <WebglHeatmap data={webglData} size={webglSize} max={webglMax}
                    style={{ height: '20rem', width: '100%' }} />
                </div>
              </article>
            </section>
          )}

          {/* ═══ 手部热力图 ═══ */}
          {activeKey === 'hand-heatmap' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>手部热力图</h2>
                <span className="section-desc">3D 手部模型 + 压力热力图叠加。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>HandHeatmapModel</h3><p>Three.js 手部模型，支持实时压力数据映射。</p></div>
                  <div className="component-tag">渲染类</div>
                </div>
                <div className="component-demo">
                  <HandHeatmapModel data={handData} type={handType} isRecording={handRecording}
                    style={{ height: '25rem', width: '100%' }} />
                </div>
                <div className="component-controls">
                  <div className="control-row">
                    <span className="control-label">手型</span>
                    <select value={handType} onChange={e => setHandType(e.target.value)}>
                      <option value="left">左手</option>
                      <option value="right">右手</option>
                    </select>
                  </div>
                  <div className="control-row">
                    <span className="control-label">采集中</span>
                    <label className="control-toggle">
                      <input type="checkbox" checked={handRecording} onChange={e => setHandRecording(e.target.checked)} />
                      {handRecording ? '是' : '否'}
                    </label>
                  </div>
                </div>
              </article>
            </section>
          )}

          {/* ═══ 下陷渲染 ═══ */}
          {activeKey === 'three-sink' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>下陷渲染</h2>
                <span className="section-desc">Three.js 3D 下陷渲染，支持热力图叠加。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>ThreeSinkScene</h3><p>3D 下陷场景，支持实时数据更新。</p></div>
                  <div className="component-tag">渲染类</div>
                </div>
                <div className="component-demo">
                  <ThreeSinkScene data={sinkRealtimeData} rows={64} cols={64}
                    showHeatmap={sinkShowHeatmap} depthScale={sinkDepthScale}
                    style={{ height: '25rem', width: '100%' }} />
                </div>
                <div className="component-controls">
                  <div className="control-row">
                    <span className="control-label">热力图</span>
                    <label className="control-toggle">
                      <input type="checkbox" checked={sinkShowHeatmap} onChange={e => setSinkShowHeatmap(e.target.checked)} />
                      {sinkShowHeatmap ? '开' : '关'}
                    </label>
                  </div>
                  <div className="control-row">
                    <span className="control-label">深度</span>
                    <input type="range" min="0" max="1" step="0.05" value={sinkDepthScale}
                      onChange={e => setSinkDepthScale(Number(e.target.value))} />
                  </div>
                </div>
              </article>
            </section>
          )}

          {/* ═══ 鞋垫 3D 模型 ═══ */}
          {activeKey === 'insole-3d' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>鞋垫 3D 模型</h2>
                <span className="section-desc">Three.js 鞋垫压力 3D 渲染，支持热力图与深度控制。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>InsoleScene</h3><p>鞋垫 3D 模型，适用于站立评估的足底压力可视化。</p></div>
                  <div className="component-tag">新增 · 渲染类</div>
                </div>
                <div className="component-demo" style={{ background: '#e8ecf0' }}>
                  <div style={{ height: '25rem', width: '100%' }}>
                    <InsoleScene showHeatmap={insoleShowHeatmap} enableClipping={false} depthScale={insoleDepthScale} />
                  </div>
                </div>
                <div className="component-controls">
                  <div className="control-row">
                    <span className="control-label">热力图</span>
                    <label className="control-toggle">
                      <input type="checkbox" checked={insoleShowHeatmap} onChange={e => setInsoleShowHeatmap(e.target.checked)} />
                      {insoleShowHeatmap ? '开' : '关'}
                    </label>
                  </div>
                  <div className="control-row">
                    <span className="control-label">深度</span>
                    <input type="range" min="0" max="1" step="0.05" value={insoleDepthScale}
                      onChange={e => setInsoleDepthScale(Number(e.target.value))} />
                  </div>
                </div>
                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre><code>{`import { InsoleScene } from 'shroomcomlibrary/heatmap/insole'

<InsoleScene
  showHeatmap={true}
  enableClipping={false}
  depthScale={0.3}
/>`}</code></pre>
                </div>
              </article>
            </section>
          )}

          {/* ═══ 足部 3D 模型 ═══ */}
          {activeKey === 'foot-3d' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>足部 3D 模型</h2>
                <span className="section-desc">Three.js 足部模型，用于步态分析可视化。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>FootModel</h3><p>足部 3D 模型，支持录制状态切换。</p></div>
                  <div className="component-tag">新增 · 渲染类</div>
                </div>
                <div className="component-demo" style={{ background: '#e8ecf0' }}>
                  <div style={{ height: '25rem', width: '100%' }}>
                    <FootModel isRecording={false} />
                  </div>
                </div>
                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre><code>{`import { FootModel } from 'shroomcomlibrary/heatmap/foot'

<FootModel isRecording={false} />`}</code></pre>
                </div>
              </article>
            </section>
          )}

          {/* ═══ 人体 3D 模型 ═══ */}
          {activeKey === 'human-3d' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>人体 3D 模型</h2>
                <span className="section-desc">Three.js 人体模型，支持多种评估姿态。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>HumanModel</h3><p>人体 3D 模型，支持起坐/站立等姿态切换。</p></div>
                  <div className="component-tag">新增 · 渲染类</div>
                </div>
                <div className="component-demo" style={{ background: '#e8ecf0' }}>
                  <div style={{ height: '25rem', width: '100%' }}>
                    <HumanModel type={humanType} isRecording={false} />
                  </div>
                </div>
                <div className="component-controls">
                  <div className="control-row">
                    <span className="control-label">姿态类型</span>
                    <select value={humanType} onChange={e => setHumanType(e.target.value)}>
                      <option value="sitstand">起坐</option>
                      <option value="standing">站立</option>
                      <option value="gait">步态</option>
                    </select>
                  </div>
                </div>
                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre><code>{`import { HumanModel } from 'shroomcomlibrary/heatmap/human'

<HumanModel type="sitstand" isRecording={false} />`}</code></pre>
                </div>
              </article>
            </section>
          )}

          {/* ═══ 起坐渲染 ═══ */}
          {activeKey === 'sit-and-foot' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>起坐渲染</h2>
                <span className="section-desc">Three.js 起坐场景渲染。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>SitAndFootScene</h3><p>起坐评估 3D 场景。</p></div>
                  <div className="component-tag">渲染类</div>
                </div>
                <div className="component-demo">
                  <SitAndFootScene style={{ height: '25rem', width: '100%' }} />
                </div>
              </article>
            </section>
          )}

          {/* ═══ 步道渲染 ═══ */}
          {activeKey === 'foot-len' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>步道渲染</h2>
                <span className="section-desc">Three.js 步道场景渲染。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>FootLenScene</h3><p>步道 3D 场景。</p></div>
                  <div className="component-tag">渲染类</div>
                </div>
                <div className="component-demo">
                  <FootLenScene style={{ height: '25rem', width: '100%' }} />
                </div>
              </article>
            </section>
          )}

          {/* ═══ 步道下陷 ═══ */}
          {activeKey === 'foot-sink' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>步道下陷</h2>
                <span className="section-desc">Three.js 步道下陷渲染。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>FootSinkScene</h3><p>步道下陷 3D 场景。</p></div>
                  <div className="component-tag">渲染类</div>
                </div>
                <div className="component-demo">
                  <FootSinkScene style={{ height: '25rem', width: '100%' }} />
                </div>
              </article>
            </section>
          )}

          {/* ═══ 回放控制条 ═══ */}
          {activeKey === 'ui-playback' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>回放控制条</h2>
                <span className="section-desc">播放/暂停/进度控制组件。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>PlaybackBar</h3><p>回放控制条，支持播放、暂停、拖拽进度。</p></div>
                  <div className="component-tag">UI 组件</div>
                </div>
                <div className="component-demo" style={{ background: '#fff', padding: '1rem' }}>
                  <PlaybackBar totalFrames={500} />
                </div>
              </article>
            </section>
          )}

          {/* ═══ Button 按钮 ═══ */}
          {activeKey === 'ui-button' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>Button 按钮</h2>
                <span className="section-desc">多变体、多尺寸的按钮组件。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>Button</h3><p>支持 default / primary / outline / ghost / destructive 变体。</p></div>
                  <div className="component-tag">新增 · UI 组件</div>
                </div>
                <div className="component-demo" style={{ background: '#fff', padding: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <Button>默认按钮</Button>
                  <Button variant="primary">主要按钮</Button>
                  <Button variant="outline">描边按钮</Button>
                  <Button variant="ghost">幽灵按钮</Button>
                  <Button variant="destructive">危险按钮</Button>
                  <Button size="sm">小按钮</Button>
                  <Button size="lg">大按钮</Button>
                  <Button disabled>禁用按钮</Button>
                </div>
                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre><code>{`import { Button } from 'shroomcomlibrary/ui'

<Button variant="primary" size="lg">主要按钮</Button>
<Button variant="outline">描边按钮</Button>
<Button disabled>禁用按钮</Button>`}</code></pre>
                </div>
                <div className="component-props">
                  <div className="usage-title">Props</div>
                  <div className="props-grid">
                    <div className="props-row"><div className="props-name">variant</div><div>"default" | "primary" | "outline" | "ghost" | "destructive"</div></div>
                    <div className="props-row"><div className="props-name">size</div><div>"default" | "sm" | "lg" | "icon"</div></div>
                    <div className="props-row"><div className="props-name">disabled</div><div>布尔值，是否禁用。</div></div>
                  </div>
                </div>
              </article>
            </section>
          )}

          {/* ═══ Card 卡片 ═══ */}
          {activeKey === 'ui-card' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>Card 卡片</h2>
                <span className="section-desc">内容容器卡片组件。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>Card</h3><p>包含 CardHeader / CardTitle / CardContent 子组件。</p></div>
                  <div className="component-tag">新增 · UI 组件</div>
                </div>
                <div className="component-demo" style={{ background: '#f8fafc', padding: '1.5rem' }}>
                  <Card>
                    <CardHeader><CardTitle>评估结果</CardTitle></CardHeader>
                    <CardContent>
                      <p style={{ color: '#666', margin: 0 }}>握力评估得分：85分，属于正常范围。</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre><code>{`import { Card, CardHeader, CardTitle, CardContent } from 'shroomcomlibrary/ui'

<Card>
  <CardHeader><CardTitle>标题</CardTitle></CardHeader>
  <CardContent>内容</CardContent>
</Card>`}</code></pre>
                </div>
              </article>
            </section>
          )}

          {/* ═══ Input 输入框 ═══ */}
          {activeKey === 'ui-input' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>Input 输入框</h2>
                <span className="section-desc">通用输入框组件。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>Input</h3><p>支持各种 HTML input 类型。</p></div>
                  <div className="component-tag">新增 · UI 组件</div>
                </div>
                <div className="component-demo" style={{ background: '#fff', padding: '1.5rem', display: 'grid', gap: '0.75rem', maxWidth: 400 }}>
                  <Input placeholder="请输入姓名..." />
                  <Input type="password" placeholder="请输入密码..." />
                  <Input type="number" placeholder="请输入年龄..." />
                </div>
                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre><code>{`import { Input } from 'shroomcomlibrary/ui'

<Input placeholder="请输入..." />
<Input type="password" placeholder="密码" />`}</code></pre>
                </div>
              </article>
            </section>
          )}

          {/* ═══ Select 选择器 ═══ */}
          {activeKey === 'ui-select' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>Select 选择器</h2>
                <span className="section-desc">下拉选择组件。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>Select</h3><p>支持 placeholder 和自定义选项。</p></div>
                  <div className="component-tag">新增 · UI 组件</div>
                </div>
                <div className="component-demo" style={{ background: '#fff', padding: '1.5rem', maxWidth: 300 }}>
                  <Select placeholder="请选择评估类型">
                    <SelectItem value="grip">握力评估</SelectItem>
                    <SelectItem value="sitstand">起坐评估</SelectItem>
                    <SelectItem value="standing">站立评估</SelectItem>
                    <SelectItem value="gait">步态评估</SelectItem>
                  </Select>
                </div>
                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre><code>{`import { Select, SelectItem } from 'shroomcomlibrary/ui'

<Select placeholder="请选择">
  <SelectItem value="grip">握力评估</SelectItem>
  <SelectItem value="standing">站立评估</SelectItem>
</Select>`}</code></pre>
                </div>
              </article>
            </section>
          )}

          {/* ═══ ViewToggle 切换 ═══ */}
          {activeKey === 'ui-view-toggle' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>ViewToggle 视图切换</h2>
                <span className="section-desc">2D / 3D 视图切换按钮组。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>ViewToggle</h3><p>用于切换 2D 和 3D 视图模式。</p></div>
                  <div className="component-tag">新增 · UI 组件</div>
                </div>
                <div className="component-demo" style={{ background: '#fff', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <ViewToggle viewMode={viewMode} onToggle={setViewMode} />
                  <span style={{ color: '#666' }}>当前模式: {viewMode}</span>
                </div>
                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre><code>{`import { ViewToggle } from 'shroomcomlibrary/ui'

<ViewToggle viewMode={mode} onToggle={setMode} />`}</code></pre>
                </div>
              </article>
            </section>
          )}

          {/* ═══ 握力评估报告 ═══ */}
          {activeKey === 'report-grip' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>握力评估报告</h2>
                <span className="section-desc">完整的握力评估报告组件，包含多维度分析。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>GripReport</h3><p>多 Tab 报告页面，含压力分布、时间分析、力曲线等。</p></div>
                  <div className="component-tag">新增 · 报告类</div>
                </div>
                <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', marginTop: '1rem' }}>
                  <GripReport patientName="演示患者" onClose={() => {}} />
                </div>
                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre><code>{`import { GripReport } from 'shroomcomlibrary/report/grip'

<GripReport patientName="患者姓名" onClose={handleClose} />`}</code></pre>
                </div>
              </article>
            </section>
          )}

          {/* ═══ 站立评估报告 ═══ */}
          {activeKey === 'report-standing' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>站立评估报告</h2>
                <span className="section-desc">站立评估报告组件，分析足底压力分布。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>StandingReport</h3><p>站立评估报告，含 CoP 轨迹、压力分布等。</p></div>
                  <div className="component-tag">新增 · 报告类</div>
                </div>
                <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', marginTop: '1rem' }}>
                  <StandingReport patientName="演示患者" onClose={() => {}} />
                </div>
                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre><code>{`import { StandingReport } from 'shroomcomlibrary/report/standing'

<StandingReport patientName="患者姓名" onClose={handleClose} />`}</code></pre>
                </div>
              </article>
            </section>
          )}

          {/* ═══ 步态时间线 ═══ */}
          {activeKey === 'gait-timeline' && (
            <section className="docs-section">
              <div className="section-head">
                <h2>步态时间线</h2>
                <span className="section-desc">步态分析时间线组件。</span>
              </div>
              <article className="component-card">
                <div className="component-head">
                  <div><h3>GaitVisualizations</h3><p>包含 FootprintHeatmapCanvas、PressureEvolutionCanvas、GaitAverageSummaryCanvas 等组件。</p></div>
                  <div className="component-tag">新增 · 分析类</div>
                </div>
                <div className="component-demo" style={{ background: '#fff', padding: '1rem' }}>
                  <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <FootprintHeatmapCanvas leftSteps={[]} rightSteps={[]} width={200} height={350} />
                    <GaitAverageSummaryCanvas width={300} height={200} />
                  </div>
                </div>
                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre><code>{`import { GaitVisualizations } from 'shroomcomlibrary/gait'

<GaitVisualizations data={gaitData} />`}</code></pre>
                </div>
              </article>
            </section>
          )}

        </section>
      </main>
    </div>
  )
}
