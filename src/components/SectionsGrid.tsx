import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import YardLine from './YardLine';
import { getEmoji } from '@/lib/funnelIcons';

/**
 * Routage vers les trois pages de section, en cartes de verre bordeaux
 * (.sc-card), illustrées par les emojis 3D du pack designer.
 */
const SECTIONS = [
  {
    href: '/football-americain/',
    emoji: 'foot-us',
    alt: 'Emoji football américain',
    titre: 'Football américain',
    chips: ['Au contact', 'Seniors & juniors', 'Compétition'],
    accroche:
      'Le sport au contact, en championnat. Le casque et les épaulières sont prêtés aux débutants, et le contact s’apprend par étapes : personne n’est jeté dans le grand bain.',
  },
  {
    href: '/flag-football/',
    emoji: 'flag',
    alt: 'Emoji flag football',
    titre: 'Flag football',
    chips: ['Sans contact', 'Mixte', '5 contre 5'],
    accroche:
      'La version sans contact du football américain : on arrache un ruban à la ceinture au lieu de plaquer. Mixte, rapide, et sport olympique aux JO de Los Angeles 2028.',
  },
  {
    href: '/ecole-de-flag/',
    emoji: 'jeunes-flag',
    alt: 'Emoji drapeau NFL Flag',
    titre: 'École de flag',
    chips: ['Samedi 10h-12h', 'U7 à U18', 'Zéro contact'],
    accroche:
      'Le samedi matin, les jeunes nés entre 2009 et 2021 (catégories U7 à U18) découvrent un sport collectif sans aucun contact : motricité, passes, tracés et esprit d’équipe. Ceintures et flags fournis par le club.',
  },
];

export default function SectionsGrid() {
  return (
    <section className="sc-sec sc-disciplines" id="sections">
      <YardLine n="20" />
      <div className="sc-wrap">
        <div data-reveal>
          <p className="sc-eyebrow">Nos sections</p>
          <h2 className="sc-title">Trouvez votre terrain.</h2>
          <p className="sc-lead">
            Un seul stade, plusieurs collectifs. Selon votre âge, votre envie de contact et vos
            disponibilités, il y a une section faite pour vous.
          </p>
        </div>

        <div className="sc-cards" data-reveal>
          {SECTIONS.map((s) => (
            <Link key={s.href} className="sc-card" href={s.href}>
              <div className="sc-card-badges">
                <img
                  className="sc-card-badge"
                  src={getEmoji(s.emoji)}
                  alt={s.alt}
                  loading="lazy"
                />
              </div>
              <h3 className="sc-card-title">{s.titre}</h3>
              <div className="sc-chips">
                {s.chips.map((c) => (
                  <span key={c} className="sc-chip">
                    {c}
                  </span>
                ))}
              </div>
              <p className="sc-card-desc">{s.accroche}</p>
              <span className="sc-card-cta">
                Découvrir la section <ArrowRight size={15} strokeWidth={2.6} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
