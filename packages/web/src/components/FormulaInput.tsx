interface Props {
  formula: string;
  onChange: (value: string) => void;
  error: string;
}

export default function FormulaInput({ formula, onChange, error }: Props) {
  return (
    <section>
      <h3 style={{ margin: '0 0 8px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: '#8899aa' }}>
        Formula
      </h3>
      <textarea
        value={formula}
        onChange={e => onChange(e.target.value)}
        placeholder="e.g. R U R' U'"
        spellCheck={false}
        style={{
          width: '100%',
          minHeight: 60,
          padding: '10px 12px',
          fontSize: 16,
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          background: '#0d1117',
          color: '#e6edf3',
          border: error ? '1px solid #ff4444' : '1px solid #30363d',
          borderRadius: 8,
          resize: 'vertical',
          outline: 'none',
          boxSizing: 'border-box',
        }}
      />
      {error && (
        <div style={{ color: '#ff6b6b', fontSize: 12, marginTop: 4 }}>
          ⚠ {error}
        </div>
      )}
    </section>
  );
}
