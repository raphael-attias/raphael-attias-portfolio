'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

export type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  /** Classes Tailwind du chiffre affiché ; par défaut la taille du bandeau de chiffres clés. */
  className?: string;
};

/**
 * Chiffre qui compte de 0 à `value` quand il entre dans le viewport.
 * Composant partagé par le bandeau de chiffres clés (Stats) et les
 * mini-statistiques des missions clients (Missions) : un seul système de
 * compteur animé sur tout le site.
 *
 * Le rendu initial (serveur, puis premier rendu client avant hydratation)
 * affiche directement `value` : les robots qui n'exécutent pas de
 * JavaScript (GPTBot, CCBot...) indexent le vrai chiffre plutôt qu'un zéro
 * transitoire. L'animation de comptage ne démarre qu'après le montage,
 * quand l'élément entre dans le viewport.
 */
export default function Counter({
  value,
  prefix = '',
  suffix = '',
  className = 'display display-lg tabular-nums text-accent',
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    if (!inView) return;

    const duration = 1400;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      // Sortie douce (ease-out cubic)
      setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString('fr-FR')}
      {suffix}
    </span>
  );
}
