import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';
import Counter from './Counter';
import { articles, links, site } from '@/lib/data';

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

/**
 * Schema.org Article, une entrée par publication Medium.
 * TODO: `datePublished` omis pour chaque article : seules les dates
 * jour/mois sont confirmées, l'année de publication ne l'est pas.
 */
const articlesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': articles.map((a) => ({
    '@type': 'Article',
    headline: a.title,
    url: a.href,
    author: { '@type': 'Person', name: site.name },
  })),
};

export default function Writing() {
  return (
    <section id="recherche" className="container-content py-24 sm:py-32">
      <Reveal>
        <SectionHeading
          index="07"
          label="Publications"
          title="Recherche & écriture"
          description="Comptes rendus d'expérimentations offensives, échecs compris. Publiés sur Medium."
        />
      </Reveal>

      <Reveal delay={0.04}>
        <div className="mb-10 flex items-baseline gap-4">
          <Counter value={articles.length} />
          <p className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-ink-faint">
            Articles publiés sur Medium
          </p>
        </div>
      </Reveal>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((a, i) => (
          <Reveal as="li" key={a.href} delay={(i % 4) * 0.05}>
            <TiltCard className="panel group relative h-full">
              <a href={a.href} target="_blank" rel="noopener noreferrer" className="flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-ink-faint">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-night-border text-ink-faint transition-colors duration-300 group-hover:border-accent/50 group-hover:text-accent">
                    <ExternalIcon />
                  </span>
                </div>

                <h3 className="mt-6 font-display text-base font-bold uppercase leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-accent">
                  {a.title}
                  <span className="sr-only"> (nouvel onglet)</span>
                </h3>

                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">{a.date}</p>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">{a.summary}</p>
              </a>
            </TiltCard>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.08}>
        <div className="mt-10">
          <a href={links.medium} target="_blank" rel="noopener noreferrer" className="btn-accent">
            Voir tous les articles sur Medium
            <span aria-hidden="true">↗</span>
            <span className="sr-only"> (nouvel onglet)</span>
          </a>
        </div>
      </Reveal>

      <script
        type="application/ld+json"
        // Données structurées Article, une entrée par publication Medium.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articlesJsonLd) }}
      />
    </section>
  );
}
