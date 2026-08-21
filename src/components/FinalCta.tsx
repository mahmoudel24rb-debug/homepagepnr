import { ArrowRight } from 'lucide-react';
import { REJOINDRE_TUNNEL_URL } from '@/lib/infos';

/** CTA final : bande sombre vers le parcours « Nous rejoindre ». */
export default function FinalCta() {
  return (
    <section className="hp-dark hp-final">
      <div className="hp-wrap" data-reveal>
        <p className="hp-eyebrow">Kickoff · Saison 2026/2027</p>
        <h2 className="hp-h2">
          Prêt à entrer
          <br />
          sur le terrain ?
        </h2>
        <p className="hp-p" style={{ maxWidth: 540 }}>
          Performer sur le terrain, s&apos;investir dans le club ou soutenir le projet : le
          parcours en ligne vous guide vers votre place en deux minutes.
        </p>
        <a className="rf-cta" href={REJOINDRE_TUNNEL_URL}>
          Commencer le parcours
          <span className="rf-cta-arrow">
            <ArrowRight size={17} strokeWidth={2.6} />
          </span>
        </a>
        <p className="rf-note">2 minutes · sans engagement</p>
      </div>
    </section>
  );
}
