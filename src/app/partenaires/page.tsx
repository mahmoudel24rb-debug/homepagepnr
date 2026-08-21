import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import { asset } from '@/lib/asset';
import { PARTENAIRES } from '@/lib/partenaires';
import { STADE, CONTACT, REJOINDRE_TUNNEL_URL } from '@/lib/infos';

export const metadata: Metadata = {
  title: 'Partenaires et sponsoring à Tours',
  description:
    'Associez votre entreprise aux Pionniers de Touraine, club de football américain fondé en 1987 à Tours. Visibilité locale, valeurs sportives et mécénat sportif.',
  alternates: { canonical: '/partenaires/' },
  openGraph: {
    title: 'Devenir partenaire des Pionniers de Touraine',
    description:
      'Sponsoring et mécénat auprès d’un club sportif tourangeau historique et en pleine croissance : visibilité, audience locale et familiale, valeurs partagées.',
    url: '/partenaires/',
    type: 'article',
  },
};

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
              Devenez partenaire d’un club
              <br />
              tourangeau historique
            </>
          }
          sousTitre="Fondés en 1987, les Pionniers de Touraine sont l’un des plus anciens clubs de football américain de France, et l’un des plus dynamiques du bassin tourangeau. Associer votre image à la nôtre, c’est soutenir un projet sportif local et rencontrer une communauté fidèle."
        >
          <div className="hp-chips" style={{ marginTop: 24 }}>
            <span className="hp-chip">Visibilité locale</span>
            <span className="hp-chip">Co-branding</span>
            <span className="hp-chip">Mécénat sportif</span>
            <span className="hp-chip">Formation des jeunes</span>
          </div>
          <div className="ph-ctas">
            <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>
              Devenir partenaire
            </a>
            <Link className="sc-btn-ghost" href="/contact/">
              Nous écrire
            </Link>
          </div>
        </PageHero>

        {/* ── Les partenaires actuels ── */}
        <section className="hp-sec" id="ils-nous-soutiennent">
          <div className="hp-wrap">
            <div data-reveal>
              <p className="hp-eyebrow">Ils nous font confiance</p>
              <h2 className="hp-h2">Nos partenaires.</h2>
              <p className="hp-p">
                Commerces, artisans et entreprises de Tours et de son agglomération : ce sont eux
                qui financent le matériel, les déplacements et la formation de nos jeunes. Sans eux,
                un club associatif de quarante ans ne tiendrait pas.
              </p>
            </div>
            <div className="hp-logos" data-reveal>
              {PARTENAIRES.map((p) => (
                <div key={p.nom} className="hp-logo-card">
                  <img src={asset(p.fichier)} alt={`Logo ${p.nom}, partenaire des Pionniers de Touraine`} loading="lazy" />
                  <span className="hp-logo-meta">
                    <strong>{p.nom}</strong>
                    <span>{p.description}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pourquoi sponsoriser les Pionniers ── */}
        <section className="hp-dark" id="pourquoi">
          <div className="hp-wrap">
            <div data-reveal>
              <p className="hp-eyebrow">Pourquoi nous soutenir</p>
              <h2 className="hp-h2">Ce que le sponsoring d’un club sportif à Tours vous apporte.</h2>
              <p className="hp-p">
                Un partenariat réussi crée de la valeur pour les deux parties. Voici concrètement ce
                que nous mettons sur la table.
              </p>
            </div>
            <div className="hp-cards hp-cards-3" data-reveal style={{ marginTop: 40 }}>
              {ARGUMENTS.map((a) => (
                <article key={a.titre} className="hp-card">
                  <h3>{a.titre}</h3>
                  <ul className="hp-list">
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
        <section className="hp-sec" id="mecenat">
          <div className="hp-wrap">
            <div className="hp-two">
              <div className="hp-prose" data-reveal>
                <p className="hp-eyebrow">Deux façons de nous accompagner</p>
                <h2 className="hp-h2">Sponsoring ou mécénat sportif ?</h2>
                <p>
                  Le <strong>sponsoring</strong> est un contrat de communication : vous financez le
                  club, le club vous offre des contreparties visibles (logo, signalétique, contenus,
                  opérations communes). C’est la formule choisie par la plupart de nos partenaires.
                </p>
                <p>
                  Le <strong>mécénat sportif</strong> est un don, sans contrepartie proportionnée,
                  au profit d’une association. Il ouvre droit, dans les conditions prévues par la
                  loi, à un avantage fiscal pour les entreprises comme pour les particuliers. Le
                  montant, les plafonds et les justificatifs dépendent de votre situation : votre
                  expert-comptable est le mieux placé pour vous confirmer ce qui s’applique à vous.
                  Le club vous remet les documents nécessaires.
                </p>
                <p>
                  Enfin, tout ne passe pas par un chèque. Le <strong>mécénat en nature</strong> et le{' '}
                  <strong>mécénat de compétences</strong> nous rendent d’immenses services :
                  matériel, impression, transport, hébergement, prestations, ou simplement quelques
                  heures de votre savoir-faire.
                </p>
                <h3>À quoi sert votre soutien</h3>
                <ul className="hp-list">
                  <li>Le matériel : ballons, protections, équipements de terrain</li>
                  <li>Les déplacements des équipes en compétition</li>
                  <li>La formation des jeunes, de l’école de flag aux juniors</li>
                  <li>L’accueil et l’organisation les jours de match</li>
                  <li>L’accès au sport pour celles et ceux que le coût freine</li>
                </ul>
              </div>

              <aside className="hp-aside" data-reveal>
                <div className="hp-panel">
                  <h3>Le club en bref</h3>
                  <ul className="hp-list">
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
                <div className="hp-panel">
                  <h3>Parlons-en</h3>
                  <div className="hp-contact-item" style={{ gap: 10 }}>
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                    <a href={CONTACT.telHref}>{CONTACT.telephone}</a>
                  </div>
                  <div className="hp-section-cta">
                    <Link className="hp-ghost" href="/contact/">
                      Nous écrire
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── Niveaux de partenariat ── */}
        <section className="hp-sec" id="niveaux" style={{ paddingTop: 0 }}>
          <div className="hp-wrap">
            <div data-reveal>
              <p className="hp-eyebrow">Niveaux de partenariat</p>
              <h2 className="hp-h2">Trois formules, à ajuster ensemble.</h2>
              <p className="hp-p">
                Ces niveaux sont des points de départ, pas une grille figée. Le contenu exact et le
                montant se construisent avec vous, en fonction de vos objectifs et de la saison.
              </p>
            </div>
            {/* À COMPLÉTER : montants, durées d'engagement et emplacements précis
                (maillots, panneaux, supports) à arbitrer par le bureau du club. */}
            <div className="hp-tiers" data-reveal>
              {NIVEAUX.map((n) => (
                <div key={n.nom} className="hp-tier">
                  <h3>{n.nom}</h3>
                  <p>{n.pitch}</p>
                  <ul className="hp-list">
                    {n.contreparties.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="hp-tier hp-tier-add">
                <span className="hp-tier-plus" aria-hidden="true">
                  +
                </span>
                <h3>Votre logo ici</h3>
                <p>
                  Il reste de la place sur nos maillots, nos panneaux et cette page. Écrivez-nous,
                  on en discute autour d’un café.
                </p>
                <div className="hp-section-cta" style={{ justifyContent: 'center' }}>
                  <Link className="hp-ghost" href="/contact/">
                    Nous écrire
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA final ── */}
        <section className="hp-sec" id="devenir-partenaire" style={{ paddingTop: 0 }}>
          <div className="hp-wrap">
            <div className="hp-inset" data-reveal>
              <p className="hp-eyebrow">Prochaine étape</p>
              <h2>Construisons un partenariat qui vous ressemble.</h2>
              <p>
                Dites-nous qui vous êtes et ce que vous cherchez : de la visibilité locale, un
                engagement auprès de la jeunesse, ou simplement l’envie de donner un coup de main à
                un club du coin. Nous revenons vers vous avec une proposition concrète.
              </p>
              <div className="hp-section-cta">
                <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>
                  Devenir partenaire
                </a>
                <Link className="hp-ghost" href="/contact/">
                  Nous écrire
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
