/**
 * ViewToggle — 2D/3D 视图切换按钮
 * 浮动在可视化区域左上角
 */
import { memo } from 'react';

function ViewToggle({ viewMode, onToggle }) {
  return (
    <div className="flex items-center p-0.5 rounded-lg"
      style={{ 
        background: 'rgba(255,255,255,0.9)', 
        backdropFilter: 'blur(8px)', 
        border: '1px solid var(--border-light)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
      }}>
      <button
        onClick={() => onToggle('3d')}
        className="px-3 py-1.5 text-[11px] font-semibold rounded-md transition-all"
        style={viewMode === '3d' ? {
          background: 'var(--zeiss-blue)',
          color: '#fff',
          boxShadow: '0 1px 4px rgba(0,102,204,0.3)'
        } : {
          background: 'transparent',
          color: 'var(--text-muted)'
        }}
      >
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          3D
        </span>
      </button>
      <button
        onClick={() => onToggle('2d')}
        className="px-3 py-1.5 text-[11px] font-semibold rounded-md transition-all"
        style={viewMode === '2d' ? {
          background: 'var(--zeiss-blue)',
          color: '#fff',
          boxShadow: '0 1px 4px rgba(0,102,204,0.3)'
        } : {
          background: 'transparent',
          color: 'var(--text-muted)'
        }}
      >
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 9h18M9 3v18" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          2D
        </span>
      </button>
    </div>
  );
}

export default memo(ViewToggle);
