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
import { CLUB, STADE, RESEAUX } from '@/lib/infos';

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
    default: 'Pionniers de Touraine · Club de Football Américain et Flag à Tours',
    template: '%s | Pionniers de Touraine',
  },
  description:
    'Football américain et flag football à Tours depuis 1987 : seniors, juniors U18, flag mixte et école de flag. Entraînements au stade de la Chambrerie. Semaine découverte offerte.',
  keywords: [
    'football américain Tours',
    'flag football Tours',
    'club football américain Touraine',
    'football américain Indre-et-Loire',
    'école de flag Tours',
    'Pionniers de Touraine',
  ],
  robots: IS_DEMO ? { index: false, follow: false } : { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Pionniers de Touraine',
    title: 'Pionniers de Touraine · Football américain & flag football à Tours',
    description:
      'Club de football américain et flag football à Tours depuis 1987. Seniors, juniors U18, flag mixte, école de flag. Semaine découverte offerte.',
    url: '/',
    images: [{ url: `${SITE_URL}/assets/refonte/affiche-ppp.jpg`, width: 880, height: 1100, alt: 'Pionniers de Touraine · football américain' }],
  },
};

// Données structurées : le club sportif, son stade et ses réseaux.
const CLUB_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'SportsClub',
  name: CLUB.nom,
  url: CLUB.siteUrl,
  description: CLUB.description,
  foundingDate: CLUB.fondation,
  sport: ['American Football', 'Flag Football'],
  logo: `${SITE_URL}/assets/refonte/logo-pionniers.svg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${STADE.nom}, ${STADE.rue}`,
    postalCode: STADE.codePostal,
    addressLocality: STADE.ville,
    addressRegion: STADE.region,
    addressCountry: STADE.pays,
  },
  sameAs: [...RESEAUX.map((r) => r.url), 'https://maps.app.goo.gl/cnVghabaHrhx9qaQA'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {/* Préchargements LCP : fond du hero + polices (les <link> preload sont
            valides dans <body> et traités immédiatement par le navigateur). */}
        <link rel="preload" as="image" href={asset('/assets/refonte/fond-hero.webp')} />
        <link rel="preload" as="font" type="font/otf" href={asset('/assets/fonts/FuturaStdCondensedExtraBd.otf')} crossOrigin="anonymous" />
        <link rel="preload" as="font" type="font/ttf" href={asset('/assets/fonts/NeuethingSans-RegularSemiExpanded.ttf')} crossOrigin="anonymous" />
        <link rel="preload" as="font" type="font/ttf" href={asset('/assets/fonts/NeuethingSans-BoldSemiExpanded.ttf')} crossOrigin="anonymous" />
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
