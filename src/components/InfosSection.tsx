import YardLine from './YardLine';
import StadeMap from './StadeMap';
import { ACCES, HORAIRES } from '@/lib/infos';

/**
 * Infos pratiques : horaires officiels des entraînements, carte du stade et
 * moyens d'accès. Gabarit .sc-infos-grid / .sc-panel de la landing.
 */
export default function InfosSection() {
  return (
    <section className="sc-sec" id="infos">
      <YardLine n="10" />
      <div className="sc-wrap">
        <div data-reveal>
          <p className="sc-eyebrow">Infos pratiques</p>
          <h2 className="sc-title">On t’attend au stade.</h2>
          <p className="sc-lead">
            Les Pionniers s’entraînent au <strong>stade de la Chambrerie</strong>, à Tours Nord.
            Voici les créneaux de chaque collectif et les façons d’y venir.
          </p>
        </div>

        <div className="sc-infos-grid" data-reveal>
          <StadeMap />
          <div className="sc-panel">
            <h3 className="sc-panel-title">Entraînements</h3>
            <div className="sc-horaires">
              {HORAIRES.map((h) => (
                <div key={h.cat} className="sc-horaire">
                  <span className="sc-horaire-cat">{h.cat}</span>
                  <span className="sc-horaire-time">{h.creneaux.join(' / ')}</span>
                </div>
              ))}
            </div>

            <h3 className="sc-panel-title" style={{ marginTop: 30 }}>
              Y accéder
            </h3>
            <div className="sc-horaires">
              {ACCES.map((a) => (
                <div key={a.mode} className="sc-horaire">
                  <span className="sc-horaire-cat">{a.mode}</span>
                  <span className="sc-horaire-time" style={{ color: 'var(--sc-cream-72)' }}>
                    {a.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
