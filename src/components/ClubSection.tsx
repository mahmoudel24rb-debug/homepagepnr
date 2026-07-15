import YardLine from './YardLine';
import { asset } from '@/lib/asset';

const REPERES = [
  { label: '1987', txt: 'Fondation du club à Tours : le football américain arrive en Touraine.' },
  { label: 'Deux sports', txt: 'Football américain au contact, flag football sans contact : deux disciplines, une même intensité.' },
  { label: 'Pour tous', txt: 'Seniors, juniors U18 et école de flag : débutants bienvenus, aucune expérience exigée.' },
  { label: 'Un stade', txt: 'Entraînements au stade de la Chambrerie, à Tours Nord (37).' },
];

export default function ClubSection() {
  return (
    <section className="sc-sec" id="club">
      <YardLine n="10" />
      <div className="sc-wrap sc-club-grid">
        <div data-reveal>
          <p className="sc-eyebrow">Le club</p>
          <h2 className="sc-title">
            Le football américain
            <br />
            au cœur de la Touraine.
          </h2>
          <p className="hp-p">
            Les <strong>Pionniers de Touraine</strong> sont le club de football américain et de
            flag football de <strong>Tours</strong>, en Indre-et-Loire (37). Depuis 1987, le club
            forme des athlètes de tous âges et de tous niveaux : équipe senior en championnat,
            juniors U18, équipe de flag mixte et école de flag pour les plus jeunes.
          </p>
          <blockquote className="hp-quote">
            « Dans ce club, nous ne sommes pas juste des Pionniers, nous sommes une famille. »
          </blockquote>
          <ul className="sc-reperes">
            {REPERES.map((r) => (
              <li key={r.label}>
                <span className="sc-repere-label">{r.label}</span>
                <span className="sc-repere-txt">{r.txt}</span>
              </li>
            ))}
          </ul>
        </div>
        <figure className="sc-poster" data-reveal>
          <img
            src={asset('/assets/refonte/affiche-flag.jpg')}
            alt="Équipe de flag football mixte des Pionniers de Touraine, qualifiée en demi-finales de conférence"
            loading="lazy"
          />
          <figcaption>Flag mixte : qualifiés en demi-finales · Conférence Nord</figcaption>
        </figure>
      </div>
    </section>
  );
}
