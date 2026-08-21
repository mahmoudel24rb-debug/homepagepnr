import type { Metadata } from 'next';
import React from 'react';

// Charte partagée avec la landing « Nous rejoindre » (header pilule + hero + tokens),
// puis le thème éditorial clair de la homepage. L'ordre compte :
// les variables (--rf-*) viennent de charte-hero.css.
import '@/styles/charte-hero.css';
import '@/styles/homepage.css';

import RevealObserver from '@/components/RevealObserver';
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
  sameAs: RESEAUX.map((r) => r.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {children}
        <RevealObserver />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(CLUB_JSONLD) }}
        />
      </body>
    </html>
  );
}
