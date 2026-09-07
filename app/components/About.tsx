import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { links } from '@/lib/data';

const FACTS = [
  { k: 'Rôle', v: 'Consultant indépendant' },
  { k: 'Structure', v: 'Stormsecurity' },
  { k: 'Base', v: 'Marseille, France' },
  { k: 'Terrains', v: 'Offensif · Défensif · Produit' },
  { k: 'En poste', v: 'CMA CGM · Mintera' },
];

export default function About() {
  return (
    <section id="a-propos" className="container-content py-24 sm:py-32">
      <Reveal>
        <SectionHeading index="01" label="Profil" title="Deux versants, un seul métier" />
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-16">
        <div className="space-y-6">
          <Reveal delay={0.05}>
            <p className="font-display text-lg font-medium leading-snug text-white sm:text-xl">
              Raphaël Attias structure son activité de cybersécurité autour de deux versants
              complémentaires : la sécurité offensive, pour éprouver la résistance des systèmes,
              et l&apos;infrastructure, pour les faire tenir en production.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 text-[15px] leading-relaxed text-ink-muted sm:text-base">
              <p>
                Comprendre comment un système casse change la façon dont je le construit. Côté
                offensif, je mène des tests d&apos;intrusion et des audits, avec une spécialité
                matériel : radio, NFC/RFID, SDR, et les scénarios red team qui vont avec. Côté
                défensif et infrastructure, j&apos;administre des réseaux et des environnements
                virtualisés : Proxmox, segmentation VLAN, homelab avancé servant aussi bien de
                laboratoire que de production.
              </p>
              <p>
                En parallèle, je conçois des produits : un SaaS en exploitation et des agents IA
                d&apos;automatisation qui tournent en continu sur mon infrastructure. Ce double
                profil est délibéré.
              </p>
              <p>
                Mon expérience en entreprise passe par une alternance chez NeoXam, un stage chez
                CMA CGM et un poste chez Mintera : durcissement d&apos;un Active Directory, agents
                IA pour le SOC et infrastructure de data centers.
              </p>
              <p>
                Je documente mes recherches offensives sur{' '}
                <a href={links.medium} target="_blank" rel="noopener noreferrer" className="link-accent">
                  Medium
                </a>
                , j&apos;interviens en conférence, et je dirige{' '}
                <a
                  href={links.stormSecurity}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent"
                >
                  Stormsecurity
                </a>
                , ma structure de conseil en cybersécurité.
              </p>
              <p>
                Sur le terrain de la souveraineté numérique,{' '}
                <a
                  href={links.freenigma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent"
                >
                  Freenigma
                </a>{' '}
                est mon projet phare : audit OSINT, procédures RGPD et hardware durci.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          {/* TODO: ajouter une photo de profil dans /public et la référencer ici
              (next/image, alt descriptif incluant "Raphaël Attias") si souhaité. */}
          <dl className="panel divide-y divide-night-border font-mono text-[13px]">
            {FACTS.map((f) => (
              <div key={f.k} className="flex items-baseline justify-between gap-4 px-5 py-4">
                <dt className="text-[11px] uppercase tracking-[0.16em] text-ink-faint">{f.k}</dt>
                <dd className="text-right text-ink">{f.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
