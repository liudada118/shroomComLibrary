import React, { useEffect, useMemo, useRef } from 'react'

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

const buildPalette = (colors) => {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 1
  const ctx = canvas.getContext('2d')
  const gradient = ctx.createLinearGradient(0, 0, 256, 0)

  const safeColors = Array.isArray(colors) && colors.length ? colors : ['#0f172a', '#22d3ee', '#f97316']
  const step = 1 / (safeColors.length - 1)
  safeColors.forEach((color, idx) => {
    gradient.addColorStop(idx * step, color)
  })

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 256, 1)
  return ctx.getImageData(0, 0, 256, 1).data
}

const createCircle = (radius, blur) => {
  const size = Math.max(1, Math.round((radius + blur) * 2))
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  const r = radius
  const center = size / 2

  const gradient = ctx.createRadialGradient(center, center, 0, center, center, r + blur)
  gradient.addColorStop(0, 'rgba(0,0,0,1)')
  gradient.addColorStop(1, 'rgba(0,0,0,0)')

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, size, size)
  return canvas
}

export default function CanvasHeatmap({
  data = [],
  rows = 32,
  cols = 32,
  colors = ['#0f172a', '#22d3ee', '#f97316'],
  filterValue = 0,
  intensity = 1,
  dotSize = 18,
  blur = 10,
  minValue,
  maxValue,
  className,
  style
}) {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const paletteRef = useRef(null)
  const circleRef = useRef(null)
  const resizeObserverRef = useRef(null)

  const dataRef = useRef([])
  const configRef = useRef({
    rows,
    cols,
    colors,
    filterValue,
    intensity,
    dotSize,
    blur,
    minValue,
    maxValue
  })

  useEffect(() => {
    dataRef.current = Array.isArray(data) ? data : []
  }, [data])

  useEffect(() => {
    configRef.current = {
      rows,
      cols,
      colors,
      filterValue,
      intensity,
      dotSize,
      blur,
      minValue,
      maxValue
    }
  }, [rows, cols, colors, filterValue, intensity, dotSize, blur, minValue, maxValue])

  const pointCount = useMemo(() => rows * cols, [rows, cols])

  useEffect(() => {
    if (!containerRef.current) return

    const canvas = document.createElement('canvas')
    canvasRef.current = canvas
    const ctx = canvas.getContext('2d')

    const resize = () => {
      const rect = containerRef.current.getBoundingClientRect()
      const width = Math.max(1, Math.round(rect.width || 300))
      const height = Math.max(1, Math.round(rect.height || 300))
      if (canvas.width !== width) canvas.width = width
      if (canvas.height !== height) canvas.height = height
    }

    resize()
    if (!containerRef.current.contains(canvas)) {
      containerRef.current.innerHTML = ''
      containerRef.current.appendChild(canvas)
    }

    if (window.ResizeObserver) {
      resizeObserverRef.current = new ResizeObserver(resize)
      resizeObserverRef.current.observe(containerRef.current)
    } else {
      window.addEventListener('resize', resize)
    }

    let animationId
    const draw = () => {
      const config = configRef.current
      const values = dataRef.current
      const safeValues = Array.isArray(values) ? values : []

      const maxVal = typeof config.maxValue === 'number'
        ? config.maxValue
        : safeValues.length
          ? Math.max(...safeValues)
          : 1
      const minVal = typeof config.minValue === 'number' ? config.minValue : 0
      const range = maxVal - minVal || 1

      if (!paletteRef.current || paletteRef.current.colors !== config.colors) {
        paletteRef.current = {
          colors: config.colors,
          data: buildPalette(config.colors)
        }
      }

      if (!circleRef.current || circleRef.current.size !== config.dotSize || circleRef.current.blur !== config.blur) {
        circleRef.current = {
          size: config.dotSize,
          blur: config.blur,
          canvas: createCircle(config.dotSize, config.blur)
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const circle = circleRef.current.canvas
      const circleHalf = circle.width / 2
      const stepX = canvas.width / config.cols
      const stepY = canvas.height / config.rows

      for (let i = 0; i < pointCount; i++) {
        const raw = safeValues[i] ?? 0
        if (raw <= config.filterValue) continue
        const t = clamp(((raw - minVal) / range) * config.intensity, 0, 1)
        if (t <= 0) continue

        const row = Math.floor(i / config.cols)
        const col = i % config.cols
        const x = col * stepX + stepX / 2
        const y = row * stepY + stepY / 2

        ctx.globalAlpha = t
        ctx.drawImage(circle, x - circleHalf, y - circleHalf)
      }

      const image = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const pixels = image.data
      const palette = paletteRef.current.data

      for (let i = 3; i < pixels.length; i += 4) {
        const alpha = pixels[i]
        if (alpha === 0) continue
        const idx = alpha * 4
        pixels[i - 3] = palette[idx]
        pixels[i - 2] = palette[idx + 1]
        pixels[i - 1] = palette[idx + 2]
      }

      ctx.putImageData(image, 0, 0)
      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect()
      } else {
        window.removeEventListener('resize', resize)
      }
      if (canvas.parentNode === containerRef.current) {
        containerRef.current.removeChild(canvas)
      }
    }
  }, [pointCount])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
    />
  )
}
