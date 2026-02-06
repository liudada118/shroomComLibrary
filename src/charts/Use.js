import SimpleLineChart from './simple/SimpleLineChart'
import * as echarts from 'echarts'

export default function SimpleLineChartExample() {
    const area1 = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(63,211,228,1)' },
        { offset: 0.65, color: 'rgba(39,117,143,0.26)' },
        { offset: 1, color: 'rgba(26,28,32,0)' }
    ])

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
