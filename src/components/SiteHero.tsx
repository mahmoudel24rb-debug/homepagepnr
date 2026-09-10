'use client';

import { FaChevronDown } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';
import { asset } from '@/lib/asset';
import { mobileLines } from '@/lib/mobileLines';

/**
 * Hero du site vitrine : reprend exactement le gabarit du hero de la landing
 * de recrutement (.rf-hero + badges), avec le discours du site racine.
 */
/**
 * Badges du hero : `w`/`h` sont les dimensions intrinsèques des fichiers.
 * La rangée est au-dessus de la ligne de flottaison, donc jamais en lazy ;
 * les dimensions explicites réservent la place de chaque badge et évitent
 * que la rangée passe de 4 à 5 éléments après le premier rendu.
 */
const BADGES = [
  { src: '/assets/refonte/badge-1-footus.webp', alt: 'Foot US & Flag', w: 560, h: 400 },
  { src: '/assets/refonte/badge-2-olympique.webp', alt: 'Sport Olympique · JO de Los Angeles 2028', w: 400, h: 400 },
  { src: '/assets/refonte/badge-3-ppp.svg', alt: 'Programme PPP', w: 72, h: 61 },
  { src: '/assets/refonte/badge-4-u18.webp', alt: 'U18', w: 460, h: 400 },
  { src: '/assets/refonte/badge-5-ecole.webp', alt: 'École de Flag', w: 462, h: 400 },
];

export default function SiteHero() {
  return (
    <section className="rf-hero">
      <div className="rf-hero-inner">
        <p className="rf-season">Club fondé en 1987 · Tours</p>
        <h1 className="rf-title rf-title--long">
          Pionniers de Touraine, club de football américain et flag football à Tours
        </h1>
        <p className="rf-sub">
          {mobileLines(
            'Depuis 1987, le club fait pratiquer le football américain\net le flag football au stade de la Chambrerie.',
          )}{' '}
          <br />
          Seniors, juniors U18, flag mixte et école de flag : chacun trouve son terrain.
        </p>
        <div className="rf-cta-row">
          <a className="rf-cta" href="#club">
            Découvrir le club
            <span className="rf-cta-arrow">
              <ArrowRight size={17} strokeWidth={2.6} />
            </span>
          </a>
        </div>

        <div className="rf-badges">
          {BADGES.map((b) => (
            // fetchPriority="low" : les badges restent en chargement immédiat
            // (pas de lazy, ils sont au-dessus de la ligne de flottaison) mais
            // React n'émet plus de <link rel="preload"> pour eux et ils ne
            // disputent plus la bande passante au fond du hero (élément LCP).
            <img
              key={b.alt}
              src={asset(b.src)}
              alt={b.alt}
              width={b.w}
              height={b.h}
              loading="eager"
              fetchPriority="low"
            />
          ))}
        </div>
      </div>

      <a href="#club" className="rf-chevron" aria-label="Défiler">
        <FaChevronDown size={26} />
      </a>
    </section>
  );
}
