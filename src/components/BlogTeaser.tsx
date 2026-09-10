import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import YardLine from './YardLine';
import { EMOJI_SIZE, getEmoji } from '@/lib/funnelIcons';

/**
 * Aperçu du blog : trois articles EN DUR, volontairement indépendants de tout
 * registre d'articles (le blog est alimenté par ailleurs).
 */
const ARTICLES = [
  {
    href: '/blog/comment-pratiquer-le-football-americain-en-france/',
    emoji: 'foot-us',
    kicker: 'Guide',
    titre: 'Comment pratiquer le football américain en France',
    extrait:
      'Trouver un club, comprendre les catégories, savoir ce qu’il faut comme matériel et à quel moment commencer : le mode d’emploi pour se lancer.',
  },
  {
    href: '/blog/flag-football-cest-quoi/',
    emoji: 'flag',
    kicker: 'Décryptage',
    titre: 'Le flag football, c’est quoi ?',
    extrait:
      'Le 5 contre 5 sans contact, mixte et bientôt olympique : les règles, les différences avec le football américain et à qui il s’adresse.',
  },
  {
    href: '/blog/sport-collectif-tours/',
    emoji: 'partenaire',
    kicker: 'Tours',
    titre: 'Quel sport collectif pratiquer à Tours ?',
    extrait:
      'Panorama des sports d’équipe accessibles dans l’agglomération tourangelle, et quelques repères pour choisir celui qui vous correspond.',
  },
];

export default function BlogTeaser() {
  return (
    <section className="sc-sec" id="blog">
      <YardLine n="50" />
      <div className="sc-wrap">
        <div data-reveal>
          <p className="sc-eyebrow">Le blog des Pionniers</p>
          <h2 className="sc-title">Comprendre avant de chausser les crampons.</h2>
          <p className="sc-lead">
            Des articles pour découvrir le football américain et le flag, sans jargon et sans
            présupposer que vous connaissez déjà le sport.
          </p>
        </div>

        <div className="sc-cards" data-reveal>
          {ARTICLES.map((a) => (
            <Link key={a.href} className="sc-card" href={a.href}>
              <div className="sc-card-badges">
                {/* Emoji purement décoratif : le titre de la carte porte déjà l'information. */}
                <img
                  className="sc-card-badge"
                  src={getEmoji(a.emoji)}
                  alt=""
                  width={EMOJI_SIZE.width}
                  height={EMOJI_SIZE.height}
                  loading="lazy"
                />
              </div>
              <div className="sc-chips">
                <span className="sc-chip">{a.kicker}</span>
              </div>
              <h3 className="sc-card-title">{a.titre}</h3>
              <p className="sc-card-desc">{a.extrait}</p>
              <span className="sc-card-cta">
                Lire l’article <ArrowRight size={15} strokeWidth={2.6} />
              </span>
            </Link>
          ))}
        </div>

        <div className="sc-body" data-reveal style={{ marginTop: 30 }}>
          <p className="sc-legal-text">
            Le blog va plus loin que le terrain : on y explique aussi comment{' '}
            <Link href="/blog/comment-regarder-le-college-football-en-france/">
              regarder le college football en France
            </Link>{' '}
            et comment{' '}
            <Link href="/blog/club-de-sport-tours/">trouver un club de sport à Tours</Link> quand on
            hésite encore entre plusieurs disciplines.
          </p>
        </div>

        <div style={{ marginTop: 34 }} data-reveal>
          <Link className="sc-btn-ghost" href="/blog/">
            Tous les articles
          </Link>
        </div>
      </div>
    </section>
  );
}
