# 本地另一台电脑使用说明

下面提供两种方式，推荐 **打包 tgz**（稳定、无需 link）。

## 方式一：打包 tgz（推荐）

### 在当前电脑（组件库目录）
```bash
npm run pack:local
```

执行完成后会输出一个 `.tgz` 文件的绝对路径，例如：
```
Packed file: E:\shroomComLibrary\shroomcomlibrary-0.0.0.tgz
```

把这个 `.tgz` 文件复制到另一台电脑。

### 在另一台电脑（业务项目目录）
```bash
npm i /path/to/shroomcomlibrary-0.0.0.tgz
```

安装完后，再确保 peer 依赖：
```bash
npm i react react-dom echarts three antd
```

#### 使用示例
```jsx
import { WebglHeatmap } from 'shroomcomlibrary/heatmap/webgl-heatmap'
import { ThreeSinkScene } from 'shroomcomlibrary/heatmap/three-sink'
```

---

## 方式二：直接安装本地路径（适合拷贝源码）

### 把整个仓库拷到另一台电脑
例如放到：`D:\shroomComLibrary`

### 在业务项目目录安装
```bash
npm i D:\shroomComLibrary
```

### 同样确保 peer 依赖
```bash
npm i react react-dom echarts three antd
```

---

## 常见问题

1. **安装后报 peer 依赖缺失**
   - 执行：`npm i react react-dom echarts three antd`

2. **样式/图表不显示**
   - 确保组件容器有明确宽高
   - Three.js 组件建议外层 `style={{ width: '100%', height: '100%' }}` 并给父容器设置高度

3. **打包文件名不同**
   - `.tgz` 名称带版本号，按 `npm pack` 输出为准

