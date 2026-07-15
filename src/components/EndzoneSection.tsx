import { ArrowRight } from 'lucide-react';
import YardLine from './YardLine';
import { REJOINDRE_URL } from '@/lib/infos';

/** CTA final : l'en-but au bout de la descente de terrain, vers le parcours « Nous rejoindre ». */
export default function EndzoneSection() {
  return (
    <section className="sc-sec sc-endzone">
      <YardLine n="En-but" />
      <div className="sc-wrap" data-reveal>
        <p className="sc-eyebrow">Kickoff · Saison 2026/2027</p>
        <h2 className="sc-title">
          Prêt à entrer
          <br />
          sur le terrain ?
        </h2>
        <p className="sc-lead" style={{ maxWidth: 560 }}>
          Performer sur le terrain, s&apos;investir dans le club ou soutenir le projet : le
          parcours en ligne vous guide vers votre place en deux minutes.
        </p>
        <a className="rf-cta" href={REJOINDRE_URL}>
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
