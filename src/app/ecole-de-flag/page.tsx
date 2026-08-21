import type { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import { asset } from '@/lib/asset';
import { STADE, HORAIRES, CONTACT, REJOINDRE_TUNNEL_URL } from '@/lib/infos';

export const metadata: Metadata = {
  title: 'École de flag pour enfants à Tours',
  description:
    'École de flag football pour enfants à Tours : le samedi de 10h00 à 12h00 au stade de la Chambrerie, dès 6 à 8 ans, zéro contact, matériel fourni par le club.',
  alternates: { canonical: '/ecole-de-flag/' },
  openGraph: {
    title: 'École de flag pour enfants à Tours',
    description:
      'Le samedi matin au stade de la Chambrerie, dès 6 à 8 ans : un sport collectif olympique et sans contact, encadré par les Pionniers de Touraine.',
    url: '/ecole-de-flag/',
    type: 'article',
  },
};

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
          sousTitre="Le samedi matin, dès 6 à 8 ans, au stade de la Chambrerie : un sport collectif olympique, sans aucun contact, où l’on court, on attrape et on joue ensemble."
        >
          <div className="hp-chips">
            <span className="hp-chip">Samedi 10h-12h</span>
            <span className="hp-chip">Dès 6 à 8 ans</span>
            <span className="hp-chip">Zéro contact</span>
            <span className="hp-chip">Matériel fourni</span>
          </div>
          <div className="ph-ctas">
            <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>Inscrire mon enfant</a>
            <a className="sc-btn-ghost" href="#horaires">Voir les horaires</a>
          </div>
        </PageHero>

        <section className="hp-sec" id="decouvrir">
          <div className="hp-wrap">
            <div className="hp-two" data-reveal>
              <div className="hp-prose">
                <p className="hp-eyebrow">Découvrir la discipline</p>
                <h2 className="hp-h2">Le flag football pour les enfants, c’est quoi ?</h2>
                <p>
                  L’école de flag football pour enfants à Tours est la porte d’entrée des Pionniers
                  de Touraine pour les plus jeunes. Le flag, c’est la version <strong>sans contact
                  du football américain</strong> : au lieu de plaquer, on arrache un ruban (le
                  flag) accroché à la ceinture du porteur de balle. L’action s’arrête là, et le jeu
                  repart.
                </p>
                <p>
                  On joue à <strong>5 contre 5</strong>, en équipes mixtes, filles et garçons
                  ensemble. Chaque action est une petite histoire : un enfant lance, un autre
                  court, un troisième attrape. C’est un sport rapide, très ludique, et c’est aussi
                  un <strong>sport olympique</strong>, au programme des Jeux de Los Angeles 2028.
                </p>
                <h3>Zéro contact, vraiment</h3>
                <p>
                  C’est la question que posent tous les parents, et la réponse est simple : le
                  règlement lui-même interdit le contact. Pas de plaquage, pas de blocage, pas de
                  choc entre joueurs. Aucun casque ni aucune protection ne sont nécessaires, parce
                  qu’il n’y a rien contre quoi se protéger.
                </p>
                <p>
                  Les enfants arrivent en tenue de sport, comme pour n’importe quelle activité du
                  samedi matin. Le club fournit les ceintures et les flags.
                </p>
              </div>
              <aside className="hp-aside">
                <div className="hp-panel">
                  <img
                    className="hp-card-badge"
                    src={asset('/assets/refonte/badge-5-ecole.svg')}
                    alt="Écusson de l’école de flag des Pionniers de Touraine"
                    loading="lazy"
                  />
                  <h3>En bref</h3>
                  <ul className="hp-list">
                    <li><strong>Samedi de 10h00 à 12h00</strong>, toute la saison</li>
                    <li>Dès <strong>6 à 8 ans</strong></li>
                    <li><strong>Zéro contact</strong> : ni plaquage, ni casque</li>
                    <li>Ceintures et flags <strong>fournis par le club</strong></li>
                    <li><strong>Semaine découverte offerte</strong>, sans engagement</li>
                    <li><strong>Licence FFFA incluse</strong> dans les formules d’adhésion</li>
                  </ul>
                </div>
                <div className="hp-panel">
                  <h3>Le stade</h3>
                  <ul className="hp-list">
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

        <section className="hp-sec" id="apprendre">
          <div className="hp-wrap">
            <div data-reveal>
              <p className="hp-eyebrow">La pédagogie</p>
              <h2 className="hp-h2">Ce que les enfants apprennent.</h2>
              <p className="hp-p">
                Une séance d’école de flag à Tours n’est pas une simple récréation. Quatre axes
                reviennent chaque samedi, adaptés à l’âge de chacun.
              </p>
            </div>
            <div className="hp-cards" data-reveal>
              <article className="hp-card">
                <h3>Motricité et coordination</h3>
                <div className="hp-chips">
                  <span className="hp-chip">Courir</span>
                  <span className="hp-chip">Changer d’appui</span>
                </div>
                <p>
                  Courir, s’arrêter, repartir, changer de direction, gérer sa vitesse et
                  s’orienter dans l’espace : les bases de tous les sports collectifs, travaillées
                  sans que les enfants s’en aperçoivent.
                </p>
              </article>
              <article className="hp-card">
                <h3>Le geste technique</h3>
                <div className="hp-chips">
                  <span className="hp-chip">Attraper</span>
                  <span className="hp-chip">Lancer</span>
                </div>
                <p>
                  Attraper et lancer un ballon ovale, sécuriser sa réception avec les mains,
                  arracher proprement le flag. Chaque geste se décompose et se répète en petits
                  groupes.
                </p>
              </article>
              <article className="hp-card">
                <h3>La lecture du jeu</h3>
                <div className="hp-chips">
                  <span className="hp-chip">Tracés</span>
                  <span className="hp-chip">Anticipation</span>
                </div>
                <p>
                  Suivre son tracé, occuper l’espace libre, comprendre son rôle sur une action,
                  anticiper. Le flag est un sport où l’on réfléchit autant qu’on court.
                </p>
              </article>
              <article className="hp-card">
                <h3>L’esprit d’équipe</h3>
                <div className="hp-chips">
                  <span className="hp-chip">Respect</span>
                  <span className="hp-chip">Collectif</span>
                </div>
                <p>
                  Sur chaque action, chacun a un rôle : personne ne reste spectateur. On gagne et
                  on perd ensemble, et on respecte l’adversaire comme l’arbitre.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="hp-sec" id="seance">
          <div className="hp-wrap">
            <div className="hp-prose" data-reveal>
              <p className="hp-eyebrow">Le déroulé</p>
              <h2 className="hp-h2">Une séance type, le samedi matin.</h2>
              <p>
                Deux heures passent vite. Les encadrants gardent un fil conducteur simple, pour que
                les enfants sachent toujours où ils en sont et qu’ils jouent le plus possible.
              </p>
              <ul className="hp-list">
                <li><strong>L’accueil</strong> : on se retrouve, on pose les sacs, on rappelle le thème du jour.</li>
                <li><strong>L’échauffement</strong> : sous forme de jeu, jamais de tours de terrain interminables.</li>
                <li><strong>Les ateliers</strong> : par petits groupes, pour répéter un geste avec un adulte tout près.</li>
                <li><strong>La mise en situation</strong> : on remet le geste dans le jeu, puis on enchaîne des matchs.</li>
                <li><strong>Le retour au calme</strong> : on récupère, on débriefe en deux mots, on range le matériel.</li>
              </ul>
              <p>
                Ce déroulé s’adapte au nombre d’enfants présents, à leur âge et à la météo : les
                plus jeunes jouent davantage, les plus grands entrent dans les détails.
              </p>
            </div>
          </div>
        </section>

        <section className="hp-dark" id="parents">
          <div className="hp-wrap">
            <div className="hp-prose" data-reveal>
              <p className="hp-eyebrow">Côté familles</p>
              <h2 className="hp-h2">Les parents sont les bienvenus.</h2>
              <p>
                Le bord de terrain est ouvert. Vous pouvez rester regarder toute la séance et poser
                vos questions aux encadrants. Beaucoup de parents découvrent le flag en même temps
                que leur enfant.
              </p>
              <p>
                Le club vit aussi grâce aux familles : accompagner un déplacement, tenir un poste
                sur un tournoi, donner un coup de main sur la logistique. Rien n’est obligatoire,
                mais tout est utile.
              </p>
            </div>
          </div>
        </section>

        <section className="hp-sec" id="horaires">
          <div className="hp-wrap">
            <div data-reveal>
              <p className="hp-eyebrow">Infos pratiques</p>
              <h2 className="hp-h2">Horaires, stade et accès.</h2>
            </div>
            <div className="hp-two" data-reveal>
              <div className="hp-prose">
                <h3>Un créneau dédié aux plus jeunes</h3>
                <p>
                  L’école de flag a son propre créneau, le samedi matin, pour que les enfants
                  restent entre eux avec des encadrants disponibles. Les juniors s’entraînent en
                  semaine, en soirée.
                </p>
                <h3>La suite du parcours</h3>
                <p>
                  Après l’école de flag, les enfants rejoignent les <strong>juniors</strong>, qui
                  pratiquent le football américain et le flag, puis les équipes{' '}
                  <strong>seniors</strong>. Tout se passe sur le même terrain, au {STADE.nom}.
                </p>
              </div>
              <aside className="hp-aside">
                <div className="hp-panel">
                  <h3>Entraînements</h3>
                  <div>
                    {HORAIRES.filter((h) => h.cat === 'École de flag' || h.cat === 'Juniors · Foot US & flag').map((h) => (
                      <div key={h.cat} className="hp-horaire">
                        <span className="hp-horaire-cat">{h.cat}</span>
                        <span className="hp-horaire-times">
                          {h.creneaux.map((c) => (
                            <span key={c}>{c}</span>
                          ))}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hp-panel">
                  <h3>Venir au stade</h3>
                  <ul className="hp-list">
                    <li>
                      <strong>{STADE.nom}</strong>, {STADE.rue}, {STADE.codePostal} {STADE.ville}{' '}
                      (Tours Nord)
                    </li>
                    <li>En bus : ligne 2, arrêt Maréchal Juin, ou ligne 12, arrêt Chambrerie / Giraudoux, à 5 minutes à pied</li>
                    <li>En voiture : A10 sortie n°19 (Tours Nord) à 5 minutes, périphérique de Tours Nord à 3 minutes</li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="hp-sec" id="prevoir">
          <div className="hp-wrap">
            <div className="hp-prose" data-reveal>
              <p className="hp-eyebrow">Avant le premier samedi</p>
              <h2 className="hp-h2">Ce qu’il faut prévoir.</h2>
              <p>
                Rien de compliqué, et surtout rien à acheter pour venir essayer.
              </p>
              <ul className="hp-list">
                <li>Une <strong>tenue de sport</strong> confortable, dans laquelle l’enfant peut courir</li>
                <li>Des <strong>chaussures adaptées au terrain</strong>, en extérieur</li>
                <li>Une <strong>gourde</strong> : on boit souvent, même quand il ne fait pas chaud</li>
                <li>Une <strong>veste ou un coupe-vent</strong> selon la météo du matin</li>
                <li>Les <strong>ceintures et les flags sont fournis</strong> par le club</li>
              </ul>
              {/* À COMPLÉTER : le club doit préciser les pièces d’inscription (certificat médical ou questionnaire de santé, documents à fournir, montant de la cotisation et modes de paiement). */}
              <p>
                Pour l’inscription définitive, quelques éléments administratifs sont demandés :
                pièces à fournir, questions de santé et montant de l’adhésion.{' '}
                <span className="hp-todo">À compléter</span>
              </p>
            </div>
          </div>
        </section>

        <section className="hp-sec" id="inscription">
          <div className="hp-wrap">
            <div className="hp-inset" data-reveal>
              <p className="hp-eyebrow">Première séance</p>
              <h2>Comment nous rejoindre</h2>
              <p>
                La <strong>semaine découverte est offerte</strong> aux enfants, sans engagement :
                on essaie d’abord, on décide ensuite.
              </p>
              <ul className="hp-list">
                <li><strong>1.</strong> Vous nous écrivez ou vous remplissez le parcours en ligne, en deux minutes.</li>
                <li><strong>2.</strong> Votre enfant vient essayer un samedi, en tenue de sport : nous fournissons le reste.</li>
                <li><strong>3.</strong> Si le courant passe, on finalise l’adhésion, licence FFFA incluse.</li>
              </ul>
              <div className="hp-section-cta">
                <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>Inscrire mon enfant</a>
                <Link className="hp-ghost" href="/contact/">Nous écrire</Link>
              </div>
            </div>
            <div className="hp-contact-box" data-reveal>
              <div className="hp-contact-item">
                <span>Email</span>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
              <div className="hp-contact-item">
                <span>Téléphone</span>
                <a href={CONTACT.telHref}>{CONTACT.telephone}</a>
              </div>
              <div className="hp-contact-item">
                <span>Le stade</span>
                <p>
                  {STADE.nom}
                  <br />
                  {STADE.rue}, {STADE.codePostal} {STADE.ville}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="hp-sec" id="aller-plus-loin">
          <div className="hp-wrap">
            <div data-reveal>
              <p className="hp-eyebrow">Aller plus loin</p>
              <h2 className="hp-h2">Le club, ses sections.</h2>
            </div>
            <div className="hp-cards hp-cards-3" data-reveal>
              <article className="hp-card">
                <img
                  className="hp-card-badge"
                  src={asset('/assets/refonte/badge-2-olympique.svg')}
                  alt="Écusson flag football, sport olympique"
                  loading="lazy"
                />
                <h3>Flag football</h3>
                <div className="hp-chips">
                  <span className="hp-chip">Mixte</span>
                  <span className="hp-chip">Sans contact</span>
                </div>
                <p>
                  Le 5 contre 5 sans contact, des plus jeunes aux adultes, et la discipline des
                  Jeux de Los Angeles 2028.
                </p>
                <Link className="hp-card-link" href="/flag-football/">
                  Voir la section <FaArrowRight size={12} />
                </Link>
              </article>
              <article className="hp-card">
                <h3>Football américain</h3>
                <div className="hp-chips">
                  <span className="hp-chip">Juniors</span>
                  <span className="hp-chip">Seniors</span>
                </div>
                <p>
                  La discipline historique des Pionniers, des juniors jusqu’à l’équipe senior.
                </p>
                <Link className="hp-card-link" href="/football-americain/">
                  Voir la section <FaArrowRight size={12} />
                </Link>
              </article>
              <article className="hp-card">
                <h3>Le club</h3>
                <div className="hp-chips">
                  <span className="hp-chip">Depuis 1987</span>
                  <span className="hp-chip">Tours</span>
                </div>
                <p>
                  Fondés en 1987, l’un des plus anciens clubs de football américain de France,
                  ancré en Indre-et-Loire.
                </p>
                <Link className="hp-card-link" href="/le-club/">
                  Découvrir le club <FaArrowRight size={12} />
                </Link>
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
