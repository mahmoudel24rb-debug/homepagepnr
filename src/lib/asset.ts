/**
 * Préfixe les chemins d'assets avec le basePath GitHub Pages.
 * Doit rester aligné avec `basePath` dans next.config.mjs.
 * (En production sur pionniersdetouraine.fr : passer BASE_PATH à ''.)
 */
export const BASE_PATH = '/homepagepnr';

export const asset = (path: string) => `${BASE_PATH}${path}`;
