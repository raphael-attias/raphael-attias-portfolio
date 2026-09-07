import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { homelabSpecs } from '@/lib/data';

export default function Homelab() {
  return (
    <section id="homelab" className="container-content py-24 sm:py-32">
      <Reveal>
        <SectionHeading
          index="05"
          label="Infrastructure"
          title="Homelab"
          description="Un laboratoire qui sert aussi de production : c'est là que les agents IA tournent et que les scénarios offensifs sont rejoués avant d'être documentés."
        />
      </Reveal>

      <Reveal delay={0.06}>
        {/* TODO: chiffres précis (nombre de nœuds, RAM, stockage, débit) non fournis.
            Les valeurs restent qualitatives tant qu'elles ne sont pas confirmées. */}
        <div className="panel overflow-hidden">
          {/* Barre de fenêtre de terminal, décorative */}
          <div
            aria-hidden="true"
            className="flex items-center gap-3 border-b border-night-border bg-night-deep/70 px-5 py-3"
          >
            <span className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-night-hover" />
              <span className="h-2.5 w-2.5 rounded-full bg-night-hover" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
            </span>
            <span className="font-mono text-[11px] tracking-[0.14em] text-ink-faint">
              raphael@homelab:~$ infra --describe
            </span>
          </div>

          <dl className="divide-y divide-night-border font-mono text-[13px] sm:text-sm">
            {homelabSpecs.map((spec) => (
              <div
                key={spec.label}
                className="flex flex-col gap-1.5 px-5 py-5 sm:flex-row sm:items-baseline sm:gap-8 sm:px-8"
              >
                <dt className="flex shrink-0 items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-ink-faint sm:w-64">
                  <span aria-hidden="true" className="text-accent">
                    ›
                  </span>
                  {spec.label}
                </dt>
                <dd className="text-ink">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
