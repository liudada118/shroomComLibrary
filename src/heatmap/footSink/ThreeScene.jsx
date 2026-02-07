import { Scene256x64 } from '../threeSink/Scene256x64.jsx';

export default function FootSinkScene({ className, style, ...props }) {
  return (
    <div
      className={className}
      style={{
        width: '100%',
        height: '100%',
        ...style
      }}
    >
      <Scene256x64 {...props} />
    </div>
  );
}
