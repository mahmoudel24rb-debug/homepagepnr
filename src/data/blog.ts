import type { ComponentType } from 'react';
import ArticlePratiquer from '@/content/pratiquer-foot-us-france';
import ArticleFlag from '@/content/flag-football-cest-quoi';
import ArticleAdulte from '@/content/commencer-foot-us-adulte';
import ArticleSportCollectif from '@/content/sport-collectif-tours';
import ArticleSportEnfant from '@/content/sport-enfant-tours';
import ArticleSportContact from '@/content/sport-de-contact-tours';
import ArticleSportCombat from '@/content/sport-de-combat-tours';
import ArticleRentree from '@/content/quel-sport-rentree-2026-2027';
import ArticlePostes from '@/content/postes-football-americain';
import ArticleRegles from '@/content/regles-football-americain';
import ArticleEquipement from '@/content/equipement-football-americain-debutant';
import ArticleReprendreSport from '@/content/reprendre-le-sport-a-30-ans-tours';
import ArticleSportEtudiant from '@/content/sport-etudiant-tours';

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
    titleSeo: 'Football américain en France : par où commencer ?',
    description:
      'Trouver un club près de chez toi, la licence, l’équipement à prévoir et ton premier entraînement : le guide pas à pas, écrit par un club français fondé en 1987.',
    emoji: 'foot-us',
    datePublication: '2026-08-20',
    dateModif: '2026-08-31',
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
    titleSeo: 'Commencer le foot US adulte : oui, et voici comment',
    description:
      'Débuter à 25, 30 ou 35 ans sans aucune base : un poste pour chaque gabarit, équipement prêté, entraînements en soirée et un premier essai gratuit à Tours.',
    emoji: 'seniors',
    datePublication: '2026-08-20',
    dateModif: '2026-08-31',
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
  {
    slug: 'postes-football-americain',
    titre: 'Les postes au football américain expliqués (et comment trouver le tien)',
    titreCourt: 'Les postes au football américain',
    titleSeo: 'Les postes au football américain expliqués',
    description:
      'Quarterback, ligne, linebacker, kicker : chaque poste du football américain, son rôle, son gabarit et son tempérament. Il y a un poste pour chaque physique.',
    emoji: 'coaching',
    datePublication: '2026-08-31',
    dateModif: '2026-08-31',
    minutesLecture: 15,
    motCle: 'postes football américain',
    content: ArticlePostes,
  },
  {
    slug: 'regles-football-americain',
    titre: 'Les règles du football américain expliquées simplement',
    titreCourt: 'Les règles du football américain',
    titleSeo: 'Les règles du football américain, simplement',
    description:
      '4 tentatives pour 10 yards, terrain, touchdown, field goal, fautes, temps de jeu : toutes les règles du football américain expliquées sans jargon.',
    emoji: 'arbitrage',
    datePublication: '2026-09-01',
    dateModif: '2026-09-01',
    minutesLecture: 13,
    motCle: 'règles football américain',
    content: ArticleRegles,
  },
  {
    slug: 'equipement-football-americain-debutant',
    titre: 'Quel équipement pour débuter le football américain (et le flag) ?',
    titreCourt: 'L’équipement pour débuter',
    titleSeo: 'Quel équipement pour débuter le football américain ?',
    description:
      'Casque, épaulières, protège-dents, pantalon à pads : ce qui est obligatoire, ce que les clubs prêtent, le budget réel et l’équipement quasi nul du flag.',
    emoji: 'ressources',
    datePublication: '2026-09-02',
    dateModif: '2026-09-02',
    minutesLecture: 13,
    motCle: 'équipement football américain',
    content: ArticleEquipement,
  },
  {
    slug: 'reprendre-le-sport-a-30-ans-tours',
    titre: 'Reprendre le sport à 30 ans (ou après) à Tours : le guide sans bullshit',
    titreCourt: 'Reprendre le sport à 30 ans',
    titleSeo: 'Reprendre le sport à 30 ans à Tours : le vrai guide',
    description:
      'Pourquoi les résolutions solo cassent, quelles options existent vraiment à Tours et comment tenir jusqu’en février : le guide honnête de la reprise adulte.',
    emoji: 'sante',
    datePublication: '2026-09-03',
    dateModif: '2026-09-03',
    minutesLecture: 16,
    motCle: 'reprendre le sport à 30 ans',
    content: ArticleReprendreSport,
  },
  {
    slug: 'sport-etudiant-tours',
    titre: 'Étudiant à Tours : quel sport choisir cette année ?',
    titreCourt: 'Quel sport quand on est étudiant ?',
    titleSeo: 'Étudiant à Tours : quel sport choisir cette année ?',
    description:
      'Budget serré, emploi du temps mouvant, pas de voiture, envie de rencontrer du monde : comment choisir un sport à Tours quand on est étudiant, et où aller essayer.',
    emoji: 'experience',
    datePublication: '2026-09-04',
    dateModif: '2026-09-04',
    minutesLecture: 15,
    motCle: 'sport étudiant tours',
    content: ArticleSportEtudiant,
  },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);

/** « 20 août 2026 » à partir d'une date ISO (sans dépendre de la locale runtime). */
const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
export function dateFr(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MOIS[m - 1]} ${y}`;
}
