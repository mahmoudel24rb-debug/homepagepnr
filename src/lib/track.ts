/**
 * Mesure d'audience minimaliste (GoatCounter) du site vitrine.
 * Aucune donnée personnelle n'est envoyée : uniquement des noms d'événements
 * et des identifiants d'offres. Jamais le texte saisi par l'utilisateur.
 */

/**
 * Code du site GoatCounter · vide = tracking désactivé.
 * Renseigner ici un code GoatCounter DÉDIÉ à pionniersdetouraine.fr pour
 * activer la mesure (le compte du site de recrutement ne doit pas être
 * réutilisé : les audiences seraient mélangées).
 */
export const GC_SITE: string = '';

type GoatCounterCount = (vars: { path: string; title?: string; event?: boolean }) => void;

declare global {
  interface Window {
    goatcounter?: { count?: GoatCounterCount };
  }
}

/**
 * Envoie un événement sous forme de chemin hiérarchique :
 * `event/<nom>` ou `event/<nom>/<valeur>/<valeur>…`.
 */
export function track(event: string, props?: Record<string, string | number | boolean>): void {
  if (!GC_SITE || typeof window === 'undefined') return;

  const suffix = props ? '/' + Object.values(props).map(String).join('/') : '';
  const path = 'event/' + event + suffix;

  const count = window.goatcounter?.count;
  if (typeof count === 'function') {
    count({ path, event: true });
    return;
  }

  // Repli si le script n'est pas (encore) chargé : pixel de comptage.
  const url =
    `https://${GC_SITE}.goatcounter.com/count` +
    `?p=${encodeURIComponent('/' + path)}&e=true&rnd=${Math.random().toString(36).slice(2)}`;
  new Image().src = url;
}
