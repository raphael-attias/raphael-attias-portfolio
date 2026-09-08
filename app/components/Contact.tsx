'use client';

import { useState, type FormEvent } from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { links, site } from '@/lib/data';

const socials = [
  { label: 'GitHub', href: links.github, handle: 'raphael-attias' },
  { label: 'LinkedIn', href: links.linkedin, handle: 'raphael-attias' },
  { label: 'Medium', href: links.medium, handle: '@rapatt_81344' },
  { label: 'Stormsecurity', href: links.stormSecurity, handle: 'stormsecurity.fr' },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  /**
   * Aucun backend : le formulaire compose un lien mailto: et laisse le client
   * de messagerie de l'utilisateur prendre le relais.
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Contact portfolio : ${name || 'sans nom'}`;
    const body = `Nom : ${name}\nEmail : ${email}\n\n${message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const fieldClass =
    'w-full rounded-lg border border-night-border bg-night-deep/60 px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-accent/60 focus:outline-none';

  return (
    <section id="contact" className="container-content py-16 sm:py-24 lg:py-32">
      <Reveal>
        <SectionHeading
          index="09"
          label="Prise de contact"
          title="Parlons de votre périmètre"
          description="Audit, test d'intrusion, sécurisation d'infrastructure ou automatisation : décrivez le besoin, je réponds."
        />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
        <Reveal delay={0.05}>
          <form onSubmit={handleSubmit} className="panel space-y-5 p-6 sm:p-9">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint"
                >
                  Nom
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={fieldClass}
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={fieldClass}
                  placeholder="vous@exemple.fr"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={7}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${fieldClass} resize-y`}
                placeholder="Contexte, périmètre, échéance…"
              />
            </div>

            <button type="submit" className="btn-accent w-full justify-center sm:w-auto">
              Ouvrir dans mon client mail
              <span aria-hidden="true">→</span>
            </button>

            <p className="font-mono text-[11px] leading-relaxed text-ink-faint">
              Ce formulaire n&apos;envoie rien vers un serveur : il prépare un e-mail dans votre
              logiciel de messagerie. Vous restez maître de l&apos;envoi.
            </p>
          </form>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="flex h-full flex-col gap-4">
            <a
              href={`mailto:${site.email}`}
              className="glow-card panel block p-6 transition-colors duration-300 hover:border-night-hover"
            >
              <p className="label">Email direct</p>
              <p className="mt-3 break-all font-mono text-sm text-accent">{site.email}</p>
            </a>

            <ul className="panel flex-1 divide-y divide-night-border">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 px-6 py-5 transition-colors duration-300 hover:bg-night-raised"
                  >
                    <span className="font-display text-sm font-bold uppercase tracking-tight text-white transition-colors group-hover:text-accent">
                      {s.label}
                      <span className="sr-only"> (nouvel onglet)</span>
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="hidden font-mono text-[11px] text-ink-faint sm:block">
                        {s.handle}
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-ink-faint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-accent"
                      >
                        ↗
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
