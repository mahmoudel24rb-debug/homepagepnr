import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import YardLine from '@/components/YardLine';
import { ARTICLES, dateFr } from '@/data/blog';
import { getEmoji } from '@/lib/funnelIcons';
import '@/components/blog/blog.css';

// Démo GitHub Pages : pas de canonical (et noindex hérité du layout).
const IS_DEMO = (process.env.NEXT_PUBLIC_BASE_PATH ?? '/homepagepnr') !== '/';
const SITE = 'https://pionniersdetouraine.fr';

/** Le test de poste vit sur le site de recrutement. */
const QUIZ_URL = 'https://recrutement.pionniersdetouraine.fr/quel-poste-football-americain/';

export const metadata: Metadata = {
  title: 'Blog football américain et flag',
  description:
    'Guides pour débuter le foot US et le flag : règles, postes, équipement, budget. Écrits par les Pionniers de Touraine, club de Tours fondé en 1987.',
  ...(IS_DEMO ? {} : { alternates: { canonical: '/blog/' } }),
};

// JSON-LD : le blog (nœud référencé par chaque article via isPartOf) et le fil
// d'Ariane. URLs prod uniquement, la démo est noindex.
const jsonLd = IS_DEMO
  ? null
  : {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Blog',
          '@id': `${SITE}/blog/#blog`,
          url: `${SITE}/blog/`,
          name: 'Le blog des Pionniers de Touraine',
          inLanguage: 'fr-FR',
          publisher: { '@id': `${SITE}/#organization` },
          blogPost: ARTICLES.map((a) => ({
            '@type': 'BlogPosting',
            '@id': `${SITE}/blog/${a.slug}/#article`,
            headline: a.titre,
            url: `${SITE}/blog/${a.slug}/`,
            datePublished: a.datePublication,
          })),
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE}/` },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog/` },
          ],
        },
      ],
    };

export default function BlogPage() {
  return (
    <>
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <SiteHeader />
      <main>
        <section className="blogc-hero">
          <div className="blogc-hero-inner">
            <p className="sc-eyebrow">Le blog des Pionniers</p>
            <h1 className="sc-title">Comprendre et débuter le foot US</h1>
            <p className="sc-lead" style={{ margin: '18px auto 0' }}>
              Guides écrits par un club de football américain fondé en 1987 : les règles, les
              postes, l&apos;équipement, et tout ce qu&apos;il faut pour te lancer, en France comme
              en Touraine.
            </p>
          </div>
        </section>

        <section className="sc-sec blogc-list">
          <YardLine n="20" />
          <div className="sc-wrap">
            <div className="sc-cards">
              {ARTICLES.map((a) => (
                <Link key={a.slug} className="sc-card" href={`/blog/${a.slug}/`}>
                  <span className="blogc-card-icon"><img src={getEmoji(a.emoji)} alt="" loading="lazy" /></span>
                  <h2 className="sc-card-title">{a.titreCourt}</h2>
                  <p className="sc-card-desc">{a.description}</p>
                  <span className="blogc-card-meta">{dateFr(a.datePublication)} · {a.minutesLecture} min de lecture</span>
                  <span className="sc-card-cta">Lire l&apos;article</span>
                </Link>
              ))}
              <a className="sc-card blogc-quiz-card" href={QUIZ_URL}>
                <span className="blogc-card-icon"><img src={getEmoji('jouer')} alt="" loading="lazy" /></span>
                <h2 className="sc-card-title">Quel poste jouer ? Fais le test</h2>
                <p className="sc-card-desc">
                  8 questions, un algorithme de scouting calibré sur les gabarits NFL et NCAA, et
                  ton poste idéal, en foot US ou en flag. Le test est hébergé sur notre site de
                  recrutement.
                </p>
                <span className="blogc-card-meta">Test interactif · 2 min</span>
                <span className="sc-card-cta">Faire le test</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
