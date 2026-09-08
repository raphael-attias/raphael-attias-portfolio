import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';
import { talks } from '@/lib/data';

export default function Talks() {
  return (
    <section id="conferences" className="container-content py-16 sm:py-24 lg:py-32">
      <Reveal>
        <SectionHeading
          index="06"
          label="Scène"
          title="Conférences & prises de parole"
          description="Raphaël Attias intervient en conférence avec des démonstrations offensives en public et anime des événements sur la sécurité et l'IA."
        />
      </Reveal>

      <ol className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {talks.map((talk, i) => (
          <Reveal as="li" key={talk.event} delay={i * 0.08}>
            <TiltCard strength={3} className="panel h-full p-6 sm:p-9">
              <div className="flex items-start justify-between gap-4">
                <p className="label-accent">{String(i + 1).padStart(2, '0')}</p>
                <p className="text-right font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
                  {talk.meta}
                </p>
              </div>

              <h3 className="display display-lg mt-7">{talk.event}</h3>

              <ul className="mt-7 space-y-4">
                {talk.items.map((item) => (
                  <li
                    key={item}
                    className="border-l border-accent/30 pl-5 text-[15px] leading-relaxed text-ink-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {talk.presentedAs ? (
                <p className="mt-6 border-t border-night-border pt-5 text-sm italic leading-relaxed text-ink-muted">
                  {talk.presentedAs}
                </p>
              ) : null}

              {talk.organizerNote ? (
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">
                  {talk.organizerNote}
                </p>
              ) : null}
            </TiltCard>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
