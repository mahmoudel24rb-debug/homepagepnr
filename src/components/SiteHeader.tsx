'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaPhoneAlt, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { asset } from '@/lib/asset';
import { CONTACT, REJOINDRE_TUNNEL_URL } from '@/lib/infos';

/**
 * Header du site vitrine : même pilule de verre bordeaux que le site de
 * recrutement (classes .rf-*), mais navigation en vraies routes next/link
 * avec état actif, et une entrée « Nos sections » à sous-menu.
 * Pas de bascule de langue ici : le site est monolingue (français).
 */
const SOUS_SECTIONS = [
  { href: '/football-americain/', label: 'Football américain' },
  { href: '/flag-football/', label: 'Flag football' },
  { href: '/ecole-de-flag/', label: 'École de flag' },
  { href: '/jeunes/', label: 'Jeunes' },
];

const LIENS_APRES = [
  { href: '/partenaires/', label: 'Partenaires' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact' },
];

/** Délai de grâce avant fermeture : le pointeur peut traverser le vide. */
const DELAI_FERMETURE = 150;

export default function SiteHeader() {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [sousMenu, setSousMenu] = useState(false);
  const pathname = usePathname();
  const sousMenuRef = useRef<HTMLDivElement>(null);
  const minuterie = useRef<number | null>(null);

  // Le pathname est préfixé par le basePath sur la démo GitHub Pages :
  // on compare donc sur la fin du chemin, jamais sur l'égalité stricte.
  const estActif = (href: string) => Boolean(pathname?.endsWith(href));
  const sectionActive = SOUS_SECTIONS.some((s) => estActif(s.href)) || estActif('/nos-sections/');

  const annulerFermeture = () => {
    if (minuterie.current !== null) {
      window.clearTimeout(minuterie.current);
      minuterie.current = null;
    }
  };
  const ouvrirSousMenu = () => {
    annulerFermeture();
    setSousMenu(true);
  };
  const fermerSousMenuDifferee = () => {
    annulerFermeture();
    minuterie.current = window.setTimeout(() => setSousMenu(false), DELAI_FERMETURE);
  };

  useEffect(() => annulerFermeture, []);

  // Fermeture du sous-menu à la touche Échap et au clic extérieur.
  useEffect(() => {
    if (!sousMenu) return;
    const surTouche = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSousMenu(false);
    };
    const surClic = (e: MouseEvent) => {
      if (!sousMenuRef.current?.contains(e.target as Node)) setSousMenu(false);
    };
    document.addEventListener('keydown', surTouche);
    document.addEventListener('mousedown', surClic);
    return () => {
      document.removeEventListener('keydown', surTouche);
      document.removeEventListener('mousedown', surClic);
    };
  }, [sousMenu]);

  // Toute navigation referme les menus (le layout ne se remonte pas).
  useEffect(() => {
    setMenuOuvert(false);
    setSousMenu(false);
  }, [pathname]);

  return (
    <header className="rf-header">
      <nav className="rf-nav">
        <Link href="/" aria-label="Accueil">
          <img
            className="rf-logo"
            src={asset('/assets/refonte/logo-pionniers.svg')}
            alt="Pionniers de Touraine"
            width={80}
            height={53}
            fetchPriority="low"
          />
        </Link>

        <div className="rf-links">
          <Link href="/le-club/" className={estActif('/le-club/') ? 'is-active' : undefined}>
            Le club
          </Link>

          <div
            className="rf-sub"
            ref={sousMenuRef}
            onMouseEnter={ouvrirSousMenu}
            onMouseLeave={fermerSousMenuDifferee}
            onFocusCapture={ouvrirSousMenu}
            onBlurCapture={(e) => {
              // Le focus quitte réellement le groupe (et non un enfant vers un autre).
              if (!e.currentTarget.contains(e.relatedTarget as Node)) setSousMenu(false);
            }}
          >
            <Link
              href="/nos-sections/"
              className={sectionActive ? 'is-active' : undefined}
              aria-haspopup="true"
              aria-expanded={sousMenu}
              onClick={(e) => {
                // Écran tactile : le premier appui ouvre le sous-menu,
                // le second (le lien étant déjà ouvert) navigue.
                if (!sousMenu && window.matchMedia('(hover: none)').matches) {
                  e.preventDefault();
                  setSousMenu(true);
                }
              }}
            >
              Nos sections
              <span className={`rf-sub-caret ${sousMenu ? 'open' : ''}`} aria-hidden="true">
                <FaChevronDown size={10} />
              </span>
            </Link>

            <div className={`rf-sub-menu ${sousMenu ? 'open' : ''}`}>
              {SOUS_SECTIONS.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className={`rf-sub-item ${estActif(s.href) ? 'is-active' : ''}`}
                  tabIndex={sousMenu ? undefined : -1}
                  onClick={() => setSousMenu(false)}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {LIENS_APRES.map((l) => (
            <Link key={l.href} href={l.href} className={estActif(l.href) ? 'is-active' : undefined}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="rf-right">
          <a className="rf-phone" href={CONTACT.telHref}>
            <FaPhoneAlt size={14} />
            <span>{CONTACT.telephone}</span>
          </a>
          <a className="rf-join" href={REJOINDRE_TUNNEL_URL}>
            Nous rejoindre
          </a>
          <button className="rf-burger" aria-label="Menu" aria-expanded={menuOuvert} onClick={() => setMenuOuvert((v) => !v)}>
            {menuOuvert ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        <div className={`rf-mobile-menu ${menuOuvert ? 'open' : ''}`}>
          <Link href="/le-club/" onClick={() => setMenuOuvert(false)}>Le club</Link>
          <Link href="/nos-sections/" onClick={() => setMenuOuvert(false)}>Nos sections</Link>
          {SOUS_SECTIONS.map((s) => (
            <Link key={s.href} href={s.href} className="rf-sub-item" onClick={() => setMenuOuvert(false)}>
              {s.label}
            </Link>
          ))}
          {LIENS_APRES.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOuvert(false)}>
              {l.label}
            </Link>
          ))}
          <a
            className="rf-phone-mobile"
            href={CONTACT.telHref}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}
          >
            <FaPhoneAlt size={13} /> {CONTACT.telephone}
          </a>
          <a className="rf-join" href={REJOINDRE_TUNNEL_URL} onClick={() => setMenuOuvert(false)}>
            Nous rejoindre
          </a>
        </div>
      </nav>
    </header>
  );
}
