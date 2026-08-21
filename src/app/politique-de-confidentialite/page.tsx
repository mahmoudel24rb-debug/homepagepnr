import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { CLUB } from '@/lib/infos';

// Démo GitHub Pages : pas de canonical (et noindex hérité du layout).
const IS_DEMO = (process.env.NEXT_PUBLIC_BASE_PATH ?? '/homepagepnr') !== '/';

/** Boîte du staff : destinataire des messages du formulaire de contact. */
const EMAIL = 'recrutement@pionniersdetouraine.fr';
/** Email officiel publié par l'association pour les demandes RGPD. */
const EMAIL_RGPD = 'shop@pionniersdetouraine.fr';
/** Siège social déclaré de l'association (distinct du stade, lieu d'activité). */
const SIEGE = '9bis rue de la Victoire, 37000 Tours';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    'Comment les Pionniers de Touraine traitent vos données : seul le formulaire de contact collecte des informations, aucune base de données, aucun cookie de suivi.',
  ...(IS_DEMO ? {} : { alternates: { canonical: '/politique-de-confidentialite/' } }),
};

export default function ConfidentialitePage() {
  return (
    <>
      <SiteHeader />
      <main className="sc-sec sc-legal">
        <div className="sc-wrap">
          <p className="sc-eyebrow">Vos données</p>
          <h1 className="sc-title">Politique de confidentialité</h1>
          <p className="sc-lead">
            Ce site collecte le strict minimum : uniquement ce que vous écrivez dans le formulaire
            de contact, transmis par email au club.
          </p>
          <p className="sc-lead">
            Les <strong>{CLUB.nom}</strong> attachent de l’importance à la protection des données
            personnelles. Cette page explique, en clair, ce que le site collecte, pourquoi, et
            comment exercer vos droits.
          </p>

          <div className="sc-legal-blocks">
            <section className="sc-panel">
              <h2 className="sc-panel-title">Responsable du traitement</h2>
              <p className="sc-legal-text">
                Association {CLUB.nom}, association loi 1901, {SIEGE}, France.
                <br />
                Contact : <a href={`mailto:${EMAIL_RGPD}`}>{EMAIL_RGPD}</a>
              </p>
            </section>

            <section className="sc-panel">
              <h2 className="sc-panel-title">Quelles données sont collectées</h2>
              <p className="sc-legal-text">
                Une seule page collecte des données : le{' '}
                <Link href="/contact/">formulaire de contact</Link>. Les informations demandées
                sont :
              </p>
              <ul className="sc-liste">
                <li>votre <strong>nom</strong> (pour vous répondre correctement) ;</li>
                <li>votre <strong>adresse email</strong> (pour vous répondre) ;</li>
                <li>l’<strong>objet</strong> choisi et le <strong>message</strong> que vous rédigez.</li>
              </ul>
              <p className="sc-legal-text" style={{ marginTop: 18 }}>
                Aucun autre formulaire, aucun espace membre, aucun paiement et aucune inscription en
                ligne ne sont proposés sur ce site.
              </p>
            </section>

            <section className="sc-panel">
              <h2 className="sc-panel-title">Ce que nous en faisons</h2>
              <p className="sc-legal-text">
                Le contenu du formulaire est <strong>transmis par email</strong> à la boîte du club
                (<a href={`mailto:${EMAIL}`}>{EMAIL}</a>) et sert uniquement à traiter votre
                demande. La base légale est l’<strong>intérêt légitime</strong> du club à répondre
                aux personnes qui le sollicitent.
              </p>
              <p className="sc-legal-text">
                Vos informations ne sont ni revendues, ni louées, ni transmises à des tiers à des
                fins commerciales, et ne servent à aucune prospection publicitaire.
              </p>
            </section>

            <section className="sc-panel">
              <h2 className="sc-panel-title">Aucune base de données, aucun cookie de suivi</h2>
              <p className="sc-legal-text">
                Le site est un site <strong>statique</strong> : il ne dispose d’aucune base de
                données et n’enregistre donc rien de ce que vous saisissez. Le message part
                directement en email, puis vit dans la boîte du club.
              </p>
              <p className="sc-legal-text">
                Le site ne dépose <strong>aucun cookie de suivi</strong>, n’utilise{' '}
                <strong>aucun outil de mesure d’audience</strong> et{' '}
                <strong>aucune régie publicitaire</strong>. C’est pourquoi aucune bannière de
                consentement ne vous est présentée.
              </p>
              <p className="sc-legal-text">
                Comme tout site web, le serveur de notre hébergeur (o2switch, en France) tient des
                journaux techniques de connexion, conservés pour la sécurité et le bon
                fonctionnement du service, puis effacés automatiquement.
              </p>
            </section>

            <section className="sc-panel">
              <h2 className="sc-panel-title">Combien de temps vos données sont conservées</h2>
              <p className="sc-legal-text">
                Les emails reçus via le formulaire sont conservés{' '}
                <strong>le temps nécessaire au traitement de la demande</strong> et aux échanges qui
                suivent, puis pour une <strong>durée raisonnable</strong> avant d’être supprimés de
                la boîte du club, sauf si la relation se poursuit (par exemple un partenariat en
                cours).
              </p>
            </section>

            <section className="sc-panel">
              <h2 className="sc-panel-title">Vos droits</h2>
              <p className="sc-legal-text">
                Conformément au Règlement général sur la protection des données (RGPD) et à la loi
                Informatique et Libertés, vous disposez d’un droit d’accès, de rectification, de
                suppression, de limitation et d’opposition sur les données vous concernant, ainsi
                que d’un droit à la portabilité.
              </p>
              <p className="sc-legal-text">
                Pour les exercer, écrivez à <a href={`mailto:${EMAIL_RGPD}`}>{EMAIL_RGPD}</a> en
                précisant votre demande. Le club vous répond dans un délai d’un mois.
              </p>
              <p className="sc-legal-text">
                Si la réponse ne vous convient pas, vous pouvez introduire une réclamation auprès de
                la CNIL,{' '}
                <a href="https://www.cnil.fr/" target="_blank" rel="noopener noreferrer">
                  cnil.fr
                </a>
                .
              </p>
            </section>

            <section className="sc-panel">
              <h2 className="sc-panel-title">Les autres sites du club</h2>
              <p className="sc-legal-text">
                Le site de recrutement, la boutique en ligne et le calendrier des matchs sont des
                sites distincts, avec leurs propres traitements de données. Cette politique ne
                couvre que <strong>pionniersdetouraine.fr</strong> : reportez-vous aux mentions
                publiées sur chacun de ces sites.
              </p>
              <p className="sc-legal-text">
                En particulier, les <strong>conditions générales de vente</strong>, les données de
                paiement et de livraison ainsi que la <strong>politique de cookies</strong>{' '}
                relèvent de la boutique officielle{' '}
                <strong>shop.pionniersdetouraine.fr</strong> et sont publiées sur ce site.
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
