import React from 'react';
import Link from 'next/link';
import { CLUB } from '@/lib/infos';

/**
 * Gabarit d'en-tête des pages intérieures : bande sombre compensant le header
 * fixe, fil d'Ariane (Accueil / {page}), H1 et sous-titre optionnel.
 * Émet aussi le BreadcrumbList (données structurées) de la page.
 */
type Props = {
  /** Libellé de la page dans le fil d'Ariane (et dans le BreadcrumbList). */
  fil: string;
  /** Chemin canonique de la page, avec slash final : « /le-club/ ». */
  chemin: string;
  /** Surtitre ambre optionnel, au-dessus du H1. */
  eyebrow?: string;
  titre: React.ReactNode;
  sousTitre?: React.ReactNode;
  /** Contenu libre sous le sous-titre (CTA, chips, repères). */
  children?: React.ReactNode;
};

export default function PageHero({ fil, chemin, eyebrow, titre, sousTitre, children }: Props) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${CLUB.siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: fil, item: `${CLUB.siteUrl}${chemin}` },
    ],
  };

  return (
    <section className="hp-dark ph-hero">
      <div className="hp-wrap">
        <nav className="ph-crumb" aria-label="Fil d’Ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{fil}</span>
        </nav>
        {eyebrow ? <p className="hp-eyebrow">{eyebrow}</p> : null}
        <h1 className="ph-title">{titre}</h1>
        {sousTitre ? <p className="ph-sub">{sousTitre}</p> : null}
        {children}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </section>
  );
}
