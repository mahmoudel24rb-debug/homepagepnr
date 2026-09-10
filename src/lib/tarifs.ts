/**
 * Tarifs officiels des adhésions, saison 2026/2027.
 *
 * Source unique : les formules validées par le club sur le site de recrutement
 * (src/data/formules.ts, tableau FR). Aucun montant ne doit être ajouté ici
 * sans figurer dans cette source : ces chiffres alimentent à la fois
 * l'affichage des pages et les nœuds Offer des données structurées.
 */

export const HELLOASSO_ADHESION =
  'https://www.helloasso.com/associations/pionniers-de-touraine/adhesions/adhesion-2026-2027';

export type Tarif = {
  section: 'foot-us' | 'flag' | 'ecole';
  nom: string;
  tag: 'Compétition' | 'Loisir' | 'École';
  /** Montant numérique, pour schema.org (jamais affiché tel quel). */
  prix: number;
  /** Montant affiché, format français. */
  prixAffiche: string;
  periode: '/saison';
  /** À qui s'adresse la formule (une phrase). */
  qui: string;
  inclus: string[];
  paiement3x?: string;
};

export const TARIFS: Tarif[] = [
  {
    section: 'foot-us',
    nom: 'Foot US seniors',
    tag: 'Compétition',
    prix: 249.99,
    prixAffiche: '249,99 €',
    periode: '/saison',
    qui: 'Équipe D2 senior, championnat au contact, nés en 2007 et avant',
    inclus: ['Licence FFFA incluse', 'Entraînements et matchs', 'Encadrement diplômé'],
    paiement3x: '3 × 83,33 €',
  },
  {
    section: 'foot-us',
    nom: 'Foot US juniors U18',
    tag: 'Compétition',
    prix: 150,
    prixAffiche: '150 €',
    periode: '/saison',
    qui: 'Équipe U18, nés en 2009, 2010 et 2011',
    inclus: ['Licence FFFA incluse', 'Entraînements encadrés', 'Initiation au contact'],
    paiement3x: '3 × 50 €',
  },
  {
    section: 'flag',
    nom: 'Flag seniors compétition',
    tag: 'Compétition',
    prix: 150,
    prixAffiche: '150 €',
    periode: '/saison',
    qui: 'Équipe senior mixte sans contact, nés en 2008 et avant',
    inclus: [
      'Licence FFFA incluse',
      'Championnat mixte et Coupe de France',
      'Entraînements et matchs',
    ],
    paiement3x: '3 × 50 €',
  },
  {
    section: 'flag',
    nom: 'Flag seniors loisir',
    tag: 'Loisir',
    prix: 100,
    prixAffiche: '100 €',
    periode: '/saison',
    qui: 'Pratique loisir sans compétition, nés en 2008 et avant',
    inclus: [
      'Licence FFFA incluse',
      'Entraînements hebdomadaires',
      'Format 5 contre 5 sans contact',
    ],
  },
  {
    section: 'ecole',
    nom: 'École de flag',
    tag: 'École',
    prix: 100,
    prixAffiche: '100 €',
    periode: '/saison',
    qui: 'U7 à U18, nés de 2009 à 2021',
    inclus: [
      'Licence FFFA incluse',
      'Encadrement diplômé',
      'Découverte du flag',
      'Championnat jeunes U13, U15, U18',
      'Programme NFL Flag U13 et U15',
    ],
  },
];
