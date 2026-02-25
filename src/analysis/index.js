// 足底压力分析算法
export {
  parseFrameData,
  splitLeftRight,
  calculateCOP,
  getValidCoords,
  calculateTotalPressure,
  calculateContactArea,
  divideXRegions,
  calculateArchIndex,
  calculateClarkeAngle,
  calculateStaheliRatio,
  calculateRegionPressure,
  calculateFootDimensions,
  calculateCOPMetrics,
  generateFootReport,
  processFrameRealtime,
  generateHeatmapColors
} from './FootAnalysis.js'

// 握力数据映射
export {
  handSkinChange,
  mapLeftHand,
  mapRightHand,
  generateSimulatedSensorData
} from './gripDataMapping.js'

// 热力图渲染工具
export { HeatmapCanvas } from './heatmap.js'
