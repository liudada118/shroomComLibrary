import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

const defaultLineInterp = (input, width, height, interpX, interpY) => {
  const safe = Array.isArray(input) ? input : []
  const outW = width * interpX
  const outH = height * interpY
  const out = new Array(outW * outH).fill(0)
  for (let y = 0; y < outH; y++) {
    const srcY = Math.floor(y / interpY)
    for (let x = 0; x < outW; x++) {
      const srcX = Math.floor(x / interpX)
      out[y * outW + x] = safe[srcY * width + srcX] ?? 0
    }
  }
  return out
}

const defaultAddSide = (arr, width, height, padX, padY) => {
  const outW = width + padX * 2
  const outH = height + padY * 2
  const out = new Array(outW * outH).fill(0)
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      out[(y + padY) * outW + (x + padX)] = arr[y * width + x] ?? 0
    }
  }
  return out
}

const defaultGaussBlurReturn = (arr, width, height, radius = 1) => {
  const r = Math.max(1, Math.round(radius))
  const out = new Array(width * height).fill(0)
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let sum = 0
      let count = 0
      for (let ky = -r; ky <= r; ky++) {
        const yy = y + ky
        if (yy < 0 || yy >= height) continue
        for (let kx = -r; kx <= r; kx++) {
          const xx = x + kx
          if (xx < 0 || xx >= width) continue
          sum += arr[yy * width + xx] ?? 0
          count += 1
        }
      }
      out[y * width + x] = count ? sum / count : 0
    }
  }
  return out
}

const defaultJetWhite3 = (min, max, value) => {
  const t = clamp((value - min) / (max - min || 1), 0, 1)
  const r = clamp(1.5 - Math.abs(4 * t - 3), 0, 1)
  const g = clamp(1.5 - Math.abs(4 * t - 2), 0, 1)
  const b = clamp(1.5 - Math.abs(4 * t - 1), 0, 1)
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}

const defaultGroupConfigs = {
  sit: {
    dataConfig: { sitnum1: 32, sitnum2: 32, sitInterp: 2, sitInterp1: 2, sitOrder: 3 },
    pointConfig: { position: [0, -30, -5], rotation: [-Math.PI / 6, 0, 0], scale: [0.0018, 0.0018, 0.0018] }
  },
  back: {
    dataConfig: { sitnum1: 32, sitnum2: 32, sitInterp: 2, sitInterp1: 2, sitOrder: 3 },
    pointConfig: { position: [2.5, -15, 0], rotation: [-Math.PI / 12 - Math.PI / 2, 0, 0], scale: [0.0015, 0.002, 0.002] }
  }
}

const defaultSettings = { gauss: 1, color: 200, filter: 0, height: 1, coherent: 1 }
const defaultModelConfig = { position: [0, -25, 60], rotation: [-Math.PI / 6, -Math.PI, 0], scale: [0.4, 0.4, 0.4] }
const defaultCameraConfig = { fov: 40, near: 1, far: 150000, position: [0, 43.05, -120] }
const defaultGroupConfig = { position: [0, 20, -10], rotation: [Math.PI / 6, 0, 0] }
const defaultGridConfig = { show: true, size: 2000, divisions: 100, positionY: -199, opacity: 0.25 }
const defaultControlsConfig = {
  enabled: true,
  rotateSpeed: 1.0,
  zoomSpeed: 1.2,
  panSpeed: 0.8,
  staticMoving: true,
  dynamicDampingFactor: 0.2,
  noRotate: false,
  noZoom: false,
  noPan: false,
  minDistance: 10,
  maxDistance: 10000
}

const ThreeAndCarPoint = forwardRef((props, refs) => {
  const {
    data,
    dataRef,
    groupConfigs = defaultGroupConfigs,
    sitConfig,
    backConfig,
    sitPointConfig,
    backPointConfig,
    settings = defaultSettings,
    displayType = 'sit',
    utils = {},
    modelUrl,
    modelConfig = defaultModelConfig,
    pointSpriteUrl,
    backgroundColor = 0x000000,
    cameraConfig = defaultCameraConfig,
    groupConfig = defaultGroupConfig,
    separation = 100,
    gridConfig = defaultGridConfig,
    controlsConfig = defaultControlsConfig,
    controlsTarget,
    onViewChange,
    className,
    style
  } = props

  const containerRef = useRef(null)
  const rendererRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const controlsRef = useRef(null)
  const groupRef = useRef(new THREE.Group())
  const pointsGroupRef = useRef(new THREE.Group())
  const dataInternalRef = useRef(data || { sit: [], back: [] })
  const settingsRef = useRef(settings)
  const displayTypeRef = useRef(displayType)

  const { lineInterp = defaultLineInterp, addSide = defaultAddSide, gaussBlurReturn = defaultGaussBlurReturn, jetWhite3 = defaultJetWhite3 } = utils

  const smoothMapRef = useRef({})
  const animationIdRef = useRef(null)

  useEffect(() => {
    if (dataRef && dataRef.current) {
      dataInternalRef.current = dataRef.current
    } else if (data) {
      dataInternalRef.current = data
    }
  }, [data, dataRef])

  useEffect(() => {
    settingsRef.current = settings
  }, [settings])

  useEffect(() => {
    displayTypeRef.current = displayType
  }, [displayType])

  const groups = useMemo(() => {
    const base = {
      sit: groupConfigs.sit || defaultGroupConfigs.sit,
      back: groupConfigs.back || defaultGroupConfigs.back
    }

    if (sitConfig) base.sit = { ...base.sit, dataConfig: sitConfig }
    if (backConfig) base.back = { ...base.back, dataConfig: backConfig }
    if (sitPointConfig) base.sit = { ...base.sit, pointConfig: sitPointConfig }
    if (backPointConfig) base.back = { ...base.back, pointConfig: backPointConfig }

    return base
  }, [groupConfigs, sitConfig, backConfig, sitPointConfig, backPointConfig])

  useImperativeHandle(refs, () => ({
    changePointRotation: (value, type = displayTypeRef.current) => {
      const target = pointsGroupRef.current.children.find((child) => child.name === type)
      if (!target) return
      target.rotation.x = -Math.PI / 2 + (value * 2) / 12
    },
    changeCamera: (value) => {
      if (cameraRef.current) cameraRef.current.position.z = (-120 * 100 / value)
    },
    reset3D: () => {
      controlsRef.current?.reset()
      if (onViewChange && cameraRef.current) {
        onViewChange(Math.floor(-120 * 100 / cameraRef.current.position.z))
      }
    }
  }))

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio || 1)
    renderer.setClearColor(backgroundColor)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      cameraConfig.fov,
      container.clientWidth / container.clientHeight,
      cameraConfig.near,
      cameraConfig.far
    )
    camera.position.set(...cameraConfig.position)

    rendererRef.current = renderer
    sceneRef.current = scene
    cameraRef.current = camera

    const group = groupRef.current
    group.position.set(...groupConfig.position)
    group.rotation.set(...groupConfig.rotation)

    const pointsGroup = pointsGroupRef.current
    group.add(pointsGroup)
    scene.add(group)

    if (gridConfig.show) {
      const helper = new THREE.GridHelper(gridConfig.size, gridConfig.divisions)
      helper.position.y = gridConfig.positionY
      helper.material.opacity = gridConfig.opacity
      helper.material.transparent = true
      scene.add(helper)
    }

    scene.add(new THREE.AmbientLight(0xffffff, 1))
    scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1))
    const dir = new THREE.DirectionalLight(0xffffff, 1.0)
    dir.position.set(5, 10, 5)
    scene.add(dir)

    if (controlsConfig.enabled) {
      controlsRef.current = new TrackballControls(camera, renderer.domElement)
      const { target, ...rest } = controlsConfig
      Object.assign(controlsRef.current, rest)
      const nextTarget = controlsTarget || target
      if (Array.isArray(nextTarget) && nextTarget.length === 3) {
        controlsRef.current.target.set(...nextTarget)
      } else if (nextTarget && typeof nextTarget === 'object' && 'x' in nextTarget) {
        controlsRef.current.target.set(nextTarget.x, nextTarget.y, nextTarget.z)
      }
    }

    const loader = new GLTFLoader()
    if (modelUrl) {
      loader.load(modelUrl, (gltf) => {
        const model = gltf.scene
        model.position.set(...(modelConfig.position || [0, 0, 0]))
        model.rotation.set(...(modelConfig.rotation || [0, 0, 0]))
        model.scale.set(...(modelConfig.scale || [1, 1, 1]))
        group.add(model)
      })
    }

    const sprite = pointSpriteUrl ? new THREE.TextureLoader().load(pointSpriteUrl) : null

    const createPointCloud = (name, config) => {
      const { dataConfig, pointConfig } = config
      const { sitnum1, sitnum2, sitInterp, sitInterp1, sitOrder } = dataConfig
      const amountX = sitnum1 * sitInterp + sitOrder * 2
      const amountY = sitnum2 * sitInterp1 + sitOrder * 2
      const total = amountX * amountY

      const positions = new Float32Array(total * 3)
      const colors = new Float32Array(total * 3)
      const scales = new Float32Array(total)

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
      geometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1))

      const material = new THREE.PointsMaterial({
        vertexColors: true,
        transparent: true,
        ...(sprite ? { map: sprite } : {}),
        size: (pointConfig.scale?.[0] || 0.001) * 300
      })

      material.onBeforeCompile = (shader) => {
        shader.vertexShader = shader.vertexShader
          .replace('void main() {', 'attribute float aScale;\nvarying float vScale;\nvoid main() {')
          .replace('#include <begin_vertex>', '#include <begin_vertex>\n vScale = aScale;')
        shader.fragmentShader = shader.fragmentShader
          .replace('void main() {', 'varying float vScale;\nvoid main() {')
          .replace('#include <clipping_planes_fragment>', '#include <clipping_planes_fragment>\n if (vScale <= 0.0) discard;')
      }

      const points = new THREE.Points(geometry, material)
      points.name = name
      if (pointConfig.position?.length) points.position.set(...pointConfig.position)
      if (pointConfig.rotation?.length) points.rotation.set(...pointConfig.rotation)
      if (pointConfig.scale?.length) points.scale.set(...pointConfig.scale)
      pointsGroup.add(points)

      smoothMapRef.current[name] = new Array(total).fill(1)
    }

    Object.entries(groups).forEach(([name, config]) => createPointCloud(name, config))

    const updatePoints = () => {
      const currentSettings = settingsRef.current || defaultSettings
      const dataSource = dataRef?.current || dataInternalRef.current || {}

      Object.entries(groups).forEach(([name, config]) => {
        const { dataConfig } = config
        const { sitnum1, sitnum2, sitInterp, sitInterp1, sitOrder } = dataConfig
        const amountX = sitnum1 * sitInterp + sitOrder * 2
        const amountY = sitnum2 * sitInterp1 + sitOrder * 2
        const total = amountX * amountY

        const points = pointsGroup.children.find((child) => child.name === name)
        if (!points) return

        const raw = (dataSource?.[name] || []).slice()
        if (!raw.length) return

        const interpData = lineInterp(raw, sitnum2, sitnum1, sitInterp1, sitInterp)
        const padded = addSide(interpData, sitnum2 * sitInterp1, sitnum1 * sitInterp, sitOrder, sitOrder)
        const blurred = gaussBlurReturn(
          padded,
          sitnum2 * sitInterp1 + sitOrder * 2,
          sitnum1 * sitInterp + sitOrder * 2,
          currentSettings.gauss
        )

        const smooth = smoothMapRef.current[name] || new Array(total).fill(1)
        const position = points.geometry.attributes.position.array
        const colors = points.geometry.attributes.color.array
        const scales = points.geometry.attributes.aScale.array

        let k = 0
        let l = 0
        let j = 0
        for (let ix = 0; ix < amountX; ix++) {
          for (let iy = 0; iy < amountY; iy++) {
            const value = (blurred[l] ?? 0) * 10
            smooth[l] = smooth[l] + (value - smooth[l]) / (currentSettings.coherent || 1)

            position[k] = iy * separation - (amountX * separation) / 2
            position[k + 1] = smooth[l] * (currentSettings.height || 1)
            position[k + 2] = ix * separation - (amountY * separation) / 2

            const isHidden = value < (currentSettings.color || 0) * 0.25 || value < (currentSettings.filter || 0)
            scales[j] = isHidden ? 0 : 1

            const rgb = jetWhite3(0, currentSettings.color || 1, smooth[l])
            colors[k] = rgb[0] / 255
            colors[k + 1] = rgb[1] / 255
            colors[k + 2] = rgb[2] / 255

            k += 3
            l += 1
            j += 1
          }
        }

        points.geometry.attributes.position.needsUpdate = true
        points.geometry.attributes.color.needsUpdate = true
        points.geometry.attributes.aScale.needsUpdate = true
      })
    }

    const resize = () => {
      const width = Math.max(1, container.clientWidth)
      const height = Math.max(1, container.clientHeight)
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      controlsRef.current?.handleResize?.()
    }

    container.innerHTML = ''
    container.appendChild(renderer.domElement)
    resize()

    let resizeObserver
    if (window.ResizeObserver) {
      resizeObserver = new ResizeObserver(resize)
      resizeObserver.observe(container)
    } else {
      window.addEventListener('resize', resize)
    }

    const animate = () => {
      controlsRef.current?.update()
      updatePoints()
      renderer.render(scene, camera)
      animationIdRef.current = requestAnimationFrame(animate)
    }

    animate()

    const onWheel = () => {
      if (!onViewChange || !cameraRef.current) return
      onViewChange(Math.floor(-120 * 100 / cameraRef.current.position.z))
    }

    document.addEventListener('wheel', onWheel)

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current)
      document.removeEventListener('wheel', onWheel)
      if (resizeObserver) {
        resizeObserver.disconnect()
      } else {
        window.removeEventListener('resize', resize)
      }
      controlsRef.current?.dispose?.()
      renderer.dispose()
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [
    groups,
    backgroundColor,
    cameraConfig,
    groupConfig,
    gridConfig,
    modelUrl,
    modelConfig,
    pointSpriteUrl,
    separation
  ])

  useEffect(() => {
    const renderer = rendererRef.current
    const camera = cameraRef.current
    if (!renderer || !camera) return

    if (!controlsConfig.enabled) {
      controlsRef.current?.dispose?.()
      controlsRef.current = null
      return
    }

    if (!controlsRef.current) {
      controlsRef.current = new TrackballControls(camera, renderer.domElement)
    }

    const { target, ...rest } = controlsConfig
    Object.assign(controlsRef.current, rest)
    const nextTarget = controlsTarget || target
    if (Array.isArray(nextTarget) && nextTarget.length === 3) {
      controlsRef.current.target.set(...nextTarget)
    } else if (nextTarget && typeof nextTarget === 'object' && 'x' in nextTarget) {
      controlsRef.current.target.set(nextTarget.x, nextTarget.y, nextTarget.z)
    }
  }, [controlsConfig, controlsTarget])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
    />
  )
})

export default ThreeAndCarPoint
