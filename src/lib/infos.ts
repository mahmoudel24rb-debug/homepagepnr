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

/**
 * Horaires officiels des entraînements, validés par le club.
 * `creneaux` sert à l'affichage (une ligne par créneau) ; `heures` reste une
 * version compacte sur une seule ligne, pratique pour les résumés et le SEO.
 */
export const HORAIRES = [
  {
    cat: 'Seniors · Foot US compétition',
    creneaux: ['Lundi & vendredi · 20h30 à 22h30', 'Mercredi · 21h00 à 23h00'],
    heures: 'Lundi & vendredi 20h30 à 22h30, mercredi 21h00 à 23h00',
  },
  {
    cat: 'Flag mixte seniors',
    creneaux: ['Lundi & jeudi · 20h30 à 22h30'],
    heures: 'Lundi & jeudi 20h30 à 22h30',
  },
  {
    cat: 'Juniors · Foot US & flag',
    creneaux: ['Lundi & jeudi · 19h00 à 21h00'],
    heures: 'Lundi & jeudi 19h00 à 21h00',
  },
  {
    cat: 'École de flag',
    creneaux: ['Samedi · 10h00 à 12h00'],
    heures: 'Samedi 10h00 à 12h00',
  },
];

/** Raccourcis vers un créneau précis, pour les pages de section. */
export const horairesDe = (cat: string) => HORAIRES.filter((h) => h.cat === cat);

/** Contact officiel du club (recrutement et informations générales). */
export const CONTACT = {
  email: 'recrutement@pionniersdetouraine.fr',
  telephone: '07 87 01 80 26',
  telHref: 'tel:+33787018026',
};

export const RESEAUX = [
  { nom: 'Facebook', url: 'https://www.facebook.com/p/Pionniers-de-Touraine-61578271450029/' },
  { nom: 'Instagram', url: 'https://www.instagram.com/pionniersdetouraine/' },
  { nom: 'TikTok', url: 'https://www.tiktok.com/@pionniersdetouraine' },
];

/** Site de recrutement (landing « Nous rejoindre »), pour les mentions génériques. */
export const REJOINDRE_URL = 'https://recrutement.pionniersdetouraine.fr/';

/** Entrée directe dans le tunnel de recrutement, pour les CTA d'action. */
export const REJOINDRE_TUNNEL_URL = 'https://recrutement.pionniersdetouraine.fr/#rejoindre';

/** Boutique officielle du club. */
export const BOUTIQUE_URL = 'https://shop.pionniersdetouraine.fr/';
