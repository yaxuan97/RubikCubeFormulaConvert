import { useState, useCallback } from 'react';
import { BaseFace, convert } from '@cube/core';
import CubeViewer from './components/CubeViewer';
import FormulaInput from './components/FormulaInput';
import ViewSelector from './components/ViewSelector';
import ResultDisplay from './components/ResultDisplay';
import styles from './App.module.css';

export default function App() {
  const [formula, setFormula] = useState("R U R' U'");
  const [facing, setFacing] = useState<BaseFace>('F');
  const [headUp, setHeadUp] = useState<BaseFace>('U');
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
          />
        </div>
        <div className={styles.controls}>
          <ViewSelector
            facing={facing}
            headUp={headUp}
            onFacingChange={handleFacingChange}
            onHeadUpChange={handleHeadUpChange}
          />
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
