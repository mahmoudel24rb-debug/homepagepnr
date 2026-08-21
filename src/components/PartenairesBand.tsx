import Link from 'next/link';
import YardLine from './YardLine';
import { asset } from '@/lib/asset';
import { PARTENAIRES } from '@/lib/partenaires';

/**
 * Bandeau de réassurance : les partenaires actuels du club.
 * Les logos étant fournis sur fond blanc, chaque carte pose un aplat crème
 * (grille .sc-partenaires) plutôt que le verre bordeaux des .sc-card.
 */
export default function PartenairesBand() {
  return (
    <section className="sc-sec" id="partenaires">
      <YardLine n="40" />
      <div className="sc-wrap">
        <div data-reveal>
          <p className="sc-eyebrow">Ils nous font confiance</p>
          <h2 className="sc-title">Nos partenaires.</h2>
          <p className="sc-lead">
            Des entreprises tourangelles qui soutiennent le club saison après saison : équipements,
            déplacements, événements. Sans elles, rien de tout cela ne serait possible.
          </p>
        </div>

        <div className="sc-partenaires" data-reveal>
          {PARTENAIRES.map((p) => (
            <div key={p.nom} className="sc-partenaire">
              <img
                src={asset(p.fichier)}
                alt={`Logo ${p.nom}, partenaire des Pionniers de Touraine`}
                loading="lazy"
              />
              <p className="sc-partenaire-nom">{p.nom}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 34 }} data-reveal>
          <Link className="sc-btn-ghost" href="/partenaires/">
            Devenir partenaire
          </Link>
        </div>
      </div>
    </section>
  );
}
