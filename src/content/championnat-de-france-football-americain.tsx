import Link from 'next/link';
import { CtaQuiz, CtaTunnel } from '@/components/blog/CtaEncart';

/**
 * Article. Mot-clé : « championnat football américain france ».
 * Fonctionnement général des compétitions FFFA (divisions foot US, championnat
 * mixte de flag, Coupe de France, jeunes), calendrier type d’une saison,
 * engagements des Pionniers (D2 foot US, D1 mixte flag), diffusion FFFA TV
 * et venue au stade.
 * Prudence assumée : les formats évoluent chaque saison, renvoi systématique
 * au règlement sportif publié par la FFFA. Aucun chiffre de format affirmé.
 */
export default function ArticleChampionnatFrance() {
  return (
    <>
      <p>
        <strong>
          Oui, il existe un championnat de France de football américain, et il est structuré en
          divisions, avec des montées, des descentes, des phases finales et une Coupe de France.
        </strong>{' '}
        Ce n’est pas une pratique confidentielle organisée entre amis : c’est un sport fédéré, avec
        des licences, des arbitres officiels, des calendriers publiés et des équipes qui traversent
        la France pour jouer.
      </p>
      <p>
        La question qui suit est presque toujours la même : « et vous, vous jouez où ? ». Les{' '}
        <strong>Pionniers de Touraine</strong>, club fondé à Tours en <strong>1987</strong>, engagent
        une équipe senior de football américain en <strong>Division 2</strong> et une équipe mixte de
        flag football en <strong>Division 1 mixte</strong>, ainsi qu’en Coupe de France. Côté jeunes,
        le club est présent en championnat U13, U15 et U18 en flag, et en catégorie U18 en football
        américain.
      </p>
      <p>
        Cet article explique comment tout cela s’articule : qui organise, comment sont bâties les
        divisions, ce que recouvre la Coupe de France, à quoi ressemble une saison, et ce que cela
        change concrètement quand on rejoint un club. Une mise en garde d’entrée de jeu :{' '}
        <strong>
          les formats de compétition évoluent chaque saison, et la seule source qui fasse foi est le
          règlement sportif publié par la FFFA
        </strong>
        . On reste donc volontairement générique sur les chiffres, et précis sur les principes.
      </p>

      <div className="blogc-toc">
        <p className="blogc-toc-title">Sommaire</p>
        <ol>
          <li><a href="#fffa">Qui organise : la Fédération Française de Football Américain</a></li>
          <li><a href="#divisions">Les divisions du championnat de football américain</a></li>
          <li><a href="#flag">Le championnat de flag football</a></li>
          <li><a href="#coupe">La Coupe de France</a></li>
          <li><a href="#jeunes">Les compétitions jeunes</a></li>
          <li><a href="#saison">À quoi ressemble une saison</a></li>
          <li><a href="#pionniers">Où jouent les Pionniers de Touraine</a></li>
          <li><a href="#joueur">Ce que ça change quand on rejoint le club</a></li>
          <li><a href="#suivre">Suivre les matchs : FFFA TV et la diffusion par les clubs</a></li>
          <li><a href="#venir">Venir voir un match au stade</a></li>
          <li><a href="#faq">Questions fréquentes</a></li>
        </ol>
      </div>

      <h2 id="fffa">Qui organise : la Fédération Française de Football Américain</h2>
      <p>
        Toutes les compétitions officielles de football américain, de flag football et des
        disciplines associées sont organisées en France par la{' '}
        <strong>Fédération Française de Football Américain</strong>, la FFFA. C’est elle qui délivre
        les licences, qui écrit et applique les règlements sportifs, qui forme et désigne les
        arbitres, qui homologue les résultats et qui fixe les calendriers.
      </p>
      <p>
        Cela a une conséquence directe pour un joueur : dès l’instant où tu prends une licence dans
        un club affilié, tu entres dans un cadre national. Ton club joue contre d’autres clubs
        licenciés, sur des terrains homologués, avec des arbitres officiels, selon un règlement écrit
        et publié. C’est exactement le même principe que dans n’importe quelle fédération sportive
        française, et cela répond à une question qui revient souvent chez les débutants : non, ce
        n’est pas du sport de loisir déguisé.
      </p>
      <p>
        Cela a une seconde conséquence, pour toi lecteur : les formats de compétition ne sont pas
        gravés dans le marbre. Le nombre de divisions, le nombre de poules, le découpage
        géographique, le nombre d’équipes qualifiées pour les phases finales et les modalités de
        montée et de descente sont réexaminés régulièrement, en fonction du nombre de clubs engagés
        et des orientations fédérales.{' '}
        <strong>Le format évolue chaque saison : réfère-toi au site de la FFFA</strong> pour l’état
        exact d’une compétition donnée. Nous ne publierons pas ici de chiffres qui seraient faux dans
        douze mois.
      </p>

      <h2 id="divisions">Les divisions du championnat de football américain</h2>
      <p>
        Le championnat de France senior masculin de football américain fonctionne selon le principe
        classique des divisions hiérarchisées. La <strong>Division 1</strong> constitue le sommet de
        la pyramide, la <strong>Division 2</strong> se situe juste en dessous, et le championnat se
        poursuit sur des divisions inférieures. Les Pionniers de Touraine évoluent en Division 2.
      </p>
      <p>
        Le principe des <strong>montées et des descentes</strong> existe : une équipe qui domine sa
        division peut accéder au niveau supérieur, une équipe en difficulté peut redescendre. Mais
        les modalités concrètes, nombre de places, existence ou non de barrages, critères
        d’accession, sont définies chaque saison par le règlement sportif. Il faut également savoir
        qu’en football américain comme dans beaucoup de sports fédérés, l’accession à un niveau
        supérieur peut s’accompagner d’exigences qui ne sont pas seulement sportives : capacité à
        aligner un effectif complet, structuration du club, encadrement, arbitrage. Un club ne monte
        pas uniquement parce qu’il gagne : il monte parce qu’il est prêt à assumer le niveau
        au-dessus.
      </p>
      <p>
        En pratique, une saison de division se déroule en phase régulière, avec des matchs aller et
        parfois retour dans une poule géographique, puis des phases finales qui désignent le champion
        de la division. Le découpage en poules répond à une contrainte simple : limiter les
        déplacements. Le football américain se joue partout en France, et un calendrier sans
        regroupement géographique produirait des trajets ingérables pour des équipes composées de
        joueurs qui travaillent en semaine.
      </p>
      <p>
        Sur le terrain, le règlement appliqué est celui du football américain classique : quatre
        tentatives pour avancer de dix yards, six points par touchdown, jeu au pied, plaquage et
        blocage. Si tu veux le détail complet, il est dans notre guide des{' '}
        <Link href="/blog/regles-football-americain/">règles du football américain</Link>, et la
        répartition des rôles sur le terrain dans notre article sur les{' '}
        <Link href="/blog/postes-football-americain/">postes au football américain</Link>. À noter,
        parce que la question revient : à côté du format à onze contre onze, il existe des formats à
        effectif réduit selon les compétitions et les catégories, ce qui permet à des clubs de taille
        modeste d’aligner une équipe.
      </p>

      <h2 id="flag">Le championnat de flag football</h2>
      <p>
        Le flag football possède son propre championnat national, distinct de celui du football
        américain, avec un règlement écrit indépendamment. Sa particularité la plus visible en France
        est la <strong>pratique mixte</strong> : hommes et femmes jouent dans la même équipe, sur le
        même terrain, y compris au plus haut niveau national. L’équipe mixte des Pionniers de
        Touraine est engagée en <strong>championnat mixte D1</strong>.
      </p>
      <p>
        Le format de jeu est celui du 5 contre 5 : terrain de 50 yards de long sur 25 de large plus
        deux zones d’en-but de 10 yards, quatre tentatives pour franchir la ligne médiane puis quatre
        pour marquer, sept secondes accordées au quarterback après le snap, aucun plaquage ni
        blocage, et une action qui s’arrête quand un défenseur retire l’un des deux flags de la
        ceinture du porteur. Le règlement complet est détaillé dans notre article sur les{' '}
        <Link href="/blog/regles-flag-football/">règles du flag football</Link>.
      </p>
      <p>
        Une conséquence organisationnelle mérite d’être connue avant de s’engager : le flag se joue
        très souvent sous forme de <strong>plateaux ou de journées de compétition</strong>, où
        plusieurs rencontres sont enchaînées sur une même journée, plutôt qu’en match unique
        hebdomadaire. Cela change la préparation, la gestion de l’effort et l’organisation des
        déplacements. Là encore, le format exact de la saison, le nombre de journées, la composition
        des poules et le déroulé des phases finales relèvent du règlement sportif fédéral en vigueur.
      </p>
      <p>
        Le contexte de la discipline a par ailleurs changé d’échelle depuis que le flag football est
        entré au programme des Jeux Olympiques de Los Angeles 2028, sujet auquel nous avons consacré
        un article entier :{' '}
        <Link href="/blog/flag-football-jo-2028/">le flag football aux JO de Los Angeles 2028</Link>.
      </p>

      <CtaQuiz
        titre="Tu jouerais à quel poste, en D2 ou en flag ?"
        texte="Huit questions sur ton gabarit, ta vitesse et ton rapport au contact : notre algorithme de scouting, calibré sur les gabarits réels des joueurs NFL et NCAA, te propose le poste où tu serais le plus utile au collectif."
        bouton="Je fais le test"
      />

      <h2 id="coupe">La Coupe de France</h2>
      <p>
        À côté des championnats, la <strong>Coupe de France</strong> constitue l’autre grand
        rendez-vous de la saison. Sa logique est celle de toutes les coupes : une compétition à
        élimination, ouverte, qui peut faire se croiser des équipes de niveaux différents et produire
        des affiches qu’un championnat cloisonné ne permettrait pas.
      </p>
      <p>
        En flag football, la Coupe de France propose des épreuves féminines et des épreuves
        masculines, en plus de la pratique mixte du championnat. C’est une différence structurante
        avec le championnat, et elle offre aux joueuses comme aux joueurs un cadre de compétition
        supplémentaire. L’équipe de flag des Pionniers de Touraine y est engagée.
      </p>
      <p>
        Comme pour les championnats, les modalités précises, format des tours, dates, conditions
        d’engagement, sont fixées chaque saison par la fédération. Le principe, lui, ne change pas :
        un match, un vainqueur, une élimination.
      </p>

      <h2 id="jeunes">Les compétitions jeunes</h2>
      <p>
        Les catégories jeunes ne sont pas une antichambre : elles ont leurs propres championnats,
        leurs propres calendriers et leurs propres logiques.
      </p>
      <ul>
        <li>
          <strong>En flag football</strong>, un championnat jeunes existe pour les catégories{' '}
          <strong>U13, U15 et U18</strong>. C’est la voie de compétition naturelle pour les enfants
          formés à l’école de flag, et elle permet de passer progressivement de l’apprentissage au
          match réel.
        </li>
        <li>
          <strong>Le programme NFL Flag</strong> concerne au club les catégories{' '}
          <strong>U13 et U15</strong>. C’est un dispositif jeunes rattaché à l’univers de la NFL et
          décliné à l’international, qui donne aux plus jeunes un cadre de pratique identifiable.
        </li>
        <li>
          <strong>En football américain</strong>, le club engage une équipe{' '}
          <strong>junior U18</strong>, ouverte aux jeunes nés entre 2009 et 2011, avec des
          entraînements le lundi et le jeudi de 19 h à 21 h.
        </li>
      </ul>
      <p>
        Chez les plus jeunes, la progression vers le contact est encadrée et graduelle, et la porte
        d’entrée est le flag, sans aucun contact. C’est le principe de notre{' '}
        <Link href="/ecole-de-flag/">école de flag</Link>, ouverte de U7 à U18 pour les enfants nés
        entre 2009 et 2021, le samedi de 10 h à 12 h. Le parcours complet des catégories est décrit
        dans notre article sur le{' '}
        <Link href="/blog/football-americain-jeunes-u13-u16-u18/">
          football américain pour les jeunes
        </Link>{' '}
        et la question de l’âge d’entrée dans{' '}
        <Link href="/blog/a-quel-age-commencer-le-football-americain/">
          à quel âge commencer le football américain
        </Link>
        .
      </p>

      <h2 id="saison">À quoi ressemble une saison</h2>
      <p>
        Voici l’un des points les plus utiles à comprendre avant de s’engager, et l’un des plus
        souvent ignorés par les nouveaux venus : les deux disciplines ne se jouent pas au même moment
        de l’année.
      </p>
      <p>
        <strong>En général</strong>, la saison de compétition de football américain se déroule de
        l’automne à l’hiver, tandis que le flag football occupe plutôt la période du printemps. Ce
        décalage n’est pas un hasard : il permet à un même club, et parfois à un même joueur, de
        mener les deux pratiques sans que les calendriers ne se percutent frontalement. C’est aussi
        ce qui explique que les entraînements des deux sections cohabitent toute l’année, chacune
        montant en charge à l’approche de sa propre échéance.
      </p>
      <p>
        Il faut prendre cette description pour ce qu’elle est : une tendance générale, pas une règle.
        Les dates de début et de fin, la répartition des journées, la place des phases finales et
        celle de la Coupe de France varient d’une saison à l’autre et d’une division à l’autre.{' '}
        <strong>
          Le calendrier officiel est publié par la FFFA : c’est la seule référence à consulter
        </strong>
        .
      </p>
      <p>
        Ce qui ne varie pas, en revanche, c’est le rythme hebdomadaire d’un club. Les entraînements
        se tiennent en soirée, plusieurs fois par semaine, toute la saison. C’est là que se construit
        la performance, et c’est là que se passe l’essentiel de la vie d’une équipe. Les matchs sont
        les points d’arrivée ; les séances sont le sport.
      </p>

      <h2 id="pionniers">Où jouent les Pionniers de Touraine</h2>
      <p>
        Voici le récapitulatif des engagements du club et des créneaux correspondants, au{' '}
        <strong>Stade de la Chambrerie, rue Tartifume, 37100 Tours</strong>.
      </p>
      <div className="blogc-table-scroll">
        <table>
          <thead>
            <tr>
              <th scope="col">Section</th>
              <th scope="col">Engagement en compétition</th>
              <th scope="col">Entraînements</th>
              <th scope="col">Tarif saison</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Football américain seniors</th>
              <td>Division 2, au contact</td>
              <td>Lundi et vendredi 20 h à 23 h, mercredi 21 h à 23 h</td>
              <td>249,99 €</td>
            </tr>
            <tr>
              <th scope="row">Football américain juniors U18</th>
              <td>Catégorie U18, nés entre 2009 et 2011</td>
              <td>Lundi et jeudi 19 h à 21 h</td>
              <td>150 €</td>
            </tr>
            <tr>
              <th scope="row">Flag mixte seniors</th>
              <td>Championnat mixte D1 et Coupe de France</td>
              <td>Lundi et jeudi 20 h 15 à 22 h 45</td>
              <td>100 € en loisir, 150 € en compétition</td>
            </tr>
            <tr>
              <th scope="row">Flag mixte juniors U13 à U18</th>
              <td>Compétitions jeunes de flag</td>
              <td>Jeudi 19 h à 20 h 30</td>
              <td>100 €</td>
            </tr>
            <tr>
              <th scope="row">École de flag U7 à U18</th>
              <td>Championnat jeunes U13, U15, U18 et programme NFL Flag U13 et U15</td>
              <td>Samedi 10 h à 12 h</td>
              <td>100 €</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Dans tous les cas, la <strong>licence FFFA est incluse</strong> dans le tarif, le{' '}
        <strong>paiement en trois fois</strong> est possible, et la{' '}
        <strong>semaine découverte est offerte</strong> avec l’équipement prêté. Le détail des
        sections est sur les pages <Link href="/football-americain/">football américain</Link>,{' '}
        <Link href="/flag-football/">flag football</Link>,{' '}
        <Link href="/ecole-de-flag/">école de flag</Link> et dans le récapitulatif de{' '}
        <Link href="/nos-sections/">nos sections</Link>. La question du budget global est traitée en
        détail dans{' '}
        <Link href="/blog/combien-coute-le-football-americain/">
          combien coûte le football américain
        </Link>
        .
      </p>

      <CtaTunnel
        titre="Une équipe en D2, une équipe en D1 mixte, et une place pour toi"
        texte="Semaine découverte offerte aux Pionniers de Touraine, au Stade de la Chambrerie à Tours : plusieurs séances d’essai, équipement complet prêté, aucun engagement. Débutants bienvenus, quel que soit ton âge ou ton gabarit."
        bouton="Je viens essayer"
      />

      <h2 id="joueur">Ce que ça change quand on rejoint le club</h2>
      <p>
        Savoir qu’un club évolue en D2 ou en D1 mixte, c’est une information abstraite tant qu’on n’a
        pas traduit ce que cela implique au quotidien. Voici la traduction.
      </p>

      <h3>Tu t’entraînes dans un cadre compétitif, dès le premier jour</h3>
      <p>
        Un club engagé en championnat national ne s’entraîne pas comme une section loisir. Les
        séances sont structurées, il y a un playbook, des ajustements tactiques, une préparation
        physique et des objectifs de saison. Cela ne veut pas dire que les débutants sont laissés au
        bord du terrain : au contraire, un effectif compétitif a besoin de renouvellement permanent,
        et la formation des nouveaux fait partie du fonctionnement normal d’une équipe.
      </p>

      <h3>Tu ne joues pas forcément dès la première saison, et c’est normal</h3>
      <p>
        Le football américain au contact demande un apprentissage technique et une progression
        encadrée avant la mise en situation de match. Selon ton profil, ton assiduité et ton poste,
        ta première saison peut être une saison d’apprentissage. C’est le chemin qu’ont pris la quasi
        totalité des joueurs français, et c’est ce que raconte notre article{' '}
        <Link href="/blog/commencer-le-football-americain-adulte/">
          commencer le football américain à l’âge adulte
        </Link>
        . En flag, la mise en jeu est en général plus rapide, parce que le format à cinq et l’absence
        de contact réduisent les prérequis techniques.
      </p>

      <h3>Tu prends une licence, et elle ouvre des portes</h3>
      <p>
        La licence FFFA est incluse dans le tarif de la saison. Elle te permet de jouer en
        compétition officielle, mais aussi, si le sujet t’intéresse, d’accéder aux parcours
        d’arbitrage et de coaching proposés par la fédération. Beaucoup de joueurs se découvrent une
        seconde vocation de ce côté-là, et un club en a un besoin permanent. On détaille ces rôles
        dans{' '}
        <Link href="/blog/arbitre-coach-benevole-club-football-americain/">
          devenir arbitre, coach ou bénévole dans un club de football américain
        </Link>
        .
      </p>

      <h3>Tu te déplaces, et c’est une partie de l’expérience</h3>
      <p>
        Une saison de championnat national implique des déplacements. C’est une contrainte, et c’est
        aussi l’un des moments où un groupe se construit vraiment. Les trajets, les journées de
        plateau en flag, les repas d’après-match : la vie d’équipe ne se passe pas seulement aux
        entraînements. C’est un point que les personnes venues chercher{' '}
        <Link href="/blog/sport-collectif-tours/">un vrai sport collectif à Tours</Link> citent
        systématiquement.
      </p>

      <h2 id="suivre">Suivre les matchs : FFFA TV et la diffusion par les clubs</h2>
      <p>
        Longtemps, suivre le championnat de France depuis son canapé relevait du parcours du
        combattant. Ce n’est plus le cas : <strong>FFFA TV</strong> permet désormais aux clubs de
        diffuser leurs propres matchs. La conséquence est considérable pour une discipline comme la
        nôtre : les familles qui ne peuvent pas se déplacer, les joueurs blessés, les partenaires du
        club et les curieux peuvent regarder une rencontre en ligne.
      </p>
      <p>
        Mais un match ne se diffuse pas tout seul. Derrière une retransmission, il y a des caméras à
        installer, un cadrage à tenir pendant deux heures, une régie à piloter, un son à gérer et une
        organisation à tenir avant, pendant et après la rencontre. C’est un métier, et dans un club
        associatif, ce sont des bénévoles qui l’apprennent et le font.
      </p>
      <p>
        C’est précisément pour cela que les Pionniers de Touraine recrutent des bénévoles pour
        l’équipe broadcast : tournage et régie de transmission. Aucune expérience préalable n’est
        exigée, la formation se fait sur le terrain, et c’est une excellente porte d’entrée dans le
        club pour quelqu’un qui aime le sport sans vouloir le pratiquer, ou qui s’intéresse à
        l’audiovisuel. L’offre est décrite en détail ici :{' '}
        <a href="https://recrutement.pionniersdetouraine.fr/#offre-broadcast-regie">
          rejoindre l’équipe broadcast et régie de transmission
        </a>
        .
      </p>
      <p>
        Au-delà de la diffusion, la fédération publie les calendriers, les résultats et les
        classements de ses compétitions. C’est le meilleur endroit pour savoir quand et où joue une
        équipe donnée, et c’est aussi là que se trouvent les règlements sportifs qui font foi, saison
        par saison.
      </p>

      <h2 id="venir">Venir voir un match au stade</h2>
      <p>
        Regarder du football américain en ligne, c’est bien. Le voir en vrai, c’est autre chose. Le
        bruit des contacts, la vitesse réelle des joueurs, la façon dont une ligne se met en place :
        rien de tout cela ne passe correctement à l’écran, et c’est la raison pour laquelle presque
        tous les gens qui rejoignent un club racontent avoir été convaincus lors d’un match auquel
        ils étaient venus « juste pour voir ».
      </p>
      <p>
        Les Pionniers de Touraine reçoivent au <strong>Stade de la Chambrerie, rue Tartifume, 37100
        Tours</strong>. On a écrit un guide complet du lieu, de son accès et de ce qu’on y trouve :{' '}
        <Link href="/blog/stade-de-la-chambrerie-tours/">le Stade de la Chambrerie à Tours</Link>.
        Pour un premier match, quelques conseils simples : prévois de quoi te couvrir, parce qu’une
        rencontre d’automne dure plus longtemps qu’on ne l’imagine, et garde un œil sur le tableau
        d’affichage plutôt que sur le ballon, ce qui est le meilleur moyen de comprendre ce qui se
        joue.
      </p>
      <p>
        Si tu ne connais rien aux règles, une demi-heure de lecture suffit largement à ne pas être
        perdu : notre guide des{' '}
        <Link href="/blog/regles-football-americain/">règles du football américain</Link> a été écrit
        pour ça, et le{' '}
        <Link href="/blog/lexique-football-americain/">lexique du football américain</Link> traduit
        les termes que tu entendras autour de toi. Pour toute question pratique, la page{' '}
        <Link href="/contact/">contact</Link> est le chemin le plus direct.
      </p>

      <h2 id="faq">Questions fréquentes sur le championnat de France</h2>

      <h3>Existe-t-il vraiment un championnat de France de football américain ?</h3>
      <p>
        Oui. Il est organisé par la Fédération Française de Football Américain et structuré en
        divisions hiérarchisées, avec une Division 1 au sommet, une Division 2 en dessous et des
        divisions inférieures. Les rencontres se disputent avec des arbitres officiels, selon un
        règlement publié, sur des terrains homologués, et les résultats sont homologués par la
        fédération. Le nombre de divisions, de poules et d’équipes ainsi que les modalités de montée
        et de descente évoluent d’une saison à l’autre : le règlement sportif de la FFFA est la
        référence.
      </p>

      <h3>En quelle division jouent les Pionniers de Touraine ?</h3>
      <p>
        L’équipe senior de football américain, au contact, évolue en <strong>Division 2</strong>.
        L’équipe mixte de flag football est engagée en <strong>championnat mixte D1</strong> ainsi
        qu’en Coupe de France. Le club est également présent en compétitions jeunes, avec le
        championnat U13, U15 et U18 en flag, le programme NFL Flag en U13 et U15, et une équipe
        junior U18 en football américain.
      </p>

      <h3>Le flag football a-t-il son propre championnat ?</h3>
      <p>
        Oui, et il est distinct de celui du football américain, avec un règlement écrit
        indépendamment. Sa spécificité française est la pratique mixte : hommes et femmes jouent dans
        la même équipe, y compris au plus haut niveau national. La Coupe de France propose par
        ailleurs des épreuves féminines et masculines. Le format des compétitions, souvent organisé
        en journées de plateau plutôt qu’en match unique hebdomadaire, est fixé chaque saison par la
        fédération.
      </p>

      <h3>Quand se joue la saison ?</h3>
      <p>
        En général, la compétition de football américain occupe la période allant de l’automne à
        l’hiver, et le flag football plutôt le printemps. Ce décalage permet à un club de mener les
        deux pratiques dans la même saison. Il s’agit d’une tendance générale et non d’une règle :
        les dates précises, la répartition des journées et la place des phases finales varient d’une
        saison et d’une division à l’autre, et le calendrier officiel est publié par la FFFA.
      </p>

      <h3>Comment regarder un match de championnat de France ?</h3>
      <p>
        FFFA TV permet désormais aux clubs de diffuser leurs propres rencontres, ce qui rend le
        championnat accessible bien au-delà des personnes présentes au stade. Chaque diffusion repose
        sur une équipe de bénévoles au tournage et à la régie. C’est d’ailleurs l’un des postes pour
        lesquels le club recrute :{' '}
        <a href="https://recrutement.pionniersdetouraine.fr/#offre-broadcast-regie">
          l’équipe broadcast et régie de transmission
        </a>{' '}
        est ouverte à des bénévoles sans expérience préalable, formés sur place.
      </p>

      <h3>Faut-il un bon niveau pour rejoindre un club engagé en championnat national ?</h3>
      <p>
        Non. Un club engagé en compétition a besoin de renouveler son effectif en permanence, et la
        formation des débutants fait partie de son fonctionnement normal. La quasi totalité des
        joueurs français ont découvert la discipline à l’âge adulte, sans aucune base. Ce qui est
        demandé, c’est l’assiduité et l’envie de progresser, pas un passé sportif. La semaine
        découverte est offerte, avec l’équipement prêté, précisément pour te permettre de juger sur
        pièces. Si tu reprends le sport après une coupure, notre article sur{' '}
        <Link href="/blog/reprendre-le-sport-a-30-ans-tours/">reprendre le sport à 30 ans</Link>{' '}
        décrit honnêtement les premières semaines.
      </p>

      <h3>Y a-t-il des montées et des descentes ?</h3>
      <p>
        Le principe existe : une équipe qui domine sa division peut accéder au niveau supérieur, une
        équipe en difficulté peut redescendre. Les modalités concrètes, nombre de places, existence
        de barrages, conditions d’accession, sont fixées chaque saison par le règlement sportif
        fédéral. Il faut aussi savoir qu’une montée peut s’accompagner d’exigences qui ne sont pas
        seulement sportives, liées à la capacité du club à assumer le niveau supérieur en effectif,
        en encadrement et en organisation.
      </p>

      <CtaTunnel
        titre="La saison prochaine se prépare maintenant"
        texte="Rejoins les Pionniers de Touraine au Stade de la Chambrerie à Tours : football américain en D2, flag mixte en D1, équipes jeunes et école de flag. Licence FFFA incluse, paiement en trois fois, semaine découverte offerte avec équipement prêté."
        bouton="Je rejoins le club"
      />
    </>
  );
}
