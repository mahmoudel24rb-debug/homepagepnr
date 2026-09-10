import Link from 'next/link';
import { CtaQuiz, CtaTunnel } from '@/components/blog/CtaEncart';
import Faq from '@/components/blog/Faq';

/**
 * Article. Mots-clés : « vocabulaire football américain », « quarterback »,
 * « running back », « linebacker », « wide receiver », « touchdown »,
 * « combien de joueurs football américain », « durée match football américain ».
 * 60 entrées, une ancre par terme (h3 id) pour capter les requêtes longue traîne.
 * Aucune durée chiffrée de quart-temps : elle dépend du règlement de la compétition.
 */
export default function ArticleLexique() {
  return (
    <>
      <p>
        Le football américain a la réputation d’être incompréhensible. Ce n’est pas tout à fait
        faux, mais la difficulté n’est pas où on croit : le jeu lui-même est simple, c’est son{' '}
        <strong>vocabulaire</strong> qui bloque. Down, snap, blitz, sack, punt, holding : une
        centaine de mots anglais, jamais traduits, qui se sont installés tels quels dans les
        commentaires et dans les vestiaires français. Tant que ces mots restent opaques, tout
        paraît confus. Le jour où tu en connais soixante, tu suis un match sans effort.
      </p>
      <p>
        Ce lexique est écrit par les <strong>Pionniers de Touraine</strong>, club de football
        américain et de flag football fondé à Tours en <strong>1987</strong>. Il rassemble les
        soixante termes qui reviennent réellement, classés par famille : le jeu et le terrain, les
        postes d’attaque, les postes de défense, les équipes spéciales, les actions et le scoring,
        les fautes, et le vocabulaire propre au flag. Chaque définition est écrite pour être utile
        tout de suite, pas pour être exhaustive.
      </p>
      <p>
        Si tu cherches d’abord la logique d’ensemble plutôt que les mots, commence par{' '}
        <Link href="/blog/regles-football-americain/">les règles du football américain expliquées
        simplement</Link>. Et si tu veux le détail de ce que fait chaque joueur sur le terrain, avec
        les gabarits et les tempéraments qui vont avec, tout est dans notre guide des{' '}
        <Link href="/blog/postes-football-americain/">postes au football américain</Link>. Ici, on
        s’occupe uniquement du vocabulaire.
      </p>

      <div className="blogc-toc">
        <p className="blogc-toc-title">Sommaire</p>
        <ol>
          <li><a href="#essentiel">Les 10 termes à connaître avant ton premier entraînement</a></li>
          <li><a href="#jeu">Le jeu et le terrain</a></li>
          <li><a href="#attaque">Les postes d’attaque</a></li>
          <li><a href="#defense">Les postes de défense</a></li>
          <li><a href="#speciales">Les équipes spéciales</a></li>
          <li><a href="#scoring">Les actions et le scoring</a></li>
          <li><a href="#fautes">Les fautes</a></li>
          <li><a href="#flag">Le vocabulaire du flag football</a></li>
          <li><a href="#chiffres">Combien de joueurs, combien de temps</a></li>
          <li><a href="#faq">Questions fréquentes</a></li>
        </ol>
      </div>

      <div className="blogc-toc" id="essentiel">
        <p className="blogc-toc-title">Les 10 termes à connaître avant ton premier entraînement</p>
        <ol>
          <li><a href="#down">Down</a> : une tentative, quatre pour avancer de dix yards</li>
          <li><a href="#first-down">First down</a> : les dix yards sont franchis, on repart à zéro</li>
          <li><a href="#snap">Snap</a> : le geste qui lance chaque action</li>
          <li><a href="#ligne-de-scrimmage">Ligne de scrimmage</a> : la ligne d’engagement</li>
          <li><a href="#end-zone">End zone</a> : la zone d’en-but à atteindre</li>
          <li><a href="#touchdown">Touchdown</a> : six points, l’objectif</li>
          <li><a href="#huddle">Huddle</a> : le regroupement où le schéma est annoncé</li>
          <li><a href="#playbook">Playbook</a> : le classeur des schémas de ton équipe</li>
          <li><a href="#plaquage">Plaquage</a> : ce qui arrête l’action</li>
          <li><a href="#penalite">Pénalité</a> : le drapeau jaune au sol</li>
        </ol>
      </div>

      <h2 id="jeu">Le jeu et le terrain</h2>

      <h3 id="down">Down (la tentative)</h3>
      <p>
        Une action, du snap jusqu’au coup de sifflet qui l’arrête, et qui dure généralement entre
        quatre et huit secondes. C’est l’unité de base du jeu : on les compte à voix haute et sur
        l’affichage, premier down, deuxième, troisième, quatrième. Le fonctionnement du compteur est
        détaillé dans{' '}
        <Link href="/blog/regles-football-americain/">les règles du football américain</Link>.
      </p>

      <h3 id="first-down">First down (le premier essai)</h3>
      <p>
        La remise à zéro du compteur : quand l’attaque a parcouru les dix yards demandés, elle
        obtient quatre nouvelles tentatives. C’est la vraie unité de mesure du match. L’expression
        « 1st and 10 » signifie simplement première tentative, dix yards à parcourir.
      </p>

      <h3 id="yard">Yard (la verge)</h3>
      <p>
        L’unité de distance du sport, importée telle quelle des États-Unis : un yard vaut environ
        91 centimètres. Le terrain mesure cent yards entre les deux zones d’en-but, avec un marquage
        au sol tous les cinq yards. Toutes les conversations tournent autour de cette unité, donc
        autant s’y faire tout de suite : dix yards, c’est un peu plus de neuf mètres.
      </p>

      <h3 id="ligne-de-scrimmage">Ligne de scrimmage (la ligne d’engagement)</h3>
      <p>
        La ligne imaginaire qui passe par la pointe du ballon posé au sol, et qui sépare les deux
        équipes avant chaque action. Ni l’attaque ni la défense n’a le droit de la franchir avant le
        snap. C’est la référence de tout : les gains se comptent à partir d’elle, et la plupart des
        fautes de départ se jugent par rapport à elle.
      </p>

      <h3 id="end-zone">End zone (la zone d’en-but)</h3>
      <p>
        La zone située à chaque extrémité du terrain, au-delà de la ligne de but. Y amener le ballon
        vaut un touchdown. Chaque équipe attaque une end zone et défend l’autre, et les deux
        s’échangent au fil des quarts-temps.
      </p>

      <h3 id="poteaux">Les poteaux (goal posts)</h3>
      <p>
        La structure en forme de Y plantée au fond de chaque zone d’en-but. C’est la cible de tous
        les coups de pied qui rapportent des points : le ballon doit passer entre les deux montants
        et au-dessus de la barre transversale. Les commentateurs parlent souvent des « uprights »
        pour désigner les montants verticaux.
      </p>

      <h3 id="snap">Snap (l’engagement)</h3>
      <p>
        Le geste qui déclenche chaque action : le center envoie le ballon entre ses jambes, vers
        l’arrière, au quarterback. C’est le repère visuel le plus utile pour un spectateur débutant,
        le jeu commence exactement à cet instant. Ce qui est autorisé ou non avant le snap relève{' '}
        <Link href="/blog/regles-football-americain/">des règles de départ</Link>.
      </p>

      <h3 id="huddle">Huddle (le regroupement)</h3>
      <p>
        Le cercle que forment les onze joueurs de l’attaque entre deux actions pour écouter le
        schéma annoncé par le quarterback. C’est là que le jeu se décide. Une attaque qui joue « no
        huddle » saute cette étape et enchaîne les actions à toute vitesse pour empêcher la défense
        de se réorganiser.
      </p>

      <h3 id="drive">Drive (la série offensive)</h3>
      <p>
        L’ensemble des actions consécutives jouées par une même attaque, depuis le moment où elle
        récupère le ballon jusqu’à celui où elle marque ou le rend. Un drive de dix actions qui
        traverse tout le terrain est l’une des choses les plus satisfaisantes à regarder dans ce
        sport, parce qu’on y voit une équipe imposer son plan minute après minute.
      </p>

      <h3 id="playbook">Playbook (le classeur de jeux)</h3>
      <p>
        Le recueil des schémas de l’équipe, avec un nom et un dessin pour chaque action. Chaque
        joueur apprend la partie qui le concerne, pas l’ensemble, ce qui rend l’exercice beaucoup
        moins effrayant qu’il n’en a l’air. Dans un club français, un débutant commence avec une
        poignée de schémas et les apprend en les jouant.
      </p>

      <h2 id="attaque">Les postes d’attaque</h2>
      <p>
        Ici, on donne le nom et la fonction en une phrase. Le rôle complet de chacun, avec les
        gabarits et les tempéraments, est dans{' '}
        <Link href="/blog/postes-football-americain/">les postes au football américain expliqués</Link>
        . Avant les définitions, le récapitulatif des douze postes qu’on entend le plus :
      </p>
      <div className="blogc-table-scroll">
        <table>
          <thead>
            <tr>
              <th scope="col">Poste</th>
              <th scope="col">Rôle en un mot</th>
              <th scope="col">Qualité dominante</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Quarterback</th>
              <td>Lanceur</td>
              <td>Lecture du jeu</td>
            </tr>
            <tr>
              <th scope="row">Running back</th>
              <td>Coureur</td>
              <td>Explosivité</td>
            </tr>
            <tr>
              <th scope="row">Wide receiver</th>
              <td>Receveur</td>
              <td>Vitesse</td>
            </tr>
            <tr>
              <th scope="row">Tight end</th>
              <td>Hybride</td>
              <td>Polyvalence</td>
            </tr>
            <tr>
              <th scope="row">Ligne offensive</th>
              <td>Protecteur</td>
              <td>Puissance</td>
            </tr>
            <tr>
              <th scope="row">Center</th>
              <td>Snappeur</td>
              <td>Précision</td>
            </tr>
            <tr>
              <th scope="row">Defensive tackle</th>
              <td>Verrou</td>
              <td>Puissance</td>
            </tr>
            <tr>
              <th scope="row">Defensive end</th>
              <td>Chasseur</td>
              <td>Vitesse de départ</td>
            </tr>
            <tr>
              <th scope="row">Linebacker</th>
              <td>Couteau suisse</td>
              <td>Lecture et impact</td>
            </tr>
            <tr>
              <th scope="row">Cornerback</th>
              <td>Marqueur</td>
              <td>Vivacité d’appuis</td>
            </tr>
            <tr>
              <th scope="row">Safety</th>
              <td>Dernier rempart</td>
              <td>Anticipation</td>
            </tr>
            <tr>
              <th scope="row">Kicker</th>
              <td>Botteur</td>
              <td>Sang-froid</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="quarterback">Quarterback (QB)</h3>
      <p>
        Le joueur qui reçoit le ballon au snap et décide de la suite : le donner à un coureur, le
        lancer à un receveur, ou courir lui-même. Il annonce le schéma, lit le placement de la
        défense et dispose de deux à trois secondes pour agir avant d’être pris en chasse. C’est le
        poste le plus exposé du sport, autant par la responsabilité que par les contacts.
      </p>

      <h3 id="running-back">Running back (RB)</h3>
      <p>
        Le porteur de ballon principal sur le jeu de course. Il reçoit le ballon des mains du
        quarterback et cherche une brèche dans la défense, dans un couloir de quelques mètres où
        tout se joue en une fraction de seconde. Il participe aussi à la protection du quarterback,
        une partie du métier que les résumés vidéo ne montrent jamais.
      </p>

      <h3 id="fullback">Fullback (FB)</h3>
      <p>
        Un coureur plus massif, placé en avant du running back, dont le rôle principal est
        d’ouvrir le chemin en bloquant le premier défenseur qui se présente. Il porte parfois le
        ballon sur les distances très courtes. Le poste s’est raréfié dans le jeu moderne, mais il
        reste précieux dans les situations de force.
      </p>

      <h3 id="wide-receiver">Wide receiver (WR)</h3>
      <p>
        Le receveur, placé à l’extérieur du dispositif. Il court un tracé précis, se démarque de son
        défenseur direct et attrape la passe du quarterback. Ce poste demande de la vitesse, de la
        détente, des mains fiables et surtout de la rigueur : un tracé décalé de deux mètres suffit
        à faire échouer une action parfaitement conçue.
      </p>

      <h3 id="slot">Slot receiver</h3>
      <p>
        Un receveur placé non pas au bord du terrain mais dans l’intervalle, entre la ligne
        offensive et le receveur extérieur. Cette position lui donne de l’espace des deux côtés et
        des tracés plus courts, souvent joués vers l’intérieur. C’est le poste de receveur le plus
        accessible aux gabarits vifs et compacts.
      </p>

      <h3 id="tight-end">Tight end (TE)</h3>
      <p>
        L’hybride de l’attaque, placé au bout de la ligne offensive. Sur une action il bloque comme
        un joueur de ligne, sur la suivante il part en tracé et attrape une passe. Sa polyvalence
        oblige la défense à deviner, ce qui en fait l’un des postes les plus valorisés du jeu
        moderne.
      </p>

      <h3 id="ligne-offensive">Ligne offensive (OL)</h3>
      <p>
        Les cinq joueurs alignés épaule contre épaule devant le quarterback. Leur mission double :
        protéger le lanceur et ouvrir des couloirs pour les coureurs. Ils ne touchent presque jamais
        le ballon et ne marquent quasiment jamais, mais aucune attaque ne fonctionne sans eux. Dans
        les vestiaires, on dit que le niveau réel d’une équipe se lit sur sa ligne.
      </p>

      <h3 id="center">Center (C)</h3>
      <p>
        Le joueur du milieu de la ligne offensive, celui qui effectue le snap. Il est aussi le
        cerveau de la ligne : c’est lui qui identifie le placement de la défense et annonce les
        ajustements de blocage à ses quatre coéquipiers, quelques secondes avant le départ de
        l’action.
      </p>

      <h3 id="guard">Guard (G)</h3>
      <p>
        Les deux joueurs situés de part et d’autre du center. Ils affrontent les intérieurs de la
        ligne défensive, les adversaires les plus lourds du terrain, et se déplacent parfois
        latéralement pour aller bloquer ailleurs sur les courses. C’est un poste de puissance pure
        et de technique de mains.
      </p>

      <h3 id="offensive-tackle">Tackle offensif (T)</h3>
      <p>
        Les deux joueurs placés aux extrémités de la ligne offensive. Ils défendent les angles, donc
        la route la plus rapide vers le quarterback, face aux pass rushers les plus véloces de
        l’équipe adverse. Le tackle qui protège le côté aveugle du lanceur est traditionnellement
        l’un des postes les plus recherchés de l’attaque.
      </p>

      <CtaQuiz
        titre="Maintenant que tu as les mots, quel serait ton poste ?"
        texte="Huit questions sur ta taille, ton poids, ta vitesse et ton rapport au contact : notre algorithme de scouting, calibré sur les gabarits réels des joueurs NFL et NCAA, te propose le poste où ton profil aurait le plus de valeur, en foot US ou en flag."
        bouton="Je fais le test de poste"
      />

      <h2 id="defense">Les postes de défense</h2>
      <p>
        Même principe : la définition, pas la fiche de poste. Pour savoir lequel de ces rôles
        correspond à ton profil, va voir{' '}
        <Link href="/blog/postes-football-americain/">les postes au football américain expliqués</Link>
        .
      </p>

      <h3 id="ligne-defensive">Ligne défensive (DL)</h3>
      <p>
        Les trois ou quatre joueurs placés juste en face de la ligne offensive. Leur travail
        commence par un duel de force et de mains dès le snap : franchir, contourner ou repousser
        l’homme en face pour atteindre le porteur du ballon. L’essentiel de leur efficacité se joue
        dans le premier mètre après le départ.
      </p>

      <h3 id="defensive-tackle">Defensive tackle (DT)</h3>
      <p>
        L’intérieur de la ligne défensive, souvent le joueur le plus lourd du terrain. Sa mission
        n’est pas toujours spectaculaire : occuper deux bloqueurs à lui seul suffit à libérer un
        coéquipier, et c’est fréquemment ce qu’on lui demande. Il ferme aussi les couloirs de course
        centraux.
      </p>

      <h3 id="defensive-end">Defensive end (DE)</h3>
      <p>
        L’extérieur de la ligne défensive, plus léger et plus rapide que le defensive tackle. Sa
        spécialité est la course autour de la ligne offensive pour atteindre le quarterback, ce
        qu’on appelle le pass rush. Il doit aussi tenir son côté sur les courses extérieures, sous
        peine d’ouvrir une autoroute.
      </p>

      <h3 id="linebacker">Linebacker (LB)</h3>
      <p>
        Placé derrière la ligne défensive, c’est le poste le plus complet du terrain. Sur une action
        il monte au contact pour stopper un coureur, sur la suivante il recule pour couvrir un
        receveur, sur une troisième il part en pression sur le quarterback. Il lit l’attaque en
        temps réel et transmet les ajustements au reste de la défense, ce qui en fait souvent le
        capitaine du groupe.
      </p>

      <h3 id="cornerback">Cornerback (CB)</h3>
      <p>
        Le défenseur chargé de marquer les receveurs extérieurs, le plus souvent en un contre un.
        C’est le duel le plus individuel du sport : si tu perds ton receveur, la sanction est
        immédiate et visible de toute la tribune. Le poste demande de la vitesse, des appuis et une
        confiance à toute épreuve.
      </p>

      <h3 id="safety-poste">Safety (le poste)</h3>
      <p>
        Le défenseur le plus reculé, dernier rempart de la défense. Il lit l’ensemble du jeu, couvre
        les grands espaces et corrige les erreurs des autres. À ne pas confondre avec le safety qui
        désigne une manière de marquer deux points, décrite plus bas dans ce lexique : même mot,
        deux sens totalement différents.
      </p>

      <h3 id="blitz">Blitz</h3>
      <p>
        Une pression défensive où l’on envoie sur le quarterback plus de joueurs que la seule ligne
        défensive, en y ajoutant un linebacker ou un defensive back. C’est un pari : on augmente
        fortement les chances d’atteindre le lanceur, mais on laisse un joueur de moins en
        couverture. Un blitz réussi tue une action ; un blitz déjoué se paie très cher.
      </p>

      <h3 id="couverture">Couverture homme et couverture de zone</h3>
      <p>
        Les deux grandes manières de défendre la passe. En couverture homme, chaque défenseur suit
        un attaquant désigné partout où il va. En couverture de zone, chaque défenseur surveille un
        secteur du terrain et prend en charge celui qui y entre. La plupart des défenses mélangent
        les deux, et une grande partie du travail du quarterback consiste à deviner laquelle il a en
        face.
      </p>

      <h2 id="speciales">Les équipes spéciales</h2>

      <h3 id="kicker">Kicker (K)</h3>
      <p>
        Le spécialiste des coups de pied placés : field goals et transformations, avec un ballon
        tenu ou posé au sol. C’est le seul poste où le gabarit ne compte pratiquement pas, seule
        importe la répétabilité du geste. Le kicker travaille avec un holder, qui tient le ballon,
        et un long snapper, qui l’envoie en aveugle sur plusieurs mètres.
      </p>

      <h3 id="punter">Punter (P)</h3>
      <p>
        Le joueur qui dégage le ballon au pied, en le lâchant de ses mains, quand l’attaque n’a pas
        réussi à obtenir un nouveau first down. Son objectif n’est pas la distance pure mais le
        placement : repousser l’adversaire le plus loin possible de sa propre zone d’en-but. C’est
        un geste technique complètement différent de celui du kicker.
      </p>

      <h3 id="punt">Punt (le dégagement)</h3>
      <p>
        L’action de dégager volontairement le ballon à l’adversaire, presque toujours sur la
        quatrième tentative. C’est un choix stratégique et non un aveu d’échec : plutôt que de
        risquer de rendre le ballon sur place, on le rend cinquante mètres plus loin. Un débutant
        met souvent quelques matchs à comprendre pourquoi une équipe « donne » ainsi le ballon.
      </p>

      <h3 id="kickoff">Kickoff (le coup d’envoi)</h3>
      <p>
        Le coup de pied qui lance le match, la seconde mi-temps et chaque reprise après un score. Le
        ballon est botté vers l’équipe adverse, qui tente de le rapporter le plus loin possible.
        C’est l’une des phases les plus impressionnantes à voir en vrai, avec deux lignes de joueurs
        lancées l’une contre l’autre.
      </p>

      <h3 id="returner">Returner (le retourneur)</h3>
      <p>
        Le joueur qui attrape le ballon botté par l’adversaire et court dans l’autre sens. Il doit
        d’abord capter proprement un ballon qui tourne dans les airs, puis décider en un instant
        s’il fonce ou s’il protège. C’est le rôle le plus spectaculaire du sport, et l’un des plus
        exigeants nerveusement.
      </p>

      <h3 id="fair-catch">Fair catch</h3>
      <p>
        Le signal du returner, bras levé, qui annonce qu’il attrape le ballon sans chercher à
        courir. En échange, il ne peut pas être plaqué et le jeu s’arrête à l’endroit de la
        réception. C’est un choix de prudence quand les couvreurs adverses arrivent trop vite, et il
        évite bon nombre de ballons perdus.
      </p>

      <CtaTunnel
        titre="Le vocabulaire s’apprend beaucoup plus vite sur le terrain"
        texte="Semaine découverte offerte aux Pionniers de Touraine : plusieurs séances d’essai au stade de la Chambrerie, équipement complet prêté, zéro engagement et zéro euro. Aucune connaissance préalable n’est demandée."
        bouton="Je viens essayer"
      />

      <h2 id="scoring">Les actions et le scoring</h2>

      <h3 id="touchdown">Touchdown (TD)</h3>
      <p>
        La manière principale de marquer, et elle vaut <strong>six points</strong>. Il est accordé
        dès qu’un joueur porte le ballon dans la zone d’en-but adverse ou y attrape une passe en
        contrôlant la réception. Le détail de ce qui compte comme touchdown est dans{' '}
        <Link href="/blog/regles-football-americain/">les règles du football américain</Link>.
      </p>

      <h3 id="extra-point">Extra point (la transformation)</h3>
      <p>
        Le coup de pied tenté juste après un touchdown, entre les poteaux, et qui rapporte{' '}
        <strong>un point</strong>. C’est la suite normale et attendue d’un touchdown, réussie dans
        la très grande majorité des cas au niveau professionnel, un peu moins systématiquement en
        championnat amateur.
      </p>

      <h3 id="conversion-deux-points">Conversion à deux points</h3>
      <p>
        L’alternative à l’extra point : au lieu de botter, l’équipe joue une action normale depuis
        une distance courte et doit atteindre l’en-but. Si elle réussit, elle marque{' '}
        <strong>deux points</strong> au lieu d’un ; si elle échoue, elle n’en marque aucun. C’est un
        choix tactique qui dépend du score et du temps restant.
      </p>

      <h3 id="field-goal">Field goal (le coup de pied placé)</h3>
      <p>
        Un coup de pied tenté depuis le terrain, qui rapporte <strong>trois points</strong> si le
        ballon passe entre les poteaux et au-dessus de la barre. Quand une équipe le choisit plutôt
        que de jouer, c’est une question de position sur le terrain :{' '}
        <Link href="/blog/regles-football-americain/">le calcul est expliqué ici</Link>.
      </p>

      <h3 id="safety-score">Safety (les deux points de la défense)</h3>
      <p>
        Une situation rare et spectaculaire : le porteur du ballon est arrêté à l’intérieur de sa
        propre zone d’en-but, et la <strong>défense marque deux points</strong>. Attention à
        l’homonymie avec le poste de safety, décrit plus haut : ce sont deux notions sans rapport.
        Les quatre façons de marquer sont récapitulées dans{' '}
        <Link href="/blog/regles-football-americain/">notre guide des règles</Link>.
      </p>

      <h3 id="interception">Interception</h3>
      <p>
        Une passe du quarterback captée par un défenseur. Le ballon change immédiatement de camp et
        le défenseur peut courir avec, parfois jusqu’à l’en-but. C’est l’une des deux grandes
        manières de perdre le ballon, et l’action qui fait le plus basculer un match.
      </p>

      <h3 id="fumble">Fumble (le ballon lâché)</h3>
      <p>
        Le porteur du ballon le perd avant d’être déclaré au sol. Le ballon devient libre et
        n’appartient à personne : la première équipe qui le récupère en prend possession, d’où les
        empilements de joueurs qu’on voit à la télévision. Beaucoup de défenses travaillent
        spécifiquement les gestes destinés à provoquer un fumble.
      </p>

      <h3 id="sack">Sack</h3>
      <p>
        Le quarterback est mis au sol derrière sa ligne de scrimmage, avant d’avoir pu lancer.
        L’attaque perd du terrain en plus de perdre l’action, et le compteur de tentatives avance.
        C’est la statistique reine des joueurs de ligne défensive et des pass rushers.
      </p>

      <h3 id="plaquage">Plaquage (tackle)</h3>
      <p>
        L’action d’amener le porteur du ballon au sol pour arrêter la progression. Le coup de
        sifflet suit immédiatement et l’action est terminée. C’est le geste le plus enseigné et le
        plus encadré du sport, parce que la technique de plaquage est directement liée à la sécurité
        des deux joueurs concernés.
      </p>

      <h3 id="passe-incomplete">Passe incomplète</h3>
      <p>
        Une passe avant qui touche le sol sans avoir été attrapée. L’action s’arrête sur place,
        aucun terrain n’est gagné ni perdu, et le ballon revient à l’endroit d’où l’action est
        partie. La règle veut qu’une seule passe avant soit autorisée par action, et qu’elle parte
        de derrière la ligne de scrimmage.
      </p>

      <h3 id="quatrieme-tentative">Quatrième tentative (fourth down)</h3>
      <p>
        Le moment de décision du football américain : l’attaque a trois choix, tenter de gagner les
        yards manquants, dégager au pied, ou tenter un field goal si elle est assez proche. Ce que
        chacun coûte et rapporte est détaillé dans{' '}
        <Link href="/blog/regles-football-americain/">les règles du jeu</Link>.
      </p>

      <h3 id="red-zone">Red zone</h3>
      <p>
        Les vingt derniers yards avant la zone d’en-but adverse. Le terrain y devient très
        compressé, la défense n’ayant plus de profondeur à couvrir, et les actions y sont donc
        différentes du reste du match. L’efficacité d’une équipe dans cette zone est l’un des
        meilleurs indicateurs de son niveau réel.
      </p>

      <h2 id="fautes">Les fautes</h2>

      <h3 id="penalite">Pénalité et drapeau jaune</h3>
      <p>
        Quand un officiel constate une infraction, il jette un petit drapeau jaune au sol et l’action
        va à son terme avant d’être analysée. La sanction est presque toujours une perte de terrain
        pour l’équipe fautive, parfois assortie d’un rejeu ou d’un first down automatique pour
        l’adversaire. L’équipe non fautive peut souvent refuser la pénalité si le résultat de
        l’action lui est plus favorable.
      </p>

      <h3 id="faux-depart">Faux départ (false start)</h3>
      <p>
        Un joueur de l’attaque bouge avant le snap alors qu’il devait rester immobile. C’est la
        faute la plus fréquente et la plus rageante, parce qu’elle arrête l’action avant même
        qu’elle ne commence et recule l’attaque. Elle vient presque toujours de la nervosité ou
        d’une mauvaise écoute de la cadence.
      </p>

      <h3 id="hors-jeu">Hors-jeu (offside)</h3>
      <p>
        L’équivalent défensif du faux départ : un défenseur se trouve du mauvais côté de la ligne de
        scrimmage au moment du snap. Contrairement au faux départ, l’action se joue généralement
        jusqu’au bout, et l’attaque peut choisir de garder le résultat obtenu plutôt que la
        pénalité.
      </p>

      <h3 id="holding">Holding (accrochage)</h3>
      <p>
        Retenir illégalement un adversaire qui ne porte pas le ballon, typiquement en l’agrippant
        pour l’empêcher de passer. C’est la pénalité la plus courante sur la ligne offensive, parce
        que la frontière entre un blocage légal et un accrochage se joue à quelques centimètres de
        placement de mains.
      </p>

      <h3 id="pass-interference">Pass interference (obstruction sur passe)</h3>
      <p>
        Empêcher illégalement un joueur éligible d’aller attraper un ballon en vol, par exemple en
        le poussant, en le retenant ou en le percutant avant l’arrivée de la passe. La sanction est
        lourde et se compte souvent en dizaines de yards, ce qui en fait l’une des décisions les
        plus discutées du sport.
      </p>

      <h3 id="face-mask">Face mask (saisie de la grille)</h3>
      <p>
        Attraper la grille du casque d’un adversaire, ce qui est interdit pour une raison évidente
        de sécurité du cou et de la nuque. C’est une faute que même les joueurs expérimentés
        commettent, souvent involontairement, en cherchant à agripper un porteur de ballon qui
        s’échappe.
      </p>

      <h3 id="delay-of-game">Delay of game (jeu retardé)</h3>
      <p>
        L’attaque n’a pas déclenché son action avant l’expiration du chronomètre prévu entre deux
        downs. La sanction est un recul, et la faute traduit presque toujours un problème
        d’organisation : un schéma mal transmis, un huddle trop long, un quarterback qui hésite.
      </p>

      <h3 id="personal-foul">Faute personnelle (personal foul)</h3>
      <p>
        La catégorie qui regroupe les contacts dangereux ou excessifs : plaquage tardif, contact
        avec le casque, brutalité inutile, coup porté à un joueur sans défense. Ce sont les fautes
        les plus sévèrement sanctionnées, parce qu’elles touchent directement à l’intégrité des
        joueurs. Le sujet de la sécurité et du contact est développé dans notre article sur les{' '}
        <Link href="/blog/sport-de-contact-tours/">sports de contact à Tours</Link>.
      </p>

      <h2 id="flag">Le vocabulaire du flag football</h2>
      <p>
        Le flag football est la version sans contact, jouée à cinq contre cinq, mixte, et olympique
        à partir des Jeux de Los Angeles 2028. Il partage l’essentiel du vocabulaire ci-dessus,
        auquel s’ajoutent quelques termes qui lui sont propres. Le règlement complet est détaillé
        dans notre article sur{' '}
        <Link href="/blog/regles-flag-football/">les règles du flag football</Link>.
      </p>

      <h3 id="les-flags">Les flags (les bandes)</h3>
      <p>
        Les deux bandes de tissu accrochées de chaque côté de la ceinture de chaque joueur. Elles
        remplacent le plaquage : tant qu’un joueur a ses flags, il est en jeu. C’est tout l’objet du
        sport et ce qui lui donne son nom.
      </p>

      <h3 id="deflag">Le deflag</h3>
      <p>
        L’action d’arracher une bande au porteur du ballon, ce qui arrête immédiatement l’action à
        l’endroit où le flag a été retiré. C’est l’équivalent exact du plaquage, sans le contact.
        Le geste demande de la précision et un vrai travail d’appuis, ce que les débutants
        sous-estiment systématiquement.
      </p>

      <h3 id="no-run-zone">No-run zone (zone sans course)</h3>
      <p>
        Une portion du terrain, généralement située juste devant la zone d’en-but, où l’attaque n’a
        pas le droit de jouer une course et doit donc tenter la passe. L’objectif est d’éviter les
        actions de force près de l’en-but et de garder un jeu ouvert. Le nombre et l’emplacement de
        ces zones dépendent du règlement de la compétition.
      </p>

      <h3 id="rusher">Le rusher</h3>
      <p>
        Le défenseur désigné pour aller mettre la pression sur le lanceur. Il ne peut partir que
        depuis une distance en retrait de la ligne d’engagement, fixée par le règlement, ce qui
        laisse au quarterback un temps garanti pour jouer. Les autres défenseurs restent en
        couverture.
      </p>

      <h3 id="flag-guarding">Flag guarding (protection des flags)</h3>
      <p>
        Le porteur du ballon n’a pas le droit de protéger ses bandes avec la main, le bras ou le
        ballon pour empêcher un adversaire de les attraper. C’est une faute, et l’une des plus
        fréquentes chez les débutants, parce que le réflexe de se protéger est naturel.
      </p>

      <h3 id="mixte">Le jeu mixte</h3>
      <p>
        Le flag se pratique en équipes mixtes, hommes et femmes sur le même terrain, dans le même
        collectif. Ce n’est pas une adaptation de circonstance mais un format de compétition à part
        entière : notre équipe de flag seniors évolue en <strong>championnat mixte D1</strong>.
        Tout est expliqué sur la page de <Link href="/flag-football/">notre section flag</Link>.
      </p>

      <h2 id="chiffres">Combien de joueurs, combien de temps : les réponses directes</h2>

      <h3 id="combien-de-joueurs">Combien de joueurs sur un terrain de football américain ?</h3>
      <p>
        <strong>Onze contre onze</strong>, soit vingt-deux joueurs sur le terrain à chaque action.
        Mais un effectif complet est bien plus large que onze, pour une raison simple : une équipe
        de football américain est composée de trois escouades distinctes. L’escouade offensive entre
        quand l’équipe a le ballon, l’escouade défensive la remplace en entier quand elle le perd,
        et les équipes spéciales interviennent sur les phases de coup de pied. Les changements sont
        libres et illimités entre deux actions, ce qui explique le ballet permanent sur la ligne de
        touche.
      </p>

      <h3 id="combien-de-joueurs-flag">Combien de joueurs au flag football ?</h3>
      <p>
        <strong>Cinq contre cinq</strong>. Le terrain est plus petit, il n’y a ni plaquage ni ligne
        de cinq bloqueurs, et chaque joueur touche donc beaucoup plus le ballon qu’au football
        américain. C’est l’une des raisons pour lesquelles le flag est aussi efficace comme porte
        d’entrée : on y comprend la logique du jeu très vite, parce qu’on y participe en permanence.
      </p>

      <h3 id="duree-match">Combien de temps dure un match de football américain ?</h3>
      <p>
        Un match se joue en <strong>quatre quarts-temps</strong>, séparés par une mi-temps, avec une
        courte pause entre le premier et le deuxième quart puis entre le troisième et le quatrième.
        La donnée qui surprend tout le monde, c’est l’écart entre le temps de jeu affiché et la
        durée réelle : le chronomètre s’arrête très souvent, à chaque passe incomplète, à chaque
        sortie du terrain, à chaque changement de possession et à chaque temps mort. En pratique,
        prévois une soirée ou un après-midi, pas une heure.
      </p>

      <h3 id="duree-jeunes">Et pour les jeunes ?</h3>
      <p>
        Les formats des catégories de jeunes sont plus courts que ceux des seniors, et le flag est
        lui aussi joué sur des durées réduites. La durée exacte d’un quart-temps dépend du règlement
        de la compétition concernée, donc le mieux est de vérifier pour la rencontre que tu comptes
        voir. Notre article sur{' '}
        <Link href="/blog/football-americain-jeunes-u13-u16-u18/">le football américain chez les
        jeunes</Link> détaille comment les catégories sont organisées.
      </p>

      <CtaTunnel
        titre="Tu as le vocabulaire, il te manque le terrain"
        texte="Aux Pionniers de Touraine, la semaine découverte est offerte : plusieurs séances d’essai, l’équipement prêté, des coachs habitués aux débutants complets et aucun engagement à la clé."
        bouton="Je réserve mes séances d’essai"
      />

      <Faq
        titre="Questions fréquentes sur le vocabulaire du football américain"
        items={[
          {
            q: 'Faut-il connaître tout ce vocabulaire avant de commencer ?',
            r: (
              <p>
                Non, absolument pas. Les dix termes de l’encadré en début d’article suffisent
                largement pour ta première séance, et encore : personne ne te posera de question. Le
                reste s’apprend en jouant, dans l’ordre où les mots deviennent utiles pour toi. Un
                joueur de ligne offensive maîtrisera vite tout le vocabulaire du blocage et
                connaîtra beaucoup moins celui de la couverture, et c’est parfaitement normal. Notre
                guide sur{' '}
                <Link href="/blog/commencer-le-football-americain-adulte/">
                  débuter le foot US adulte
                </Link>{' '}
                décrit à quoi ressemble cette première saison.
              </p>
            ),
          },
          {
            q: 'Pourquoi les termes ne sont-ils pas traduits en français ?',
            r: (
              <p>
                Parce que le sport s’est diffusé en France avec son vocabulaire d’origine, et que
                les traductions proposées n’ont jamais réussi à s’imposer. Quelques mots ont une
                équivalence courante, comme la zone d’en-but pour l’end zone ou le plaquage pour le
                tackle, mais la plupart des postes et des actions restent en anglais dans tous les
                vestiaires français. Le bon réflexe est donc d’apprendre le mot anglais directement
                plutôt que de chercher une traduction que personne n’emploie sur le terrain.
              </p>
            ),
          },
          {
            q: 'Quelle est la différence entre le football américain et le flag football ?',
            r: (
              <p>
                Le contact et le nombre de joueurs. Le football américain se joue à onze contre onze
                avec plaquage et équipement de protection complet ; le flag se joue à cinq contre
                cinq, sans contact, en retirant une bande de tissu à la ceinture du porteur du
                ballon. La logique de jeu reste la même, avec des tentatives, une ligne
                d’engagement, des passes et des tracés. Beaucoup de joueurs pratiquent les deux, et
                le flag sert souvent d’entrée en matière. Le règlement complet est dans{' '}
                <Link href="/blog/regles-flag-football/">les règles du flag football</Link>.
              </p>
            ),
          },
          {
            q: 'Que veut dire « 3rd and 7 » ?',
            r: (
              <p>
                Troisième tentative sur les quatre disponibles, avec sept yards encore à parcourir
                pour obtenir un nouveau first down. C’est la manière standard d’annoncer la
                situation, et elle contient tout ce qu’il faut savoir : combien de chances il reste,
                et quelle distance il faut couvrir. Une fois ce code compris, la moitié du
                commentaire télévisé devient limpide.
              </p>
            ),
          },
          {
            q: 'Le touchdown vaut-il vraiment six points ?',
            r: (
              <p>
                Oui, six points, auxquels s’ajoute presque toujours une tentative de transformation
                qui vaut un point au pied ou deux points en jouant une action. C’est pour cela qu’on
                voit très souvent des scores en sept points par touchdown. Les autres façons de
                marquer sont le field goal, à trois points, et le safety, à deux points pour la
                défense.
              </p>
            ),
          },
          {
            q: 'Où voir tout ce vocabulaire en vrai, près de Tours ?',
            r: (
              <p>
                Au stade de la Chambrerie, rue Tartifume à Tours, où les Pionniers s’entraînent et
                reçoivent leurs adversaires. Assister à une séance ou à un match est de très loin le
                moyen le plus rapide de faire le lien entre les mots et ce qui se passe sur le
                terrain. On a écrit un guide complet pour cela :{' '}
                <Link href="/blog/stade-de-la-chambrerie-tours/">
                  venir voir un match au stade de la Chambrerie
                </Link>
                .
              </p>
            ),
          },
        ]}
      />

      <h2 id="conclusion">Soixante mots, et le jeu devient limpide</h2>
      <p>
        Le football américain n’est pas un sport compliqué, c’est un sport codé. Une fois le code
        connu, ce qui ressemblait à du chaos devient l’un des jeux les plus lisibles qui soient :
        chaque joueur a un métier unique, chaque action a un objectif annoncé, chaque situation se
        résume en trois mots et deux chiffres.
      </p>
      <p>
        La suite logique, c’est de venir voir à quoi ça ressemble. Les Pionniers de Touraine
        s’entraînent au <strong>stade de la Chambrerie, rue Tartifume à Tours</strong>, en football
        américain le lundi et le vendredi de 20 h 00 à 23 h 00 et le mercredi de 21 h 00 à 23 h 00,
        et en flag mixte le lundi et le jeudi de 20 h 15 à 22 h 45. Le détail est sur la page de{' '}
        <Link href="/football-americain/">la section football américain</Link>, et tous les
        créneaux, y compris ceux des jeunes et de l’école de flag du samedi, sont sur{' '}
        <Link href="/nos-sections/">la page de nos sections</Link>. Pour une question avant de
        venir, la page <Link href="/contact/">contact</Link> est là pour ça, et si tu veux
        simplement soutenir le club autrement,{' '}
        <Link href="/partenaires/">la page partenaires</Link> explique comment.
      </p>
      <p>
        En attendant ta première séance, entendre ces mots en situation aide beaucoup : notre guide
        pour <Link href="/blog/comment-regarder-le-college-football-en-france/">regarder le college
        football en France</Link> indique où suivre des matchs commentés depuis la France.
      </p>
    </>
  );
}
