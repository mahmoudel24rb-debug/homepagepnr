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

import ArticleReglesFlagFootball from '@/content/regles-flag-football';
import ArticleCombienCouteLeFootballAmericain from '@/content/combien-coute-le-football-americain';
import ArticleFootballAmericainJeunesU13U16U18 from '@/content/football-americain-jeunes-u13-u16-u18';
import ArticleArbitreCoachBenevoleClubFootballAmericain from '@/content/arbitre-coach-benevole-club-football-americain';
import ArticleLexiqueFootballAmericain from '@/content/lexique-football-americain';
import ArticleFlagFootballJo2028 from '@/content/flag-football-jo-2028';
import ArticleChampionnatDeFranceFootballAmericain from '@/content/championnat-de-france-football-americain';
import ArticleStadeDeLaChambrerieTours from '@/content/stade-de-la-chambrerie-tours';
import ArticleClubDeSportTours from '@/content/club-de-sport-tours';
import ArticleAQuelAgeCommencerLeFootballAmericain from '@/content/a-quel-age-commencer-le-football-americain';
import ArticleCommentRegarderLeCollegeFootballEnFrance from '@/content/comment-regarder-le-college-football-en-france';
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
    titleSeo: 'Débuter le football américain en France',
    description:
      'Trouver un club près de chez toi, la licence, l’équipement et ton premier entraînement : le guide pas à pas, écrit par un club français fondé en 1987.',
    emoji: 'foot-us',
    datePublication: '2026-08-20',
    dateModif: '2026-08-31',
    minutesLecture: 12,
    motCle: 'pratiquer le football américain en France',
    content: ArticlePratiquer,
  },
  {
    slug: 'flag-football-cest-quoi',
    titre: 'Le flag football, c’est quoi ? Définition, mixité et JO 2028',
    titreCourt: 'Le flag football, c’est quoi ?',
    titleSeo: 'Le flag football, c’est quoi ? Définition',
    description:
      'Le flag football expliqué simplement : d’où il vient, en quoi il diffère du foot US, à qui il s’adresse et pourquoi il entre aux JO de 2028.',
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
    titleSeo: 'Commencer le football américain adulte à Tours',
    description:
      'Commencer le football américain à 25, 30 ou 40 ans, sans jamais y avoir joué : ce qui t’attend, le matériel prêté et une semaine d’essai offerte à Tours.',
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
    titleSeo: 'Sports collectifs à Tours : le panorama',
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
    titleSeo: 'Quel sport pour mon enfant à Tours ?',
    description:
      'Choisir le sport de votre enfant selon son tempérament : panorama des activités à Tours, repères par âge et école de flag U7 à U18, sans contact.',
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
    titleSeo: 'Sports de contact à Tours : le comparatif',
    description:
      'Rugby, sports de combat, hockey, football américain : le panorama des sports de contact à Tours et comment le contact s’apprend vraiment, par étapes.',
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
    titleSeo: 'Quel sport à la rentrée 2026/2027 ?',
    description:
      'Forums des associations, essais gratuits, checklist : la méthode pour choisir le sport de la rentrée 2026/2027 et t’y tenir jusqu’en février.',
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
      'Quarterback, ligne, linebacker, kicker : chaque poste du football américain, son rôle, son gabarit, son tempérament. Un poste pour chaque physique.',
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
    titleSeo: 'Règles du football américain expliquées',
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
    titleSeo: 'Équipement foot US débutant : la liste',
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
    titleSeo: 'Reprendre le sport à 30 ans à Tours',
    description:
      'Pourquoi les résolutions solo cassent, quelles options existent vraiment à Tours et comment tenir jusqu’en février : le guide honnête de la reprise adulte.',
    emoji: 'sante',
    datePublication: '2026-09-02',
    dateModif: '2026-09-02',
    minutesLecture: 16,
    motCle: 'reprendre le sport à 30 ans',
    content: ArticleReprendreSport,
  },
  {
    slug: 'sport-etudiant-tours',
    titre: 'Étudiant à Tours : quel sport choisir cette année ?',
    titreCourt: 'Quel sport quand on est étudiant ?',
    titleSeo: 'Sport étudiant à Tours : où s’inscrire',
    description:
      'Budget serré, emploi du temps mouvant, pas de voiture : comment choisir un sport à Tours quand on est étudiant, et où aller essayer dès septembre.',
    emoji: 'experience',
    datePublication: '2026-09-02',
    dateModif: '2026-09-02',
    minutesLecture: 15,
    motCle: 'sport étudiant tours',
    content: ArticleSportEtudiant,
  },
  {
    slug: 'regles-flag-football',
    titre: 'Les règles du flag football (5 contre 5) : terrain, ceinture, temps, fautes',
    titreCourt: 'Les règles du flag football',
    titleSeo: 'Règles du flag football 5 contre 5 : le guide',
    description:
      'Le 5 contre 5 sans contact expliqué : terrain, déflagage, 7 secondes du quarterback, no-run zone, points et fautes. Le guide complet des règles du flag.',
    emoji: 'rejoindre-flag',
    datePublication: '2026-09-02',
    dateModif: '2026-09-02',
    minutesLecture: 17,
    motCle: 'règles flag football',
    content: ArticleReglesFlagFootball,
  },
  {
    slug: 'combien-coute-le-football-americain',
    titre: 'Combien coûte le football américain ? Licence, équipement, budget d’une saison',
    titreCourt: 'Combien coûte le football américain ?',
    titleSeo: 'Prix du football américain : le budget réel',
    description:
      'De 100 € à 249,99 € la saison selon la formule, licence FFFA incluse, équipement prêté aux débutants et paiement en 3 fois : le vrai budget d’une saison.',
    emoji: 'finance',
    datePublication: '2026-09-02',
    dateModif: '2026-09-02',
    minutesLecture: 15,
    motCle: 'combien coûte le football américain',
    content: ArticleCombienCouteLeFootballAmericain,
  },
  {
    slug: 'football-americain-jeunes-u13-u16-u18',
    titre: 'Football américain et flag pour les jeunes : U13, U16, U18, comment ça marche',
    titreCourt: 'Football américain et flag pour les jeunes',
    titleSeo: 'Foot US jeunes U13, U16, U18 à Tours',
    description:
      'École de flag dès U7, flag juniors U13-U18, équipe U18 avec initiation au contact : le parcours jeunes des Pionniers de Touraine, horaires et tarifs.',
    emoji: 'decouvrir',
    datePublication: '2026-09-02',
    dateModif: '2026-09-02',
    minutesLecture: 14,
    motCle: 'football américain enfant',
    content: ArticleFootballAmericainJeunesU13U16U18,
  },
  {
    slug: 'arbitre-coach-benevole-club-football-americain',
    titre: 'Devenir arbitre, coach ou bénévole dans un club de football américain',
    titreCourt: 'Arbitre, coach ou bénévole en club',
    titleSeo: 'Devenir arbitre, coach ou bénévole en club',
    description:
      'Arbitrage indemnisé, coaching, régie FFFA TV, logistique : tous les rôles bénévoles d’un club de football américain à Tours, et comment candidater.',
    emoji: 'competences',
    datePublication: '2026-09-02',
    dateModif: '2026-09-02',
    minutesLecture: 17,
    motCle: 'arbitre football américain',
    content: ArticleArbitreCoachBenevoleClubFootballAmericain,
  },
  {
    slug: 'lexique-football-americain',
    titre: 'Lexique du football américain : 60 termes à connaître',
    titreCourt: 'Lexique du football américain',
    titleSeo: 'Lexique foot US : 60 termes traduits',
    description:
      'Les 60 mots du football américain traduits et expliqués : down, snap, blitz, sack, red zone, deflag. Le glossaire pour comprendre un match.',
    emoji: 'com',
    datePublication: '2026-09-02',
    dateModif: '2026-09-02',
    minutesLecture: 19,
    motCle: 'vocabulaire football américain',
    content: ArticleLexiqueFootballAmericain,
  },
  {
    slug: 'flag-football-jo-2028',
    titre: 'Flag football aux JO de Los Angeles 2028 : ce que ça change en France',
    titreCourt: 'Le flag football aux JO 2028',
    titleSeo: 'Flag football aux JO 2028 : ce que ça change',
    description:
      'Le flag football entre au programme des Jeux de Los Angeles 2028 : pourquoi ce choix, ce que ça change pour les clubs français et comment débuter à Tours.',
    emoji: 'seniors-flag',
    datePublication: '2026-09-02',
    dateModif: '2026-09-02',
    minutesLecture: 12,
    motCle: 'flag football jo 2028',
    content: ArticleFlagFootballJo2028,
  },
  {
    slug: 'championnat-de-france-football-americain',
    titre: 'Championnat de France de football américain : divisions, saison et où jouent les Pionniers',
    titreCourt: 'Le championnat de France de foot US',
    titleSeo: 'Championnat de France de foot US : divisions',
    description:
      'Divisions du championnat de foot US, championnat mixte de flag, Coupe de France et calendrier type : où jouent les Pionniers de Touraine, club de Tours.',
    emoji: 'jeunes-flag',
    datePublication: '2026-09-02',
    dateModif: '2026-09-02',
    minutesLecture: 13,
    motCle: 'championnat football américain france',
    content: ArticleChampionnatDeFranceFootballAmericain,
  },
  {
    slug: 'stade-de-la-chambrerie-tours',
    titre: 'Stade de la Chambrerie à Tours : venir voir un match des Pionniers',
    titreCourt: 'Stade de la Chambrerie à Tours',
    titleSeo: 'Stade de la Chambrerie à Tours : accès et matchs',
    description:
      'Adresse, créneaux, ambiance et déroulé d’un match de football américain au stade de la Chambrerie, rue Tartifume à Tours, chez les Pionniers de Touraine.',
    emoji: 'soutenir',
    datePublication: '2026-09-02',
    dateModif: '2026-09-02',
    minutesLecture: 12,
    motCle: 'stade de la chambrerie',
    content: ArticleStadeDeLaChambrerieTours,
  },
  {
    slug: 'club-de-sport-tours',
    titre: 'Trouver un club de sport à Tours : le guide par créneau et par âge',
    titreCourt: 'Trouver un club de sport à Tours',
    titleSeo: 'Trouver un club de sport à Tours',
    description:
      'Choisir un club de sport à Tours : les critères qui comptent vraiment, un guide par créneau, par âge et par envie, et le forum des associations.',
    emoji: 'ambassadeur',
    datePublication: '2026-09-02',
    dateModif: '2026-09-02',
    minutesLecture: 17,
    motCle: 'club de sport Tours',
    content: ArticleClubDeSportTours,
  },
  {
    slug: 'a-quel-age-commencer-le-football-americain',
    titre: 'À quel âge commencer le football américain ou le flag ?',
    titreCourt: 'À quel âge commencer ?',
    titleSeo: 'À quel âge commencer le foot US ou le flag ?',
    description:
      'Le flag dès 5 ou 6 ans, le contact à partir des U18, et jamais trop tard à 30 ou 40 ans : les repères par âge d’un club de Tours fondé en 1987.',
    emoji: 'temps',
    datePublication: '2026-09-02',
    dateModif: '2026-09-02',
    minutesLecture: 13,
    motCle: 'à quel âge commencer le football américain',
    content: ArticleAQuelAgeCommencerLeFootballAmericain,
  },
  {
    slug: 'comment-regarder-le-college-football-en-france',
    titre: 'Comment regarder le college football en France en 2026 : le guide complet',
    titreCourt: 'Regarder le college football en France',
    titleSeo: 'Regarder le college football en France 2026',
    description:
      'DAZN, Disney+, beIN Sports, Fighting Irish TV : où regarder le college football en France en 2026, à quel prix, et tout le College Football Playoff.',
    emoji: 'jouer',
    datePublication: '2026-09-07',
    dateModif: '2026-09-07',
    minutesLecture: 26,
    motCle: 'regarder college football en France',
    content: ArticleCommentRegarderLeCollegeFootballEnFrance,
  },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);

/** « 20 août 2026 » à partir d'une date ISO (sans dépendre de la locale runtime). */
const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
export function dateFr(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MOIS[m - 1]} ${y}`;
}
