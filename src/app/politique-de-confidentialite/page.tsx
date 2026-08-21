import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import { CLUB, STADE } from '@/lib/infos';
import '@/styles/legal.css';

// Démo GitHub Pages : pas de canonical (et noindex hérité du layout).
const IS_DEMO = (process.env.NEXT_PUBLIC_BASE_PATH ?? '/homepagepnr') !== '/';

const EMAIL = 'recrutement@pionniersdetouraine.fr';

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
      <main>
        <PageHero
          fil="Politique de confidentialité"
          chemin="/politique-de-confidentialite/"
          eyebrow="Vos données"
          titre="Politique de confidentialité"
          sousTitre="Ce site collecte le strict minimum : uniquement ce que vous écrivez dans le formulaire de contact, transmis par email au club."
        />

        <section className="lg-body">
          <div className="lg-wrap">
            <p className="lg-intro">
              Les <strong>{CLUB.nom}</strong> attachent de l’importance à la protection des données
              personnelles. Cette page explique, en clair, ce que le site collecte, pourquoi, et
              comment exercer vos droits.
            </p>

            <div className="lg-block">
              <h2>Responsable du traitement</h2>
              <p>
                {CLUB.nom}, association loi 1901, {STADE.nom}, {STADE.rue}, {STADE.codePostal}{' '}
                {STADE.ville}.
                <br />
                Contact : <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </p>
            </div>

            <div className="lg-block">
              <h2>Quelles données sont collectées</h2>
              <p>
                Une seule page collecte des données : le{' '}
                <Link href="/contact/">formulaire de contact</Link>. Les informations demandées
                sont :
              </p>
              <ul>
                <li>votre <strong>nom</strong> (pour vous répondre correctement) ;</li>
                <li>votre <strong>adresse email</strong> (pour vous répondre) ;</li>
                <li>l’<strong>objet</strong> choisi et le <strong>message</strong> que vous rédigez.</li>
              </ul>
              <p>
                Aucun autre formulaire, aucun espace membre, aucun paiement et aucune inscription en
                ligne ne sont proposés sur ce site.
              </p>
            </div>

            <div className="lg-block">
              <h2>Ce que nous en faisons</h2>
              <p>
                Le contenu du formulaire est <strong>transmis par email</strong> à la boîte du club
                (<a href={`mailto:${EMAIL}`}>{EMAIL}</a>) et sert uniquement à traiter votre
                demande. La base légale est l’<strong>intérêt légitime</strong> du club à répondre
                aux personnes qui le sollicitent.
              </p>
              <p>
                Vos informations ne sont ni revendues, ni louées, ni transmises à des tiers à des
                fins commerciales, et ne servent à aucune prospection publicitaire.
              </p>
            </div>

            <div className="lg-block">
              <h2>Aucune base de données, aucun cookie de suivi</h2>
              <p>
                Le site est un site <strong>statique</strong> : il ne dispose d’aucune base de
                données et n’enregistre donc rien de ce que vous saisissez. Le message part
                directement en email, puis vit dans la boîte du club.
              </p>
              <p>
                Le site ne dépose <strong>aucun cookie de suivi</strong>, n’utilise{' '}
                <strong>aucun outil de mesure d’audience</strong> et{' '}
                <strong>aucune régie publicitaire</strong>. C’est pourquoi aucune bannière de
                consentement ne vous est présentée.
              </p>
              <p>
                Comme tout site web, le serveur de notre hébergeur (o2switch, en France) tient des
                journaux techniques de connexion, conservés pour la sécurité et le bon
                fonctionnement du service, puis effacés automatiquement.
              </p>
            </div>

            <div className="lg-block">
              <h2>Combien de temps vos données sont conservées</h2>
              <p>
                Les emails reçus via le formulaire sont conservés le temps nécessaire au traitement
                de la demande et aux échanges qui suivent, puis supprimés de la boîte du club au
                plus tard <strong>douze mois</strong> après le dernier échange, sauf si la relation
                se poursuit (par exemple un partenariat en cours).
              </p>
            </div>

            <div className="lg-block">
              <h2>Vos droits</h2>
              <p>
                Conformément au Règlement général sur la protection des données (RGPD) et à la loi
                Informatique et Libertés, vous disposez d’un droit d’accès, de rectification,
                d’effacement, de limitation et d’opposition sur les données vous concernant, ainsi
                que d’un droit à la portabilité.
              </p>
              <p>
                Pour les exercer, écrivez à <a href={`mailto:${EMAIL}`}>{EMAIL}</a> en précisant
                votre demande. Le club vous répond dans un délai d’un mois.
              </p>
              <p>
                Si la réponse ne vous convient pas, vous pouvez introduire une réclamation auprès de
                la CNIL,{' '}
                <a href="https://www.cnil.fr/" target="_blank" rel="noopener noreferrer">
                  cnil.fr
                </a>
                .
              </p>
            </div>

            <div className="lg-block">
              <h2>Les autres sites du club</h2>
              <p>
                Le site de recrutement, la boutique en ligne et le calendrier des matchs sont des
                sites distincts, avec leurs propres traitements de données. Cette politique ne
                couvre que <strong>pionniersdetouraine.fr</strong> : reportez-vous aux mentions
                publiées sur chacun de ces sites.
              </p>
            </div>

            <p className="lg-maj">Dernière mise à jour : 21 août 2026.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
