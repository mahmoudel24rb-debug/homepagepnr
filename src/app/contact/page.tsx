import type { Metadata } from 'next';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import InfosSection from '@/components/InfosSection';
import { CONTACT, STADE, RESEAUX } from '@/lib/infos';

// Démo GitHub Pages : pas de canonical (et noindex hérité du layout).
const IS_DEMO = (process.env.NEXT_PUBLIC_BASE_PATH ?? '/homepagepnr') !== '/';

const ICONS = { Facebook: FaFacebookF, Instagram: FaInstagram, TikTok: FaTiktok } as const;

/** Ligne de coordonnée : pastille ambre + libellé, sur le verre du panneau. */
const ROW: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 14,
  padding: '14px 2px',
  borderTop: '1px solid var(--sc-line)',
  fontFamily: "'Neuething', sans-serif",
  fontSize: 15,
  lineHeight: 1.55,
  letterSpacing: '-0.02em',
  color: 'var(--sc-cream-72)',
};

const PASTILLE: React.CSSProperties = {
  flex: '0 0 auto',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 34,
  height: 34,
  borderRadius: '50%',
  background: 'rgba(255, 173, 0, 0.12)',
  border: '1px solid rgba(255, 173, 0, 0.3)',
  color: 'var(--rf-amber)',
};

const LIEN: React.CSSProperties = {
  color: 'var(--rf-amber)',
  fontWeight: 700,
  textDecoration: 'none',
};

const RESEAU: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 42,
  height: 42,
  borderRadius: '50%',
  background: 'rgba(255, 250, 240, 0.05)',
  border: '1px solid rgba(255, 250, 240, 0.14)',
  color: 'var(--rf-cream)',
};

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contacter les Pionniers de Touraine : partenariat, question sur le club, presse. Formulaire, email, téléphone et adresse du stade de la Chambrerie à Tours.',
  ...(IS_DEMO ? {} : { alternates: { canonical: '/contact/' } }),
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          fil="Contact"
          chemin="/contact/"
          eyebrow="Nous écrire"
          titre="Contacter les Pionniers"
          sousTitre="Partenariat, question sur le club, demande presse ou simple curiosité : le staff vous répond. Pour rejoindre une équipe, passez plutôt par notre site de recrutement."
        />

        <section className="sc-sec" id="ecrire">
          <div className="sc-wrap">
            <div className="sc-infos-grid" data-reveal>
              <ContactForm />

              <div className="sc-panel">
                <h2 className="sc-panel-title">Coordonnées</h2>
                <address style={{ fontStyle: 'normal', display: 'grid' }}>
                  <span style={ROW}>
                    <span style={PASTILLE} aria-hidden="true">
                      <FaEnvelope size={14} />
                    </span>
                    <span>
                      <a style={LIEN} href={`mailto:${CONTACT.email}`}>
                        {CONTACT.email}
                      </a>
                    </span>
                  </span>
                  <span style={ROW}>
                    <span style={PASTILLE} aria-hidden="true">
                      <FaPhoneAlt size={14} />
                    </span>
                    <span>
                      <a style={LIEN} href={CONTACT.telHref}>
                        {CONTACT.telephone}
                      </a>
                    </span>
                  </span>
                  <span style={ROW}>
                    <span style={PASTILLE} aria-hidden="true">
                      <FaMapMarkerAlt size={14} />
                    </span>
                    <span>
                      <strong style={{ color: 'var(--rf-cream)', fontWeight: 700 }}>
                        {STADE.nom}
                      </strong>
                      <br />
                      {STADE.rue}
                      <br />
                      {STADE.codePostal} {STADE.ville}
                    </span>
                  </span>
                </address>

                <h2 className="sc-panel-title" style={{ marginTop: 30 }}>
                  Nous suivre
                </h2>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {RESEAUX.map((r) => {
                    const Icon = ICONS[r.nom as keyof typeof ICONS];
                    return (
                      <a
                        key={r.nom}
                        style={RESEAU}
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={r.nom}
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <InfosSection />
      </main>
      <SiteFooter />
    </>
  );
}
