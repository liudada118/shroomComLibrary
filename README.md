# shroomComLibrary

React 组件库（包含图表与渲染组件）。文档页面提供分类与使用说明。

## 安装

```bash
npm i shroomcomlibrary echarts three
```

## 使用

```jsx
import { SimpleLineChart } from 'shroomcomlibrary/charts/realtime'
import * as echarts from 'echarts'

const area1 = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  { offset: 0, color: 'rgba(63,211,228,1)' },
  { offset: 0.65, color: 'rgba(39,117,143,0.26)' },
  { offset: 1, color: 'rgba(26,28,32,0)' }
])

export default function Demo() {
  return (
    <SimpleLineChart
      xData={[1, 2, 3, 4, 5]}
      yData={{ a: [1, 3, 2, 4, 5], b: [2, 2, 3, 3, 4] }}
      yMax={6}
      lineColors={['#12D0BE', '#D3C2FF']}
      areaColors={[area1, null]}
      style={{ height: '7.5rem', width: '20.35rem', opacity: 0.8 }}
    />
  )
}
```

## 分类

- 图表
- 渲染

## 实时（SimpleLineChart）

### Props

- `xData`: 数组，x 轴数据。
- `yData`: 对象，系列数据，如 `{ a: [..], b: [..] }`。
- `yMax`: 数字，y 轴最大值。
- `lineColors`: 数组，折线颜色。
- `areaColors`: 数组，面积颜色，可传 `echarts.graphic.LinearGradient`。
- `className`: 容器类名。
- `style`: 容器样式，需要显式宽高。

### Ref API

- `update(next)`: 传入新的 `xData / yData / yMax / lineColors / areaColors` 更新图表。
- `clear()`: 清空图表。
- `resize()`: 触发 ECharts resize。
- `getInstance()`: 获取 ECharts 实例。

## 回放（ReplayWindowLineChart）

### 使用

```jsx
import { ReplayWindowLineChart } from 'shroomcomlibrary/charts/replay'

<ReplayWindowLineChart
  series={[
    { name: 'line1', data: line1, color: '#12D0BE' },
    { name: 'line2', data: line2, color: '#D3C2FF', showLastDot: true }
  ]}
  yMax={320}
  style={{ height: '7.5rem' }}
/>
```

### Props

- `series`: 数组，线条配置（data/color/showLastDot）。
- `fullX`: 数组，可选，指定 X 轴数据。
- `currentIndex`: 数字，可选，传入后按索引切片。
- `windowSize`: 数字，可选，滑动窗口大小。
- `yMax`: 数字，y 轴最大值。
- `className`: 容器类名。
- `style`: 容器样式，需要显式高度。

## 数字矩阵（NumThreeColor）

```jsx
import { NumThreeColor } from 'shroomcomlibrary/heatmap/num-three-color'

<NumThreeColor
  data={data}
  rows={16}
  cols={16}
  colors={['#12D0BE', '#E2E8F0', '#D3C2FF']}
  zoomable
  valueRange={[0, 300]}
  style={{ width: 400, height: 400 }}
/>
```

## Canvas 热力图（CanvasHeatmap）

```jsx
import { CanvasHeatmap } from 'shroomcomlibrary/heatmap/canvas-heatmap'

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
/>
```

## 3D 点图（ThreeAndCarPoint）

```jsx
import { ThreeAndCarPoint } from 'shroomcomlibrary/heatmap/three-point'

<ThreeAndCarPoint
  data={{ sit: sitData, back: backData }}
  modelUrl="/model/chair3.glb"
  pointSpriteUrl="/circle.png"
  settings={{ gauss: 1, color: 200, height: 1, coherent: 1, filter: 0 }}
  style={{ width: 600, height: 400 }}
/>
```

## WebGL 热力图（WebglHeatmap）

```jsx
import { WebglHeatmap } from 'shroomcomlibrary/heatmap/webgl-heatmap'

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
/>
```

### Props

- `data`: 数组或二维数组，热力图数据（默认 64x64）。
- `size`: 数字，矩阵边长。
- `maxValue`: 数字，热力图最大强度。
- `radius`: 数字，点半径。
- `filterValue`: 数字，过滤阈值。
- `border`: 数字，边缘裁剪像素。
- `mirrorX`: 布尔，是否左右镜像。
- `canvasWidth / canvasHeight`: 画布尺寸。
- `style`: 容器样式，需要显式宽高。

## 手部热力图（HandHeatmapModel）

```jsx
import { HandHeatmapModel } from 'shroomcomlibrary/heatmap/hand-heatmap'

<HandHeatmapModel
  data={data} // 16x16 => 256 长度数组
  handType="left"
  isRecording={false}
  pressureValue={0}
/>
```

### Props

- `data`: 数组或对象（`{ arr: number[] }`），长度 256。
- `handType`: `left` / `right`。
- `isRecording`: 是否显示录制态。
- `pressureValue`: 压力数值显示。

## 下陷渲染（ThreeSinkScene）

```jsx
import { ThreeSinkScene } from 'shroomcomlibrary/heatmap/three-sink'

<ThreeSinkScene
  showHeatmap
  enableClipping={false}
  clipLevel={0.35}
  depthScale={0.35}
  smoothness={0.6}
/>
```

### Props

- `showHeatmap`: 是否显示热力色。
- `enableClipping`: 是否开启裁剪。
- `clipLevel`: 裁剪位置（0-1）。
- `depthScale`: 下陷深度系数。
- `smoothness`: 平滑系数。
- `sourceData`: 可选，自定义 2D 数据。
- `sourceMax`: 可选，数据最大值。
- `upscale`: 可选，放大倍数。

## 起坐渲染（SitAndFootScene）

```jsx
import { SitAndFootScene } from 'shroomcomlibrary/heatmap/sit-and-foot'

<SitAndFootScene
  showHeatmap
  enableClipping={false}
  clipLevel={0.5}
  depthScale={0.25}
  smoothness={0.5}
/>
```

### Props

- `showHeatmap`: 是否显示热力色。
- `enableClipping`: 是否启用裁剪。
- `clipLevel`: 裁剪位置（0-1）。
- `depthScale`: 下陷深度系数。
- `smoothness`: 平滑系数（0-1）。
- `seatData / footpadData`: 可选，坐垫与脚垫数据（二维或扁平）。
- `realtimeData`: 可选，实时坐垫数据（二维或扁平）。

## 步道渲染（FootLenScene）

```jsx
import { FootLenScene } from 'shroomcomlibrary/heatmap/foot-len'

<FootLenScene
  showHeatmap
  depthScale={0.1}
  smoothness={0.5}
  sensorData={{ sensor1, sensor2, sensor3, sensor4 }}
/>
```

### Props

- `showHeatmap`: 是否显示热力色。
- `depthScale`: 下陷深度系数。
- `smoothness`: 平滑系数（0-1）。
- `sensorData`: 对象，包含 `sensor1~sensor4` 数组。
- `className / style`: 容器类名与样式。

## 本地预览

```bash
npm run dev
```

## 构建库

```bash
npm run build
```
