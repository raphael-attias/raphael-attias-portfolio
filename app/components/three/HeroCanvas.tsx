'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

// Three.js n'est chargé qu'au montage côté client : la page reste statique
// et le premier rendu HTML ne dépend pas de WebGL.
const GridScene = dynamic(() => import('./GridScene'), { ssr: false });

function webglAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl2') || canvas.getContext('webgl')),
    );
  } catch {
    return false;
  }
}

/**
 * Enveloppe la scène 3D : détection WebGL, montage différé et mise en pause
 * lorsque le hero sort du viewport.
 */
export default function HeroCanvas() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setReady(webglAvailable());
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.01 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute inset-0" aria-hidden="true">
      {/* Dégradé de repli, visible avant le montage de la scène et sans WebGL */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 88%, rgba(0,255,179,0.10), transparent 70%)',
        }}
      />
      {ready ? <GridScene still={Boolean(reduceMotion) || !visible} /> : null}
      {/* Sous 1024 px, le texte recouvre toute la scène : on l'assombrit pour
          préserver le contraste de lecture. */}
      <div className="pointer-events-none absolute inset-0 bg-night/45 lg:bg-transparent" />

      {/* Fondu vers le fond : le bas de la scène se dissout dans la page */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, #0a0e14 0%, rgba(10,14,20,0.16) 20%, rgba(10,14,20,0.3) 46%, rgba(10,14,20,0.9) 74%, #0a0e14 96%)',
        }}
      />
    </div>
  );
}
