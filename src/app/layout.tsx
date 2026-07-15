import type { Metadata } from 'next';
import React from 'react';

// Charte partagée avec la landing « Nous rejoindre » (header + hero + sections),
// puis compléments homepage. L'ordre compte : les variables viennent de charte-hero.css.
import '@/styles/charte-hero.css';
import '@/styles/charte-sections.css';
import '@/styles/homepage.css';

import RevealObserver from '@/components/RevealObserver';
import { CLUB, STADE, RESEAUX } from '@/lib/infos';

const DEMO_URL = 'https://mahmoudel24rb-debug.github.io/homepagepnr';

export const metadata: Metadata = {
  // Canonique vers le domaine de production : la démo GitHub Pages
  // n'entre pas en concurrence SEO avec pionniersdetouraine.fr.
  metadataBase: new URL(CLUB.siteUrl),
  alternates: { canonical: '/' },
  title: 'Pionniers de Touraine · Club de football américain & flag football à Tours',
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
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Pionniers de Touraine',
    title: 'Pionniers de Touraine · Football américain & flag football à Tours',
    description:
      'Club de football américain et flag football à Tours depuis 1987. Seniors, juniors U18, flag mixte, école de flag. Semaine découverte offerte.',
    url: '/',
    images: [{ url: `${DEMO_URL}/assets/refonte/affiche-ppp.jpg`, width: 880, height: 1100, alt: 'Pionniers de Touraine · football américain' }],
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
  logo: `${DEMO_URL}/assets/refonte/logo-pionniers.svg`,
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
