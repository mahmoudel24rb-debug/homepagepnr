import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleLayout from '@/components/blog/ArticleLayout';
import { ARTICLES, getArticle } from '@/data/blog';

// Démo GitHub Pages : pas de canonical/OG absolus (et noindex hérité du layout).
const IS_DEMO = (process.env.NEXT_PUBLIC_BASE_PATH ?? '/homepagepnr') !== '/';
const SITE = 'https://pionniersdetouraine.fr';

/**
 * Date ISO seule (« 2026-09-02 ») transformée en date complète à l'heure de
 * Paris. Le décalage est déduit du mois : +02:00 d'avril à octobre (heure
 * d'été), +01:00 sinon. C'est une approximation assumée : les bascules ont
 * lieu fin mars et fin octobre, donc seuls quelques jours de mars et
 * d'octobre porteraient un décalage d'une heure. Sans conséquence pour
 * datePublished/dateModified, et sans `new Date()` (build déterministe).
 */
function isoParis(d: string): string {
  const mois = Number(d.slice(5, 7));
  const offset = mois >= 4 && mois <= 10 ? '+02:00' : '+01:00';
  return `${d}T09:00:00${offset}`;
}

// output:'export' impose la liste exhaustive des slugs au build.
export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: article.titleSeo,
    description: article.description,
    ...(IS_DEMO
      ? {}
      : {
          alternates: { canonical: `/blog/${article.slug}/` },
          openGraph: {
            type: 'article',
            title: article.titre,
            description: article.description,
            url: `${SITE}/blog/${article.slug}/`,
            siteName: 'Pionniers de Touraine',
            locale: 'fr_FR',
            publishedTime: article.datePublication,
            modifiedTime: article.dateModif,
            images: [{ url: `${SITE}/assets/refonte/fond-hero.webp` }],
          },
        }),
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();
  const Content = article.content;

  // JSON-LD : BlogPosting + fil d'Ariane (URLs prod uniquement, la démo est
  // noindex). L'auteur et l'éditeur pointent par @id vers le nœud SportsClub
  // déclaré une seule fois dans le layout racine.
  const jsonLd = IS_DEMO
    ? null
    : {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BlogPosting',
            '@id': `${SITE}/blog/${article.slug}/#article`,
            headline: article.titre,
            description: article.description,
            url: `${SITE}/blog/${article.slug}/`,
            mainEntityOfPage: { '@id': `${SITE}/blog/${article.slug}/` },
            datePublished: isoParis(article.datePublication),
            dateModified: isoParis(article.dateModif),
            inLanguage: 'fr-FR',
            isPartOf: { '@id': `${SITE}/blog/#blog` },
            image: {
              '@type': 'ImageObject',
              url: `${SITE}/assets/refonte/fond-hero.webp`,
              width: 1920,
              height: 1089,
            },
            author: { '@id': `${SITE}/#organization` },
            publisher: { '@id': `${SITE}/#organization` },
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE}/` },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog/` },
              { '@type': 'ListItem', position: 3, name: article.titreCourt, item: `${SITE}/blog/${article.slug}/` },
            ],
          },
        ],
      };

  return (
    <>
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <ArticleLayout article={article}>
        <Content />
      </ArticleLayout>
    </>
  );
}
