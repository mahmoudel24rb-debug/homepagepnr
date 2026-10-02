import Link from 'next/link';
import { CtaQuiz, CtaTunnel } from '@/components/blog/CtaEncart';
import Faq from '@/components/blog/Faq';

/**
 * Article. Mot-clé : « combien de temps dure un match de football américain ».
 * Format « réponse à une question » : réponse directe en tête (temps de jeu
 * officiel contre durée réelle), puis le détail par niveau (NFL, universitaire,
 * France, flag), la prolongation, un tableau récapitulatif, et le pont vers la
 * pratique : une action dure quelques secondes, l’effort se fait par intermittence.
 * Chiffres vérifiés sur les règlements NFL 2026, NCAA 2026, FFFA et IFAF (voir #sources).
 */
export default function ArticleCombienDeTempsDureUnMatchDeFootballAmericain() {
  return (
    <>
      <p>
        <strong>Combien de temps dure un match de football américain ?</strong> Le temps de jeu
        officiel est de 60 minutes en NFL et à l’université, en quatre quarts-temps de 15 minutes,
        et de 48 minutes chez les seniors en France. Mais le chronomètre s’arrête sans cesse : un
        match de NFL dure en réalité un peu plus de trois heures.
      </p>
      <p>
        Le temps affiché au tableau n’est pas celui qui passe dans les tribunes : la{' '}
        <strong>durée d’un match de football américain</strong> dépend du niveau de jeu, de la
        télévision et du règlement de la compétition. Cet article est écrit par les{' '}
        <strong>Pionniers de Touraine</strong>, club de football américain et de flag football fondé
        à Tours en <strong>1987</strong>, avec la source de chaque chiffre.
      </p>

      <div className="blogc-toc">
        <p className="blogc-toc-title">Sommaire</p>
        <ol>
          <li><a href="#officiel">Le temps de jeu officiel : quatre quarts-temps</a></li>
          <li><a href="#pourquoi">Pourquoi un match dure plus de trois heures</a></li>
          <li><a href="#nfl">Match NFL : durée officielle et durée réelle</a></li>
          <li><a href="#universitaire">Un match universitaire</a></li>
          <li><a href="#france">Un match en France</a></li>
          <li><a href="#flag">Et un match de flag football ?</a></li>
          <li><a href="#prolongation">La prolongation</a></li>
          <li><a href="#recapitulatif">Le tableau récapitulatif</a></li>
          <li><a href="#terrain">Combien de temps on joue vraiment ?</a></li>
          <li><a href="#tours">Voir un match ou en jouer un, à Tours</a></li>
          <li><a href="#sources">Sources</a></li>
          <li><a href="#faq">Questions fréquentes</a></li>
        </ol>
      </div>

      <h2 id="officiel">Le temps de jeu officiel : quatre quarts-temps</h2>
      <p>
        Un match se découpe en <strong>quatre quarts-temps</strong> : <strong>15 minutes</strong> en
        NFL et en universitaire américain, <strong>12 minutes</strong> pour les seniors en France.
        C’est un temps décompté : le chronomètre ne tourne que lorsque le règlement le prévoit.
        Entre le premier et le deuxième quart-temps, puis entre le troisième et le quatrième, une
        courte pause permet de changer de côté : au moins deux minutes en NFL, une minute à
        l’université et en France. La mi-temps dure <strong>13 minutes</strong> en NFL et{' '}
        <strong>20 minutes</strong> en universitaire comme en France, sauf accord pour la raccourcir.
      </p>

      <h2 id="pourquoi">Pourquoi un match dure plus de trois heures</h2>
      <p>
        <strong>Le chronomètre arrêté.</strong> Le règlement de la NFL arrête l’horloge quand le
        ballon sort du terrain, quand une passe n’est pas attrapée, après une action marquée par une
        faute, après un changement de possession ou quand le ballon est mort dans l’en-but.
      </p>
      <p>
        <strong>Le temps entre deux actions.</strong> L’attaque dispose de <strong>40
        secondes</strong> au maximum pour lancer l’action suivante, en NFL comme à l’université.
        Répété sur plus d’une centaine d’actions, ce temps de préparation pèse lourd.
      </p>
      <p>
        <strong>Les temps morts et la publicité.</strong> En NFL, chaque équipe dispose de trois
        temps morts par mi-temps, plus un arrêt automatique à deux minutes de la fin de chaque
        mi-temps. Les retransmissions américaines y glissent leurs publicités : le règlement prévoit
        qu’un temps mort dure deux minutes quand la télévision l’utilise. Une étude du Wall Street
        Journal publiée en 2010 comptait environ une heure de publicités par retransmission.
      </p>
      <p>
        <strong>La mi-temps.</strong> Elle ajoute à elle seule 13 à 20 minutes au temps réel, avant
        même les vérifications vidéo et les soins aux blessés.
      </p>

      <h2 id="nfl">Match NFL : durée officielle et durée réelle</h2>
      <p>
        Un <strong>match NFL</strong> dure 60 minutes de jeu. Côté montre, on a mesuré la{' '}
        <strong>durée</strong> des 272 matchs de la saison régulière 2025 à partir des horodatages
        publiés par nflverse : il s’écoule <strong>en moyenne 3 h 03</strong> entre le coup d’envoi
        et le dernier snap. L’ordre de grandeur ne bouge guère : la ligue annonçait 3 h 08 en 2016,
        selon ESPN.
      </p>
      <p>
        Le ballon, lui, n’est réellement en jeu qu’une dizaine de minutes : l’étude du Wall Street
        Journal évaluait ce temps effectif à environ 11 minutes par match, pour une action moyenne
        d’environ quatre secondes. Pour un spectateur en France, un match qui débute à 19 h 00 se
        termine en moyenne peu après 22 h 00. Les chaînes et horaires sont dans notre guide pour{' '}
        <Link href="/blog/comment-regarder-la-nfl-en-france/">regarder la NFL en France</Link>.
      </p>

      <h2 id="universitaire">Combien de temps dure un match de football américain universitaire ?</h2>
      <p>
        Le format officiel est le même qu’en NFL, quatre quarts-temps de 15 minutes, avec une
        mi-temps de 20 minutes en saison régulière. Le match universitaire est pourtant plus long :
        selon les données de la NCAA relayées par CBS Sports en février 2025, la durée moyenne a
        atteint <strong>3 h 27</strong> en 2024, malgré un nombre d’actions en baisse (environ 175 par
        match, contre 180 en 2022). L’arrêt de l’horloge après chaque premier down ne s’applique
        pourtant plus que dans les deux dernières minutes de chaque mi-temps. Selon les sources de
        CBS Sports, l’allongement tient surtout aux temps morts réservés aux médias. Pour suivre ce
        championnat, on a expliqué comment{' '}
        <Link href="/blog/comment-regarder-le-college-football-en-france/">
          regarder le college football en France
        </Link>
        .
      </p>

      <h2 id="france">Combien de temps dure un match de football américain en France ?</h2>
      <p>
        Les règles de jeu de la Fédération Française de Football Américain prévoient, pour les
        seniors à onze, <strong>quatre périodes de 12 minutes</strong> de temps décompté, soit
        48 minutes de jeu, une minute d’arrêt entre le premier et le deuxième quart-temps puis entre
        le troisième et le quatrième, et une mi-temps de 20 minutes, sauf si elle est raccourcie avant
        la rencontre. L’allongement de ces pauses pour la télévision, hérité du règlement
        universitaire américain, ne s’applique pas en France.
      </p>
      <p>
        Aucune statistique officielle ne mesure la durée réelle des rencontres françaises.
        D’expérience de club, un match senior occupe de l’ordre de deux heures à deux heures et demie,
        et la fédération conseille de programmer le coup d’envoi au moins quatre heures avant la
        tombée de la nuit.
      </p>
      <p>
        Chez les jeunes, les formats varient selon la catégorie : l’édition 2022-2023 des règles
        prévoit par exemple, pour les U16 à neuf contre neuf, quatre périodes de 20 minutes en temps
        continu, où l’horloge ne s’arrête que sur les temps morts et les blessures. Les catégories
        ayant depuis été réorganisées (U18, U15), la durée exacte se fixe{' '}
        <strong>selon le règlement de la compétition</strong>. Voir notre article sur{' '}
        <Link href="/blog/football-americain-jeunes-u13-u16-u18/">
          le football américain chez les jeunes
        </Link>
        .
      </p>

      <h2 id="flag">Et un match de flag football ?</h2>
      <p>
        Le règlement international de l’IFAF, traduit par la FFFA, prévoit{' '}
        <strong>40 minutes de jeu en deux mi-temps de 20 minutes</strong>, séparées par deux minutes
        de pause. Le chronomètre tourne en continu et ne s’arrête qu’en fin de période, sur les temps
        morts (deux par équipe et par mi-temps, d’une minute au plus), sur blessure ou sur décision
        de l’arbitre. Dans les deux dernières minutes de chaque mi-temps, il s’arrête comme au
        football américain : premier down, faute, sortie, passe au sol, score. Un match de flag est
        donc bien plus court, et les compétitions s’organisent souvent en tournois de plusieurs
        matchs dans la journée. Le détail est dans{' '}
        <Link href="/blog/regles-flag-football/">les règles du flag football</Link>.
      </p>

      <h2 id="prolongation">La prolongation, quand l’égalité persiste</h2>
      <ul>
        <li>
          <strong>NFL, saison régulière :</strong> une période de 10 minutes au plus. Chaque équipe
          doit avoir l’occasion d’attaquer, sauf safety sur la première possession ; ensuite, l’équipe qui mène gagne, et en cas d’égalité,
          le prochain score décide. Sans vainqueur au bout des 10 minutes, le match est nul.
        </li>
        <li>
          <strong>NFL, phase finale :</strong> des périodes de 15 minutes s’enchaînent jusqu’à ce
          qu’un vainqueur soit désigné.
        </li>
        <li>
          <strong>Université :</strong> plus de chronomètre. Chaque équipe attaque à son tour depuis
          la ligne des 25 yards adverses ; la transformation à deux points devient obligatoire dès
          la deuxième prolongation, et à partir de la troisième, chaque possession se réduit à une
          action à deux points.
        </li>
        <li>
          <strong>France :</strong> les règles de la FFFA reprennent le système des 25 yards, mais
          le match nul existe en saison régulière (2 points au classement des championnats
          nationaux) : tout dépend du règlement de la compétition.
        </li>
        <li>
          <strong>Flag :</strong> une prolongation seulement si un vainqueur doit être désigné, avec
          une série par équipe depuis le milieu du terrain, puis des transformations à un point.
        </li>
      </ul>

      <h2 id="recapitulatif">
        Combien de temps dure un match de football américain : le tableau récapitulatif
      </h2>
      <div
        className="blogc-table-scroll"
        role="region"
        tabIndex={0}
        aria-label="Durée d’un match de football américain selon le niveau"
      >
        <table>
          <thead>
            <tr>
              <th scope="col">Niveau</th>
              <th scope="col">Quart-temps</th>
              <th scope="col">Durée réelle moyenne</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">NFL</th>
              <td>4 × 15 min, mi-temps de 13 min</td>
              <td>3 h 03 (saison régulière 2025)</td>
            </tr>
            <tr>
              <th scope="row">Universitaire (NCAA)</th>
              <td>4 × 15 min, mi-temps de 20 min</td>
              <td>3 h 27 (saison 2024)</td>
            </tr>
            <tr>
              <th scope="row">France, seniors (FFFA)</th>
              <td>4 × 12 min, mi-temps de 20 min</td>
              <td>Pas de statistique officielle ; 2 h à 2 h 30 d’expérience de club</td>
            </tr>
            <tr>
              <th scope="row">France, jeunes (FFFA)</th>
              <td>Selon le règlement de la compétition</td>
              <td>Selon la catégorie</td>
            </tr>
            <tr>
              <th scope="row">Flag football (IFAF, FFFA)</th>
              <td>2 mi-temps de 20 min</td>
              <td>Pas de statistique officielle ; chronomètre presque continu</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="terrain">Et sur le terrain, combien de temps on joue vraiment ?</h2>
      <p>
        Vu du terrain, une action dure <strong>quelques secondes</strong>, puis tout s’arrête : on se
        regroupe, on écoute la combinaison suivante, on se replace. L’effort se fait{' '}
        <strong>par intermittence</strong> : un départ explosif, un duel ou un sprint court, une
        récupération, et on recommence. En règle générale, un joueur ne participe pas non plus à
        toutes les actions, puisque l’attaque, la défense et les équipes spéciales se relaient : c’est
        ce qu’on explique dans{' '}
        <Link href="/blog/combien-de-joueurs-football-americain/">
          combien de joueurs dans une équipe de football américain
        </Link>
        . Pour un débutant, c’est une bonne nouvelle : ce sport ne demande pas de courir une heure
        sans s’arrêter, mais de répéter des efforts brefs et intenses. Les bases de chaque action sont
        dans <Link href="/blog/regles-football-americain/">les règles du football américain</Link>.
      </p>

      <CtaQuiz
        titre="Des efforts de quelques secondes : à quel poste ?"
        texte="Huit questions sur ta taille, ton poids, ton explosivité et ton rapport au contact : notre algorithme de scouting, calibré sur les gabarits réels des joueurs NFL et NCAA, te propose ton poste, en foot US ou en flag."
        bouton="Je fais le test de poste"
      />

      <h2 id="tours">Voir un match ou en jouer un, à Tours</h2>
      <p>
        Les Pionniers de Touraine s’entraînent au <strong>Stade de la Chambrerie, rue Tartifume,
        37100 Tours</strong>.
      </p>
      <ul>
        <li>
          <strong>Football américain, seniors :</strong> le lundi et le vendredi de 20 h 00 à
          23 h 00, le mercredi de 21 h 00 à 23 h 00.
        </li>
        <li>
          <strong>Flag football mixte, seniors :</strong> le lundi et le jeudi de 20 h 15 à 22 h 45.
        </li>
        <li>
          <strong>Pour essayer :</strong> la semaine découverte est offerte, avec une séance d’essai
          gratuite. Casque et épaulières sont prêtés aux débutants.
        </li>
      </ul>
      <p>
        Tous les détails sont sur les pages pour{' '}
        <Link href="/football-americain/">jouer au football américain à Tours</Link> et sur{' '}
        <Link href="/flag-football/">le flag football à Tours</Link>.
      </p>

      <h2 id="sources">Sources</h2>
      <p>
        Règlements en vigueur au 2 octobre 2026. Durée moyenne NFL 2025 calculée sur les horodatages
        nflverse (272 matchs, de la première à la dernière action).
      </p>
      <ul>
        <li>
          <a
            href="https://operations.nfl.com/the-rules/nfl-rulebook/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NFL Football Operations, règlement officiel 2026
          </a>{' '}
          : quarts-temps, mi-temps, chronomètre, temps morts, prolongation.
        </li>
        <li>
          <a
            href="https://ncaaorg.s3.amazonaws.com/championships/sports/football/rules/PRMFB_RulesBook.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            NCAA, Football Rules and Interpretations 2026
          </a>{' '}
          : périodes, mi-temps, prolongation.
        </li>
        <li>
          <a
            href="https://www.cbssports.com/college-football/news/despite-running-fewer-plays-college-football-games-are-actually-getting-longer-so-whos-to-blame/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CBS Sports, 26 février 2025
          </a>{' '}
          : durée moyenne des matchs universitaires en 2024.
        </li>
        <li>
          <a
            href="https://github.com/nflverse/nflverse-data/releases/tag/pbp"
            target="_blank"
            rel="noopener noreferrer"
          >
            nflverse, données de jeu NFL 2025
          </a>{' '}
          : horodatage de chaque action.
        </li>
        <li>
          <a
            href="https://www.espn.com/blog/nflnation/post/_/id/249052"
            target="_blank"
            rel="noopener noreferrer"
          >
            ESPN, 18 septembre 2017
          </a>{' '}
          : durée moyenne d’un match NFL en 2016.
        </li>
        <li>
          <a
            href="https://www.foxsports.com/stories/nfl/football-games-have-11-minutes-of-action"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fox Sports, 18 janvier 2010, d’après le Wall Street Journal
          </a>{' '}
          : temps de jeu effectif, durée d’une action, publicité.
        </li>
        <li>
          <a
            href="https://www.fffa.org/publications-officielles/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FFFA, publications officielles
          </a>{' '}
          : règles du jeu à 11, règles du flag, règlement des compétitions.
        </li>
        <li>
          <a href="https://americanfootball.sport" target="_blank" rel="noopener noreferrer">
            IFAF
          </a>{' '}
          et{' '}
          <a
            href="http://myiafoa.org/flag/FlagRules2023.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            International Flag Football Rules 2023
          </a>{' '}
          : règlement international du flag.
        </li>
      </ul>

      <Faq
        titre="Questions fréquentes sur la durée d’un match"
        items={[
          {
            q: 'Combien de temps dure un match de foot US en moyenne ?',
            r: (
              <p>
                En NFL, un peu plus de trois heures : 3 h 03 en moyenne entre le coup d’envoi et la
                dernière action sur la saison régulière 2025, pour 60 minutes de jeu officiel. À
                l’université américaine, la moyenne atteignait 3 h 27 en 2024 selon les données de
                la NCAA. En France, où les seniors jouent quatre quarts-temps de 12 minutes sans
                pause publicitaire, aucune statistique officielle n’existe, mais un match senior
                occupe d’expérience de l’ordre de deux heures à deux heures et demie.
              </p>
            ),
          },
          {
            q: 'Combien de temps dure la mi-temps au football américain ?',
            r: (
              <p>
                Treize minutes en NFL, selon le règlement officiel de la ligue. Vingt minutes à
                l’université américaine et en France, sauf si elle est raccourcie d’un commun accord
                avant la rencontre. Entre le premier et le deuxième quart-temps, puis entre le
                troisième et le quatrième, il n’y a qu’une courte pause pour changer de côté : au
                moins deux minutes en NFL, une minute à l’université et en France. Au flag football,
                les deux mi-temps de 20 minutes sont séparées par une pause de deux minutes.
              </p>
            ),
          },
          {
            q: 'Pourquoi le chronomètre s’arrête-t-il aussi souvent ?',
            r: (
              <p>
                Parce que le temps de jeu est un temps décompté, et que le règlement prévoit
                précisément les arrêts : passe non attrapée, ballon sorti du terrain, faute,
                changement de possession, score, temps mort, et arrêt automatique à deux minutes de
                la fin de chaque mi-temps. Ces arrêts donnent au jeu sa dimension stratégique, avec
                le temps de choisir la combinaison suivante et de faire entrer les joueurs adaptés.
                En fin de match, la gestion du chronomètre devient même une arme à part entière.
              </p>
            ),
          },
          {
            q: 'Un match de NFL peut-il se terminer sur un match nul ?',
            r: (
              <p>
                Oui, en saison régulière. Si les deux équipes sont à égalité après la prolongation de
                10 minutes, le match est déclaré nul. C’est rare, parce que chaque équipe a
                l’occasion d’attaquer pendant la prolongation et qu’en cas d’égalité après ces deux
                possessions, le prochain score décide. En phase finale, en revanche, le nul est
                impossible : des périodes de 15 minutes s’enchaînent jusqu’à ce qu’un vainqueur soit
                désigné.
              </p>
            ),
          },
          {
            q: 'Combien de temps dure un match de flag football ?',
            r: (
              <p>
                Quarante minutes de jeu, en deux mi-temps de 20 minutes séparées par une pause de
                deux minutes, selon le règlement international de l’IFAF repris par la FFFA. Le
                chronomètre tourne presque en continu et ne s’arrête sur les actions de jeu que dans
                les deux dernières minutes de chaque mi-temps. Un match de flag est donc bien plus
                court qu’un match de foot US, et une équipe en joue souvent plusieurs dans la même
                journée de tournoi.
              </p>
            ),
          },
          {
            q: 'Combien de temps dure un entraînement aux Pionniers de Touraine ?',
            r: (
              <p>
                En football américain senior, trois heures le lundi et le vendredi, de 20 h 00 à
                23 h 00, et deux heures le mercredi, de 21 h 00 à 23 h 00. En flag mixte senior,
                deux heures et demie le lundi et le jeudi, de 20 h 15 à 22 h 45. Comme en match,
                l’effort se fait par séquences courtes entrecoupées de récupération. La semaine
                découverte est offerte et le casque comme les épaulières sont prêtés aux débutants.
              </p>
            ),
          },
        ]}
      />

      <CtaTunnel
        titre="Quelques secondes d’effort, une équipe autour de toi"
        texte="Séance d’essai gratuite aux Pionniers de Touraine, au Stade de la Chambrerie à Tours : football américain ou flag football, casque et épaulières prêtés, aucun engagement. Une tenue de sport suffit."
        bouton="Je réserve ma séance d’essai"
      />
    </>
  );
}
