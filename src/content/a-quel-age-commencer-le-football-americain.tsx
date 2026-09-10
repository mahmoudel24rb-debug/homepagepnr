import Link from 'next/link';
import { CtaQuiz, CtaTunnel } from '@/components/blog/CtaEncart';
import Faq from '@/components/blog/Faq';

/**
 * Article. Mot-clé : « à quel âge commencer le football américain ».
 * Réponse directe en tête (flag dès 5-6 ans, contact à partir des U18 chez les
 * Pionniers, jamais trop tard côté adultes), puis repères par tranche d’âge,
 * signes qu’un enfant est prêt, question du gabarit et FAQ. Tutoiement.
 */
export default function ArticleQuelAge() {
  return (
    <>
      <p>
        <strong>« À quel âge peut-on commencer le football américain ? »</strong> C’est la
        question qui revient le plus souvent, et elle arrive de deux côtés à la fois. D’un côté
        des parents qui se demandent si leur enfant est trop jeune. De l’autre des adultes de
        trente, quarante ans, persuadés qu’ils ont laissé passer le train.
      </p>
      <p>
        La réponse tient en trois phrases. Le <strong>flag football</strong>, la version sans
        contact, se pratique <strong>dès 5 ou 6 ans</strong> : l’école de flag accueille les
        jeunes nés entre 2009 et 2021 (catégories U7 à U18). Le{' '}
        <strong>football américain avec contact</strong> commence bien plus tard : chez les
        Pionniers de Touraine, il démarre avec l’équipe <strong>U18</strong>, vers 15 à 17 ans, et
        de façon progressive. Et pour les adultes, il n’y a tout simplement{' '}
        <strong>pas d’âge limite</strong> : dans ce sport, la grande majorité des joueurs a
        commencé après vingt ans.
      </p>
      <p>
        Cet article détaille ce que recouvre chacune de ces trois réponses : les repères par
        tranche d’âge, les signes qui montrent qu’un enfant est prêt, ce qui change vraiment quand
        on débute à trente ou quarante ans, la question du gabarit qui bloque tant de monde, et
        les questions que l’on nous pose le plus souvent. Il est écrit par un club fondé à Tours
        en <strong>1987</strong>, qui voit chaque année arriver des débutants de six à quarante
        ans passés.
      </p>

      <div className="blogc-toc">
        <p className="blogc-toc-title">Sommaire</p>
        <ol>
          <li><a href="#reponse">La réponse courte, en un tableau</a></li>
          <li><a href="#enfants">De 5 à 12 ans : le flag, et rien d’autre</a></li>
          <li><a href="#ados">De 13 à 17 ans : le moment où le contact devient possible</a></li>
          <li><a href="#pret">Les signes qu’un enfant est prêt</a></li>
          <li><a href="#adultes">Commencer à 20, 30, 40 ans : jamais trop tard</a></li>
          <li><a href="#gabarit">La question du gabarit</a></li>
          <li><a href="#trop-tard">Existe-t-il un âge où c’est vraiment trop tard ?</a></li>
          <li><a href="#faq">Questions fréquentes sur l’âge</a></li>
        </ol>
      </div>

      <h2 id="reponse">La réponse courte, en un tableau</h2>
      <p>
        Voici, sans détour, ce qui existe chez nous et à partir de quand. Tous les entraînements
        se déroulent au <strong>Stade de la Chambrerie, rue Tartifume, 37100 Tours</strong>, et les
        tarifs indiqués couvrent la saison complète, <strong>licence FFFA comprise</strong>.
      </p>

      <div className="blogc-table-scroll">
        <table>
          <thead>
            <tr>
              <th scope="col">Âge</th>
              <th scope="col">Ce qu’on peut faire</th>
              <th scope="col">Créneau</th>
              <th scope="col">Contact ?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">5 à 12 ans</th>
              <td>École de flag (U7 à U18, nés de 2009 à 2021), 100 €</td>
              <td>Samedi 10 h - 12 h</td>
              <td>Aucun</td>
            </tr>
            <tr>
              <th scope="row">13 à 17 ans</th>
              <td>Flag mixte juniors (U13 à U18) et école de flag</td>
              <td>Jeudi 19 h - 20 h 30, samedi 10 h - 12 h</td>
              <td>Aucun</td>
            </tr>
            <tr>
              <th scope="row">15 à 17 ans</th>
              <td>Football américain juniors U18 (nés de 2009 à 2011), 150 €</td>
              <td>Lundi et jeudi 19 h - 21 h</td>
              <td>Initiation progressive</td>
            </tr>
            <tr>
              <th scope="row">18 ans et plus</th>
              <td>Flag mixte seniors, loisir 100 € ou compétition 150 €</td>
              <td>Lundi et jeudi 20 h 15 - 22 h 45</td>
              <td>Aucun</td>
            </tr>
            <tr>
              <th scope="row">19 ans et plus</th>
              <td>Football américain seniors (nés en 2007 et avant), 249,99 €</td>
              <td>Lundi et vendredi 20 h - 23 h, mercredi 21 h - 23 h</td>
              <td>Oui, championnat D2</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Une ligne de lecture traverse tout ce tableau :{' '}
        <strong>le flag est ouvert à tous les âges, le contact ne commence qu’à
        l’adolescence</strong>. C’est une différence essentielle avec l’image que renvoie la NFL,
        et c’est aussi ce qui rend ce sport bien plus accessible qu’on ne le croit, à cinq ans
        comme à quarante.
      </p>

      <h2 id="enfants">De 5 à 12 ans : le flag, et rien d’autre</h2>
      <p>
        Si tu cherches une activité pour un enfant, la réponse est simple : c’est le{' '}
        <Link href="/ecole-de-flag/">flag football</Link>, et il n’existe pas d’autre porte
        d’entrée. En France, les enfants ne pratiquent pas le football américain avec contact. Ils
        jouent au flag, où le plaquage est remplacé par l’arrachage d’une bande de tissu accrochée
        à la ceinture, et où le contact volontaire est interdit par le règlement.
      </p>

      <h3>Vers 5 et 6 ans : l’entrée par le jeu</h3>
      <p>
        C’est l’âge où notre école de flag ouvre ses portes, avec les plus jeunes de la catégorie
        U7. À ce stade, l’objectif n’est pas d’apprendre un sport, c’est d’apprendre à bouger :
        courir, changer de direction, attraper, lancer, s’arrêter net. Le flag est excellent pour
        cela parce qu’il repose entièrement sur ces gestes, dans un cadre ludique où l’action
        s’arrête toutes les quelques secondes. Un enfant de cinq ans ne peut pas se concentrer
        vingt minutes d’affilée ; il n’en a pas besoin ici.
      </p>
      <p>
        Ce qui compte à cet âge, c’est qu’il reparte du terrain en riant. Ni score, ni classement,
        ni spécialisation : juste des courses, des ballons et des copains. Si ton enfant est
        vraiment très jeune ou pas encore à l’aise en groupe, une activité d’éveil multisport lui
        apportera autant, et il pourra nous rejoindre un an plus tard sans avoir pris le moindre
        retard.
      </p>

      <h3>De 7 à 12 ans : la vraie fenêtre</h3>
      <p>
        C’est la tranche d’âge idéale pour commencer, et de loin la plus représentée à l’école de
        flag. L’enfant comprend une règle, retient une consigne, accepte d’attendre son tour et
        commence à saisir ce qu’est un rôle dans une équipe. Il progresse vite, très vite, et la
        progression est visible d’une séance à l’autre, ce qui est extrêmement gratifiant à cet
        âge.
      </p>
      <p>
        Le format 5 contre 5 joue ici un rôle décisif. Sur un terrain réduit, avec cinq joueurs par
        équipe, <strong>tout le monde touche le ballon</strong> et personne ne peut se cacher au
        fond du terrain en attendant la fin. Pour un enfant timide, c’est souvent ce qui change
        tout : il a un tracé attribué sur chaque action, donc une mission claire, donc une
        réussite possible. La confiance vient après, pas avant. Nous développons cette idée dans
        notre guide{' '}
        <Link href="/blog/quel-sport-pour-mon-enfant-tours/">quel sport pour mon enfant à
        Tours</Link>, qui part du tempérament de l’enfant plutôt que du catalogue des sports.
      </p>
      <p>
        Côté pratique, l’école de flag a lieu <strong>le samedi de 10 h à 12 h</strong>, à{' '}
        <strong>100 € la saison, licence comprise</strong>, sans rien à acheter : ceintures et
        ballons sont fournis, une tenue de sport et des baskets suffisent.
      </p>

      <h2 id="ados">De 13 à 17 ans : le moment où le contact devient possible</h2>
      <p>
        L’adolescence est le moment charnière, et c’est aussi celui où beaucoup de jeunes
        découvrent ce sport, souvent parce qu’ils cherchent justement autre chose que ce qu’ils
        pratiquent depuis l’enfance. Trois options coexistent, et elles ne s’excluent pas.
      </p>
      <p>
        <strong>Continuer ou commencer le flag.</strong> Le créneau{' '}
        <strong>flag mixte juniors, le jeudi de 19 h à 20 h 30</strong>, s’adresse aux U13 à U18.
        Le jeu y devient plus tactique : schémas, lectures de défense, coordination à cinq. Et
        comme le flag se joue en mixité, filles et garçons évoluent dans la même équipe, aux mêmes
        postes.
      </p>
      <p>
        <strong>Rejoindre l’équipe U18 de football américain.</strong> C’est ici que le contact
        entre en jeu, pour les jeunes <strong>nés entre 2009 et 2011</strong>, soit environ 15 à
        17 ans, le <strong>lundi et le jeudi de 19 h à 21 h</strong>, à{' '}
        <strong>150 € la saison</strong>. Le mot important est <strong>initiation</strong> : on
        apprend d’abord la position, les appuis, la façon de protéger sa tête, puis le geste
        technique à faible intensité, avant toute situation réelle. Personne ne se retrouve dans
        un plaquage le premier soir.
      </p>
      <p>
        <strong>Faire les deux.</strong> Rien n’empêche un adolescent de goûter au contact tout en
        continuant le flag, et rien ne l’oblige non plus à passer au contact un jour. Beaucoup de
        jeunes restent au flag toute leur adolescence, puis continuent en seniors. Le parcours
        complet, section par section, est détaillé dans notre article{' '}
        <Link href="/blog/football-americain-jeunes-u13-u16-u18/">football américain et flag pour
        les jeunes : U13, U16, U18</Link>.
      </p>

      <h2 id="pret">Les signes qu’un enfant est prêt</h2>
      <p>
        L’âge inscrit sur un état civil est un repère grossier : deux enfants nés la même année
        peuvent avoir plus d’un an d’écart de maturité motrice, et cela se rattrape tout seul.
        Voici des indices bien plus fiables que la date de naissance.
      </p>
      <ul>
        <li>
          <strong>Il tient une consigne simple jusqu’au bout.</strong> « Cours jusqu’au plot, tourne
          à gauche, lève les mains » : s’il peut retenir trois instructions et les exécuter dans
          l’ordre, il est prêt pour un sport codifié. C’est exactement ce qu’on demande sur un
          tracé de flag.
        </li>
        <li>
          <strong>Il supporte d’attendre son tour.</strong> Quelques secondes suffisent. Le flag
          alterne en permanence action et pause, et cette respiration convient très bien aux
          enfants qui ne tiennent pas en place, à condition qu’ils acceptent le cadre.
        </li>
        <li>
          <strong>Il aime courir.</strong> Le flag est un sport de course quasi permanent : sur un
          terrain réduit à cinq contre cinq, personne ne reste immobile plus de dix secondes. Un
          enfant qui déborde d’énergie y trouvera immédiatement son compte.
        </li>
        <li>
          <strong>Il accepte de perdre une action.</strong> Pas un match, une action. Au flag, on
          rate un tracé, on se fait arracher son flag, et on recommence trente secondes plus tard.
          C’est un sport extrêmement pédagogique pour les enfants qui vivent mal l’échec, parce
          qu’il offre en permanence une nouvelle occasion.
        </li>
        <li>
          <strong>Il en parle.</strong> Le signe le plus fiable de tous. Un enfant qui vous
          réclame d’essayer, qui connaît des équipes ou qui mime un touchdown dans le salon a
          largement l’âge de venir voir.
        </li>
      </ul>
      <p>
        À l’inverse, un seul vrai contre-indicateur : l’envie qui vient de toi et pas de lui. Un
        enfant inscrit pour faire plaisir tient deux mois. La bonne façon de vérifier est de venir
        essayer une séance, sans engagement, et de le regarder faire.
      </p>

      <CtaTunnel
        titre="Une séance d’essai vaut mieux qu’un article"
        texte="La semaine découverte des Pionniers de Touraine est offerte, pour les enfants comme pour les adultes : plusieurs séances d’essai au Stade de la Chambrerie, matériel fourni, aucun engagement et aucun euro à sortir."
        bouton="Je réserve ma séance d’essai"
      />

      <h2 id="adultes">Commencer à 20, 30, 40 ans : jamais trop tard</h2>
      <p>
        Passons à l’autre moitié de la question, celle que les adultes n’osent pas toujours poser.
        Peut-on commencer le football américain à trente ans sans jamais avoir pratiqué ? Oui, et
        ce n’est même pas une exception : c’est la norme.
      </p>

      <h3>La particularité française</h3>
      <p>
        Contrairement aux États-Unis, où les joueurs sont formés dès le lycée, le football
        américain français est un sport où <strong>presque tout le monde débute tard</strong>.
        Dans un vestiaire senior, tu croiseras des gens qui ont commencé à vingt ans, à
        vingt-cinq, à trente-cinq, souvent après avoir vu un Super Bowl ou suivi un ami à un
        entraînement. Personne ne te regardera de travers parce que tu ne sais pas attraper un
        ballon ovale : la moitié du groupe était dans ta situation deux saisons plus tôt.
      </p>
      <p>
        Cette particularité change tout dans l’accueil. Un club de foot US français sait accueillir
        un débutant complet, parce que c’est son quotidien. Les débutants sont regroupés avec un
        coach dédié, la technique précède le contact, et l’équipement est prêté. Nous avons
        consacré un article entier au sujet :{' '}
        <Link href="/blog/commencer-le-football-americain-adulte/">débuter le foot US adulte,
        est-ce trop tard ?</Link>
      </p>

      <h3>À trente ans et au delà</h3>
      <p>
        Trente ans n’est pas une frontière, c’est un âge où l’on s’organise différemment. Ce qui
        change n’est pas la capacité à jouer, c’est la façon de préparer son corps :
        l’échauffement devient non négociable, la récupération compte autant que l’effort, et il
        vaut mieux viser trois entraînements réguliers qu’une reprise héroïque suivie de trois
        semaines d’arrêt. Si tu n’as plus pratiqué depuis longtemps, notre guide{' '}
        <Link href="/blog/reprendre-le-sport-a-30-ans-tours/">reprendre le sport à 30 ans à
        Tours</Link> aborde précisément cette reprise.
      </p>
      <p>
        Il existe aussi une option souvent ignorée des adultes : le{' '}
        <Link href="/flag-football/">flag football</Link>. Sans contact, en 5 contre 5, il permet
        de retrouver l’intensité et le plaisir du jeu sans les chocs, avec deux formules chez nous,{' '}
        <strong>loisir à 100 €</strong> et <strong>compétition à 150 €</strong>, le lundi et le
        jeudi de 20 h 15 à 22 h 45. C’est la solution idéale si tu veux jouer sans t’exposer, si tu
        reprends après une longue pause, ou si ton corps a déjà donné dans un autre sport. Et
        c’est une discipline{' '}
        <Link href="/blog/flag-football-jo-2028/">olympique à partir des Jeux de Los Angeles
        2028</Link>.
      </p>

      <h3>Et les étudiants ?</h3>
      <p>
        Entre dix-huit et vingt-cinq ans, c’est le meilleur moment de tous pour commencer : le
        corps encaisse, le temps libre existe encore, et les entraînements en soirée s’accordent
        avec des emplois du temps universitaires. Nos créneaux seniors démarrent à 20 h ou 20 h 15
        selon les sections, ce qui laisse la journée entière libre. Le sujet est traité dans notre
        article <Link href="/blog/sport-etudiant-tours/">le sport étudiant à Tours</Link>.
      </p>

      <h2 id="gabarit">La question du gabarit</h2>
      <p>
        Derrière la question de l’âge se cache très souvent une autre inquiétude, rarement
        formulée : « est-ce que j’ai le physique ? ». Elle mérite une réponse claire :{' '}
        <strong>non, il n’existe pas de gabarit type au football américain</strong>, et c’est
        précisément ce qui en fait l’un des sports collectifs les plus inclusifs qui soient.
      </p>
      <p>
        Une équipe a besoin de tous les profils en même temps. Des joueurs rapides et légers pour
        courir des tracés et prendre la profondeur. Des grands aux longs bras pour attraper haut.
        Des costauds pour tenir la ligne et ouvrir les brèches. Des stratèges pour lire la défense
        et décider en deux secondes. Un même soir, une équipe alignera un ailier léger et un
        joueur de ligne massif, et les deux seront décisifs sur la même action. Notre article{' '}
        <Link href="/blog/postes-football-americain/">les postes au football américain</Link>{' '}
        détaille ce que chacun fait réellement sur le terrain.
      </p>
      <p>
        Le même raisonnement vaut au flag, avec un curseur déplacé vers la vitesse, l’agilité et la
        lecture du jeu plutôt que vers la puissance. Autrement dit, quel que soit ton âge et quel
        que soit ton physique, il existe une place où ton profil devient un avantage plutôt qu’un
        handicap. La seule vraie question est de savoir laquelle.
      </p>

      <CtaQuiz
        titre="Ton âge ne dit rien de ton poste, ton profil oui"
        texte="Huit questions sur ta taille, ton poids, tes qualités et ton rapport au contact, et notre algorithme de scouting, calibré sur les gabarits réels des joueurs NFL et NCAA, te propose le poste où tu as le plus de chances de t’éclater, en football américain comme en flag."
        bouton="Je fais le test"
      />

      <h2 id="trop-tard">Existe-t-il un âge où c’est vraiment trop tard ?</h2>
      <p>
        Posons la question franchement, parce qu’elle mérite mieux qu’un slogan. Il n’existe pas
        d’âge couperet, mais il existe des choix à faire en fonction de l’âge, et ils sont au
        nombre de trois.
      </p>
      <p>
        <strong>Le choix de la discipline.</strong> Plus le temps passe, plus le flag devient une
        option intelligente, non pas parce qu’il serait plus facile, mais parce qu’il retire du
        jeu la seule variable réellement contraignante pour un corps qui a vécu : l’impact. Le flag
        demande de courir, de feinter, de lire, et sur ce terrain l’expérience compense souvent la
        vitesse perdue.
      </p>
      <p>
        <strong>Le choix du rythme.</strong> Trois entraînements par semaine à quarante ans n’ont
        pas le même coût qu’à vingt. Rien n’oblige à tout faire : commencer par une séance
        hebdomadaire, s’installer, puis en ajouter une seconde reste la meilleure façon de tenir
        toute la saison.
      </p>
      <p>
        <strong>Le choix du rôle.</strong> Un club n’est pas uniquement composé de joueurs. Il vit
        de ses coachs, de ses arbitres, de ses bénévoles, de ceux qui filment, chronomètrent,
        organisent, tiennent la buvette et gèrent les licences. Et le ticket d’entrée y est
        dérisoire : la <strong>licence bénévole coûte 6,90 €</strong> et la{' '}
        <strong>licence coach 20,50 €</strong>. Si tu as passé l’âge de jouer, ou si tu ne l’as
        jamais eu, tu n’as pas passé celui d’en être. Notre article sur{' '}
        <Link href="/blog/arbitre-coach-benevole-club-football-americain/">devenir arbitre, coach
        ou bénévole</Link> détaille ces rôles, et les entreprises qui veulent soutenir le club
        trouveront leurs réponses sur la page <Link href="/partenaires/">partenaires</Link>.
      </p>
      <p>
        Le seul âge où il est vraiment trop tard, c’est celui où l’on décide de ne jamais essayer.
        Tout le reste s’aménage.
      </p>

      <Faq
        titre="Questions fréquentes sur l’âge"
        items={[
          {
            q: 'À quel âge commencer le flag football ?',
            r: (
              <p>
                Dès <strong>5 ou 6 ans</strong>.{' '}
                <Link href="/ecole-de-flag/">L’école de flag</Link> accueille les jeunes nés entre
                2009 et 2021 (catégories U7 à U18), le samedi de 10 h à 12 h. Avant cet âge, une
                activité d’éveil multisport apportera davantage à un enfant, et il n’aura aucun
                retard en arrivant un an plus tard : dans notre sport, personne n’a d’avance.
              </p>
            ),
          },
          {
            q: 'À quel âge le contact est-il autorisé ?',
            r: (
              <p>
                Chez les Pionniers de Touraine, le football américain avec contact commence avec
                l’équipe <strong>U18</strong>, qui accueille les jeunes{' '}
                <strong>nés entre 2009 et 2011</strong>, soit environ 15 à 17 ans. Avant, c’est le
                flag, sans aucun contact. Et le contact ne s’improvise pas : il s’apprend par
                étapes, en équipement complet, la technique et la protection de la tête d’abord, les
                situations réelles ensuite.
              </p>
            ),
          },
          {
            q: 'Est-ce trop tard pour commencer à 30 ans ?',
            r: (
              <p>
                Non, et c’est même l’âge de beaucoup de nos débutants. Le football américain
                français est un sport où l’immense majorité des licenciés a commencé adulte, ce qui
                veut dire que les clubs sont organisés pour t’accueillir sans aucune base. Ce qui
                change à trente ans, ce n’est pas la capacité à jouer, c’est la préparation :
                échauffement sérieux, récupération, régularité. Notre article{' '}
                <Link href="/blog/commencer-le-football-americain-adulte/">
                  commencer à 30 ans
                </Link>{' '}
                raconte ce qui se passe vraiment lors d’une première saison.
              </p>
            ),
          },
          {
            q: 'Et à 40 ans ou plus ?',
            r: (
              <p>
                Le flag est alors la porte la plus évidente : pas de choc, un jeu de course et de
                lecture, deux entraînements par semaine et une formule loisir à 100 € sans
                compétition si tu veux seulement jouer. Certains poursuivent au contact bien après
                quarante ans, d’autres préfèrent basculer vers le flag, d’autres encore prennent un
                sifflet. Le mieux est de venir voir une séance et d’en parler avec les coachs : ils
                te diront honnêtement ce qui te correspond.
              </p>
            ),
          },
          {
            q: 'Mon enfant est petit ou pas très sportif, est-ce un problème ?',
            r: (
              <p>
                Non. Le flag ne demande ni taille ni puissance : il demande de courir, de changer de
                direction et de comprendre un tracé. Un enfant petit et vif y est même souvent
                redoutable, parce qu’il est difficile à attraper. Quant au niveau sportif de départ,
                il n’a aucune importance : la quasi-totalité des enfants qui arrivent chez nous n’a
                jamais pratiqué ce sport, et personne n’a d’avance sur les autres. Pour choisir en
                partant de son tempérament, lisez{' '}
                <Link href="/blog/quel-sport-pour-mon-enfant-tours/">
                  quel sport pour mon enfant à Tours
                </Link>.
              </p>
            ),
          },
          {
            q: 'Peut-on commencer en cours de saison ?',
            r: (
              <p>
                Oui. La saison court de septembre à juin et la rentrée reste le moment le plus
                confortable pour débuter, avec le groupe des nouveaux. Mais un club accueille des
                débutants toute l’année : tu t’entraînes, tu progresses, et tu es prêt pour la
                suite. Écris-nous via la page <Link href="/contact/">contact</Link> pour savoir où
                en est le groupe qui t’intéresse.
              </p>
            ),
          },
          {
            q: 'Y a-t-il un âge maximum pour prendre une licence ?',
            r: (
              <p>
                Nos catégories seniors sont définies par une année de naissance plancher, pas par un
                plafond : le football américain seniors concerne les{' '}
                <strong>nés en 2007 et avant</strong> et le flag mixte seniors les{' '}
                <strong>nés en 2008 et avant</strong>. Autrement dit, il y a un âge minimum, pas un
                âge maximum. La vraie question n’est pas ton année de naissance, c’est la formule
                qui te convient, et le tarif correspondant est détaillé dans notre article{' '}
                <Link href="/blog/combien-coute-le-football-americain/">
                  combien coûte le football américain
                </Link>.
              </p>
            ),
          },
          {
            q: 'Faut-il connaître les règles pour venir essayer ?',
            r: (
              <p>
                Absolument pas, à aucun âge. Il suffit de savoir qu’une attaque dispose de plusieurs
                tentatives pour avancer, et tout le reste s’apprend en jouant. Si tu veux quand même
                arriver avec quelques repères, nos articles{' '}
                <Link href="/blog/regles-flag-football/">les règles du flag football</Link> et{' '}
                <Link href="/blog/regles-football-americain/">
                  les règles du football américain
                </Link>{' '}
                font le tour de la question en quelques minutes de lecture.
              </p>
            ),
          },
        ]}
      />

      <h2 id="conclusion">Le bon âge, c’est celui que tu as</h2>
      <p>
        Résumons. <strong>Dès 5 ou 6 ans</strong>, un enfant peut jouer au flag à l’école de flag
        du samedi matin, sans aucun contact et sans rien à acheter.{' '}
        <strong>Vers 15 à 17 ans</strong>, un adolescent peut découvrir le football américain avec
        contact au sein de l’équipe U18, en équipement complet et par étapes.{' '}
        <strong>À 20, 30 ou 40 ans</strong>, un adulte peut commencer de zéro, au contact ou au
        flag, comme le font la plupart des licenciés français. Et à tout âge, on peut rejoindre un
        club autrement qu’en jouant.
      </p>
      <p>
        La seule chose que l’âge détermine vraiment, c’est la porte par laquelle tu entres. Le
        panorama complet des groupes et des horaires est sur la page{' '}
        <Link href="/nos-sections/">nos sections</Link>, celui des créneaux réservés aux mineurs sur{' '}
        <Link href="/jeunes/">les sections jeunes des Pionniers</Link>, les deux disciplines sont présentées sur{' '}
        <Link href="/football-americain/">football américain</Link> et{' '}
        <Link href="/flag-football/">flag football</Link>, et si tu veux savoir à quoi ressemble
        notre terrain avant de venir, on en a fait une page :{' '}
        <Link href="/blog/stade-de-la-chambrerie-tours/">le Stade de la Chambrerie</Link>.
      </p>

      <CtaTunnel
        titre="Dis-nous ton âge, on te dit par où commencer"
        texte="Deux questions suffisent pour qu’on t’oriente vers la bonne section, de l’école de flag du samedi matin aux seniors du lundi soir, avec le créneau, le tarif et la date de ta première séance d’essai."
        bouton="Je trouve ma section"
      />
    </>
  );
}
