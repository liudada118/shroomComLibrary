export { default as SimpleLineChart } from './charts/simple/SimpleLineChart.jsx'
export { default as ReplayWindowLineChart } from './charts/replay/ReplayWindowLineChart.jsx'
export { default as NumThreeColor } from './heatmap/threeNum/NumThreeColor.jsx'
export { default as CanvasHeatmap } from './heatmap/canvasMap/CanvasHeatmap.jsx'
export { default as ThreeAndCarPoint } from './heatmap/threePoint/ThreeAndCarPoint.jsx'
export { default as WebglHeatmap } from './heatmap/webglMap/WebglHeatmap.jsx'
export { default as HandHeatmapModel } from './heatmap/handmodal/HandHeatmapModel.jsx'
export { default as SitAndFootScene } from './heatmap/sitAndfoot/ThreeScene.jsx'
export { default as FootLenScene } from './heatmap/footLen/ThreeScene.jsx'
export { default as FootSinkScene } from './heatmap/footSink/ThreeScene.jsx'
export { default as PlaybackBar } from './playback/PlaybackBar.jsx'
export { default as PlaybackPlayToggle } from './playback/PlaybackPlayToggle.jsx'
export { default as PlaybackSpeedMenu } from './playback/PlaybackSpeedMenu.jsx'
export { Scene as ThreeSinkScene } from './heatmap/threeSink/Scene.jsx'
export { Scene256x64 as ThreeSinkScene256x64 } from './heatmap/threeSink/Scene256x64.jsx'

// ==================== 新增：肌少症/老年人评估系统组件 ====================

// --- 热力图 / 3D模型 ---
export { InsoleModel, InsoleScene, InsoleDataContext } from './heatmap/insole/index.js'
export { FootModel } from './heatmap/foot/index.js'
export { HumanModel } from './heatmap/human/index.js'

// --- 图表 ---
export { Pressure2DView } from './charts/pressure2d/index.js'
export { PressureChart } from './charts/pressureLine/PressureChart.jsx'
export { EChart } from './charts/echart/EChart.jsx'

// --- 报告组件 ---
export { default as ReportViewer } from './report/ReportViewer.jsx'
export { default as GripReport } from './report/grip/GripReport.jsx'
export { default as HandPressureMap } from './report/grip/HandPressureMap.jsx'
export { default as StandingReport } from './report/standing/StandingReport.jsx'
export { default as InteractiveArchChart } from './report/standing/InteractiveArchChart.jsx'
export { default as InteractiveCOPChart } from './report/standing/InteractiveCOPChart.jsx'

// --- 步态可视化 ---
export { FootprintHeatmapCanvas, PressureEvolutionCanvas, GaitAverageSummaryCanvas, PressureRegionsScatterOption } from './gait/index.js'

// --- 设备通信 ---
export { DeviceManager, getDeviceManager, ASSESSMENT_CHANNELS } from './device/DeviceManager.js'
export { SerialPortConnection, BAUD_DEVICE_MAP } from './device/UnifiedSerialService.js'
export { serialService } from './device/SerialService.js'

// --- 数据分析算法 ---
export {
  parseFrameData, splitLeftRight, calculateCOP, getValidCoords,
  calculateTotalPressure, calculateContactArea, divideXRegions,
  calculateArchIndex, calculateClarkeAngle, calculateStaheliRatio,
  calculateRegionPressure, calculateFootDimensions, calculateCOPMetrics,
  generateFootReport, processFrameRealtime, generateHeatmapColors
} from './analysis/FootAnalysis.js'
export { handSkinChange, mapLeftHand, mapRightHand, generateSimulatedSensorData } from './analysis/gripDataMapping.js'
export { HeatmapCanvas } from './analysis/heatmap.js'

// --- UI组件 ---
export { Button } from './ui/Button.jsx'
export { Card, CardHeader, CardTitle, CardContent } from './ui/Card.jsx'
export { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/Dialog.jsx'
export { Input } from './ui/Input.jsx'
export { Select, SelectItem } from './ui/Select.jsx'
export { ToastProvider, useToast } from './ui/Toast.jsx'
export { default as ViewToggle } from './ui/ViewToggle.jsx'
export { default as DevicePanel } from './ui/DevicePanel.jsx'
export { default as FootpadConfigDialog } from './ui/FootpadConfigDialog.jsx'

// --- Hooks ---
export { useDevice } from './hooks/useDevice.js'
export { useDeviceManager, useChannelData, useFootpadConfig } from './hooks/useDeviceManager.js'
export { usePressureScene } from './hooks/usePressureScene.js'
export { useWebSocket } from './hooks/useWebSocket.js'

// --- Context ---
export { AssessmentProvider, useAssessment } from './contexts/AssessmentContext.jsx'
export { ThemeProvider, useTheme } from './contexts/ThemeContext.jsx'

// --- 布局组件 ---
export { default as Header } from './layout/Header.jsx'
export { default as DeviceConnector } from './layout/DeviceConnector.jsx'
export { default as PatientInfoDialog } from './layout/PatientInfoDialog.jsx'

// --- 业务服务 ---
export { getHistory, saveRecord, saveAssessmentSession, searchHistory, deleteRecord, clearHistory } from './services/historyService.js'
export { cn } from './services/utils.js'

// --- 压力传感器SDK ---
export { PressureScene3D } from './pressure-sensor/PressureScene3D.js'
export { PressureSensorSerial, createSeatSensorSerial, createFootpadSensorSerial } from './pressure-sensor/PressureSensorSerial.js'
export { gaussianBlur, bilinearInterpolate, upscaleDataSmooth, normalizeMatrix, matrixStats, calculateCoP as calculateCoPPressure } from './pressure-sensor/PressureDataProcessor.js'
export { PressureSimulator } from './pressure-sensor/PressureSimulator.js'
export { pressurePadVertexShader, pressurePadFragmentShader, footpadFragmentShader } from './pressure-sensor/shaders.js'

// --- 四脚垫SDK ---
export { FootpadScene } from './footpad-sdk/components/FootpadScene.js'
export { default as SingleFootpadSerialService, footpadServices, SENSOR_KEYS, SENSOR_LABELS, SENSOR_COLORS, createFootpadServices } from './footpad-sdk/services/FootpadSerialService.js'
export { vertexShader as footpadVertexShader, fragmentShader as footpadFragmentShader } from './footpad-sdk/shaders/pressureShaders.js'
export { gaussianBlur as footpadGaussianBlur, bilinearInterpolate as footpadBilinearInterpolate, upscaleDataSmooth as footpadUpscaleDataSmooth } from './footpad-sdk/utils/dataProcessing.js'
export { generateWalkwayData, generateAnimatedWalkwayData, generateFootprint } from './footpad-sdk/utils/mockFootprintData.js'

// --- 页面组件 ---
export { default as Login } from './pages/Login.jsx'
export { default as Dashboard } from './pages/Dashboard.jsx'
export { default as AssessmentHistory } from './pages/AssessmentHistory.jsx'
export { default as HistoryReportView } from './pages/HistoryReportView.jsx'
export { default as NotFound } from './pages/NotFound.jsx'
export { default as GripAssessment } from './pages/assessment/GripAssessment.jsx'
export { default as SitStandAssessment } from './pages/assessment/SitStandAssessment.jsx'
export { default as StandingAssessment } from './pages/assessment/StandingAssessment.jsx'
export { default as GaitAssessment } from './pages/assessment/GaitAssessment.jsx'
