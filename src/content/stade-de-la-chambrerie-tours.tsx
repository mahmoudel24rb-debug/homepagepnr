import Link from 'next/link';
import { CtaQuiz, CtaTunnel } from '@/components/blog/CtaEncart';

/**
 * Article. Mots-clés : « stade de la chambrerie », « stade chambrerie tours »,
 * « match football américain tours ».
 * Page de destination locale : adresse réelle, fiche Google Business, ce qui s’y
 * passe, déroulé d’un match pour un néophyte, FFFA TV, bénévolat jour de match.
 * Aucun détail d’accès inventé (pas de ligne de bus, pas de parking, pas de
 * tarif d’entrée affirmé) : l’itinéraire renvoie à la fiche Google du club.
 */
export default function ArticleChambrerie() {
  return (
    <>
      <p>
        Il y a un endroit à Tours où, plusieurs soirs par semaine, des gens enfilent un casque et
        des épaulières sous les projecteurs, et où, le samedi matin, des enfants courent après des
        bandes de tissu accrochées à leur ceinture. Cet endroit s’appelle le{' '}
        <strong>stade de la Chambrerie</strong>, et c’est la maison des{' '}
        <strong>Pionniers de Touraine</strong> depuis des années : entraînements, matchs à domicile,
        école de flag, tout s’y passe.
      </p>
      <p>
        Cet article est fait pour deux profils de lecteurs. Celui qui cherche simplement où se
        trouve le stade de la Chambrerie et ce qu’on y trouve. Et celui qui a vu passer une affiche
        de match, qui n’a jamais regardé une rencontre de football américain de sa vie, et qui se
        demande à quoi il s’expose s’il vient un dimanche après-midi. On répond aux deux, dans cet
        ordre.
      </p>
      <p>
        Un mot sur le club, pour situer : les Pionniers de Touraine sont nés en{' '}
        <strong>1987</strong>, ce qui en fait l’un des plus anciens clubs de football américain de
        France. Aujourd’hui, la structure fait vivre une équipe senior de football américain, des
        juniors, une équipe de flag mixte engagée en championnat mixte D1, des jeunes en flag et une
        école de flag pour les enfants. L’histoire complète est sur{' '}
        <Link href="/le-club/">la page du club</Link>.
      </p>

      <div className="blogc-toc">
        <p className="blogc-toc-title">Sommaire</p>
        <ol>
          <li><a href="#ou">Où se trouve le stade de la Chambrerie</a></li>
          <li><a href="#ce-qui-sy-passe">Ce qui s’y passe chaque semaine</a></li>
          <li><a href="#venir-voir">Venir voir un match des Pionniers</a></li>
          <li><a href="#comprendre">Un match expliqué à quelqu’un qui n’y connaît rien</a></li>
          <li><a href="#flag-match">Et un match de flag, ça ressemble à quoi ?</a></li>
          <li><a href="#fffa-tv">Suivre le club à distance sur la FFFA TV</a></li>
          <li><a href="#benevole">Donner un coup de main le jour de match</a></li>
          <li><a href="#essayer">Essayer, après avoir regardé</a></li>
          <li><a href="#faq">Questions fréquentes</a></li>
        </ol>
      </div>

      <h2 id="ou">Où se trouve le stade de la Chambrerie</h2>

      <h3>L’adresse exacte</h3>
      <p>
        Le stade de la Chambrerie se situe <strong>rue Tartifume, 37100 Tours</strong>, au nord de
        la ville. C’est là que le club s’entraîne toute la saison et qu’il reçoit ses adversaires.
        Si tu cherches l’itinéraire depuis chez toi, le plus simple et le plus fiable est de passer
        par la fiche du club :{' '}
        <a href="https://maps.app.goo.gl/cnVghabaHrhx9qaQA" target="_blank" rel="noopener noreferrer">
          voir le stade de la Chambrerie sur Google Maps
        </a>. L’adresse et la carte interactive sont également reprises sur{' '}
        <Link href="/contact/">notre page contact</Link>.
      </p>

      <h3>Repérer le bon terrain</h3>
      <p>
        La Chambrerie est un complexe sportif, pas un terrain unique. Le conseil pratique, valable
        pour une première venue : arrive avec un peu d’avance et cherche les poteaux en forme de Y
        au fond de la zone d’en-but, ils sont impossibles à confondre avec un terrain de football
        classique. Un soir d’entraînement, tu peux aussi simplement suivre le bruit, ce qui
        fonctionne remarquablement bien avec ce sport.
      </p>
      <p>
        Si tu as le moindre doute avant de venir, écris-nous : quelqu’un du club répond et t’indique
        précisément où se garer et par où entrer selon le créneau concerné. La{' '}
        <Link href="/contact/">page contact</Link> contient le formulaire, l’adresse mail et le
        téléphone du club.
      </p>

      <h2 id="ce-qui-sy-passe">Ce qui s’y passe chaque semaine</h2>
      <p>
        La Chambrerie est occupée par les Pionniers presque tous les jours de la semaine. Voici le
        planning réel de la saison, celui qui figure sur{' '}
        <Link href="/nos-sections/">la page de nos sections</Link>.
      </p>

      <div className="blogc-table-scroll">
        <table>
          <thead>
            <tr>
              <th scope="col">Groupe</th>
              <th scope="col">Créneaux</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Seniors, football américain</th>
              <td>Lundi et vendredi de 20 h 00 à 23 h 00, mercredi de 21 h 00 à 23 h 00</td>
            </tr>
            <tr>
              <th scope="row">Juniors U18, football américain</th>
              <td>Lundi et jeudi de 19 h 00 à 21 h 00</td>
            </tr>
            <tr>
              <th scope="row">Flag mixte seniors</th>
              <td>Lundi et jeudi de 20 h 15 à 22 h 45</td>
            </tr>
            <tr>
              <th scope="row">Flag jeunes U13 à U18</th>
              <td>Jeudi de 19 h 00 à 20 h 30</td>
            </tr>
            <tr>
              <th scope="row">École de flag</th>
              <td>Samedi de 10 h 00 à 12 h 00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Les entraînements</h3>
      <p>
        Les séances de football américain se déroulent en soirée, sous les projecteurs une bonne
        partie de la saison. Elles alternent travail technique par groupe de postes, opposition et
        préparation physique. Un entraînement est ouvert au regard : si tu veux voir à quoi
        ressemble le sport avant de t’engager dans quoi que ce soit, venir observer une séance est
        parfaitement possible, et souvent plus parlant qu’un match pour comprendre le travail réel.
      </p>

      <h3>Les matchs à domicile</h3>
      <p>
        Le stade accueille les rencontres à domicile du club, en football américain comme en flag.
        Un jour de match transforme complètement l’endroit : équipes en tenue, officiels, public en
        bord de terrain, matériel, bénévoles partout. C’est la meilleure occasion de découvrir ce
        sport en vrai, parce que le direct rend immédiatement lisible ce que la télévision aplatit.
      </p>

      <h3>L’école de flag, le samedi matin</h3>
      <p>
        Le samedi de 10 h 00 à 12 h 00, la Chambrerie change d’ambiance : c’est le créneau de{' '}
        <Link href="/ecole-de-flag/">l’école de flag</Link>, sans contact, où les enfants apprennent
        à courir, attraper, se démarquer et retirer des flags. Les parents restent en bord de
        terrain, et beaucoup d’entre eux découvrent le sport à cette occasion. Si tu te demandes si
        ça peut convenir à ton enfant, on a écrit un guide dédié :{' '}
        <Link href="/blog/quel-sport-pour-mon-enfant-tours/">quel sport pour mon enfant à
        Tours</Link>, complété par{' '}
        <Link href="/blog/a-quel-age-commencer-le-football-americain/">à quel âge commencer le
        football américain</Link>.
      </p>

      <h2 id="venir-voir">Venir voir un match des Pionniers</h2>

      <h3>L’ambiance</h3>
      <p>
        Un match de football américain amateur n’a rien à voir avec les images de la NFL, et c’est
        précisément ce qui le rend intéressant. Tu es à quelques mètres du terrain, pas à cent
        mètres en gradin. Tu entends les appels, les cadences criées avant le snap, les chocs, les
        coachs qui corrigent en direct. Tu vois les joueurs souffler entre deux actions et
        s’engueuler gentiment sur un blocage manqué. C’est un spectacle rugueux, bruyant et très
        humain, avec une vraie proximité entre le public et les équipes.
      </p>
      <p>
        L’autre surprise, pour un néophyte, c’est le rythme. Le jeu est haché : une action de
        quelques secondes, un arrêt, tout le monde se replace, ça repart. Ces respirations
        permettent de commenter, de poser une question à ton voisin, de comprendre ce qui vient de
        se passer. C’est probablement le sport collectif le plus facile à regarder en discutant.
      </p>

      <h3>Les infos pratiques du match</h3>
      <p>
        Les dates, les horaires et les conditions d’accès varient d’une rencontre à l’autre, en
        fonction du calendrier de la compétition et de l’organisation du jour.{' '}
        <strong>Renseigne-toi sur nos réseaux sociaux pour les infos du match</strong> : c’est là
        que le club publie l’affiche de chaque réception, avec tout ce qu’il faut savoir avant de
        venir.
      </p>
      <ul>
        <li>
          <a href="https://www.facebook.com/p/Pionniers-de-Touraine-61578271450029/" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/pionniersdetouraine/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@pionniersdetouraine" target="_blank" rel="noopener noreferrer">
            TikTok
          </a>
        </li>
      </ul>
      <p>
        Tu peux aussi poser directement la question via{' '}
        <Link href="/contact/">la page contact</Link> : c’est le moyen le plus sûr d’avoir la bonne
        information pour une date précise.
      </p>

      <h3>Ce qu’il vaut mieux prévoir</h3>
      <p>
        Un terrain de football américain est un grand espace ouvert, et la saison se joue en bonne
        partie à la saison froide. Le conseil le plus utile qu’on puisse donner à un spectateur qui
        vient pour la première fois tient donc en un mot : couvre-toi. Une veste, un bonnet et de
        quoi t’asseoir si tu comptes rester longtemps changent radicalement l’expérience. Prévois
        aussi que la durée réelle d’une rencontre est bien plus longue que le temps de jeu affiché,
        pour les raisons expliquées plus bas.
      </p>

      <CtaTunnel
        titre="Tu peux aussi venir de l’autre côté de la ligne"
        texte="Semaine découverte offerte aux Pionniers de Touraine : plusieurs séances d’essai au stade de la Chambrerie, équipement complet prêté, débutants complets bienvenus, zéro engagement et zéro euro."
        bouton="Je viens essayer"
      />

      <h2 id="comprendre">Un match expliqué à quelqu’un qui n’y connaît rien</h2>
      <p>
        Voici le minimum vital. Avec ces quelques paragraphes, tu suivras une rencontre entière sans
        jamais être perdu, et tu comprendras pourquoi les gens autour de toi crient à des moments
        qui te semblaient anodins.
      </p>

      <h3>Le principe en trois phrases</h3>
      <p>
        Une équipe attaque, l’autre défend. L’attaque dispose de <strong>quatre tentatives</strong>{' '}
        pour faire avancer le ballon de <strong>dix yards</strong>, soit un peu plus de neuf mètres :
        si elle y arrive, elle regagne quatre tentatives et recommence ; si elle échoue, le ballon
        change de camp. L’objectif final est d’amener le ballon dans la zone d’en-but adverse, ce
        qui vaut six points et s’appelle un touchdown.
      </p>
      <p>
        Tout le reste est de la variation autour de ce mécanisme. Le règlement complet est détaillé
        dans notre article{' '}
        <Link href="/blog/regles-football-americain/">les règles du football américain expliquées
        simplement</Link>, et si un mot t’échappe pendant le match, notre{' '}
        <Link href="/blog/lexique-football-americain/">lexique du football américain</Link> couvre
        les soixante termes qui reviennent en permanence.
      </p>

      <h3>Le déroulé d’une rencontre</h3>
      <p>
        Le match commence par un coup d’envoi botté vers l’équipe adverse. Ensuite, les possessions
        alternent : une équipe attaque jusqu’à ce qu’elle marque, qu’elle dégage au pied ou qu’elle
        perde le ballon. La rencontre se joue en <strong>quatre quarts-temps</strong>, avec une
        mi-temps au milieu. Le chronomètre s’arrête très souvent, à chaque passe non attrapée, à
        chaque sortie de terrain, à chaque changement de possession, ce qui explique que la durée
        réelle soit bien supérieure au temps de jeu. Prévois un après-midi ou une soirée, pas une
        heure.
      </p>
      <p>
        Une chose surprend systématiquement les nouveaux venus : les équipes changent presque
        entièrement de joueurs selon qu’elles attaquent ou défendent. C’est normal. Une équipe de
        football américain est composée de trois escouades distinctes, l’attaque, la défense et les
        équipes spéciales, qui entrent et sortent en bloc entre deux actions. Le détail de qui fait
        quoi est dans notre guide des{' '}
        <Link href="/blog/postes-football-americain/">postes au football américain</Link>.
      </p>

      <h3>Cinq choses à regarder quand on débute</h3>
      <ul>
        <li>
          <strong>Le tableau des tentatives.</strong> « 3rd and 7 » signifie troisième tentative sur
          quatre, sept yards à parcourir. C’est l’information qui donne tout le contexte d’une
          action.
        </li>
        <li>
          <strong>Le départ de l’action.</strong> Rien ne bouge, puis le ballon part entre les
          jambes du joueur du milieu et tout s’emballe. Regarde ce joueur, pas le ballon, et tu
          verras arriver le début de chaque action.
        </li>
        <li>
          <strong>La ligne, pas le ballon.</strong> Les caméras et les yeux suivent naturellement le
          porteur. Une fois de temps en temps, regarde plutôt les gros gabarits au centre : c’est là
          que l’action est réellement gagnée ou perdue.
        </li>
        <li>
          <strong>Le drapeau jaune.</strong> Quand un officiel jette un petit drapeau au sol, il y a
          faute. L’action va à son terme, puis la sanction est annoncée et le résultat peut être
          annulé.
        </li>
        <li>
          <strong>La quatrième tentative.</strong> C’est le moment de décision du match : tenter,
          dégager, ou botter pour trois points. C’est là que les entraîneurs prennent leurs vrais
          risques.
        </li>
      </ul>

      <h2 id="flag-match">Et un match de flag, ça ressemble à quoi ?</h2>
      <p>
        Complètement différent, et tout aussi intéressant à regarder. Le flag se joue à{' '}
        <strong>cinq contre cinq</strong>, sans contact : on arrête le porteur du ballon en lui
        retirant une bande de tissu accrochée à la ceinture. Le terrain est plus petit, le jeu est
        beaucoup plus rapide, et chaque joueur touche le ballon bien davantage.
      </p>
      <p>
        C’est aussi une discipline <strong>mixte</strong> : hommes et femmes jouent dans la même
        équipe, sur le même terrain. Notre équipe de flag seniors évolue en championnat mixte D1, et
        c’est souvent la rencontre la plus lisible pour un spectateur qui découvre, parce que
        l’absence de contact rend les intentions de jeu beaucoup plus visibles. Le flag sera par
        ailleurs au programme des Jeux olympiques de Los Angeles 2028, ce qui explique l’intérêt
        croissant qu’il suscite. Deux lectures pour aller plus loin :{' '}
        <Link href="/blog/regles-flag-football/">les règles du flag football</Link> et{' '}
        <Link href="/blog/flag-football-jo-2028/">le flag aux JO 2028</Link>.
      </p>

      <CtaQuiz
        titre="Tu regardes le match en te demandant où tu jouerais ?"
        texte="Huit questions sur ta taille, ton poids, ta vitesse et ton rapport au contact : notre algorithme de scouting, calibré sur les gabarits réels des joueurs NFL et NCAA, te propose le poste où ton profil aurait le plus de valeur, en foot US ou en flag."
        bouton="Je fais le test de poste"
      />

      <h2 id="fffa-tv">Suivre le club à distance sur la FFFA TV</h2>
      <p>
        Tu ne peux pas être à la Chambrerie le jour du match ? La fédération permet désormais aux
        clubs de <strong>diffuser leurs rencontres sur la FFFA TV</strong>. Concrètement, un match
        joué au stade peut être suivi bien au-delà des tribunes : par des familles éloignées, des
        joueurs blessés, des partenaires du club ou de simples curieux.
      </p>
      <p>
        Ce direct n’existe que parce que des bénévoles le font exister. Le club constitue une équipe
        broadcast chargée du tournage et de la régie de transmission les jours de match à domicile,
        en football américain comme en flag. Aucune expérience n’est exigée, tout s’apprend sur
        place, et c’est l’un des rôles les plus recherchés de la saison. L’offre est ici :{' '}
        <a href="https://recrutement.pionniersdetouraine.fr/#offre-broadcast-regie">
          rejoindre l’équipe broadcast FFFA TV
        </a>.
      </p>
      <p>
        Pour savoir si une rencontre donnée est diffusée, le réflexe reste le même que pour les
        horaires : les réseaux sociaux du club annoncent chaque réception et ce qui est prévu autour.
      </p>

      <h2 id="benevole">Donner un coup de main le jour de match</h2>
      <p>
        Beaucoup de gens viennent voir un match, trouvent l’ambiance sympathique, et se demandent
        ensuite comment participer sans forcément jouer. La réponse est simple : un jour de match,
        un club a besoin de bras partout. Accueil du public et des partenaires, buvette, installation
        et rangement du matériel, signalétique, orientation des visiteurs, tournage pour la FFFA TV,
        photos et publications. Rien de tout cela ne demande de connaître le sport, et la plupart de
        ces missions se tiennent sur une demi-journée.
      </p>
      <p>
        Il y a aussi les rôles plus engagés, sur la saison : coach, assistant coach, préparateur
        physique, arbitre. L’arbitrage donne d’ailleurs lieu à des indemnités de match, ce que peu
        de gens savent. On a détaillé chacun de ces rôles, le temps qu’ils demandent et le prix des
        licences correspondantes dans notre article{' '}
        <Link href="/blog/arbitre-coach-benevole-club-football-americain/">devenir arbitre, coach ou
        bénévole dans un club de football américain</Link>.
      </p>
      <p>
        Et si tu représentes une entreprise du bassin tourangeau, la visibilité au stade les jours de
        match fait partie de ce que le club propose à ses partenaires : le cadre complet est sur{' '}
        <Link href="/partenaires/">la page partenaires</Link>.
      </p>

      <h2 id="essayer">Essayer, après avoir regardé</h2>
      <p>
        C’est le chemin le plus fréquent : on vient voir un match par curiosité, on repart en se
        disant que ça a l’air moins inaccessible qu’imaginé, et on revient trois semaines plus tard
        en tenue de sport. Le club propose une <strong>semaine découverte offerte</strong> :
        plusieurs séances d’essai, l’équipement complet prêté, aucun engagement et aucun paiement.
      </p>
      <p>
        Deux idées reçues à évacuer tout de suite. La première : il faudrait avoir joué plus jeune.
        C’est faux, la majorité des joueurs français commencent à l’âge adulte, et on l’explique en
        détail dans{' '}
        <Link href="/blog/commencer-le-football-americain-adulte/">commencer le football américain à
        l’âge adulte</Link>. La seconde : il faudrait un gabarit particulier. C’est faux aussi, et
        c’est même l’inverse : chaque morphologie correspond à un poste, du sprinteur léger au
        joueur de ligne massif.
      </p>
      <p>
        Selon ton profil, la bonne porte d’entrée n’est pas la même. Les adultes qui veulent du
        contact regardent du côté de la{' '}
        <Link href="/football-americain/">section football américain</Link>. Ceux qui préfèrent la
        vitesse et le jeu sans contact iront vers la{' '}
        <Link href="/flag-football/">section flag</Link>. Les enfants ont{' '}
        <Link href="/ecole-de-flag/">l’école de flag</Link> du samedi matin. Et si tu reprends le
        sport après une longue pause, notre article{' '}
        <Link href="/blog/reprendre-le-sport-a-30-ans-tours/">reprendre le sport à 30 ans à
        Tours</Link> a été écrit exactement pour ça.
      </p>

      <CtaTunnel
        titre="Rendez-vous au stade de la Chambrerie"
        texte="Rue Tartifume à Tours, plusieurs soirs par semaine. Réserve ta semaine découverte : équipement prêté, coachs habitués aux grands débutants, et zéro engagement à la clé."
        bouton="Je réserve mes séances d’essai"
      />

      <h2 id="faq">Questions fréquentes sur le stade de la Chambrerie</h2>

      <h3>Où se trouve exactement le stade de la Chambrerie ?</h3>
      <p>
        Rue Tartifume, 37100 Tours, au nord de la ville. C’est l’adresse des entraînements et des
        matchs à domicile des Pionniers de Touraine. Pour calculer ton itinéraire, le plus fiable
        est de partir de{' '}
        <a href="https://maps.app.goo.gl/cnVghabaHrhx9qaQA" target="_blank" rel="noopener noreferrer">
          la fiche du stade sur Google Maps
        </a>, qui te donnera le trajet adapté à ton point de départ et à ton mode de transport.
        L’adresse et une carte figurent également sur <Link href="/contact/">la page contact</Link>.
      </p>

      <h3>Peut-on assister à un match ou à un entraînement ?</h3>
      <p>
        Oui. Les entraînements se déroulent en soirée et le samedi matin pour l’école de flag, et
        venir observer une séance est une très bonne façon de découvrir le sport sans engagement.
        Pour les matchs, les dates et les conditions d’accès dépendent de chaque rencontre :
        renseigne-toi sur nos réseaux sociaux, où le club publie l’affiche de chaque réception, ou
        écris-nous depuis la page contact pour une date précise.
      </p>

      <h3>Combien de temps dure un match de football américain ?</h3>
      <p>
        Une rencontre se joue en quatre quarts-temps séparés par une mi-temps, mais la durée réelle
        dépasse largement le temps de jeu affiché, parce que le chronomètre s’arrête très
        fréquemment. Compte un après-midi ou une soirée plutôt qu’une heure. Les formats des
        catégories de jeunes et du flag sont plus courts, et la durée exacte d’un quart-temps dépend
        du règlement de la compétition concernée.
      </p>

      <h3>Faut-il connaître les règles pour venir voir un match ?</h3>
      <p>
        Non. Le principe de base tient en une phrase : quatre tentatives pour avancer de dix yards,
        et l’objectif est d’atteindre la zone d’en-but. Avec ça, tu suis une rencontre entière. Le
        jeu étant découpé en actions courtes séparées par des arrêts, tu as tout le temps de poser
        des questions à ton voisin. Si tu veux préparer un peu, lis{' '}
        <Link href="/blog/regles-football-americain/">les règles expliquées simplement</Link> et
        garde notre <Link href="/blog/lexique-football-americain/">lexique</Link> sous la main.
      </p>

      <h3>Peut-on venir avec des enfants ?</h3>
      <p>
        Oui, et beaucoup de familles le font, notamment celles de l’école de flag. Un match est un
        spectacle bruyant et spectaculaire qui plaît généralement beaucoup aux enfants, et le club
        accueille chaque samedi matin les plus jeunes sur son créneau d’école de flag, sans contact.
        Pour choisir la discipline adaptée à l’âge de ton enfant, va voir{' '}
        <Link href="/blog/a-quel-age-commencer-le-football-americain/">à quel âge commencer le
        football américain</Link>.
      </p>

      <h3>Comment suivre un match si je ne peux pas me déplacer ?</h3>
      <p>
        La fédération permet désormais aux clubs de diffuser leurs matchs sur la FFFA TV, et les
        Pionniers construisent l’équipe de bénévoles qui fait vivre ce direct depuis la Chambrerie.
        Les rencontres concernées sont annoncées sur les réseaux du club. Si le sujet t’intéresse
        au-delà du visionnage, le club recrute justement pour le tournage et la régie, sans aucune
        expérience requise.
      </p>

      <h3>Le club recrute-t-il des joueurs toute l’année ?</h3>
      <p>
        Les arrivées se concentrent logiquement autour de la rentrée, mais un club amateur accueille
        des curieux à d’autres moments de la saison, en fonction des groupes et des catégories. Le
        plus simple est de poser la question directement : selon la période, on t’orientera vers le
        créneau le plus adapté, en football américain, en flag ou à l’école de flag. Notre article{' '}
        <Link href="/blog/quel-sport-rentree-2026-2027/">quel sport pour la rentrée 2026-2027</Link>{' '}
        aide à faire le point si tu hésites encore entre plusieurs disciplines.
      </p>

      <h2 id="conclusion">Une adresse, une équipe, une porte ouverte</h2>
      <p>
        Le stade de la Chambrerie n’est pas une enceinte fermée réservée aux initiés. C’est un
        terrain de la ville de Tours où un club associatif de bientôt quarante ans fait vivre un
        sport que peu de gens connaissent et que presque tous trouvent fascinant dès qu’ils le
        voient de près.
      </p>
      <p>
        Alors viens. Regarde un match, observe un entraînement, amène tes enfants un samedi matin.
        Et si l’envie te prend d’aller plus loin, il y a trois façons d’y revenir : en tenue avec la{' '}
        <Link href="/nos-sections/">section qui te correspond</Link>, en bénévole{' '}
        <Link href="/blog/arbitre-coach-benevole-club-football-americain/">sur l’un des rôles
        ouverts du club</Link>, ou en partenaire depuis{' '}
        <Link href="/partenaires/">la page partenaires</Link>. Rue Tartifume, 37100 Tours.
      </p>
    </>
  );
}
