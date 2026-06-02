import { useState } from 'react';

interface Props {
  result: string;
  error: string;
}

export default function ResultDisplay({ result, error }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section>
      <h3 style={{ margin: '0 0 8px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: '#8899aa' }}>
        Result
      </h3>
      <div style={{
        padding: '10px 12px',
        minHeight: 40,
        fontSize: 18,
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        background: '#0d1117',
        color: result ? '#ffd700' : '#555',
        border: '1px solid #30363d',
        borderRadius: 8,
        wordBreak: 'break-all',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span>{result || (error ? '—' : 'Waiting for input...')}</span>
        {result && (
          <button
            onClick={handleCopy}
            style={{
              padding: '4px 12px',
              fontSize: 12,
              borderRadius: 6,
              border: '1px solid #445',
              background: copied ? '#1a6b3a' : '#1a1a3e',
              color: '#aabbcc',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              marginLeft: 12,
            }}
          >
            {copied ? '✓ Copied' : 'Copy'}
          </button>
        )}
      </div>
    </section>
  );
}
