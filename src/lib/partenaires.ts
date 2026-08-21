/**
 * Partenaires actuels du club, dans l'ordre d'affichage.
 * Les logos sont dans public/assets/partenaires/ ; les chemins sont préfixés
 * par le basePath via asset() côté composant.
 *
 * Pas d'URL de site : on ne les connaît pas, on ne les invente pas.
 */
export type Partenaire = {
  nom: string;
  fichier: string;
  description: string;
};

export const PARTENAIRES: Partenaire[] = [
  {
    nom: 'La Tête dans le Fût',
    fichier: '/assets/partenaires/la-tete-dans-le-fut.webp',
    description: 'Cave et bar à Tours',
  },
  {
    nom: "Mc Cool's Irish Pub",
    fichier: '/assets/partenaires/mc-cools.webp',
    description: 'Pub irlandais à Tours',
  },
  {
    nom: 'B&G',
    fichier: '/assets/partenaires/b-et-g.webp',
    description: 'Créateur d’espace tertiaire',
  },
  {
    nom: 'Pano sign’service Tours',
    fichier: '/assets/partenaires/pano-sign-service.webp',
    description: 'Enseignes et signalétique',
  },
  {
    nom: 'Basilic & Co',
    fichier: '/assets/partenaires/basilic-and-co.webp',
    description: 'Restauration',
  },
  {
    nom: 'RP Technic',
    fichier: '/assets/partenaires/rp-technic.webp',
    description: 'Solutions techniques',
  },
  {
    nom: 'Schmidt',
    fichier: '/assets/partenaires/schmidt.webp',
    description: 'Cuisines et aménagement',
  },
  {
    nom: 'La Grande Récré Tours',
    fichier: '/assets/partenaires/la-grande-recre.webp',
    description: 'Jeux et jouets',
  },
];
