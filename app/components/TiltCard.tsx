'use client';

import { useRef, type ElementType, type PointerEvent, type ReactNode } from 'react';
import { useReducedMotion } from 'framer-motion';

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Amplitude de la rotation, en degrés. */
  strength?: number;
};

/**
 * Inclinaison 3D légère au survol + halo radial suivant le pointeur.
 * Désactivé si l'utilisateur a demandé à réduire les animations, et inopérant
 * au toucher (aucun événement de survol).
 */
export default function TiltCard({
  children,
  className = '',
  as: Tag = 'div',
  strength = 5,
}: TiltCardProps) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const onMove = (e: PointerEvent<HTMLElement>) => {
    const node = ref.current;
    if (!node || e.pointerType !== 'mouse') return;
    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    node.style.setProperty('--mx', `${px * 100}%`);
    node.style.setProperty('--my', `${py * 100}%`);

    if (reduceMotion) return;
    node.style.transform = `perspective(900px) rotateX(${(0.5 - py) * strength}deg) rotateY(${
      (px - 0.5) * strength
    }deg) translateY(-3px)`;
  };

  const onLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = '';
    node.style.removeProperty('--mx');
    node.style.removeProperty('--my');
  };

  return (
    <Tag
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`glow-card transition-[transform,border-color] duration-300 will-change-transform ${className}`}
    >
      {children}
    </Tag>
  );
}
