import type { MetadataRoute } from 'next';
import { site } from '@/lib/data';

/**
 * Sitemap XML minimal : le site est une page unique en SSG. Next.js
 * l'expose automatiquement sur /sitemap.xml.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
