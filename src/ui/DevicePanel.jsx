/**
 * DevicePanel v2.3 - 统一设备连接面板（零弹窗一键连接版）
 *
 * Electron 环境下：
 * - 点击"一键连接"→ 自动扫描所有串口 → 自动波特率探测 → 自动设备识别
 * - 全程零弹窗，无需任何用户操作
 *
 * 提供：
 * - 一键连接（自动扫描所有串口、波特率探测、设备分类）
 * - 连接进度显示
 * - 设备列表与在线状态
 * - 脚垫配置入口
 * - 评估就绪状态指示
 */

import React, { useState } from 'react';
import { useDeviceManager } from '../../hooks/useDeviceManager';
import { ASSESSMENT_CHANNELS } from '../../lib/DeviceManager';
import FootpadConfigDialog from './FootpadConfigDialog';

const DEVICE_TYPE_LABELS = {
  glove: '手套',
  seat: '坐垫',
  footpad: '脚垫',
  unknown: '未知',
};

const DEVICE_TYPE_COLORS = {
  glove: '#0066CC',
  seat: '#059669',
  footpad: '#D97706',
  unknown: '#6B7280',
};

const CHANNEL_LABELS = {
  HL: '左手', HR: '右手',
  seat: '坐垫',
  foot1: '脚垫1', foot2: '脚垫2', foot3: '脚垫3', foot4: '脚垫4',
};

export default function DevicePanel({ compact = false, assessmentType = null }) {
  const {
    deviceList, summary, connecting,
    connectOne, connectAll,
    disconnectOne, disconnectAll,
    dm,
  } = useDeviceManager();

  const [showFootpadConfig, setShowFootpadConfig] = useState(false);
  const [connectProgress, setConnectProgress] = useState(null);

  /** 一键连接（Electron下零弹窗！） */
  const handleConnectAll = async () => {
    setConnectProgress({ phase: 'starting', detail: '正在自动扫描串口设备...' });
    await connectAll((phase, detail) => {
      setConnectProgress({ phase, detail });
    });
    // 连接完成后延迟清除进度
    setTimeout(() => setConnectProgress(null), 2000);
  };

  // 评估就绪状态
  const assessmentReady = assessmentType ? dm.checkAssessmentReady(assessmentType) : null;

  // ── 紧凑模式：header 中的设备状态条 ──
  if (compact) {
    const hasDevices = summary.total > 0;
    const allOnline = summary.allOnline;

    return (
      <>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-light)' }}>

          {/* 状态点 */}
          <div className={`w-2 h-2 rounded-full ${hasDevices && allOnline ? 'animate-pulse' : ''}`}
            style={{
              background: !hasDevices ? 'var(--border-medium)' :
                allOnline ? '#10B981' : '#F59E0B'
            }} />

          {/* 状态文字 */}
          {connectProgress ? (
            <span className="text-xs animate-pulse" style={{ color: 'var(--zeiss-blue)' }}>
              {connectProgress.detail}
            </span>
          ) : (
            <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
              {!hasDevices ? '未连接' :
                `${summary.glove > 0 ? '手套' : ''}${summary.seat > 0 ? ' 坐垫' : ''}${summary.footpad > 0 ? ` 脚垫×${summary.footpad}` : ''}`.trim() + (allOnline ? ' 在线' : ' 部分离线')}
            </span>
          )}

          {/* 评估就绪指示 */}
          {assessmentReady && hasDevices && (
            <span className="text-[10px] px-1.5 py-0.5 rounded font-medium"
              style={{
                background: assessmentReady.ready ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)',
                color: assessmentReady.ready ? '#10B981' : '#F59E0B',
              }}>
              {assessmentReady.ready ? '就绪' : `缺${assessmentReady.missing.map(m => CHANNEL_LABELS[m] || m).join('、')}`}
            </span>
          )}

          {/* 按钮 */}
          {!hasDevices ? (
            <button onClick={handleConnectAll} disabled={connecting}
              className="text-xs font-medium ml-1"
              style={{ color: 'var(--zeiss-blue)', background: 'none', border: 'none', cursor: 'pointer' }}>
              {connecting ? '连接中...' : '一键连接'}
            </button>
          ) : (
            <>
              {summary.footpad > 0 && (
                <>
                  <button onClick={() => setShowFootpadConfig(true)}
                    className="text-xs font-medium ml-1"
                    style={{ color: '#D97706', background: 'none', border: 'none', cursor: 'pointer' }}>
                    脚垫配置
                  </button>
                  <span style={{ color: 'var(--border-medium)' }}>|</span>
                </>
              )}
              <button onClick={disconnectAll}
                className="text-xs font-medium"
                style={{ color: '#DC2626', background: 'none', border: 'none', cursor: 'pointer' }}>
                断开
              </button>
            </>
          )}
        </div>

        <FootpadConfigDialog open={showFootpadConfig} onClose={() => setShowFootpadConfig(false)} />
      </>
    );
  }

  // ── 完整模式：设备列表面板 ──
  return (
    <>
      <div className="zeiss-card p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
            设备管理
          </h3>
          <div className="flex gap-2">
            {summary.footpad > 0 && (
              <button onClick={() => setShowFootpadConfig(true)}
                className="zeiss-btn-ghost text-xs py-1.5 px-3">
                脚垫配置
              </button>
            )}
            {summary.total > 0 && (
              <button onClick={disconnectAll}
                className="text-xs py-1.5 px-3 rounded-lg font-medium"
                style={{ color: '#DC2626', background: 'rgba(220,38,38,0.08)', border: 'none', cursor: 'pointer' }}>
                全部断开
              </button>
            )}
          </div>
        </div>

        {/* 连接进度 */}
        {connectProgress && (
          <div className="mb-3 p-3 rounded-lg" style={{ background: 'var(--zeiss-blue-light)' }}>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin"
                style={{ borderColor: 'var(--zeiss-blue)', borderTopColor: 'transparent' }} />
              <span className="text-xs font-medium" style={{ color: 'var(--zeiss-blue)' }}>
                {connectProgress.detail}
              </span>
            </div>
          </div>
        )}

        {/* 设备列表 */}
        {deviceList.length === 0 && !connectProgress ? (
          <div className="text-center py-6">
            <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>暂无已连接设备</p>
            <button onClick={handleConnectAll} disabled={connecting}
              className="zeiss-btn-primary text-xs py-2 px-6">
              {connecting ? '连接中...' : (
                <>
                  <svg className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  一键连接
                </>
              )}
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            {deviceList.map(device => (
              <div key={device.id}
                className="flex items-center justify-between p-3 rounded-lg"
                style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-light)' }}>
                <div className="flex items-center gap-2.5">
                  {/* 在线状态点 */}
                  <div className={`w-2 h-2 rounded-full ${device.isOnline ? 'animate-pulse' : ''}`}
                    style={{ background: device.isOnline ? '#10B981' : '#EF4444' }} />

                  {/* 设备类型标签 */}
                  <span className="text-xs font-semibold px-2 py-0.5 rounded"
                    style={{
                      background: `${DEVICE_TYPE_COLORS[device.deviceType]}15`,
                      color: DEVICE_TYPE_COLORS[device.deviceType],
                    }}>
                    {DEVICE_TYPE_LABELS[device.deviceType]}
                    {device.footpadIndex ? ` ${device.footpadIndex}` : ''}
                  </span>

                  {/* 详细信息 */}
                  <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                    {device.baudRate} bps
                    {device.macAddress ? ` · ${device.macAddress}` : ''}
                    {device.fps > 0 ? ` · ${device.fps} fps` : ''}
                  </span>
                </div>

                <button onClick={() => disconnectOne(device.id)}
                  className="w-6 h-6 flex items-center justify-center rounded"
                  style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer' }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}

            {/* 重新连接按钮 */}
            <button onClick={handleConnectAll} disabled={connecting}
              className="w-full py-2.5 rounded-lg text-xs font-medium flex items-center justify-center gap-1 transition-colors"
              style={{
                color: 'var(--zeiss-blue)',
                background: 'transparent',
                border: '1px dashed var(--border-medium)',
                cursor: 'pointer',
              }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              重新扫描连接
            </button>
          </div>
        )}

        {/* 状态摘要 */}
        {deviceList.length > 0 && (
          <div className="mt-3 pt-3 grid grid-cols-4 gap-2"
            style={{ borderTop: '1px solid var(--border-light)' }}>
            {[
              { label: '手套', count: summary.glove, color: DEVICE_TYPE_COLORS.glove },
              { label: '坐垫', count: summary.seat, color: DEVICE_TYPE_COLORS.seat },
              { label: '脚垫', count: summary.footpad, color: DEVICE_TYPE_COLORS.footpad },
              { label: '脚垫已配', count: summary.footpadConfigured, color: '#10B981' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-lg font-bold" style={{ color: item.color }}>{item.count}</div>
                <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{item.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <FootpadConfigDialog open={showFootpadConfig} onClose={() => setShowFootpadConfig(false)} />
    </>
  );
}
