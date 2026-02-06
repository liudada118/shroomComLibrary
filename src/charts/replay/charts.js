import React, { useContext, useEffect, useRef, useState } from 'react'
import Drawer from '../Drawer/Drawer'

import * as echarts from "echarts";
import { Scheduler } from '../../scheduler/scheduler';
import './index.scss'
import { useTranslation, withTranslation } from 'react-i18next';
import { pointConfig } from '../../util/constant';
import { getDisplayType, getSelectArr, getSysType, useEquipStore } from '../../store/equipStore';
import { BrushManager } from '../selectBox/newSelecttBox';
import { calMatrixArea } from '../../assets/util/selectMatrix';
import { pageContext } from '../../page/test/Test';
import { shallow } from 'zustand/shallow';
import FootTrack from '../chart/Chart';
import { graCenter } from '../../util/util';
import { Button } from 'antd';

function ChartsAside(props) {

    const pressColorArr = { back: '#8AC287', sit: '#5D65FF' }
    const areaColorArr = { back: '#8AC287', sit: '#5D65FF' }

    const [show, setShow] = useState(true)

    const myChart1 = useRef()
    const myChart2 = useRef()
    const chart = useRef()
    const myChart3 = useRef()
    const myChart4 = useRef()
    const myChart5 = useRef()
    const myChart6 = useRef()
    const prevPlayStatusRef = useRef()
    const trackRef = useRef()

    const [data, setData] = useState({})

    // console.log(props.sitData)


    // useEffect(() => {

    // } , [])

    const initCharts1 = (props) => {
        let series = []
        // if(Object.keys(props.yData).length == 1){
        //     series
        // }
        const keyArr = Object.keys(props.yData)
        let areaStyle, color
        for (let i = 0; i < keyArr.length; i++) {
            const key = keyArr[i]
            const isSecondSeries = keyArr.length === 2 && i === 1
            const secondaryColorByChartId = {
                myChart1: '#D3C2FF',
                myChart2: '#AAFFF7',
                myChart3: '#97D4FF',
                myChart4: '#D3C2FF',
                myChart5: '#AAFFF7',
                myChart6: '#97D4FF'
            }

            if (props.type == 'press') {
                color = Object.values(pressColorArr)[i]
                if (i == 1) {

                    areaStyle = {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: 'rgba(65, 156, 220, 1)' },
                            { offset: 0.4, color: ' rgba(35, 26, 144, 0.29)' },
                            { offset: 1, color: 'rgba(26, 28, 32, 0)' }
                        ])
                    }



                } else {
                    areaStyle = {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: 'rgba(63, 211, 228, 1)' },
                            { offset: 0.65, color: 'rgba(39, 117, 143, 0.26)' },
                            { offset: 1, color: 'rgba(26, 28, 32, 0)' }
                        ])
                    }

                    // color = '#2DBCC1'
                }
            } else {
                color = Object.values(areaColorArr)[i]

                if (i == 1) {

                    areaStyle = {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: 'rgba(208, 220, 235, 0.94)' },
                            { offset: 0.4, color: '  rgba(120, 141, 167, 0.28)' },
                            { offset: 1, color: 'rgba(26, 28, 32, 0)' }
                        ])
                    }



                } else {
                    areaStyle = {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: 'rgba(216, 154, 234, 0.8)' },
                            { offset: 0.65, color: ' rgba(50, 47, 188, 0.29)' },
                            { offset: 1, color: 'rgba(26, 28, 32, 0)' }
                        ])
                    }

                    // color = '#2DBCC1'
                }
            }




            const firstLineAreaStyle = i === 0 ? {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: props.chartId === 'myChart3' || props.chartId === 'myChart6'
                            ? 'rgba(46, 168, 255, 0.03)'
                            : (props.type === 'press'
                                ? 'rgba(138, 92, 255, 0.03)'
                                : 'rgba(18, 208, 190, 0.03)')
                    },
                    {
                        offset: 1,
                        color: props.chartId === 'myChart3' || props.chartId === 'myChart6'
                            ? 'rgba(46, 168, 255, 0.25)'
                            : (props.type === 'press'
                                ? 'rgba(138, 92, 255, 0.25)'
                                : 'rgba(18, 208, 190, 0.25)')
                    }
                ])
            } : undefined

            series.push({
                symbol: "none",
                data: props.yData[key],
                type: "line",
                smooth: true,
                color: isSecondSeries
                    ? (secondaryColorByChartId[props.chartId] || color)
                    : (i === 0
                        ? (props.chartId === 'myChart3' || props.chartId === 'myChart6'
                            ? '#2EA8FF'
                            : (props.type === 'press' ? '#8A5CFF' : '#12D0BE'))
                        : color),
                symbol: isSecondSeries ? 'circle' : 'none',
                symbolSize: isSecondSeries
                    ? (value, params) => (params.dataIndex === props.yData[key].length - 1 ? 4 : 0)
                    : 0,
                areaStyle: firstLineAreaStyle
            })
        }

        let option = {
            animation: false,
            // tooltip: {
            //   trigger: "axis",
            //   show: "true",
            // },
            grid: {
                x: 40,
                x2: 16,
                y: 20,
                y2: 18,
            },
            xAxis: {
                type: "category",
                show: true,
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: "dashed",
                        color: "#32373E"
                    }
                },
                data: props.xData,
                axisLabel: {
                    show: true,
                    color: "#E6EBF0",
                    fontSize: 10
                },
                axisLine: {
                    lineStyle: {
                        color: "#8A8F98"
                    }
                },
                axisTick: {
                    show: false
                }
            },

            yAxis: {
                type: "value",
                show: true,
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: "dashed",
                        color: "#32373E"
                    }
                },
                max: props.yMax,
                axisLabel: {
                    show: true,
                    color: "#E6EBF0",
                    fontSize: 10
                },
                axisLine: {
                    lineStyle: {
                        color: "#8A8F98"
                    }
                },
                axisTick: {
                    show: false
                },
            },
            series: series
        };
        option && props.myChart.setOption(option);

    };



    function renderChartsAll() {
        const chartData = props.chartData.current
        const keyArr = Object.keys(chartData)
        // console.log(chartData)
        if (!keyArr.length) return

        const pressObj = {}
        const areaObj = {}
        const copSpeedObj = {}
        const rightPressObj = {}
        const rihgtAreaObj = {}
        const rightCopSpeedObj = {}
        let pressAllArr = []
        let areaAllArr = []

        for (let i = 0; i < keyArr.length; i++) {
            const key = keyArr[i]
            pressObj[key] = chartData[key].pressArr
            areaObj[key] = chartData[key].areaArr
            copSpeedObj[key] = chartData[key].copSpeed

            rightPressObj[key] = chartData[key].rightPressArr
            rihgtAreaObj[key] = chartData[key].rightAreaArr
            rightCopSpeedObj[key] = chartData[key].rightCopSpeed
            pressAllArr = pressAllArr.concat(chartData[key].pressArr)
            areaAllArr = areaAllArr.concat(chartData[key].areaArr)
        }

        const pressMax = Math.max(...pressAllArr)

        const playStatus = useEquipStore.getState().playStatus
        if (prevPlayStatusRef.current && prevPlayStatusRef.current !== playStatus) {
            myChart1.current?.clear?.()
            myChart2.current?.clear?.()
            myChart3.current?.clear?.()
            myChart4.current?.clear?.()
            myChart5.current?.clear?.()
            myChart6.current?.clear?.()
        }
        prevPlayStatusRef.current = playStatus
        let xData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,]
        if (playStatus == 'replay') {
            const maxLength = Math.max(...Object.values(pressObj).map((arr) => arr.length))
            xData = []
            for (let i = 1; i <= maxLength; i++) {
                xData.push(i)
            }
        }
        // = playStatus === 'realTime' ? [
        //             1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        //             20,
        //         ] : []
        // console.log(pressObj)
        if (myChart1.current) {
            initCharts1({
                yData: pressObj,
                xData: xData,
                index: 0 + 1,
                name: "涓",
                myChart: myChart1.current,
                yMax: pressMax + 5000,
                type: 'press',
                chartId: 'myChart1'
            });
        }


        if (myChart2.current) {
            initCharts1({
                yData: areaObj,
                xData: xData,
                index: 0 + 1,
                name: "涓",
                myChart: myChart2.current,
                yMax: 3200,
                type: 'area',
                chartId: 'myChart2'
            });
        }
        if (myChart3.current) {
            initCharts1({
                yData: copSpeedObj,
                xData: xData,
                index: 0 + 1,
                name: "涓",
                myChart: myChart3.current,
                yMax: 3200,
                type: 'cop',
                chartId: 'myChart3'
            });
        }

        if (myChart4.current) {
            initCharts1({
                yData: rightPressObj,
                xData: xData,
                index: 0 + 1,
                name: "涓",
                myChart: myChart4.current,
                yMax: pressMax + 5000,
                type: 'press',
                chartId: 'myChart4'
            });
        }
        if (myChart5.current) {
            initCharts1({
                yData: rihgtAreaObj,
                xData: xData,
                index: 0 + 1,
                name: "涓",
                myChart: myChart5.current,
                yMax: 3200,
                type: 'area',
                chartId: 'myChart5'
            });
        }
        if (myChart6.current) {
            initCharts1({
                yData: rightCopSpeedObj,
                xData: xData,
                index: 0 + 1,
                name: "涓",
                myChart: myChart6.current,
                yMax: 3200,
                type: 'cop',
                chartId: 'myChart6'
            });
        }
    }

    function changeData() {
        setData(() => props.chartData.current.bed.data)
    }

    function colSelectMatrix(className, select) {

        // console.log(className, select)
        if (!select) return
        const canvas = document.querySelector(`.${className}`)
        const canvasInfo = canvas.getBoundingClientRect()

        const canvasObj = {
            canvasX1: canvasInfo.left, canvasX2: canvasInfo.right,
            canvasY1: canvasInfo.top, canvasY2: canvasInfo.bottom
        }

        const selectObj = {
            selectX1: select.x1, selectX2: select.x2,
            selectY1: select.y1, selectY2: select.y2
        }



        const matrix = calMatrixArea(canvasObj, selectObj)

        return matrix

    }

    const pageInfo = useContext(pageContext);
    const { display, onRuler, setOnRuler, onSelect, setOnSelect } = pageInfo


    const displayRef = useRef()
    useEffect(() => {
        displayRef.current = display
    }, [display])

    const select = useEquipStore(s => s.select, shallow);

    const renderCenter = () => {

        // const 
        const chartData = props.chartData.current

        const keys = Object.keys(chartData)
        if (!keys.length) return
        const centerArr = []

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i]
            centerArr.push(Object.values(chartData[key].center))
        }

        // if (!props.sitData.current.back || !props.sitData.current.back.length) return
        // const arrSmooth = graCenter(props.sitData.current.back, 50, 64)
        // const arrSmooth1 = graCenter(props.sitData.current.sit, 45, 45)

        trackRef.current?.circleMove(
            // Object.values(arrSmooth),
            // Object.values(arrSmooth1)
            ...centerArr
        );
    }

    const renderNormal = () => {

        const chartData = props.chartData.current
        const keys = Object.keys(chartData)
        if (!keys.length) return
        const xData = Array.from({ length: 256 }, (_, i) => i);


        // if (keyArr.length) {

        //     const chartData = props.chartData.current
        //     for (let i = 0; i < keyArr.length; i++) {
        //         const key = keyArr[i]
        //         areaObj[key] = chartData[key].areaArr
        //         allArr = allArr.concat(chartData[key].areaArr)
        //     }

        //     const max = Math.max(...allArr)

        //     handleChartsArea(areaObj, 3200)
        // }

        // const yData = chartData['sit'].normalDis.yData
        let series = [], Xmax = 0
        for (let i = 0; i < keys.length; i++) {
            let color = Object.values(pressColorArr)[i]
            const key = keys[i]
            const xDataRes = xData.map((x, i) => [x, chartData[key].normalDis.yData[i]])
            series.push({
                symbol: "none",
                data: xDataRes,
                type: "line",
                // smooth: true,
                showSymbol: false,
                color: color,
                // areaStyle: areaStyle
            })
            // console.log(xDataRes)

            Xmax = Math.max(Xmax, ...xDataRes.map((a) => a[1]))

        }
        const ChartMax = Number((Xmax).toFixed(2))

        // chart.current.clear();
        // chart.current.setOption({
        //     grid: {
        //         x: 35,
        //         x2: 10,
        //         y: 30,
        //         y2: 20,
        //     },
        //     title: {
        //         // text: `正态分布曲线`,
        //         left: 'center'
        //     },
        //     tooltip: {
        //         trigger: 'axis',
        //         formatter: p => {
        //             const { value } = p[0];
        //             return `灰度值: ${value[0]}<br>(概率密度): ${value[1].toFixed(6)}`;
        //         }
        //     },
        //     xAxis: {
        //         type: 'value',
        //         min: 0,
        //         max: 255,
        //         name: '灰度值 (0–255)',
        //         splitNumber: 5,
        //         axisTick: {
        //             lineStyle: {
        //                 width: 0.5         // 刻度线细一点
        //             }
        //         },
        //         splitLine: {
        //             lineStyle: {
        //                 width: 0.5,        // 网格线细一点
        //                 color: '#32373E'
        //             }
        //         }
        //     },
        //     yAxis: {
        //         type: 'value',
        //         name: '概率密度',
        //         splitNumber: 3,        // 纵轴分成四个刻度
        //         // axisLine: {
        //         //     lineStyle: {
        //         //         width: 0.5,        // 网格线细一点
        //         //         color: '#32373E'
        //         //     }
        //         // },
        //         // max  :0.1,
        //         axisLabel: {
        //             formatter: (value) => {
        //                 return value * 100 + '%'
        //             }
        //         },
        //         axisTick: {
        //             lineStyle: {
        //                 width: 0.5,        // 网格线细一点
        //                 color: '#32373E'
        //             }
        //         },
        //         splitLine: {
        //             lineStyle: {
        //                 width: 0.5,        // 网格线细一点
        //                 color: '#32373E'
        //             }
        //         },
        //         // max : ChartMax + 0.1
        //         // max: v => v.max * 1.05,
        //         scale: false,
        //     },
        //     series: series

        //     // [{
        //     //     name: '正态分布',
        //     //     type: 'line',
        //     //     smooth: true,
        //     //     symbol: 'none',
        //     //     lineStyle: { width: 2 },
        //     //     data: xData.map((x, i) => [x, yData[i]])
        //     // }]
        // }, { notMerge: true });
    }

    useEffect(() => {

        const resizeCanvases = () => {
            const canvasList = document.querySelectorAll('canvas.charts')
            canvasList.forEach((canvas) => {
                const rect = canvas.getBoundingClientRect()
                const width = Math.max(1, Math.round(rect.width))
                const height = Math.max(1, Math.round(rect.height))
                if (canvas.width !== width) canvas.width = width
                if (canvas.height !== height) canvas.height = height
            })
            myChart1.current?.resize?.()
            myChart2.current?.resize?.()
            myChart3.current?.resize?.()
            myChart4.current?.resize?.()
            myChart5.current?.resize?.()
            myChart6.current?.resize?.()
        }

        resizeCanvases()
        window.addEventListener('resize', resizeCanvases)

        myChart1.current = echarts.init(document.getElementById(`myChart1`))
        myChart2.current = echarts.init(document.getElementById(`myChart2`))
        myChart3.current = echarts.init(document.getElementById(`myChart3`))
        myChart4.current = echarts.init(document.getElementById(`myChart4`))
        myChart5.current = echarts.init(document.getElementById(`myChart5`))
        myChart6.current = echarts.init(document.getElementById(`myChart6`))

        // myChart3.current = echarts.init(document.getElementById(`myChart3`))

        Scheduler.onRender(renderChartsAll)
        // const chartData = props.chartData.current
        // const keyArr = Object.keys(chartData)
        // const dataStateObj = {}
        // if (keyArr.length) {
        //     for (let i = 0; i < keyArr.length; i++) {
        //         const key = keyArr[i]
        //         const dataKeyArr = Object.keys(chartData[key].data)
        //         for(let i = 0 ; i < dataKeyArr.length ; i++){
        //             const dataKey = dataKeyArr[i]
        //             if(!dataStateObj[dataKey]) dataStateObj[dataKey] = []
        //             dataStateObj[dataKey] .push(chartData[key].data[dataKey])
        //         }
        //     }
        // }




        let data = {}


        //     Scheduler.onUI(() => setData(() => {
        //         const chartData = props.chartData.current

        //  const system = getSysType()
        //         const select = getSelectArr()
        //         const displayType = getDisplayType()
        //         const disPlayDataRef = props.sitData.current

        //         const keyArr = Object.keys(chartData)
        //         let dataObj = {}
        //         // let allArr = []
        //         if (keyArr.length) {

        //             const chartData = props.chartData.current
        //             for (let i = 0; i < keyArr.length; i++) {
        //                 const key = keyArr[i]
        //                 if (!dataObj[key]) dataObj[key] = {}
        //                           console.log(system , key)
        //                 const widthDistance = pointConfig[system][key].pointWidthDistance
        //                 const heightDistance = pointConfig[system][key].pointHeightDistance
        //                 dataObj[key].areaTotal = chartData[key].data.areaTotal * widthDistance * heightDistance / 100
        //                 // dataObj[key].pressTotal = chartData[key].data.pressTotal
        //                 dataObj[key].pressAver = chartData[key].data.pressAver
        //                 dataObj[key].pressMax = chartData[key].data.pressMax
        //                 dataObj[key].pressMin = chartData[key].data.pressMin
        //                 dataObj[key].pointTotal = chartData[key].data.areaTotal



        //                 dataObj[key].μ = chartData[key].normalDis.μ
        //                 dataObj[key].Var = chartData[key].normalDis.Var
        //                 dataObj[key].Skew = chartData[key].normalDis.Skew
        //                 dataObj[key].Kurt = chartData[key].normalDis.Kurt




        //                 dataObj[key].pressureCenter = Object.values(chartData[key].center)

        //                 // if (!props.sitData.current.back || !props.sitData.current.back.length) return
        //                 // const arrSmooth = graCenter(props.sitData.current[key], 50, 64)
        //                 // const arrSmooth1 = graCenter(props.sitData.current[key], 45, 45)

        //                 // trackRef.current?.circleMove({
        //                 //     arrSmooth: Object.values(arrSmooth),
        //                 //     arrSmooth1: Object.values(arrSmooth1)
        //                 // });


        //                 // allArr = allArr.concat(chartData[key].area)
        //             }
        //             // console.log(areaObj)
        //             // const max = Math.max(...allArr)

        //             // handleChartsArea(areaObj, max + 30)
        //         }
        //         return { ...dataObj, t: Date.now() }
        //     })
        //     )


        return () => {
            window.removeEventListener('resize', resizeCanvases)
        }
    }, [])

    const { t, i18n } = useTranslation()


    // const pressDataArr = ['pressAver', 'pressMax', 'pressTotal']
    // const pressDataArr = ['pressAver', 'pressMax', 'pressMin']
    // const areaDataArr = ['pointTotal', 'areaTotal',]

    // const centerDataArr = ['pressureCenter']
    // const normalDataArr = ['μ', 'Var', 'Skew', 'Kurt']

    return (
        // <Drawer direction='left' show={show} asideClose setShow={setShow} title={'数据'} >

        <>
            <div className='leftChairContent'>
                <div className='chartAndDataContent'>
                    <div className="chartTitle">
                        <div className="chartName">
                            {t('pressureCurve')}
                        </div>
                    </div>
                    <canvas id="myChart1" className='charts' style={{ height: `7.5rem`, width: '20.35rem', opacity: '0.8', flex: 1 }}></canvas>

                </div>


                <div className='chartAndDataContent'>
                    <div className="chartTitle">
                        <div className="chartName">
                            {t('areaCurve')}
                        </div>
                    </div>
                    <canvas id="myChart2" className='charts' style={{ height: `7.5rem`, width: '20.35rem', opacity: '0.8', flex: 1 }}></canvas>

                </div>
                <div className='chartAndDataContent'>
                    <div className="chartTitle">
                        <div className="chartName">
                            {t('copCurve')}
                        </div>
                    </div>
                    <canvas id="myChart3" className='charts' style={{ height: `7.5rem`, width: '20.35rem', opacity: '0.8', flex: 1 }}></canvas>

                </div>
            </div>

           

            <div className='rightChairContent'>
                 {pageInfo.displayStatus == 'dbplay' ?
                <Button style={{position : 'absolute' , left : '-8rem'}} onClick={() => {pageInfo.setDisplayStatus('static')}}>静态报告</Button> : ''
            }
                <div className='chartAndDataContent'>
                    <div className="chartTitle">
                        <div className="chartName">
                            {t('pressureCurve')}
                        </div>
                    </div>
                    <canvas id="myChart4" className='charts' style={{ height: `7.5rem`, width: '20.35rem', opacity: '0.8', flex: 1 }}></canvas>

                </div>


                <div className='chartAndDataContent'>
                    <div className="chartTitle">
                        <div className="chartName">
                            {t('areaCurve')}
                        </div>
                    </div>
                    <canvas id="myChart5" className='charts' style={{ height: `7.5rem`, width: '20.35rem', opacity: '0.8', flex: 1 }}></canvas>

                </div>
                <div className='chartAndDataContent'>
                    <div className="chartTitle">
                        <div className="chartName">
                            {t('areaCurve')}
                        </div>
                    </div>
                    <canvas id="myChart6" className='charts' style={{ height: `7.5rem`, width: '20.35rem', opacity: '0.8', flex: 1 }}></canvas>

                </div>
            </div>
        </>
    )
}

// function ChartContent(props) {
//     const {data , pressDataArr , pressColorArr} = props
//     const { t, i18n } = useTranslation()
//     return (
//         <div className='chartAndDataContent'>
//             <div className="chartTitle">
//                 <div className="chartName">
//                     {t('pressureCurve')}
//                 </div>
//                 <div className="chartType">
//                     {
//                         Object.keys(data).map((a, index) => {
//                             if (a != 't') {
//                                 return <div className='chartTypeItem'><div className='cirlce' style={{ backgroundColor: pressColorArr[a] }}></div> {t(a)}</div>
//                             }
//                         })
//                     }
//                 </div>


//             </div>

//             <canvas id="myChart1" style={{ height: `7.5rem`, width: '20.35rem', opacity: '0.8' }}></canvas>


//             {
//                 pressDataArr.map((item) => {
//                     return (
//                         <div className='chartData'>
//                             {t(item)}
//                             <div className='chartTypeContent'>{
//                                 Object.keys(data).map((a, index) => {
//                                     if (a != 't') {
//                                         return <div className='chartTypeItem'>

//                                             <div className='cirlce' style={{ backgroundColor: pressColorArr[a] }}></div> {data[a][item]}</div>
//                                     }
//                                 })
//                             }</div>
//                         </div>
//                     )
//                 })
//             }


//         </div>
//     )
// }


export default withTranslation('translation')(ChartsAside)
