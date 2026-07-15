import { ArrowRight } from 'lucide-react';
import { FaChevronDown } from 'react-icons/fa';
import { asset } from '@/lib/asset';
import { REJOINDRE_URL } from '@/lib/infos';

const BADGES = [
  { src: '/assets/refonte/badge-1-footus.svg', alt: 'Écusson Foot US & Flag' },
  { src: '/assets/refonte/badge-2-olympique.svg', alt: 'Écusson Sport Olympique · JO de Los Angeles 2028' },
  { src: '/assets/refonte/badge-3-ppp.svg', alt: 'Écusson Programme PPP' },
  { src: '/assets/refonte/badge-4-u18.svg', alt: 'Écusson U18' },
  { src: '/assets/refonte/badge-5-ecole.svg', alt: 'Écusson École de Flag' },
];

export default function HomeHero() {
  return (
    <section className="rf-hero hp-hero">
      <div className="rf-hero-inner">
        <p className="rf-season">Pionniers de Touraine · Depuis 1987</p>
        <h1 className="rf-title">
          Club de football américain
          <br />
          &amp; flag football à Tours
        </h1>
        <p className="rf-sub">
          Seniors, juniors U18, flag mixte et école de flag : les Pionniers font vivre le foot US
          en Touraine depuis 1987, au stade de la Chambrerie à Tours.
        </p>
        <div className="hp-hero-ctas">
          <a className="rf-cta" href={REJOINDRE_URL}>
            Rejoindre le club
            <span className="rf-cta-arrow"><ArrowRight size={17} strokeWidth={2.6} /></span>
          </a>
          <a className="sc-btn-ghost" href="#infos">Voir les horaires</a>
        </div>
        <p className="rf-note">Semaine découverte offerte · débutants bienvenus</p>

        <div className="rf-badges">
          {BADGES.map((b) => (
            <img key={b.alt} src={asset(b.src)} alt={b.alt} />
          ))}
        </div>
      </div>

      <a href="#club" className="rf-chevron" aria-label="Défiler vers la section Le club">
        <FaChevronDown size={26} />
      </a>
    </section>
  );
}
