import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import YardLine from '@/components/YardLine';
import { asset } from '@/lib/asset';
import { PARTENAIRES } from '@/lib/partenaires';
import { STADE, CONTACT, REJOINDRE_TUNNEL_URL } from '@/lib/infos';

export const metadata: Metadata = {
  title: 'Partenaires et sponsoring à Tours',
  description:
    'Associez votre entreprise aux Pionniers de Touraine, club de foot US fondé en 1987 à Tours : visibilité locale, valeurs sportives et mécénat.',
  alternates: { canonical: '/partenaires/' },
  openGraph: {
    title: 'Devenir partenaire des Pionniers de Touraine',
    description:
      'Sponsoring et mécénat auprès d’un club sportif tourangeau historique et en pleine croissance : visibilité, audience locale et familiale, valeurs partagées.',
    url: '/partenaires/',
    type: 'article',
  },
};

/** Les logos partenaires sont tous exportés en carré 703 × 703 (WebP). */
const LOGO_SIZE = { width: 703, height: 703 } as const;

/**
 * Niveaux de partenariat : noms d'exemple et contreparties génériques.
 * VOLONTAIREMENT SANS PRIX : la grille tarifaire est établie au cas par cas
 * avec le club.
 */
const NIVEAUX = [
  {
    nom: 'Partenaire Officiel',
    pitch: 'Une présence visible sur la saison.',
    contreparties: [
      'Logo sur le site du club et sur cette page',
      'Citations et publications sur nos réseaux sociaux',
      'Présence sur les supports de communication du club',
      'Invitations aux temps forts de la saison',
    ],
  },
  {
    nom: 'Partenaire Premium',
    pitch: 'Une visibilité renforcée, sur le terrain et en ligne.',
    contreparties: [
      'Tout le niveau Partenaire Officiel',
      'Logo sur les équipements ou les tenues, selon les emplacements disponibles',
      'Signalétique au stade les jours de match',
      'Contenus dédiés (photos, vidéos, mise en avant de votre activité)',
      'Opérations communes avec le club',
    ],
  },
  {
    nom: 'Mécène',
    pitch: 'Soutenir le projet, en particulier la formation des jeunes.',
    contreparties: [
      'Soutien fléché vers un projet du club (jeunes, matériel, déplacements)',
      'Reçu et documents nécessaires à votre comptabilité',
      'Mise en avant de votre engagement, si vous le souhaitez',
      'Rendez-vous de suivi sur l’usage de votre soutien',
    ],
  },
];

/** Ce que le partenariat apporte concrètement, en quatre angles. */
const ARGUMENTS = [
  {
    titre: 'De la visibilité, là où on nous voit',
    points: [
      'Sur les tenues et les équipements du club',
      'Au stade de la Chambrerie, les jours d’entraînement et de match',
      'Sur nos réseaux sociaux (Facebook, Instagram, TikTok)',
      'Sur ce site, avec votre logo sur cette page',
    ],
  },
  {
    titre: 'Une audience locale et familiale',
    points: [
      'Des licenciés de Tours et de toute l’Indre-et-Loire',
      'Des parents présents chaque samedi à l’école de flag',
      'Des supporters, des familles et des proches les jours de match',
      'Une communauté qui suit le club en ligne toute la saison',
    ],
  },
  {
    titre: 'Des valeurs qui vous ressemblent',
    points: [
      'Un sport d’équipe exigeant, où chaque profil a un rôle',
      'La formation des jeunes, de l’école de flag aux juniors',
      'La mixité, portée par notre équipe de flag',
      'Un club associatif ancré dans son territoire depuis 1987',
    ],
  },
  {
    titre: 'Un cadre clair pour votre entreprise',
    points: [
      'Sponsoring classique, avec des contreparties définies ensemble',
      'Ou mécénat sportif, sous forme de don à une association',
      'Soutien en numéraire, en matériel ou en compétences',
      'Un interlocuteur unique au club pour le suivi',
    ],
  },
];

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          fil="Partenaires"
          chemin="/partenaires/"
          eyebrow="Sponsoring et mécénat"
          titre={
            <>
              Devenez partenaire d’un club{' '}
              <br />
              tourangeau historique
            </>
          }
          sousTitre="Fondés en 1987, les Pionniers de Touraine sont l’un des plus anciens clubs de football américain de France, et l’un des plus dynamiques du bassin tourangeau. Associer votre image à la nôtre, c’est soutenir un projet sportif local et rencontrer une communauté fidèle."
        >
          <div className="sc-chips" style={{ marginTop: 24 }}>
            <span className="sc-chip">Visibilité locale</span>
            <span className="sc-chip">Co-branding</span>
            <span className="sc-chip">Mécénat sportif</span>
            <span className="sc-chip">Formation des jeunes</span>
          </div>
          <div className="sc-ctas">
            <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>
              Devenir partenaire
            </a>
            <Link className="sc-btn-ghost" href="/contact/">
              Nous écrire
            </Link>
          </div>
        </PageHero>

        {/* ── Les partenaires actuels ── */}
        <section className="sc-sec" id="ils-nous-soutiennent">
          <YardLine n="10" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Ils nous font confiance</p>
              <h2 className="sc-title">Nos partenaires.</h2>
              <p className="sc-lead">
                Commerces, artisans et entreprises de Tours et de son agglomération : ce sont eux
                qui financent le matériel, les déplacements et la formation de nos jeunes. Sans eux,
                un club associatif de quarante ans ne tiendrait pas.
              </p>
            </div>
            <div className="sc-partenaires" data-reveal>
              {PARTENAIRES.map((p) => (
                <div key={p.nom} className="sc-partenaire">
                  <img
                    src={asset(p.fichier)}
                    alt={`Logo ${p.nom}, partenaire des Pionniers de Touraine`}
                    width={LOGO_SIZE.width}
                    height={LOGO_SIZE.height}
                    loading="lazy"
                  />
                  <p className="sc-partenaire-nom">{p.nom}</p>
                  <p className="sc-partenaire-desc">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pourquoi sponsoriser les Pionniers ── */}
        <section className="sc-sec" id="pourquoi">
          <YardLine n="20" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Pourquoi nous soutenir</p>
              <h2 className="sc-title">Ce que le sponsoring d’un club sportif à Tours vous apporte.</h2>
              <p className="sc-lead">
                Un partenariat réussi crée de la valeur pour les deux parties. Voici concrètement ce
                que nous mettons sur la table.
              </p>
            </div>
            <div className="sc-cards sc-cards--deux" data-reveal>
              {ARGUMENTS.map((a) => (
                <article key={a.titre} className="sc-card sc-card--statique">
                  <h3 className="sc-card-title">{a.titre}</h3>
                  <ul className="sc-liste" style={{ marginTop: 4 }}>
                    {a.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Sponsoring ou mécénat ── */}
        <section className="sc-sec" id="mecenat">
          <YardLine n="30" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Deux façons de nous accompagner</p>
              <h2 className="sc-title">Sponsoring ou mécénat sportif ?</h2>
            </div>
            <div className="sc-two" data-reveal>
              <div className="sc-body">
                <p className="sc-legal-text">
                  Le <strong>sponsoring</strong> est un contrat de communication : vous financez le
                  club, le club vous offre des contreparties visibles (logo, signalétique, contenus,
                  opérations communes). C’est la formule choisie par la plupart de nos partenaires.
                </p>
                <p className="sc-legal-text">
                  Le <strong>mécénat sportif</strong> est un don, sans contrepartie proportionnée,
                  au profit d’une association. Il ouvre droit, dans les conditions prévues par la
                  loi, à un avantage fiscal pour les entreprises comme pour les particuliers. Le
                  montant, les plafonds et les justificatifs dépendent de votre situation : votre
                  expert-comptable est le mieux placé pour vous confirmer ce qui s’applique à vous.
                  Le club vous remet les documents nécessaires.
                </p>
                <p className="sc-legal-text">
                  Enfin, tout ne passe pas par un chèque. Le <strong>mécénat en nature</strong> et
                  le <strong>mécénat de compétences</strong> nous rendent d’immenses services :
                  matériel, impression, transport, hébergement, prestations, ou simplement quelques
                  heures de votre savoir-faire.
                </p>
                <h3 className="sc-h3">À quoi sert votre soutien</h3>
                <ul className="sc-liste">
                  <li>Le matériel : ballons, protections, équipements de terrain</li>
                  <li>Les déplacements des équipes en compétition</li>
                  <li>La formation des jeunes, de l’école de flag aux juniors</li>
                  <li>L’accueil et l’organisation les jours de match</li>
                  <li>L’accès au sport pour celles et ceux que le coût freine</li>
                </ul>
              </div>

              <aside className="sc-aside">
                <div className="sc-panel">
                  <h3 className="sc-panel-title">Le club en bref</h3>
                  <ul className="sc-liste">
                    <li>
                      <strong>Fondé en 1987</strong>, l’un des plus anciens clubs de football
                      américain de France
                    </li>
                    <li>Football américain et flag football</li>
                    <li>Seniors, juniors et école de flag</li>
                    <li>
                      {STADE.nom}, {STADE.ville} Nord
                    </li>
                    <li>Association loi 1901, licence FFFA</li>
                  </ul>
                </div>
                <div className="sc-panel">
                  <h3 className="sc-panel-title">Parlons-en</h3>
                  <ul className="sc-liste">
                    <li>
                      <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                    </li>
                    <li>
                      <a href={CONTACT.telHref}>{CONTACT.telephone}</a>
                    </li>
                  </ul>
                  <div className="sc-ctas">
                    <Link className="sc-btn-ghost" href="/contact/">
                      Nous écrire
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── Niveaux de partenariat ── */}
        <section className="sc-sec" id="niveaux">
          <YardLine n="40" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Niveaux de partenariat</p>
              <h2 className="sc-title">Trois formules, à ajuster ensemble.</h2>
              <p className="sc-lead">
                Ces niveaux sont des points de départ, pas une grille figée. Le contenu exact et le
                montant se construisent avec vous, en fonction de vos objectifs et de la saison.
              </p>
            </div>
            {/* À COMPLÉTER : montants, durées d'engagement et emplacements précis
                (maillots, panneaux, supports) à arbitrer par le bureau du club. */}
            {/* 4 cartes (3 formules + votre logo ici) : grille 2x2, pas de carte orpheline */}
            <div className="sc-cards sc-cards--deux" data-reveal>
              {NIVEAUX.map((n) => (
                <article key={n.nom} className="sc-card sc-card--statique">
                  <h3 className="sc-card-title">{n.nom}</h3>
                  <p className="sc-card-desc" style={{ marginBottom: 4 }}>
                    {n.pitch}
                  </p>
                  <ul className="sc-liste">
                    {n.contreparties.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </article>
              ))}
              <article className="sc-card sc-card--statique sc-card--vide">
                <span className="sc-card-plus" aria-hidden="true">
                  +
                </span>
                <h3 className="sc-card-title">Votre logo ici</h3>
                <p className="sc-card-desc">
                  Il reste de la place sur nos maillots, nos panneaux et cette page. Écrivez-nous,
                  on en discute autour d’un café.
                </p>
                <Link className="sc-btn-ghost" href="/contact/">
                  Nous écrire
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* ── Soutenir autrement ── */}
        <section className="sc-sec" id="soutenir-autrement">
          <YardLine n="50" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Deux façons de s’engager</p>
              <h2 className="sc-title">Soutenir le club autrement.</h2>
              <p className="sc-lead">
                Le sponsoring et le mécénat sont la voie des entreprises. Les particuliers, eux,
                soutiennent les Pionniers en donnant un peu de temps : le club en a autant besoin.
              </p>
            </div>
            <div className="sc-cards sc-cards--deux" data-reveal>
              <article className="sc-card sc-card--statique">
                <h3 className="sc-card-title">Vous représentez une entreprise</h3>
                <p className="sc-card-desc">
                  Sponsoring avec contreparties, mécénat sportif, don en nature ou en compétences :
                  tout est décrit sur cette page, et le contenu exact se construit avec vous. Le
                  club existe depuis 1987 : découvrez{' '}
                  <Link href="/le-club/">le club depuis 1987</Link> avant d’en parler avec nous.
                </p>
                <Link className="sc-btn-ghost" href="/contact/">
                  Nous écrire
                </Link>
              </article>
              <article className="sc-card sc-card--statique">
                <h3 className="sc-card-title">Vous êtes un particulier</h3>
                <p className="sc-card-desc">
                  Un club associatif tient grâce à ses bénévoles : siffler une rencontre, encadrer
                  un groupe, tenir un poste un jour de match. Nous expliquons chaque rôle dans{' '}
                  <Link href="/blog/arbitre-coach-benevole-club-football-americain/">
                    devenir arbitre, coach ou bénévole
                  </Link>
                  . Côté image et captation, il est aussi possible de{' '}
                  <a
                    href="https://recrutement.pionniersdetouraine.fr/#offre-broadcast-regie"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    rejoindre l’équipe broadcast FFFA TV
                  </a>
                  .
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── CTA final ── */}
        <section className="sc-sec sc-endzone" id="devenir-partenaire">
          <YardLine n="endzone" />
          <div className="sc-wrap" data-reveal>
            <p className="sc-eyebrow">Prochaine étape</p>
            <h2 className="sc-title">Construisons un partenariat qui vous ressemble.</h2>
            <p className="sc-lead" style={{ maxWidth: 660 }}>
              Dites-nous qui vous êtes et ce que vous cherchez : de la visibilité locale, un
              engagement auprès de la jeunesse, ou simplement l’envie de donner un coup de main à un
              club du coin. Nous revenons vers vous avec une proposition concrète.
            </p>
            <div className="sc-ctas" style={{ justifyContent: 'center' }}>
              <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>
                Devenir partenaire
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
