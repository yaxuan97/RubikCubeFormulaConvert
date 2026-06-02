import { BaseFace } from '@cube/core';

const FACES: BaseFace[] = ['R', 'L', 'U', 'D', 'F', 'B'];

const FACE_COLORS: Record<BaseFace, string> = {
  R: '#ff4444', L: '#ff8800',
  U: '#ffffff', D: '#ffdd00',
  F: '#00aa00', B: '#0066ff',
};

interface Props {
  facing: BaseFace;
  headUp: BaseFace;
  onFacingChange: (f: BaseFace) => void;
  onHeadUpChange: (h: BaseFace) => void;
}

export default function ViewSelector({ facing, headUp, onFacingChange, onHeadUpChange }: Props) {
  const isParallelToFacing = (h: BaseFace) => {
    const opposites: Record<string, string> = { R: 'L', L: 'R', U: 'D', D: 'U', F: 'B', B: 'F' };
    return h === facing || h === opposites[facing];
  };

  return (
    <section>
      <h3 style={{ margin: '0 0 12px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: '#8899aa' }}>
        View
      </h3>

      <div style={{ marginBottom: 16 }}>
        <label style={{ display: 'block', fontSize: '13px', marginBottom: 6, color: '#aabbcc' }}>
          Facing
        </label>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {FACES.map(f => (
            <button
              key={f}
              onClick={() => onFacingChange(f)}
              style={{
                width: 36, height: 36,
                borderRadius: 6,
                border: facing === f ? '2px solid #fff' : '1px solid #334',
                background: FACE_COLORS[f],
                color: ['U','D'].includes(f) ? '#333' : '#fff',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: 14,
                opacity: facing === f ? 1 : 0.5,
                transition: 'all 0.15s',
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ display: 'block', fontSize: '13px', marginBottom: 6, color: '#aabbcc' }}>
          Head Up
        </label>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {FACES.map(h => {
            const disabled = isParallelToFacing(h);
            return (
              <button
                key={h}
                onClick={() => !disabled && onHeadUpChange(h)}
                disabled={disabled}
                style={{
                  width: 36, height: 36,
                  borderRadius: 6,
                  border: headUp === h ? '2px solid #fff' : '1px solid #334',
                  background: FACE_COLORS[h],
                  color: ['U','D'].includes(h) ? '#333' : '#fff',
                  fontWeight: 'bold',
                  cursor: disabled ? 'not-allowed' : 'pointer',
                  fontSize: 14,
                  opacity: headUp === h ? 1 : disabled ? 0.15 : 0.4,
                  transition: 'all 0.15s',
                }}
              >
                {h}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '13px', marginBottom: 6, color: '#aabbcc' }}>
          Head Tilt Shortcuts
        </label>
        <div style={{ display: 'flex', gap: 6 }}>
          <button onClick={() => onHeadUpChange('L')} style={tiltBtnStyle}>← Tilt Left</button>
          <button onClick={() => onHeadUpChange('R')} style={tiltBtnStyle}>→ Tilt Right</button>
          <button onClick={() => onHeadUpChange('U')} style={tiltBtnStyle}>↑ Upright</button>
          <button onClick={() => onHeadUpChange('D')} style={tiltBtnStyle}>↓ Inverted</button>
        </div>
      </div>
    </section>
  );
}

const tiltBtnStyle: React.CSSProperties = {
  padding: '6px 10px',
  fontSize: 12,
  borderRadius: 6,
  border: '1px solid #445',
  background: '#1a1a3e',
  color: '#aabbcc',
  cursor: 'pointer',
};
