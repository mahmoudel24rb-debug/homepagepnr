'use client';

import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';
import { asset } from '@/lib/asset';
import { mobileLines } from '@/lib/mobileLines';
import { REJOINDRE_TUNNEL_URL } from '@/lib/infos';

/**
 * Hero du site vitrine : reprend exactement le gabarit du hero de la landing
 * de recrutement (.rf-hero + badges), avec le discours du site racine.
 */
const BADGES = [
  { src: '/assets/refonte/badge-1-footus.webp', alt: 'Foot US & Flag' },
  { src: '/assets/refonte/badge-2-olympique.webp', alt: 'Sport Olympique · JO de Los Angeles 2028' },
  { src: '/assets/refonte/badge-3-ppp.svg', alt: 'Programme PPP' },
  { src: '/assets/refonte/badge-4-u18.webp', alt: 'U18' },
  { src: '/assets/refonte/badge-5-ecole.webp', alt: 'École de Flag' },
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
          )}
          <br />
          Seniors, juniors U18, flag mixte et école de flag : chacun trouve son terrain.
        </p>
        <div className="rf-cta-row">
          <a className="rf-cta" href={REJOINDRE_TUNNEL_URL}>
            Commencer le parcours
            <span className="rf-cta-arrow">
              <ArrowRight size={17} strokeWidth={2.6} />
            </span>
          </a>
          <Link className="sc-btn-ghost" href="/le-club/">
            Découvrir le club
          </Link>
        </div>
        <p className="rf-note">2 minutes · sans engagements</p>

        <div className="rf-badges">
          {BADGES.map((b) => (
            <img key={b.alt} src={asset(b.src)} alt={b.alt} />
          ))}
        </div>
      </div>

      <a href="#club" className="rf-chevron" aria-label="Défiler">
        <FaChevronDown size={26} />
      </a>
    </section>
  );
}
