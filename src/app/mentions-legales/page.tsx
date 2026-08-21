import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import { CLUB, STADE, REJOINDRE_URL, BOUTIQUE_URL } from '@/lib/infos';
import '@/styles/legal.css';

// Démo GitHub Pages : pas de canonical (et noindex hérité du layout).
const IS_DEMO = (process.env.NEXT_PUBLIC_BASE_PATH ?? '/homepagepnr') !== '/';

const EMAIL = 'recrutement@pionniersdetouraine.fr';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description:
    'Mentions légales du site des Pionniers de Touraine : éditeur, directeur de publication, hébergeur et propriété intellectuelle.',
  ...(IS_DEMO ? {} : { alternates: { canonical: '/mentions-legales/' } }),
};

export default function MentionsLegalesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          fil="Mentions légales"
          chemin="/mentions-legales/"
          eyebrow="Informations légales"
          titre="Mentions légales"
          sousTitre="Éditeur, hébergeur et conditions d’utilisation du site pionniersdetouraine.fr."
        />

        <section className="lg-body">
          <div className="lg-wrap">
            <p className="lg-intro">
              Le présent site est le site officiel d’information du club{' '}
              <strong>{CLUB.nom}</strong>. Il ne propose ni vente en ligne ni compte utilisateur.
            </p>

            <div className="lg-block">
              <h2>Éditeur du site</h2>
              <p>
                <strong>{CLUB.nom}</strong>, association sportive régie par la loi du 1<sup>er</sup>{' '}
                juillet 1901.
              </p>
              <p>
                Siège : {STADE.nom}, {STADE.rue}, {STADE.codePostal} {STADE.ville}, France.
                <br />
                Courriel : <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <br />
                Numéro RNA (déclaration en préfecture) : <span className="lg-todo">À COMPLÉTER</span>
                <br />
                Numéro SIRET : <span className="lg-todo">À COMPLÉTER</span>
              </p>
            </div>

            <div className="lg-block">
              <h2>Directeur de la publication</h2>
              <p>
                Le président de l’association <span className="lg-todo">À COMPLÉTER</span>, en sa
                qualité de représentant légal des {CLUB.nom}.
              </p>
            </div>

            <div className="lg-block">
              <h2>Hébergeur</h2>
              <p>
                <strong>o2switch</strong>
                <br />
                Chemin des Pardiaux, 63000 Clermont-Ferrand, France
                <br />
                <a href="https://www.o2switch.fr/" target="_blank" rel="noopener noreferrer">
                  o2switch.fr
                </a>
              </p>
            </div>

            <div className="lg-block">
              <h2>Propriété intellectuelle</h2>
              <p>
                L’ensemble des éléments du site (textes, articles de blog, photographies, logos,
                écussons, illustrations, mise en page et code) est protégé par le droit d’auteur et
                reste la propriété des {CLUB.nom} ou de leurs auteurs respectifs.
              </p>
              <p>
                Toute reproduction, représentation, adaptation ou diffusion, totale ou partielle,
                sur quelque support que ce soit, est interdite sans autorisation écrite préalable du
                club. Une citation courte reste possible à condition de mentionner clairement la
                source et d’ajouter un lien vers la page d’origine.
              </p>
              <p>
                Les marques et logos de tiers présents sur le site (partenaires, fédérations,
                compétitions) demeurent la propriété de leurs titulaires et sont affichés avec leur
                accord ou à titre d’information.
              </p>
            </div>

            <div className="lg-block">
              <h2>Les autres sites du club</h2>
              <p>
                Le club publie plusieurs sites, édités par la même association mais dédiés à des
                usages différents :
              </p>
              <ul>
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
              <p>
                Le club ne peut être tenu responsable du contenu des sites externes vers lesquels
                pointent ses liens.
              </p>
            </div>

            <div className="lg-block">
              <h2>Responsabilité</h2>
              <p>
                Les informations publiées (horaires, catégories, tarifs, dates de match) sont
                données à titre indicatif et peuvent évoluer en cours de saison. Le club s’efforce
                de les tenir à jour mais ne garantit ni leur exhaustivité ni leur exactitude à tout
                instant. Pour toute question, écrivez-nous à{' '}
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
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
