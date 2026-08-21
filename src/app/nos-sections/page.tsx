import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import YardLine from '@/components/YardLine';
import { getEmoji } from '@/lib/funnelIcons';
import { STADE, HORAIRES, REJOINDRE_TUNNEL_URL } from '@/lib/infos';

// Démo GitHub Pages : pas de canonique, la démo est déjà noindex (layout).
const IS_DEMO = (process.env.NEXT_PUBLIC_BASE_PATH ?? '/homepagepnr') !== '/';

export const metadata: Metadata = {
  title: 'Nos sections : foot US, flag, école de flag',
  description:
    'Les trois sections des Pionniers de Touraine à Tours : football américain au contact, flag football mixte sans contact et école de flag le samedi matin.',
  ...(IS_DEMO ? {} : { alternates: { canonical: '/nos-sections/' } }),
  openGraph: {
    title: 'Nos sections · Pionniers de Touraine',
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
    chips: ['Dès 6 à 8 ans', 'Zéro contact', 'Samedi 10h-12h'],
    description:
      'La porte d’entrée du club pour les plus jeunes, le samedi matin au stade. Les enfants apprennent le flag par le jeu : courir, attraper, lancer, se démarquer et tenir son rôle sur une action. Le règlement interdit le contact, il n’y a donc ni casque ni protection à prévoir. Les ceintures et les flags sont fournis par le club : une tenue de sport et une gourde suffisent pour venir essayer.',
  },
];

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
            <span className="sc-chip">De 6 ans aux seniors</span>
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
                    <img className="sc-card-badge" src={getEmoji(s.emoji)} alt={s.alt} loading="lazy" />
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
