import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';
import { skillGroups } from '@/lib/data';

export default function Skills() {
  return (
    <section id="competences" className="container-content py-24 sm:py-32">
      <Reveal>
        <SectionHeading index="08" label="Stack" title="Compétences" />
      </Reveal>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {skillGroups.map((group, i) => (
          <Reveal as="li" key={group.domain} delay={(i % 3) * 0.06}>
            <TiltCard strength={4} className="panel h-full p-6">
              <p className="font-mono text-[11px] tracking-[0.18em] text-ink-faint">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-5 font-display text-sm font-bold uppercase leading-tight tracking-tight text-accent">
                {group.domain}
              </h3>
              <ul className="mt-5 space-y-2.5 border-t border-night-border pt-5">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-snug text-ink-muted">
                    <span aria-hidden="true" className="text-accent/40">
                      ›
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
