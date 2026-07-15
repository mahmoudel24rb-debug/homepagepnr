'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { asset } from '@/lib/asset';
import { REJOINDRE_URL } from '@/lib/infos';

const LINKS = [
  { href: '#club', label: 'Le club' },
  { href: '#disciplines', label: 'Disciplines' },
  { href: '#jeunes', label: 'Jeunes' },
  { href: '#infos', label: 'Infos pratiques' },
  { href: '#faq', label: 'FAQ' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="rf-header" id="top">
      <nav className="rf-nav" aria-label="Navigation principale">
        <a href="#top" aria-label="Accueil Pionniers de Touraine">
          <img className="rf-logo" src={asset('/assets/refonte/logo-pionniers.svg')} alt="Pionniers de Touraine" />
        </a>

        <div className="rf-links">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </div>

        <div className="rf-right">
          <a className="rf-join" href={REJOINDRE_URL}>Nous rejoindre</a>
          <button className="rf-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        <div className={`rf-mobile-menu ${open ? 'open' : ''}`}>
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a className="rf-join" href={REJOINDRE_URL} onClick={() => setOpen(false)}>Nous rejoindre</a>
        </div>
      </nav>
    </header>
  );
}
