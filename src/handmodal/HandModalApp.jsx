import React, { useMemo, useState } from 'react'
import HandHeatmapModel from '../heatmap/handmodal/HandHeatmapModel'
import './handmodal.css'

export default function HandModalApp() {
  const [scale, setScale] = useState(1.8)
  const [rotX, setRotX] = useState(-51)
  const [rotY, setRotY] = useState(0)
  const [rotZ, setRotZ] = useState(0)
  const [posX, setPosX] = useState(0)
  const [posY, setPosY] = useState(-0.4)
  const [posZ, setPosZ] = useState(3)

  const rotation = useMemo(
    () => ({
      x: (rotX * Math.PI) / 180,
      y: (rotY * Math.PI) / 180,
      z: (rotZ * Math.PI) / 180
    }),
    [rotX, rotY, rotZ]
  )

  const position = useMemo(
    () => ({
      x: posX,
      y: posY,
      z: posZ
    }),
    [posX, posY, posZ]
  )

  return (
    <div className="handmodal-shell">
      <div className="handmodal-frame">
        <HandHeatmapModel
          modelScale={scale}
          modelRotation={rotation}
          modelPosition={position}
        />
      </div>
      <div className="handmodal-controls">
        <div className="control-title">模型参数</div>
        <label className="control-line">
          <span>缩放</span>
          <input
            type="range"
            min="0.6"
            max="3"
            step="0.05"
            value={scale}
            onChange={(e) => setScale(Number(e.target.value))}
          />
          <em>{scale.toFixed(2)}</em>
        </label>
        <label className="control-line">
          <span>旋转 X</span>
          <input
            type="range"
            min="-120"
            max="60"
            step="1"
            value={rotX}
            onChange={(e) => setRotX(Number(e.target.value))}
          />
          <em>{rotX}°</em>
        </label>
        <label className="control-line">
          <span>旋转 Y</span>
          <input
            type="range"
            min="-180"
            max="180"
            step="1"
            value={rotY}
            onChange={(e) => setRotY(Number(e.target.value))}
          />
          <em>{rotY}°</em>
        </label>
        <label className="control-line">
          <span>旋转 Z</span>
          <input
            type="range"
            min="-180"
            max="180"
            step="1"
            value={rotZ}
            onChange={(e) => setRotZ(Number(e.target.value))}
          />
          <em>{rotZ}°</em>
        </label>
        <label className="control-line">
          <span>位置 X</span>
          <input
            type="range"
            min="-2"
            max="2"
            step="0.05"
            value={posX}
            onChange={(e) => setPosX(Number(e.target.value))}
          />
          <em>{posX.toFixed(2)}</em>
        </label>
        <label className="control-line">
          <span>位置 Y</span>
          <input
            type="range"
            min="-2"
            max="2"
            step="0.05"
            value={posY}
            onChange={(e) => setPosY(Number(e.target.value))}
          />
          <em>{posY.toFixed(2)}</em>
        </label>
        <label className="control-line">
          <span>位置 Z</span>
          <input
            type="range"
            min="-3"
            max="3"
            step="0.05"
            value={posZ}
            onChange={(e) => setPosZ(Number(e.target.value))}
          />
          <em>{posZ.toFixed(2)}</em>
        </label>
      </div>
      <div className="handmodal-hint">
        window.updateHandHeatmap('left' | 'right', data256)
      </div>
    </div>
  )
}
