import Link from 'next/link';
import { CtaQuiz, CtaTunnel } from '@/components/blog/CtaEncart';
import Faq from '@/components/blog/Faq';

/**
 * Article. Mot-clé : « flag football tours ».
 * Page de DÉFINITION : ce qu’est le flag, d’où il vient, en quoi il diffère du
 * foot US, à qui il s’adresse, mixité, JO en bref. Les règles détaillées, les
 * postes, les JO et l’offre tourangelle ont chacun leur page : ne pas les
 * redévelopper ici (décannibalisation), se contenter d’un renvoi court.
 */
export default function ArticleFlag() {
  return (
    <>
      <p>
        <strong>
          Le flag football est un sport collectif d’opposition joué à 5 contre 5 avec un ballon
          ovale.
        </strong>{' '}
        L’attaque cherche à progresser jusqu’à la zone d’en-but adverse ; la défense arrête
        l’action en retirant l’un des deux flags portés à la ceinture du porteur de balle. Sans
        plaquage ni blocage, le jeu repose sur la vitesse, les appuis, la précision, la lecture
        tactique et la coordination collective.
      </p>
      <p>
        Le flag partage une histoire, un ballon et une partie de son vocabulaire avec le football
        américain. Mais il possède son propre règlement, ses contraintes, ses profils de joueurs,
        ses championnats et désormais son rendez-vous olympique : la discipline fera ses débuts aux
        Jeux de Los Angeles 2028.
      </p>
      <p>
        À Tours, les Pionniers de Touraine développent cette pratique des jeunes jusqu’aux seniors,
        du premier entraînement à la compétition nationale. Voici ce qu’est réellement le flag, ce
        qu’il exige et à quels profils il peut correspondre.
      </p>

      <h2 id="definition">Qu’est-ce que le flag football ?</h2>
      <p>
        Le flag football est une discipline de conquête de territoire. À chaque action, l’attaque
        combine des courses, des tracés et des passes pour créer un espace libre. La défense répond
        par du marquage individuel ou en zone, de la pression sur le quarterback et une lecture
        collective des intentions adverses.
      </p>
      <p>
        L’action s’arrête lorsqu’une passe tombe au sol, que le porteur sort du terrain, qu’un score
        est inscrit ou qu’un défenseur retire un flag. Ce geste s’appelle le déflagage. Il remplace
        le plaquage, mais il ne transforme pas le match en promenade : pour réussir, il faut
        accélérer, freiner, changer de direction, communiquer et prendre des décisions en quelques
        secondes.
      </p>

      <h2 id="principe">Le principe du flag football en cinq points</h2>
      <p>
        Le fonctionnement du jeu tient en quelques principes, assimilables dès le premier
        entraînement.
      </p>
      <ul>
        <li>
          <strong>Deux équipes de cinq joueurs.</strong> Le format international et olympique se
          joue à 5 contre 5.
        </li>
        <li>
          <strong>Un terrain compact.</strong> La zone de jeu mesure 50 yards de long sur 25 yards
          de large, auxquels s’ajoutent deux zones d’en-but de 10 yards : 70 yards au total.
        </li>
        <li>
          <strong>Le déflagage remplace le plaquage.</strong> Le défenseur met fin à l’action en
          retirant un flag accessible, sans saisir, bloquer ni plaquer le porteur du ballon.
        </li>
        <li>
          <strong>Sept secondes pour décider.</strong> Après le snap, le quarterback dispose de sept
          secondes pour lancer ou transmettre le ballon.
        </li>
        <li>
          <strong>Aucun contact.</strong> Ni plaquage, ni blocage, ni jeu au pied : tout se gagne
          par les appuis, la vitesse, les mains et la lecture du jeu.
        </li>
      </ul>
      <p>
        Cette architecture produit des séquences courtes et très denses : quelques secondes pour
        s’aligner, identifier la défense et exécuter la combinaison. Le détail complet, faute par
        faute, est dans notre guide des{' '}
        <Link href="/blog/regles-flag-football/">règles du flag football</Link>.
      </p>

      <h2 id="differences">Le flag n’est pas du football américain au rabais</h2>
      <p>
        Les règles officielles de la FFFA sont claires : même si le règlement du flag s’appuie
        historiquement sur celui du football américain, toutes les situations propres au flag sont
        réglementées indépendamment. Le 5 contre 5, les zones de non-course, le déflagage, les
        priorités de passage, l’absence de blocage et de coups de pied créent un jeu différent dans
        son rythme comme dans ses choix tactiques.
      </p>
      <p>
        Le football américain au contact valorise notamment le combat de ligne, les blocs, les
        plaquages, la gestion des unités et la spécialisation de nombreux postes ; pour savoir{' '}
        <Link href="/blog/comment-pratiquer-le-football-americain-en-france/">
          comment pratiquer le football américain en France
        </Link>
        , c’est une autre porte d’entrée. Le flag, lui, concentre le jeu sur l’espace, les duels
        d’appuis, la qualité de passe, les mains, le timing et la lecture. Les deux disciplines ont
        des racines communes ; aucune n’est la version mineure de l’autre.
      </p>

      <h2 id="exigences">Un sport rapide, athlétique et profondément stratégique</h2>
      <h3>En attaque : créer l’espace avant qu’il n’existe</h3>
      <p>
        Une bonne attaque ne se contente pas d’envoyer des receveurs courir. Elle combine des tracés
        pour étirer une zone, isoler un défenseur ou provoquer une mauvaise communication. Le
        quarterback doit identifier la couverture, anticiper l’ouverture et lancer avant même que le
        receveur ne soit complètement démarqué. Les receveurs, eux, doivent vendre une direction,
        casser leurs appuis au bon moment et rester synchronisés avec le ballon.
      </p>
      <h3>En défense : lire, communiquer, refermer</h3>
      <p>
        La défense choisit ses leviers : couvrir en homme à homme, protéger des zones, masquer sa
        structure ou envoyer un blitzeur depuis la profondeur réglementaire. Tous les défenseurs
        placés à sept yards ou davantage peuvent franchir la ligne de mêlée ; jusqu’à deux peuvent
        se signaler comme blitzeurs pour obtenir une priorité de passage. Le défi n’est donc pas
        seulement de courir vite, mais de comprendre ce que l’attaque cherche à provoquer.
      </p>
      <h3>Physiquement : répéter des efforts explosifs</h3>
      <p>
        Un match enchaîne accélérations, freinages, changements de direction, sauts de réception et
        sprints courts. « Sans contact » signifie que les plaquages et les blocs sont interdits ;
        cela ne signifie pas « sans intensité ». À haut niveau, le flag demande de l’explosivité, de
        la mobilité, de la coordination, des mains fiables et la capacité à reproduire ces qualités
        sous fatigue.
      </p>

      <h2 id="profils">Quels profils réussissent en flag football ?</h2>
      <p>
        On peut débuter sans avoir pratiqué le football américain. Mais les qualités développées
        dans d’autres disciplines se transfèrent particulièrement bien au flag :
      </p>
      <ul>
        <li>
          <strong>Tennis, badminton et sports de raquette :</strong> lecture de trajectoire,
          réaction, coordination oeil-main, reprises d’appuis et capacité à gagner un duel dans un
          espace court.
        </li>
        <li>
          <strong>Basketball :</strong> changements de direction, démarquage, lecture des espaces,
          réception en mouvement, défense individuelle et communication.
        </li>
        <li>
          <strong>Football :</strong> appels, accélérations, orientation du corps, vision
          périphérique et compréhension du jeu sans ballon.
        </li>
        <li>
          <strong>Rugby :</strong> manipulation du ballon ovale, lignes de course, lecture défensive
          et capacité à avancer dans un espace qui se referme.
        </li>
        <li>
          <strong>Handball :</strong> feintes, explosivité, précision de passe, prises d’information
          et capacité à attaquer les intervalles.
        </li>
        <li>
          <strong>Athlétisme et préparation physique :</strong> vitesse pure, qualité de pied,
          relance et répétition de sprints.
        </li>
      </ul>
      <p>
        Ces passerelles font du flag une excellente discipline de transition ou un second projet
        sportif pour des joueuses et joueurs déjà athlétiques. Elles ne ferment pas la porte aux
        débutants : la technique de passe, les tracés, la défense et le playbook s’apprennent à
        l’entraînement. Ce qui compte au départ, c’est l’envie de progresser, d’écouter et de
        s’engager dans le collectif.
      </p>

      <h2 id="roles">Qui joue où ?</h2>
      <p>
        À cinq contre cinq, les rôles existent mais restent bien moins figés qu’au football
        américain à onze : le quarterback pilote l’attaque, le centre réalise le snap puis devient
        une option de réception, les receveurs créent la séparation, le porteur de balle progresse
        ballon en main, et la défense se partage entre blitzeur et joueurs de couverture.
      </p>
      <p>
        Selon les systèmes et les remplacements, un même joueur peut assurer plusieurs de ces rôles
        dans le même match. Le détail de chacun, gabarit par gabarit, est dans notre guide sur{' '}
        <Link href="/blog/postes-football-americain/">
          les postes au football américain et au flag
        </Link>
        .
      </p>

      <CtaQuiz bouton="Je fais le test de poste" />

      <h2 id="accessible">Accessible ne veut pas dire seulement loisir</h2>
      <p>
        Le flag est accessible parce qu’il demande peu d’équipement, qu’il interdit le plaquage et
        qu’un débutant peut rapidement participer à des situations de jeu. Cette accessibilité
        permet à des femmes et des hommes, à des jeunes et à des adultes, de partager une même
        culture sportive.
      </p>
      <p>
        Mais la discipline possède aussi une vraie filière de compétition : championnats nationaux,
        Coupe de France, sélections et compétitions internationales. On peut venir découvrir un
        nouveau sport, rechercher un collectif ou construire un projet de performance. Ces ambitions
        coexistent sans réduire le flag à une simple activité de loisir.
      </p>

      <h2 id="mixite">Le flag football est-il mixte ?</h2>
      <p>
        En France, une partie importante de la pratique en club est mixte, notamment dans le
        championnat national. La Coupe de France propose aussi des compétitions féminines et
        masculines. À l’international et aux Jeux Olympiques de 2028, les tournois seront séparés
        entre femmes et hommes.
      </p>
      <p>
        La mixité ne signifie pas que toutes les qualités se valent ou que le niveau physique
        disparaît. Elle met en avant la complémentarité : vitesse, précision, mains, lecture,
        explosivité et communication peuvent s’exprimer dans des rôles différents au service du même
        système.
      </p>

      <h2 id="jo-2028">Pourquoi les JO de Los Angeles 2028 changent la dimension du flag</h2>
      <p>
        Le flag football fera ses débuts olympiques à Los Angeles en 2028, avec un tournoi féminin
        et un tournoi masculin à 5 contre 5. Cette reconnaissance ne crée pas la discipline : elle
        consacre une pratique déjà structurée par des fédérations, des équipes nationales et des
        compétitions internationales.
      </p>
      <p>
        Ce que cette entrée au programme olympique change concrètement pour les clubs français, on
        le détaille dans notre article sur{' '}
        <Link href="/blog/flag-football-jo-2028/">le flag football aux JO 2028</Link>.
      </p>

      <h2 id="jouer">Et pour jouer ?</h2>
      <p>
        Les Pionniers de Touraine accueillent les joueuses et joueurs au Stade de la Chambrerie,
        2-4 rue de Tartifume à Tours : créneaux seniors et juniors en semaine, et une{' '}
        <Link href="/ecole-de-flag/">école de flag</Link> le samedi matin pour les plus jeunes. Les
        catégories, les horaires de la saison et les modalités d’essai sont détaillés sur la page
        consacrée au{' '}
        <Link href="/flag-football/">flag football à Tours et en Indre-et-Loire</Link>. Que tu
        viennes du basket, du tennis, du football, du rugby, du handball, de l’athlétisme ou
        d’aucun sport, le staff t’aide à identifier les qualités que tu peux transférer et le rôle
        qui te correspond.
      </p>

      <CtaTunnel
        titre="Envie d’essayer ?"
        texte="Rejoins une séance de découverte de flag football à Tours avec les Pionniers de Touraine. Viens en tenue de sport ; le club fournit les ballons et les ceintures à flags."
        bouton="Je viens essayer"
      />

      <Faq
        titre="Questions fréquentes sur le flag football"
        items={[
          {
            q: 'Quelle est la différence entre le flag football et le football américain ?',
            r: (
              <p>
                Les deux disciplines partagent des origines, le ballon, le touchdown, le snap et une
                partie du vocabulaire tactique. Le flag se joue principalement à 5 contre 5 sans
                plaquage, sans blocage ni jeu au pied. Son règlement, son terrain, son rythme et
                plusieurs de ses concepts sont spécifiques.
              </p>
            ),
          },
          {
            q: 'Faut-il avoir joué au foot US pour commencer ?',
            r: (
              <p>
                Non. Les techniques et le règlement s’apprennent au club. Les expériences acquises
                dans d’autres sports collectifs, de raquette ou d’explosivité peuvent même
                constituer une excellente base.
              </p>
            ),
          },
          {
            q: 'Le flag football est-il un sport de compétition ?',
            r: (
              <p>
                Oui. La France organise des championnats nationaux et une Coupe de France, et la
                discipline possède des compétitions internationales ainsi que des équipes
                nationales. Elle entrera au programme olympique à Los Angeles en 2028.
              </p>
            ),
          },
          {
            q: 'Le flag football est-il physique ?',
            r: (
              <p>
                Oui. Il demande des sprints, des changements de direction, des freinages, de la
                coordination et de la répétition d’efforts. L’absence de plaquage réduit les impacts
                recherchés, mais pas l’intensité athlétique.
              </p>
            ),
          },
          {
            q: 'Peut-on pratiquer le flag football en mixte ?',
            r: (
              <p>
                Oui. Le championnat de France de clubs comprend une pratique mixte. Il existe
                également des compétitions féminines et masculines, notamment en Coupe de France et
                à l’international.
              </p>
            ),
          },
          {
            q: 'Où faire du flag football à Tours ou en Indre-et-Loire ?',
            r: (
              <p>
                Les Pionniers de Touraine s’entraînent au Stade de la Chambrerie à Tours. Le club
                propose du flag pour les seniors, les juniors et les enfants, avec des séances de
                découverte pour les nouveaux pratiquants.
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
