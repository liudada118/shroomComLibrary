import React, { useEffect, useMemo, useState } from 'react'
import { Popover, Slider } from 'antd'
import PlaybackSpeedMenu from './PlaybackSpeedMenu'
import PlaybackPlayToggle from './PlaybackPlayToggle'

export default function PlaybackBar(props) {
  const {
    name,
    dataLength = 0,
    index = 0,
    showPlayToggle = false,
    showSpeed = false,
    showHistory = false,
    speedLabel = 'speed',
    historyLabel = 'history',
    style,
    contentStyle,
    onHistoryClick,
    isPaused = true,
    speedValue = '1.0',
    onIndexChange,
    onPlay,
    onStop,
    onSpeedChange,
    timestamp,
    formatTimestamp,
    speeds
  } = props

  const maxIndex = Math.max(0, (Number(dataLength) || 0) - 1)
  const safeIndex = Number.isFinite(Number(index)) ? Number(index) : 0
  const safeSpeed = speedValue ?? '1.0'
  const safeIsPaused = Boolean(isPaused)

  const resolvedTimestamp = useMemo(() => {
    if (timestamp == null) return ''
    if (typeof formatTimestamp === 'function') {
      return formatTimestamp(timestamp)
    }
    return String(timestamp)
  }, [timestamp, formatTimestamp])

  const [internalPaused, setInternalPaused] = useState(safeIsPaused)
  useEffect(() => setInternalPaused(safeIsPaused), [safeIsPaused])

  return (
    <div style={style}>
      <div className="colDate">{name}</div>
      <div className="playContent" style={contentStyle}>
        <Slider defaultValue={0} value={safeIndex} onChange={onIndexChange} max={maxIndex} />
        <div className="playControl">
          <div className="playLeftContent">
            {showPlayToggle ? (
              <PlaybackPlayToggle
                isPaused={internalPaused}
                onPlay={() => {
                  setInternalPaused(false)
                  onPlay?.()
                }}
                onStop={() => {
                  setInternalPaused(true)
                  onStop?.()
                }}
              />
            ) : null}
            <div className="playStamp">{resolvedTimestamp}</div>
          </div>

          {showSpeed || showHistory ? (
            <div className="playRightContent">
              {showSpeed ? (
                <div className="playSpeed cursor">
                  <Popover
                    color="#202327"
                    className="set-popover"
                    placement="top"
                    content={<PlaybackSpeedMenu value={safeSpeed} onChange={onSpeedChange} speeds={speeds} />}
                  >
                    <>{safeSpeed === '1.0' ? speedLabel : `${safeSpeed}X`}</>
                  </Popover>
                </div>
              ) : null}

              {showHistory ? (
                <div className="playHistoryData cursor" onClick={onHistoryClick}>
                  {historyLabel}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
