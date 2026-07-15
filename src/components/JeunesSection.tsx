import { asset } from '@/lib/asset';
import { REJOINDRE_URL } from '@/lib/infos';

export default function JeunesSection() {
  return (
    <section className="sc-sec" id="jeunes" style={{ paddingTop: 0 }}>
      <div className="sc-wrap">
        <div className="hp-band" data-reveal>
          <img
            className="hp-band-badge"
            src={asset('/assets/refonte/badge-4-u18.svg')}
            alt="Écusson U18 des Pionniers de Touraine"
            loading="lazy"
          />
          <div>
            <h3>Jeunes &amp; école de flag</h3>
            <p>
              Les juniors U18 pratiquent le football américain et le flag le lundi et le jeudi ;
              l'école de flag accueille les plus jeunes le samedi matin. Encadrement adapté,
              valeurs éducatives et plaisir de progresser ensemble.
            </p>
          </div>
          <a className="sc-btn" href={REJOINDRE_URL}>Inscrire mon enfant</a>
        </div>
      </div>
    </section>
  );
}
