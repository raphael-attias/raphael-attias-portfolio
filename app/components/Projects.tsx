import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';
import { projects } from '@/lib/data';

function ExternalIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 stroke-current"
      fill="none"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 stroke-current"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4.5" y="10.5" width="15" height="9.5" rx="1.5" />
      <path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7" />
    </svg>
  );
}

const SPAN_CLASS: Record<2 | 3 | 6, string> = {
  2: 'lg:col-span-2',
  3: 'lg:col-span-3',
  6: 'lg:col-span-6',
};

export default function Projects() {
  return (
    <section id="projets" className="container-content py-16 sm:py-24 lg:py-32">
      <Reveal>
        <SectionHeading
          index="03"
          label="Réalisations"
          title="Projets phares"
          description="Raphaël Attias conçoit des agents autonomes, des produits SaaS et de l'outillage de sécurité qui tournent réellement, en production ou en homelab."
        />
      </Reveal>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {projects.map((p, i) => (
          <Reveal
            as="li"
            key={p.title}
            delay={(i % 3) * 0.06}
            className={`${SPAN_CLASS[p.span]} ${p.featured ? 'sm:col-span-2' : ''}`}
          >
            <TiltCard className="panel group h-full">
              <div
                className={`flex h-full flex-col p-6 ${p.featured ? 'sm:p-8 lg:min-h-[26rem]' : ''}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-ink-faint">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {p.href ? (
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-night-border text-ink-faint transition-colors duration-300 group-hover:border-accent/50 group-hover:text-accent">
                      <ExternalIcon />
                    </span>
                  ) : (
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-night-border text-ink-faint">
                      <LockIcon />
                    </span>
                  )}
                </div>

                <h3
                  className={`display mt-8 ${p.featured ? 'display-lg' : 'text-xl leading-tight'}`}
                >
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer">
                      {/* Étend la zone cliquable à toute la carte */}
                      <span aria-hidden="true" className="absolute inset-0" />
                      {p.title}
                      <span className="sr-only"> (nouvel onglet)</span>
                    </a>
                  ) : (
                    p.title
                  )}
                </h3>

                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                  {p.tagline}
                </p>

                <p
                  className={`mt-5 flex-1 leading-relaxed text-ink-muted ${
                    p.featured ? 'text-[15px]' : 'text-sm'
                  }`}
                >
                  {p.description}
                </p>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>

                {p.privateLabel || p.relatedLink ? (
                  <div className="relative z-10 mt-5 border-t border-night-border pt-4">
                    {p.privateLabel ? (
                      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">
                        {p.privateLabel}
                      </p>
                    ) : null}
                    {p.relatedLink ? (
                      <a
                        href={p.relatedLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-accent transition-opacity hover:opacity-80 ${
                          p.privateLabel ? 'mt-2' : ''
                        }`}
                      >
                        {p.relatedLink.label}
                        <span aria-hidden="true">↗</span>
                        <span className="sr-only"> (nouvel onglet)</span>
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
