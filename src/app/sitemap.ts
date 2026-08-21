import type { MetadataRoute } from 'next';
import { ARTICLES } from '@/data/blog';

/**
 * sitemap.xml généré au build. Aucune condition démo/prod ici : le fichier est
 * bien produit sur la démo GitHub Pages, mais celle-ci est noindex (layout) et
 * interdite au crawl (robots.ts), donc sans conséquence.
 *
 * Build déterministe : pas de `new Date()` ni de `Date.now()`, uniquement des
 * dates en dur.
 * Toutes les URLs se terminent par « / » (trailingSlash activé côté Next).
 *
 * /organigramme/ est volontairement absent : la page est en noindex.
 */
const SITE = 'https://pionniersdetouraine.fr';

// Date de dernière refonte des pages statiques (à mettre à jour à la main).
const DATE_PAGES = '2026-08-21';

// Archive du blog : dernière modification = article le plus récemment mis à jour.
const DATE_BLOG = ARTICLES.map((a) => a.dateModif).sort().at(-1) ?? DATE_PAGES;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE}/`,
      lastModified: DATE_PAGES,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE}/le-club/`,
      lastModified: DATE_PAGES,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE}/football-americain/`,
      lastModified: DATE_PAGES,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE}/flag-football/`,
      lastModified: DATE_PAGES,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE}/ecole-de-flag/`,
      lastModified: DATE_PAGES,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE}/partenaires/`,
      lastModified: DATE_PAGES,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE}/blog/`,
      lastModified: DATE_BLOG,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...ARTICLES.map((a) => ({
      url: `${SITE}/blog/${a.slug}/`,
      lastModified: a.dateModif,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${SITE}/contact/`,
      lastModified: DATE_PAGES,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${SITE}/mentions-legales/`,
      lastModified: DATE_PAGES,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE}/politique-de-confidentialite/`,
      lastModified: DATE_PAGES,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
