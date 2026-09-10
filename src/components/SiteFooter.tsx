import Link from 'next/link';
import { asset } from '@/lib/asset';
import { BOUTIQUE_URL, CONTACT, REJOINDRE_URL, STADE } from '@/lib/infos';

/**
 * Pied de page du site vitrine : gabarit .sc-footer* de la landing de
 * recrutement, avec trois colonnes de liens (pages du site, sites du club,
 * contact) et la barre de bas de page (mentions + confidentialité).
 */
const CALENDRIER_URL = 'https://calendrier.pionniersdetouraine.fr/';

const EXPLORER = [
  { href: '/le-club/', label: 'Le club' },
  { href: '/nos-sections/', label: 'Nos sections' },
  { href: '/football-americain/', label: 'Football américain' },
  { href: '/flag-football/', label: 'Flag football' },
  { href: '/ecole-de-flag/', label: 'École de flag' },
  { href: '/partenaires/', label: 'Partenaires' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact' },
];

const EN_LIGNE = [
  { href: REJOINDRE_URL, label: 'Site de recrutement' },
  { href: BOUTIQUE_URL, label: 'Boutique officielle' },
  { href: CALENDRIER_URL, label: 'Calendrier des matchs' },
];

/**
 * Badges du pied de page. `width`/`height` = dimensions intrinsèques réelles
 * des fichiers (viewBox pour le SVG), pour réserver le ratio avant chargement.
 * La hauteur affichée reste imposée par le CSS (.sc-footer-badges img).
 */
const BADGES = [
  { src: '/assets/refonte/badge-1-footus.webp', alt: 'Foot US & Flag', width: 560, height: 400 },
  {
    src: '/assets/refonte/badge-2-olympique.webp',
    alt: 'Sport Olympique · JO de Los Angeles 2028',
    width: 400,
    height: 400,
  },
  { src: '/assets/refonte/badge-3-ppp.svg', alt: 'Programme PPP', width: 72, height: 61 },
  { src: '/assets/refonte/badge-4-u18.webp', alt: 'U18', width: 460, height: 400 },
  { src: '/assets/refonte/badge-5-ecole.webp', alt: 'École de Flag', width: 462, height: 400 },
];

export default function SiteFooter() {
  return (
    <footer className="sc-footer">
      <div className="sc-wrap sc-footer-grid">
        <div>
          <img
            className="sc-footer-logo"
            src={asset('/assets/refonte/logo-pionniers.svg')}
            alt="Pionniers de Touraine"
            width={80}
            height={53}
            loading="lazy"
          />
          <p className="sc-footer-tagline">
            Football américain &amp; flag football à Tours depuis 1987. Sur le terrain ou à nos
            côtés, trouve ta place chez les Pionniers.
          </p>
          <div className="sc-footer-badges">
            {BADGES.map((b) => (
              <img
                key={b.alt}
                src={asset(b.src)}
                alt={b.alt}
                width={b.width}
                height={b.height}
                loading="lazy"
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="sc-footer-h">Explorer</h3>
          <nav className="sc-footer-links">
            {EXPLORER.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="sc-footer-h">Le club en ligne</h3>
          <nav className="sc-footer-links">
            {EN_LIGNE.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            ))}
          </nav>

          <h3 className="sc-footer-h" style={{ marginTop: 28 }}>
            Contact
          </h3>
          <div className="sc-footer-links">
            <a href={CONTACT.telHref}>{CONTACT.telephone}</a>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <span style={{ fontSize: 14, letterSpacing: '-0.02em', color: 'var(--sc-cream-55)' }}>
              {STADE.nom}, {STADE.rue}
              <br />
              {STADE.codePostal} {STADE.ville}
            </span>
          </div>
        </div>
      </div>

      <div className="sc-footer-bottom">
        <span>© {new Date().getFullYear()} Pionniers de Touraine · Tous droits réservés.</span>
        <span style={{ display: 'inline-flex', gap: 18, flexWrap: 'wrap' }}>
          <Link href="/mentions-legales/">Mentions légales</Link>
          <Link href="/politique-de-confidentialite/">Politique de confidentialité</Link>
        </span>
      </div>
    </footer>
  );
}
