import Link from 'next/link';
import { CtaQuiz, CtaTunnel } from '@/components/blog/CtaEncart';

/**
 * Article. Mot-clé : « règles football américain ».
 * Explication complète et sans jargon : 4 tentatives / 10 yards, terrain,
 * scoring, déroulé du match, fautes courantes, différences NFL / FFFA.
 */
export default function ArticleRegles() {
  return (
    <>
      <p>
        Le football américain a la réputation d’être compliqué. C’est faux, et c’est même l’un des
        malentendus les plus tenaces du sport. Ce qui est compliqué, ce sont les <em>stratégies</em>{' '}
        et le règlement dans ses moindres détails, comme dans n’importe quelle discipline. Les{' '}
        <strong>règles de base</strong>, celles qui suffisent à comprendre absolument tout ce qui se
        passe sur un terrain, tiennent en une phrase et s’apprennent en dix minutes.
      </p>
      <p>
        Cette phrase, la voici : <strong>l’attaque a quatre tentatives pour avancer de dix
        yards</strong>. Si elle y arrive, elle en récupère quatre nouvelles et continue. Si elle
        échoue, elle rend le ballon à l’adversaire. Tout le reste, absolument tout, découle de cette
        mécanique. Le suspense d’un match, la raison pour laquelle une équipe dégage au pied, le
        choix de tenter une passe longue ou une course courte, la valeur d’un mètre gagné : tout se
        lit à travers ce compteur.
      </p>
      <p>
        Ce guide est écrit par les <strong>Pionniers de Touraine</strong>, club de football américain
        et de flag football fondé à Tours en <strong>1987</strong>. On l’a écrit pour deux publics :
        celui qui veut enfin regarder un match sans être perdu, et celui qui envisage d’en faire et
        qui voudrait savoir dans quoi il met les pieds. Aucune connaissance préalable n’est
        nécessaire, et on a évité le jargon partout où il pouvait l’être.
      </p>

      <div className="blogc-toc">
        <p className="blogc-toc-title">Sommaire</p>
        <ol>
          <li><a href="#principe">Le principe fondamental : 4 tentatives, 10 yards</a></li>
          <li><a href="#terrain">Le terrain et ses lignes</a></li>
          <li><a href="#points">Comment on marque des points</a></li>
          <li><a href="#deroule">Le déroulé d’un match et le temps de jeu</a></li>
          <li><a href="#snap">Les positions de base au moment du snap</a></li>
          <li><a href="#fautes">Les fautes les plus courantes, sans jargon</a></li>
          <li><a href="#france">Ce qui change entre la NFL et le jeu en France</a></li>
          <li><a href="#survie">Regarder un match sans être perdu : le guide de survie</a></li>
          <li><a href="#faq">Questions fréquentes</a></li>
        </ol>
      </div>

      <h2 id="principe">Le principe fondamental : quatre tentatives, dix yards</h2>
      <p>
        Une équipe attaque, l’autre défend. L’attaque part d’un point donné du terrain et doit
        avancer vers la zone d’en-but adverse. Pour cela, elle dispose de <strong>quatre
        tentatives</strong>, appelées « downs », pour gagner <strong>dix yards</strong>, soit un peu
        plus de neuf mètres.
      </p>
      <p>
        Le déroulement est toujours le même. Première tentative : l’attaque avance de trois yards. Il
        lui en reste donc sept à gagner, et trois tentatives pour le faire. Deuxième tentative :
        elle avance de quatre yards. Il lui en reste trois, avec deux tentatives. Troisième
        tentative : elle avance de quatre yards, dépasse la barre des dix, et le compteur repart à
        zéro : quatre nouvelles tentatives pour dix nouveaux yards, depuis l’endroit où elle s’est
        arrêtée. C’est ce qu’on appelle un « premier down », et c’est l’unité de mesure du progrès
        dans ce sport.
      </p>
      <p>
        Si au bout de trois tentatives l’attaque n’a pas parcouru ses dix yards, elle arrive à la
        quatrième et doit choisir. Trois options, et le choix dépend presque uniquement de sa
        position sur le terrain :
      </p>
      <ul>
        <li>
          <strong>Dégager au pied</strong>. C’est le choix le plus fréquent quand il reste beaucoup
          de terrain à parcourir. Un joueur spécialisé frappe le ballon le plus loin possible pour
          repousser l’adversaire, qui récupère la possession mais très loin de sa cible. On préfère
          rendre le ballon à quatre-vingts mètres de son en-but plutôt qu’à quarante.
        </li>
        <li>
          <strong>Tenter les points au pied</strong>. Si l’attaque est assez proche, elle envoie son
          botteur tenter de faire passer le ballon entre les poteaux. C’est trois points si ça
          rentre, et la perte du ballon sur place si ça échoue.
        </li>
        <li>
          <strong>Jouer la quatrième tentative</strong>. Le pari : tenter de gagner les yards
          manquants. Si ça passe, la série repart. Si ça échoue, l’adversaire récupère le ballon
          exactement là où l’action s’est arrêtée, souvent en excellente position. C’est la décision
          la plus discutée du sport, et celle qui fait exister les fins de match.
        </li>
      </ul>
      <p>
        Retiens cette mécanique et tu comprends déjà quatre-vingts pour cent de ce qui se joue.
        Quand un commentateur dit « troisième et huit », il annonce simplement : troisième tentative,
        huit yards restants à parcourir. Quand il dit « premier et dix », c’est une série qui
        recommence. Le tableau d’affichage indique en permanence ces deux chiffres, et ils suffisent
        à savoir si une équipe est en train de dominer ou de souffrir.
      </p>

      <h2 id="terrain">Le terrain et ses lignes</h2>
      <p>
        Le terrain de football américain mesure cent yards de long entre les deux zones d’en-but,
        auxquelles s’ajoutent dix yards de profondeur pour chacune de ces zones. En largeur, il fait
        un peu plus de cinquante yards. En mètres, cela donne un rectangle de jeu d’environ
        quatre-vingt-onze mètres sur quarante-neuf, en-buts non compris : c’est un peu plus court et
        un peu plus étroit qu’un terrain de football classique.
      </p>
      <p>
        Les marquages au sol servent tous à la même chose, mesurer la progression :
      </p>
      <ul>
        <li>
          <strong>Les lignes tous les cinq yards</strong>, avec un chiffre tous les dix yards. Ces
          chiffres décroissent en s’approchant de chaque en-but, ce qui déroute au début : la ligne
          des 40 yards existe deux fois sur le terrain, une par moitié. On dit toujours « les 40 de
          telle équipe » pour lever l’ambiguïté.
        </li>
        <li>
          <strong>La ligne médiane des 50 yards</strong>, au centre exact du terrain. Franchir cette
          ligne signifie qu’on joue désormais dans le camp adverse, et c’est le premier seuil
          mental d’une possession.
        </li>
        <li>
          <strong>Les zones d’en-but</strong>, aux deux extrémités. Y amener le ballon vaut un
          touchdown. Il suffit que le ballon franchisse la ligne, même si le joueur est encore en
          dehors.
        </li>
        <li>
          <strong>Les poteaux en forme de fourche</strong>, au fond de chaque en-but. C’est entre
          eux et au-dessus de la barre transversale que doit passer le ballon lors des tentatives au
          pied.
        </li>
        <li>
          <strong>Les petits traits au centre du terrain</strong>, appelés hash marks. Chaque action
          repart de l’endroit où la précédente s’est terminée, mais jamais collée à la ligne de
          touche : on ramène le ballon sur ces repères, ce qui garantit qu’il y a toujours de
          l’espace jouable des deux côtés.
        </li>
      </ul>

      <h2 id="points">Comment on marque des points</h2>
      <p>
        Il n’existe que quatre manières de marquer, et elles se retiennent facilement.
      </p>

      <h3>Le touchdown : 6 points</h3>
      <p>
        C’est l’objectif principal. Il est marqué quand le ballon, tenu par un joueur, entre dans la
        zone d’en-but adverse, soit parce que le joueur y court avec, soit parce qu’il y attrape une
        passe. Contrairement au rugby, il n’y a pas besoin d’aplatir le ballon au sol : le simple
        fait de franchir le plan de la ligne avec le ballon suffit.
      </p>

      <h3>La transformation : 1 ou 2 points</h3>
      <p>
        Après chaque touchdown, l’équipe qui vient de marquer choisit entre deux options. Un coup de
        pied entre les poteaux, à courte distance, vaut <strong>1 point</strong> et réussit la
        grande majorité du temps. Ou bien elle rejoue une action depuis quelques yards devant
        l’en-but, en course ou à la passe, pour <strong>2 points</strong> : c’est nettement plus
        risqué, et ça se tente quand l’écart au score l’exige. Ce petit choix crée une arithmétique
        de fin de match qui explique beaucoup de décisions apparemment étranges.
      </p>

      <h3>Le field goal : 3 points</h3>
      <p>
        L’équipe renonce à marquer un touchdown et tente de faire passer le ballon entre les
        poteaux depuis le terrain. Le ballon est tenu au sol par un coéquipier et frappé par le
        botteur. Plus la tentative part de loin, plus elle est difficile, et l’essentiel des
        tentatives se joue à des distances où la réussite reste incertaine. Un field goal manqué
        rend le ballon à l’adversaire.
      </p>

      <h3>Le safety : 2 points pour la défense</h3>
      <p>
        C’est le plus rare et le plus contre-intuitif. Si un joueur attaquant est arrêté avec le
        ballon <em>dans sa propre zone d’en-but</em>, la défense marque deux points, et l’attaque
        doit en plus rendre le ballon au pied. C’est la double peine, et c’est souvent un tournant
        de match.
      </p>
      <p>
        Une dernière précision utile : la défense peut aussi marquer un touchdown. Si elle
        intercepte une passe ou récupère un ballon perdu et le ramène dans l’en-but adverse, elle
        marque six points comme n’importe quelle attaque. Ces actions sont rares et changent
        généralement le cours d’une rencontre.
      </p>

      <CtaQuiz
        titre="Tu comprends le jeu : à quel poste le jouerais-tu ?"
        texte="Huit questions sur ta taille, ton poids, ta vitesse et ton rapport au contact : notre algorithme de scouting, calibré sur les gabarits réels des joueurs NFL et NCAA, te propose ton poste, en foot US ou en flag."
        bouton="Je fais le test"
      />

      <h2 id="deroule">Le déroulé d’un match et le temps de jeu</h2>
      <p>
        Un match se joue en <strong>quatre quarts-temps</strong>, avec une mi-temps au milieu. La
        durée officielle d’un quart-temps varie selon les niveaux et les compétitions, mais ce n’est
        pas là que se trouve la vraie particularité. La vraie particularité, c’est que le{' '}
        <strong>chronomètre s’arrête très souvent</strong>.
      </p>
      <p>
        Il s’arrête notamment quand une passe n’est pas attrapée, quand un joueur sort du terrain,
        quand une équipe gagne un premier down dans certaines situations, à chaque faute, et à chaque
        temps mort demandé par une équipe. Résultat : un quart-temps de douze minutes de jeu effectif
        occupe beaucoup plus de douze minutes réelles, et un match complet dure généralement deux
        heures à deux heures et demie.
      </p>
      <p>
        C’est le point qui déroute le plus les nouveaux spectateurs, alors autant l’assumer : le
        football américain est un sport <strong>haché</strong>. Chaque action dure entre quatre et
        huit secondes, puis tout s’arrête, les équipes se regroupent, le schéma suivant est décidé,
        et ça repart. Ce n’est pas un défaut de rythme, c’est le cœur du jeu : ces intervalles sont
        exactement ce qui permet la dimension stratégique, les ajustements et les substitutions
        massives entre les escouades.
      </p>
      <p>
        Le déroulé standard d’un match ressemble à ceci. Un tirage au sort décide qui reçoit le
        ballon en premier. La rencontre s’ouvre sur un coup de pied d’engagement, une équipe frappe
        le ballon vers l’autre, qui le récupère et le remonte le plus loin possible. À partir de là,
        l’attaque prend le terrain et la mécanique des quatre tentatives commence. Elle continue
        jusqu’à ce qu’il y ait un changement de possession, par points marqués, par dégagement au
        pied, par balle perdue ou par échec sur une quatrième tentative. À la mi-temps, les équipes
        changent de côté et la possession initiale s’inverse.
      </p>
      <p>
        En cas d’égalité à la fin du temps réglementaire, une prolongation est jouée selon un
        format qui varie d’une compétition à l’autre. L’idée générale reste la même : donner à
        chaque équipe une chance équitable d’attaquer.
      </p>

      <h2 id="snap">Les positions de base au moment du snap</h2>
      <p>
        Le « snap » est le geste qui déclenche chaque action : le joueur placé au centre de la ligne
        envoie le ballon entre ses jambes vers l’arrière, presque toujours vers le quarterback. Tant
        que ce geste n’a pas eu lieu, rien ne peut bouger. Juste avant, le terrain ressemble à ceci.
      </p>
      <p>
        <strong>Côté attaque</strong>, une règle structure tout : il doit y avoir{' '}
        <strong>au moins sept joueurs alignés sur la ligne de mêlée</strong>, cette ligne imaginaire
        qui passe par la pointe du ballon. Au centre de ces sept, cinq joueurs massifs forment la
        ligne offensive : ils protègent et bloquent, et ne peuvent pas recevoir de passe. Derrière
        eux, le quarterback, un ou deux coureurs, et des receveurs répartis sur les côtés. Ces
        joueurs-là sont libres de courir et de recevoir. Un seul joueur de l’attaque peut être en
        mouvement au moment du snap, et jamais vers l’avant.
      </p>
      <p>
        <strong>Côté défense</strong>, aucune contrainte d’alignement équivalente : les onze
        défenseurs se placent comme ils veulent, à condition de rester de leur côté du ballon. En
        pratique, ils se répartissent en trois étages, la ligne défensive au contact immédiat, les
        linebackers derrière, et les defensive backs au fond pour couvrir les receveurs. La défense
        bouge librement avant l’action, ce qui fait partie du jeu de bluff avec le quarterback.
      </p>
      <p>
        Une autre règle change tout par rapport au rugby : la passe vers l’avant est{' '}
        <strong>autorisée, mais une seule fois par action</strong>, et uniquement depuis derrière la
        ligne de mêlée. C’est cette règle qui crée la géométrie du sport : des joueurs qui courent
        des tracés, des défenseurs qui les couvrent, un lanceur protégé par une poche de bloqueurs.
        Le détail de qui fait quoi dans cette organisation est dans notre article sur{' '}
        <Link href="/blog/postes-football-americain/">les postes au football américain</Link>.
      </p>

      <h2 id="fautes">Les fautes les plus courantes, expliquées sans jargon</h2>
      <p>
        Quand un arbitre lance un drapeau jaune au sol, une faute a été commise. La sanction est
        presque toujours un recul en yards, parfois assorti d’une répétition ou d’une validation
        automatique de la tentative. Voici celles que tu verras dans tous les matchs.
      </p>

      <h3>Le hors-jeu et le faux départ</h3>
      <p>
        Avant le snap, personne ne doit franchir la ligne ni bouger. Un défenseur qui la franchit
        trop tôt est <strong>hors-jeu</strong> ; un attaquant qui bouge avant le déclenchement fait
        un <strong>faux départ</strong>. Dans les deux cas la sanction est un recul de cinq yards
        pour l’équipe fautive. C’est la faute la plus fréquente du sport, et la plus facile à
        repérer pour un spectateur débutant : tout le monde s’arrête, et un joueur a l’air très
        gêné.
      </p>

      <h3>Le holding : retenir l’adversaire</h3>
      <p>
        C’est la faute la plus discutée. Un bloqueur a le droit de pousser son adversaire, de le
        contrôler avec les mains à l’intérieur de son buste, mais pas de l’<strong>agripper ou de le
        retenir</strong> pour l’empêcher de passer. La différence entre un bon bloc et un holding
        tient parfois à quelques centimètres de placement de mains, ce qui explique pourquoi cette
        faute alimente les débats de comptoir depuis toujours. La sanction est un recul significatif
        pour l’attaque, et elle tue souvent une belle action.
      </p>

      <h3>La pass interference : gêner un receveur</h3>
      <p>
        Pendant qu’un ballon est en l’air, ni le receveur ni le défenseur n’ont le droit de gêner
        l’autre dans sa tentative de l’attraper : pas de bras tiré, pas de poussée, pas de contact
        qui empêche d’aller vers le ballon. Les deux joueurs ont un droit égal à la balle. Commise
        par la défense, cette faute est l’une des plus lourdement sanctionnées du sport, parce
        qu’elle prive l’attaque d’une occasion réelle.
      </p>

      <h3>Les fautes de sécurité</h3>
      <p>
        Une famille entière de règles protège les joueurs, et elle est prise très au sérieux à tous
        les niveaux : interdiction de viser la tête ou le cou, interdiction de plaquer en baissant
        la tête pour percuter avec le casque, protection renforcée du quarterback une fois qu’il a
        lancé, protection du botteur pendant son geste, interdiction d’attraper un joueur par
        l’arrière du col ou par la grille du casque. Ces fautes sont fortement pénalisées et peuvent
        entraîner une exclusion. C’est un aspect du règlement qu’un parent ou un débutant a tout
        intérêt à connaître, parce qu’il dit beaucoup de la manière dont le sport est réellement
        encadré en club.
      </p>

      <h3>Le retard de jeu et les fautes de temps</h3>
      <p>
        L’attaque dispose d’un compte à rebours limité entre deux actions pour déclencher la
        suivante. Si elle le dépasse, elle recule de cinq yards. C’est une faute anodine en milieu de
        match et catastrophique dans les dernières minutes, quand chaque seconde compte.
      </p>

      <CtaTunnel
        titre="Les règles s’apprennent bien plus vite sur le terrain"
        texte="Semaine découverte offerte aux Pionniers de Touraine, au Stade de la Chambrerie à Tours : plusieurs séances d’essai, équipement complet prêté, aucun engagement."
        bouton="Je viens essayer"
      />

      <h2 id="france">Ce qui change entre la NFL et le jeu en France</h2>
      <p>
        Les règles que tu viens de lire sont universelles : quatre tentatives, dix yards, six points
        pour un touchdown, trois pour un field goal. Un match de championnat français se lit
        exactement comme un match de NFL. Les différences existent, mais elles portent sur des
        détails d’application, et elles varient selon les compétitions et les catégories.
      </p>
      <p>
        Les principaux points sur lesquels ça peut différer, sans entrer dans des chiffres qui
        changent d’une saison et d’un niveau à l’autre :
      </p>
      <ul>
        <li>
          <strong>La durée des quarts-temps</strong> est généralement plus courte que le format
          professionnel américain, ce qui raccourcit la durée totale d’une rencontre.
        </li>
        <li>
          <strong>Le nombre de joueurs sur le terrain</strong> peut varier selon le niveau de
          compétition. À côté du format classique à onze contre onze, il existe des formats à
          effectif réduit, très répandus dans les championnats régionaux et les catégories jeunes.
          C’est une bonne chose : cela permet à des clubs de taille modeste d’aligner une équipe et
          à un débutant de toucher le ballon beaucoup plus souvent.
        </li>
        <li>
          <strong>Certaines règles de détail</strong>, notamment sur les remises en jeu, les
          prolongations ou les modalités d’arbitrage vidéo, ne sont pas identiques. Elles ne
          changent rien à la compréhension du jeu.
        </li>
      </ul>
      <p>
        La discipline est structurée en France par la <strong>Fédération Française de Football
        Américain</strong>, qui organise les championnats, forme les entraîneurs et les arbitres, et
        délivre les licences. C’est elle qui fixe le règlement applicable dans chaque compétition,
        et c’est la source à consulter si tu veux le détail exact pour une catégorie précise. Pour
        une vue d’ensemble de la pratique en France, on a écrit un guide complet :{' '}
        <Link href="/blog/comment-pratiquer-le-football-americain-en-france/">comment pratiquer le
        football américain en France</Link>.
      </p>
      <p>
        Un mot enfin sur le <strong>flag football</strong>, qui obéit à un règlement nettement
        différent : cinq contre cinq, terrain réduit, aucun contact, et le plaquage remplacé par
        l’arrachage d’une bande de tissu accrochée à la ceinture. Le compteur de tentatives, le
        principe de progression et la logique de passe restent proches, mais tout le volet blocage
        et contact disparaît. Le détail est dans notre article{' '}
        <Link href="/blog/flag-football-cest-quoi/">le flag football, c’est quoi ?</Link>, et le
        format olympique de la discipline aux Jeux de Los Angeles 2028 est en train de le rendre
        beaucoup plus visible.
      </p>

      <h2 id="survie">Regarder un match sans être perdu : le guide de survie</h2>
      <p>
        Si tu regardes ton premier match ce week-end, applique cette méthode. Elle fonctionne, et
        elle t’évitera la sensation de décrochage des vingt premières minutes.
      </p>
      <ul>
        <li>
          <strong>Regarde d’abord le bandeau d’affichage, pas le ballon.</strong> Il te donne la
          tentative en cours et les yards restants. Ces deux chiffres racontent l’histoire mieux que
          l’image. Troisième et douze annonce presque toujours une passe ; deuxième et deux annonce
          presque toujours une course.
        </li>
        <li>
          <strong>Choisis un seul joueur par action et suis-le.</strong> Vouloir tout voir est le
          meilleur moyen de ne rien voir. Prends un receveur pendant dix actions, puis un joueur de
          ligne pendant dix autres. Tu comprendras le jeu par couches, ce qui est exactement la
          manière dont les joueurs eux-mêmes l’apprennent.
        </li>
        <li>
          <strong>Note où en est la possession sur le terrain.</strong> Une équipe dans son propre
          camp joue prudemment, une équipe entrée dans le camp adverse commence à penser aux points.
          C’est le fil narratif de chaque possession.
        </li>
        <li>
          <strong>Ne t’inquiète pas des drapeaux.</strong> Un drapeau jaune veut dire faute, et
          l’arbitre l’annoncera trente secondes plus tard. Tu n’as rien à comprendre dans l’instant.
        </li>
        <li>
          <strong>Accepte les arrêts.</strong> Le rythme haché fait partie du sport. Utilise ces
          quelques secondes pour regarder comment les équipes se replacent : c’est souvent là que se
          joue l’action suivante.
        </li>
      </ul>
      <p>
        Fais ça pendant un match entier, et le suivant sera beaucoup plus clair. Fais ça pendant
        trois matchs, et tu commenceras à anticiper les choix avant qu’ils ne soient faits.
      </p>

      <h2 id="faq">Questions fréquentes sur les règles du football américain</h2>

      <h3>Combien de temps dure un match de football américain ?</h3>
      <p>
        Un match se joue en quatre quarts-temps, mais le temps affiché n’est pas le temps réel :
        comme le chronomètre s’arrête très fréquemment, à chaque passe non attrapée, à chaque sortie
        de terrain, à chaque faute et à chaque temps mort, la durée totale d’une rencontre est
        nettement supérieure à la somme des quarts-temps. En pratique, il faut prévoir de l’ordre de
        deux heures à deux heures et demie du coup d’envoi au coup de sifflet final, mi-temps
        comprise. C’est donc un format d’après-midi ou de soirée, et c’est une information utile
        quand on prévoit d’aller voir un match en famille pour la première fois.
      </p>

      <h3>Quelle est la différence entre un touchdown et un field goal ?</h3>
      <p>
        Le touchdown vaut six points et s’obtient en amenant le ballon dans la zone d’en-but adverse,
        à la course ou en attrapant une passe. Il est suivi d’une transformation, au pied pour un
        point ou en jouant une action pour deux points. Le field goal vaut trois points et s’obtient
        en frappant le ballon entre les poteaux depuis le terrain. Une équipe tente un field goal
        quand elle est assez proche pour espérer réussir mais pas assez efficace pour aller jusqu’à
        l’en-but : c’est le lot de consolation d’une possession qui s’essouffle, et c’est très
        souvent ce qui sépare deux équipes à la fin.
      </p>

      <h3>Pourquoi une équipe donne-t-elle volontairement le ballon à l’adversaire ?</h3>
      <p>
        Parce que le terrain est une monnaie. Quand une attaque arrive à sa quatrième tentative sans
        avoir gagné ses dix yards, tenter de les gagner quand même est risqué : en cas d’échec,
        l’adversaire récupère le ballon sur place, donc très près de sa cible. Dégager au pied revient
        à échanger la possession contre soixante ou soixante-dix mètres de terrain, ce qui est
        souvent le meilleur calcul. C’est l’une des idées les plus contre-intuitives du sport pour un
        spectateur venu du football ou du rugby, et c’est précisément ce qui rend les décisions de
        quatrième tentative si passionnantes en fin de match.
      </p>

      <h3>La passe en avant est-elle vraiment autorisée ?</h3>
      <p>
        Oui, et c’est la différence structurelle majeure avec le rugby. Mais elle est encadrée par
        deux limites simples : une seule passe vers l’avant par action, et elle doit partir de
        derrière la ligne de mêlée. Une fois cette passe effectuée, plus rien ne peut être lancé vers
        l’avant. Les passes vers l’arrière ou latérales, elles, sont autorisées sans limite, et on
        les voit surtout dans les fins de match désespérées. Cette règle unique explique toute la
        géométrie du jeu : les tracés des receveurs, la protection du lanceur, la couverture des
        défenseurs.
      </p>

      <h3>Faut-il connaître les règles avant de commencer en club ?</h3>
      <p>
        Non, et personne ne te le demandera. La quasi-totalité des joueurs français ont découvert les
        règles en jouant, pas en lisant. Savoir qu’une attaque a quatre tentatives pour avancer de
        dix yards suffit très largement pour ton premier entraînement : le reste s’acquiert par
        couches, poste par poste, au fil des séances. En un mois d’entraînements réguliers, tu
        regarderas un match en comprenant ce qui se passe, et en trois mois tu commenteras les choix
        de quatrième tentative avec les autres. Si tu veux te faire une idée avant de venir, notre
        article sur{' '}
        <Link href="/blog/commencer-le-football-americain-adulte/">commencer le football américain
        à l’âge adulte</Link> raconte le déroulé réel d’une première saison.
      </p>

      <h3>Les règles sont-elles les mêmes pour les femmes et pour les jeunes ?</h3>
      <p>
        Le règlement de jeu est le même : quatre tentatives, dix yards, mêmes valeurs de points,
        mêmes fautes. Ce qui varie selon les catégories, ce sont les modalités d’encadrement,
        certaines adaptations de format et les niveaux de contact autorisés chez les plus jeunes,
        avec une progression très encadrée avant l’arrivée au contact complet. Chez les enfants, la
        porte d’entrée est d’ailleurs le flag football, sans aucun contact, ce qui permet
        d’apprendre les règles, les tracés et la lecture du jeu en toute sécurité. C’est le principe
        de notre <Link href="/ecole-de-flag/">école de flag</Link>, ouverte de U7 à U18 le samedi
        matin.
      </p>

      <h2 id="conclusion">Une soirée de règles, une saison de plaisir</h2>
      <p>
        Tu as maintenant tout ce qu’il faut pour suivre un match sans lever les yeux au ciel : la
        mécanique des quatre tentatives, les quatre façons de marquer, la logique du temps de jeu,
        les fautes qui reviennent le plus souvent. Le reste, ce sont des variantes et des
        subtilités, et elles s’ajoutent d’elles-mêmes match après match.
      </p>
      <p>
        Et si en lisant ces règles tu t’es surpris à imaginer où tu te placerais sur le terrain, la
        suite logique est simple. Les Pionniers de Touraine s’entraînent au{' '}
        <strong>Stade de la Chambrerie, rue Tartifume à Tours</strong>, en football américain le
        lundi et le vendredi de 20 h à 23 h et le mercredi de 21 h à 23 h, en flag mixte le lundi et
        le jeudi de 20 h 15 à 22 h 45. Tout est détaillé sur la page{' '}
        <Link href="/football-americain/">football américain</Link> et dans le récapitulatif de{' '}
        <Link href="/nos-sections/">nos sections</Link>.
      </p>

      <CtaTunnel
        titre="Passe de la théorie au terrain"
        texte="La semaine découverte est offerte : plusieurs séances d’essai, équipement complet prêté, un coach dédié aux débutants et zéro engagement. Tu comprendras plus de règles en deux soirées qu’en dix articles."
        bouton="Je réserve ma semaine d’essai"
      />
    </>
  );
}
