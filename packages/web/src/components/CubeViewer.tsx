import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { BaseFace } from '@cube/core';

interface Props {
  facing: BaseFace;
  headUp: BaseFace;
  onFaceClick: (face: BaseFace) => void;
}

const FACE_COLORS: Record<string, number> = {
  R: 0xff3333,
  L: 0xff8800,
  U: 0xffffff,
  D: 0xffdd00,
  F: 0x00aa00,
  B: 0x0066ff,
};

const FACE_DIRECTION: Record<string, [number, number, number]> = {
  R: [ 1, 0, 0], L: [-1, 0, 0],
  U: [ 0, 1, 0], D: [ 0,-1, 0],
  F: [ 0, 0, 1], B: [ 0, 0,-1],
};

export default function CubeViewer({ onFaceClick }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e);

    // Camera
    const camera = new THREE.PerspectiveCamera(40, w / h, 0.5, 50);
    camera.position.set(5, 4, 7);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dl = new THREE.DirectionalLight(0xffffff, 1.0);
    dl.position.set(8, 12, 6);
    scene.add(dl);

    // Grid
    const grid = new THREE.GridHelper(6, 6, 0x333344, 0x222233);
    scene.add(grid);

    // Cubies
    const cubeGroup = new THREE.Group();
    scene.add(cubeGroup);

    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const geo = new THREE.BoxGeometry(0.9, 0.9, 0.9);
          const mats = [
            new THREE.MeshStandardMaterial({ color: x > 0 ? FACE_COLORS.R : 0x111111, roughness: 0.4 }),
            new THREE.MeshStandardMaterial({ color: x < 0 ? FACE_COLORS.L : 0x111111, roughness: 0.4 }),
            new THREE.MeshStandardMaterial({ color: y > 0 ? FACE_COLORS.U : 0x111111, roughness: 0.4 }),
            new THREE.MeshStandardMaterial({ color: y < 0 ? FACE_COLORS.D : 0x111111, roughness: 0.4 }),
            new THREE.MeshStandardMaterial({ color: z > 0 ? FACE_COLORS.F : 0x111111, roughness: 0.4 }),
            new THREE.MeshStandardMaterial({ color: z < 0 ? FACE_COLORS.B : 0x111111, roughness: 0.4 }),
          ];
          const mesh = new THREE.Mesh(geo, mats);
          mesh.position.set(x, y, z);
          cubeGroup.add(mesh);
        }
      }
    }

    // Face labels (sprites)
    Object.entries(FACE_DIRECTION).forEach(([face, dir]) => {
      const sprite = makeTextSprite(face, FACE_COLORS[face]);
      sprite.position.set(dir[0] * 2.2, dir[1] * 2.2, dir[2] * 2.2);
      scene.add(sprite);
    });

    // Raycaster for face click
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function onMouseClick(event: MouseEvent) {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(cubeGroup.children);

      if (intersects.length > 0) {
        const normal = intersects[0].face!.normal.clone();
        // Transform normal by cubie's world matrix
        normal.transformDirection(intersects[0].object.matrixWorld);

        // Find closest face direction
        let bestFace: BaseFace = 'F';
        let bestDot = -Infinity;
        for (const [face, dir] of Object.entries(FACE_DIRECTION)) {
          const d = normal.x * dir[0] + normal.y * dir[1] + normal.z * dir[2];
          if (d > bestDot) {
            bestDot = d;
            bestFace = face as BaseFace;
          }
        }
        onFaceClick(bestFace);
      }
    }

    renderer.domElement.addEventListener('click', onMouseClick);

    // Resize
    function onResize() {
      const c = container!;
      const w2 = c.clientWidth;
      const h2 = c.clientHeight;
      if (w2 === 0 || h2 === 0) return;
      camera.aspect = w2 / h2;
      camera.updateProjectionMatrix();
      renderer.setSize(w2, h2);
    }
    window.addEventListener('resize', onResize);

    // Render loop
    let animId: number;
    function animate() {
      animId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      renderer.domElement.removeEventListener('click', onMouseClick);
      window.removeEventListener('resize', onResize);
      controls.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}

function makeTextSprite(text: string, color: number): THREE.Sprite {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#' + color.toString(16).padStart(6, '0');
  ctx.font = 'bold 36px system-ui';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 32, 32);

  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({ map: texture, depthTest: false });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(1.0, 1.0, 1);
  return sprite;
}
