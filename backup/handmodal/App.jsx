import React, { useEffect, useMemo, useState } from 'react'
import * as echarts from 'echarts'
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

const toNumber = (value, fallback = 0) => {
  const num = Number(value)
  return Number.isFinite(num) ? num : fallback
}

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

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

export default function App() {
  const line1 = useMemo(
    () => Array.from({ length: 500 }, () => Math.round(Math.random() * 300)),
    []
  )
  const [idx, setIdx] = useState(0)
  const [activeKey, setActiveKey] = useState('realtime')
  const [chartsOpen, setChartsOpen] = useState(true)
  const [renderOpen, setRenderOpen] = useState(true)
  const [uiOpen, setUiOpen] = useState(true)

  const [matrixRows, setMatrixRows] = useState(16)
  const [matrixCols, setMatrixCols] = useState(16)
  const [matrixSize, setMatrixSize] = useState(4)
  const [matrixMin, setMatrixMin] = useState(0)
  const [matrixMax, setMatrixMax] = useState(300)
  const [matrixColors, setMatrixColors] = useState(['#12D0BE', '#E2E8F0', '#D3C2FF'])
  const [matrixColorsInput, setMatrixColorsInput] = useState('#12D0BE,#E2E8F0,#D3C2FF')
  const [matrixZoomable, setMatrixZoomable] = useState(true)
  const [matrixPan, setMatrixPan] = useState(true)

  const [heatRows, setHeatRows] = useState(32)
  const [heatCols, setHeatCols] = useState(32)
  const [heatMin, setHeatMin] = useState(0)
  const [heatMax, setHeatMax] = useState(200)
  const [heatFilter, setHeatFilter] = useState(10)
  const [heatIntensity, setHeatIntensity] = useState(1)
  const [heatDotSize, setHeatDotSize] = useState(16)
  const [heatBlur, setHeatBlur] = useState(10)
  const [heatColors, setHeatColors] = useState(['#0f172a', '#22d3ee', '#f97316'])
  const [heatColorsInput, setHeatColorsInput] = useState('#0f172a,#22d3ee,#f97316')

  const [pointGauss, setPointGauss] = useState(1)
  const [pointColor, setPointColor] = useState(200)
  const [pointFilter, setPointFilter] = useState(0)
  const [pointHeight, setPointHeight] = useState(1)
  const [pointCoherent, setPointCoherent] = useState(1)
  const [pointSeparation, setPointSeparation] = useState(100)
  const [controlsEnabled, setControlsEnabled] = useState(true)
  const [rotateSpeed, setRotateSpeed] = useState(1)
  const [zoomSpeed, setZoomSpeed] = useState(1.2)
  const [panSpeed, setPanSpeed] = useState(0.8)

  const [webglSize, setWebglSize] = useState(64)
  const [webglMax, setWebglMax] = useState(12)
  const [webglRadius, setWebglRadius] = useState(24)
  const [webglFilter, setWebglFilter] = useState(0)
  const [webglBorder, setWebglBorder] = useState(6)
  const [webglMirror, setWebglMirror] = useState(true)
  const [webglCanvasSize, setWebglCanvasSize] = useState(512)

  const [handType, setHandType] = useState('left')
  const [handRecording, setHandRecording] = useState(false)
  const [handPressure, setHandPressure] = useState(0)
  const [handData, setHandData] = useState(null)

  const [sinkShowHeatmap, setSinkShowHeatmap] = useState(true)
  const [sinkEnableClipping, setSinkEnableClipping] = useState(false)
  const [sinkClipLevel, setSinkClipLevel] = useState(0.35)
  const [sinkDepthScale, setSinkDepthScale] = useState(0.35)
  const [sinkSmoothness, setSinkSmoothness] = useState(0.6)
  const [sinkRealtimeData, setSinkRealtimeData] = useState(null)

  const [sitShowHeatmap, setSitShowHeatmap] = useState(true)
  const [sitEnableClipping, setSitEnableClipping] = useState(false)
  const [sitClipLevel, setSitClipLevel] = useState(0.5)
  const [sitDepthScale, setSitDepthScale] = useState(0.25)
  const [sitSmoothness, setSitSmoothness] = useState(0.5)
  const [sitSeatData, setSitSeatData] = useState(null)
  const [sitFootpadData, setSitFootpadData] = useState(null)

  const [footShowHeatmap, setFootShowHeatmap] = useState(true)
  const [footDepthScale, setFootDepthScale] = useState(0.1)
  const [footSmoothness, setFootSmoothness] = useState(0.5)
  const [footSensorData, setFootSensorData] = useState(null)

  const [footSinkShowHeatmap, setFootSinkShowHeatmap] = useState(true)
  const [footSinkEnableClipping, setFootSinkEnableClipping] = useState(false)
  const [footSinkClipLevel, setFootSinkClipLevel] = useState(0.35)
  const [footSinkDepthScale, setFootSinkDepthScale] = useState(0.35)
  const [footSinkSmoothness, setFootSinkSmoothness] = useState(0.6)
  const [footSinkRealtimeData, setFootSinkRealtimeData] = useState(null)

  const [playbackIndex, setPlaybackIndex] = useState(0)
  const [playbackSpeed, setPlaybackSpeed] = useState('1.0')
  const [playbackPaused, setPlaybackPaused] = useState(true)
  const [playbackTimestamp, setPlaybackTimestamp] = useState(Date.now())

  const parseColorList = (value, fallback) => {
    const next = String(value || '')
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean)
    return next.length ? next : fallback
  }

  const buildGrid = (size, maxValue) => {
    const rows = new Array(size)
    for (let r = 0; r < size; r++) {
      const row = new Array(size)
      for (let c = 0; c < size; c++) {
        row[c] = Math.round(Math.random() * maxValue)
      }
      rows[r] = row
    }
    return rows
  }

  const buildRect = (rows, cols, maxValue) => {
    const data = new Array(rows)
    for (let r = 0; r < rows; r++) {
      const row = new Array(cols)
      for (let c = 0; c < cols; c++) {
        row[c] = Math.round(Math.random() * maxValue)
      }
      data[r] = row
    }
    return data
  }

  const buildFlat = (length, maxValue) =>
    Array.from({ length }, () => Math.round(Math.random() * maxValue))

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev >= line1.length ? 0 : prev + 1))
    }, 50)
    return () => clearInterval(timer)
  }, [line1.length])

  const line2 = useMemo(() => line1.slice(0, idx), [line1, idx])

  useEffect(() => {
    setMatrixColorsInput(matrixColors.join(','))
  }, [matrixColors])

  useEffect(() => {
    setHeatColorsInput(heatColors.join(','))
  }, [heatColors])

  useEffect(() => {
    setPlaybackTimestamp(Date.now())
  }, [playbackIndex])

  useEffect(() => {
    if (activeKey !== 'three-sink') return
    const timer = setInterval(() => {
      setSinkRealtimeData(buildGrid(64, 255))
    }, 100)
    return () => clearInterval(timer)
  }, [activeKey])

  useEffect(() => {
    if (activeKey !== 'sit-and-foot') return
    const timer = setInterval(() => {
      setSitSeatData(buildGrid(64, 255))
      setSitFootpadData(buildGrid(64, 255))
    }, 100)
    return () => clearInterval(timer)
  }, [activeKey])

  useEffect(() => {
    if (activeKey !== 'foot-len') return
    const update = () => {
      console.log('xuanran')
      setFootSensorData({
        sensor1: buildFlat(64 * 64, 255),
        sensor2: buildFlat(64 * 64, 255),
        sensor3: buildFlat(64 * 64, 255),
        sensor4: buildFlat(64 * 64, 255)
      })
    }

    update()
    const timer = setInterval(update, 100)
    return () => clearInterval(timer)
  }, [activeKey])

  useEffect(() => {
    if (activeKey !== 'hand-heatmap') return
    const update = () => {
      setHandData(buildFlat(16 * 16, 500))
      setHandPressure(Math.round(Math.random() * 100))
    }
    update()
    const timer = setInterval(update, 200)
    return () => clearInterval(timer)
  }, [activeKey])

  useEffect(() => {
    if (activeKey !== 'foot-sink') return
    const timer = setInterval(() => {
      setFootSinkRealtimeData(buildRect(64, 256, 255))
    }, 100)
    return () => clearInterval(timer)
  }, [activeKey])

  const matrixData = useMemo(
    () => Array.from({ length: matrixRows * matrixCols }, () => Math.round(Math.random() * matrixMax)),
    [matrixRows, matrixCols, matrixMax]
  )

  const heatmapData = useMemo(
    () => Array.from({ length: heatRows * heatCols }, () => Math.round(Math.random() * heatMax)),
    [heatRows, heatCols, heatMax]
  )

  const webglData = useMemo(
    () => Array.from({ length: webglSize * webglSize }, () => Math.round(Math.random() * webglMax)),
    [webglSize, webglMax]
  )

  const pointSettings = useMemo(
    () => ({
      gauss: pointGauss,
      color: pointColor,
      filter: pointFilter,
      height: pointHeight,
      coherent: pointCoherent
    }),
    [pointGauss, pointColor, pointFilter, pointHeight, pointCoherent]
  )

  const pointControls = useMemo(
    () => ({
      enabled: controlsEnabled,
      rotateSpeed,
      zoomSpeed,
      panSpeed,
      staticMoving: true,
      dynamicDampingFactor: 0.2
    }),
    [controlsEnabled, rotateSpeed, zoomSpeed, panSpeed]
  )

  const threePointData = useMemo(
    () => ({
      sit: Array.from({ length: 32 * 32 }, () => Math.round(Math.random() * 200)),
      back: Array.from({ length: 32 * 32 }, () => Math.round(Math.random() * 200))
    }),
    []
  )


  return (
    <div className="docs">
      <header className="docs-hero">
        <div>
          <h1>shroomComLibrary</h1>
          <p>轻量 React 组件库，支持图表与渲染类组件的快速接入与复用。</p>
        </div>
        <div className="docs-cta">
          <code>npm i shroomcomlibrary echarts three</code>
        </div>
      </header>

      <main className="docs-body">
        <aside className="docs-sider">
          <div className="sider-title">组件分类</div>
          <div className="sider-group">
            <button
              className="sider-group-title"
              type="button"
              onClick={() => setChartsOpen((prev) => !prev)}
              aria-expanded={chartsOpen}
            >
              图表
              <span className={chartsOpen ? 'chevron is-open' : 'chevron'}>?</span>
            </button>
            {chartsOpen && (
              <nav className="sider-list">
                <button
                  className={activeKey === 'realtime' ? 'is-active' : ''}
                  onClick={() => setActiveKey('realtime')}
                  type="button"
                >
                  实时
                </button>
                <button
                  className={activeKey === 'replay' ? 'is-active' : ''}
                  onClick={() => setActiveKey('replay')}
                  type="button"
                >
                  回放
                </button>
              </nav>
            )}
          </div>

          <div className="sider-group">
            <button
              className="sider-group-title"
              type="button"
              onClick={() => setRenderOpen((prev) => !prev)}
              aria-expanded={renderOpen}
            >
              渲染
              <span className={renderOpen ? 'chevron is-open' : 'chevron'}>?</span>
            </button>
            {renderOpen && (
              <nav className="sider-list">
                <button
                  className={activeKey === 'matrix' ? 'is-active' : ''}
                  onClick={() => setActiveKey('matrix')}
                  type="button"
                >
                  数字矩阵
                </button>
                <button
                  className={activeKey === 'canvas-heatmap' ? 'is-active' : ''}
                  onClick={() => setActiveKey('canvas-heatmap')}
                  type="button"
                >
                  Canvas 热力图
                </button>
                <button
                  className={activeKey === 'webgl-heatmap' ? 'is-active' : ''}
                  onClick={() => setActiveKey('webgl-heatmap')}
                  type="button"
                >
                  WebGL 热力图
                </button>
                <button
                  className={activeKey === 'hand-heatmap' ? 'is-active' : ''}
                  onClick={() => setActiveKey('hand-heatmap')}
                  type="button"
                >
                  手部热力图
                </button>
                <button
                  className={activeKey === 'three-point' ? 'is-active' : ''}
                  onClick={() => setActiveKey('three-point')}
                  type="button"
                >
                  3D 点图
                </button>
                <button
                  className={activeKey === 'three-sink' ? 'is-active' : ''}
                  onClick={() => setActiveKey('three-sink')}
                  type="button"
                >
                  下陷渲染
                </button>
                <button
                  className={activeKey === 'sit-and-foot' ? 'is-active' : ''}
                  onClick={() => setActiveKey('sit-and-foot')}
                  type="button"
                >
                  起坐渲染
                </button>
                <button
                  className={activeKey === 'foot-len' ? 'is-active' : ''}
                  onClick={() => setActiveKey('foot-len')}
                  type="button"
                >
                  步道渲染
                </button>
                <button
                  className={activeKey === 'foot-sink' ? 'is-active' : ''}
                  onClick={() => setActiveKey('foot-sink')}
                  type="button"
                >
                  步道下陷
                </button>
              </nav>
            )}
          </div>

          <div className="sider-group">
            <button
              className="sider-group-title"
              type="button"
              onClick={() => setUiOpen((prev) => !prev)}
              aria-expanded={uiOpen}
            >
              UI 组件
              <span className={uiOpen ? 'chevron is-open' : 'chevron'}>?</span>
            </button>
            {uiOpen && (
              <nav className="sider-list">
                <button
                  className={activeKey === 'ui-playback' ? 'is-active' : ''}
                  onClick={() => setActiveKey('ui-playback')}
                  type="button"
                >
                  回放
                </button>
              </nav>
            )}
          </div>
        </aside>

        <section className="docs-content single">

          {activeKey === 'realtime' ? (
            <section id="realtime" className="docs-section">
              <div className="section-head">
                <h2>实时</h2>
                <span className="section-desc">多折线面积图，支持渐变填充。</span>
              </div>

              <article className="component-card">
                <div className="component-head">
                  <div>
                    <h3>SimpleLineChart</h3>
                    <p>实时折线图，适合展示多系列趋势。</p>
                  </div>
                  <div className="component-tag">图表类</div>
                </div>

                <div className="component-demo">
                  <SimpleLineChart {...example} />
                </div>

                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre>
                    <code>{`import { SimpleLineChart } from 'shroomcomlibrary/charts/realtime'
import * as echarts from 'echarts'

const area1 = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  { offset: 0, color: 'rgba(63,211,228,1)' },
  { offset: 0.65, color: 'rgba(39,117,143,0.26)' },
  { offset: 1, color: 'rgba(26,28,32,0)' }
])

<SimpleLineChart
  xData={[1, 2, 3, 4, 5]}
  yData={{ a: [1, 3, 2, 4, 5], b: [2, 2, 3, 3, 4] }}
  yMax={6}
  lineColors={['#12D0BE', '#D3C2FF']}
  areaColors={[area1, null]}
  style={{ height: '7.5rem', width: '20.35rem', opacity: 0.8 }}
/>`}</code>
                  </pre>
                </div>

                <div className="component-props">
                  <div className="usage-title">Props</div>
                  <div className="props-grid">
                    <div className="props-row">
                      <div className="props-name">xData</div>
                      <div>数组，x 轴数据。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">yData</div>
                      <div>对象，系列数据，如 <code>{`{ a: [..], b: [..] }`}</code>。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">yMax</div>
                      <div>数字，y 轴最大值。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">lineColors</div>
                      <div>数组，折线颜色。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">areaColors</div>
                      <div>数组，面积颜色，可传 `echarts.graphic.LinearGradient`。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">className</div>
                      <div>容器类名。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">style</div>
                      <div>容器样式，需要显式宽高。</div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          ) : activeKey === 'replay' ? (
            <section id="replay" className="docs-section">
              <div className="section-head">
                <h2>回放</h2>
                <span className="section-desc">用于数据回放与滑动窗口展示。</span>
              </div>

              <article className="component-card">
                <div className="component-head">
                  <div>
                    <h3>ReplayWindowLineChart</h3>
                    <p>回放折线图，支持外部传入 line1/line2。</p>
                  </div>
                  <div className="component-tag">图表类</div>
                </div>

                <div className="component-demo">
                  <ReplayWindowLineChart
                    series={[
                      { name: 'line1', data: line1, color: '#12D0BE' },
                      { name: 'line2', data: line2, color: '#D3C2FF', showLastDot: true }
                    ]}
                    yMax={320}
                    style={{ height: '7.5rem' }}
                  />
                </div>

                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre>
                    <code>{`import { ReplayWindowLineChart } from 'shroomcomlibrary/charts/replay'

<ReplayWindowLineChart
  series={[
    { name: 'line1', data: line1, color: '#12D0BE' },
    { name: 'line2', data: line2, color: '#D3C2FF', showLastDot: true }
  ]}
  yMax={320}
  style={{ height: '7.5rem' }}
/>`}</code>
                  </pre>
                </div>

                <div className="component-props">
                  <div className="usage-title">Props</div>
                  <div className="props-grid">
                    <div className="props-row">
                      <div className="props-name">series</div>
                      <div>数组，线条配置（data/color/showLastDot）。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">fullX</div>
                      <div>数组，可选，指定 X 轴数据。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">currentIndex</div>
                      <div>数字，可选，传入后按索引切片。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">windowSize</div>
                      <div>数字，可选，滑动窗口大小。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">yMax</div>
                      <div>数字，y 轴最大值。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">className</div>
                      <div>容器类名。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">style</div>
                      <div>容器样式，需要显式高度。</div>
                    </div>
                  </div>
                </div>
              </article>
            </section>

          ) : activeKey === 'matrix' ? (
            <section id="matrix" className="docs-section">
              <div className="section-head">
                <h2>数字矩阵</h2>
                <span className="section-desc">Three.js 数字矩阵渲染，可缩放拖拽。</span>
              </div>

              <article className="component-card">
                <div className="component-head">
                  <div>
                    <h3>NumThreeColor</h3>
                    <p>支持自定义颜色、矩阵大小与数据源。</p>
                  </div>
                  <div className="component-tag">渲染类</div>
                </div>

                <div className="component-controls">
                  <div className="control-row">
                    <span className="control-label">矩阵行列</span>
                    <div className="control-inline">
                      <input
                        type="number"
                        min="1"
                        value={matrixRows}
                        onChange={(e) => setMatrixRows(clamp(toNumber(e.target.value, 16), 1, 128))}
                      />
                      <input
                        type="number"
                        min="1"
                        value={matrixCols}
                        onChange={(e) => setMatrixCols(clamp(toNumber(e.target.value, 16), 1, 128))}
                      />
                    </div>
                  </div>
                  <div className="control-row">
                    <span className="control-label">单元尺寸</span>
                    <input
                      type="number"
                      min="1"
                      value={matrixSize}
                      onChange={(e) => setMatrixSize(clamp(toNumber(e.target.value, 4), 1, 10))}
                    />
                  </div>
                  <div className="control-row">
                    <span className="control-label">数值范围</span>
                    <div className="control-inline">
                      <input
                        type="number"
                        value={matrixMin}
                        onChange={(e) => setMatrixMin(toNumber(e.target.value, 0))}
                      />
                      <input
                        type="number"
                        value={matrixMax}
                        onChange={(e) => setMatrixMax(toNumber(e.target.value, 300))}
                      />
                    </div>
                  </div>
                  <div className="control-row">
                    <span className="control-label">颜色</span>
                    <div className="control-inline">
                      <input
                        type="text"
                        value={matrixColorsInput}
                        onChange={(e) => setMatrixColorsInput(e.target.value)}
                        onBlur={() => setMatrixColors(parseColorList(matrixColorsInput, matrixColors))}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            setMatrixColors(parseColorList(matrixColorsInput, matrixColors))
                          }
                        }}
                        placeholder="#12D0BE,#E2E8F0,#D3C2FF"
                      />
                    </div>
                  </div>
                  <div className="control-row">
                    <span className="control-label">交互</span>
                    <div className="control-inline">
                      <label className="control-toggle">
                        <input
                          type="checkbox"
                          checked={matrixZoomable}
                          onChange={(e) => setMatrixZoomable(e.target.checked)}
                        />
                        缩放
                      </label>
                      <label className="control-toggle">
                        <input
                          type="checkbox"
                          checked={matrixPan}
                          onChange={(e) => setMatrixPan(e.target.checked)}
                        />
                        平移
                      </label>
                    </div>
                  </div>
                </div>

                <div className="component-demo" style={{ height: '20rem' }}>
                  <NumThreeColor
                    data={matrixData}
                    rows={matrixRows}
                    cols={matrixCols}
                    size={matrixSize}
                    colors={matrixColors}
                    zoomable={matrixZoomable}
                    panEnabled={matrixPan}
                    valueRange={[matrixMin, matrixMax]}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>

                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre>
                    <code>{`import { NumThreeColor } from 'shroomcomlibrary/heatmap/num-three-color'

<NumThreeColor
  data={data}
  rows={16}
  cols={16}
  colors={['#12D0BE', '#E2E8F0', '#D3C2FF']}
  zoomable
  valueRange={[0, 300]}
  style={{ width: 400, height: 400 }}
/>`}</code>
                  </pre>
                </div>

                <div className="component-props">
                  <div className="usage-title">Props</div>
                  <div className="props-grid">
                    <div className="props-row">
                      <div className="props-name">data</div>
                      <div>数组，长度建议 = rows * cols。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">rows / cols</div>
                      <div>矩阵行列数。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">colors</div>
                      <div>2~3 个渐变颜色。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">zoomable</div>
                      <div>是否允许缩放/拖拽。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">valueRange</div>
                      <div>数值映射范围 [min, max]。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">style</div>
                      <div>容器样式，需要显式宽高。</div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          ) : activeKey === 'canvas-heatmap' ? (
            <section id="canvas-heatmap" className="docs-section">
              <div className="section-head">
                <h2>Canvas 热力图</h2>
                <span className="section-desc">基于 2D Canvas 的热力渲染。</span>
              </div>

              <article className="component-card">
                <div className="component-head">
                  <div>
                    <h3>CanvasHeatmap</h3>
                    <p>支持颜色数组、过滤值、颜色强度与单位圆大小。</p>
                  </div>
                  <div className="component-tag">渲染类</div>
                </div>

                <div className="component-controls">
                  <div className="control-row">
                    <span className="control-label">矩阵行列</span>
                    <div className="control-inline">
                      <input
                        type="number"
                        min="1"
                        value={heatRows}
                        onChange={(e) => setHeatRows(clamp(toNumber(e.target.value, 32), 1, 128))}
                      />
                      <input
                        type="number"
                        min="1"
                        value={heatCols}
                        onChange={(e) => setHeatCols(clamp(toNumber(e.target.value, 32), 1, 128))}
                      />
                    </div>
                  </div>
                  <div className="control-row">
                    <span className="control-label">数值范围</span>
                    <div className="control-inline">
                      <input
                        type="number"
                        value={heatMin}
                        onChange={(e) => setHeatMin(toNumber(e.target.value, 0))}
                      />
                      <input
                        type="number"
                        value={heatMax}
                        onChange={(e) => setHeatMax(toNumber(e.target.value, 200))}
                      />
                    </div>
                  </div>
                  <div className="control-row">
                    <span className="control-label">颜色</span>
                    <div className="control-inline">
                      <input
                        type="text"
                        value={heatColorsInput}
                        onChange={(e) => setHeatColorsInput(e.target.value)}
                        onBlur={() => setHeatColors(parseColorList(heatColorsInput, heatColors))}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            setHeatColors(parseColorList(heatColorsInput, heatColors))
                          }
                        }}
                        placeholder="#0f172a,#22d3ee,#f97316"
                      />
                    </div>
                  </div>
                  <div className="control-row">
                    <span className="control-label">过滤阈值</span>
                    <input
                      type="number"
                      value={heatFilter}
                      onChange={(e) => setHeatFilter(toNumber(e.target.value, 10))}
                    />
                  </div>
                  <div className="control-row">
                    <span className="control-label">强度/大小</span>
                    <div className="control-inline">
                      <input
                        type="number"
                        step="0.1"
                        value={heatIntensity}
                        onChange={(e) => setHeatIntensity(toNumber(e.target.value, 1))}
                      />
                      <input
                        type="number"
                        value={heatDotSize}
                        onChange={(e) => setHeatDotSize(toNumber(e.target.value, 16))}
                      />
                      <input
                        type="number"
                        value={heatBlur}
                        onChange={(e) => setHeatBlur(toNumber(e.target.value, 10))}
                      />
                    </div>
                  </div>
                </div>

                <div className="component-demo" style={{ height: '20rem' }}>
                  <CanvasHeatmap
                    data={heatmapData}
                    rows={heatRows}
                    cols={heatCols}
                    colors={heatColors}
                    filterValue={heatFilter}
                    intensity={heatIntensity}
                    dotSize={heatDotSize}
                    blur={heatBlur}
                    minValue={heatMin}
                    maxValue={heatMax}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>

                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre>
                    <code>{`import { CanvasHeatmap } from 'shroomcomlibrary/heatmap/canvas-heatmap'

<CanvasHeatmap
  data={data}
  rows={32}
  cols={32}
  colors={['#0f172a', '#22d3ee', '#f97316']}
  filterValue={10}
  intensity={1}
  dotSize={16}
  blur={10}
  style={{ width: 400, height: 400 }}
/>`}</code>
                  </pre>
                </div>

                <div className="component-props">
                  <div className="usage-title">Props</div>
                  <div className="props-grid">
                    <div className="props-row">
                      <div className="props-name">data</div>
                      <div>数组，真实渲染数据。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">rows / cols</div>
                      <div>矩阵行列数。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">colors</div>
                      <div>颜色数组（渐变）。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">filterValue</div>
                      <div>过滤阈值，低于该值不渲染。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">intensity</div>
                      <div>颜色强度倍率（0~2）。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">dotSize</div>
                      <div>单位圆大小（像素）。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">blur</div>
                      <div>圆形模糊半径。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">minValue / maxValue</div>
                      <div>数值映射范围。</div>
                    </div>
                  </div>
                </div>
              </article>
            </section>

          ) : activeKey === 'webgl-heatmap' ? (
            <section id="webgl-heatmap" className="docs-section">
              <div className="section-head">
                <h2>WebGL 热力图</h2>
                <span className="section-desc">基于 WebGL 的大尺寸热力渲染。</span>
              </div>

              <article className="component-card">
                <div className="component-head">
                  <div>
                    <h3>WebglHeatmap</h3>
                    <p>支持半径、阈值、镜像与边缘裁剪。</p>
                  </div>
                  <div className="component-tag">渲染类</div>
                </div>

                <div className="component-controls">
                  <div className="control-row">
                    <span className="control-label">矩阵/画布</span>
                    <div className="control-inline">
                      <input
                        type="number"
                        value={webglSize}
                        onChange={(e) => setWebglSize(clamp(toNumber(e.target.value, 64), 8, 256))}
                      />
                      <input
                        type="number"
                        value={webglCanvasSize}
                        onChange={(e) => setWebglCanvasSize(clamp(toNumber(e.target.value, 512), 128, 2048))}
                      />
                    </div>
                  </div>
                  <div className="control-row">
                    <span className="control-label">强度/半径</span>
                    <div className="control-inline">
                      <input
                        type="number"
                        value={webglMax}
                        onChange={(e) => setWebglMax(toNumber(e.target.value, 12))}
                      />
                      <input
                        type="number"
                        value={webglRadius}
                        onChange={(e) => setWebglRadius(toNumber(e.target.value, 24))}
                      />
                    </div>
                  </div>
                  <div className="control-row">
                    <span className="control-label">过滤/边界</span>
                    <div className="control-inline">
                      <input
                        type="number"
                        value={webglFilter}
                        onChange={(e) => setWebglFilter(toNumber(e.target.value, 0))}
                      />
                      <input
                        type="number"
                        value={webglBorder}
                        onChange={(e) => setWebglBorder(toNumber(e.target.value, 6))}
                      />
                    </div>
                  </div>
                  <div className="control-row">
                    <span className="control-label">镜像</span>
                    <label className="control-toggle">
                      <input
                        type="checkbox"
                        checked={webglMirror}
                        onChange={(e) => setWebglMirror(e.target.checked)}
                      />
                      左右镜像
                    </label>
                  </div>
                </div>

                <div className="component-demo" style={{ height: '24rem' }}>
                  <WebglHeatmap
                    data={webglData}
                    size={webglSize}
                    maxValue={webglMax}
                    radius={webglRadius}
                    filterValue={webglFilter}
                    border={webglBorder}
                    mirrorX={webglMirror}
                    canvasWidth={webglCanvasSize}
                    canvasHeight={webglCanvasSize}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>

                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre>
                    <code>{`import { WebglHeatmap } from 'shroomcomlibrary/heatmap/webgl-heatmap'

<WebglHeatmap
  data={data}
  size={64}
  maxValue={12}
  radius={24}
  filterValue={0}
  border={6}
  mirrorX
  canvasWidth={1024}
  canvasHeight={1024}
  style={{ width: 400, height: 400 }}
/>`}</code>
                  </pre>
                </div>

                <div className="component-props">
                  <div className="usage-title">Props</div>
                  <div className="props-grid">
                    <div className="props-row">
                      <div className="props-name">data</div>
                      <div>一维或二维数组，默认 64×64。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">size</div>
                      <div>数字，矩阵边长。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">maxValue</div>
                      <div>数字，热力强度上限。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">radius</div>
                      <div>数字，热力点半径。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">filterValue</div>
                      <div>数字，低于该值不渲染。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">border</div>
                      <div>数字，边缘裁剪像素。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">mirrorX</div>
                      <div>布尔，左右镜像。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">canvasWidth / canvasHeight</div>
                      <div>画布尺寸（像素）。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">style</div>
                      <div>容器样式，需要显式宽高。</div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          ) : activeKey === 'hand-heatmap' ? (
            <section id="hand-heatmap" className="docs-section">
              <div className="section-head">
                <h2>手部热力图</h2>
                <span className="section-desc">手掌压力热力映射模型。</span>
              </div>

              <article className="component-card">
                <div className="component-head">
                  <div>
                    <h3>HandHeatmapModel</h3>
                    <p>支持左右手切换、录制状态与压力指示。</p>
                  </div>
                  <div className="component-tag">渲染类</div>
                </div>

                <div className="component-controls">
                  <div className="control-row">
                    <span className="control-label">手型</span>
                    <div className="control-inline">
                      <select value={handType} onChange={(e) => setHandType(e.target.value)}>
                        <option value="left">left</option>
                        <option value="right">right</option>
                      </select>
                    </div>
                  </div>
                  <div className="control-row">
                    <span className="control-label">录制/压力</span>
                    <div className="control-inline">
                      <label className="control-toggle">
                        <input
                          type="checkbox"
                          checked={handRecording}
                          onChange={(e) => setHandRecording(e.target.checked)}
                        />
                        录制
                      </label>
                      <input
                        type="number"
                        value={handPressure}
                        onChange={(e) => setHandPressure(toNumber(e.target.value, 0))}
                      />
                    </div>
                  </div>
                </div>

                <div className="component-demo" style={{ height: '22rem' }}>
                  <HandHeatmapModel
                    data={handData || []}
                    handType={handType}
                    isRecording={handRecording}
                    pressureValue={handPressure}
                  />
                </div>

                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre>
                    <code>{`import { HandHeatmapModel } from 'shroomcomlibrary/heatmap/hand-heatmap'

<HandHeatmapModel
  data={data} // 16x16 => 256 长度数组
  handType="left"
  isRecording={false}
  pressureValue={0}
/>`}</code>
                  </pre>
                </div>

                <div className="component-props">
                  <div className="usage-title">Props</div>
                  <div className="props-grid">
                    <div className="props-row">
                      <div className="props-name">data</div>
                      <div>数组或对象，长度 256（16×16）。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">handType</div>
                      <div>left / right。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">isRecording</div>
                      <div>是否显示录制态。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">pressureValue</div>
                      <div>压力值显示。</div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          ) : activeKey === 'three-point' ? (
            <section id="three-point" className="docs-section">
              <div className="section-head">
                <h2>3D 点图</h2>
                <span className="section-desc">Three.js 点云渲染，支持多组数据配置。</span>
              </div>

              <article className="component-card">
                <div className="component-head">
                  <div>
                    <h3>ThreeAndCarPoint</h3>
                    <p>可传入点云数据、模型与渲染参数。</p>
                  </div>
                  <div className="component-tag">渲染类</div>
                </div>

                <div className="component-controls">
                  <div className="control-row">
                    <span className="control-label">渲染参数</span>
                    <div className="control-inline">
                      <input
                        type="number"
                        value={pointGauss}
                        step="0.1"
                        onChange={(e) => setPointGauss(toNumber(e.target.value, 1))}
                        title="gauss"
                      />
                      <input
                        type="number"
                        value={pointColor}
                        onChange={(e) => setPointColor(toNumber(e.target.value, 200))}
                        title="color"
                      />
                      <input
                        type="number"
                        value={pointFilter}
                        onChange={(e) => setPointFilter(toNumber(e.target.value, 0))}
                        title="filter"
                      />
                      <input
                        type="number"
                        value={pointHeight}
                        step="0.1"
                        onChange={(e) => setPointHeight(toNumber(e.target.value, 1))}
                        title="height"
                      />
                      <input
                        type="number"
                        value={pointCoherent}
                        step="0.1"
                        onChange={(e) => setPointCoherent(toNumber(e.target.value, 1))}
                        title="coherent"
                      />
                    </div>
                  </div>
                  <div className="control-row">
                    <span className="control-label">点间距</span>
                    <input
                      type="number"
                      value={pointSeparation}
                      onChange={(e) => setPointSeparation(toNumber(e.target.value, 100))}
                    />
                  </div>
                  <div className="control-row">
                    <span className="control-label">控制器</span>
                    <div className="control-inline">
                      <label className="control-toggle">
                        <input
                          type="checkbox"
                          checked={controlsEnabled}
                          onChange={(e) => setControlsEnabled(e.target.checked)}
                        />
                        启用
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={rotateSpeed}
                        onChange={(e) => setRotateSpeed(toNumber(e.target.value, 1))}
                        title="rotate"
                      />
                      <input
                        type="number"
                        step="0.1"
                        value={zoomSpeed}
                        onChange={(e) => setZoomSpeed(toNumber(e.target.value, 1.2))}
                        title="zoom"
                      />
                      <input
                        type="number"
                        step="0.1"
                        value={panSpeed}
                        onChange={(e) => setPanSpeed(toNumber(e.target.value, 0.8))}
                        title="pan"
                      />
                    </div>
                  </div>
                </div>

                <div className="component-demo" style={{ height: '24rem' }}>
                  <ThreeAndCarPoint
                    data={threePointData}
                    settings={pointSettings}
                    separation={pointSeparation}
                    controlsConfig={pointControls}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>

                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre>
                    <code>{`import { ThreeAndCarPoint } from 'shroomcomlibrary/heatmap/three-point'

<ThreeAndCarPoint
  data={{ sit: sitData, back: backData }}
  modelUrl="/model/chair3.glb"
  pointSpriteUrl="/circle.png"
  settings={{ gauss: 1, color: 200, height: 1, coherent: 1, filter: 0 }}
  style={{ width: 600, height: 400 }}
/>`}</code>
                  </pre>
                </div>

                <div className="component-props">
                  <div className="usage-title">Props</div>
                  <div className="props-grid">
                    <div className="props-row">
                      <div className="props-name">data</div>
                      <div>对象，包含 sit/back 两组点云数据。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">groupConfigs</div>
                      <div>点云矩阵与位置配置。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">settings</div>
                      <div>gauss/color/filter/height/coherent 等渲染参数。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">modelUrl</div>
                      <div>可选 GLB 模型路径。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">pointSpriteUrl</div>
                      <div>点贴图资源路径。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">style</div>
                      <div>容器样式，需要显式宽高。</div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          ) : activeKey === 'three-sink' ? (
            <section id="three-sink" className="docs-section">
              <div className="section-head">
                <h2>下陷渲染</h2>
                <span className="section-desc">Three.js 压力下陷渲染，支持热力与裁剪。</span>
              </div>

              <article className="component-card">
                <div className="component-head">
                  <div>
                    <h3>ThreeSinkScene</h3>
                    <p>支持热力色、深度、裁剪与平滑配置。</p>
                  </div>
                  <div className="component-tag">渲染类</div>
                </div>

                <div className="component-controls">
                  <div className="control-row">
                    <span className="control-label">热力/裁剪</span>
                    <div className="control-inline">
                      <label className="control-toggle">
                        <input
                          type="checkbox"
                          checked={sinkShowHeatmap}
                          onChange={(e) => setSinkShowHeatmap(e.target.checked)}
                        />
                        热力
                      </label>
                      <label className="control-toggle">
                        <input
                          type="checkbox"
                          checked={sinkEnableClipping}
                          onChange={(e) => setSinkEnableClipping(e.target.checked)}
                        />
                        裁剪
                      </label>
                    </div>
                  </div>
                  <div className="control-row">
                    <span className="control-label">裁剪位置</span>
                    <input
                      type="number"
                      step="0.01"
                      value={sinkClipLevel}
                      onChange={(e) => setSinkClipLevel(toNumber(e.target.value, 0.35))}
                    />
                  </div>
                  <div className="control-row">
                    <span className="control-label">深度/平滑</span>
                    <div className="control-inline">
                      <input
                        type="number"
                        step="0.01"
                        value={sinkDepthScale}
                        onChange={(e) => setSinkDepthScale(toNumber(e.target.value, 0.35))}
                      />
                      <input
                        type="number"
                        step="0.05"
                        value={sinkSmoothness}
                        onChange={(e) => setSinkSmoothness(toNumber(e.target.value, 0.6))}
                      />
                    </div>
                  </div>
                </div>

                <div className="component-demo" style={{ height: '24rem' }}>
                  <ThreeSinkScene
                    showHeatmap={sinkShowHeatmap}
                    enableClipping={sinkEnableClipping}
                    clipLevel={sinkClipLevel}
                    depthScale={sinkDepthScale}
                    smoothness={sinkSmoothness}
                    realtimeData={sinkRealtimeData}
                  />
                </div>

                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre>
                    <code>{`import { ThreeSinkScene } from 'shroomcomlibrary/heatmap/three-sink'

<ThreeSinkScene
  showHeatmap
  enableClipping={false}
  clipLevel={0.35}
  depthScale={0.35}
  smoothness={0.6}
/>`}</code>
                  </pre>
                </div>

                <div className="component-props">
                  <div className="usage-title">Props</div>
                  <div className="props-grid">
                    <div className="props-row">
                      <div className="props-name">showHeatmap</div>
                      <div>是否显示热力色。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">enableClipping</div>
                      <div>是否启用裁剪。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">clipLevel</div>
                      <div>裁剪位置（0-1）。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">depthScale</div>
                      <div>下陷深度系数。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">smoothness</div>
                      <div>平滑系数（0-1）。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">sourceData / sourceMax</div>
                      <div>可选，自定义 2D 数据与最大值。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">realtimeData</div>
                      <div>可选，实时数据（二维或扁平数组）。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">upscale</div>
                      <div>可选，放大倍数。</div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          ) : activeKey === 'sit-and-foot' ? (
            <section id="sit-and-foot" className="docs-section">
              <div className="section-head">
                <h2>起坐渲染</h2>
                <span className="section-desc">座椅与脚垫的 3D 压力渲染。</span>
              </div>

              <article className="component-card">
                <div className="component-head">
                  <div>
                    <h3>SitAndFootScene</h3>
                    <p>同时展示坐垫与脚垫压力分布。</p>
                  </div>
                  <div className="component-tag">渲染类</div>
                </div>

                <div className="component-controls">
                  <div className="control-row">
                    <span className="control-label">热力/裁剪</span>
                    <div className="control-inline">
                      <label className="control-toggle">
                        <input
                          type="checkbox"
                          checked={sitShowHeatmap}
                          onChange={(e) => setSitShowHeatmap(e.target.checked)}
                        />
                        热力
                      </label>
                      <label className="control-toggle">
                        <input
                          type="checkbox"
                          checked={sitEnableClipping}
                          onChange={(e) => setSitEnableClipping(e.target.checked)}
                        />
                        裁剪
                      </label>
                    </div>
                  </div>
                  <div className="control-row">
                    <span className="control-label">裁剪位置</span>
                    <input
                      type="number"
                      step="0.01"
                      value={sitClipLevel}
                      onChange={(e) => setSitClipLevel(toNumber(e.target.value, 0.5))}
                    />
                  </div>
                  <div className="control-row">
                    <span className="control-label">深度/平滑</span>
                    <div className="control-inline">
                      <input
                        type="number"
                        step="0.01"
                        value={sitDepthScale}
                        onChange={(e) => setSitDepthScale(toNumber(e.target.value, 0.25))}
                      />
                      <input
                        type="number"
                        step="0.05"
                        value={sitSmoothness}
                        onChange={(e) => setSitSmoothness(toNumber(e.target.value, 0.5))}
                      />
                    </div>
                  </div>
                </div>

                <div className="component-demo" style={{ height: '26rem' }}>
                  <SitAndFootScene
                    showHeatmap={sitShowHeatmap}
                    enableClipping={sitEnableClipping}
                    clipLevel={sitClipLevel}
                    depthScale={sitDepthScale}
                    smoothness={sitSmoothness}
                    seatData={sitSeatData}
                    footpadData={sitFootpadData}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>

                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre>
                    <code>{`import { SitAndFootScene } from 'shroomcomlibrary/heatmap/sit-and-foot'

<SitAndFootScene
  showHeatmap
  enableClipping={false}
  clipLevel={0.5}
  depthScale={0.25}
  smoothness={0.5}
/>`}</code>
                  </pre>
                </div>

                <div className="component-props">
                  <div className="usage-title">Props</div>
                  <div className="props-grid">
                    <div className="props-row">
                      <div className="props-name">showHeatmap</div>
                      <div>是否显示热力色。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">enableClipping</div>
                      <div>是否启用裁剪。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">clipLevel</div>
                      <div>裁剪位置（0-1）。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">depthScale</div>
                      <div>下陷深度系数。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">smoothness</div>
                      <div>平滑系数（0-1）。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">seatData / footpadData</div>
                      <div>可选，坐垫与脚垫数据（二维或扁平）。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">realtimeData</div>
                      <div>可选，实时坐垫数据（二维或扁平）。</div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          ) : activeKey === 'foot-sink' ? (
            <section id="foot-sink" className="docs-section">
              <div className="section-head">
                <h2>步道下陷</h2>
                <span className="section-desc">256×64 步道压力下陷渲染。</span>
              </div>

              <article className="component-card">
                <div className="component-head">
                  <div>
                    <h3>FootSinkScene</h3>
                    <p>支持热力、裁剪与下陷深度调节。</p>
                  </div>
                  <div className="component-tag">渲染类</div>
                </div>

                <div className="component-controls">
                  <div className="control-row">
                    <span className="control-label">热力/裁剪</span>
                    <div className="control-inline">
                      <label className="control-toggle">
                        <input
                          type="checkbox"
                          checked={footSinkShowHeatmap}
                          onChange={(e) => setFootSinkShowHeatmap(e.target.checked)}
                        />
                        热力
                      </label>
                      <label className="control-toggle">
                        <input
                          type="checkbox"
                          checked={footSinkEnableClipping}
                          onChange={(e) => setFootSinkEnableClipping(e.target.checked)}
                        />
                        裁剪
                      </label>
                    </div>
                  </div>
                  <div className="control-row">
                    <span className="control-label">裁剪位置</span>
                    <input
                      type="number"
                      step="0.01"
                      value={footSinkClipLevel}
                      onChange={(e) => setFootSinkClipLevel(toNumber(e.target.value, 0.35))}
                    />
                  </div>
                  <div className="control-row">
                    <span className="control-label">深度/平滑</span>
                    <div className="control-inline">
                      <input
                        type="number"
                        step="0.01"
                        value={footSinkDepthScale}
                        onChange={(e) => setFootSinkDepthScale(toNumber(e.target.value, 0.35))}
                      />
                      <input
                        type="number"
                        step="0.05"
                        value={footSinkSmoothness}
                        onChange={(e) => setFootSinkSmoothness(toNumber(e.target.value, 0.6))}
                      />
                    </div>
                  </div>
                </div>

                <div className="component-demo" style={{ height: '22rem' }}>
                  <FootSinkScene
                    showHeatmap={footSinkShowHeatmap}
                    enableClipping={footSinkEnableClipping}
                    clipLevel={footSinkClipLevel}
                    depthScale={footSinkDepthScale}
                    smoothness={footSinkSmoothness}
                    realtimeData={footSinkRealtimeData}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>

                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre>
                    <code>{`import { FootSinkScene } from 'shroomcomlibrary/heatmap/foot-sink'

<FootSinkScene
  showHeatmap
  enableClipping={false}
  clipLevel={0.35}
  depthScale={0.35}
  smoothness={0.6}
  realtimeData={data256x64}
/>`}</code>
                  </pre>
                </div>

                <div className="component-props">
                  <div className="usage-title">Props</div>
                  <div className="props-grid">
                    <div className="props-row">
                      <div className="props-name">showHeatmap</div>
                      <div>是否显示热力色。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">enableClipping</div>
                      <div>是否启用裁剪。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">clipLevel</div>
                      <div>裁剪位置（0-1）。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">depthScale</div>
                      <div>下陷深度系数。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">smoothness</div>
                      <div>平滑系数（0-1）。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">realtimeData</div>
                      <div>可选，实时数据（二维 64×256 或扁平 16384）。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">className / style</div>
                      <div>容器类名与样式。</div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          ) : activeKey === 'foot-len' ? (
            <section id="foot-len" className="docs-section">
              <div className="section-head">
                <h2>步道渲染</h2>
                <span className="section-desc">四块脚垫的压力分布渲染。</span>
              </div>

              <article className="component-card">
                <div className="component-head">
                  <div>
                    <h3>FootLenScene</h3>
                    <p>支持热力显示与深度调节。</p>
                  </div>
                  <div className="component-tag">渲染类</div>
                </div>

                <div className="component-controls">
                  <div className="control-row">
                    <span className="control-label">热力</span>
                    <label className="control-toggle">
                      <input
                        type="checkbox"
                        checked={footShowHeatmap}
                        onChange={(e) => setFootShowHeatmap(e.target.checked)}
                      />
                      显示
                    </label>
                  </div>
                  <div className="control-row">
                    <span className="control-label">深度/平滑</span>
                    <div className="control-inline">
                      <input
                        type="number"
                        step="0.01"
                        value={footDepthScale}
                        onChange={(e) => setFootDepthScale(toNumber(e.target.value, 0.1))}
                      />
                      <input
                        type="number"
                        step="0.05"
                        value={footSmoothness}
                        onChange={(e) => setFootSmoothness(toNumber(e.target.value, 0.5))}
                      />
                    </div>
                  </div>
                </div>

                <div className="component-demo" style={{ height: '22rem' }}>
                  <FootLenScene
                    showHeatmap={footShowHeatmap}
                    depthScale={footDepthScale}
                    smoothness={footSmoothness}
                    sensorData={footSensorData || {}}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>

                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre>
                    <code>{`import { FootLenScene } from 'shroomcomlibrary/heatmap/foot-len'

<FootLenScene
  showHeatmap
  depthScale={0.1}
  smoothness={0.5}
  sensorData={{ sensor1, sensor2, sensor3, sensor4 }}
/>`}</code>
                  </pre>
                </div>

                <div className="component-props">
                  <div className="usage-title">Props</div>
                  <div className="props-grid">
                    <div className="props-row">
                      <div className="props-name">showHeatmap</div>
                      <div>是否显示热力色。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">depthScale</div>
                      <div>下陷深度系数。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">smoothness</div>
                      <div>平滑系数（0-1）。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">sensorData</div>
                      <div>对象，包含 sensor1~sensor4 数组。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">className / style</div>
                      <div>容器类名与样式。</div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          ) : (
            <section id="ui-playback" className="docs-section">
              <div className="section-head">
                <h2>回放</h2>
                <span className="section-desc">播放控制条（纯 UI 组件）。</span>
              </div>

              <article className="component-card">
                <div className="component-head">
                  <div>
                    <h3>PlaybackBar</h3>
                    <p>支持播放、速度、历史回看等控制。</p>
                  </div>
                  <div className="component-tag">UI 组件</div>
                </div>

                <div className="component-demo">
                  <PlaybackBar
                    name="回放"
                    dataLength={500}
                    index={playbackIndex}
                    onIndexChange={setPlaybackIndex}
                    showPlayToggle
                    isPaused={playbackPaused}
                    onPlay={() => setPlaybackPaused(false)}
                    onStop={() => setPlaybackPaused(true)}
                    showSpeed
                    speedValue={playbackSpeed}
                    onSpeedChange={setPlaybackSpeed}
                    showHistory
                    historyLabel="历史"
                    onHistoryClick={() => { }}
                    timestamp={playbackTimestamp}
                    formatTimestamp={(t) => new Date(t).toLocaleString()}
                  />
                </div>

                <div className="component-usage">
                  <div className="usage-title">使用说明</div>
                  <pre>
                    <code>{`import { PlaybackBar } from 'shroomcomlibrary/playback'

<PlaybackBar
  name="回放"
  dataLength={data.length}
  index={currentIndex}
  onIndexChange={setCurrentIndex}
  showPlayToggle
  isPaused={isPaused}
  onPlay={() => setIsPaused(false)}
  onStop={() => setIsPaused(true)}
  showSpeed
  speedValue={speed}
  onSpeedChange={setSpeed}
  showHistory
  historyLabel="历史"
  onHistoryClick={openHistory}
  timestamp={currentTime}
  formatTimestamp={(t) => new Date(t).toLocaleString()}
/>`}</code>
                  </pre>
                </div>

                <div className="component-props">
                  <div className="usage-title">Props</div>
                  <div className="props-grid">
                    <div className="props-row">
                      <div className="props-name">index / dataLength</div>
                      <div>当前索引与总长度。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">onIndexChange</div>
                      <div>拖动进度回调。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">isPaused / onPlay / onStop</div>
                      <div>播放状态与控制。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">speedValue / onSpeedChange</div>
                      <div>播放速度与回调。</div>
                    </div>
                    <div className="props-row">
                      <div className="props-name">timestamp / formatTimestamp</div>
                      <div>时间显示与格式化。</div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          )}
        </section>
      </main>
    </div>
  )
}

