import Counter from './Counter';

/**
 * Chiffres tous issus du contenu du site : aucun n'est estimé.
 * - 6 500 : objets de l'Active Directory durci chez NeoXam
 * - 250 : tests automatisés de Pharos IAC
 * - 8 : projets présentés dans la section Projets (Davy da Touti est
 *   comptabilisé dans les missions clientes, pas ici, depuis son
 *   déplacement vers la section Missions & clients)
 * - 8 : articles publiés sur Medium
 */
const STATS = [
  { value: 6500, prefix: '', suffix: '+', label: 'Objets Active Directory durcis' },
  { value: 250, prefix: '', suffix: '+', label: 'Tests automatisés sur Pharos IAC' },
  { value: 8, prefix: '', suffix: '', label: 'Projets livrés ou en production' },
  { value: 8, prefix: '', suffix: '', label: 'Publications de recherche' },
];

export default function Stats() {
  return (
    <section aria-label="Chiffres clés" className="container-content py-12 sm:py-16 lg:py-20">
      <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-night-border bg-night-border sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => (
          <li key={s.label} className="bg-night-card px-6 py-8">
            <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
            <p className="mt-3 font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-ink-faint">
              {s.label}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
