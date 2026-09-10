import type { ReactNode } from 'react';
import { REJOINDRE_TUNNEL_URL } from '@/lib/infos';

/**
 * Bloc « réponse directe » placé sous le hero des pages de section : un
 * paragraphe factuel (qui, quoi, quand, où, combien, comment essayer) et, en
 * colonne de droite, les repères essentiels de la page. Même grille sc-two
 * que les autres sections pour ne pas laisser la colonne de droite vide.
 */
type Props = {
  /** Paragraphe de réponse directe (130 à 160 mots). */
  children: ReactNode;
  /** Titre de l'encart de droite. */
  titre?: string;
  /** Repères courts (créneaux, lieu, public, tarif, essai). */
  reperes: ReactNode[];
  /** Libellé du bouton de l'encart (lien vers le tunnel de recrutement). */
  bouton?: string;
};

export default function ReponseDirecte({ children, titre = 'En un coup d’œil', reperes, bouton = 'Venir essayer' }: Props) {
  return (
    <section className="sc-sec sc-resume" id="en-resume">
      <div className="sc-wrap">
        <div className="sc-two" style={{ marginTop: 0 }} data-reveal>
          <div className="sc-body">
            <p className="sc-legal-text sc-resume-text">{children}</p>
          </div>
          <aside className="sc-aside">
            <div className="sc-panel">
              <h3 className="sc-panel-title">{titre}</h3>
              <ul className="sc-liste">
                {reperes.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
              <div className="sc-ctas" style={{ marginTop: 18 }}>
                <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>
                  {bouton}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
