import { ArrowRight } from 'lucide-react';
import YardLine from './YardLine';
import { mobileLines } from '@/lib/mobileLines';
import { REJOINDRE_TUNNEL_URL } from '@/lib/infos';

/**
 * CTA final : l'en-but au bout de la descente de terrain.
 * Reprend le bouton exact du hero (.rf-cta) pour boucler la boucle.
 */
const LIGNES = [
  'Performer sur le terrain, t’investir\nou soutenir le projet :',
  'réponds à quelques questions',
  'et le staff des Pionniers te recontacte.',
];

export default function EndzoneSection() {
  return (
    <section className="sc-sec sc-endzone">
      <YardLine n="endzone" />
      <div className="sc-wrap" data-reveal>
        <p className="sc-eyebrow">Kickoff · Saison 2026/2027</p>
        <h2 className="sc-title">
          Prêt à entrer
          <br />
          sur le terrain ?
        </h2>
        <p className="sc-lead" style={{ maxWidth: 560 }}>
          {LIGNES.map((ligne, i) => (
            <span key={ligne}>
              {i > 0 && <br />}
              {mobileLines(ligne)}
            </span>
          ))}
        </p>
        <a className="rf-cta" href={REJOINDRE_TUNNEL_URL}>
          Nous rejoindre
          <span className="rf-cta-arrow">
            <ArrowRight size={17} strokeWidth={2.6} />
          </span>
        </a>
        <p className="rf-note">2 minutes · sans engagements</p>
      </div>
    </section>
  );
}
