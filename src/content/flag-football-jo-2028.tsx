import Link from 'next/link';
import { CtaQuiz, CtaTunnel } from '@/components/blog/CtaEncart';

/**
 * Article. Mot-clé : « flag football jo 2028 ».
 * Le fait olympique (décision du CIO, octobre 2023), les raisons du choix,
 * ce que ça change pour les clubs et les jeunes en France, le programme
 * NFL Flag au club, et comment débuter à Tours.
 * Prudence assumée : aucune affirmation sur les sélections, les
 * qualifications, le calendrier ou les formats de la compétition olympique.
 */
export default function ArticleFlagJO2028() {
  return (
    <>
      <p>
        <strong>
          Le flag football sera au programme des Jeux Olympiques de Los Angeles 2028.
        </strong>{' '}
        La décision a été prise par le Comité International Olympique en octobre 2023, et elle a fait
        basculer une discipline discrète dans une autre catégorie : celle des sports qu’on regarde à
        la télévision pendant deux semaines tous les quatre ans, dont on connaît les visages et dont
        les enfants demandent ensuite à faire à la rentrée suivante.
      </p>
      <p>
        Pour un club français comme le nôtre, ce n’est pas une ligne d’actualité de plus. C’est un
        horizon concret. Les Pionniers de Touraine, fondés à Tours en <strong>1987</strong>,
        développent le flag football des enfants jusqu’aux seniors, et l’effet olympique se voit déjà
        dans les demandes d’essai, dans les questions des parents et dans l’intérêt de nouveaux
        publics pour un sport dont ils ignoraient l’existence il y a peu.
      </p>
      <p>
        Cet article explique ce qui a été décidé exactement, pourquoi ce sport-là et pas un autre, ce
        que cela change réellement pour la pratique en France, et comment on s’y met à Tours quand on
        part de zéro. On y assume aussi une chose : sur beaucoup de points, il est trop tôt pour
        affirmer quoi que ce soit, et on préfère le dire plutôt que d’inventer.
      </p>

      <div className="blogc-toc">
        <p className="blogc-toc-title">Sommaire</p>
        <ol>
          <li><a href="#decision">Ce qui a été décidé, et quand</a></li>
          <li><a href="#pourquoi">Pourquoi le flag football est entré aux Jeux</a></li>
          <li><a href="#discipline">Ce que le public va découvrir</a></li>
          <li><a href="#france">Ce que ça change pour les clubs français</a></li>
          <li><a href="#jeunes">Les jeunes en première ligne : NFL Flag et championnat jeunes</a></li>
          <li><a href="#prudence">Ce qu’on ne sait pas encore, et qu’on ne va pas inventer</a></li>
          <li><a href="#tours">Comment s’y mettre à Tours, dès cette saison</a></li>
          <li><a href="#faq">Questions fréquentes</a></li>
        </ol>
      </div>

      <h2 id="decision">Ce qui a été décidé, et quand</h2>
      <p>
        Le fait est simple et vérifiable : <strong>en octobre 2023, le Comité International
        Olympique a validé l’ajout du flag football au programme des Jeux Olympiques de Los Angeles
        2028</strong>. La discipline y fera donc ses débuts olympiques, avec un tournoi féminin et un
        tournoi masculin, dans le format 5 contre 5 qui est celui de la compétition internationale.
      </p>
      <p>
        Il faut bien mesurer ce que cette décision est, et ce qu’elle n’est pas. Elle ne crée pas la
        discipline : le flag football existe depuis des décennies, il possède des fédérations, des
        règlements écrits, des championnats nationaux, des compétitions internationales et des
        équipes nationales. Ce que la décision apporte, c’est une exposition d’un ordre de grandeur
        totalement différent, et avec elle, un effet d’entraînement sur les fédérations, les clubs et
        les pouvoirs publics.
      </p>
      <p>
        L’histoire des sports olympiques montre régulièrement le même schéma. Une discipline entre au
        programme, elle gagne des licenciés dans les pays qui la pratiquaient déjà de façon
        confidentielle, elle attire des budgets, elle structure ses filières de formation, et elle
        sort transformée du cycle olympique. Le flag est dans cette séquence depuis octobre 2023, et
        nous en sommes maintenant à la partie où les clubs doivent être prêts à accueillir les
        curieux.
      </p>

      <h2 id="pourquoi">Pourquoi le flag football est entré aux Jeux</h2>
      <p>
        La question revient systématiquement, souvent avec une pointe de scepticisme : pourquoi le
        flag plutôt qu’une autre discipline ? Sans prêter d’intentions à qui que ce soit, on peut
        pointer les caractéristiques objectives qui rendent ce sport particulièrement compatible avec
        un programme olympique moderne.
      </p>

      <h3>Il est accessible, au sens le plus concret du terme</h3>
      <p>
        Pour organiser du flag, il faut un rectangle d’herbe, des cônes, un ballon et des ceintures.
        Pas de casque, pas d’épaulières, pas d’équipement individuel lourd, pas d’installation
        spécifique. Un terrain de football américain accueille deux terrains de flag. Un stade
        municipal, un stade d’athlétisme, une plaine de jeux suffisent. Cette légèreté logistique est
        rare, et elle compte énormément pour une organisation qui cherche à limiter les
        infrastructures dédiées.
      </p>

      <h3>Le coût d’entrée pour un pratiquant est faible</h3>
      <p>
        Un protège-dents, des crampons, une tenue. C’est tout ce qu’il faut personnellement pour
        jouer, le club fournissant le reste. Comparé à la plupart des sports d’équipe équipés, la
        barrière financière est basse, ce qui rend la discipline réellement praticable dans des
        contextes très différents. Le détail complet est dans notre article sur les{' '}
        <Link href="/blog/regles-flag-football/">règles du flag football</Link>.
      </p>

      <h3>Il est mixte par culture, et paritaire dans son format olympique</h3>
      <p>
        Le flag est l’un des rares sports collectifs où la pratique mixte est une norme installée et
        non une curiosité : en France, le championnat national se joue en mixte. Et le format
        olympique prévoit un tournoi féminin et un tournoi masculin, à égalité. Pour une discipline
        qui cherche à s’installer durablement, cette double caractéristique est un atout structurel.
      </p>

      <h3>Le format est court, lisible et télégénique</h3>
      <p>
        Cinq contre cinq, un terrain compact, sept secondes pour lancer, des scores élevés, des
        matchs courts souvent enchaînés en tournoi : le flag produit du rythme, des retournements et
        des séquences compréhensibles pour quelqu’un qui découvre. C’est un point que même les
        sceptiques concèdent après avoir regardé un match entier.
      </p>

      <h3>Il porte une culture sportive déjà mondiale</h3>
      <p>
        Le football américain est l’un des univers sportifs les plus suivis de la planète, y compris
        très loin des États-Unis. Le flag en constitue la porte d’entrée jouable : mêmes codes, même
        ballon, même vocabulaire, mais sans les barrières d’équipement et de contact. Beaucoup de
        gens qui regardent du football américain depuis des années découvrent avec le flag qu’ils
        peuvent enfin en pratiquer une forme.
      </p>

      <CtaQuiz
        titre="Curieux du flag ? Trouve d’abord ton poste"
        texte="Huit questions sur ton gabarit, ta vitesse et ton rapport au contact : notre algorithme de scouting, calibré sur les gabarits réels des joueurs NFL et NCAA, te propose le poste où tu serais le plus efficace, en flag comme en foot US."
        bouton="Je fais le test"
      />

      <h2 id="discipline">Ce que le public va découvrir</h2>
      <p>
        Pour ceux qui n’ont jamais vu un match, voici le jeu en quelques lignes. Deux équipes de cinq
        s’affrontent sur un terrain de 50 yards de long sur 25 de large, auxquels s’ajoutent deux
        zones d’en-but de 10 yards. L’attaque dispose de quatre tentatives pour franchir la ligne
        médiane, puis de quatre nouvelles pour aller marquer. Chaque action démarre par un snap, et
        le quarterback a sept secondes pour lancer ou transmettre le ballon.
      </p>
      <p>
        On arrête l’adversaire non pas en le plaquant, mais en retirant l’un des deux flags accrochés
        à sa ceinture. Le plaquage, le blocage et la saisie sont interdits. Un touchdown vaut six
        points, suivi d’une transformation à un ou deux points. Dans les cinq derniers yards avant
        l’en-but, la course est interdite : il faut passer. Et les interceptions peuvent être
        remontées jusqu’à l’en-but adverse, ce qui rend chaque passe forcée coûteuse.
      </p>
      <p>
        Ce sont ces contraintes qui produisent le spectacle : de l’espace, de la vitesse, des
        décisions prises en une seconde et des renversements permanents. Le détail complet du
        règlement, poste par poste et faute par faute, est dans notre guide des{' '}
        <Link href="/blog/regles-flag-football/">règles du flag football</Link>, et la présentation
        générale de la discipline dans{' '}
        <Link href="/blog/flag-football-cest-quoi/">le flag football, c’est quoi ?</Link>. Pour le
        vocabulaire qu’on entendra dans les commentaires, notre{' '}
        <Link href="/blog/lexique-football-americain/">lexique du football américain</Link> couvre
        l’essentiel des termes communs aux deux disciplines.
      </p>
      <p>
        Une précision qui a son importance pour les nouveaux venus : le flag n’est pas du football
        américain au rabais. Son règlement est écrit indépendamment, ses situations de jeu lui sont
        propres, et les qualités qu’il récompense ne sont pas les mêmes. On peut très bien être un
        excellent joueur de flag sans avoir jamais porté un casque, et inversement. La comparaison
        détaillée entre les deux disciplines est dans notre guide des{' '}
        <Link href="/blog/regles-football-americain/">règles du football américain</Link>.
      </p>

      <h2 id="france">Ce que ça change pour les clubs français</h2>
      <p>
        L’entrée aux Jeux ne se traduit pas par une révolution abstraite. Elle se traduit par des
        effets très concrets, dont plusieurs sont déjà visibles dans les clubs.
      </p>
      <ul>
        <li>
          <strong>Une visibilité inédite.</strong> Un sport olympique devient un sport qu’on peut
          nommer. Cela change tout dans les conversations avec les collectivités, les
          établissements scolaires, les partenaires et les familles. Expliquer le flag prend
          désormais dix secondes au lieu de dix minutes.
        </li>
        <li>
          <strong>Un afflux de curiosité.</strong> Les clubs reçoivent des demandes de personnes qui
          n’avaient jamais envisagé cette pratique, souvent des adultes venus d’autres sports
          collectifs, et de plus en plus de parents pour leurs enfants.
        </li>
        <li>
          <strong>Un besoin d’encadrement.</strong> C’est le point que l’on sous-estime toujours. Un
          club qui accueille plus de monde a besoin de plus de coachs, de plus d’arbitres, de plus de
          bénévoles à l’organisation. La croissance d’une discipline se joue autant sur le bord du
          terrain que dessus. Si c’est ce rôle-là qui t’intéresse, notre article sur{' '}
          <Link href="/blog/arbitre-coach-benevole-club-football-americain/">
            devenir arbitre, coach ou bénévole
          </Link>{' '}
          détaille les parcours possibles.
        </li>
        <li>
          <strong>Une exigence de structuration.</strong> Plus de licenciés signifie plus de créneaux
          à sécuriser, plus d’équipes à engager, plus de déplacements à organiser. C’est un travail
          de fond, invisible depuis l’extérieur, et c’est celui qui déterminera quels clubs seront
          réellement capables d’absorber la vague.
        </li>
        <li>
          <strong>Une valorisation du travail déjà fait.</strong> Les clubs qui pratiquaient le flag
          bien avant la décision olympique, ce qui est notre cas, disposent d’un savoir-faire, de
          coachs formés et d’équipes engagées en compétition. L’effet olympique ne crée pas ces
          compétences : il les rend enfin visibles.
        </li>
      </ul>
      <p>
        La discipline est encadrée en France par la <strong>Fédération Française de Football
        Américain</strong>, qui organise les championnats, délivre les licences et forme les
        encadrants. Le fonctionnement des compétitions nationales, côté flag comme côté football
        américain, est détaillé dans notre article sur{' '}
        <Link href="/blog/championnat-de-france-football-americain/">
          le championnat de France de football américain
        </Link>
        .
      </p>

      <CtaTunnel
        titre="Los Angeles 2028, ça commence par un premier entraînement"
        texte="Semaine découverte offerte aux Pionniers de Touraine, au Stade de la Chambrerie à Tours : plusieurs séances d’essai, ballons et ceintures fournis, aucun engagement. Viens en tenue de sport, on s’occupe du reste."
        bouton="Je viens essayer"
      />

      <h2 id="jeunes">Les jeunes en première ligne : NFL Flag et championnat jeunes</h2>
      <p>
        Les enfants qui commencent le flag aujourd’hui seront adolescents ou jeunes adultes en 2028.
        C’est cette génération-là qui regardera les Jeux en ayant déjà couru des tracés et arraché
        des flags, et c’est elle qui portera la discipline ensuite. Un club qui prend l’échéance
        olympique au sérieux investit donc d’abord dans ses catégories jeunes.
      </p>
      <p>
        Aux Pionniers de Touraine, cela prend trois formes complémentaires.
      </p>

      <h3>L’école de flag, de U7 à U18</h3>
      <p>
        Le samedi de 10 h à 12 h, pour les enfants nés entre 2009 et 2021. C’est la porte d’entrée
        généraliste : on y apprend les fondamentaux, on y développe la motricité, la coordination, la
        lecture de trajectoire et la vie en collectif. Aucun contact, aucun prérequis. Tout est
        détaillé sur la page <Link href="/ecole-de-flag/">école de flag</Link>.
      </p>

      <h3>Le championnat jeunes</h3>
      <p>
        Les catégories U13, U15 et U18 disposent d’un championnat jeunes, qui permet de passer de
        l’apprentissage à la confrontation réelle. C’est le moment où les enfants découvrent le match,
        le déplacement, l’équipe adverse et la gestion d’une journée de compétition. Les modalités
        exactes de ces championnats relèvent de la fédération et évoluent d’une saison à l’autre.
      </p>

      <h3>Le programme NFL Flag, pour les U13 et U15</h3>
      <p>
        Le club engage ses catégories <strong>U13 et U15 dans le programme NFL Flag</strong>. C’est
        un dispositif jeunes rattaché à l’univers de la NFL et décliné à l’international, qui donne
        aux plus jeunes un cadre de pratique identifiable et un lien direct avec la culture du sport
        qu’ils voient à la télévision. Pour un enfant, jouer sous ce label a un effet motivationnel
        qu’il ne faut pas sous-estimer.
      </p>
      <p>
        À côté de ces parcours flag, le club propose aussi du{' '}
        <Link href="/blog/football-americain-jeunes-u13-u16-u18/">
          football américain pour les jeunes
        </Link>{' '}
        en catégorie U18, détaillé sur la page{' '}
        <Link href="/football-americain/">football américain</Link>, et des créneaux de flag mixte
        juniors U13 à U18 le jeudi de 19 h à 20 h 30.
        La question de l’âge idéal pour commencer est traitée dans{' '}
        <Link href="/blog/a-quel-age-commencer-le-football-americain/">
          à quel âge commencer le football américain
        </Link>
        .
      </p>

      <h2 id="prudence">Ce qu’on ne sait pas encore, et qu’on ne va pas inventer</h2>
      <p>
        Beaucoup d’articles sur le sujet mélangent le fait établi et la projection. On préfère
        séparer les deux clairement, parce qu’un club n’a rien à gagner à raconter n’importe quoi.
      </p>
      <p>
        <strong>Ce qui est établi :</strong> le flag football figure au programme des Jeux Olympiques
        de Los Angeles 2028, à la suite d’une décision du Comité International Olympique prise en
        octobre 2023, avec un tournoi féminin et un tournoi masculin en 5 contre 5.
      </p>
      <p>
        <strong>Ce sur quoi nous ne nous prononcerons pas :</strong> le calendrier précis de
        l’épreuve, le lieu exact des matchs, le nombre d’équipes retenues, le système de
        qualification, l’identité des nations qualifiées, et la composition ou même la participation
        de quelque sélection nationale que ce soit. Ces éléments dépendent d’instances
        internationales, ils évoluent, et les annoncer par anticipation n’aiderait personne.
      </p>
      <p>
        La même prudence s’applique à tout ce qui touche aux formats de compétition en France : le
        nombre de divisions, les modalités de montée et de descente, la durée des rencontres et le
        déroulé des phases finales{' '}
        <strong>évoluent chaque saison. La référence est le site de la FFFA</strong>, qui publie les
        règlements sportifs applicables. C’est la seule source qui fasse foi, et nous y renvoyons
        systématiquement plutôt que de figer des chiffres qui seront faux dans un an.
      </p>
      <p>
        Ce que l’on peut dire en revanche sans hésiter, c’est ce qui dépend de nous : les créneaux
        d’entraînement, les catégories accueillies, les tarifs de la saison et la façon dont on
        accompagne un débutant. C’est l’objet de la dernière partie.
      </p>

      <h2 id="tours">Comment s’y mettre à Tours, dès cette saison</h2>
      <p>
        Attendre 2028 pour essayer serait le meilleur moyen d’arriver trop tard. Le flag se pratique
        aujourd’hui, à Tours, au <strong>Stade de la Chambrerie, rue Tartifume, 37100 Tours</strong>,
        et les créneaux sont ouverts.
      </p>
      <ul>
        <li>
          <strong>Flag mixte seniors :</strong> lundi et jeudi de 20 h 15 à 22 h 45. L’équipe mixte
          du club est engagée en championnat mixte D1 et en Coupe de France. Deux niveaux
          d’engagement sont possibles : loisir à 100 € la saison, compétition à 150 €.
        </li>
        <li>
          <strong>Flag mixte juniors U13 à U18 :</strong> jeudi de 19 h à 20 h 30.
        </li>
        <li>
          <strong>École de flag U7 à U18 :</strong> samedi de 10 h à 12 h, pour les enfants nés entre
          2009 et 2021, à 100 € la saison.
        </li>
      </ul>
      <p>
        Dans tous les cas, la <strong>licence FFFA est incluse</strong> dans le tarif, le{' '}
        <strong>paiement en trois fois</strong> est possible, et la{' '}
        <strong>semaine découverte est offerte</strong> avec l’équipement prêté. Autrement dit :
        venir essayer ne coûte rien et n’engage à rien.
      </p>
      <p>
        Il n’y a aucun prérequis. On accueille chaque saison des personnes qui n’ont jamais touché un
        ballon ovale, des joueurs venus du basket, du football, du rugby, du handball ou de
        l’athlétisme, des étudiants, des trentenaires qui reprennent le sport, et des enfants qui ont
        vu un match à la télévision. Les qualités développées ailleurs se transfèrent
        remarquablement bien : lecture de trajectoire, appuis, démarquage, explosivité, coordination.
      </p>
      <p>
        Le détail des créneaux, des catégories et de l’organisation est sur la page{' '}
        <Link href="/flag-football/">flag football</Link> et dans le récapitulatif de{' '}
        <Link href="/nos-sections/">nos sections</Link>. Si tu reprends une activité après une
        coupure, notre article sur{' '}
        <Link href="/blog/reprendre-le-sport-a-30-ans-tours/">reprendre le sport à 30 ans</Link>{' '}
        raconte à quoi ressemblent les premières semaines. Et pour toute question avant de venir, la
        page <Link href="/contact/">contact</Link> est le chemin le plus court.
      </p>

      <h2 id="faq">Questions fréquentes sur le flag football aux JO 2028</h2>

      <h3>Le flag football est-il vraiment un sport olympique ?</h3>
      <p>
        Oui. Le Comité International Olympique a validé en octobre 2023 son ajout au programme des
        Jeux de Los Angeles 2028, avec un tournoi féminin et un tournoi masculin joués au format
        5 contre 5. La discipline y fera ses débuts olympiques. Elle existait bien avant cette
        décision, avec ses fédérations, ses championnats nationaux et ses compétitions
        internationales : ce que les Jeux apportent, c’est une exposition d’une tout autre ampleur.
      </p>

      <h3>Pourquoi avoir choisi le flag plutôt que le football américain ?</h3>
      <p>
        Sans prêter d’intentions aux décideurs, les caractéristiques du flag parlent d’elles-mêmes :
        cinq contre cinq au lieu de onze, un terrain deux fois plus petit, aucun équipement de
        protection lourd, aucun contact, des matchs courts, une pratique mixte installée et un format
        olympique paritaire. Organiser un tournoi de flag demande incomparablement moins de
        logistique et d’infrastructures qu’un tournoi de football américain au contact, tout en
        conservant la culture et le spectacle propres à cet univers sportif.
      </p>

      <h3>Qu’est-ce que le programme NFL Flag, et existe-t-il en France ?</h3>
      <p>
        C’est un dispositif de flag football pour les jeunes rattaché à l’univers de la NFL et
        décliné à l’international. En France, il se retrouve dans des clubs affiliés à la fédération.
        Aux Pionniers de Touraine, il concerne les catégories <strong>U13 et U15</strong>, qui
        disposent par ailleurs d’un championnat jeunes en U13, U15 et U18. Les modalités précises du
        programme relèvent de la fédération et peuvent évoluer d’une saison à l’autre.
      </p>

      <h3>Faut-il commencer maintenant pour espérer jouer un jour à haut niveau ?</h3>
      <p>
        La question du très haut niveau ne se pose pas dans ces termes, et nous ne ferons aucune
        promesse sur les sélections ou les qualifications : ces sujets dépendent d’instances qui ne
        sont pas nous. Ce qui est certain, c’est que la progression dans ce sport passe par le
        volume de jeu, et que le volume commence par le premier entraînement. Un joueur qui débute
        aujourd’hui aura plusieurs saisons de compétition derrière lui en 2028. Un joueur qui attend
        2028 partira de zéro pendant que le sport, lui, aura accéléré.
      </p>

      <h3>Peut-on commencer le flag football à l’âge adulte ?</h3>
      <p>
        Oui, et c’est même le cas de figure le plus courant dans les clubs français. L’équipe mixte
        seniors du club s’entraîne le lundi et le jeudi soir, avec un parcours loisir et un parcours
        compétition. Les techniques de passe, les tracés, la couverture défensive et le playbook
        s’apprennent au club, en séances. Notre article{' '}
        <Link href="/blog/commencer-le-football-americain-adulte/">
          commencer le football américain à l’âge adulte
        </Link>{' '}
        décrit le déroulé réel d’une première saison, et la logique est très proche côté flag.
      </p>

      <h3>Le flag football est-il adapté aux enfants ?</h3>
      <p>
        C’est même l’une de ses forces principales : sans plaquage ni blocage, il permet
        d’apprendre les tracés, la lecture du jeu, la coordination et la vie collective dans un cadre
        sécurisé. L’école de flag des Pionniers accueille les enfants de U7 à U18, nés entre 2009 et
        2021, le samedi de 10 h à 12 h, pour 100 € la saison licence comprise. C’est aussi une
        excellente réponse à la question générale du{' '}
        <Link href="/blog/quel-sport-pour-mon-enfant-tours/">
          choix d’un sport pour son enfant à Tours
        </Link>
        .
      </p>

      <h3>Où pratiquer le flag football près de Tours ?</h3>
      <p>
        Les Pionniers de Touraine s’entraînent au Stade de la Chambrerie, rue Tartifume, 37100 Tours,
        en Indre-et-Loire. Le club propose du flag pour les seniors en mixte, pour les juniors U13 à
        U18 et pour les enfants dès U7 à l’école de flag, ainsi qu’une section football américain au
        contact. La semaine découverte est offerte, avec l’équipement prêté. Pour situer le club dans
        le paysage sportif local, notre article sur{' '}
        <Link href="/blog/club-de-sport-tours/">les clubs de sport à Tours</Link> donne des repères.
      </p>

      <CtaTunnel
        titre="Deux ans, c’est le temps d’une vraie progression"
        texte="Rejoins le flag football aux Pionniers de Touraine : lundi et jeudi soir pour les seniors, jeudi en début de soirée pour les juniors, samedi matin pour l’école de flag. Licence FFFA incluse, paiement en trois fois, semaine découverte offerte."
        bouton="Je rejoins le club"
      />
    </>
  );
}
