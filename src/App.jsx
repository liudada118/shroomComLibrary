import React, { useState, useMemo, useEffect } from 'react'
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import * as echarts from 'echarts'

// ─── 原有组件 ───
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

// ─── 新增：图表组件 ───
import Pressure2DView from './charts/pressure2d/Pressure2DView'
import { PressureChart } from './charts/pressureLine/PressureChart'
import EChart from './charts/echart/EChart'

// ─── 新增：3D 模型 ───
import { FootModel } from './heatmap/foot/FootModel'
import { HumanModel } from './heatmap/human/HumanModel'
import InsoleScene from './heatmap/insole/InsoleScene'

// ─── 新增：UI 组件 ───
import { Button } from './ui/Button'
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/Dialog'
import { Input } from './ui/Input'
import { Select, SelectItem } from './ui/Select'
import { ToastProvider, useToast } from './ui/Toast'
import ViewToggle from './ui/ViewToggle'

// ─── 新增：报告组件 ───
import GripReport from './report/grip/GripReport'

// ─── 新增：Context ───
import { ThemeProvider } from './contexts/ThemeContext'
import { AssessmentProvider } from './contexts/AssessmentContext'

// ─── 新增：页面组件 ───
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AssessmentHistory from './pages/AssessmentHistory'
import HistoryReportView from './pages/HistoryReportView'
import NotFound from './pages/NotFound'
import GripAssessment from './pages/assessment/GripAssessment'
import SitStandAssessment from './pages/assessment/SitStandAssessment'
import StandingAssessment from './pages/assessment/StandingAssessment'
import GaitAssessment from './pages/assessment/GaitAssessment'

/* ═══════════════════════════════════════════
   工具函数
   ═══════════════════════════════════════════ */
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
   组件库展示首页
   ═══════════════════════════════════════════ */
function LibraryShowcase() {
  const [activeTab, setActiveTab] = useState('app')
  const navigate = useNavigate()

  /* 原有组件 demo 数据 */
  const area1 = useMemo(() => new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: 'rgba(63,211,228,1)' },
    { offset: 0.65, color: 'rgba(39,117,143,0.26)' },
    { offset: 1, color: 'rgba(26,28,32,0)' }
  ]), [])

  const example = useMemo(() => ({
    xData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    yData: { a: [1, 3, 2, 4, 5, 3, 6, 4, 7, 5], b: [2, 2, 3, 3, 4, 2, 5, 3, 6, 4] },
    yMax: 8,
    lineColors: ['#12D0BE', '#D3C2FF'],
    areaColors: [area1, null],
  }), [area1])

  const line1 = useMemo(() => Array.from({ length: 200 }, () => Math.round(Math.random() * 300)), [])
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(p => (p >= line1.length ? 0 : p + 1)), 50)
    return () => clearInterval(t)
  }, [line1.length])

  /* 新增组件 demo 数据 */
  const [viewMode, setViewMode] = useState('3d')
  const [dialogOpen, setDialogOpen] = useState(false)

  const pressureData = useMemo(() => Array.from({ length: 50 }, (_, i) => Math.sin(i * 0.2) * 100 + 150), [])

  const echartOption = useMemo(() => ({
    animation: false,
    grid: { top: 20, bottom: 30, left: 40, right: 20 },
    xAxis: { type: 'category', data: Array.from({ length: 20 }, (_, i) => i + 1) },
    yAxis: { type: 'value' },
    series: [{ type: 'bar', data: Array.from({ length: 20 }, () => Math.round(Math.random() * 100)), itemStyle: { color: '#0066CC' } }]
  }), [])

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

  const matrixData = useMemo(() => buildFlat(16 * 16, 300), [])
  const heatData = useMemo(() => buildFlat(32 * 32, 255), [])
  const webglData = useMemo(() => buildFlat(64 * 64, 12), [])
  const [sinkData, setSinkData] = useState(() => buildGrid(64, 255))
  const [handData, setHandData] = useState(() => buildFlat(16 * 16, 500))

  useEffect(() => {
    const t = setInterval(() => {
      setSinkData(buildGrid(64, 255))
      setHandData(buildFlat(16 * 16, 500))
    }, 200)
    return () => clearInterval(t)
  }, [])

  const TABS = [
    { key: 'app', label: '🏠 完整应用' },
    { key: 'charts', label: '📊 图表' },
    { key: 'heatmap', label: '🔥 热力图/3D' },
    { key: 'ui', label: '🧩 UI组件' },
    { key: 'report', label: '📋 报告' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      {/* 顶部导航 */}
      <div style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 16,
        position: 'sticky', top: 0, zIndex: 100
      }}>
        <h1 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#fff' }}>
          ShroomComLibrary
        </h1>
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>v0.1.0 · 组件展示</span>
        <div style={{ flex: 1 }} />
        {TABS.map(t => (
          <button key={t.key} onClick={() => setActiveTab(t.key)}
            style={{
              padding: '6px 16px', borderRadius: 6, border: 'none', cursor: 'pointer',
              background: activeTab === t.key ? 'rgba(255,255,255,0.2)' : 'transparent',
              color: activeTab === t.key ? '#fff' : 'rgba(255,255,255,0.6)',
              fontWeight: activeTab === t.key ? 600 : 400, fontSize: 13
            }}>
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ padding: 24, maxWidth: 1400, margin: '0 auto' }}>

        {/* ═══ 完整应用 ═══ */}
        {activeTab === 'app' && (
          <div>
            <SectionTitle>完整应用页面（老年人评估系统）</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 24 }}>
              <AppCard onClick={() => navigate('/')} label="登录页" desc="Login Page" icon="🔐" />
              <AppCard onClick={() => navigate('/dashboard')} label="仪表盘" desc="Dashboard" icon="📊" />
              <AppCard onClick={() => navigate('/assessment/grip')} label="握力评估" desc="Grip Assessment" icon="✊" />
              <AppCard onClick={() => navigate('/assessment/sitstand')} label="起坐评估" desc="Sit-Stand Assessment" icon="🪑" />
              <AppCard onClick={() => navigate('/assessment/standing')} label="站立评估" desc="Standing Assessment" icon="🧍" />
              <AppCard onClick={() => navigate('/assessment/gait')} label="步态评估" desc="Gait Assessment" icon="🚶" />
              <AppCard onClick={() => navigate('/history')} label="历史记录" desc="Assessment History" icon="📁" />
            </div>
          </div>
        )}

        {/* ═══ 图表组件 ═══ */}
        {activeTab === 'charts' && (
          <div>
            <SectionTitle>图表组件</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <DemoCard title="SimpleLineChart（原有）" tag="原有">
                <SimpleLineChart {...example} style={{ height: 180, width: '100%' }} />
              </DemoCard>
              <DemoCard title="ReplayWindowLineChart（原有）" tag="原有">
                <ReplayWindowLineChart data={line1} index={idx} style={{ height: 180, width: '100%' }} />
              </DemoCard>
              <DemoCard title="EChart 通用封装" tag="新增">
                <EChart option={echartOption} height={200} />
              </DemoCard>
              <DemoCard title="PressureChart 压力曲线" tag="新增">
                <PressureChart data={pressureData} title="压力总和曲线" />
              </DemoCard>
              <DemoCard title="Pressure2DView 2D压力热力图" tag="新增" span={2}>
                <div style={{ display: 'flex', gap: 24, justifyContent: 'center', padding: '16px 0' }}>
                  <div style={{ textAlign: 'center' }}>
                    <Pressure2DView data={pressure2dData} rows={32} cols={32} width={180} height={280} type="insole" side="left" />
                    <div style={{ fontSize: 12, color: '#999', marginTop: 8 }}>左脚</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <Pressure2DView data={pressure2dData} rows={32} cols={32} width={180} height={280} type="insole" side="right" />
                    <div style={{ fontSize: 12, color: '#999', marginTop: 8 }}>右脚</div>
                  </div>
                </div>
              </DemoCard>
            </div>
          </div>
        )}

        {/* ═══ 热力图 / 3D ═══ */}
        {activeTab === 'heatmap' && (
          <div>
            <SectionTitle>热力图 / 3D 模型</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <DemoCard title="NumThreeColor 数字热力图" tag="原有">
                <NumThreeColor data={matrixData} rows={16} cols={16} size={4} min={0} max={300}
                  colors={['#12D0BE', '#E2E8F0', '#D3C2FF']}
                  style={{ height: 250, width: '100%' }} />
              </DemoCard>
              <DemoCard title="CanvasHeatmap" tag="原有">
                <CanvasHeatmap data={heatData} rows={32} cols={32}
                  style={{ height: 250, width: '100%' }} />
              </DemoCard>
              <DemoCard title="ThreeSinkScene 3D凹陷" tag="原有">
                <ThreeSinkScene data={sinkData} rows={64} cols={64}
                  style={{ height: 250, width: '100%' }} />
              </DemoCard>
              <DemoCard title="HandHeatmapModel 手部模型" tag="原有">
                <HandHeatmapModel data={handData} style={{ height: 250, width: '100%' }} />
              </DemoCard>
              <DemoCard title="InsoleScene 鞋垫3D模型" tag="新增">
                <div style={{ height: 300, width: '100%' }}>
                  <InsoleScene showHeatmap enableClipping={false} depthScale={0.3} />
                </div>
              </DemoCard>
              <DemoCard title="FootModel 足部3D" tag="新增">
                <div style={{ height: 300, width: '100%' }}>
                  <FootModel isRecording={false} />
                </div>
              </DemoCard>
              <DemoCard title="HumanModel 人体模型" tag="新增">
                <div style={{ height: 300, width: '100%' }}>
                  <HumanModel type="sitstand" isRecording={false} />
                </div>
              </DemoCard>
              <DemoCard title="ViewToggle 2D/3D切换" tag="新增">
                <div style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                  <ViewToggle viewMode={viewMode} onToggle={setViewMode} />
                  <span style={{ color: '#666', fontSize: 13 }}>当前: {viewMode}</span>
                </div>
              </DemoCard>
            </div>
          </div>
        )}

        {/* ═══ UI 组件 ═══ */}
        {activeTab === 'ui' && (
          <div>
            <SectionTitle>UI 组件</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <DemoCard title="Button 按钮" tag="新增">
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <Button>默认按钮</Button>
                  <Button variant="outline">描边按钮</Button>
                  <Button variant="ghost">幽灵按钮</Button>
                  <Button size="sm">小按钮</Button>
                  <Button size="lg">大按钮</Button>
                </div>
              </DemoCard>
              <DemoCard title="Card 卡片" tag="新增">
                <Card>
                  <CardHeader><CardTitle>卡片标题</CardTitle></CardHeader>
                  <CardContent>
                    <p style={{ color: '#666', fontSize: 13 }}>这是卡片内容区域，可以放置任何内容。</p>
                  </CardContent>
                </Card>
              </DemoCard>
              <DemoCard title="Input 输入框" tag="新增">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <Input placeholder="请输入内容..." />
                  <Input type="password" placeholder="请输入密码..." />
                </div>
              </DemoCard>
              <DemoCard title="Select 选择器" tag="新增">
                <Select placeholder="请选择评估类型">
                  <SelectItem value="grip">握力评估</SelectItem>
                  <SelectItem value="sitstand">起坐评估</SelectItem>
                  <SelectItem value="standing">站立评估</SelectItem>
                  <SelectItem value="gait">步态评估</SelectItem>
                </Select>
              </DemoCard>
              <DemoCard title="Dialog 对话框" tag="新增">
                <Button onClick={() => setDialogOpen(true)}>打开对话框</Button>
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogContent>
                    <DialogHeader><DialogTitle>对话框标题</DialogTitle></DialogHeader>
                    <p style={{ color: '#666', fontSize: 13, padding: '16px 0' }}>
                      这是一个对话框组件的演示。点击遮罩层或按 ESC 关闭。
                    </p>
                    <Button onClick={() => setDialogOpen(false)}>关闭</Button>
                  </DialogContent>
                </Dialog>
              </DemoCard>
              <DemoCard title="Toast 提示" tag="新增">
                <ToastDemo />
              </DemoCard>
            </div>
          </div>
        )}

        {/* ═══ 报告组件 ═══ */}
        {activeTab === 'report' && (
          <div>
            <SectionTitle>报告组件</SectionTitle>
            <p style={{ color: '#666', fontSize: 14, marginBottom: 16 }}>
              报告组件需要评估数据才能完整展示。以下为组件预览：
            </p>
            <DemoCard title="GripReport 握力评估报告" tag="新增">
              <div style={{ height: 500, overflow: 'auto', border: '1px solid #eee', borderRadius: 8 }}>
                <GripReport patientName="测试患者" onClose={() => {}} />
              </div>
            </DemoCard>
          </div>
        )}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   辅助组件
   ═══════════════════════════════════════════ */
function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontSize: 16, fontWeight: 700, color: '#1a1a2e',
      marginBottom: 16, paddingBottom: 8,
      borderBottom: '2px solid #0066CC'
    }}>
      {children}
    </h2>
  )
}

function DemoCard({ title, children, tag, span = 1 }) {
  const tagColor = tag === '新增' ? '#52c41a' : '#1890ff'
  return (
    <div style={{
      background: '#fff', borderRadius: 12, padding: 16,
      boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
      gridColumn: span > 1 ? `span ${span}` : undefined
    }}>
      <div style={{
        fontSize: 13, fontWeight: 600, color: '#333',
        marginBottom: 12, paddingBottom: 8,
        borderBottom: '1px solid #f0f0f0',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <span>{title}</span>
        {tag && <span style={{
          fontSize: 11, padding: '2px 8px', borderRadius: 4,
          background: `${tagColor}15`, color: tagColor, fontWeight: 500
        }}>{tag}</span>}
      </div>
      {children}
    </div>
  )
}

function AppCard({ onClick, label, desc, icon }) {
  return (
    <div onClick={onClick} style={{
      background: '#fff', borderRadius: 12, padding: 20,
      boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
      cursor: 'pointer', transition: 'all 0.2s',
      border: '1px solid transparent',
      display: 'flex', alignItems: 'center', gap: 16
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = '#0066CC'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,102,204,0.15)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)' }}
    >
      <span style={{ fontSize: 32 }}>{icon}</span>
      <div>
        <div style={{ fontSize: 15, fontWeight: 600, color: '#1a1a2e' }}>{label}</div>
        <div style={{ fontSize: 12, color: '#999', marginTop: 2 }}>{desc}</div>
      </div>
    </div>
  )
}

function ToastDemo() {
  const toast = useToast()
  if (!toast) return <p style={{ color: '#999', fontSize: 13 }}>Toast 需要在 ToastProvider 内使用</p>
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Button onClick={() => toast.success && toast.success('操作成功！')}>成功提示</Button>
      <Button onClick={() => toast.error && toast.error('操作失败！')}>错误提示</Button>
      <Button onClick={() => toast.info && toast.info('这是一条信息')}>信息提示</Button>
    </div>
  )
}

/* ═══════════════════════════════════════════
   主 App：路由配置
   ═══════════════════════════════════════════ */
export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <AssessmentProvider>
        <ToastProvider>
          <Routes>
            <Route path="/showcase" element={<LibraryShowcase />} />
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/assessment/grip" element={<GripAssessment />} />
            <Route path="/assessment/sitstand" element={<SitStandAssessment />} />
            <Route path="/assessment/standing" element={<StandingAssessment />} />
            <Route path="/assessment/gait" element={<GaitAssessment />} />
            <Route path="/history" element={<AssessmentHistory />} />
            <Route path="/history/report" element={<HistoryReportView />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ToastProvider>
      </AssessmentProvider>
    </ThemeProvider>
  )
}
