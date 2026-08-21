import type { Metadata } from 'next';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { STADE, HORAIRES, RESEAUX } from '@/lib/infos';
import '@/styles/contact.css';

// Démo GitHub Pages : pas de canonical (et noindex hérité du layout).
const IS_DEMO = (process.env.NEXT_PUBLIC_BASE_PATH ?? '/homepagepnr') !== '/';

const EMAIL = 'recrutement@pionniersdetouraine.fr';
const TEL_AFFICHE = '07 87 01 80 26';
const TEL_LIEN = '+33787018026';

const ICONS = { Facebook: FaFacebookF, Instagram: FaInstagram, TikTok: FaTiktok } as const;

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

        <section className="ct-body">
          <div className="ct-grid">
            <ContactForm />

            <div>
              <div className="ct-panel">
                <h2 className="ct-infos-h">Coordonnées</h2>
                <address className="ct-list">
                  <span className="ct-row">
                    <FaEnvelope size={15} />
                    <span>
                      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                    </span>
                  </span>
                  <span className="ct-row">
                    <FaPhoneAlt size={15} />
                    <span>
                      <a href={`tel:${TEL_LIEN}`}>{TEL_AFFICHE}</a>
                    </span>
                  </span>
                  <span className="ct-row">
                    <FaMapMarkerAlt size={15} />
                    <span>
                      <strong>{STADE.nom}</strong>
                      <br />
                      {STADE.rue}
                      <br />
                      {STADE.codePostal} {STADE.ville}
                    </span>
                  </span>
                </address>
              </div>

              <div className="ct-panel">
                <h2 className="ct-infos-h">Horaires d&apos;entraînement</h2>
                {HORAIRES.map((h) => (
                  <div className="ct-horaire" key={h.cat}>
                    <span className="ct-horaire-cat">{h.cat}</span>
                    <span className="ct-horaire-time">{h.heures}</span>
                  </div>
                ))}
              </div>

              <div className="ct-panel">
                <h2 className="ct-infos-h">Nous suivre</h2>
                <div className="ct-socials">
                  {RESEAUX.map((r) => {
                    const Icon = ICONS[r.nom as keyof typeof ICONS];
                    return (
                      <a
                        key={r.nom}
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
      </main>
      <SiteFooter />
    </>
  );
}
