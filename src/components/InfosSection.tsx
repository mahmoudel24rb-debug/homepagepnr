import { FaMapMarkerAlt } from 'react-icons/fa';
import YardLine from './YardLine';
import { STADE, HORAIRES, ACCES } from '@/lib/infos';

export default function InfosSection() {
  return (
    <section className="sc-sec sc-disciplines" id="infos">
      <YardLine n="40" />
      <div className="sc-wrap">
        <div data-reveal>
          <p className="sc-eyebrow">Infos pratiques</p>
          <h2 className="sc-title">Stade, horaires &amp; accès.</h2>
        </div>
        <div className="hp-infos-grid" data-reveal>
          <div className="sc-panel">
            <h3 className="sc-panel-title">Le stade</h3>
            <address className="hp-address">
              <span className="sc-contact-row">
                <FaMapMarkerAlt size={15} aria-hidden />
                <span>
                  {STADE.nom}
                  <br />
                  {STADE.rue}, {STADE.codePostal} {STADE.ville}
                </span>
              </span>
            </address>
            <p className="hp-p" style={{ fontSize: 14, marginTop: 10 }}>
              Tous les entraînements de football américain et de flag football ont lieu au
              {' '}{STADE.nom}, à {STADE.ville} Nord.
            </p>
          </div>
          <div className="sc-panel">
            <h3 className="sc-panel-title">Entraînements</h3>
            <div className="sc-horaires">
              {HORAIRES.map((h) => (
                <div key={h.cat} className="sc-horaire">
                  <span className="sc-horaire-cat">{h.cat}</span>
                  <span className="sc-horaire-time">{h.heures}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="sc-panel">
            <h3 className="sc-panel-title">Comment venir</h3>
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
