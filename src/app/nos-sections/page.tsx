import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import YardLine from '@/components/YardLine';
import { getEmoji } from '@/lib/funnelIcons';
import { STADE, HORAIRES, REJOINDRE_TUNNEL_URL } from '@/lib/infos';
import { TARIFS } from '@/lib/tarifs';

// Démo GitHub Pages : pas de canonique, la démo est déjà noindex (layout).
const IS_DEMO = (process.env.NEXT_PUBLIC_BASE_PATH ?? '/homepagepnr') !== '/';

export const metadata: Metadata = {
  title: 'Nos sections et créneaux d’entraînement',
  description:
    'Nos trois sections et tous les créneaux d’entraînement au stade de la Chambrerie à Tours : foot US au contact, flag mixte et flag pour les enfants.',
  ...(IS_DEMO ? {} : { alternates: { canonical: '/nos-sections/' } }),
  openGraph: {
    title: 'Nos sections et créneaux · Pionniers de Touraine',
    description:
      'Football américain, flag football et école de flag : les trois sections du club de Tours, leurs publics, leurs créneaux et leurs pages détaillées.',
    url: '/nos-sections/',
    type: 'article',
  },
};

/**
 * Les trois sections du club, dans l'ordre d'entrée dans la pratique :
 * contact, sans contact, enfants. Mêmes emojis 3D que la grille d'accueil.
 */
const SECTIONS = [
  {
    href: '/football-americain/',
    emoji: 'foot-us',
    alt: 'Emoji football américain',
    titre: 'Football américain',
    chips: ['Au contact', 'Seniors & juniors', 'Lun, mer & ven'],
    description:
      'La discipline historique du club, celle qui se joue avec casque et épaulières. L’équipe senior s’entraîne trois soirs par semaine et joue en championnat ; les juniors alternent foot US et flag pour préparer le passage chez les grands. Les débutants adultes sont la norme ici, pas l’exception : le contact s’apprend par étapes, en commençant par la technique de chute. L’équipement de protection est prêté pour les premières séances.',
  },
  {
    href: '/flag-football/',
    emoji: 'flag',
    alt: 'Emoji flag football',
    titre: 'Flag football',
    chips: ['Sans contact', 'Mixte', '5 contre 5', 'Lun & jeu'],
    description:
      'La version sans contact du football américain : on arrache un ruban à la ceinture du porteur de balle au lieu de le plaquer. Tout le reste demeure, les tracés, les combinaisons et la lecture du jeu, mais l’intensité vient de la vitesse plutôt que du choc. L’équipe seniors est mixte, femmes et hommes sur le même terrain, et joue en loisir comme en compétition. Le flag devient sport olympique aux Jeux de Los Angeles 2028.',
  },
  {
    href: '/ecole-de-flag/',
    emoji: 'jeunes-flag',
    alt: 'Emoji drapeau NFL Flag',
    titre: 'École de flag',
    chips: ['U7 à U18', 'Zéro contact', 'Samedi 10h-12h'],
    description:
      'La porte d’entrée du club pour les plus jeunes, le samedi matin au stade : le flag s’apprend par le jeu, sans aucun contact ni protection à prévoir. Les ceintures et les flags sont fournis, une tenue de sport et une gourde suffisent pour venir essayer.',
  },
];

/** Page de section vers laquelle renvoie chaque formule du récapitulatif. */
const PAGE_SECTION: Record<string, string> = {
  'foot-us': '/football-americain/',
  flag: '/flag-football/',
  ecole: '/ecole-de-flag/',
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          fil="Nos sections"
          chemin="/nos-sections/"
          eyebrow="Les collectifs du club"
          titre="Nos sections"
          sousTitre="Football américain, flag football et école de flag : trois façons de pratiquer chez les Pionniers de Touraine, sur un seul et même terrain à Tours Nord."
        >
          <div className="sc-chips" style={{ marginTop: 24 }}>
            <span className="sc-chip">Trois sections</span>
            <span className="sc-chip">U7 à U18 et seniors</span>
            <span className="sc-chip">Stade de la Chambrerie</span>
            <span className="sc-chip">Débutants bienvenus</span>
          </div>
        </PageHero>

        {/* ── Les trois sections ── */}
        <section className="sc-sec" id="sections">
          <YardLine n="10" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Choisir sa pratique</p>
              <h2 className="sc-title">Trois sections, un seul stade.</h2>
              <p className="sc-lead">
                Les Pionniers de Touraine font vivre <strong>trois sections</strong> au{' '}
                {STADE.nom}, à Tours Nord : le football américain au contact, le flag football mixte
                et sans contact, et l’école de flag pour les enfants. Toutes partagent le même
                encadrement, la même licence FFFA et la même semaine découverte offerte. Il ne reste
                qu’à choisir celle qui correspond à votre âge, à vos disponibilités et à votre envie
                de contact.
              </p>
            </div>

            <div className="sc-cards" data-reveal>
              {SECTIONS.map((s) => (
                <Link key={s.href} className="sc-card sc-card--grande" href={s.href}>
                  <div className="sc-card-badges">
                    <img
                      className="sc-card-badge"
                      src={getEmoji(s.emoji)}
                      alt={s.alt}
                      width={160}
                      height={160}
                    />
                  </div>
                  <h3 className="sc-card-title">{s.titre}</h3>
                  <div className="sc-chips">
                    {s.chips.map((c) => (
                      <span key={c} className="sc-chip">
                        {c}
                      </span>
                    ))}
                  </div>
                  <p className="sc-card-desc">{s.description}</p>
                  <span className="sc-card-cta">
                    Découvrir la section <ArrowRight size={15} strokeWidth={2.6} />
                  </span>
                </Link>
              ))}
            </div>

            <div className="sc-body" data-reveal style={{ marginTop: 34 }}>
              <h3 className="sc-h3">Pour aller plus loin</h3>
              <p className="sc-legal-text">
                Vous cherchez un créneau pour un enfant ou un adolescent ? Tout est réuni sur{' '}
                <Link href="/jeunes/">les sections jeunes</Link> : école de flag du samedi, flag
                mixte juniors du jeudi et juniors de football américain, avec leurs années de
                naissance et leurs tarifs. Une séance d’essai gratuite, puis une semaine découverte
                offerte : venez tester avant de vous licencier.
              </p>
              <p className="sc-legal-text">
                Avant de choisir, quelques repères écrits pour les curieux :{' '}
                <Link href="/blog/comment-pratiquer-le-football-americain-en-france/">
                  comment pratiquer le football américain en France
                </Link>
                ,{' '}
                <Link href="/blog/flag-football-cest-quoi/">le flag football, c’est quoi</Link>,{' '}
                <Link href="/blog/quel-sport-pour-mon-enfant-tours/">
                  quel sport pour mon enfant à Tours
                </Link>{' '}
                et{' '}
                <Link href="/blog/combien-coute-le-football-americain/">
                  combien coûte une saison
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ── Tous les créneaux ── */}
        <section className="sc-sec" id="horaires">
          <YardLine n="30" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Infos pratiques</p>
              <h2 className="sc-title">Tous les créneaux du club.</h2>
              <p className="sc-lead">
                Quatre collectifs se relaient sur le terrain, du lundi au samedi. Les horaires
                ci-dessous sont ceux de la saison en cours, au {STADE.nom}, {STADE.rue},{' '}
                {STADE.codePostal} {STADE.ville}.
              </p>
            </div>

            <div className="sc-panel" data-reveal style={{ marginTop: 34, maxWidth: 900 }}>
              <h3 className="sc-panel-title">Entraînements</h3>
              <div className="sc-horaires">
                {HORAIRES.map((h) => (
                  <div key={h.cat} className="sc-horaire">
                    <span className="sc-horaire-cat">{h.cat}</span>
                    <span className="sc-horaire-time">{h.creneaux.join(' / ')}</span>
                  </div>
                ))}
              </div>

              <h3 className="sc-panel-title" style={{ marginTop: 30 }}>
                Y accéder
              </h3>
              <ul className="sc-liste">
                <li>
                  En bus : ligne 2, arrêt Maréchal Juin, ou ligne 12, arrêt Chambrerie / Giraudoux,
                  à 5 minutes à pied.
                </li>
                <li>
                  En voiture : autoroute A10, sortie n°19 (Tours Nord) à 5 minutes, périphérique de
                  Tours Nord à 3 minutes.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Récapitulatif des tarifs ── */}
        <section className="sc-sec" id="tarifs">
          <YardLine n="50" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Adhésion 2026/2027</p>
              <h2 className="sc-title">Les tarifs, section par section.</h2>
              <p className="sc-lead">
                Cinq formules couvrent l’ensemble des collectifs du club, licence FFFA incluse dans
                chacune. Le détail de chaque formule est repris sur la page de sa section.
              </p>
            </div>
            <div
              data-reveal
              role="region"
              tabIndex={0}
              aria-label="Tarifs 2026/2027"
              style={{ overflowX: 'auto', marginTop: 30 }}
            >
              <table
                style={{
                  width: '100%',
                  minWidth: 620,
                  borderCollapse: 'collapse',
                  fontSize: 'clamp(14px, 1.2vw, 16px)',
                  color: 'var(--sc-cream-72)',
                  textAlign: 'left',
                }}
              >
                <thead>
                  <tr>
                    {['Formule', 'Public', 'Tarif', 'En 3 fois', 'Section'].map((c) => (
                      <th
                        key={c}
                        scope="col"
                        style={{
                          padding: '12px 14px',
                          borderBottom: '1px solid var(--sc-line)',
                          color: 'var(--rf-cream)',
                        }}
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TARIFS.map((t) => (
                    <tr key={t.nom}>
                      <th
                        scope="row"
                        style={{
                          padding: '12px 14px',
                          borderBottom: '1px solid var(--sc-line)',
                          color: 'var(--rf-cream)',
                          fontWeight: 700,
                        }}
                      >
                        {t.nom}
                      </th>
                      <td style={{ padding: '12px 14px', borderBottom: '1px solid var(--sc-line)' }}>
                        {t.qui}
                      </td>
                      <td style={{ padding: '12px 14px', borderBottom: '1px solid var(--sc-line)' }}>
                        {t.prixAffiche} {t.periode}
                      </td>
                      <td style={{ padding: '12px 14px', borderBottom: '1px solid var(--sc-line)' }}>
                        {t.paiement3x ?? 'Non'}
                      </td>
                      <td style={{ padding: '12px 14px', borderBottom: '1px solid var(--sc-line)' }}>
                        <Link href={PAGE_SECTION[t.section]}>Voir la section</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="sc-legal-text" data-reveal style={{ marginTop: 20 }}>
              La licence FFFA est incluse dans chaque formule. Pour les jeunes, le récapitulatif
              complet des créneaux et des catégories est sur{' '}
              <Link href="/jeunes/">football américain et flag pour les jeunes</Link>.
            </p>
          </div>
        </section>

        {/* ── CTA final ── */}
        <section className="sc-sec sc-endzone" id="essayer">
          <YardLine n="endzone" />
          <div className="sc-wrap" data-reveal>
            <p className="sc-eyebrow">Première séance</p>
            <h2 className="sc-title">Une section vous attend.</h2>
            <p className="sc-lead" style={{ maxWidth: 620 }}>
              La semaine découverte est offerte, sans licence ni engagement. Répondez à quelques
              questions et le staff vous indique le créneau qui vous correspond.
            </p>
            <div className="sc-ctas" style={{ justifyContent: 'center' }}>
              <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>
                Venir essayer
              </a>
              <Link className="sc-btn-ghost" href="/le-club/">
                Découvrir le club
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
