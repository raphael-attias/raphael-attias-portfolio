'use client';

import { useEffect, useState } from 'react';
import { navItems } from '@/lib/data';

function Monogram() {
  return (
    <span
      aria-hidden="true"
      className="grid h-8 w-8 place-items-center rounded-md border border-accent/40 bg-accent/10 font-display text-[11px] font-bold tracking-tight text-accent"
    >
      RA
    </span>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Surligne l'entrée de menu correspondant à la section visible
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Menu ouvert : on gèle le défilement de la page. Le conteneur de scroll de
  // ce site est <html> (pas <body>), donc verrouiller body.overflow ne suffit
  // pas — c'est la cause du « double scroll ». On bloque donc <html> et on
  // compense la largeur de la scrollbar pour éviter tout décalage horizontal.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const root = document.documentElement;
    const scrollbarWidth = window.innerWidth - root.clientWidth;
    const prevOverflow = root.style.overflow;
    const prevPaddingRight = root.style.paddingRight;
    root.style.overflow = 'hidden';
    if (scrollbarWidth > 0) root.style.paddingRight = `${scrollbarWidth}px`;
    window.addEventListener('keydown', onKey);
    return () => {
      root.style.overflow = prevOverflow;
      root.style.paddingRight = prevPaddingRight;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
        <nav
          aria-label="Navigation principale"
          className={`mx-auto flex max-w-content items-center justify-between gap-4 rounded-full border px-3 py-2 transition-all duration-500 sm:px-4 ${
            scrolled
              ? 'border-night-border bg-night-deep/80 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          <a href="#top" className="flex items-center gap-3 pl-1">
            <Monogram />
            <span className="hidden whitespace-nowrap font-display text-[13px] font-bold uppercase tracking-[0.14em] text-white sm:inline">
              Raphaël Attias
            </span>
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navItems
              .filter((item) => item.primary)
              .map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={active === item.href ? 'true' : undefined}
                    className={`whitespace-nowrap rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors ${
                      active === item.href
                        ? 'bg-accent/10 text-accent'
                        : 'text-ink-muted hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden whitespace-nowrap rounded-full border border-accent/50 bg-accent/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent transition-colors hover:bg-accent/20 sm:inline-flex"
            >
              Me contacter
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              className="grid h-11 w-11 place-items-center rounded-full border border-night-border bg-night-raised/70 text-ink transition-colors hover:border-night-hover hover:text-accent"
            >
              <span className="sr-only">{open ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
              <span aria-hidden="true" className="flex flex-col gap-[5px]">
                <span
                  className={`block h-px w-4 bg-current transition-transform duration-300 ${
                    open ? 'translate-y-[3px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`block h-px w-4 bg-current transition-transform duration-300 ${
                    open ? '-translate-y-[3px] -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Panneau plein écran : reprend la totalité des sections.
          overflow-y-auto + min-h-full sur la liste : centré quand tout tient,
          défilable (sans clipper d'entrées) sur les écrans courts ou en paysage.
          overscroll-contain empêche le scroll de « fuir » vers la page. */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-night-deep/95 backdrop-blur-xl"
      >
        <ul className="container-content flex min-h-full flex-col justify-center gap-1 pb-16 pt-24">
          {navItems.map((item, i) => (
            <li key={item.href} className="border-b border-night-border/60">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-4 font-display text-lg font-bold uppercase tracking-tight text-white transition-colors hover:text-accent sm:text-xl"
              >
                <span className="font-mono text-[11px] tracking-normal text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
