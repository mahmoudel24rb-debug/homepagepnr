import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { ARTICLES, dateFr } from '@/data/blog';
import { asset } from '@/lib/asset';
import '@/components/blog/blog.css';

// Démo GitHub Pages : pas de canonical (et noindex hérité du layout).
const IS_DEMO = (process.env.NEXT_PUBLIC_BASE_PATH ?? '/homepagepnr') !== '/';

/** Le test de poste vit sur le site de recrutement. */
const QUIZ_URL = 'https://recrutement.pionniersdetouraine.fr/quel-poste-football-americain/';

export const metadata: Metadata = {
  title: 'Blog football américain & flag',
  description:
    'Guides et conseils pour débuter le football américain et le flag football : règles, équipement, clubs, postes. Par les Pionniers de Touraine, club fondé en 1987.',
  ...(IS_DEMO ? {} : { alternates: { canonical: '/blog/' } }),
};

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hp-dark blogc-hero">
          <div className="blogc-hero-inner">
            <p className="sc-eyebrow">Le blog des Pionniers</p>
            <h1 className="sc-title">Comprendre et débuter le foot US</h1>
            <p className="sc-lead">
              Guides écrits par un club de football américain fondé en 1987 : les règles, les
              postes, l&apos;équipement, et tout ce qu&apos;il faut pour te lancer, en France comme
              en Touraine.
            </p>
          </div>
        </section>

        <section className="blogc-list">
          <div className="blogc-list-wrap">
            <div className="sc-cards">
              {ARTICLES.map((a) => (
                <Link key={a.slug} className="sc-card" href={`/blog/${a.slug}/`}>
                  <span className="blogc-card-icon">
                    <img src={asset(a.icone)} alt="" loading="lazy" />
                  </span>
                  <h2 className="sc-card-title">{a.titreCourt}</h2>
                  <p className="sc-card-desc">{a.description}</p>
                  <span className="blogc-card-meta">{dateFr(a.datePublication)} · {a.minutesLecture} min de lecture</span>
                  <span className="sc-card-cta">Lire l&apos;article</span>
                </Link>
              ))}
              <a className="sc-card blogc-quiz-card" href={QUIZ_URL}>
                <span className="blogc-card-icon">
                  <img src={asset('/assets/refonte/badge-3-ppp.svg')} alt="" loading="lazy" />
                </span>
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
