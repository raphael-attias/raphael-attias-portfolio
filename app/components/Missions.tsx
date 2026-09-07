import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';
import Counter from './Counter';
import { missions } from '@/lib/data';

function ChevronIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 stroke-current transition-transform duration-300 group-open:rotate-180"
      fill="none"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

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

export default function Missions() {
  return (
    <section id="missions" className="container-content py-24 sm:py-32">
      <Reveal>
        <SectionHeading
          index="04"
          label="Missions clients"
          title="Missions & clients"
          description="Raphaël Attias mène des missions de cybersécurité et d'infrastructure pour des clients via Stormsecurity, de l'automatisation marketing à la sécurisation de parcs informatiques."
        />
      </Reveal>

      <ul className="space-y-6">
        {missions.map((m, i) => (
          <Reveal as="li" key={m.title} delay={i * 0.07}>
            <TiltCard strength={2} className="panel overflow-hidden">
              <div className="flex flex-col gap-4 border-b border-night-border p-6 sm:flex-row sm:items-start sm:justify-between sm:p-9">
                <div>
                  <p className="label-accent">{m.client}</p>
                  <h3 className="display display-lg mt-3">{m.title}</h3>
                  {m.period ? (
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
                      {m.period}
                    </p>
                  ) : null}
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  {m.href ? (
                    <a
                      href={m.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid h-8 w-8 place-items-center rounded-full border border-night-border text-ink-faint transition-colors duration-300 hover:border-accent/50 hover:text-accent"
                    >
                      <ExternalIcon />
                      <span className="sr-only"> Voir le site (nouvel onglet)</span>
                    </a>
                  ) : null}
                  <span className="font-mono text-[11px] tracking-[0.18em] text-ink-faint">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-9">
                <p className="text-[15px] leading-relaxed text-ink-muted">{m.context}</p>

                {m.sections.map((sec, si) => (
                  <details
                    key={sec.heading}
                    open={si === 0}
                    className="group border-t border-night-border first:mt-6"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
                      <span className="font-display text-sm font-bold uppercase tracking-tight text-white">
                        {sec.heading}
                      </span>
                      <ChevronIcon />
                    </summary>
                    <ul className="space-y-3 pb-5">
                      {sec.items.map((item) => (
                        <li
                          key={item}
                          className="border-l border-accent/30 pl-4 text-sm leading-relaxed text-ink-muted"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}

                {m.stack ? (
                  <div className="mt-6 border-t border-night-border pt-6">
                    <p className="label">Stack technique</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {m.stack.map((s) => (
                        <li key={s} className="tag">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {m.stats ? (
                  <div className="mt-6 grid gap-6 border-t border-night-border pt-6 sm:grid-cols-3 lg:grid-cols-5">
                    {m.stats.map((stat) => (
                      <div key={stat.label}>
                        <Counter
                          value={stat.value}
                          suffix={stat.suffix}
                          className="font-display text-2xl font-bold tabular-nums text-accent"
                        />
                        <p className="mt-1.5 font-mono text-[11px] uppercase leading-relaxed tracking-[0.12em] text-ink-faint">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}

                {m.deliverables ? (
                  <div className="mt-6 border-t border-night-border pt-6">
                    <p className="label">Livrables</p>
                    <ul className="mt-3 space-y-1.5">
                      {m.deliverables.map((d) => (
                        <li key={d} className="flex gap-2.5 text-sm text-ink-muted">
                          <span aria-hidden="true" className="text-accent/40">
                            ›
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {m.skillsUsed ? (
                  <div className="mt-6 border-t border-night-border pt-6">
                    <p className="label">Compétences mobilisées</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {m.skillsUsed.map((s) => (
                        <li key={s} className="tag">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {m.note ? (
                  <p className="mt-6 border-t border-night-border pt-6 text-sm leading-relaxed text-ink-muted">
                    {m.note}
                  </p>
                ) : null}

                <ul className="mt-6 flex flex-wrap gap-2 border-t border-night-border pt-6">
                  {m.tags.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
