import type { Metadata } from 'next';
import React from 'react';
import Script from 'next/script';

// Charte du site de recrutement, dupliquée à l'identique : refonte.css
// (header pilule + hero + tokens --rf-*) PUIS sections.css, qui consomme
// ces variables. L'ordre compte.
import '@/styles/refonte.css';
import '@/styles/sections.css';

import RevealObserver from '@/components/RevealObserver';
import { LangProvider } from '@/lib/i18n';
import { GC_SITE } from '@/lib/track';
import { asset } from '@/lib/asset';
import { CLUB, STADE, CONTACT, HORAIRES, RESEAUX, GOOGLE_MAPS_URL, FEDERATION } from '@/lib/infos';

// Domaine de production : sert de base aux URLs absolues (image OG, JSON-LD),
// même quand le build cible la démo GitHub Pages.
const SITE_URL = CLUB.siteUrl;

// Démo GitHub Pages (basePath non vide) : noindex pour ne pas concurrencer la
// prod. Prod o2switch (NEXT_PUBLIC_BASE_PATH='/') : indexable.
const IS_DEMO = (process.env.NEXT_PUBLIC_BASE_PATH ?? '/homepagepnr') !== '/';

export const metadata: Metadata = {
  // Canonique vers le domaine de production : la démo GitHub Pages
  // n'entre pas en concurrence SEO avec pionniersdetouraine.fr.
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  title: {
    default: 'Football américain et flag à Tours | Pionniers de Touraine',
    // Suffixe court : « | Pionniers de Touraine » coûtait 24 caractères et
    // faisait dépasser 60 caractères à 28 des 38 titles du site.
    template: '%s | Pionniers',
  },
  description:
    'Football américain et flag football à Tours depuis 1987 : seniors, juniors U18, flag mixte et école de flag dès 5 ans. Semaine découverte offerte.',
  robots: IS_DEMO ? { index: false, follow: false } : { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Pionniers de Touraine',
    title: 'Football américain et flag football à Tours | Pionniers de Touraine',
    description:
      'Club de football américain et flag football à Tours depuis 1987. Seniors, juniors U18, flag mixte, école de flag. Semaine découverte offerte.',
    url: '/',
    images: [{ url: `${SITE_URL}/assets/refonte/affiche-ppp.jpg`, width: 880, height: 1100, alt: 'Pionniers de Touraine · football américain' }],
  },
};

/**
 * Créneaux d'ouverture pour schema.org : union des horaires officiels de
 * HORAIRES (src/lib/infos.ts), une seule plage par jour, de la première
 * ouverture à la dernière fermeture. Source unique : si le club change un
 * créneau dans infos.ts, les données structurées suivent.
 */
// Clés en minuscules : « Lundi & vendredi » mêle majuscule et minuscule.
const JOURS_EN: Record<string, string> = {
  lundi: 'Monday',
  mardi: 'Tuesday',
  mercredi: 'Wednesday',
  jeudi: 'Thursday',
  vendredi: 'Friday',
  samedi: 'Saturday',
  dimanche: 'Sunday',
};
const ORDRE_JOURS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function creneauxParJour() {
  const plages = new Map<string, { opens: string; closes: string }>();
  for (const horaire of HORAIRES) {
    for (const creneau of horaire.creneaux) {
      // Format attendu : « Lundi & vendredi · 20h00 à 23h00 »
      const [jours, heures] = creneau.split(' · ');
      if (!jours || !heures) continue;
      const [opens, closes] = heures.split(' à ').map((t) => t.trim().replace('h', ':'));
      if (!opens || !closes) continue;
      for (const jour of jours.split(' & ')) {
        const day = JOURS_EN[jour.trim().toLowerCase()];
        if (!day) continue;
        const actuel = plages.get(day);
        plages.set(day, {
          opens: actuel && actuel.opens < opens ? actuel.opens : opens,
          closes: actuel && actuel.closes > closes ? actuel.closes : closes,
        });
      }
    }
  }
  return ORDRE_JOURS.filter((day) => plages.has(day)).map((day) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: day,
    opens: plages.get(day)!.opens,
    closes: plages.get(day)!.closes,
  }));
}

// Données structurées : le club sportif (nœud d'identité réutilisé par les
// articles du blog via son @id) et le site lui-même.
// Pas de `geo` : les coordonnées seront relevées sur la fiche Google, jamais
// estimées.
const CLUB_JSONLD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SportsClub',
      '@id': `${SITE_URL}/#organization`,
      name: CLUB.nom,
      alternateName: 'Les Pionniers de Touraine',
      url: CLUB.siteUrl,
      description: CLUB.description,
      foundingDate: CLUB.fondation,
      sport: ['American Football', 'Flag Football'],
      logo: `${SITE_URL}/assets/refonte/logo-pionniers.svg`,
      image: `${SITE_URL}/assets/refonte/affiche-ppp.jpg`,
      telephone: CONTACT.telE164,
      email: CONTACT.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${STADE.nom}, ${STADE.rue}`,
        postalCode: STADE.codePostal,
        addressLocality: STADE.ville,
        addressRegion: STADE.region,
        addressCountry: STADE.pays,
      },
      areaServed: [
        { '@type': 'City', name: 'Tours' },
        { '@type': 'AdministrativeArea', name: 'Indre-et-Loire' },
      ],
      hasMap: GOOGLE_MAPS_URL,
      // Coordonnees relevees sur la fiche Google Business du club (10/09/2026).
      geo: { '@type': 'GeoCoordinates', latitude: 47.4167151, longitude: 0.7102265 },
      memberOf: {
        '@type': 'SportsOrganization',
        name: FEDERATION.nom,
        alternateName: FEDERATION.sigle,
      },
      openingHoursSpecification: creneauxParJour(),
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'recrutement',
          telephone: CONTACT.telE164,
          email: CONTACT.email,
          availableLanguage: ['fr', 'en'],
          areaServed: 'FR',
        },
      ],
      sameAs: [...RESEAUX.map((r) => r.url), GOOGLE_MAPS_URL],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: CLUB.siteUrl,
      name: 'Pionniers de Touraine',
      inLanguage: 'fr-FR',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {/* Préchargements LCP, réduits au strict nécessaire : le fond du hero
            (élément LCP) et les deux polices du premier écran, en woff2 (les
            <link> preload sont valides dans <body> et traités immédiatement).
            Le Neuething Bold n'est PAS préchargé : il ne sert qu'aux surtitres
            et se charge très bien via son @font-face (font-display: swap). */}
        <link rel="preload" as="image" href={asset('/assets/refonte/fond-hero.webp')} />
        <link rel="preload" as="font" type="font/woff2" href={asset('/assets/fonts/FuturaStdCondensedExtraBd.woff2')} crossOrigin="anonymous" />
        <link rel="preload" as="font" type="font/woff2" href={asset('/assets/fonts/NeuethingSans-RegularSemiExpanded.woff2')} crossOrigin="anonymous" />
        {/* Ancre réelle en haut du flux : le header est fixed (hors flux), un
            #top pointant sur lui ne déclenche aucun défilement. */}
        <div id="top" />
        {/* Les composants repris de la landing consomment useLang. */}
        <LangProvider>{children}</LangProvider>
        <RevealObserver />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(CLUB_JSONLD) }}
        />
        {/* mesure d'audience : activée seulement si un code site GoatCounter est renseigné (src/lib/track.ts) */}
        {GC_SITE ? (
          <Script
            data-goatcounter={`https://${GC_SITE}.goatcounter.com/count`}
            src="https://gc.zgo.at/count.js"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
