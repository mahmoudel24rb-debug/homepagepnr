import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { asset } from '@/lib/asset';
import { STADE, RESEAUX, REJOINDRE_URL } from '@/lib/infos';

const NAV = [
  { href: '#club', label: 'Le club' },
  { href: '#foot-us', label: 'Football américain' },
  { href: '#flag', label: 'Flag football' },
  { href: '#infos', label: 'Infos pratiques' },
  { href: '#faq', label: 'FAQ' },
  { href: REJOINDRE_URL, label: 'Nous rejoindre' },
];

const ICONS = { Facebook: FaFacebookF, Instagram: FaInstagram, TikTok: FaTiktok } as const;

const BADGES = [
  { src: '/assets/refonte/badge-1-footus.svg', alt: 'Foot US & Flag' },
  { src: '/assets/refonte/badge-2-olympique.svg', alt: 'Sport Olympique · JO de Los Angeles 2028' },
  { src: '/assets/refonte/badge-3-ppp.svg', alt: 'Programme PPP' },
  { src: '/assets/refonte/badge-4-u18.svg', alt: 'U18' },
  { src: '/assets/refonte/badge-5-ecole.svg', alt: 'École de Flag' },
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
            loading="lazy"
          />
          <p className="sc-footer-tagline">
            Club de football américain &amp; flag football à Tours depuis 1987. Sur le terrain ou
            à nos côtés, chacun a sa place chez les Pionniers.
          </p>
          <div className="sc-footer-badges">
            {BADGES.map((b) => (
              <img key={b.alt} src={asset(b.src)} alt={b.alt} loading="lazy" />
            ))}
          </div>
          <div className="hp-socials">
            {RESEAUX.map((r) => {
              const Icon = ICONS[r.nom as keyof typeof ICONS];
              return (
                <a key={r.nom} href={r.url} target="_blank" rel="noopener noreferrer" aria-label={r.nom}>
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="sc-footer-h">Explorer</h3>
          <nav className="sc-footer-links" aria-label="Navigation pied de page">
            {NAV.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <h3 className="sc-footer-h">Le stade</h3>
          <address className="sc-footer-links hp-address">
            <span style={{ fontSize: 14, letterSpacing: '-0.02em', color: 'var(--sc-cream-55)' }}>
              {STADE.nom}
              <br />
              {STADE.rue}
              <br />
              {STADE.codePostal} {STADE.ville}
            </span>
          </address>
        </div>
      </div>
      <div className="sc-footer-bottom">
        <span>© Pionniers de Touraine · Tous droits réservés.</span>
        <span>
          Réalisé par <strong>DGL Agency</strong>
        </span>
      </div>
    </footer>
  );
}
