import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import * as echarts from 'echarts'

const buildOption = ({ xData, yData, yMax, lineColors, areaColors }) => {
    const series = Object.keys(yData || {}).map((key, idx) => ({
        name: key,
        type: 'line',
        data: yData[key],
        smooth: true,
        symbol: 'none',
        color: lineColors?.[idx],
        areaStyle: areaColors?.[idx] ? { color: areaColors[idx] } : undefined
    }))

    return {
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
    }
}

const SimpleLineChart = forwardRef((props, ref) => {
    const { xData, yData, yMax, lineColors, areaColors, className, style } = props
    const canvasRef = useRef(null)
    const chartRef = useRef(null)

    const setData = (next) => {
        chartRef.current?.setOption(buildOption(next))
    }

    useImperativeHandle(ref, () => ({
        update: (next) => setData(next),
        clear: () => chartRef.current?.clear?.(),
        resize: () => chartRef.current?.resize?.(),
        getInstance: () => chartRef.current
    }))

    useEffect(() => {
        if (!canvasRef.current) return
        chartRef.current = echarts.init(canvasRef.current)
        return () => chartRef.current?.dispose?.()
    }, [])

    useEffect(() => {
        if (!chartRef.current || !xData || !yData) return
        setData({ xData, yData, yMax, lineColors, areaColors })
    }, [xData, yData, yMax, lineColors, areaColors])

    return <div ref={canvasRef} className={className} style={style} />
})

export default SimpleLineChart
