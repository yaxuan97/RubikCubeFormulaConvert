interface Props {
  formula: string;
  onChange: (value: string) => void;
  error: string;
}

export default function FormulaInput(_props: Props) {
  return <div style={{ color: '#555' }}>Formula Input (loading...)</div>;
}
