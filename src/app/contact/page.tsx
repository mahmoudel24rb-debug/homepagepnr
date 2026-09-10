import type { Metadata } from 'next';
import Link from 'next/link';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import InfosSection from '@/components/InfosSection';
import YardLine from '@/components/YardLine';
import FaqSection from '@/components/FaqSection';
import { CONTACT, STADE, RESEAUX } from '@/lib/infos';

// Démo GitHub Pages : pas de canonical (et noindex hérité du layout).
const IS_DEMO = (process.env.NEXT_PUBLIC_BASE_PATH ?? '/homepagepnr') !== '/';

/** Fiche Google du club : itinéraire vers le stade. */
const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/cnVghabaHrhx9qaQA';

/** FAQ de la page, affichée et exposée en données structurées FAQPage. */
const FAQ = [
  {
    q: 'Comment venir au stade ?',
    r: 'Le stade de la Chambrerie se trouve rue Tartifume, 37100 Tours, à Tours Nord. En bus : ligne 2, arrêt Maréchal Juin, ou ligne 12, arrêt Chambrerie / Giraudoux, puis 5 minutes à pied. En voiture : autoroute A10, sortie n°19 (Tours Nord) à 5 minutes, périphérique de Tours Nord à 3 minutes.',
  },
  {
    q: 'Quand puis-je passer voir un entraînement ?',
    r: 'Les créneaux vont du lundi au samedi. Seniors foot US : lundi et vendredi de 20h00 à 23h00, mercredi de 21h00 à 23h00. Flag mixte seniors : lundi et jeudi de 20h15 à 22h45. Juniors foot US : lundi et jeudi de 19h00 à 21h00. Flag mixte juniors : jeudi de 19h00 à 20h30. École de flag : samedi de 10h00 à 12h00.',
  },
  {
    q: 'Comment s’inscrire ?',
    r: `Le parcours « Nous rejoindre » en ligne prend deux minutes et oriente vers la bonne section. Vous pouvez aussi écrire à ${CONTACT.email} ou appeler le ${CONTACT.telephone}. Une semaine découverte est offerte avant toute inscription : la licence FFFA est ensuite incluse dans les formules d’adhésion.`,
  },
];

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
  title: 'Contact et accès au stade de la Chambrerie',
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
          titre="Contacter les Pionniers de Touraine à Tours"
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

                <div className="sc-ctas" style={{ marginTop: 18 }}>
                  <a
                    className="sc-btn"
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Itinéraire vers le stade de la Chambrerie"
                    style={{ whiteSpace: 'normal', textAlign: 'center', maxWidth: '100%' }}
                  >
                    Itinéraire vers le stade
                  </a>
                </div>

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

        {/* ── À qui s'adresser ── */}
        <section className="sc-sec" id="qui-contacter">
          <YardLine n="20" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">À qui s’adresser</p>
              <h2 className="sc-title">Écrire au bon interlocuteur.</h2>
            </div>
            <div className="sc-two" data-reveal>
              <div className="sc-body">
                <h3 className="sc-h3">Rejoindre une équipe</h3>
                <p className="sc-legal-text">
                  Pour jouer, encadrer ou donner un coup de main, le plus rapide reste le parcours
                  « Nous rejoindre » en ligne : quelques questions, deux minutes, et le staff vous
                  oriente vers la section qui vous correspond. Vous pouvez aussi écrire directement
                  à <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> ou appeler le{' '}
                  <a href={CONTACT.telHref}>{CONTACT.telephone}</a>. Les trois sections du club sont
                  détaillées sur <Link href="/nos-sections/">nos sections</Link>.
                </p>
                <h3 className="sc-h3">Inscrire un enfant</h3>
                <p className="sc-legal-text">
                  L’école de flag accueille les jeunes nés entre 2009 et 2021 (catégories U7 à U18),
                  le samedi de 10h00 à 12h00. Le déroulé d’une séance, le matériel fourni et
                  l’encadrement sont décrits sur la page{' '}
                  <Link href="/ecole-de-flag/">école de flag</Link>. La semaine découverte est
                  offerte : votre enfant vient essayer en tenue de sport, le club fournit les
                  ceintures et les flags.
                </p>
                <h3 className="sc-h3">Partenariat, presse et autres demandes</h3>
                <p className="sc-legal-text">
                  Entreprises, médias, associations et collectivités peuvent passer par le
                  formulaire ci-dessus ou par la même adresse email. Les formules de sponsoring et
                  de mécénat sont présentées sur la page{' '}
                  <Link href="/partenaires/">partenaires</Link>, et l’histoire du club sur{' '}
                  <Link href="/le-club/">le club</Link>.
                </p>
              </div>
              <aside className="sc-aside">
                <div className="sc-panel">
                  <h3 className="sc-panel-title">Ce qu’il faut apporter pour un essai</h3>
                  <ul className="sc-liste">
                    <li>Une tenue de sport et des chaussures adaptées à un terrain extérieur</li>
                    <li>Une gourde</li>
                    <li>
                      Rien d’autre : casque et épaulières sont prêtés aux débutants en football
                      américain, ceintures et flags fournis en flag
                    </li>
                    <li>Ni licence ni engagement pendant la semaine découverte</li>
                  </ul>
                </div>
                <div className="sc-panel">
                  <h3 className="sc-panel-title">Le stade</h3>
                  <ul className="sc-liste">
                    <li>
                      <strong>{STADE.nom}</strong>, {STADE.rue}, {STADE.codePostal} {STADE.ville}{' '}
                      (Tours Nord)
                    </li>
                    <li>
                      En bus : ligne 2, arrêt Maréchal Juin, ou ligne 12, arrêt Chambrerie /
                      Giraudoux, à 5 minutes à pied
                    </li>
                    <li>
                      En voiture : A10, sortie n°19 (Tours Nord) à 5 minutes, périphérique de Tours
                      Nord à 3 minutes
                    </li>
                  </ul>
                  <p className="sc-legal-text">
                    Le terrain, ses abords et son histoire :{' '}
                    <Link href="/blog/stade-de-la-chambrerie-tours/">
                      tout savoir sur le stade de la Chambrerie
                    </Link>
                    .
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <InfosSection />

        {/* ── Venir sur place ── */}
        <section className="sc-sec" id="venir">
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Venir sur place</p>
              <h2 className="sc-title">Passer voir un entraînement.</h2>
            </div>
            <div className="sc-body" data-reveal style={{ marginTop: 30 }}>
              <p className="sc-legal-text">
                Le bord de terrain est ouvert : il est possible de venir regarder une séance avant
                de décider quoi que ce soit. Prévenir à l’avance, par email ou par téléphone, reste
                plus simple : un membre du staff peut alors vous accueillir et vous expliquer ce qui
                se passe sur le terrain.
              </p>
              <p className="sc-legal-text">
                Les créneaux se répartissent du lundi au samedi, tous au {STADE.nom}. Les seniors du
                football américain s’entraînent le lundi et le vendredi de 20h00 à 23h00, ainsi que
                le mercredi de 21h00 à 23h00. Le flag mixte seniors occupe le lundi et le jeudi de
                20h15 à 22h45. Les juniors foot US jouent le lundi et le jeudi de 19h00 à 21h00, le
                flag mixte juniors le jeudi de 19h00 à 20h30, et l’école de flag le samedi de 10h00
                à 12h00.
              </p>
              <p className="sc-legal-text">
                Le parking et les accès bus sont indiqués plus haut. Pour l’itinéraire, la fiche
                Google du club ouvre directement la navigation vers le stade.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FaqSection titre="Venir, essayer, s’inscrire." items={FAQ} />
      </main>
      <SiteFooter />
    </>
  );
}
