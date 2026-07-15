import { asset } from '@/lib/asset';
import { REJOINDRE_URL } from '@/lib/infos';

export default function PPPBand() {
  return (
    <section className="hp-dark">
      <div className="hp-wrap hp-ppp-grid" data-reveal>
        <img
          className="hp-ppp-logo"
          src={asset('/assets/logo-ppp.png')}
          alt="Logo du Pionniers Programme Performance"
          loading="lazy"
        />
        <div>
          <p className="hp-eyebrow">Pionniers Programme Performance</p>
          <h2 className="hp-h2">La méthode maison pour viser plus haut.</h2>
          <p className="hp-p">
            Préparation physique, technique, tactique et mentale : le PPP structure la progression
            de chaque athlète, à chaque entraînement. Débutant motivé ou joueur confirmé, chacun
            progresse dans un cadre exigeant et accessible.
          </p>
          <div className="hp-section-cta">
            <a className="sc-btn" href={REJOINDRE_URL}>Rejoindre le programme</a>
          </div>
        </div>
      </div>
    </section>
  );
}
