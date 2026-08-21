import type { ComponentType } from 'react';
import ArticlePratiquer from '@/content/pratiquer-foot-us-france';
import ArticleFlag from '@/content/flag-football-cest-quoi';
import ArticleAdulte from '@/content/commencer-foot-us-adulte';
import ArticleSportCollectif from '@/content/sport-collectif-tours';
import ArticleSportEnfant from '@/content/sport-enfant-tours';
import ArticleSportContact from '@/content/sport-de-contact-tours';
import ArticleSportCombat from '@/content/sport-de-combat-tours';
import ArticleRentree from '@/content/quel-sport-rentree-2026-2027';

/**
 * Registre des articles du blog (FR uniquement : le SEO vise des requêtes
 * françaises). L'ordre du tableau = ordre d'affichage sur /blog/.
 * Le contenu de chaque article vit dans src/content/<slug>.tsx.
 */
export type ArticleMeta = {
  slug: string;
  /** H1 de l'article (et title SEO, tronqué si besoin via titleSeo) */
  titre: string;
  /** Variante courte pour le breadcrumb et les cartes */
  titreCourt: string;
  /** <title> exact (≤ 60 caractères de préférence) */
  titleSeo: string;
  /** Meta description (~150 caractères) */
  description: string;
  /** Clé d'emoji funnelIcons pour la carte d'archive */
  emoji: string;
  /** Dates ISO (affichées en français + datePublished/dateModified JSON-LD) */
  datePublication: string;
  dateModif: string;
  minutesLecture: number;
  motCle: string;
  content: ComponentType;
};

export const ARTICLES: ArticleMeta[] = [
  {
    slug: 'comment-pratiquer-le-football-americain-en-france',
    titre: 'Comment pratiquer le football américain en France : le guide complet pour débuter',
    titreCourt: 'Pratiquer le football américain en France',
    titleSeo: 'Pratiquer le football américain en France : guide débutant',
    description:
      'Âge, clubs, licence, équipement, premier entraînement : tout ce qu’il faut savoir pour débuter le football américain en France, expliqué par un club fondé en 1987.',
    emoji: 'foot-us',
    datePublication: '2026-08-20',
    dateModif: '2026-08-20',
    minutesLecture: 12,
    motCle: 'pratiquer le football américain en France',
    content: ArticlePratiquer,
  },
  {
    slug: 'flag-football-cest-quoi',
    titre: 'Flag football : règles, postes et où jouer à Tours',
    titreCourt: 'Flag football : règles et postes',
    titleSeo: 'Flag football : règles, postes et où jouer à Tours',
    description:
      'Le flag football expliqué : règles du 5 contre 5, postes et rôles, mixité, JO de Los Angeles 2028 et où jouer à Tours avec les Pionniers de Touraine.',
    emoji: 'flag',
    datePublication: '2026-08-20',
    dateModif: '2026-08-22',
    minutesLecture: 9,
    motCle: 'flag football tours',
    content: ArticleFlag,
  },
  {
    slug: 'commencer-le-football-americain-adulte',
    titre: 'Commencer le football américain à l’âge adulte : est-ce trop tard ?',
    titreCourt: 'Commencer le foot US à l’âge adulte',
    titleSeo: 'Commencer le football américain adulte : trop tard ?',
    description:
      'Débuter le foot US à 25, 30 ou 35 ans ? Gabarit, condition physique, règles : on démonte les idées reçues et on explique comment se passe une première saison.',
    emoji: 'seniors',
    datePublication: '2026-08-20',
    dateModif: '2026-08-20',
    minutesLecture: 10,
    motCle: 'commencer le football américain adulte',
    content: ArticleAdulte,
  },
  {
    slug: 'sport-collectif-tours',
    titre: 'Quel sport collectif pratiquer à Tours ? Le guide pour bien choisir',
    titreCourt: 'Quel sport collectif à Tours ?',
    titleSeo: 'Quel sport collectif pratiquer à Tours ? Le guide',
    description:
      'Foot, rugby, basket, hand, volley, foot US, flag : le panorama des sports collectifs à Tours et les bons critères pour choisir celui où tu vas rester.',
    emoji: 'partenaire',
    datePublication: '2026-08-22',
    dateModif: '2026-08-22',
    minutesLecture: 12,
    motCle: 'sport collectif Tours',
    content: ArticleSportCollectif,
  },
  {
    slug: 'quel-sport-pour-mon-enfant-tours',
    titre: 'Quel sport pour mon enfant à Tours ? Le guide des parents',
    titreCourt: 'Quel sport pour mon enfant ?',
    titleSeo: 'Quel sport pour mon enfant à Tours ? Guide parents',
    description:
      'Choisir le sport de votre enfant selon son tempérament : panorama des activités à Tours, repères par âge et école de flag dès 6 ans, sans contact.',
    emoji: 'jeunes',
    datePublication: '2026-08-22',
    dateModif: '2026-08-22',
    minutesLecture: 11,
    motCle: 'quel sport pour mon enfant',
    content: ArticleSportEnfant,
  },
  {
    slug: 'sport-de-contact-tours',
    titre: 'Quel sport de contact pratiquer à Tours ? Le comparatif',
    titreCourt: 'Quel sport de contact à Tours ?',
    titleSeo: 'Quel sport de contact pratiquer à Tours ?',
    description:
      'Rugby, sports de combat, hockey, football américain : le panorama honnête des sports de contact à Tours et comment le contact s’apprend vraiment, par étapes.',
    emoji: 'rejoindre',
    datePublication: '2026-08-22',
    dateModif: '2026-08-22',
    minutesLecture: 11,
    motCle: 'sport de contact tours',
    content: ArticleSportContact,
  },
  {
    slug: 'sport-de-combat-tours',
    titre: 'Sports de combat à Tours : lequel choisir ?',
    titreCourt: 'Quel sport de combat à Tours ?',
    titleSeo: 'Sports de combat à Tours : lequel choisir ?',
    description:
      'Boxe, judo, lutte, MMA, arts martiaux : le guide des familles de sports de combat à Tours, leurs différences réelles, et l’alternative du combat collectif.',
    emoji: 'materiel',
    datePublication: '2026-08-22',
    dateModif: '2026-08-22',
    minutesLecture: 11,
    motCle: 'sport de combat tours',
    content: ArticleSportCombat,
  },
  // Article saisonnier : rafraîchir chaque été (saison, dates).
  {
    slug: 'quel-sport-rentree-2026-2027',
    titre: 'Quel sport choisir pour la rentrée 2026/2027 ?',
    titreCourt: 'Quel sport pour la rentrée ?',
    titleSeo: 'Quel sport choisir pour la rentrée 2026/2027 ?',
    description:
      'Forums des associations, essais gratuits, checklist et erreurs de septembre : la méthode pour choisir le sport de la rentrée 2026/2027 et t’y tenir en février.',
    emoji: 'organiser',
    datePublication: '2026-08-22',
    dateModif: '2026-08-22',
    minutesLecture: 12,
    motCle: 'quel sport rentrée 2026',
    content: ArticleRentree,
  },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);

/** « 20 août 2026 » à partir d'une date ISO (sans dépendre de la locale runtime). */
const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
export function dateFr(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MOIS[m - 1]} ${y}`;
}
