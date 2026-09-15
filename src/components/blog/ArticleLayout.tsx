import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import YardLine from '@/components/YardLine';
import { dateFr, type ArticleMeta } from '@/data/blog';
import './blog.css';

/**
 * Gabarit commun des articles : hero sombre (breadcrumb + H1 + méta),
 * zone de lecture claire (fond crème, texte sombre). Le CTA final est dans
 * le contenu de chaque article. Le contenu (children) est le composant de src/content/.
 */
export default function ArticleLayout({ article, children }: { article: ArticleMeta; children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="blogc-hero">
          <div className="blogc-hero-inner">
            <nav className="blogc-crumbs" aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span className="sep">/</span>
              <Link href="/blog/">Blog</Link>
              <span className="sep">/</span>
              <span>{article.titreCourt}</span>
            </nav>
            <h1 className="sc-title">{article.titre}</h1>
            <p className="blogc-meta">
              Publié le <strong>{dateFr(article.datePublication)}</strong> · {article.minutesLecture} min de lecture ·
              par les <strong>Pionniers de Touraine</strong>
            </p>
          </div>
        </section>

        <div className="blogc-body">
          <article className="blogc-prose">
            {/* Le CTA final est porte par chaque article (contextuel), pas par le gabarit. */}
            {children}
          </article>
        </div>

        <YardLine n="endzone" />
      </main>
      <SiteFooter />
    </>
  );
}
