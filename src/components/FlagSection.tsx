import YardLine from './YardLine';
import { asset } from '@/lib/asset';
import { REJOINDRE_URL } from '@/lib/infos';

export default function FlagSection() {
  return (
    <section className="sc-sec" id="flag">
      <YardLine n="30" />
      <div className="sc-wrap sc-club-grid">
        <div data-reveal>
          <p className="sc-eyebrow">Flag football</p>
          <h2 className="sc-title">
            Le flag football,
            <br />
            sport olympique &amp; sans contact.
          </h2>
          <div className="sc-chips" style={{ marginTop: 16 }}>
            <span className="sc-chip">Sans contact</span>
            <span className="sc-chip">Mixte</span>
            <span className="sc-chip">5 contre 5</span>
            <span className="sc-chip">JO 2028</span>
          </div>
          <p className="hp-p">
            Le <strong>flag football</strong> est la version sans contact du football américain :
            rapide, stratégique et accessible à tous les profils. À Tours, l'équipe
            <strong> mixte seniors</strong> des Pionniers s'entraîne le lundi et le jeudi et
            participe aux compétitions de sa conférence.
          </p>
          <p className="hp-p">
            Discipline en plein essor, le flag devient <strong>sport olympique aux JO de
            Los Angeles 2028</strong>. C'est le moment idéal pour s'y mettre, en loisir comme en
            compétition.
          </p>
          <div className="hp-section-cta">
            <a className="sc-btn" href={REJOINDRE_URL}>Essayer le flag</a>
          </div>
        </div>
        <div className="hp-badges-col" data-reveal>
          <img src={asset('/assets/refonte/badge-2-olympique.svg')} alt="Écusson Sport Olympique · JO de Los Angeles 2028" loading="lazy" />
          <img src={asset('/assets/refonte/badge-5-ecole.svg')} alt="Écusson École de Flag" loading="lazy" />
          <img src={asset('/assets/refonte/badge-1-footus.svg')} alt="Écusson Foot US & Flag" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
