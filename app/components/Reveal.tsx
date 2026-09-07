'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ElementType, ReactNode } from 'react';

type RevealTag = 'div' | 'li' | 'article';

const TAGS: Record<RevealTag, ElementType> = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
};

type RevealProps = {
  children: ReactNode;
  /** Décalage en secondes, utile pour créer un effet de stagger manuel. */
  delay?: number;
  className?: string;
  as?: RevealTag;
};

/**
 * Fade-in + léger slide-up au moment où l'élément entre dans le viewport.
 * L'animation est neutralisée si l'utilisateur a activé "réduire les animations".
 */
export default function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Tag = TAGS[as];

  return (
    <Tag
      className={className}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.5, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
