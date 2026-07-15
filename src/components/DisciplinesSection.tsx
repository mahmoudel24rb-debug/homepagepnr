import { FaArrowRight } from 'react-icons/fa';
import { asset } from '@/lib/asset';
import { REJOINDRE_URL } from '@/lib/infos';

export default function DisciplinesSection() {
  return (
    <section className="hp-sec" id="disciplines">
      <div className="hp-wrap">
        <div data-reveal>
          <p className="hp-eyebrow">Nos disciplines</p>
          <h2 className="hp-h2">Deux sports, un même terrain.</h2>
        </div>
        <div className="hp-cards" data-reveal>
          <article className="hp-card">
            <img
              className="hp-card-badge"
              src={asset('/assets/refonte/badge-1-footus.svg')}
              alt="Écusson Foot US & Flag des Pionniers de Touraine"
              loading="lazy"
            />
            <h3>Le football américain à Tours</h3>
            <div className="hp-chips">
              <span className="hp-chip">Au contact</span>
              <span className="hp-chip">Championnat</span>
              <span className="hp-chip">Seniors &amp; U18</span>
            </div>
            <p>
              Casque, épaulières et stratégie : l&apos;équipe senior évolue en championnat et
              s&apos;entraîne deux fois par semaine. La progression de chaque athlète est encadrée
              par le PPP, le Pionniers Programme Performance : préparation physique, technique,
              tactique et mentale. Aucune expérience exigée pour commencer.
            </p>
            <a className="hp-card-link" href={REJOINDRE_URL}>
              Essayer le foot US <FaArrowRight size={12} />
            </a>
          </article>
          <article className="hp-card">
            <img
              className="hp-card-badge"
              src={asset('/assets/refonte/badge-2-olympique.svg')}
              alt="Écusson Sport Olympique · JO de Los Angeles 2028"
              loading="lazy"
            />
            <h3>Le flag football, olympique &amp; sans contact</h3>
            <div className="hp-chips">
              <span className="hp-chip">Sans contact</span>
              <span className="hp-chip">Mixte</span>
              <span className="hp-chip">5 contre 5</span>
              <span className="hp-chip">JO 2028</span>
            </div>
            <p>
              La version sans contact du football américain : au lieu de plaquer, on arrache un
              ruban porté à la ceinture. Rapide, stratégique et accessible à tous les profils,
              le flag se joue en mixte et devient sport olympique aux JO de Los Angeles 2028.
              En loisir comme en compétition.
            </p>
            <a className="hp-card-link" href={REJOINDRE_URL}>
              Essayer le flag <FaArrowRight size={12} />
            </a>
          </article>
        </div>
        <div className="hp-aider" data-reveal>
          <p>
            <strong>Envie de faire vivre le club autrement ?</strong> Bénévolat, coaching,
            arbitrage, compétences pro : il y a une place pour chacun.
          </p>
          <a className="hp-ghost" href={REJOINDRE_URL}>Nous rejoindre</a>
        </div>
      </div>
    </section>
  );
}
