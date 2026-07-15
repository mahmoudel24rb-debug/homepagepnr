/**
 * Données réelles du club (source : pionniersdetouraine.fr / infos pratiques).
 * Centralisées ici pour le contenu des sections ET les données structurées SEO.
 */

export const CLUB = {
  nom: 'Pionniers de Touraine',
  fondation: '1987',
  siteUrl: 'https://pionniersdetouraine.fr',
  description:
    "Club de football américain et de flag football à Tours depuis 1987 : équipe senior, juniors U18, flag mixte et école de flag au stade de la Chambrerie.",
};

export const STADE = {
  nom: 'Stade de la Chambrerie',
  rue: 'Rue Tartifume',
  codePostal: '37100',
  ville: 'Tours',
  region: 'Centre-Val de Loire',
  pays: 'FR',
};

export const ACCES = [
  { mode: 'En bus', detail: 'Ligne 2, arrêt Maréchal Juin, ou ligne 12, arrêt Chambrerie / Giraudoux : 5 minutes à pied.' },
  { mode: 'En voiture', detail: 'Autoroute A10, sortie n°19 (Tours Nord) à 5 minutes · périphérique de Tours Nord à 3 minutes.' },
];

export const HORAIRES = [
  { cat: 'Seniors · Football américain', heures: 'Lundi & jeudi · 20h30 à 22h30' },
  { cat: 'Flag mixte seniors', heures: 'Lundi & jeudi · 20h30 à 22h30' },
  { cat: 'Juniors · Foot US & flag', heures: 'Lundi & jeudi · 19h00 à 20h30' },
  { cat: 'École de flag', heures: 'Samedi · 10h00 à 12h00' },
];

export const RESEAUX = [
  { nom: 'Facebook', url: 'https://www.facebook.com/p/Pionniers-de-Touraine-61578271450029/' },
  { nom: 'Instagram', url: 'https://www.instagram.com/pionniersdetouraine/' },
  { nom: 'TikTok', url: 'https://www.tiktok.com/@pionniersdetouraine' },
];

/** Parcours de recrutement en ligne (landing « Nous rejoindre »). */
export const REJOINDRE_URL = 'https://mahmoudel24rb-debug.github.io/lppionnier/';
