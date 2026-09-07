'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const COLS = 44;
const ROWS = 28;
const GAP = 0.36;
const COUNT = COLS * ROWS;

/**
 * Grille de piliers instanciés déformée par une onde radiale.
 * Un seul InstancedMesh : COUNT objets rendus en un appel de dessin.
 */
function Pillars({ still }: { still: boolean }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const group = useRef<THREE.Group>(null);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const colorLow = useMemo(() => new THREE.Color('#131c27'), []);
  const colorHigh = useMemo(() => new THREE.Color('#00ffb3'), []);
  const scratch = useMemo(() => new THREE.Color(), []);

  // Positions figées, calculées une seule fois
  const cells = useMemo(() => {
    const out: { x: number; z: number; d: number }[] = [];
    for (let ix = 0; ix < COLS; ix++) {
      for (let iz = 0; iz < ROWS; iz++) {
        const x = (ix - (COLS - 1) / 2) * GAP;
        const z = (iz - (ROWS - 1) / 2) * GAP;
        out.push({ x, z, d: Math.sqrt(x * x + z * z) });
      }
    }
    return out;
  }, []);

  useFrame(({ clock, pointer }) => {
    const inst = mesh.current;
    if (!inst) return;

    // `still` fige l'onde sur une image : cas prefers-reduced-motion
    const t = still ? 2.4 : clock.getElapsedTime() * 0.62;

    for (let i = 0; i < COUNT; i++) {
      const { x, z, d } = cells[i];
      const wave =
        Math.sin(d * 1.05 - t * 1.7) * 0.5 +
        Math.sin(x * 0.42 + t * 0.9) * 0.26 +
        Math.cos(z * 0.55 - t * 0.7) * 0.18;

      const h = Math.max(0.05, 0.36 + wave * 0.52);

      dummy.position.set(x, h / 2, z);
      dummy.scale.set(1, h, 1);
      dummy.updateMatrix();
      inst.setMatrixAt(i, dummy.matrix);

      const k = Math.min(1, Math.max(0, (h - 0.34) / 0.5));
      scratch.copy(colorLow).lerp(colorHigh, k * k);
      inst.setColorAt(i, scratch);
    }

    inst.instanceMatrix.needsUpdate = true;
    if (inst.instanceColor) inst.instanceColor.needsUpdate = true;

    // Parallaxe très douce au pointeur
    if (group.current && !still) {
      group.current.rotation.y += (pointer.x * 0.16 - group.current.rotation.y) * 0.04;
      group.current.rotation.x += (-pointer.y * 0.06 - group.current.rotation.x) * 0.04;
    }
  });

  return (
    <group ref={group}>
      <instancedMesh ref={mesh} args={[undefined, undefined, COUNT]} frustumCulled={false}>
        <boxGeometry args={[0.15, 1, 0.15]} />
        <meshStandardMaterial roughness={0.62} metalness={0.15} toneMapped={false} />
      </instancedMesh>
    </group>
  );
}

export default function GridScene({ still = false }: { still?: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      frameloop={still ? 'demand' : 'always'}
      gl={{ antialias: true, powerPreference: 'high-performance', alpha: true }}
      camera={{ position: [0, 3.1, 7.4], fov: 40 }}
      // Le canvas est purement décoratif : il est masqué aux technologies d'assistance
      aria-hidden="true"
      tabIndex={-1}
    >
      <fog attach="fog" args={['#0a0e14', 5.5, 17]} />
      <ambientLight intensity={1.15} />
      <directionalLight position={[4, 8, 5]} intensity={0.85} />
      <directionalLight position={[-6, 3, -4]} intensity={0.35} color="#00ffb3" />
      <Pillars still={still} />
    </Canvas>
  );
}
