import { education } from '@/lib/data';

/**
 * Section volontairement sobre : pas de grand titre display, pas de bento
 * grid, pas d'effet tilt, pas d'animation d'entrée. Cohérente avec le
 * design system (mêmes polices, mêmes couleurs) mais en retrait visuel
 * assumé, à la demande explicite du brief de contenu.
 */
export default function Formation() {
  return (
    <section id="formation" className="container-content py-12 sm:py-16 lg:py-20">
      <div className="border-t border-night-border pt-10">
        <p className="label">Formation</p>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-muted">
          {education.paragraph}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {education.milestones.map((m) => (
            <li key={m.label} className="tag">
              {m.label} · {m.meta}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
