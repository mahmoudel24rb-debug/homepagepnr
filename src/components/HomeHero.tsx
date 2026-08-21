import { ArrowRight } from 'lucide-react';

const FACTS = [
  { chiffre: 'Depuis 1987', detail: 'Le foot US en Touraine' },
  { chiffre: 'Stade de la Chambrerie', detail: 'Tours Nord (37)' },
  { chiffre: 'Foot US · Flag · École', detail: 'Seniors, U18 & jeunes' },
];

export default function HomeHero() {
  return (
    <section className="rf-hero hp-hero">
      <div className="rf-hero-inner">
        <p className="rf-season">Pionniers de Touraine</p>
        <h1 className="rf-title">
          Club de football américain
          <br />
          &amp; flag football à Tours
        </h1>
        <p className="rf-sub">
          Pratiquer le football américain au contact ou le flag football sans contact : depuis
          1987, les Pionniers accueillent débutants et joueurs confirmés au stade de la
          Chambrerie, à Tours Nord.
        </p>
        <div className="hp-hero-ctas">
          <a className="rf-cta" href="#club">
            Découvrir le club
            <span className="rf-cta-arrow"><ArrowRight size={17} strokeWidth={2.6} /></span>
          </a>
          <a className="sc-btn-ghost" href="#infos">Horaires &amp; accès</a>
        </div>
        <p className="rf-note">Semaine découverte offerte · débutants bienvenus</p>

        <div className="hp-hero-facts">
          {FACTS.map((f) => (
            <div key={f.chiffre}>
              <strong>{f.chiffre}</strong>
              <span>{f.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
