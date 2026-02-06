import React, { useEffect, useMemo, useRef } from 'react'
import { genWebglHeatmap } from './WebGL.HeatMap copy 2'

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

const normalizeData = (input, size) => {
  if (!input) return new Array(size * size).fill(0)
  if (Array.isArray(input[0])) {
    const flat = []
    for (let r = 0; r < size; r++) {
      const row = input[r] || []
      for (let c = 0; c < size; c++) {
        flat.push(row[c] ?? 0)
      }
    }
    return flat
  }
  const out = new Array(size * size).fill(0)
  const src = Array.isArray(input) ? input : []
  for (let i = 0; i < out.length; i++) {
    out[i] = src[i] ?? 0
  }
  return out
}

const applyBorder = (data, size, border) => {
  if (!border || border <= 0) return data
  const result = [...data]
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (r < border || r >= size - border || c < border || c >= size - border) {
        result[r * size + c] = 0
      }
    }
  }
  return result
}

const applyMirrorX = (data, size) => {
  const result = [...data]
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < Math.floor(size / 2); c++) {
      const left = r * size + c
      const right = r * size + (size - 1 - c)
      const tmp = result[left]
      result[left] = result[right]
      result[right] = tmp
    }
  }
  return result
}

export default function WebglHeatmap({
  data,
  size = 64,
  maxValue = 12,
  radius = 24,
  filterValue = 0,
  border = 6,
  mirrorX = true,
  canvasWidth = 1024,
  canvasHeight = 1024,
  className,
  style
}) {
  const canvasRef = useRef(null)

  const processed = useMemo(() => {
    const safeSize = clamp(Number(size) || 64, 2, 512)
    let res = normalizeData(data, safeSize)
    if (border > 0) res = applyBorder(res, safeSize, border)
    if (mirrorX) res = applyMirrorX(res, safeSize)
    if (filterValue > 0) {
      res = res.map((val) => (val < filterValue ? 0 : val))
    }
    return { data: res, size: safeSize }
  }, [data, size, border, mirrorX, filterValue])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = genWebglHeatmap(
      processed.data,
      maxValue,
      radius,
      canvasWidth,
      canvasHeight
    )
    const ctx = canvasRef.current.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    ctx.drawImage(canvas, 0, 0, canvasRef.current.width, canvasRef.current.height)
  }, [processed, maxValue, radius, canvasWidth, canvasHeight])

  return (
    <div className={className} style={{ width: '100%', height: '100%', ...style }}>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
