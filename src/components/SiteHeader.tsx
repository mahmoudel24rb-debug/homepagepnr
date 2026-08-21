'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { asset } from '@/lib/asset';
import { REJOINDRE_TUNNEL_URL } from '@/lib/infos';

// Navigation multipage : toutes les routes se terminent par « / »
// (trailingSlash activé dans next.config.mjs).
const LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/le-club/', label: 'Le club' },
  { href: '/football-americain/', label: 'Foot US' },
  { href: '/flag-football/', label: 'Flag' },
  { href: '/ecole-de-flag/', label: 'École de flag' },
  { href: '/partenaires/', label: 'Partenaires' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // L'accueil ne doit s'activer que sur « / » exactement ; les autres routes
  // s'activent aussi sur leurs sous-pages (ex. un article de blog).
  const estActif = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href);

  return (
    <header className="rf-header" id="top">
      <nav className="rf-nav" aria-label="Navigation principale">
        <Link href="/" aria-label="Accueil Pionniers de Touraine">
          <img className="rf-logo" src={asset('/assets/refonte/logo-pionniers.svg')} alt="Pionniers de Touraine" />
        </Link>

        <div className="rf-links">
          {LINKS.map((l) => {
            const actif = estActif(l.href);
            return (
              <Link
                key={l.label}
                href={l.href}
                className={actif ? 'on' : undefined}
                aria-current={actif ? 'page' : undefined}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="rf-right">
          <a className="rf-join" href={REJOINDRE_TUNNEL_URL}>Nous rejoindre</a>
          <button className="rf-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        <div className={`rf-mobile-menu ${open ? 'open' : ''}`}>
          {LINKS.map((l) => {
            const actif = estActif(l.href);
            return (
              <Link
                key={l.label}
                href={l.href}
                className={actif ? 'on' : undefined}
                aria-current={actif ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            );
          })}
          <a className="rf-join" href={REJOINDRE_TUNNEL_URL} onClick={() => setOpen(false)}>Nous rejoindre</a>
        </div>
      </nav>
    </header>
  );
}
