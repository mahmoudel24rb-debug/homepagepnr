import type { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import { asset } from '@/lib/asset';
import { STADE, HORAIRES, CONTACT, REJOINDRE_TUNNEL_URL } from '@/lib/infos';

/** Créneaux affichés sur cette page : les trois pratiques de flag du club. */
const CATS_FLAG = ['Flag mixte seniors', 'Juniors · Foot US & flag', 'École de flag'];

export const metadata: Metadata = {
  title: 'Flag football à Tours, mixte et sans contact',
  description:
    'Jouer au flag football à Tours : 5 contre 5, sans contact, mixte, olympique en 2028. Horaires des entraînements et semaine découverte offerte au club.',
  alternates: { canonical: '/flag-football/' },
  openGraph: {
    title: 'Flag football à Tours, mixte et sans contact',
    description:
      'Le flag football à Tours avec les Pionniers de Touraine : 5 contre 5, sans contact, mixte et olympique en 2028. Horaires, équipes et semaine découverte.',
    url: '/flag-football/',
    type: 'article',
  },
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          fil="Flag football"
          chemin="/flag-football/"
          eyebrow="Nos sections"
          titre="Flag football à Tours"
          sousTitre="La version sans contact du football américain : mixte, rapide et stratégique, le flag devient sport olympique aux Jeux de Los Angeles 2028."
        >
          <div className="hp-chips">
            <span className="hp-chip">Sans contact</span>
            <span className="hp-chip">Mixte</span>
            <span className="hp-chip">5 contre 5</span>
            <span className="hp-chip">JO 2028</span>
          </div>
          <div className="hp-section-cta">
            <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>Venir essayer</a>
            <a className="sc-btn-ghost" href="#horaires">Voir les horaires</a>
          </div>
        </PageHero>

        <section className="hp-sec" id="decouvrir">
          <div className="hp-wrap">
            <div className="hp-two" data-reveal>
              <div className="hp-prose">
                <p className="hp-eyebrow">Le sport</p>
                <h2 className="hp-h2">Le flag football, c’est quoi ?</h2>
                <p>
                  Le flag football se joue à 5 contre 5, sans aucun contact. Au lieu de plaquer,
                  on arrache un ruban, le flag, porté à la ceinture de l’adversaire. Le geste
                  remplace le plaquage et tout le reste du football américain demeure : les
                  tracés, les combinaisons, la lecture du jeu. Pour découvrir le flag football à
                  Tours, aucun équipement de protection n’est nécessaire : une tenue de sport,
                  des baskets, et c’est parti.
                </p>
                <p>
                  L’intensité ne vient donc pas du choc mais de la vitesse. Il faut se démarquer,
                  feinter, lire la défense en une seconde et choisir le bon tracé. Les phases sont
                  courtes, le rythme est élevé. C’est un sport de stratégie autant qu’un sport de
                  course : chaque action se prépare, s’annonce et s’exécute ensemble.
                </p>
                <h3>Un sport mixte, vraiment mixte</h3>
                <p>
                  Femmes et hommes jouent dans la même équipe, sur le même terrain, au même
                  moment. C’est rare dans un sport collectif, et c’est l’ADN de notre section
                  flag. Personne n’est là pour faire de la figuration : les rôles se répartissent
                  selon les qualités de chacun, pas selon les gabarits.
                </p>
                <p>
                  Cette mixité change l’ambiance des séances. On progresse ensemble, on
                  s’explique les schémas, on tourne aux différents postes. Beaucoup de joueuses
                  et de joueurs arrivent sans avoir jamais touché un ballon ovale ; quelques
                  entraînements suffisent pour entrer dans le jeu.
                </p>
              </div>
              <aside className="hp-aside">
                <div className="hp-panel">
                  <h3>En bref</h3>
                  <ul className="hp-list">
                    <li>5 contre 5, sans contact</li>
                    <li>Mixte : femmes et hommes dans la même équipe</li>
                    <li>Sport olympique aux JO de Los Angeles 2028</li>
                    <li>En loisir comme en compétition</li>
                    <li>Aucun équipement de protection à acheter</li>
                    <li>Semaine découverte offerte, sans engagement</li>
                    <li>Licence FFFA incluse dans les formules d’adhésion</li>
                  </ul>
                </div>
                <div className="hp-panel">
                  <h3>Le stade</h3>
                  <p className="hp-p" style={{ fontSize: 14, marginTop: 0 }}>
                    {STADE.nom}
                    <br />
                    {STADE.rue}, {STADE.codePostal} {STADE.ville}
                  </p>
                  <p className="hp-p" style={{ fontSize: 14 }}>
                    Bus ligne 2, arrêt Maréchal Juin, ou ligne 12, arrêt Chambrerie / Giraudoux :
                    5 minutes à pied.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="hp-dark">
          <div className="hp-wrap">
            <div data-reveal>
              <p className="hp-eyebrow">Cap sur 2028</p>
              <h2 className="hp-h2">Un sport olympique aux JO de Los Angeles 2028.</h2>
            </div>
            <div className="hp-prose" data-reveal>
              <p>
                Le flag entre au programme des Jeux olympiques de Los Angeles 2028. Une discipline
                qui devient olympique, c’est une discipline qui accélère : nouvelles équipes,
                nouveaux championnats, nouveaux publics, partout en France.
              </p>
              <p>
                Commencer maintenant, c’est prendre le train au bon moment. Celles et ceux qui
                débutent aujourd’hui auront plusieurs saisons de jeu derrière eux quand le flag
                sera sous les projecteurs.
              </p>
              <p>
                Aux Pionniers de Touraine, le flag n’est pas une nouveauté de circonstance. Le
                club existe depuis 1987, il fête bientôt ses 40 ans, et il fait vivre trois
                pratiques de flag : une équipe mixte seniors, une pratique juniors partagée avec
                le football américain et une école de flag pour les plus jeunes.
              </p>
            </div>
          </div>
        </section>

        <section className="hp-sec" id="equipes">
          <div className="hp-wrap">
            <div data-reveal>
              <p className="hp-eyebrow">Nos équipes</p>
              <h2 className="hp-h2">Nos équipes de flag.</h2>
            </div>
            <div className="hp-cards hp-cards-3" data-reveal>
              <article className="hp-card">
                <img
                  className="hp-card-badge"
                  src={asset('/assets/refonte/badge-2-olympique.svg')}
                  alt="Écusson Sport Olympique, JO de Los Angeles 2028"
                  loading="lazy"
                />
                <h3>Flag mixte seniors</h3>
                <div className="hp-chips">
                  <span className="hp-chip">Mixte</span>
                  <span className="hp-chip">Adultes</span>
                  <span className="hp-chip">Compétition</span>
                </div>
                <p>
                  L’équipe adulte du club, femmes et hommes ensemble, deux soirs par semaine. On y
                  joue en loisir comme en compétition. L’équipe de flag mixte des Pionniers a été
                  qualifiée en demi-finales de Conférence Nord.
                </p>
                <a className="hp-card-link" href={REJOINDRE_TUNNEL_URL}>
                  Venir essayer <FaArrowRight size={12} />
                </a>
              </article>
              <article className="hp-card">
                <img
                  className="hp-card-badge"
                  src={asset('/assets/refonte/badge-1-footus.svg')}
                  alt="Écusson Foot US et Flag des Pionniers de Touraine"
                  loading="lazy"
                />
                <h3>Juniors, foot US &amp; flag</h3>
                <div className="hp-chips">
                  <span className="hp-chip">Jeunes</span>
                  <span className="hp-chip">Deux disciplines</span>
                </div>
                <p>
                  Les juniors abordent les deux disciplines : le flag pour la vitesse et la
                  lecture du jeu, le football américain pour la technique et le collectif.
                  Encadrement adapté, aucune expérience exigée pour commencer.
                </p>
                <Link className="hp-card-link" href="#horaires">
                  Voir les horaires <FaArrowRight size={12} />
                </Link>
              </article>
              <article className="hp-card">
                <img
                  className="hp-card-badge"
                  src={asset('/assets/refonte/badge-5-ecole.svg')}
                  alt="Écusson École de Flag des Pionniers de Touraine"
                  loading="lazy"
                />
                <h3>École de flag</h3>
                <div className="hp-chips">
                  <span className="hp-chip">Enfants</span>
                  <span className="hp-chip">Samedi matin</span>
                </div>
                <p>
                  Le samedi matin, les plus jeunes apprennent le flag par le jeu : courir,
                  attraper, passer, se démarquer. Une porte d’entrée simple vers le sport
                  collectif, sans contact et sans matériel à prévoir.
                </p>
                <Link className="hp-card-link" href="/ecole-de-flag/">
                  Découvrir la section <FaArrowRight size={12} />
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="hp-sec" id="pour-qui">
          <div className="hp-wrap">
            <div data-reveal>
              <p className="hp-eyebrow">Pour qui ?</p>
              <h2 className="hp-h2">À qui ça s’adresse ?</h2>
            </div>
            <div className="hp-prose" data-reveal>
              <p>
                À peu près tout le monde, et ce n’est pas une formule. Le flag ne réclame ni
                gabarit particulier ni passé sportif. Il réclame de l’envie et un peu de
                régularité. On pense notamment à :
              </p>
              <ul className="hp-list">
                <li>
                  <strong>Celles et ceux qui veulent un sport collectif sans contact</strong>, avec
                  de l’engagement mais sans les chocs.
                </li>
                <li>
                  <strong>Les personnes qui reprennent le sport</strong> après une longue pause et
                  cherchent un cadre progressif.
                </li>
                <li>
                  <strong>Les gabarits légers comme les plus lourds</strong> : il y a un rôle pour
                  chaque profil, vitesse, lecture du jeu ou précision de passe.
                </li>
                <li>
                  <strong>Les anciens joueurs d’autres sports collectifs</strong> qui veulent
                  retrouver une équipe et un vestiaire.
                </li>
                <li>
                  <strong>Les curieux du football américain</strong> qui préfèrent commencer par le
                  flag avant de passer au contact.
                </li>
              </ul>
              <p>
                Aucune expérience n’est exigée. Les règles s’apprennent en une séance, le reste
                vient en jouant. La progression est encadrée par le PPP, le Pionniers Programme
                Performance : préparation physique, technique, tactique et mentale.
              </p>
            </div>
          </div>
        </section>

        <section className="hp-sec" id="horaires">
          <div className="hp-wrap">
            <div data-reveal>
              <p className="hp-eyebrow">Infos pratiques</p>
              <h2 className="hp-h2">Horaires du flag football à Tours.</h2>
            </div>
            <div className="hp-panel" data-reveal>
              <h3>Entraînements de flag</h3>
              <div>
                {HORAIRES.filter((h) => CATS_FLAG.includes(h.cat)).map((h) => (
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
              <p className="hp-p" style={{ fontSize: 14 }}>
                Toutes les séances ont lieu au {STADE.nom}, {STADE.rue}, {STADE.codePostal}{' '}
                {STADE.ville} (Tours Nord). En voiture : autoroute A10, sortie n°19 Tours
                Nord à 5 minutes, périphérique de Tours Nord à 3 minutes. En bus : ligne 2, arrêt
                Maréchal Juin, ou ligne 12, arrêt Chambrerie / Giraudoux.
              </p>
            </div>
          </div>
        </section>

        <section className="hp-sec" id="nous-rejoindre">
          <div className="hp-wrap">
            <div className="hp-inset" data-reveal>
              <p className="hp-eyebrow">Première séance</p>
              <h2>Comment nous rejoindre</h2>
              <p>
                La <strong>semaine découverte est offerte</strong>, sans engagement. Vous venez,
                vous jouez, vous décidez ensuite. La licence FFFA est ensuite incluse dans les
                formules d’adhésion.
              </p>
              <ul className="hp-list">
                <li>Vous nous écrivez, ou vous remplissez le parcours en ligne.</li>
                <li>Vous venez à un entraînement, simplement en tenue de sport.</li>
                <li>Vous décidez ensuite, sans pression.</li>
              </ul>
              <div className="hp-section-cta">
                <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>Venir essayer</a>
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
            <div data-reveal>
              <p className="hp-p" style={{ marginTop: 34, maxWidth: 760 }}>
                Envie d’aller plus loin ? Découvrez{' '}
                <Link href="/football-americain/">le football américain à Tours</Link>, la version
                au contact de notre sport, l’
                <Link href="/ecole-de-flag/">école de flag</Link> pour les plus jeunes, ou{' '}
                <Link href="/le-club/">l’histoire du club</Link> depuis 1987.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
