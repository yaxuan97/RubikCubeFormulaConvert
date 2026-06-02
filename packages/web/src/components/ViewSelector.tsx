import { BaseFace } from '@cube/core';

interface Props {
  facing: BaseFace;
  headUp: BaseFace;
  onFacingChange: (f: BaseFace) => void;
  onHeadUpChange: (h: BaseFace) => void;
}

export default function ViewSelector(_props: Props) {
  return <div style={{ color: '#555' }}>View Selector (loading...)</div>;
}
