import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import { STADE, CONTACT } from '@/lib/infos';

/**
 * Page volontairement NOINDEX, même en production : elle attend les noms et les
 * photos des membres du bureau et du staff. Elle n'est référencée ni dans le
 * header, ni dans le footer, ni dans le sitemap.
 */
export const metadata: Metadata = {
  title: 'Nos têtes · Bureau et staff du club',
  description:
    'Bureau, staff sportif et responsables des sections des Pionniers de Touraine. Page en cours de constitution.',
  alternates: { canonical: '/organigramme/' },
  robots: { index: false, follow: false },
};

/**
 * À COMPLÉTER : prénoms, noms et éventuellement photos de chaque membre.
 * Les intitulés de rôles sont ceux de l'organisation du club ; les identités
 * doivent être fournies et validées par les personnes concernées.
 */
const MEMBRES = [
  { role: 'Président·e', pole: 'Bureau' },
  { role: 'Vice-président·e', pole: 'Bureau' },
  { role: 'Trésorier·ère', pole: 'Bureau' },
  { role: 'Secrétaire général·e', pole: 'Bureau' },
  { role: 'Head Coach Foot US', pole: 'Staff sportif' },
  { role: 'Coach Flag', pole: 'Staff sportif' },
  { role: 'Responsable École de flag', pole: 'Staff sportif' },
  { role: 'Responsable communication', pole: 'Pôle club' },
];

/** Initiales affichées dans la pastille ambre, en attendant les vrais noms. */
const INITIALES = 'PN';

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          fil="Nos têtes"
          chemin="/organigramme/"
          eyebrow="Organigramme"
          titre="Nos têtes"
          sousTitre="Le bureau, le staff sportif et les responsables de sections des Pionniers de Touraine. Cette page est en cours de constitution : les noms et les photos arrivent bientôt."
        >
          <div className="ph-ctas">
            <span className="hp-todo">Page à compléter</span>
          </div>
        </PageHero>

        <section className="hp-sec" id="equipe">
          <div className="hp-wrap">
            <div data-reveal>
              <p className="hp-eyebrow">Celles et ceux qui font tourner le club</p>
              <h2 className="hp-h2">Bureau &amp; staff.</h2>
              <p className="hp-p">
                Un club associatif tient grâce à des bénévoles qui prennent des responsabilités en
                plus de leur vie professionnelle et familiale. Voici les rôles qui structurent les
                Pionniers de Touraine.
              </p>
            </div>

            {/* À COMPLÉTER : remplacer « Prénom Nom » par les identités réelles,
                mettre à jour les initiales de la pastille, et ajouter les photos
                si le club en dispose et si les personnes concernées l'acceptent. */}
            <div className="hp-people" data-reveal>
              {MEMBRES.map((m) => (
                <div key={m.role} className="hp-person">
                  <span className="hp-avatar" aria-hidden="true">
                    {INITIALES}
                  </span>
                  <span className="hp-person-role">{m.role}</span>
                  <span className="hp-person-nom">Prénom Nom (À COMPLÉTER)</span>
                  <span className="hp-todo">{m.pole}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="hp-sec" id="contact" style={{ paddingTop: 0 }}>
          <div className="hp-wrap">
            <div data-reveal>
              <p className="hp-eyebrow">Nous joindre</p>
              <h2 className="hp-h2">Une question pour le bureau ?</h2>
              <p className="hp-p">
                En attendant que cette page soit complète, écrivez au club : le message est
                transmis à la bonne personne.
              </p>
            </div>
            <div className="hp-contact-box" data-reveal>
              <div className="hp-contact-item">
                <span>Email</span>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
              <div className="hp-contact-item">
                <span>Téléphone</span>
                <a href={CONTACT.telHref}>{CONTACT.telephone}</a>
              </div>
              <div className="hp-contact-item">
                <span>Le stade</span>
                <p>
                  {STADE.nom}
                  <br />
                  {STADE.rue}
                  <br />
                  {STADE.codePostal} {STADE.ville}
                </p>
              </div>
            </div>
            <div className="hp-section-cta" data-reveal>
              <Link className="hp-ghost" href="/contact/">
                Page contact
              </Link>
              <Link className="hp-ghost" href="/le-club/">
                Découvrir le club
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
