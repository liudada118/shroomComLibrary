import React, { useEffect, useMemo, useRef } from 'react'
import * as echarts from 'echarts'

const buildOption = ({ xData, series, yMax }) => ({
  animation: false,
  grid: { x: 40, x2: 16, y: 20, y2: 18 },
  xAxis: {
    type: 'category',
    data: xData,
    splitLine: { show: true, lineStyle: { type: 'dashed', color: '#32373E' } },
    axisLabel: { color: '#E6EBF0', fontSize: 10 },
    axisLine: { lineStyle: { color: '#8A8F98' } },
    axisTick: { show: false }
  },
  yAxis: {
    type: 'value',
    max: yMax,
    splitLine: { show: true, lineStyle: { type: 'dashed', color: '#32373E' } },
    axisLabel: { color: '#E6EBF0', fontSize: 10 },
    axisLine: { lineStyle: { color: '#8A8F98' } },
    axisTick: { show: false }
  },
  series
})

/**
 * 通用回放折线图（从 charts.js 中抽取为可复用逻辑）
 *
 * props:
 * - series?: Array<{
 *     name?: string
 *     data: number[]
 *     color?: string
 *     smooth?: boolean
 *     showLastDot?: boolean
 *   }>
 * - fullX?: any[]
 * - currentIndex: number
 * - windowSize?: number  // 不传为增长模式
 * - yMax?: number
 * - colors?: [string, string] // 兼容旧用法
 * - fullY1?: number[]          // 兼容旧用法
 * - fullY2?: number[]          // 兼容旧用法
 * - className?: string
 * - style?: React.CSSProperties
 */
export default function ReplayWindowLineChart({
  series,
  fullX,
  currentIndex,
  windowSize,
  yMax,
  colors,
  fullY1,
  fullY2,
  className,
  style
}) {
  const canvasRef = useRef(null)
  const chartRef = useRef(null)

  const normalizedSeries = useMemo(() => {
    if (Array.isArray(series) && series.length) return series
    const s1 = Array.isArray(fullY1) ? fullY1 : []
    const s2 = Array.isArray(fullY2) ? fullY2 : []
    return [
      { name: 'line1', data: s1, color: colors?.[0] || '#12D0BE', smooth: true },
      {
        name: 'line2',
        data: s2,
        color: colors?.[1] || '#D3C2FF',
        smooth: true,
        showLastDot: true
      }
    ]
  }, [series, fullY1, fullY2, colors])

  const sliceData = useMemo(() => {
    const safeSeries = normalizedSeries.map((s) => ({
      ...s,
      data: Array.isArray(s.data) ? s.data : []
    }))
    const maxLen = safeSeries.length
      ? Math.max(...safeSeries.map((s) => s.data.length))
      : 0

    const hasIndex = currentIndex !== undefined && currentIndex !== null
    const end = hasIndex ? Math.max(0, Math.min(currentIndex, maxLen)) : maxLen
    const start = windowSize && hasIndex ? Math.max(0, end - windowSize) : 0

    const x = fullX
      ? fullX.slice(start, end)
      : Array.from({ length: end - start }, (_, i) => start + i + 1)

    const slicedSeries = safeSeries.map((s) => ({
      ...s,
      data: s.data.slice(start, end)
    }))

    return { x, series: slicedSeries }
  }, [normalizedSeries, fullX, currentIndex, windowSize])

  useEffect(() => {
    if (!canvasRef.current) return
    chartRef.current = echarts.init(canvasRef.current)
    return () => chartRef.current?.dispose?.()
  }, [])

  useEffect(() => {
    if (!chartRef.current) return
    const builtSeries = sliceData.series.map((s) => ({
      name: s.name,
      type: 'line',
      smooth: s.smooth ?? true,
      symbol: s.showLastDot ? 'circle' : 'none',
      symbolSize: s.showLastDot
        ? (value, params) => (params.dataIndex === s.data.length - 1 ? 4 : 0)
        : 0,
      data: s.data,
      color: s.color
    }))

    chartRef.current.setOption(
      buildOption({
        xData: sliceData.x,
        series: builtSeries,
        yMax
      })
    )
  }, [sliceData, yMax])

  const mergedStyle = { width: '100%', height: '200px', ...style }
  return <div ref={canvasRef} className={className} style={mergedStyle} />
}
