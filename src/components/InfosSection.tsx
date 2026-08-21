import { FaMapMarkerAlt } from 'react-icons/fa';
import { STADE, HORAIRES, ACCES } from '@/lib/infos';

export default function InfosSection() {
  return (
    <section className="hp-sec" id="infos">
      <div className="hp-wrap">
        <div data-reveal>
          <p className="hp-eyebrow">Infos pratiques</p>
          <h2 className="hp-h2">Stade, horaires &amp; accès.</h2>
        </div>
        <div className="hp-infos-grid" data-reveal>
          <div className="hp-panel">
            <h3>Le stade</h3>
            <address className="hp-address">
              <div className="hp-address-row">
                <FaMapMarkerAlt size={15} aria-hidden />
                <span>
                  {STADE.nom}
                  <br />
                  {STADE.rue}, {STADE.codePostal} {STADE.ville}
                </span>
              </div>
            </address>
            <p className="hp-p" style={{ fontSize: 14, marginTop: 14 }}>
              Tous les entraînements de football américain et de flag football ont lieu au
              {' '}{STADE.nom}, à {STADE.ville} Nord.
            </p>
          </div>
          <div className="hp-panel">
            <h3>Entraînements</h3>
            <div>
              {HORAIRES.map((h) => (
                <div key={h.cat} className="hp-horaire">
                  <span className="hp-horaire-cat">{h.cat}</span>
                  <span className="hp-horaire-times">
                    {h.creneaux.map((c) => (
                      <span key={c}>{c}</span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="hp-panel">
            <h3>Comment venir</h3>
            {ACCES.map((a) => (
              <div key={a.mode} className="hp-access-row">
                <span className="hp-access-mode">{a.mode}</span>
                <p>{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
