'use client';

import { motion, useReducedMotion } from 'framer-motion';
import HeroCanvas from './three/HeroCanvas';
import { site } from '@/lib/data';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.75,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section id="top" className="relative isolate min-h-[90svh] overflow-hidden sm:min-h-[100svh]">
      <HeroCanvas />

      <div className="container-content relative z-10 flex min-h-[90svh] flex-col justify-end pb-10 pt-24 sm:min-h-[100svh] sm:pb-24 sm:pt-32 lg:pb-32">
        <motion.div {...rise(0)} className="flex flex-wrap items-center gap-2">
          <span className="pill">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(0,255,179,0.6)]"
            />
            Basé à {site.location}
          </span>
          <span className="pill">Fondateur de {site.company}</span>
        </motion.div>

        <motion.h1 {...rise(0.08)} className="display display-hero mt-7">
          Raphaël
          <br />
          <span className="text-accent">Attias</span>
        </motion.h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <motion.p
            {...rise(0.16)}
            className="font-mono text-sm uppercase tracking-[0.16em] text-ink sm:text-base"
          >
            Cybersécurité, infrastructure
            <br />
            &amp; agents IA autonomes
            <span
              aria-hidden="true"
              className="ml-1.5 inline-block h-[0.95em] w-[0.5ch] translate-y-[0.12em] bg-accent align-baseline animate-blink"
            />
          </motion.p>

          <motion.div {...rise(0.24)} className="lg:justify-self-end lg:text-right">
            <p className="max-w-md text-[15px] leading-relaxed text-ink-muted">
              Raphaël Attias, alias Rapatt, est consultant indépendant en cybersécurité,
              infrastructure et automatisation par intelligence artificielle, basé à Marseille.
            </p>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-muted">
              Concrètement, je casse des systèmes pour comprendre comment les tenir, et je
              construis l&apos;infrastructure et les agents qui les font tourner. Pentest matériel
              et radio d&apos;un côté, SaaS en production et automatisation par IA de
              l&apos;autre.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 lg:justify-end">
              <a href="#projets" className="btn-accent">
                Voir les projets
                <span aria-hidden="true">↓</span>
              </a>
              <a href="#contact" className="btn-ghost">
                Me contacter
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicateur de défilement (masqué sur les plus petits écrans, où le
          bandeau suivant qui dépasse sert déjà d'indice de défilement). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="label text-[10px]">Scroll</span>
        <span className="relative block h-10 w-px overflow-hidden bg-night-border">
          <span className="absolute inset-x-0 top-0 block h-3 bg-accent animate-scan" />
        </span>
      </div>
    </section>
  );
}
