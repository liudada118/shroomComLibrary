export { default as ReplayWindowLineChart } from './ReplayWindowLineChart.jsx'

import React, { useEffect, useMemo, useState } from 'react'
import ReplayWindowLineChart from './ReplayWindowLineChart'

export default function Demo() {
  const line1 = useMemo(
    () => Array.from({ length: 300 }, () => Math.random() * 200),
    []
  )
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i >= line1.length ? 0 : i + 1))
    }, 50)
    return () => clearInterval(t)
  }, [line1.length])

  const line2 = useMemo(() => line1.slice(0, idx), [line1, idx])

  return (
    <ReplayWindowLineChart
      series={[
        { name: 'line1', data: line1, color: '#12D0BE' },
        { name: 'line2', data: line2, color: '#D3C2FF', showLastDot: true }
      ]}
      yMax={320}
    />
  )
}
