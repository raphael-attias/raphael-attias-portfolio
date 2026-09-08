import Reveal from './Reveal';
import TiltCard from './TiltCard';
import { links, site, stormServices } from '@/lib/data';

export default function StormSecurity() {
  return (
    <section id="storm-security" className="relative py-16 sm:py-24 lg:py-32">
      {/* Halo d'accent très diffus derrière le bloc */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/4 mx-auto h-[420px] max-w-4xl opacity-[0.09] blur-[130px]"
        style={{ background: 'radial-gradient(circle, #00ffb3 0%, transparent 70%)' }}
      />

      <div className="container-content relative">
        <Reveal>
          <div className="panel overflow-hidden">
            <div className="grid gap-10 border-b border-night-border p-6 sm:p-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end">
              <div>
                <p className="label-accent">Structure de conseil</p>
                <h2 className="display display-xl mt-5">{site.company}</h2>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
                  Cybersécurité &amp; Protection Digitale
                </p>
              </div>
              <div className="lg:text-right">
                <p className="text-[15px] leading-relaxed text-ink-muted">
                  Fondée et dirigée par Raphaël Attias. Accompagnement technique des entreprises
                  et des startups, de la sensibilisation des équipes à l&apos;intervention sur
                  incident.
                </p>
                <a
                  href={links.stormSecurity}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent mt-7"
                >
                  stormsecurity.fr
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only">(nouvel onglet)</span>
                </a>
              </div>
            </div>

            <ul className="grid grid-cols-1 gap-px bg-night-border sm:grid-cols-2 lg:grid-cols-3">
              {stormServices.map((s, i) => (
                <Reveal as="li" key={s.title} delay={(i % 3) * 0.06}>
                  <TiltCard strength={3} className="h-full bg-night-card p-6 sm:p-8">
                    <p className="font-mono text-[11px] tracking-[0.18em] text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-5 font-display text-base font-bold uppercase leading-tight tracking-tight text-white">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.description}</p>
                  </TiltCard>
                </Reveal>
              ))}
              {/* Case de remplissage : conserve la grille alignée sur 3 colonnes */}
              <li aria-hidden="true" className="hidden bg-night-card lg:block" />
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
