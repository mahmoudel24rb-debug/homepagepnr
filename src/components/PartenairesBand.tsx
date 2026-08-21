import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { asset } from '@/lib/asset';
import { PARTENAIRES } from '@/lib/partenaires';

/** Bandeau clair de réassurance : les partenaires actuels, juste avant le footer. */
export default function PartenairesBand() {
  return (
    <section className="hp-band" id="partenaires">
      <div className="hp-wrap" data-reveal>
        <div className="hp-band-head">
          <div>
            <p className="hp-eyebrow">Ils nous font confiance</p>
            <h2 className="hp-band-title">Nos partenaires</h2>
          </div>
          <Link className="hp-band-link" href="/partenaires/">
            Devenir partenaire <FaArrowRight size={12} />
          </Link>
        </div>
        <div className="hp-band-logos">
          {PARTENAIRES.map((p) => (
            <img
              key={p.nom}
              src={asset(p.fichier)}
              alt={`Logo ${p.nom}, partenaire des Pionniers de Touraine`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
