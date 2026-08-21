import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { asset } from '@/lib/asset';

/**
 * Routage vers les trois pages de section. Complète DisciplinesSection, qui
 * explique les deux sports : ici on répond à « où est ma place, et quand ? ».
 */
const SECTIONS = [
  {
    href: '/football-americain/',
    badge: '/assets/refonte/badge-1-footus.svg',
    alt: 'Écusson Foot US & Flag des Pionniers de Touraine',
    titre: 'Football américain',
    chips: ['Au contact', 'Seniors & juniors', 'Compétition'],
    accroche:
      'Le sport au contact, en championnat. Le casque et les épaulières sont prêtés aux débutants, et le contact s’apprend par étapes : personne n’est jeté dans le grand bain.',
    lien: 'Découvrir la section',
  },
  {
    href: '/flag-football/',
    badge: '/assets/refonte/badge-2-olympique.svg',
    alt: 'Écusson Sport Olympique · JO de Los Angeles 2028',
    titre: 'Flag football',
    chips: ['Sans contact', 'Mixte', '5 contre 5'],
    accroche:
      'La version sans contact du football américain : on arrache un ruban à la ceinture au lieu de plaquer. Mixte, rapide, et sport olympique aux JO de Los Angeles 2028.',
    lien: 'Découvrir la section',
  },
  {
    href: '/ecole-de-flag/',
    badge: '/assets/refonte/badge-5-ecole.svg',
    alt: 'Écusson École de Flag des Pionniers de Touraine',
    titre: 'École de flag',
    chips: ['Samedi 10h-12h', 'Dès 6 à 8 ans', 'Zéro contact'],
    accroche:
      'Le samedi matin, les plus jeunes découvrent un sport collectif sans aucun contact : motricité, passes, tracés et esprit d’équipe. Ceintures et flags fournis par le club.',
    lien: 'Découvrir la section',
  },
];

export default function SectionsGrid() {
  return (
    <section className="hp-sec" id="sections">
      <div className="hp-wrap">
        <div data-reveal>
          <p className="hp-eyebrow">Nos sections</p>
          <h2 className="hp-h2">Trouvez votre terrain.</h2>
          <p className="hp-p">
            Quatre collectifs, un seul stade. Selon votre âge, votre envie de contact et vos
            disponibilités, il y a une section faite pour vous.
          </p>
        </div>
        <div className="hp-cards hp-cards-3" data-reveal>
          {SECTIONS.map((s) => (
            <article key={s.href} className="hp-card">
              <img className="hp-card-badge" src={asset(s.badge)} alt={s.alt} loading="lazy" />
              <h3>{s.titre}</h3>
              <div className="hp-chips">
                {s.chips.map((c) => (
                  <span key={c} className="hp-chip">
                    {c}
                  </span>
                ))}
              </div>
              <p>{s.accroche}</p>
              <Link className="hp-card-link" href={s.href}>
                {s.lien} <FaArrowRight size={12} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
