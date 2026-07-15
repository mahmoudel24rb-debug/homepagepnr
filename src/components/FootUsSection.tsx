import YardLine from './YardLine';
import { asset } from '@/lib/asset';
import { REJOINDRE_URL } from '@/lib/infos';

export default function FootUsSection() {
  return (
    <section className="sc-sec sc-disciplines" id="foot-us">
      <YardLine n="20" />
      <div className="sc-wrap sc-club-grid">
        <figure className="sc-poster" data-reveal>
          <img
            src={asset('/assets/refonte/affiche-ppp.jpg')}
            alt="Joueur de football américain des Pionniers de Touraine, affiche du Pionniers Programme Performance"
            loading="lazy"
          />
          <figcaption>PPP : le Pionniers Programme Performance</figcaption>
        </figure>
        <div data-reveal>
          <p className="sc-eyebrow">Football américain</p>
          <h2 className="sc-title">
            Le foot US à Tours,
            <br />
            du débutant au compétiteur.
          </h2>
          <div className="sc-chips" style={{ marginTop: 16 }}>
            <span className="sc-chip">Au contact</span>
            <span className="sc-chip">Championnat</span>
            <span className="sc-chip">Seniors &amp; U18</span>
          </div>
          <p className="hp-p">
            L'équipe senior des Pionniers évolue en <strong>championnat de football
            américain</strong> et s'entraîne deux fois par semaine au stade de la Chambrerie.
            Casque, épaulières, stratégie : un sport de contact intense où l'engagement et
            l'esprit d'équipe ne font qu'un.
          </p>
          <p className="hp-p">
            La progression de chaque athlète est encadrée par le <strong>PPP, Pionniers
            Programme Performance</strong> : préparation physique, technique, tactique et
            mentale, à chaque entraînement. Aucune expérience préalable n'est exigée, la
            <strong> semaine découverte est offerte</strong>.
          </p>
          <div className="hp-section-cta">
            <a className="sc-btn" href={REJOINDRE_URL}>Essayer le foot US</a>
            <a className="sc-btn-ghost" href="#infos">Horaires seniors &amp; juniors</a>
          </div>
        </div>
      </div>
    </section>
  );
}
