import { useState, useCallback } from 'react';
import { BaseFace, convert } from '@cube/core';
import CubeViewer, { COLOR_SCHEMES } from './components/CubeViewer';
import FormulaInput from './components/FormulaInput';
import ViewSelector from './components/ViewSelector';
import ResultDisplay from './components/ResultDisplay';
import styles from './App.module.css';

export default function App() {
  const [formula, setFormula] = useState("R U R' U'");
  const [facing, setFacing] = useState<BaseFace>('F');
  const [headUp, setHeadUp] = useState<BaseFace>('U');
  const [colorScheme, setColorScheme] = useState('WCA');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleConvert = useCallback((f: string) => {
    try {
      const r = convert(f, { facing, headUp });
      setResult(r.output);
      setError('');
    } catch (e: any) {
      setError(e.message);
      setResult('');
    }
  }, [facing, headUp]);

  const handleFormulaChange = useCallback((f: string) => {
    setFormula(f);
    handleConvert(f);
  }, [handleConvert]);

  const handleFacingChange = useCallback((f: BaseFace) => {
    setFacing(f);
    // Need to re-convert with new facing
    try {
      const r = convert(formula, { facing: f, headUp });
      setResult(r.output);
      setError('');
    } catch (e: any) {
      setError(e.message);
      setResult('');
    }
  }, [formula, headUp]);

  const handleHeadUpChange = useCallback((h: BaseFace) => {
    setHeadUp(h);
    try {
      const r = convert(formula, { facing, headUp: h });
      setResult(r.output);
      setError('');
    } catch (e: any) {
      setError(e.message);
      setResult('');
    }
  }, [formula, facing]);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Cube Converter</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.viewer}>
          <CubeViewer
            facing={facing}
            headUp={headUp}
            onFaceClick={handleFacingChange}
            colors={COLOR_SCHEMES[colorScheme]}
          />
        </div>
        <div className={styles.controls}>
          <ViewSelector
            facing={facing}
            headUp={headUp}
            onFacingChange={handleFacingChange}
            onHeadUpChange={handleHeadUpChange}
          />

          <section>
            <h3 style={{ margin: '0 0 8px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: '#8899aa' }}>
              Color Scheme
            </h3>
            <select
              value={colorScheme}
              onChange={e => setColorScheme(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                fontSize: 14,
                fontFamily: 'inherit',
                background: '#0d1117',
                color: '#e6edf3',
                border: '1px solid #30363d',
                borderRadius: 8,
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              {Object.keys(COLOR_SCHEMES).map(name => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
          </section>

          <FormulaInput
            formula={formula}
            onChange={handleFormulaChange}
            error={error}
          />
          <ResultDisplay result={result} error={error} />
        </div>
      </main>
    </div>
  );
}
