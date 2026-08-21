import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

/**
 * Aperçu du blog : trois articles EN DUR, volontairement indépendants de tout
 * registre d'articles (le blog est alimenté par ailleurs).
 */
const ARTICLES = [
  {
    href: '/blog/comment-pratiquer-le-football-americain-en-france/',
    kicker: 'Guide',
    titre: 'Comment pratiquer le football américain en France',
    extrait:
      'Trouver un club, comprendre les catégories, savoir ce qu’il faut comme matériel et à quel moment commencer : le mode d’emploi pour se lancer.',
  },
  {
    href: '/blog/flag-football-cest-quoi/',
    kicker: 'Décryptage',
    titre: 'Le flag football, c’est quoi ?',
    extrait:
      'Le 5 contre 5 sans contact, mixte et bientôt olympique : les règles, les différences avec le football américain et à qui il s’adresse.',
  },
  {
    href: '/blog/sport-collectif-tours/',
    kicker: 'Tours',
    titre: 'Quel sport collectif pratiquer à Tours ?',
    extrait:
      'Panorama des sports d’équipe accessibles dans l’agglomération tourangelle, et quelques repères pour choisir celui qui vous correspond.',
  },
];

export default function BlogTeaser() {
  return (
    <section className="hp-sec" id="blog">
      <div className="hp-wrap">
        <div data-reveal>
          <p className="hp-eyebrow">Le blog des Pionniers</p>
          <h2 className="hp-h2">Comprendre avant de chausser les crampons.</h2>
          <p className="hp-p">
            Des articles pour découvrir le football américain et le flag, sans jargon et sans
            présupposer que vous connaissez déjà le sport.
          </p>
        </div>
        <div className="hp-blog" data-reveal>
          {ARTICLES.map((a) => (
            <Link key={a.href} className="hp-blog-card" href={a.href}>
              <p className="hp-blog-kicker">{a.kicker}</p>
              <h3>{a.titre}</h3>
              <p>{a.extrait}</p>
              <span className="hp-blog-more">
                Lire l’article <FaArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
        <div className="hp-section-cta" data-reveal>
          <Link className="hp-ghost" href="/blog/">
            Tous les articles
          </Link>
        </div>
      </div>
    </section>
  );
}
