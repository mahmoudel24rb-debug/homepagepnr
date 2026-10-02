import Link from 'next/link';
import { CtaQuiz, CtaTunnel } from '@/components/blog/CtaEncart';
import Faq from '@/components/blog/Faq';

/**
 * Article. Mot-clé : « combien de joueurs dans une équipe de football américain ».
 * Format « réponse à une question » : réponse directe en tête (11 sur le terrain,
 * effectif bien plus large), puis les trois escouades, la NFL (53, 48 actifs,
 * practice squad), l’universitaire, la France (feuille de match FFFA), le flag
 * à 5, un tableau récapitulatif et « Qui joue où ? » vers le test de poste.
 * Chiffres vérifiés sur les règlements NFL 2026, NCAA, FFFA et IFAF (voir #sources).
 */
export default function ArticleCombienDeJoueursFootballAmericain() {
  return (
    <>
      <p>
        <strong>Combien de joueurs dans une équipe de football américain ?</strong> Onze sur le
        terrain, mais bien plus dans l’effectif, car l’attaque, la défense et les équipes spéciales se
        relaient : en NFL, 53 joueurs sous contrat, dont 48 au plus actifs le jour du match. Au flag
        football, on joue à cinq contre cinq.
      </p>
      <p>
        La question a donc deux réponses : le nombre de joueurs qui s’affrontent à chaque action est
        fixe, celui dont une équipe a besoin pour tenir une saison est plusieurs fois plus élevé. Cet
        article est écrit par les <strong>Pionniers de Touraine</strong>, club de football américain
        et de flag football fondé à Tours en <strong>1987</strong>, avec la source de chaque chiffre.
      </p>

      <div className="blogc-toc">
        <p className="blogc-toc-title">Sommaire</p>
        <ol>
          <li><a href="#terrain">Onze joueurs sur le terrain, vingt-deux à chaque action</a></li>
          <li><a href="#escouades">Trois escouades : pourquoi l’effectif est si grand</a></li>
          <li><a href="#nfl">Combien de joueurs dans une équipe NFL ?</a></li>
          <li><a href="#universitaire">Et dans une équipe universitaire ?</a></li>
          <li><a href="#france">Combien de joueurs dans une équipe en France ?</a></li>
          <li><a href="#flag">Flag football : combien de joueurs ?</a></li>
          <li><a href="#recapitulatif">Le tableau récapitulatif</a></li>
          <li><a href="#postes">Qui joue où ?</a></li>
          <li><a href="#tours">Rejoindre une équipe à Tours</a></li>
          <li><a href="#sources">Sources</a></li>
          <li><a href="#faq">Questions fréquentes</a></li>
        </ol>
      </div>

      <h2 id="terrain">Onze joueurs sur le terrain, vingt-deux à chaque action</h2>
      <p>
        Le nombre de joueurs au football américain sur le terrain est fixé par tous les règlements :{' '}
        <strong>onze par équipe</strong>, soit vingt-deux joueurs à chaque action. La NFL écrit que
        le jeu oppose deux équipes de onze joueurs, la NCAA et la Fédération Française de Football
        Américain précisent « onze joueurs au plus ». Une équipe peut donc jouer à moins de onze, en
        respectant les règles de formation, mais jamais à plus : un douzième joueur présent au moment
        du snap coûte cinq yards de pénalité en NFL.
      </p>
      <p>
        En attaque, on retrouve presque toujours <strong>cinq joueurs de ligne offensive</strong>{' '}
        (un centre, deux guards, deux tackles), un quarterback, et cinq joueurs répartis entre porteurs
        de balle, receveurs et tight ends selon la formation choisie. En défense, une ligne de trois ou
        quatre joueurs, des linebackers derrière elle, et des defensive backs chargés de couvrir les
        receveurs. Les proportions changent d’une action à l’autre, le total reste onze.
      </p>
      <p>
        Une nuance existe en France : le règlement de la FFFA autorise le championnat de deuxième
        division à se jouer à neuf, et les compétitions régionales à neuf, sept ou cinq joueurs, ce
        qui permet à des clubs de taille modeste d’aligner une équipe.
      </p>

      <h2 id="escouades">Trois escouades : pourquoi l’effectif est si grand</h2>
      <p>
        Une équipe de football américain, ce sont en réalité trois équipes qui se succèdent.{' '}
        <strong>L’attaque</strong> entre quand l’équipe a le ballon. <strong>La défense</strong> la
        remplace quand la possession change. <strong>Les équipes spéciales</strong> interviennent sur
        les coups de pied : engagements, dégagements, field goals et transformations, avec des
        spécialistes comme le botteur, le punter ou le joueur chargé du snap long.
      </p>
      <p>
        Le règlement le permet : en NFL, n’importe quel nombre de remplaçants peut entrer tant que le
        ballon est mort, c’est-à-dire entre deux actions. Une équipe fait donc entrer à chaque action
        les joueurs les plus adaptés à la situation.
      </p>
      <p>
        Trois raisons expliquent alors la taille des effectifs. <strong>La spécialisation</strong>{' '}
        d’abord : un joueur de ligne très lourd et un receveur léger et rapide n’ont ni le même corps
        ni le même métier, et chaque poste demande son profil. <strong>L’intensité</strong> ensuite : une
        action dure quelques secondes mais elle est explosive, et faire tourner les joueurs maintient
        le niveau. <strong>Les blessures et les absences</strong> enfin, dans un sport de contact où
        chaque poste doit avoir sa doublure.
      </p>

      <h2 id="nfl">Combien de joueurs dans une équipe NFL ?</h2>
      <p>
        Pendant l’intersaison, une équipe NFL peut compter jusqu’à <strong>90 joueurs</strong> sous
        contrat. Avant le début de la saison régulière, elle doit descendre à <strong>53</strong> :
        en 2026, la date limite était fixée au 30 août. Ce chiffre de 53 reste ensuite la limite pour
        toute la saison, phase finale comprise.
      </p>
      <p>
        Le jour du match, tous ne jouent pas. Une équipe peut aligner <strong>48 joueurs
        actifs</strong> à condition que huit d’entre eux soient des joueurs de ligne offensive
        (centre, guard ou tackle) ; sinon, la limite tombe à 47. Les autres sont déclarés inactifs
        avant la rencontre.
      </p>
      <p>
        À côté de ces 53 joueurs, chaque équipe entretient une <strong>practice squad</strong>,
        l’équipe d’entraînement : <strong>16 joueurs</strong>, ou 17 si l’un d’eux relève du
        programme international de la NFL. Ces joueurs s’entraînent avec l’équipe sans faire partie
        de l’effectif officiel, et une équipe peut en faire monter un ou deux pour un match, ce qui
        porte son effectif à 54 ou 55 joueurs, le nombre d’actifs restant plafonné à 48. Au
        total, près de 70 joueurs par équipe. Pour les suivre à la télévision, voir notre guide
        pour{' '}
        <Link href="/blog/comment-regarder-la-nfl-en-france/">regarder la NFL en France</Link>.
      </p>

      <h2 id="universitaire">Et dans une équipe universitaire ?</h2>
      <p>
        Le football universitaire américain fonctionne avec des effectifs encore plus larges. Depuis
        le 1er juillet 2025, les universités de première division qui ont adhéré à l’accord dit
        « House » sont plafonnées à <strong>105 joueurs</strong> par effectif de football, et peuvent
        accorder une bourse à chacun d’eux. Auparavant, les bourses étaient limitées à 85 par équipe,
        mais les programmes complétaient leur effectif avec de nombreux joueurs non boursiers, les
        « walk-ons ». Des exemptions protègent les joueurs déjà présents qui auraient dépassé ce
        plafond pendant la transition.
      </p>

      <h2 id="france">Combien de joueurs dans une équipe de football américain en France ?</h2>
      <p>
        En France, la question se pose surtout à travers la <strong>feuille de match</strong>. Le
        règlement des compétitions de la FFFA fixe un nombre minimum et maximum de joueurs licenciés
        et aptes à jouer pour chaque rencontre :
      </p>
      <ul>
        <li>
          <strong>Ligue Élite, à onze :</strong> 30 joueurs au minimum et 45 au maximum.
        </li>
        <li>
          <strong>Autres compétitions nationales à onze (D1, D2) :</strong> 25 joueurs au minimum
          et 60 au maximum.
        </li>
        <li>
          <strong>Compétitions territoriales et régionales :</strong> 16 à 45 joueurs à onze, 14 à
          30 à neuf, 10 à 30 à sept, et 7 à 30 à cinq.
        </li>
      </ul>
      <p>
        Une équipe qui ne présente pas le minimum perd le match par forfait. Le{' '}
        <strong>nombre de joueurs d’une équipe de football américain</strong> amateur se construit
        donc avec de la marge : un club a besoin d’un groupe licencié nettement plus large que le
        minimum de la feuille de match pour absorber les blessures, le travail et les absences d’une
        saison. C’est aussi pour cela qu’un club amateur a besoin de nouveaux joueurs chaque saison,
        débutants compris.
      </p>

      <h2 id="flag">Flag football : combien de joueurs ?</h2>
      <p>
        <strong>Cinq contre cinq.</strong> C’est le format du règlement international de l’IFAF,
        repris par la FFFA, et celui retenu pour les Jeux olympiques de Los Angeles en 2028. Il n’y a
        pas d’escouades spécialisées : les mêmes joueurs attaquent et défendent, avec des rotations
        libres entre les actions, et il n’y a pas de ligne de bloqueurs.
      </p>
      <p>
        Une équipe de flag compte au maximum <strong>15 joueurs</strong>, cinq sur le terrain et dix
        remplaçants, selon le règlement international. En championnat mixte en France, la feuille de
        match d’un tournoi doit inscrire au moins 7 joueurs en tenue et au plus 15, dont trois licenciés
        du sexe le moins représenté dans l’équipe ; sur le terrain, au moins deux d’entre eux doivent
        être présents en attaque comme en défense. Aux Jeux de 2028, chaque équipe comptera 10 joueurs. Le
        jeu complet est expliqué dans{' '}
        <Link href="/blog/regles-flag-football/">les règles du flag football</Link>.
      </p>

      <h2 id="recapitulatif">
        Combien de joueurs dans une équipe de football américain : le tableau récapitulatif
      </h2>
      <div
        className="blogc-table-scroll"
        role="region"
        tabIndex={0}
        aria-label="Nombre de joueurs dans une équipe de football américain selon le niveau"
      >
        <table>
          <thead>
            <tr>
              <th scope="col">Niveau</th>
              <th scope="col">Sur le terrain</th>
              <th scope="col">Effectif ou feuille de match</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">NFL</th>
              <td>11</td>
              <td>53 sous contrat, 48 actifs le jour du match, practice squad de 16 ou 17</td>
            </tr>
            <tr>
              <th scope="row">Universitaire (NCAA, première division)</th>
              <td>11</td>
              <td>105 au maximum depuis 2025, pour les universités ayant adhéré à l’accord</td>
            </tr>
            <tr>
              <th scope="row">France, Ligue Élite</th>
              <td>11</td>
              <td>30 à 45 sur la feuille de match</td>
            </tr>
            <tr>
              <th scope="row">France, D1 et D2</th>
              <td>11 (la D2 peut se jouer à 9)</td>
              <td>25 à 60 sur la feuille de match à onze</td>
            </tr>
            <tr>
              <th scope="row">France, régional</th>
              <td>11, 9, 7 ou 5</td>
              <td>De 16 à 45 à onze, jusqu’à 7 à 30 à cinq</td>
            </tr>
            <tr>
              <th scope="row">Flag football</th>
              <td>5</td>
              <td>15 au maximum ; 7 à 15 en championnat mixte FFFA ; 10 aux JO 2028</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="postes">Qui joue où ?</h2>
      <p>
        Onze joueurs, mais pas onze fois le même profil : les plus lourds tiennent la ligne, les plus
        rapides courent les tracés, les plus explosifs défendent ou portent le ballon, et le
        quarterback organise le tout. Notre guide{' '}
        <Link href="/blog/postes-football-americain/">
          quel poste jouer au football américain
        </Link>{' '}
        les décrit un par un. Si tu veux une réponse personnalisée en huit questions,{' '}
        <Link href="/blog/postes-football-americain/#test">je fais le test de poste</Link>. Et pour
        comprendre ce que fait chacun pendant une action,{' '}
        <Link href="/blog/regles-football-americain/">les règles du football américain</Link>{' '}
        posent les bases.
      </p>

      <CtaQuiz
        titre="Onze postes sur le terrain : lequel est fait pour toi ?"
        texte="Huit questions sur ta taille, ton poids, ta vitesse et ton rapport au contact : notre algorithme de scouting, calibré sur les gabarits réels des joueurs NFL et NCAA, te propose ton poste, en foot US ou en flag."
        bouton="Je fais le test de poste"
      />

      <h2 id="tours">Rejoindre une équipe à Tours</h2>
      <p>
        Les Pionniers de Touraine accueillent les débutants au <strong>Stade de la Chambrerie, rue
        Tartifume, 37100 Tours</strong>.
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
          gratuite et sans engagement. Casque et épaulières sont prêtés aux débutants.
        </li>
      </ul>
      <p>
        Tous les détails sont sur les pages pour{' '}
        <Link href="/football-americain/">jouer au football américain à Tours</Link> et sur{' '}
        <Link href="/flag-football/">le flag football à Tours</Link>. Et si tu te demandes combien de
        temps tu passerais sur le terrain un jour de match, on a répondu à la question{' '}
        <Link href="/blog/combien-de-temps-dure-un-match-de-football-americain/">
          combien de temps dure un match de football américain
        </Link>
        .
      </p>

      <h2 id="sources">Sources</h2>
      <p>Règles et effectifs relevés dans les textes en vigueur au 2 octobre 2026.</p>
      <ul>
        <li>
          <a
            href="https://operations.nfl.com/the-rules/nfl-rulebook/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NFL Football Operations, règlement officiel 2026
          </a>{' '}
          : onze joueurs par équipe, remplacements, pénalité pour joueur en trop.
        </li>
        <li>
          <a
            href="https://operations.nfl.com/calendar-events/nfl-free-agency/contract-language"
            target="_blank"
            rel="noopener noreferrer"
          >
            NFL Football Operations, règles d’effectif
          </a>{' '}
          : effectif de 53, 48 actifs le jour du match, practice squad, montées pour un match.
        </li>
        <li>
          <a
            href="https://www.nbcphiladelphia.com/news/sports/nfl/nfl-roster-cutdown-day-deadline-date-practice-squad-rules-2026/4453870/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NBC Philadelphia, 26 août 2026
          </a>{' '}
          : effectif de 90 joueurs à l’intersaison et date limite du 30 août 2026.
        </li>
        <li>
          <a
            href="https://ncaaorg.s3.amazonaws.com/championships/sports/football/rules/PRMFB_RulesBook.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            NCAA, Football Rules and Interpretations 2026
          </a>{' '}
          : nombre de joueurs sur le terrain en universitaire.
        </li>
        <li>
          <a
            href="https://www.cbssports.com/college-football/news/ncaa-removes-scholarship-limits-aligns-with-house-settlement-as-roster-sizes-evolve-in-new-college-sports-era/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CBS Sports, 23 juin 2025
          </a>{' '}
          : plafond de 105 joueurs et fin de la limite de 85 bourses.
        </li>
        <li>
          <a
            href="https://www.fffa.org/publications-officielles/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fédération Française de Football Américain, publications officielles
          </a>{' '}
          : règles du jeu, quotas de la feuille de match en football américain et en flag.
        </li>
        <li>
          <a href="https://americanfootball.sport" target="_blank" rel="noopener noreferrer">
            IFAF, International Federation of American Football
          </a>{' '}
          et{' '}
          <a
            href="http://myiafoa.org/flag/FlagRules2023.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            International Flag Football Rules 2023
          </a>{' '}
          : flag à 5 contre 5, effectif de 15 joueurs au maximum.
        </li>
        <li>
          <a href="https://www.nfl.com/flag-football/la28" target="_blank" rel="noopener noreferrer">
            NFL, Flag Football LA28
          </a>{' '}
          : format du tournoi olympique de 2028.
        </li>
      </ul>

      <Faq
        titre="Questions fréquentes sur le nombre de joueurs"
        items={[
          {
            q: 'Combien de joueurs au foot américain sur le terrain ?',
            r: (
              <p>
                Onze par équipe, soit vingt-deux joueurs à chaque action. C’est la règle en NFL, à
                l’université américaine et dans les compétitions nationales en France, même si la D2
                peut s’y jouer à neuf. Une équipe
                peut jouer à moins de onze, jamais à plus : un joueur en trop au moment du snap est
                sanctionné. En France, certaines compétitions utilisent aussi des formats réduits, à
                neuf, sept ou cinq joueurs, et le flag football se joue à cinq contre cinq.
              </p>
            ),
          },
          {
            q: 'Combien de joueurs dans une équipe NFL ?',
            r: (
              <p>
                Cinquante-trois joueurs sous contrat pendant la saison, après une intersaison où
                l’effectif peut monter à 90. Le jour du match, 48 joueurs au plus sont actifs, à
                condition que huit d’entre eux soient des joueurs de ligne offensive, sinon 47. Chaque
                équipe dispose en plus d’une practice squad de 16 joueurs, ou 17 avec un joueur du
                programme international, dont un ou deux peuvent être appelés pour un match.
              </p>
            ),
          },
          {
            q: 'Pourquoi y a-t-il autant de joueurs dans une équipe ?',
            r: (
              <p>
                Parce qu’une équipe est composée de trois escouades qui se relaient : l’attaque, la
                défense et les équipes spéciales. Les remplacements étant libres entre deux actions,
                chaque escouade réunit les profils les plus adaptés à sa mission, du joueur de ligne
                très lourd au receveur très rapide. Ajoutez la nécessité de doubler chaque poste pour
                faire face aux blessures et à la fatigue, et l’effectif dépasse largement le nombre
                de joueurs présents sur le terrain.
              </p>
            ),
          },
          {
            q: 'Combien faut-il de joueurs pour jouer un match en France ?',
            r: (
              <p>
                Cela dépend de la compétition. Le règlement de la FFFA impose au moins 30 joueurs
                sur la feuille de match en Ligue Élite, 25 dans les autres compétitions nationales à
                onze, et 16 en régional à onze. Les formats réduits demandent moins : 14 joueurs à
                neuf, 10 à sept et 7 à cinq. Une équipe qui ne présente pas ce minimum perd le match
                par forfait, ce qui explique pourquoi les clubs amateurs cherchent toujours à élargir
                leur effectif.
              </p>
            ),
          },
          {
            q: 'Flag football : combien de joueurs dans une équipe ?',
            r: (
              <p>
                Cinq sur le terrain, et 15 au maximum dans l’effectif selon le règlement
                international de l’IFAF. En championnat mixte français, la feuille de match d’un
                tournoi compte entre 7 et 15 joueurs en tenue, avec au moins trois licenciés du sexe
                le moins représenté. Les mêmes joueurs attaquent et défendent, ce qui permet de jouer
                avec un groupe bien plus réduit qu’au football américain. Aux Jeux olympiques de 2028,
                chaque équipe comptera 10 joueurs.
              </p>
            ),
          },
          {
            q: 'Un joueur peut-il jouer en attaque et en défense ?',
            r: (
              <p>
                Oui, le règlement ne l’interdit pas : les remplacements sont libres entre deux
                actions, et rien n’empêche un joueur de rester sur le terrain quand la possession
                change. En NFL, c’est devenu rare, parce que chaque escouade est très spécialisée. Au
                flag football, c’est la norme, puisque les mêmes cinq joueurs attaquent et
                défendent. Pour savoir où ton profil serait le plus utile, le test de poste te donne
                une première réponse.
              </p>
            ),
          },
        ]}
      />

      <CtaTunnel
        titre="Une équipe, c’est plus de onze joueurs : pourquoi pas toi ?"
        texte="Séance d’essai gratuite aux Pionniers de Touraine, au Stade de la Chambrerie à Tours : football américain ou flag football, casque et épaulières prêtés, aucun engagement. Une tenue de sport suffit."
        bouton="Je réserve ma séance d’essai"
      />
    </>
  );
}
