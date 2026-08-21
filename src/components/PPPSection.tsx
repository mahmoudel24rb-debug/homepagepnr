import YardLine from './YardLine';
import PPPVideo from './PPPVideo';
import { asset } from '@/lib/asset';
import { REJOINDRE_TUNNEL_URL } from '@/lib/infos';

/**
 * Bloc « Pionniers Programme Performance » : gabarit .sc-ppp-panel de la
 * landing de recrutement. Le CTA renvoie vers le tunnel du site recrutement.
 */
export default function PPPSection() {
  return (
    <section className="sc-sec" id="ppp">
      <YardLine n="30" />
      <div className="sc-wrap">
        <div className="sc-ppp-panel" data-reveal>
          <figure className="sc-ppp-poster" style={{ margin: 0 }}>
            <PPPVideo />
          </figure>
          <div className="sc-ppp-body">
            <img
              className="sc-ppp-logo"
              src={asset('/assets/logo-ppp.png')}
              alt="Logo PPP"
              loading="lazy"
            />
            <p className="sc-eyebrow">Pionniers Programme Performance</p>
            <h2 className="sc-title">La méthode maison pour viser plus haut.</h2>
            <p className="sc-lead">
              Préparation physique, technique, tactique et mentale : <strong>le PPP</strong>{' '}
              structure <strong>la progression</strong> de chaque athlète,
              <br className="br-mobile" /> à chaque entraînement. Débutant motivé ou joueur
              confirmé : <strong>tous les profils de joueurs</strong> progressent dans un cadre
              exigeant et accessible.
            </p>
            <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>
              Rejoindre le programme
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
