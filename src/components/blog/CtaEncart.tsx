import { REJOINDRE_TUNNEL_URL } from '@/lib/infos';

/** Test de poste : il vit sur le site de recrutement, pas sur celui-ci. */
const QUIZ_URL = 'https://recrutement.pionniersdetouraine.fr/quel-poste-football-americain/';

/**
 * Encart CTA posé dans la zone de lecture claire des articles.
 * Aucun tunnel n'est monté sur ce site : les deux variantes pointent en lien
 * absolu vers le site de recrutement.
 * - variante « tunnel » : le hash #rejoindre ouvre le tunnel à l'arrivée ;
 * - variante « quiz » : la page du test de poste.
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
      <a className="sc-btn" href={QUIZ_URL}>{bouton ?? 'Je fais le test'}</a>
    </aside>
  );
}
