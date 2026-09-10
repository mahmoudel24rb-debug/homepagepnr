import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import YardLine from '@/components/YardLine';
import FaqSection from '@/components/FaqSection';
import { asset } from '@/lib/asset';
import { STADE, HORAIRES, CONTACT, REJOINDRE_TUNNEL_URL } from '@/lib/infos';

/** Créneaux affichés sur cette page : les trois pratiques de flag du club. */
const CATS_FLAG = ['Flag mixte seniors', 'Flag mixte juniors', 'École de flag'];

/** FAQ de la page, affichée et exposée en données structurées FAQPage. */
const FAQ = [
  {
    q: 'Faut-il de l’expérience ?',
    r: 'Non. Beaucoup de joueuses et de joueurs arrivent sans avoir jamais touché un ballon ovale : les règles s’apprennent en une séance et le reste vient en jouant. La progression est encadrée par le PPP, le Pionniers Programme Performance, qui couvre la préparation physique, la technique, la tactique et le mental.',
  },
  {
    q: 'Y a-t-il du contact ?',
    r: 'Non. Le flag football se joue sans aucun contact : au lieu de plaquer le porteur de balle, on arrache un ruban accroché à sa ceinture, et l’action s’arrête là. Aucun équipement de protection n’est donc nécessaire, ni casque ni épaulières. L’intensité vient de la vitesse et de la lecture du jeu, pas du choc.',
  },
  {
    q: 'Le flag est-il vraiment mixte ?',
    r: 'Oui. Femmes et hommes jouent dans la même équipe, sur le même terrain, au même moment : il n’y a pas une équipe masculine d’un côté et une équipe féminine de l’autre. Les rôles se répartissent selon les qualités de chacun, vitesse, lecture du jeu ou précision de passe, pas selon les gabarits.',
  },
  {
    q: 'Comment essayer ?',
    r: `Écrivez au club à ${CONTACT.email}, appelez le ${CONTACT.telephone}, ou remplissez le parcours en ligne. Vous venez ensuite à un entraînement de flag mixte seniors, le lundi ou le jeudi de 20h15 à 22h45, au stade de la Chambrerie, simplement en tenue de sport. La semaine découverte est offerte, sans engagement.`,
  },
];

export const metadata: Metadata = {
  title: 'Flag football à Tours : mixte et sans contact',
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
          <div className="sc-chips" style={{ marginTop: 24 }}>
            <span className="sc-chip">Sans contact</span>
            <span className="sc-chip">Mixte</span>
            <span className="sc-chip">5 contre 5</span>
            <span className="sc-chip">JO 2028</span>
          </div>
          <div className="sc-ctas">
            <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>
              Venir essayer
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
              Le flag football est la version sans contact du football américain : on arrache un
              ruban porté à la ceinture au lieu de plaquer, et l’on joue à 5 contre 5. Aux Pionniers
              de Touraine, il se pratique au {STADE.nom}, {STADE.rue}, {STADE.codePostal}{' '}
              {STADE.ville}. L’équipe flag mixte seniors, où femmes et hommes jouent ensemble,
              s’entraîne le lundi et le jeudi de 20h15 à 22h45 ; les juniors ont leur créneau flag le
              jeudi de 19h00 à 20h30, et les plus jeunes le samedi de 10h00 à 12h00. Aucun
              équipement de protection n’est nécessaire : une tenue de sport et des baskets
              suffisent. La semaine découverte est offerte et cette séance d’essai gratuite n’engage
              à rien, la licence FFFA étant ensuite incluse dans les formules d’adhésion. Le flag
              entre au programme des Jeux olympiques de Los Angeles 2028.
            </p>
          </div>
        </section>

        {/* ── Le sport ── */}
        <section className="sc-sec" id="decouvrir">
          <YardLine n="10" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Le sport</p>
              <h2 className="sc-title">Le flag football aux Pionniers de Touraine.</h2>
            </div>
            <div className="sc-two" data-reveal>
              <div className="sc-body">
                <p className="sc-legal-text">
                  Le flag football se joue à 5 contre 5, sans aucun contact : au lieu de plaquer, on
                  arrache un ruban, le flag, porté à la ceinture de l’adversaire. Tout le reste du
                  football américain demeure, les tracés, les combinaisons et la lecture du jeu, et
                  la définition complète de la discipline est détaillée dans{' '}
                  <Link href="/blog/flag-football-cest-quoi/">le flag football, c’est quoi</Link>.
                </p>
                <p className="sc-legal-text">
                  Aux Pionniers de Touraine, le flag se pratique au {STADE.nom}, sur trois
                  collectifs : une équipe mixte seniors, un créneau juniors et l’école de flag pour
                  les plus jeunes. Pour découvrir le flag football à Tours, aucun équipement de
                  protection n’est nécessaire : une tenue de sport, des baskets, et c’est parti.
                </p>
                <p className="sc-legal-text">
                  L’intensité ne vient donc pas du choc mais de la vitesse. Il faut se démarquer,
                  feinter, lire la défense en une seconde et choisir le bon tracé. Les phases sont
                  courtes, le rythme est élevé. C’est un sport de stratégie autant qu’un sport de
                  course : chaque action se prépare, s’annonce et s’exécute ensemble.
                </p>
                <h3 className="sc-h3">Le flag football mixte à Tours : vraiment mixte</h3>
                <p className="sc-legal-text">
                  Femmes et hommes jouent dans la même équipe, sur le même terrain, au même moment.
                  Il n’y a donc pas ici une équipe masculine d’un côté et une équipe de flag
                  football féminin de l’autre : il y a une équipe, et elle est mixte. C’est rare
                  dans un sport collectif, et c’est l’ADN de notre section flag. Personne n’est là
                  pour faire de la figuration : les rôles se répartissent selon les qualités de
                  chacun, pas selon les gabarits.
                </p>
                <p className="sc-legal-text">
                  Cette mixité change l’ambiance des séances. On progresse ensemble, on s’explique
                  les schémas, on tourne aux différents postes. Beaucoup de joueuses et de joueurs
                  arrivent sans avoir jamais touché un ballon ovale ; quelques entraînements
                  suffisent pour entrer dans le jeu.
                </p>
              </div>
              <aside className="sc-aside">
                <div className="sc-panel">
                  <h3 className="sc-panel-title">En bref</h3>
                  <ul className="sc-liste">
                    <li>5 contre 5, sans contact</li>
                    <li>Mixte : femmes et hommes dans la même équipe</li>
                    <li>Sport olympique aux JO de Los Angeles 2028</li>
                    <li>En loisir comme en compétition</li>
                    <li>Aucun équipement de protection à acheter</li>
                    <li>Semaine découverte offerte, sans engagement</li>
                    <li>Licence FFFA incluse dans les formules d’adhésion</li>
                  </ul>
                </div>
                <div className="sc-panel">
                  <h3 className="sc-panel-title">Le stade</h3>
                  <p className="sc-legal-text">
                    {STADE.nom}
                    <br />
                    {STADE.rue}, {STADE.codePostal} {STADE.ville}
                  </p>
                  <p className="sc-legal-text">
                    Bus ligne 2, arrêt Maréchal Juin, ou ligne 12, arrêt Chambrerie / Giraudoux : 5
                    minutes à pied.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── Cap sur 2028 ── */}
        <section className="sc-sec" id="jo-2028">
          <YardLine n="20" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Cap sur 2028</p>
              <h2 className="sc-title">Un sport olympique aux JO de Los Angeles 2028.</h2>
            </div>
            <div className="sc-body" data-reveal style={{ marginTop: 30 }}>
              <p className="sc-legal-text">
                Le flag entre au programme des Jeux olympiques de Los Angeles 2028. Une discipline
                qui devient olympique, c’est une discipline qui accélère : nouvelles équipes,
                nouveaux championnats, nouveaux publics, partout en France. Nous racontons ce
                basculement en détail dans{' '}
                <Link href="/blog/flag-football-jo-2028/">le flag football aux JO 2028</Link>.
              </p>
              <p className="sc-legal-text">
                Commencer maintenant, c’est prendre le train au bon moment. Celles et ceux qui
                débutent aujourd’hui auront plusieurs saisons de jeu derrière eux quand le flag sera
                sous les projecteurs.
              </p>
              <p className="sc-legal-text">
                Aux Pionniers de Touraine, le flag n’est pas une nouveauté de circonstance. Le club
                existe depuis 1987, il fête bientôt ses 40 ans, et il fait vivre trois pratiques de
                flag : une équipe mixte seniors, une pratique juniors partagée avec le football
                américain et une école de flag pour les plus jeunes.
              </p>
            </div>
          </div>
        </section>

        {/* ── Nos équipes ── */}
        <section className="sc-sec" id="equipes">
          <YardLine n="30" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Nos équipes</p>
              <h2 className="sc-title">Nos équipes de flag.</h2>
            </div>
            <div className="sc-cards" data-reveal>
              <article className="sc-card sc-card--statique">
                <div className="sc-card-badges">
                  <img
                    className="sc-card-badge"
                    src={asset('/assets/refonte/badge-2-olympique.webp')}
                    alt="Écusson Sport Olympique, JO de Los Angeles 2028"
                    loading="lazy"
                  />
                </div>
                <h3 className="sc-card-title">Flag mixte seniors</h3>
                <div className="sc-chips">
                  <span className="sc-chip">Mixte</span>
                  <span className="sc-chip">Adultes</span>
                  <span className="sc-chip">Compétition</span>
                </div>
                <p className="sc-card-desc">
                  Le flag football senior du club, femmes et hommes dans la même équipe, deux soirs
                  par semaine. On y joue en loisir comme en compétition. L’équipe de flag mixte des
                  Pionniers a été qualifiée en demi-finales de Conférence Nord.
                </p>
                <a className="sc-card-cta" href={REJOINDRE_TUNNEL_URL}>
                  Venir essayer <ArrowRight size={15} strokeWidth={2.6} />
                </a>
              </article>
              <article className="sc-card sc-card--statique">
                <div className="sc-card-badges">
                  <img
                    className="sc-card-badge"
                    src={asset('/assets/refonte/badge-1-footus.webp')}
                    alt="Écusson Foot US et Flag des Pionniers de Touraine"
                    loading="lazy"
                  />
                </div>
                <h3 className="sc-card-title">Juniors, foot US &amp; flag</h3>
                <div className="sc-chips">
                  <span className="sc-chip">Jeunes</span>
                  <span className="sc-chip">Deux disciplines</span>
                </div>
                <p className="sc-card-desc">
                  Les juniors abordent les deux disciplines : le flag pour la vitesse et la lecture
                  du jeu, le football américain pour la technique et le collectif. Encadrement
                  adapté, aucune expérience exigée pour commencer.
                </p>
                <a className="sc-card-cta" href="#horaires">
                  Voir les horaires <ArrowRight size={15} strokeWidth={2.6} />
                </a>
              </article>
              <Link className="sc-card" href="/ecole-de-flag/">
                <div className="sc-card-badges">
                  <img
                    className="sc-card-badge"
                    src={asset('/assets/refonte/badge-5-ecole.webp')}
                    alt="Écusson École de Flag des Pionniers de Touraine"
                    loading="lazy"
                  />
                </div>
                <h3 className="sc-card-title">École de flag</h3>
                <div className="sc-chips">
                  <span className="sc-chip">Enfants</span>
                  <span className="sc-chip">Samedi matin</span>
                </div>
                <p className="sc-card-desc">
                  Le samedi matin, les plus jeunes apprennent le flag par le jeu : courir, attraper,
                  passer, se démarquer. Une porte d’entrée simple vers le sport collectif, sans
                  contact et sans matériel à prévoir.
                </p>
                <span className="sc-card-cta">
                  Découvrir la section <ArrowRight size={15} strokeWidth={2.6} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Pour qui ? ── */}
        <section className="sc-sec" id="pour-qui">
          <YardLine n="40" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Pour qui ?</p>
              <h2 className="sc-title">À qui s’adresse le flag football à Tours ?</h2>
            </div>
            <div className="sc-body" data-reveal style={{ marginTop: 30 }}>
              <h3 className="sc-h3">Le flag football adulte, débutant compris</h3>
              <p className="sc-legal-text">
                Le <strong>flag football adulte</strong>, que les clubs appellent aussi flag
                football senior, s’adresse en priorité aux débutants complets : des femmes et des
                hommes qui n’ont jamais touché un ballon ovale, d’anciens sportifs d’autres
                disciplines qui cherchent une équipe, des étudiants arrivés à Tours et qui veulent
                un groupe en dehors des cours. Aucune expérience n’est demandée, rien n’est à
                acheter. Pour arriver en connaissant déjà le jeu, lis{' '}
                <Link href="/blog/regles-flag-football/">les règles du flag football</Link>.
              </p>
              <p className="sc-legal-text">
                À peu près tout le monde, et ce n’est pas une formule. Le flag ne réclame ni gabarit
                particulier ni passé sportif. Il réclame de l’envie et un peu de régularité. On
                pense notamment à :
              </p>
              <ul className="sc-liste">
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
              <p className="sc-legal-text" style={{ marginTop: 18 }}>
                Aucune expérience n’est exigée. Les règles s’apprennent en une séance, le reste
                vient en jouant. La progression est encadrée par le PPP, le Pionniers Programme
                Performance : préparation physique, technique, tactique et mentale.
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
              <h2 className="sc-title">Horaires du flag football à Tours.</h2>
            </div>
            <div className="sc-panel" data-reveal style={{ marginTop: 30, maxWidth: 900 }}>
              <h3 className="sc-panel-title">Entraînements de flag</h3>
              <div className="sc-horaires">
                {HORAIRES.filter((h) => CATS_FLAG.includes(h.cat)).map((h) => (
                  <div key={h.cat} className="sc-horaire">
                    <span className="sc-horaire-cat">{h.cat}</span>
                    <span className="sc-horaire-time">{h.creneaux.join(' / ')}</span>
                  </div>
                ))}
              </div>
              <p className="sc-legal-text" style={{ marginTop: 20 }}>
                Toutes les séances ont lieu au {STADE.nom}, {STADE.rue}, {STADE.codePostal}{' '}
                {STADE.ville} (Tours Nord). En voiture : autoroute A10, sortie n°19 Tours Nord à 5
                minutes, périphérique de Tours Nord à 3 minutes. En bus : ligne 2, arrêt Maréchal
                Juin, ou ligne 12, arrêt Chambrerie / Giraudoux.
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

            <div className="sc-body" data-reveal>
              <p className="sc-legal-text" style={{ marginTop: 34 }}>
                Envie d’aller plus loin ? Découvrez{' '}
                <Link href="/football-americain/">le football américain à Tours</Link>, la version
                au contact de notre sport, l’<Link href="/ecole-de-flag/">école de flag</Link> pour
                les plus jeunes, ou <Link href="/le-club/">l’histoire du club</Link> depuis 1987.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FaqSection titre="Avant votre première séance de flag." items={FAQ} />

        {/* ── CTA final ── */}
        <section className="sc-sec sc-endzone" id="nous-rejoindre">
          <YardLine n="endzone" />
          <div className="sc-wrap" data-reveal>
            <p className="sc-eyebrow">Première séance</p>
            <h2 className="sc-title">Comment nous rejoindre</h2>
            <p className="sc-lead" style={{ maxWidth: 640 }}>
              La <strong>semaine découverte est offerte</strong>, sans engagement. Vous venez, vous
              jouez, vous décidez ensuite. La licence FFFA est ensuite incluse dans les formules
              d’adhésion.
            </p>
            <ul className="sc-liste" style={{ display: 'inline-grid', textAlign: 'left', margin: '20px auto 0' }}>
              <li>Vous nous écrivez, ou vous remplissez le parcours en ligne.</li>
              <li>Vous venez à un entraînement, simplement en tenue de sport.</li>
              <li>Vous décidez ensuite, sans pression.</li>
            </ul>
            <div className="sc-ctas" style={{ justifyContent: 'center' }}>
              <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>
                Venir essayer
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
