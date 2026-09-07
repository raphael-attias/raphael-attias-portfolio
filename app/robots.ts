import type { MetadataRoute } from 'next';
import { site } from '@/lib/data';

/**
 * Autorise explicitement les crawlers des moteurs génératifs (GEO), en plus
 * des moteurs de recherche classiques. Objectif : indexation par ChatGPT,
 * Perplexity, Gemini et Google AI Overviews. Aucun de ces robots n'est
 * bloqué, sous aucun prétexte.
 */
const aiCrawlers = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'PerplexityBot',
  'Google-Extended',
  'CCBot',
  'Applebot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
