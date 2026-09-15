import Link from 'next/link';
import { REJOINDRE_TUNNEL_URL } from '@/lib/infos';

/** Test de poste : désormais intégré à l'article des postes, sur ce site. */
const QUIZ_URL = '/blog/postes-football-americain/#test';

/**
 * Encart CTA posé dans la zone de lecture claire des articles.
 * - variante « tunnel » : aucun tunnel n'est monté ici, lien absolu vers le
 *   site de recrutement où le hash #rejoindre l'ouvre à l'arrivée ;
 * - variante « quiz » : lien interne vers le test de poste posé dans l'article
 *   « postes de football américain » (ancre du H2 qui précède le test).
 */
export function CtaTunnel({ titre, texte, bouton }: { titre: string; texte: string; bouton: string }) {
  return (
    <aside className="blogc-cta">
      <p className="blogc-cta-title">{titre}</p>
      <p>{texte}</p>
      <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>{bouton}</a>
    </aside>
  );
}

export function CtaQuiz({ titre, texte, bouton }: { titre?: string; texte?: string; bouton?: string }) {
  return (
    <aside className="blogc-cta">
      <p className="blogc-cta-title">{titre ?? 'Quel poste est fait pour toi ?'}</p>
      <p>
        {texte ??
          'Réponds à 8 questions : notre algorithme de scouting, calibré sur les gabarits réels des joueurs NFL et NCAA, te propose ton poste idéal, en foot US ou en flag.'}
      </p>
      <Link className="sc-btn" href={QUIZ_URL}>{bouton ?? 'Je fais le test'}</Link>
    </aside>
  );
}

/** Encart vers une page du site (section, hub) : même habillage, lien interne. */
export function CtaPage({ titre, texte, bouton, href }: { titre: string; texte: string; bouton: string; href: string }) {
  return (
    <aside className="blogc-cta">
      <p className="blogc-cta-title">{titre}</p>
      <p>{texte}</p>
      <Link className="sc-btn" href={href}>{bouton}</Link>
    </aside>
  );
}
