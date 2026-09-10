import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import YardLine from '@/components/YardLine';
import FaqSection from '@/components/FaqSection';
import TarifsBloc from '@/components/TarifsBloc';
import { asset } from '@/lib/asset';
import { STADE, HORAIRES, CONTACT, REJOINDRE_TUNNEL_URL } from '@/lib/infos';

/** FAQ de la page, affichée et exposée en données structurées FAQPage. */
const FAQ = [
  {
    q: 'À partir de quel âge ?',
    r: 'L’école de flag accueille les jeunes nés entre 2009 et 2021, ce qui correspond aux catégories U7 à U18. Les groupes sont constitués par âge, pour que chacun joue avec des enfants de son gabarit. Après l’école de flag, les plus grands rejoignent les juniors, qui pratiquent le football américain et le flag.',
  },
  {
    q: 'Y a-t-il du contact ?',
    r: 'Non, aucun. Le règlement du flag football interdit le contact : au lieu de plaquer, on arrache un ruban accroché à la ceinture du porteur de balle, et l’action s’arrête là. Il n’y a ni plaquage, ni blocage, ni choc entre joueurs, donc aucun casque et aucune protection à prévoir.',
  },
  {
    q: 'Que doit apporter mon enfant ?',
    r: 'Une tenue de sport confortable, des chaussures adaptées à un terrain extérieur, une gourde, et une veste ou un coupe-vent selon la météo du samedi matin. Les ceintures et les flags sont fournis par le club : il n’y a rien à acheter pour venir essayer.',
  },
  {
    q: 'Faut-il savoir jouer ?',
    r: 'Non. Les enfants arrivent sans rien connaître du flag football, et beaucoup de parents le découvrent en même temps qu’eux. Chaque samedi, les encadrants décomposent les gestes en petits groupes : courir, attraper, lancer, arracher le flag, puis on remet le geste dans le jeu. Aucun niveau n’est demandé à l’entrée.',
  },
  {
    q: 'Combien coûte l’école de flag ?',
    r: 'L’adhésion à l’école de flag est de 100 € par saison pour 2026/2027, licence FFFA incluse. Ce montant couvre l’encadrement diplômé, la découverte du flag, le championnat jeunes U13, U15 et U18 et le programme NFL Flag en U13 et U15. La semaine découverte, elle, est offerte : rien n’est demandé avant de se décider.',
  },
  {
    q: 'Comment essayer ?',
    r: `Écrivez au club à ${CONTACT.email}, appelez le ${CONTACT.telephone}, ou remplissez le parcours en ligne en deux minutes. Votre enfant vient ensuite un samedi de 10h00 à 12h00 au stade de la Chambrerie, en tenue de sport. La semaine découverte est offerte, sans engagement.`,
  },
];

export const metadata: Metadata = {
  title: 'École de flag football à Tours, U7 à U18',
  description:
    'L’école de flag accueille les jeunes nés entre 2009 et 2021 (catégories U7 à U18), le samedi de 10h00 à 12h00, au stade de la Chambrerie à Tours.',
  alternates: { canonical: '/ecole-de-flag/' },
  openGraph: {
    title: 'École de flag football à Tours, U7 à U18',
    description:
      'Le samedi de 10h00 à 12h00 au stade de la Chambrerie, pour les jeunes nés entre 2009 et 2021 : un sport collectif olympique et sans aucun contact.',
    url: '/ecole-de-flag/',
    type: 'article',
  },
};

/** Les quatre axes travaillés chaque samedi, en cartes de verre. */
const AXES = [
  {
    titre: 'Motricité et coordination',
    chips: ['Courir', 'Changer d’appui'],
    texte:
      'Courir, s’arrêter, repartir, changer de direction, gérer sa vitesse et s’orienter dans l’espace : les bases de tous les sports collectifs, travaillées sans que les enfants s’en aperçoivent.',
  },
  {
    titre: 'Le geste technique',
    chips: ['Attraper', 'Lancer'],
    texte:
      'Attraper et lancer un ballon ovale, sécuriser sa réception avec les mains, arracher proprement le flag. Chaque geste se décompose et se répète en petits groupes.',
  },
  {
    titre: 'La lecture du jeu',
    chips: ['Tracés', 'Anticipation'],
    texte:
      'Suivre son tracé, occuper l’espace libre, comprendre son rôle sur une action, anticiper. Le flag est un sport où l’on réfléchit autant qu’on court.',
  },
  {
    titre: 'L’esprit d’équipe',
    chips: ['Respect', 'Collectif'],
    texte:
      'Sur chaque action, chacun a un rôle : personne ne reste spectateur. On gagne et on perd ensemble, et on respecte l’adversaire comme l’arbitre.',
  },
];

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          fil="École de flag"
          chemin="/ecole-de-flag/"
          eyebrow="Nos sections"
          titre="École de flag football pour enfants à Tours"
          sousTitre="Le samedi matin au stade de la Chambrerie, l’école de flag accueille les jeunes nés entre 2009 et 2021 (catégories U7 à U18) : un sport collectif olympique, sans aucun contact, où l’on court, on attrape et on joue ensemble."
        >
          <div className="sc-chips" style={{ marginTop: 24 }}>
            <span className="sc-chip">Samedi 10h-12h</span>
            <span className="sc-chip">U7 à U18</span>
            <span className="sc-chip">Nés de 2009 à 2021</span>
            <span className="sc-chip">Zéro contact</span>
            <span className="sc-chip">Matériel fourni</span>
          </div>
          <div className="sc-ctas">
            <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>
              Inscrire mon enfant
            </a>
            <a className="sc-btn-ghost" href="#horaires">
              Voir les horaires
            </a>
          </div>
        </PageHero>

        {/* ── Réponse directe : qui, quoi, quand, où, comment essayer ── */}
        <section className="sc-sec" id="en-resume">
          <div className="sc-wrap" data-reveal>
            <p className="sc-lead">
              L’école de flag des Pionniers de Touraine est la section jeunes du club de football
              américain et de flag football de Tours. Elle accueille les jeunes nés entre 2009 et
              2021 (catégories U7 à U18), chaque samedi de 10h00 à 12h00, au {STADE.nom},{' '}
              {STADE.rue}, {STADE.codePostal} {STADE.ville}. On y pratique le flag football, la
              version sans aucun contact du football américain : pas de plaquage, pas de casque, pas
              de protection à acheter. Le club fournit les ceintures et les flags ; une tenue de
              sport, des chaussures de terrain et une gourde suffisent. La licence FFFA est incluse
              dans les formules d’adhésion, et une semaine découverte offerte permet de tester avant
              de s’engager : cette séance d’essai gratuite se prépare en écrivant au club ou en
              remplissant le parcours en ligne. Au fil de la saison, les équipes jouent des
              championnats régionaux, des championnats nationaux et des rencontres au format NFL
              FLAG.
            </p>
          </div>
        </section>

        {/* ── Découvrir la discipline ── */}
        <section className="sc-sec" id="decouvrir">
          <YardLine n="10" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Découvrir la discipline</p>
              <h2 className="sc-title">Le flag football pour les enfants, c’est quoi ?</h2>
            </div>
            <div className="sc-two" data-reveal>
              <div className="sc-body">
                <p className="sc-legal-text">
                  L’école de flag football pour enfants à Tours est la porte d’entrée des Pionniers
                  de Touraine pour les plus jeunes. Le flag, c’est la version{' '}
                  <strong>sans contact du football américain</strong> : au lieu de plaquer, on
                  arrache un ruban (le flag) accroché à la ceinture du porteur de balle. L’action
                  s’arrête là, et le jeu repart.
                </p>
                <p className="sc-legal-text">
                  On joue à <strong>5 contre 5</strong>, en équipes mixtes, filles et garçons
                  ensemble. Chaque action est une petite histoire : un enfant lance, un autre court,
                  un troisième attrape. C’est un sport rapide, très ludique, et c’est aussi un{' '}
                  <strong>sport olympique</strong>, au programme des Jeux de Los Angeles 2028.
                </p>
                <h3 className="sc-h3">Pour quels âges ?</h3>
                <p className="sc-legal-text">
                  L’école de flag accueille les{' '}
                  <strong>jeunes nés entre 2009 et 2021 (catégories U7 à U18)</strong>. Les groupes
                  sont constitués par âge, pour que chacun joue avec des enfants de son gabarit et
                  de son niveau. Si vous vous demandez{' '}
                  <Link href="/blog/a-quel-age-commencer-le-football-americain/">
                    à quel âge commencer le flag football
                  </Link>
                  , les catégories U7 à U18 couvrent toute la scolarité, de l’école primaire au
                  lycée. Le détail du jeu est expliqué dans{' '}
                  <Link href="/blog/regles-flag-football/">les règles du flag football</Link>.
                </p>
                <h3 className="sc-h3">Zéro contact, vraiment</h3>
                <p className="sc-legal-text">
                  C’est la question que posent tous les parents, et la réponse est simple : le
                  règlement lui-même interdit le contact. Pas de plaquage, pas de blocage, pas de
                  choc entre joueurs. Aucun casque ni aucune protection ne sont nécessaires, parce
                  qu’il n’y a rien contre quoi se protéger.
                </p>
                <p className="sc-legal-text">
                  Les enfants arrivent en tenue de sport, comme pour n’importe quelle activité du
                  samedi matin. Le club fournit les ceintures et les flags.
                </p>
              </div>
              <aside className="sc-aside">
                <div className="sc-panel">
                  <div className="sc-card-badges">
                    <img
                      className="sc-card-badge"
                      src={asset('/assets/refonte/badge-5-ecole.webp')}
                      alt="Écusson de l’école de flag des Pionniers de Touraine"
                      width={462}
                    height={400}
                    loading="lazy"
                    />
                  </div>
                  <h3 className="sc-panel-title">En bref</h3>
                  <ul className="sc-liste">
                    <li>
                      <strong>Samedi de 10h00 à 12h00</strong>, toute la saison
                    </li>
                    <li>
                      Jeunes <strong>nés entre 2009 et 2021</strong> (catégories U7 à U18)
                    </li>
                    <li>
                      <strong>Zéro contact</strong> : ni plaquage, ni casque
                    </li>
                    <li>
                      Ceintures et flags <strong>fournis par le club</strong>
                    </li>
                    <li>
                      <strong>Semaine découverte offerte</strong>, sans engagement
                    </li>
                    <li>
                      <strong>Licence FFFA incluse</strong> dans les formules d’adhésion
                    </li>
                  </ul>
                </div>
                <div className="sc-panel">
                  <h3 className="sc-panel-title">Le stade</h3>
                  <ul className="sc-liste">
                    <li>
                      <strong>{STADE.nom}</strong>, {STADE.rue}, {STADE.codePostal} {STADE.ville}
                    </li>
                    <li>Bus ligne 2, arrêt Maréchal Juin, à 5 minutes à pied</li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── La pédagogie ── */}
        <section className="sc-sec" id="apprendre">
          <YardLine n="20" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">La pédagogie</p>
              <h2 className="sc-title">Ce que les enfants apprennent.</h2>
              <p className="sc-lead">
                Une séance d’école de flag à Tours n’est pas une simple récréation. Quatre axes
                reviennent chaque samedi, adaptés à l’âge de chacun.
              </p>
            </div>
            <div className="sc-cards sc-cards--deux" data-reveal>
              {AXES.map((a) => (
                <article key={a.titre} className="sc-card sc-card--statique">
                  <h3 className="sc-card-title">{a.titre}</h3>
                  <div className="sc-chips">
                    {a.chips.map((c) => (
                      <span key={c} className="sc-chip">
                        {c}
                      </span>
                    ))}
                  </div>
                  <p className="sc-card-desc" style={{ marginBottom: 0 }}>
                    {a.texte}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Une séance type ── */}
        <section className="sc-sec" id="seance">
          <YardLine n="30" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Le déroulé</p>
              <h2 className="sc-title">Une séance type, le samedi matin.</h2>
            </div>
            <div className="sc-body" data-reveal style={{ marginTop: 30 }}>
              <p className="sc-legal-text">
                Deux heures passent vite. Les encadrants gardent un fil conducteur simple, pour que
                les enfants sachent toujours où ils en sont et qu’ils jouent le plus possible.
              </p>
              <ul className="sc-liste">
                <li>
                  <strong>L’accueil</strong> : on se retrouve, on pose les sacs, on rappelle le
                  thème du jour.
                </li>
                <li>
                  <strong>L’échauffement</strong> : sous forme de jeu, jamais de tours de terrain
                  interminables.
                </li>
                <li>
                  <strong>Les ateliers</strong> : par petits groupes, pour répéter un geste avec un
                  adulte tout près.
                </li>
                <li>
                  <strong>La mise en situation</strong> : on remet le geste dans le jeu, puis on
                  enchaîne des matchs.
                </li>
                <li>
                  <strong>Le retour au calme</strong> : on récupère, on débriefe en deux mots, on
                  range le matériel.
                </li>
              </ul>
              <p className="sc-legal-text" style={{ marginTop: 18 }}>
                Ce déroulé s’adapte au nombre d’enfants présents, à leur âge et à la météo : les
                plus jeunes jouent davantage, les plus grands entrent dans les détails.
              </p>
            </div>
          </div>
        </section>

        {/* ── Côté familles ── */}
        <section className="sc-sec" id="parents">
          <YardLine n="40" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Côté familles</p>
              <h2 className="sc-title">Les parents sont les bienvenus.</h2>
            </div>
            <div className="sc-panel" data-reveal style={{ marginTop: 30, maxWidth: 860 }}>
              <p className="sc-legal-text">
                Le bord de terrain est ouvert. Vous pouvez rester regarder toute la séance et poser
                vos questions aux encadrants. Beaucoup de parents découvrent le flag en même temps
                que leur enfant.
              </p>
              <p className="sc-legal-text">
                Le club vit aussi grâce aux familles : accompagner un déplacement, tenir un poste
                sur un tournoi, donner un coup de main sur la logistique. Rien n’est obligatoire,
                mais tout est utile.
              </p>
              <p className="sc-legal-text">
                Vous hésitez encore entre plusieurs activités ? Nous avons écrit un repère pour les
                familles :{' '}
                <Link href="/blog/quel-sport-pour-mon-enfant-tours/">
                  quel sport pour mon enfant à Tours
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ── Infos pratiques ── */}
        <section className="sc-sec" id="horaires">
          <YardLine n="50" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Infos pratiques</p>
              <h2 className="sc-title">Horaires, stade et accès.</h2>
            </div>
            <div className="sc-two" data-reveal>
              <div className="sc-body">
                <h3 className="sc-h3">Un créneau dédié aux plus jeunes</h3>
                <p className="sc-legal-text">
                  L’école de flag a son propre créneau, le samedi matin, pour que les enfants
                  restent entre eux avec des encadrants disponibles. Les juniors s’entraînent en
                  semaine, en soirée.
                </p>
                <h3 className="sc-h3">La suite du parcours</h3>
                <p className="sc-legal-text">
                  Après l’école de flag, les enfants rejoignent les <strong>juniors</strong>, qui
                  pratiquent le football américain et le flag, puis les équipes{' '}
                  <strong>seniors</strong>. Tout se passe sur le même terrain, au {STADE.nom}. Pour
                  savoir ce qui attend les plus grands, voyez{' '}
                  <Link href="/jeunes/">la suite du parcours jeunes</Link> et, plus en détail,{' '}
                  <Link href="/blog/football-americain-jeunes-u13-u16-u18/">
                    le parcours jeunes U13, U16, U18
                  </Link>{' '}
                  ; côté adultes, c’est <Link href="/flag-football/">le flag football des adultes</Link>{' '}
                  qui prend le relais, en équipe mixte.
                </p>
              </div>
              <aside className="sc-aside">
                <div className="sc-panel">
                  <h3 className="sc-panel-title">Entraînements</h3>
                  <div className="sc-horaires">
                    {HORAIRES.filter(
                      (h) => h.cat === 'École de flag' || h.cat === 'Flag mixte juniors',
                    ).map((h) => (
                      <div key={h.cat} className="sc-horaire">
                        <span className="sc-horaire-cat">{h.cat}</span>
                        <span className="sc-horaire-time">{h.creneaux.join(' / ')}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="sc-panel">
                  <h3 className="sc-panel-title">Venir au stade</h3>
                  <ul className="sc-liste">
                    <li>
                      <strong>{STADE.nom}</strong>, {STADE.rue}, {STADE.codePostal} {STADE.ville}{' '}
                      (Tours Nord)
                    </li>
                    <li>
                      En bus : ligne 2, arrêt Maréchal Juin, ou ligne 12, arrêt Chambrerie /
                      Giraudoux, à 5 minutes à pied
                    </li>
                    <li>
                      En voiture : A10 sortie n°19 (Tours Nord) à 5 minutes, périphérique de Tours
                      Nord à 3 minutes
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── Ce qu'il faut prévoir, puis les autres sections ── */}
        <section className="sc-sec" id="prevoir">
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Avant le premier samedi</p>
              <h2 className="sc-title">Ce qu’il faut prévoir.</h2>
            </div>
            <div className="sc-body" data-reveal style={{ marginTop: 30 }}>
              <p className="sc-legal-text">Rien de compliqué, et surtout rien à acheter pour venir essayer.</p>
              <ul className="sc-liste">
                <li>
                  Une <strong>tenue de sport</strong> confortable, dans laquelle l’enfant peut
                  courir
                </li>
                <li>
                  Des <strong>chaussures adaptées au terrain</strong>, en extérieur
                </li>
                <li>
                  Une <strong>gourde</strong> : on boit souvent, même quand il ne fait pas chaud
                </li>
                <li>
                  Une <strong>veste ou un coupe-vent</strong> selon la météo du matin
                </li>
                <li>
                  Les <strong>ceintures et les flags sont fournis</strong> par le club
                </li>
              </ul>
              <p className="sc-legal-text" style={{ marginTop: 18 }}>
                Côté budget, l’adhésion à l’école de flag est de{' '}
                <strong>100 € par saison, licence FFFA incluse</strong>. Le détail des formules est
                plus bas sur cette page, dans les <a href="#tarifs">tarifs de la saison</a>.
              </p>
              {/* À COMPLÉTER : le club doit préciser les pièces d’inscription (certificat médical ou questionnaire de santé, documents à fournir). */}
              <p className="sc-legal-text" style={{ marginTop: 18 }}>
                Pour l’inscription définitive, quelques éléments administratifs sont demandés :
                pièces à fournir et questions de santé.{' '}
                <span className="sc-todo">À compléter</span>
              </p>
            </div>

            <div className="sc-contacts" data-reveal>
              <div className="sc-contact-item">
                <span>Email</span>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
              <div className="sc-contact-item">
                <span>Téléphone</span>
                <a href={CONTACT.telHref}>{CONTACT.telephone}</a>
              </div>
              <div className="sc-contact-item">
                <span>Le stade</span>
                <p>
                  {STADE.nom}
                  <br />
                  {STADE.rue}, {STADE.codePostal} {STADE.ville}
                </p>
              </div>
            </div>

            <div data-reveal style={{ marginTop: 'clamp(48px, 5vw, 70px)' }}>
              <p className="sc-eyebrow">Aller plus loin</p>
              <h2 className="sc-title" style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}>
                Le club, ses sections.
              </h2>
            </div>
            <div className="sc-cards" data-reveal>
              <Link className="sc-card" href="/flag-football/">
                <div className="sc-card-badges">
                  <img
                    className="sc-card-badge"
                    src={asset('/assets/refonte/badge-2-olympique.webp')}
                    alt="Écusson flag football, sport olympique"
                    width={400}
                    height={400}
                    loading="lazy"
                  />
                </div>
                <h3 className="sc-card-title">Flag football</h3>
                <div className="sc-chips">
                  <span className="sc-chip">Mixte</span>
                  <span className="sc-chip">Sans contact</span>
                </div>
                <p className="sc-card-desc">
                  Le 5 contre 5 sans contact, des plus jeunes aux adultes, et la discipline des Jeux
                  de Los Angeles 2028.
                </p>
                <span className="sc-card-cta">
                  Voir la section <ArrowRight size={15} strokeWidth={2.6} />
                </span>
              </Link>
              <Link className="sc-card" href="/football-americain/">
                <h3 className="sc-card-title">Football américain</h3>
                <div className="sc-chips">
                  <span className="sc-chip">Juniors</span>
                  <span className="sc-chip">Seniors</span>
                </div>
                <p className="sc-card-desc">
                  La discipline historique des Pionniers, des juniors jusqu’à l’équipe senior.
                </p>
                <span className="sc-card-cta">
                  Voir la section <ArrowRight size={15} strokeWidth={2.6} />
                </span>
              </Link>
              <Link className="sc-card" href="/le-club/">
                <h3 className="sc-card-title">Le club</h3>
                <div className="sc-chips">
                  <span className="sc-chip">Depuis 1987</span>
                  <span className="sc-chip">Tours</span>
                </div>
                <p className="sc-card-desc">
                  Fondés en 1987, l’un des plus anciens clubs de football américain de France, ancré
                  en Indre-et-Loire.
                </p>
                <span className="sc-card-cta">
                  Découvrir le club <ArrowRight size={15} strokeWidth={2.6} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Tarifs ── */}
        <TarifsBloc sections={['ecole']} />

        {/* ── FAQ ── */}
        <FaqSection titre="Les questions des parents." items={FAQ} />

        {/* ── CTA final ── */}
        <section className="sc-sec sc-endzone" id="inscription">
          <YardLine n="endzone" />
          <div className="sc-wrap" data-reveal>
            <p className="sc-eyebrow">Première séance</p>
            <h2 className="sc-title">Comment nous rejoindre</h2>
            <p className="sc-lead" style={{ maxWidth: 620 }}>
              Une séance d’essai gratuite, puis une{' '}
              <strong>semaine découverte offerte</strong> aux enfants : venez tester avant de vous
              licencier. On essaie d’abord, on décide ensuite.
            </p>
            <ul
              className="sc-liste"
              style={{ display: 'inline-grid', textAlign: 'left', margin: '20px auto 0' }}
            >
              <li>
                <strong>1.</strong> Vous nous écrivez ou vous remplissez le parcours en ligne, en
                deux minutes.
              </li>
              <li>
                <strong>2.</strong> Votre enfant vient essayer un samedi, en tenue de sport : nous
                fournissons le reste.
              </li>
              <li>
                <strong>3.</strong> Si le courant passe, on finalise l’adhésion, licence FFFA
                incluse.
              </li>
            </ul>
            <div className="sc-ctas" style={{ justifyContent: 'center' }}>
              <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>
                Inscrire mon enfant
              </a>
              <Link className="sc-btn-ghost" href="/contact/">
                Nous écrire
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
