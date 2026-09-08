import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';
import { experiences } from '@/lib/data';

/** Icônes décoratives, une par type de réalisation. */
const ICONS = [
  <path key="shield" d="M12 2.6 4.5 5.8v5.4c0 4.6 3.1 8.3 7.5 9.8 4.4-1.5 7.5-5.2 7.5-9.8V5.8L12 2.6Z" />,
  <path key="flow" d="M4 5h6v5H4V5Zm10 9h6v5h-6v-5ZM7 10v6a2 2 0 0 0 2 2h5" />,
  <path key="alert" d="M12 3.5 21 19H3l9-15.5ZM12 10v4m0 3v.5" />,
];

export default function Experience() {
  return (
    <section id="experience" className="container-content py-16 sm:py-24 lg:py-32">
      <Reveal>
        <SectionHeading
          index="02"
          label="Terrain"
          title="Expérience professionnelle"
          description="Raphaël Attias a occupé plusieurs postes en sécurité des systèmes d'information et infrastructure, chez CMA CGM, Mintera et NeoXam : durcissement d'annuaire, sécurité cloud et réponse à incident."
        />
      </Reveal>

      <ol className="space-y-8">
        {experiences.map((xp, i) => (
          <Reveal as="li" key={`${xp.company}-${xp.role}`} delay={i * 0.08}>
            <TiltCard strength={2} className="panel overflow-hidden">
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent"
              />

              {xp.continuity ? (
                <div className="p-6 sm:p-9">
                  <p className="label-accent">{xp.company}</p>
                  <h3 className="display display-lg mt-3">{xp.role}</h3>
                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-muted">
                    {xp.continuity.summary}
                  </p>
                  <a href={xp.continuity.href} className="btn-ghost mt-6">
                    {xp.continuity.linkLabel}
                    <span aria-hidden="true">↓</span>
                  </a>
                </div>
              ) : (
                <>
                  <div className="flex flex-col gap-6 border-b border-night-border p-6 sm:p-9 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="label-accent">{xp.company}</p>
                        {xp.current ? (
                          <span className="tag border-accent/40 text-accent">En poste</span>
                        ) : null}
                      </div>
                      <h3 className="display display-lg mt-3">{xp.role}</h3>
                    </div>
                    {xp.contract || xp.period || xp.location ? (
                      <p className="shrink-0 font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-ink-faint lg:text-right">
                        {xp.contract}
                        {xp.contract && (xp.period || xp.location) ? <br /> : null}
                        {xp.period}
                        {xp.period && xp.location ? <br /> : null}
                        {xp.location}
                      </p>
                    ) : null}
                  </div>

                  {xp.achievements.length > 0 ? (
                    <ul className="divide-y divide-night-border">
                      {xp.achievements.map((a, index) => (
                        <li
                          key={a.title}
                          className="flex flex-col gap-4 p-6 sm:flex-row sm:gap-6 sm:p-9"
                        >
                          <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-start">
                            <span className="grid h-10 w-10 place-items-center rounded-lg border border-night-border bg-night-raised">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                viewBox="0 0 24 24"
                                className="h-[18px] w-[18px] stroke-accent"
                                fill="none"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                {ICONS[index % ICONS.length]}
                              </svg>
                            </span>
                            <span className="font-mono text-[11px] tracking-[0.16em] text-ink-faint">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-display text-base font-bold uppercase tracking-tight text-white">
                              {a.title}
                            </h4>
                            <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">
                              {a.body}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {xp.skills.length > 0 ? (
                    <ul className="flex flex-wrap gap-2 border-t border-night-border p-6 sm:px-9">
                      {xp.skills.map((s) => (
                        <li key={s} className="tag">
                          {s}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {xp.links ? (
                    <ul className="flex flex-wrap gap-2 border-t border-night-border p-6 sm:px-9">
                      {xp.links.map((l) => (
                        <li key={l.href}>
                          <a
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tag text-accent transition-colors hover:border-accent/50"
                          >
                            {l.label}
                            <span className="sr-only"> (nouvel onglet)</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </>
              )}
            </TiltCard>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
