import { links, site } from '@/lib/data';

const FOOTER_LINKS = [
  { label: 'GitHub', href: links.github },
  { label: 'LinkedIn', href: links.linkedin },
  { label: 'Medium', href: links.medium },
  { label: 'Stormsecurity', href: links.stormSecurity },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-night-border pt-16">
      <div className="container-content">
        <div className="flex flex-col gap-8 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="label-accent">Disponible pour missions</p>
            <p className="display display-lg mt-4">
              Marseille
              <span className="text-ink-faint"> · </span>
              France
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {FOOTER_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted transition-colors hover:text-accent"
                >
                  {l.label}
                  <span className="sr-only"> (nouvel onglet)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Signature typographique, purement décorative */}
        <p
          aria-hidden="true"
          className="display select-none text-balance border-t border-night-border pt-8 text-[clamp(2rem,11vw,9rem)] leading-none text-night-border"
        >
          Raphaël Attias
        </p>

        <div className="flex flex-col gap-2 py-8 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.company}
          </p>
          <p>Site statique · Next.js · Aucun traceur</p>
        </div>
      </div>
    </footer>
  );
}
