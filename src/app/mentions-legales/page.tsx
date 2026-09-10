import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { CLUB, STADE, REJOINDRE_URL, BOUTIQUE_URL } from '@/lib/infos';

// Démo GitHub Pages : pas de canonical (et noindex hérité du layout).
const IS_DEMO = (process.env.NEXT_PUBLIC_BASE_PATH ?? '/homepagepnr') !== '/';

/** Email officiel publié par l'association (éditeur du site et contact RGPD). */
const EMAIL_EDITEUR = 'shop@pionniersdetouraine.fr';
/** Boîte du staff, utilisée pour les demandes courantes du site. */
const EMAIL_CONTACT = 'recrutement@pionniersdetouraine.fr';
/** Siège social déclaré de l'association (distinct du stade, lieu d'activité). */
const SIEGE = '9bis rue de la Victoire, 37000 Tours';

/** Marqueur discret des informations que le club doit encore fournir. */
const TODO: React.CSSProperties = {
  display: 'inline-block',
  padding: '3px 10px 2px',
  borderRadius: 999,
  fontFamily: "'Neuething', sans-serif",
  fontWeight: 700,
  fontSize: 11,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'var(--rf-amber)',
  background: 'rgba(255, 173, 0, 0.1)',
  border: '1px solid rgba(255, 173, 0, 0.3)',
};

export const metadata: Metadata = {
  title: 'Mentions légales',
  description:
    'Mentions légales du site des Pionniers de Touraine : éditeur, directeur de publication, hébergeur et propriété intellectuelle.',
  ...(IS_DEMO ? {} : { alternates: { canonical: '/mentions-legales/' } }),
};

// Cette page n'utilise pas PageHero : le fil d'Ariane structuré est déclaré ici.
const SITE = 'https://pionniersdetouraine.fr';
const BREADCRUMB_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Mentions légales', item: `${SITE}/mentions-legales/` },
  ],
};

export default function MentionsLegalesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }}
      />
      <SiteHeader />
      <main className="sc-sec sc-legal">
        <div className="sc-wrap">
          <p className="sc-eyebrow">Informations légales</p>
          <h1 className="sc-title">Mentions légales</h1>
          <p className="sc-lead">
            Éditeur, hébergeur et conditions d’utilisation du site pionniersdetouraine.fr.
          </p>
          <p className="sc-lead">
            Le présent site est le site officiel d’information du club{' '}
            <strong>{CLUB.nom}</strong>. Il ne propose ni vente en ligne ni compte utilisateur.
          </p>

          <div className="sc-legal-blocks">
            <section className="sc-panel">
              <h2 className="sc-panel-title">Éditeur du site</h2>
              <p className="sc-legal-text">
                <strong>Association {CLUB.nom}</strong>, association sportive régie par la loi du 1
                <sup>er</sup> juillet 1901.
              </p>
              <p className="sc-legal-text">
                Siège social : {SIEGE}, France.
                <br />
                Adresse d’activité : {STADE.nom}, {STADE.rue}, {STADE.codePostal} {STADE.ville}.
                <br />
                Courriel : <a href={`mailto:${EMAIL_EDITEUR}`}>{EMAIL_EDITEUR}</a>
                <br />
                Numéro SIRET : 493 921 779 00051
                <br />
                Numéro RNA (déclaration en préfecture) : <span style={TODO}>À COMPLÉTER</span>
              </p>
            </section>

            <section className="sc-panel">
              <h2 className="sc-panel-title">Directeur de la publication</h2>
              <p className="sc-legal-text">
                Le président de l’association <span style={TODO}>À COMPLÉTER</span>, en sa qualité
                de représentant légal des {CLUB.nom}.
              </p>
            </section>

            <section className="sc-panel">
              <h2 className="sc-panel-title">Objet du site</h2>
              <p className="sc-legal-text">
                Ce site a pour objet la présentation du club, de ses sections et de ses actualités.
                Il ne comporte aucune fonction de vente : la vente de produits est assurée par la
                boutique officielle{' '}
                <a href={BOUTIQUE_URL}>shop.pionniersdetouraine.fr</a>, qui publie ses propres
                conditions générales de vente.
              </p>
            </section>

            <section className="sc-panel">
              <h2 className="sc-panel-title">Hébergeur</h2>
              <p className="sc-legal-text">
                <strong>o2switch</strong>
                <br />
                Chemin des Pardiaux, 63000 Clermont-Ferrand, France
                <br />
                Téléphone : 04 44 44 60 40
                <br />
                <a href="https://www.o2switch.fr/" target="_blank" rel="noopener noreferrer">
                  o2switch.fr
                </a>
              </p>
            </section>

            <section className="sc-panel">
              <h2 className="sc-panel-title">Propriété intellectuelle</h2>
              <p className="sc-legal-text">
                L’ensemble des contenus du site (textes, articles de blog, photographies, vidéos,
                logos, écussons, illustrations, graphismes, mise en page et code) est protégé par le
                droit d’auteur et reste la propriété exclusive de l’association {CLUB.nom} ou de
                leurs auteurs respectifs.
              </p>
              <p className="sc-legal-text">
                Toute reproduction, représentation, modification, adaptation, exploitation ou
                diffusion, totale ou partielle, sur quelque support que ce soit, est interdite sans
                autorisation écrite préalable du club. Une citation courte reste possible à
                condition de mentionner clairement la source et d’ajouter un lien vers la page
                d’origine.
              </p>
              <p className="sc-legal-text">
                Les marques et logos de tiers présents sur le site (partenaires, fédérations,
                compétitions) demeurent la propriété de leurs titulaires et sont affichés avec leur
                accord ou à titre d’information.
              </p>
            </section>

            <section className="sc-panel">
              <h2 className="sc-panel-title">Les autres sites du club</h2>
              <p className="sc-legal-text">
                Le club publie plusieurs sites, édités par la même association mais dédiés à des
                usages différents :
              </p>
              <ul className="sc-liste">
                <li>
                  <a href={REJOINDRE_URL}>recrutement.pionniersdetouraine.fr</a> : rejoindre le
                  club, essais et adhésions.
                </li>
                <li>
                  <a href={BOUTIQUE_URL}>shop.pionniersdetouraine.fr</a> : la boutique officielle
                  (les conditions de vente et les informations e-commerce sont publiées sur ce
                  site).
                </li>
                <li>
                  <a href="https://calendrier.pionniersdetouraine.fr">calendrier.pionniersdetouraine.fr</a> :
                  le calendrier des matchs et des événements du club.
                </li>
              </ul>
              <p className="sc-legal-text" style={{ marginTop: 18 }}>
                Les <strong>conditions générales de vente</strong> et la{' '}
                <strong>politique de cookies</strong> relèvent de la boutique et sont publiées sur{' '}
                <a href={BOUTIQUE_URL}>shop.pionniersdetouraine.fr</a> : elles ne s’appliquent pas
                au présent site, qui ne vend rien et ne dépose aucun cookie de suivi.
              </p>
              <p className="sc-legal-text">
                Le club ne peut être tenu responsable du contenu des sites externes vers lesquels
                pointent ses liens.
              </p>
            </section>

            <section className="sc-panel">
              <h2 className="sc-panel-title">Responsabilité</h2>
              <p className="sc-legal-text">
                Les informations publiées (horaires, catégories, tarifs, dates de match) sont
                données à titre indicatif et peuvent évoluer en cours de saison. Le club s’efforce
                de les tenir à jour mais ne garantit ni leur exhaustivité ni leur exactitude à tout
                instant. Pour toute question, écrivez-nous à{' '}
                <a href={`mailto:${EMAIL_CONTACT}`}>{EMAIL_CONTACT}</a>.
              </p>
            </section>
          </div>

          <p className="sc-legal-text" style={{ marginTop: 22, color: 'var(--sc-cream-38)' }}>
            Dernière mise à jour : 21 août 2026.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
