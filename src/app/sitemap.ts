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
 * `changeFrequency` et `priority` sont volontairement absents : Google les
 * ignore depuis longtemps, seul `lastModified` est exploité.
 *
 * /organigramme/ est volontairement absent : la page est en noindex.
 */
const SITE = 'https://pionniersdetouraine.fr';

// Date de dernière modification, page par page (à mettre à jour à la main).
const DATE_PAGE: Record<string, string> = {
  '/': '2026-09-10',
  '/le-club/': '2026-09-10',
  '/nos-sections/': '2026-09-10',
  '/football-americain/': '2026-09-10',
  '/flag-football/': '2026-09-10',
  '/ecole-de-flag/': '2026-09-10',
  '/partenaires/': '2026-09-10',
  '/contact/': '2026-09-10',
  '/mentions-legales/': '2026-08-21',
  '/politique-de-confidentialite/': '2026-08-21',
};

// Archive du blog : dernière modification = article le plus récemment mis à jour.
const DATE_BLOG = ARTICLES.map((a) => a.dateModif).sort().at(-1) ?? DATE_PAGE['/'];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE}/`, lastModified: DATE_PAGE['/'] },
    { url: `${SITE}/le-club/`, lastModified: DATE_PAGE['/le-club/'] },
    { url: `${SITE}/nos-sections/`, lastModified: DATE_PAGE['/nos-sections/'] },
    { url: `${SITE}/football-americain/`, lastModified: DATE_PAGE['/football-americain/'] },
    { url: `${SITE}/flag-football/`, lastModified: DATE_PAGE['/flag-football/'] },
    { url: `${SITE}/ecole-de-flag/`, lastModified: DATE_PAGE['/ecole-de-flag/'] },
    { url: `${SITE}/partenaires/`, lastModified: DATE_PAGE['/partenaires/'] },
    { url: `${SITE}/blog/`, lastModified: DATE_BLOG },
    ...ARTICLES.map((a) => ({
      url: `${SITE}/blog/${a.slug}/`,
      lastModified: a.dateModif,
    })),
    { url: `${SITE}/contact/`, lastModified: DATE_PAGE['/contact/'] },
    { url: `${SITE}/mentions-legales/`, lastModified: DATE_PAGE['/mentions-legales/'] },
    {
      url: `${SITE}/politique-de-confidentialite/`,
      lastModified: DATE_PAGE['/politique-de-confidentialite/'],
    },
  ];
}
