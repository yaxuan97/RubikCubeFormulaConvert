import { BaseFace } from '@cube/core';

interface Props {
  facing: BaseFace;
  headUp: BaseFace;
  onFaceClick: (face: BaseFace) => void;
}

export default function CubeViewer(_props: Props) {
  return <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555' }}>3D Cube (loading...)</div>;
}
