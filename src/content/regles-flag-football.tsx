import Link from 'next/link';
import { CtaQuiz, CtaTunnel } from '@/components/blog/CtaEncart';

/**
 * Article. Mot-clé : « règles flag football ».
 * Le 5 contre 5 expliqué en entier : principe du déflagage, terrain et zones,
 * effectif et rôles, déroulé d’une action, scoring, temps de jeu, fautes
 * courantes, équipement, comparatif flag / football américain, format mixte
 * et pratique au club. Cohérent avec l’article « flag football, c’est quoi ? ».
 */
export default function ArticleReglesFlag() {
  return (
    <>
      <p>
        <strong>
          Le flag football se joue à 5 contre 5, sans plaquage et sans blocage : l’action s’arrête
          quand un défenseur retire l’un des deux flags accrochés à la ceinture du porteur de balle.
        </strong>{' '}
        C’est tout le règlement en une phrase, et c’est déjà suffisant pour comprendre un match du
        début à la fin. Le reste, ce sont des précisions utiles : les dimensions du terrain, le
        compteur de tentatives, les sept secondes accordées au quarterback, la zone où l’on n’a pas
        le droit de courir, et une petite famille de fautes qu’on ne trouve nulle part ailleurs.
      </p>
      <p>
        Ce guide est écrit par les <strong>Pionniers de Touraine</strong>, club de football américain
        et de flag football fondé à Tours en <strong>1987</strong>. On l’a pensé pour trois lecteurs :
        celui qui va jouer son premier match et veut arriver en connaissant le cadre, celui qui vient
        voir jouer quelqu’un et voudrait suivre l’action, et le parent qui inscrit son enfant et se
        demande ce qui est réellement autorisé sur le terrain. Aucune connaissance préalable n’est
        nécessaire.
      </p>
      <p>
        Une précision d’emblée, parce qu’elle revient à chaque discussion : le flag n’est pas une
        version édulcorée du football américain. Il en partage le ballon, le touchdown, le snap et
        une partie du vocabulaire, mais son règlement est écrit à part, ses situations de jeu lui
        sont propres et ses qualités déterminantes ne sont pas les mêmes. Si tu veux la présentation
        générale de la discipline, ses profils de joueurs et sa culture, c’est dans notre article{' '}
        <Link href="/blog/flag-football-cest-quoi/">le flag football, c’est quoi ?</Link>. Ici, on
        entre dans les règles.
      </p>

      <div className="blogc-toc">
        <p className="blogc-toc-title">Sommaire</p>
        <ol>
          <li><a href="#principe">Le principe : le déflagage remplace le plaquage</a></li>
          <li><a href="#terrain">Le terrain de flag football et ses zones</a></li>
          <li><a href="#equipe">L’équipe de cinq et les rôles sur le terrain</a></li>
          <li><a href="#action">Le déroulé d’une action, du snap au coup de sifflet</a></li>
          <li><a href="#points">Comment on marque des points</a></li>
          <li><a href="#temps">Le temps de jeu et le déroulé d’un match</a></li>
          <li><a href="#fautes">Les fautes les plus courantes</a></li>
          <li><a href="#equipement">L’équipement : ceinture, flags, protège-dents, crampons</a></li>
          <li><a href="#comparatif">Flag football et football américain : le comparatif</a></li>
          <li><a href="#mixte">Le format mixte, une spécificité française</a></li>
          <li><a href="#club">Comment ça se joue aux Pionniers de Touraine</a></li>
          <li><a href="#faq">Questions fréquentes</a></li>
        </ol>
      </div>

      <h2 id="principe">Le principe : le déflagage remplace le plaquage</h2>
      <p>
        Deux équipes s’affrontent sur un terrain rectangulaire. L’une attaque et cherche à amener le
        ballon dans la zone d’en-but adverse, l’autre défend et cherche à l’en empêcher. Jusque-là,
        c’est la logique de tous les sports de conquête de territoire.
      </p>
      <p>
        La particularité du flag tient à la façon dont on arrête le porteur du ballon. Chaque joueur
        porte une ceinture à laquelle sont accrochés <strong>deux flags</strong>, un de chaque côté
        des hanches. Pour stopper une action, un défenseur doit retirer l’un de ces deux flags. C’est
        le <strong>déflagage</strong>. Dès qu’un flag tombe, l’action est terminée et le ballon est
        replacé à l’endroit où se trouvaient les hanches du porteur au moment du retrait.
      </p>
      <p>
        Cette règle unique produit toutes les autres. Puisqu’on arrête l’adversaire en lui retirant
        un morceau de tissu, il devient logique d’interdire de le saisir, de le pousser, de le
        ceinturer ou de le bloquer : chacune de ces actions rendrait le déflagage impossible ou
        dangereux. Il devient logique aussi d’interdire au porteur de protéger ses flags avec les
        bras ou les mains, sans quoi il suffirait de couvrir sa ceinture pour devenir intouchable.
        L’équilibre du jeu repose sur ces deux interdictions symétriques.
      </p>
      <p>
        Une conséquence pratique en découle : au flag, l’action ne se termine presque jamais par une
        collision. Elle se termine par une main tendue au bon endroit, au bon moment, sur un joueur
        lancé à pleine vitesse. C’est beaucoup plus difficile qu’il n’y paraît, et c’est le geste
        technique le plus travaillé à l’entraînement. Un défenseur qui court aussi vite que le
        porteur mais qui vise mal ne l’arrêtera pas.
      </p>
      <p>
        L’action prend également fin dans plusieurs autres cas : quand une passe tombe au sol sans
        avoir été attrapée, quand le porteur sort du terrain, quand un genou ou une autre partie du
        corps que les mains ou les pieds touche le sol selon le règlement en vigueur, quand la
        ceinture tombe d’elle-même, ou évidemment quand des points sont marqués.
      </p>

      <h2 id="terrain">Le terrain de flag football et ses zones</h2>
      <p>
        Le terrain de flag est nettement plus compact que celui du football américain, et c’est l’une
        des raisons pour lesquelles la discipline s’installe aussi facilement : elle tient sur une
        moitié de terrain classique.
      </p>
      <ul>
        <li>
          <strong>La zone de jeu mesure 50 yards de long sur 25 yards de large.</strong> C’est
          l’espace dans lequel se déroule l’essentiel de l’action, soit environ 46 mètres sur 23.
        </li>
        <li>
          <strong>Deux zones d’en-but de 10 yards</strong> s’ajoutent aux extrémités, une pour chaque
          équipe. Total : <strong>70 yards</strong> de la ligne de fond à la ligne de fond.
        </li>
        <li>
          <strong>La ligne médiane</strong>, au milieu des 50 yards, ne sert pas seulement de repère
          visuel : c’est un objectif intermédiaire du jeu, on y revient dans la section suivante.
        </li>
        <li>
          <strong>Les zones sans course</strong>, situées dans les cinq derniers yards avant une
          ligne d’en-but. Dans cet espace, l’attaque n’a pas le droit de progresser à la course : il
          faut passer. Le nombre exact de zones concernées et leur emplacement figurent dans le
          règlement de la saison en cours, publié par la fédération.
        </li>
      </ul>
      <p>
        Il n’y a ni poteaux, ni surface de réparation, ni couloirs. Un terrain de flag, c’est un
        rectangle, quatre cônes aux angles, deux lignes d’en-but et quelques repères intermédiaires.
        Cette simplicité explique pourquoi le flag se joue aussi bien sur gazon naturel que sur
        synthétique, en salle sur certains formats, ou sur un stade d’athlétisme dont on utilise la
        pelouse centrale.
      </p>
      <p>
        Le contraste avec le football américain est saisissant : là-bas, cent yards de terrain, dix
        yards d’en-but de chaque côté, des poteaux en forme de fourche et des repères tous les cinq
        yards. On détaille tout cela dans notre guide des{' '}
        <Link href="/blog/regles-football-americain/">règles du football américain</Link>. Au flag,
        l’espace réduit a une conséquence directe sur le jeu : tout va plus vite, les défenseurs sont
        toujours proches, et un receveur ne dispose que de quelques mètres pour créer sa séparation.
      </p>

      <h2 id="equipe">L’équipe de cinq et les rôles sur le terrain</h2>
      <p>
        Cinq joueurs de chaque côté, en permanence. Il n’y a pas d’escouades spécialisées comme au
        football américain, où une équipe entière quitte le terrain quand la possession change : au
        flag, les mêmes personnes attaquent et défendent, avec des rotations libres entre les
        actions. C’est l’une des raisons pour lesquelles un débutant touche beaucoup plus vite le
        ballon.
      </p>
      <p>
        Les rôles existent, mais ils sont moins figés qu’à onze contre onze. Selon le système de
        l’équipe et selon les remplacements, un même joueur peut occuper plusieurs fonctions au cours
        d’un match.
      </p>

      <h3>En attaque</h3>
      <ul>
        <li>
          <strong>Le quarterback</strong> reçoit le ballon au snap et distribue le jeu. Il lit la
          défense, choisit sa cible et lance. C’est le poste qui décide le plus, et celui qui subit
          la contrainte de temps la plus forte.
        </li>
        <li>
          <strong>Le centre</strong> effectue le snap, c’est-à-dire la transmission du ballon vers
          l’arrière qui déclenche l’action, puis devient immédiatement une option de réception. Au
          flag, le centre n’est pas un bloqueur : c’est un joueur de champ à part entière.
        </li>
        <li>
          <strong>Les receveurs</strong> courent des tracés préparés, cassent leurs appuis pour se
          démarquer, sécurisent la réception et gagnent des yards après la passe. Trois joueurs sur
          cinq sont souvent dans ce rôle sur une action donnée.
        </li>
        <li>
          <strong>Le porteur de balle</strong> reçoit une transmission de main à main ou une passe
          courte et progresse en utilisant sa vision, ses appuis et ses changements de direction,
          sans jamais protéger ses flags.
        </li>
      </ul>

      <h3>En défense</h3>
      <ul>
        <li>
          <strong>Les défenseurs de couverture</strong> suivent les receveurs en individuel ou
          protègent une zone. Ils lisent les tracés, ferment les angles de passe, déflaguent et
          cherchent l’interception.
        </li>
        <li>
          <strong>Le blitzeur</strong> met le quarterback sous pression. Il ne peut pas partir de
          n’importe où : tous les défenseurs placés à sept yards ou davantage de la ligne de mêlée
          peuvent la franchir, et jusqu’à deux d’entre eux peuvent se signaler comme blitzeurs pour
          obtenir une priorité de passage. Ce recul obligatoire est ce qui laisse au quarterback son
          temps de lecture.
        </li>
      </ul>
      <p>
        Un point qui surprend les nouveaux venus : au flag, il n’y a pas de joueurs de ligne, donc
        pas de poste réservé aux gabarits lourds. Tout le monde court, tout le monde couvre, tout le
        monde peut attraper. Si tu te demandes quel poste te correspondrait dans l’une ou l’autre des
        deux disciplines, notre article sur les{' '}
        <Link href="/blog/postes-football-americain/">postes au football américain</Link> décrit les
        profils en détail.
      </p>

      <CtaQuiz
        titre="Quel poste pour toi, en flag ou en foot US ?"
        texte="Huit questions sur ton gabarit, ta vitesse et ton rapport au contact : notre algorithme de scouting, calibré sur les gabarits réels des joueurs NFL et NCAA, te propose le poste où tu serais le plus utile."
        bouton="Je fais le test"
      />

      <h2 id="action">Le déroulé d’une action, du snap au coup de sifflet</h2>
      <p>
        Comprendre une action de flag, c’est comprendre quatre contraintes qui se superposent. Prises
        une par une, elles sont simples ; c’est leur combinaison qui crée le jeu.
      </p>

      <h3>1. Le compteur de tentatives</h3>
      <p>
        L’attaque part de sa propre zone et dispose de <strong>quatre tentatives pour franchir la
        ligne médiane</strong>. Si elle y parvient, elle obtient une nouvelle série de quatre
        tentatives pour aller marquer. Si elle échoue, la possession change de camp et l’adversaire
        repart de sa propre zone. Il n’y a pas de dégagement au pied : le ballon change simplement de
        propriétaire.
      </p>
      <p>
        Ce compteur est l’équivalent des quatre tentatives pour dix yards du football américain, mais
        avec un seuil unique et fixe au lieu d’une chaîne qui avance. Concrètement, cela change la
        façon de gérer une possession : au flag, on sait dès le premier essai si on joue court ou
        long, parce que la distance à parcourir est connue d’avance.
      </p>

      <h3>2. Le snap</h3>
      <p>
        Chaque action démarre par un snap. Le centre transmet le ballon vers l’arrière, généralement
        au quarterback. Tant que le snap n’a pas eu lieu, personne ne franchit la ligne de mêlée.
        Après le snap, le quarterback peut lancer, transmettre de main à main, ou faire une passe
        latérale selon les possibilités ouvertes par le règlement en vigueur.
      </p>

      <h3>3. Les sept secondes</h3>
      <p>
        C’est la contrainte la plus caractéristique du flag. Après le snap, le quarterback dispose de{' '}
        <strong>sept secondes</strong> pour lancer ou transmettre le ballon. Passé ce délai sans que
        le ballon ait quitté ses mains, l’action est morte et la tentative est consommée.
      </p>
      <p>
        Sept secondes, cela paraît long à la lecture. Sur le terrain, c’est extrêmement court : le
        temps que les receveurs entament leurs tracés, que la couverture se dévoile et que la fenêtre
        de passe s’ouvre, il ne reste presque rien. C’est cette horloge qui donne au flag son rythme
        haché et nerveux, et c’est elle qui rend le poste de quarterback aussi exigeant mentalement.
        Une défense n’a pas besoin d’aller chercher le quarterback : il lui suffit parfois de couvrir
        assez bien pour laisser l’horloge faire le travail.
      </p>

      <h3>4. La zone sans course</h3>
      <p>
        Dans les cinq derniers yards avant l’en-but, l’attaque ne peut pas progresser à la course :
        elle doit compléter un jeu de passe avant. Cette règle empêche une équipe simplement plus
        athlétique de forcer le passage à chaque fois qu’elle approche de la cible, et elle oblige à
        construire des combinaisons dans un espace où il n’y a plus de profondeur à exploiter.
      </p>
      <p>
        C’est souvent la situation la plus intéressante d’un match : cinq yards à franchir, aucun
        espace derrière la défense, obligation de passer et sept secondes au compteur. Les schémas
        joués dans cette zone sont un art à part entière.
      </p>
      <p>
        Dernier élément à connaître : <strong>les interceptions peuvent être remontées</strong>. Un
        défenseur qui s’empare d’une passe adverse peut immédiatement courir vers l’en-but opposé et
        aller marquer. Une seule lecture réussie peut donc renverser complètement une possession, et
        c’est pour cela qu’un quarterback de flag hésite bien plus à forcer une passe qu’un débutant
        ne l’imagine.
      </p>

      <h2 id="points">Comment on marque des points</h2>
      <p>
        Le tableau d’affichage est simple, parce qu’il n’y a pas de jeu au pied : ni dégagement, ni
        field goal, ni coup d’envoi frappé. Tout se marque à la main.
      </p>
      <ul>
        <li>
          <strong>Le touchdown vaut 6 points.</strong> Il est acquis quand un joueur amène le ballon
          dans la zone d’en-but adverse, à la course ou en attrapant une passe. Comme au football
          américain, il n’y a rien à aplatir : franchir la ligne avec le ballon suffit.
        </li>
        <li>
          <strong>La transformation vaut 1 ou 2 points.</strong> Après un touchdown, l’équipe qui
          vient de marquer rejoue une action depuis une distance courte pour 1 point ou depuis une
          distance plus éloignée pour 2 points. Les distances exactes dépendent du règlement de la
          compétition. C’est un choix tactique de fin de match qui compte autant qu’au foot US.
        </li>
        <li>
          <strong>La défense peut marquer.</strong> Une interception remontée jusque dans l’en-but
          adverse rapporte les mêmes 6 points qu’un touchdown offensif. D’autres situations
          défavorables à l’attaque peuvent rapporter des points à la défense selon le règlement
          appliqué : les cas et les valeurs sont détaillés dans les règles de la saison en cours.
        </li>
      </ul>
      <p>
        Retiens surtout ceci : les scores de flag sont élevés. Sur un terrain court, avec une horloge
        qui pousse à jouer vite et sans possibilité de dégager pour se sortir d’une mauvaise
        position, les possessions se succèdent et les touchdowns tombent. Un match serré ne se joue
        presque jamais sur zéro touchdown de part et d’autre.
      </p>

      <h2 id="temps">Le temps de jeu et le déroulé d’un match</h2>
      <p>
        Un match de flag se joue en deux mi-temps, séparées par une pause. Contrairement au football
        américain et à ses quatre quarts-temps entrecoupés d’innombrables arrêts de chronomètre, le
        flag privilégie un déroulé plus continu : le chronomètre tourne pendant l’essentiel de la
        rencontre et ne s’arrête qu’en fin de période et dans certaines situations précises.
      </p>
      <p>
        La durée exacte des mi-temps, les modalités d’arrêt du chronomètre, le nombre de temps morts
        et le format des prolongations varient selon la compétition, la catégorie d’âge et la saison.{' '}
        <strong>Le format évolue chaque saison : réfère-toi au règlement publié par la FFFA</strong>,
        la Fédération Française de Football Américain, qui organise et encadre la discipline en
        France. C’est la seule source qui fasse foi pour une compétition donnée.
      </p>
      <p>
        Ce qu’on peut dire sans risque, c’est ce qu’un match donne à vivre : des rencontres courtes,
        très denses, souvent enchaînées sur une même journée dans le cadre de plateaux ou de
        tournois. Une équipe qui se déplace joue rarement un seul match, ce qui change complètement
        la gestion de l’effort par rapport à un sport à match unique hebdomadaire.
      </p>

      <h2 id="fautes">Les fautes les plus courantes</h2>
      <p>
        Les sanctions au flag prennent presque toujours la forme d’un gain ou d’une perte de terrain,
        parfois assortis d’une répétition de la tentative ou d’un premier essai automatique. Voici
        celles que tu verras dans tous les matchs, expliquées sans jargon.
      </p>

      <h3>Le flag guarding : protéger ses flags</h3>
      <p>
        C’est la faute emblématique de la discipline, et de très loin la plus commise par les
        débutants. Le porteur de balle n’a pas le droit d’empêcher un défenseur d’atteindre ses
        flags : ni avec la main, ni avec le bras, ni avec le coude, ni en abaissant le ballon devant
        sa ceinture, ni en pivotant volontairement pour couvrir un flag avec son corps.
      </p>
      <p>
        Le réflexe est pourtant naturel. Quiconque a joué au rugby ou au football tend
        instinctivement le bras vers l’adversaire qui arrive. Au flag, ce geste est sanctionné, et
        c’est la première chose qu’un coach corrige chez un nouveau joueur. La solution technique
        consiste à courir bras hauts, à ne pas baisser le ballon et à gagner par les appuis plutôt
        que par le contact.
      </p>

      <h3>Le contact et le blocage</h3>
      <p>
        Il n’y a ni plaquage, ni bloc, ni écran réalisé au contact. Un attaquant ne peut pas se
        placer volontairement dans la trajectoire d’un défenseur pour le retarder physiquement, et un
        défenseur ne peut pas pousser, tirer, retenir ou ceinturer le porteur pour l’arrêter. Le
        raccourci « sans contact » a ses limites : dans un sport joué à pleine vitesse dans un espace
        réduit, des contacts fortuits arrivent forcément. Ce qui est interdit, c’est le contact{' '}
        <em>recherché</em>, celui qui remplace le geste technique.
      </p>
      <p>
        C’est un point important pour les parents : le flag est la porte d’entrée idéale vers la
        culture du football américain précisément parce que cette dimension est retirée. Notre{' '}
        <Link href="/ecole-de-flag/">école de flag</Link> accueille d’ailleurs les enfants de U7 à
        U18 dans ce cadre-là.
      </p>

      <h3>Le déflagage irrégulier</h3>
      <p>
        Le défenseur doit retirer un flag accessible, sans saisir le joueur, sans arracher la
        ceinture entière quand ce n’est pas nécessaire, et sans retirer le flag d’un joueur qui n’a
        pas le ballon. Retirer les flags d’un receveur avant qu’il n’ait attrapé la balle est
        également sanctionné : cela reviendrait à le neutraliser par avance.
      </p>

      <h3>Les fautes liées à la passe</h3>
      <p>
        Comme au football américain, ni le receveur ni le défenseur n’ont le droit de gêner l’autre
        dans sa tentative d’attraper un ballon en l’air. Les deux joueurs ont un droit égal à la
        balle. S’ajoutent les fautes propres à la structure du flag : franchir la ligne de mêlée trop
        tôt, blitzer depuis une position non réglementaire, ou tenter de courir dans une zone où la
        course est interdite.
      </p>

      <h3>Les fautes de départ et de temps</h3>
      <p>
        Bouger avant le snap, franchir la ligne avant le déclenchement, dépasser le délai accordé
        pour lancer l’action suivante : ces fautes existent au flag comme partout, et elles se
        sanctionnent par un recul. Elles sont bénignes au milieu d’une rencontre et coûteuses dans
        les dernières minutes.
      </p>

      <CtaTunnel
        titre="Les règles s’apprennent en jouant, pas en lisant"
        texte="Semaine découverte offerte aux Pionniers de Touraine, au Stade de la Chambrerie à Tours : plusieurs séances d’essai, ballons et ceintures fournis, aucun engagement. Viens simplement en tenue de sport."
        bouton="Je viens essayer"
      />

      <h2 id="equipement">L’équipement : ceinture, flags, protège-dents, crampons</h2>
      <p>
        C’est l’un des grands arguments de la discipline : il n’y a presque rien à acheter pour
        commencer. Là où le football américain demande un casque, des épaulières et une série de
        protections, le flag tient dans un sac de sport.
      </p>
      <ul>
        <li>
          <strong>La ceinture à flags.</strong> Elle se porte à la taille et supporte les deux flags,
          détachables par un système d’attache rapide. Les clubs en fournissent pour les
          entraînements et les découvertes, y compris aux Pionniers.
        </li>
        <li>
          <strong>Les flags.</strong> Deux bandes de tissu, une de chaque côté des hanches. Elles
          doivent être visibles et accessibles pendant toute l’action : c’est la raison pour laquelle
          les règlements demandent une tenue qui ne les recouvre pas.
        </li>
        <li>
          <strong>Le protège-dents.</strong> Élément personnel, à sa propre taille. C’est le seul
          achat que l’on conseille systématiquement dès le premier entraînement, pour des raisons
          évidentes d’hygiène.
        </li>
        <li>
          <strong>Les crampons.</strong> Des chaussures à crampons moulés, du type de celles
          utilisées au football ou au rugby, conviennent parfaitement. Les crampons métalliques sont
          à proscrire. Une paire de chaussures de sport suffit largement pour une première séance.
        </li>
        <li>
          <strong>La tenue.</strong> Short et maillot, avec une exigence à retenir : rien ne doit
          masquer la ceinture ni gêner l’accès aux flags. Les règlements de compétition précisent les
          conditions exactes, notamment sur les poches et sur la façon de porter le maillot.
        </li>
        <li>
          <strong>Les gants.</strong> Facultatifs. Certains joueurs les utilisent pour la préhension
          du ballon, surtout par temps humide. Ce n’est pas un prérequis pour débuter.
        </li>
      </ul>
      <p>
        Aucun de ces éléments n’est indispensable pour venir essayer : le club prête ce qu’il faut le
        temps de la découverte. Pour comparer, l’inventaire complet côté football américain au
        contact est détaillé dans notre article sur l’{' '}
        <Link href="/blog/equipement-football-americain-debutant/">
          équipement du football américain pour débuter
        </Link>
        , et le sujet du budget est traité dans{' '}
        <Link href="/blog/combien-coute-le-football-americain/">
          combien coûte le football américain
        </Link>
        .
      </p>

      <h2 id="comparatif">Flag football et football américain : le comparatif</h2>
      <p>
        Les deux disciplines partagent le ballon, le touchdown, le snap et une partie du vocabulaire
        tactique. Tout le reste diverge. Voici les différences qui comptent réellement quand on
        choisit l’une ou l’autre.
      </p>
      <div className="blogc-table-scroll">
        <table>
          <thead>
            <tr>
              <th scope="col">Critère</th>
              <th scope="col">Flag football</th>
              <th scope="col">Football américain</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Effectif</th>
              <td>5 contre 5</td>
              <td>11 contre 11, avec des formats à effectif réduit selon les compétitions</td>
            </tr>
            <tr>
              <th scope="row">Arrêt de l’action</th>
              <td>Retrait d’un flag à la ceinture</td>
              <td>Plaquage au sol</td>
            </tr>
            <tr>
              <th scope="row">Contact</th>
              <td>Ni plaquage ni blocage</td>
              <td>Plaquages et blocs au cœur du jeu</td>
            </tr>
            <tr>
              <th scope="row">Terrain</th>
              <td>50 yards de jeu sur 25 de large, 70 yards en-buts compris</td>
              <td>100 yards de jeu, plus 10 yards d’en-but de chaque côté</td>
            </tr>
            <tr>
              <th scope="row">Horloge de jeu</th>
              <td>7 secondes pour lancer ou transmettre après le snap</td>
              <td>Pas de limite équivalente une fois l’action lancée</td>
            </tr>
            <tr>
              <th scope="row">Jeu au pied</th>
              <td>Aucun</td>
              <td>Dégagements, field goals, transformations et coups d’envoi</td>
            </tr>
            <tr>
              <th scope="row">Équipement</th>
              <td>Ceinture à flags, protège-dents, crampons</td>
              <td>Casque, épaulières, protections, protège-dents, crampons</td>
            </tr>
            <tr>
              <th scope="row">Postes de ligne</th>
              <td>Aucun : les cinq joueurs courent et peuvent recevoir</td>
              <td>Cinq joueurs de ligne offensive, ligne défensive en face</td>
            </tr>
            <tr>
              <th scope="row">Rendez-vous olympique</th>
              <td>Au programme des Jeux de Los Angeles 2028</td>
              <td>Non concerné</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Ce tableau ne dit pas laquelle des deux disciplines est la meilleure : il dit qu’elles ne
        s’adressent pas au même besoin. Le flag récompense la vitesse, les appuis, la qualité de
        passe, les mains et la lecture. Le{' '}
        <Link href="/football-americain/">football américain</Link> y ajoute le combat de ligne, la
        puissance, la technique de bloc et la spécialisation par poste. Beaucoup de joueurs pratiquent
        les deux, et c’est le cas chez nous. Si l’aspect olympique t’intéresse, on lui a consacré un
        article entier :{' '}
        <Link href="/blog/flag-football-jo-2028/">le flag football aux JO de Los Angeles 2028</Link>.
      </p>

      <h2 id="mixte">Le format mixte, une spécificité française</h2>
      <p>
        En France, une partie importante de la pratique en club est mixte, hommes et femmes sur le
        même terrain, dans la même équipe, y compris au plus haut niveau national. La Coupe de France
        propose par ailleurs des épreuves féminines et des épreuves masculines. À l’international et
        aux Jeux Olympiques, les tournois sont séparés entre femmes et hommes.
      </p>
      <p>
        Le format mixte impose ses propres règles de composition d’équipe sur le terrain, et ces
        modalités relèvent du règlement de la compétition concernée. Là encore, le format évolue
        d’une saison à l’autre : le site de la FFFA est la référence.
      </p>
      <p>
        Sur le plan sportif, la mixité n’efface pas les différences physiques : elle organise la
        complémentarité. La vitesse pure, la détente, la précision de passe, la qualité des mains, la
        lecture défensive et la communication sont des qualités distribuées, et un système bien
        construit trouve un rôle décisif pour chacune d’elles. C’est l’une des raisons pour
        lesquelles le flag séduit des joueuses et des joueurs venus de sports très différents, comme
        on l’explique dans notre article sur{' '}
        <Link href="/blog/sport-collectif-tours/">le sport collectif à Tours</Link>.
      </p>

      <h2 id="club">Comment ça se joue aux Pionniers de Touraine</h2>
      <p>
        Toutes ces règles ne servent à rien tant qu’on ne les a pas vues appliquées. Voici où et
        quand le flag se pratique chez nous, au{' '}
        <strong>Stade de la Chambrerie, rue Tartifume, 37100 Tours</strong>.
      </p>
      <ul>
        <li>
          <strong>Flag mixte seniors :</strong> entraînements le lundi et le jeudi de 20 h 15 à
          22 h 45. L’équipe mixte du club est engagée en championnat mixte D1 et en Coupe de France.
        </li>
        <li>
          <strong>Flag mixte juniors, U13 à U18 :</strong> le jeudi de 19 h à 20 h 30.
        </li>
        <li>
          <strong><Link href="/ecole-de-flag/">École de flag</Link>, U7 à U18 :</strong> le samedi de
          10 h à 12 h, pour les enfants nés entre 2009 et 2021. Championnat jeunes U13, U15 et U18, et
          programme NFL Flag pour les U13 et U15.
        </li>
      </ul>
      <p>
        Côté tarifs, la saison de flag loisir seniors est à 100 €, le flag compétition seniors à
        150 €, et l’école de flag à 100 €. La licence FFFA est incluse, le paiement en trois fois est
        possible, et la semaine découverte est offerte avec l’équipement prêté. Le détail complet des
        créneaux et des catégories est sur la page{' '}
        <Link href="/flag-football/">flag football</Link> et dans le récapitulatif de{' '}
        <Link href="/nos-sections/">nos sections</Link>.
      </p>
      <p>
        Ce qui se passe concrètement à un premier entraînement : on t’explique la ceinture, on te
        fait courir quelques tracés simples, on travaille le déflagage à deux, puis on joue. Personne
        ne t’interrogera sur la zone sans course ou sur la position réglementaire du blitzeur. Ces
        règles s’intègrent en jouant, en quelques séances, exactement comme elles se sont intégrées
        pour tous les joueurs du club avant toi. Pour la question de l’âge d’entrée, on a écrit{' '}
        <Link href="/blog/a-quel-age-commencer-le-football-americain/">
          à quel âge commencer le football américain
        </Link>
        , et si tu veux savoir où en sont les compétitions dans lesquelles le club évolue, tout est
        dans{' '}
        <Link href="/blog/championnat-de-france-football-americain/">
          le championnat de France de football américain
        </Link>
        .
      </p>

      <h2 id="faq">Questions fréquentes sur les règles du flag football</h2>

      <h3>Combien de joueurs sur un terrain de flag football ?</h3>
      <p>
        Cinq contre cinq. C’est le format international, celui du championnat de France mixte et
        celui retenu pour les Jeux Olympiques de Los Angeles 2028. Une équipe compte évidemment plus
        de cinq joueurs sur la feuille de match : les remplacements se font librement entre les
        actions, et tout le monde joue à la fois en attaque et en défense, ce qui change beaucoup par
        rapport au football américain et à ses escouades spécialisées.
      </p>

      <h3>Quelles sont les dimensions d’un terrain de flag football ?</h3>
      <p>
        La zone de jeu mesure 50 yards de long sur 25 yards de large, à laquelle s’ajoutent deux
        zones d’en-but de 10 yards, soit 70 yards au total d’une ligne de fond à l’autre. En mètres,
        cela représente environ 64 mètres sur 23. C’est à peu près la moitié d’un terrain de football
        américain, ce qui permet d’installer deux terrains de flag sur une même surface et explique
        en partie la facilité d’implantation de la discipline.
      </p>

      <h3>Comment fonctionne la ceinture de flag football ?</h3>
      <p>
        Chaque joueur porte une ceinture à la taille, sur laquelle sont fixés deux flags, un de
        chaque côté des hanches. Ils se détachent par un système d’attache rapide. Pour arrêter une
        action, un défenseur doit en retirer un, et le ballon est alors replacé à l’endroit où se
        trouvaient les hanches du porteur au moment du retrait. Le porteur, lui, n’a pas le droit de
        protéger ses flags : c’est la faute de flag guarding, la plus fréquente chez les débutants.
        Les ceintures sont fournies par le club à l’entraînement.
      </p>

      <h3>Y a-t-il vraiment zéro contact au flag football ?</h3>
      <p>
        Le plaquage, le blocage, la poussée et la saisie sont interdits et sanctionnés. Cela ne
        signifie pas qu’aucun corps ne se touche jamais : dans un sport joué à pleine vitesse sur un
        terrain court, des contacts fortuits se produisent, comme au basketball ou au handball. La
        différence est fondamentale : au flag, le contact n’est jamais un moyen légitime d’arrêter
        l’adversaire, alors qu’au football américain il en est l’instrument principal. Si c’est
        justement le contact que tu cherches, notre article sur les{' '}
        <Link href="/blog/sport-de-contact-tours/">sports de contact à Tours</Link> compare les
        options.
      </p>

      <h3>Combien de temps le quarterback a-t-il pour lancer ?</h3>
      <p>
        Sept secondes après le snap. S’il n’a ni lancé ni transmis le ballon dans ce délai, l’action
        est terminée et la tentative est perdue. Cette horloge est la contrainte la plus
        caractéristique du flag : elle interdit les longues protections, elle force les receveurs à
        créer leur séparation très vite, et elle donne à la défense une arme passive puissante. Bien
        couvrir pendant sept secondes suffit parfois à gagner une action sans avoir touché personne.
      </p>

      <h3>Peut-on courir avec le ballon au flag football ?</h3>
      <p>
        Oui, la course fait partie du jeu, à une exception près : dans les cinq derniers yards avant
        l’en-but, la progression à la course est interdite et l’attaque doit compléter une passe
        avant. Le nombre de zones concernées et leur emplacement exact figurent dans le règlement de
        la saison en cours. Cette règle empêche une équipe simplement plus rapide de forcer le
        passage systématiquement à l’approche de la cible, et elle produit les situations tactiques
        les plus intéressantes d’un match.
      </p>

      <h3>Faut-il connaître toutes les règles avant son premier entraînement ?</h3>
      <p>
        Non, et personne ne te le demandera. Savoir qu’on joue à cinq, qu’on arrête l’adversaire en
        retirant un flag et qu’on ne protège pas ses propres flags suffit très largement pour une
        première séance. Le reste s’apprend par couches, situation après situation. En quelques
        entraînements, tu joueras sans y penser. Le club propose une semaine découverte offerte, avec
        l’équipement prêté, précisément pour permettre de tester avant de décider. Si tu as une
        question particulière avant de venir, la page <Link href="/contact/">contact</Link> est là
        pour ça.
      </p>

      <CtaTunnel
        titre="Le flag se comprend en deux séances"
        texte="Rejoins un entraînement de flag football à Tours avec les Pionniers de Touraine : lundi et jeudi de 20 h 15 à 22 h 45 pour les seniors, samedi matin pour l’école de flag. Équipement fourni, aucun engagement."
        bouton="Je réserve ma séance d’essai"
      />
    </>
  );
}
