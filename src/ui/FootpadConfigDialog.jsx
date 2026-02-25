/**
 * FootpadConfigDialog - 脚垫 MAC 地址配置弹窗
 *
 * 功能：
 * - 显示所有已连接脚垫的 MAC 地址
 * - 用户为每个 MAC 地址分配 1/2/3/4 顺序
 * - 配置保存到 localStorage，下次自动识别
 */

import React, { useState, useEffect } from 'react';
import { useFootpadConfig } from '../hooks/useDeviceManager';

const FOOTPAD_LABELS = {
  1: '左前脚垫',
  2: '右前脚垫',
  3: '左后脚垫',
  4: '右后脚垫',
};

export default function FootpadConfigDialog({ open, onClose }) {
  const { config, macList, updateConfig, refreshMacs } = useFootpadConfig();
  const [localConfig, setLocalConfig] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (open) {
      // 初始化本地配置
      const initial = {};
      macList.forEach(item => {
        if (item.macAddress && item.macAddress !== '未知') {
          initial[item.macAddress] = config[item.macAddress] || null;
        }
      });
      setLocalConfig(initial);
    }
  }, [open, macList, config]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await refreshMacs();
    setRefreshing(false);
  };

  const handleAssign = (mac, index) => {
    setLocalConfig(prev => {
      const next = { ...prev };
      // 如果其他 MAC 已经占用这个序号，先清除
      for (const key of Object.keys(next)) {
        if (next[key] === index) {
          next[key] = null;
        }
      }
      next[mac] = index;
      return next;
    });
  };

  const handleSave = () => {
    // 过滤掉 null 值
    const cleaned = {};
    for (const [mac, idx] of Object.entries(localConfig)) {
      if (idx) cleaned[mac] = idx;
    }
    updateConfig(cleaned);
    onClose();
  };

  const assignedIndices = new Set(Object.values(localConfig).filter(Boolean));
  const allAssigned = assignedIndices.size === Math.min(4, macList.filter(m => m.macAddress !== '未知').length);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center zeiss-overlay animate-fadeIn">
      <div className="zeiss-dialog p-6 w-[520px] animate-scaleIn">
        {/* 标题 */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
            脚垫配置
          </h3>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-lg"
            style={{ color: 'var(--text-muted)' }}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-sm mb-4" style={{ color: 'var(--text-tertiary)' }}>
          为每个脚垫的 MAC 地址分配位置编号（1-4），配置后自动记忆。
        </p>

        {/* 刷新按钮 */}
        <button onClick={handleRefresh} disabled={refreshing}
          className="zeiss-btn-secondary text-xs py-2 px-4 mb-4 flex items-center gap-2">
          <svg className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {refreshing ? '查询中...' : '刷新 MAC 地址'}
        </button>

        {/* 脚垫列表 */}
        <div className="space-y-3 mb-6">
          {macList.length === 0 ? (
            <div className="text-center py-8" style={{ color: 'var(--text-muted)' }}>
              <p className="text-sm">暂无已连接的脚垫设备</p>
              <p className="text-xs mt-1">请先连接脚垫设备</p>
            </div>
          ) : (
            macList.map((item) => (
              <div key={item.id} className="zeiss-card p-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    {item.macAddress === '未知' ? (
                      <span style={{ color: 'var(--text-muted)' }}>MAC 地址未获取</span>
                    ) : (
                      <span className="font-mono">{item.macAddress}</span>
                    )}
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                    设备 ID: {item.id}
                  </div>
                </div>

                {item.macAddress !== '未知' && (
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map(idx => {
                      const isSelected = localConfig[item.macAddress] === idx;
                      const isOccupied = !isSelected && assignedIndices.has(idx);
                      return (
                        <button key={idx}
                          onClick={() => handleAssign(item.macAddress, idx)}
                          disabled={isOccupied}
                          className="w-10 h-10 rounded-lg text-sm font-bold transition-all"
                          style={{
                            background: isSelected ? 'var(--zeiss-blue)' : isOccupied ? 'var(--bg-tertiary)' : 'var(--bg-secondary)',
                            color: isSelected ? '#fff' : isOccupied ? 'var(--text-muted)' : 'var(--text-primary)',
                            border: isSelected ? 'none' : '1px solid var(--border-light)',
                            cursor: isOccupied ? 'not-allowed' : 'pointer',
                            opacity: isOccupied ? 0.5 : 1,
                          }}>
                          {idx}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* 位置说明 */}
        <div className="grid grid-cols-2 gap-2 mb-5 px-2">
          {[1, 2, 3, 4].map(idx => (
            <div key={idx} className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-tertiary)' }}>
              <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold"
                style={{ background: 'var(--zeiss-blue-light)', color: 'var(--zeiss-blue)' }}>
                {idx}
              </span>
              {FOOTPAD_LABELS[idx]}
            </div>
          ))}
        </div>

        {/* 操作按钮 */}
        <div className="flex gap-3">
          <button onClick={onClose} className="zeiss-btn-secondary flex-1 py-3 text-sm">
            取消
          </button>
          <button onClick={handleSave} className="zeiss-btn-primary flex-1 py-3 text-sm"
            disabled={macList.filter(m => m.macAddress !== '未知').length > 0 && !allAssigned}>
            保存配置
          </button>
        </div>
      </div>
    </div>
  );
}
