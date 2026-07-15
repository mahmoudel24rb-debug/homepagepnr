import { asset } from '@/lib/asset';
import { REJOINDRE_URL } from '@/lib/infos';

export default function JeunesSection() {
  return (
    <section className="hp-sec" id="jeunes">
      <div className="hp-wrap hp-jeunes">
        <img
          className="hp-jeunes-badge"
          src={asset('/assets/refonte/badge-5-ecole.svg')}
          alt="Écusson École de Flag des Pionniers de Touraine"
          loading="lazy"
          data-reveal
        />
        <div data-reveal>
          <p className="hp-eyebrow">Jeunes &amp; école de flag</p>
          <h2 className="hp-h2">Le foot US et le flag dès le plus jeune âge.</h2>
          <p className="hp-p">
            Les <strong>juniors U18</strong> pratiquent le football américain et le flag le lundi
            et le jeudi de 19h00 à 20h30 ; l&apos;<strong>école de flag</strong> accueille les plus
            jeunes le samedi de 10h00 à 12h00. Encadrement adapté à chaque âge, valeurs éducatives
            et plaisir de progresser ensemble.
          </p>
          <div className="hp-section-cta">
            <a className="sc-btn" href={REJOINDRE_URL}>Inscrire mon enfant</a>
            <a className="hp-ghost" href="#infos">Voir les horaires</a>
          </div>
        </div>
      </div>
    </section>
  );
}
