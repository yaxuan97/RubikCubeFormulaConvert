interface Props {
  result: string;
  error: string;
}

export default function ResultDisplay(_props: Props) {
  return <div style={{ color: '#555' }}>Result Display (loading...)</div>;
}
