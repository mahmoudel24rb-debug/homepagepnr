import { asset } from '@/lib/asset';

const REPERES = [
  { chiffre: '1987', detail: 'Fondation du club à Tours : le football américain arrive en Touraine.' },
  { chiffre: 'Deux sports', detail: 'Football américain au contact, flag football sans contact.' },
  { chiffre: 'Quatre collectifs', detail: 'Seniors foot US, flag mixte, juniors U18 et école de flag.' },
  { chiffre: 'Cap 2028', detail: 'Le flag football devient olympique aux JO de Los Angeles.' },
];

export default function ClubSection() {
  return (
    <section className="hp-sec" id="club">
      <div className="hp-wrap">
        <div className="hp-club-grid">
          <div data-reveal>
            <p className="hp-eyebrow">Le club</p>
            <h2 className="hp-h2">
              Le football américain
              <br />
              au cœur de la Touraine.
            </h2>
            <p className="hp-p">
              Les <strong>Pionniers de Touraine</strong> sont le club de football américain et de
              flag football de <strong>Tours</strong>, en Indre-et-Loire. Depuis 1987, le club
              forme des athlètes de tous âges et de tous niveaux : équipe senior en championnat,
              juniors U18, flag mixte et école de flag pour les plus jeunes.
            </p>
            <blockquote className="hp-quote">
              « Dans ce club, nous ne sommes pas juste des Pionniers, nous sommes une famille. »
            </blockquote>
          </div>
          <figure className="hp-photo" data-reveal>
            <img
              src={asset('/assets/refonte/affiche-flag.jpg')}
              alt="Équipe de flag football mixte des Pionniers de Touraine, qualifiée en demi-finales de conférence"
              loading="lazy"
            />
            <figcaption>Flag mixte : qualifiés en demi-finales · Conférence Nord</figcaption>
          </figure>
        </div>
        <div className="hp-reperes" data-reveal>
          {REPERES.map((r) => (
            <div key={r.chiffre} className="hp-repere">
              <strong>{r.chiffre}</strong>
              <span>{r.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
