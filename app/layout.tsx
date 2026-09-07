import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { links, site } from '@/lib/data';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
});

const description =
  "Raphaël Attias, alias Rapatt, consultant indépendant en cybersécurité, pentest et infrastructure, spécialisé dans les agents IA autonomes. Red team matériel et radio, architecture réseau, automatisation. Fondateur de Stormsecurity, Marseille.";

const titleDefault = `${site.name} (Rapatt) : Consultant Cybersécurité, Infrastructure & IA`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: titleDefault,
    template: `%s · ${site.name}`,
  },
  description,
  applicationName: `${site.name} · Portfolio`,
  authors: [{ name: site.name, url: links.linkedin }],
  creator: site.name,
  publisher: site.company,
  keywords: [
    'Raphaël Attias',
    'Rapatt',
    'cybersécurité',
    "test d'intrusion",
    'pentest',
    'red team',
    'Active Directory',
    'Proxmox',
    'homelab',
    'agents IA',
    'automatisation',
    'Stormsecurity',
    'Marseille',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: site.url,
    siteName: `${site.name} · Portfolio`,
    title: titleDefault,
    description,
    // TODO: ajouter /public/og.png (1200x630) puis décommenter le bloc suivant.
    // images: [{ url: '/og.png', width: 1200, height: 630, alt: `${site.name} · portfolio` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: titleDefault,
    description,
    // TODO: images: ['/og.png'] une fois le visuel Open Graph créé.
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: '#0a0e14',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

/**
 * Schema.org Organization pour Stormsecurity, émis séparément du Person
 * pour être référencé par `worksFor` sans dupliquer les champs.
 */
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${site.url}/#stormsecurity`,
  name: 'Stormsecurity',
  url: links.stormSecurity,
  sameAs: [links.stormSecurity, links.freenigma],
  founder: { '@type': 'Person', name: site.name },
};

/**
 * Schema.org Person, prioritaire pour le ranking sur "Raphaël Attias" et
 * "Rapatt" (SEO classique et GEO : ChatGPT, Perplexity, Gemini, AI Overviews).
 * TODO: `image` non renseigné, aucune photo de profil fournie.
 */
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${site.url}/#raphael-attias`,
  name: site.name,
  alternateName: ['Rapatt', 'RAPATT', 'Raphael Attias'],
  jobTitle: 'Consultant en cybersécurité, infrastructure et automatisation IA',
  email: `mailto:${site.email}`,
  url: site.url,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Marseille',
    addressCountry: 'FR',
  },
  worksFor: { '@id': `${site.url}/#stormsecurity` },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'La Plateforme_',
  },
  knowsAbout: [
    'Cybersécurité',
    'Pentest',
    'Red Team',
    'Infrastructure Proxmox',
    'Intelligence artificielle agentique',
    'Cyber Threat Intelligence',
    'Web3',
  ],
  sameAs: [
    links.github,
    links.linkedin,
    links.medium,
    links.stormSecurity,
    links.freenigma,
    links.ekkhoo,
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="grain">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:border focus:border-accent focus:bg-night focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-accent"
        >
          Aller au contenu principal
        </a>
        {children}
        <script
          type="application/ld+json"
          // Données structurées statiques, générées au build.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
