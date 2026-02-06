import React, { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

const hexToRgb = (hex) => {
  if (!hex) return { r: 1, g: 1, b: 1 }
  const normalized = hex.replace('#', '')
  const bigint = parseInt(normalized.length === 3
    ? normalized.split('').map((c) => c + c).join('')
    : normalized, 16)
  return {
    r: ((bigint >> 16) & 255) / 255,
    g: ((bigint >> 8) & 255) / 255,
    b: (bigint & 255) / 255
  }
}

const lerp = (a, b, t) => a + (b - a) * t

const gradientColor = (t, colors) => {
  if (!colors || colors.length === 0) return { r: 1, g: 1, b: 1 }
  if (colors.length === 1) return hexToRgb(colors[0])
  if (colors.length === 2) {
    const c0 = hexToRgb(colors[0])
    const c1 = hexToRgb(colors[1])
    return {
      r: lerp(c0.r, c1.r, t),
      g: lerp(c0.g, c1.g, t),
      b: lerp(c0.b, c1.b, t)
    }
  }
  const c0 = hexToRgb(colors[0])
  const c1 = hexToRgb(colors[1])
  const c2 = hexToRgb(colors[2])
  if (t <= 0.5) {
    const tt = t / 0.5
    return {
      r: lerp(c0.r, c1.r, tt),
      g: lerp(c0.g, c1.g, tt),
      b: lerp(c0.b, c1.b, tt)
    }
  }
  const tt = (t - 0.5) / 0.5
  return {
    r: lerp(c1.r, c2.r, tt),
    g: lerp(c1.g, c2.g, tt),
    b: lerp(c1.b, c2.b, tt)
  }
}

const jet = (min, max, x) => {
  let red = 1.0
  let g = 1.0
  let blue = 1.0
  if (x < min) x = min
  if (x > max) x = max
  const dv = max - min
  if (x < min + 0.25 * dv) {
    red = 0
    g = (4 * (x - min)) / dv
  } else if (x < min + 0.5 * dv) {
    red = 0
    blue = 1 + (4 * (min + 0.25 * dv - x)) / dv
  } else if (x < min + 0.75 * dv) {
    red = (4 * (x - min - 0.5 * dv)) / dv
    blue = 0
  } else {
    g = 1 + (4 * (min + 0.75 * dv - x)) / dv
    blue = 0
  }
  return [
    Math.round(255 * red),
    Math.round(255 * g),
    Math.round(255 * blue)
  ]
}

const createDigitSpriteSheet = () => {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = 512
  const ctx = canvas.getContext('2d')
  const gridSize = 16
  const cellSize = 32

  ctx.font = 'bold 18px monospace'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  for (let i = 0; i < 256; i++) {
    const x = i % gridSize
    const y = Math.floor(i / gridSize)
    const cx = x * cellSize
    const cy = y * cellSize
    const [r, g, b] = jet(0, 255, i)
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
    ctx.fillRect(cx, cy, cellSize, cellSize)
    ctx.strokeStyle = '#0f172a'
    ctx.lineWidth = 1
    ctx.strokeRect(cx, cy, cellSize, cellSize)
    ctx.fillStyle = '#ffffff'
    ctx.fillText(i.toString(), cx + cellSize / 2, cy + cellSize / 2)
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.flipY = false
  tex.minFilter = THREE.LinearFilter
  tex.magFilter = THREE.NearestFilter
  return tex
}

export default function NumThreeColor({
  data = [],
  rows = 16,
  cols = 16,
  size = 4,
  colors = ['#12D0BE', '#E2E8F0', '#D3C2FF'],
  valueRange,
  zoomable = true,
  panEnabled = true,
  minZoom = 0.5,
  maxZoom = 8,
  zoomStep = 1.1,
  className,
  style
}) {
  const containerRef = useRef(null)
  const dataRef = useRef([])
  const colorsRef = useRef(colors)
  const valueRangeRef = useRef(valueRange)
  const zoomableRef = useRef(zoomable)
  const panEnabledRef = useRef(panEnabled)

  useEffect(() => {
    dataRef.current = Array.isArray(data) ? data : []
  }, [data])

  useEffect(() => {
    colorsRef.current = colors
  }, [colors])

  useEffect(() => {
    valueRangeRef.current = valueRange
  }, [valueRange])

  useEffect(() => {
    zoomableRef.current = zoomable
  }, [zoomable])

  useEffect(() => {
    panEnabledRef.current = panEnabled
  }, [panEnabled])

  const count = useMemo(() => rows * cols, [rows, cols])

  useEffect(() => {
    if (!containerRef.current) return

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio || 1)

    const scene = new THREE.Scene()
    const cellSize = 0.032 * size
    const spacing = cellSize
    const halfW = (cols * spacing) / 2
    const halfH = (rows * spacing) / 2

    const camera = new THREE.OrthographicCamera(-halfW, halfW, halfH, -halfH, 0.1, 1000)
    camera.position.z = 10

    const texture = createDigitSpriteSheet()
    const material = new THREE.ShaderMaterial({
      uniforms: {
        map: { value: texture },
        tileSize: { value: 1.0 / 16.0 }
      },
      vertexShader: `
        attribute vec3 instanceColor;
        attribute vec2 uvOffset;
        varying vec3 vColor;
        varying vec2 vUv;
        uniform float tileSize;
        void main() {
          vUv = uv * tileSize + uvOffset;
          vColor = instanceColor;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D map;
        varying vec2 vUv;
        varying vec3 vColor;
        void main() {
          vec4 texColor = texture2D(map, vUv);
          if (texColor.a < 0.1) discard;
          gl_FragColor = vec4(texColor.rgb * vColor, texColor.a);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: true,
      depthTest: true
    })

    material.toneMapped = false

    const geometry = new THREE.PlaneGeometry(cellSize, cellSize)
    const uvOffsets = new Float32Array(count * 2)
    const colorArray = new Float32Array(count * 3)
    const mesh = new THREE.InstancedMesh(geometry, material, count)
    const dummy = new THREE.Object3D()

    for (let i = 0; i < count; i++) {
      const x = i % cols
      const y = Math.floor(i / cols)
      dummy.position.set((x - (cols - 1) / 2) * spacing, (y - (rows - 1) / 2) * spacing, 0)
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)
      uvOffsets[i * 2] = 0
      uvOffsets[i * 2 + 1] = 0
      colorArray[i * 3] = 1
      colorArray[i * 3 + 1] = 1
      colorArray[i * 3 + 2] = 1
    }

    geometry.setAttribute('uvOffset', new THREE.InstancedBufferAttribute(uvOffsets, 2))
    geometry.setAttribute('instanceColor', new THREE.InstancedBufferAttribute(colorArray, 3))
    mesh.rotation.x = Math.PI
    scene.add(mesh)

    const resize = () => {
      const rect = containerRef.current.getBoundingClientRect()
      const width = Math.max(1, Math.round(rect.width || 400))
      const height = Math.max(1, Math.round(rect.height || 400))
      renderer.setSize(width, height)
    }

    // Clear any previous canvases to avoid duplicates (e.g. hot reload)
    containerRef.current.innerHTML = ''
    resize()
    window.addEventListener('resize', resize)

    const raycaster = new THREE.Raycaster()
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
    const mouse = new THREE.Vector2()
    const beforeZoom = new THREE.Vector3()
    const afterZoom = new THREE.Vector3()
    const lastDrag = new THREE.Vector2()
    let isDragging = false

    const getWorldPoint = (event, target) => {
      const rect = renderer.domElement.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(mouse, camera)
      return raycaster.ray.intersectPlane(plane, target)
    }

    const onWheel = (event) => {
      if (!zoomableRef.current) return
      event.preventDefault()
      if (!getWorldPoint(event, beforeZoom)) return
      const scale = event.deltaY < 0 ? zoomStep : 1 / zoomStep
      const nextZoom = clamp(camera.zoom * scale, minZoom, maxZoom)
      if (nextZoom === camera.zoom) return
      camera.zoom = nextZoom
      camera.updateProjectionMatrix()
      if (!getWorldPoint(event, afterZoom)) return
      camera.position.add(beforeZoom.sub(afterZoom))
    }

    const onPointerDown = (event) => {
      if (!panEnabledRef.current || event.button !== 0) return
      isDragging = true
      lastDrag.set(event.clientX, event.clientY)
      renderer.domElement.setPointerCapture(event.pointerId)
    }

    const onPointerMove = (event) => {
      if (!isDragging) return
      const dx = event.clientX - lastDrag.x
      const dy = event.clientY - lastDrag.y
      lastDrag.set(event.clientX, event.clientY)
      const rect = renderer.domElement.getBoundingClientRect()
      const worldPerPixelX = (camera.right - camera.left) / (rect.width * camera.zoom)
      const worldPerPixelY = (camera.top - camera.bottom) / (rect.height * camera.zoom)
      camera.position.x -= dx * worldPerPixelX
      camera.position.y += dy * worldPerPixelY
    }

    const onPointerUp = (event) => {
      if (!isDragging) return
      isDragging = false
      if (renderer.domElement.hasPointerCapture(event.pointerId)) {
        renderer.domElement.releasePointerCapture(event.pointerId)
      }
    }

    const canvas = renderer.domElement
    canvas.style.touchAction = 'none'
    canvas.addEventListener('wheel', onWheel, { passive: false })
    canvas.addEventListener('pointerdown', onPointerDown)
    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerup', onPointerUp)
    canvas.addEventListener('pointerleave', onPointerUp)
    canvas.addEventListener('pointercancel', onPointerUp)

    let animationId
    const animate = () => {
      const values = dataRef.current
      const safeValues = Array.isArray(values) ? values : []
      const len = safeValues.length
      let minVal = 0
      let maxVal = 255
      const rangeOverride = valueRangeRef.current
      if (rangeOverride && rangeOverride.length === 2) {
        minVal = rangeOverride[0]
        maxVal = rangeOverride[1]
      } else if (len) {
        minVal = Math.min(...safeValues)
        maxVal = Math.max(...safeValues)
      }
      const range = maxVal - minVal || 1

      for (let i = 0; i < count; i++) {
        const raw = safeValues[i] ?? 0
        const t = clamp((raw - minVal) / range, 0, 1)
        const digit = Math.round(t * 255)
        uvOffsets[i * 2] = (digit % 16) / 16
        uvOffsets[i * 2 + 1] = Math.floor(digit / 16) / 16

        const color = gradientColor(t, colorsRef.current)
        colorArray[i * 3] = color.r
        colorArray[i * 3 + 1] = color.g
        colorArray[i * 3 + 2] = color.b
      }

      geometry.attributes.uvOffset.needsUpdate = true
      geometry.attributes.instanceColor.needsUpdate = true
      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }

    animate()

    if (!containerRef.current.contains(canvas)) {
      containerRef.current.appendChild(canvas)
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('wheel', onWheel)
      canvas.removeEventListener('pointerdown', onPointerDown)
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerup', onPointerUp)
      canvas.removeEventListener('pointerleave', onPointerUp)
      canvas.removeEventListener('pointercancel', onPointerUp)
      if (canvas.parentNode === containerRef.current) {
        containerRef.current.removeChild(canvas)
      }
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      texture.dispose()
    }
  }, [count, rows, cols, size, minZoom, maxZoom, zoomStep])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
    />
  )
}
