import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import YardLine from '@/components/YardLine';
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
          <div className="sc-ctas">
            <span className="sc-todo">Page à compléter</span>
          </div>
        </PageHero>

        {/* ── Bureau & staff ── */}
        <section className="sc-sec" id="equipe">
          <YardLine n="10" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Celles et ceux qui font tourner le club</p>
              <h2 className="sc-title">Bureau &amp; staff.</h2>
              <p className="sc-lead">
                Un club associatif tient grâce à des bénévoles qui prennent des responsabilités en
                plus de leur vie professionnelle et familiale. Voici les rôles qui structurent les
                Pionniers de Touraine.
              </p>
            </div>

            {/* À COMPLÉTER : remplacer « Prénom Nom » par les identités réelles,
                mettre à jour les initiales de la pastille, et ajouter les photos
                si le club en dispose et si les personnes concernées l'acceptent. */}
            <div className="sc-membres" data-reveal>
              {MEMBRES.map((m) => (
                <article key={m.role} className="sc-card sc-card--statique">
                  <span className="sc-avatar" aria-hidden="true">
                    {INITIALES}
                  </span>
                  <h3 className="sc-membre-role">{m.role}</h3>
                  <p className="sc-membre-nom">Prénom Nom (À COMPLÉTER)</p>
                  <span className="sc-chip">{m.pole}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Nous joindre ── */}
        <section className="sc-sec" id="contact">
          <YardLine n="20" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Nous joindre</p>
              <h2 className="sc-title">Une question pour le bureau ?</h2>
              <p className="sc-lead">
                En attendant que cette page soit complète, écrivez au club : le message est transmis
                à la bonne personne.
              </p>
            </div>

            <div className="sc-panel" data-reveal style={{ marginTop: 30, maxWidth: 860 }}>
              <h3 className="sc-panel-title">Contacter le club</h3>
              <div className="sc-horaires">
                <div className="sc-horaire">
                  <span className="sc-horaire-cat">Email</span>
                  <span className="sc-horaire-time">
                    <a
                      href={`mailto:${CONTACT.email}`}
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      {CONTACT.email}
                    </a>
                  </span>
                </div>
                <div className="sc-horaire">
                  <span className="sc-horaire-cat">Téléphone</span>
                  <span className="sc-horaire-time">
                    <a href={CONTACT.telHref} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {CONTACT.telephone}
                    </a>
                  </span>
                </div>
                <div className="sc-horaire">
                  <span className="sc-horaire-cat">Le stade</span>
                  <span className="sc-horaire-time" style={{ color: 'var(--sc-cream-72)' }}>
                    {STADE.nom}, {STADE.rue}, {STADE.codePostal} {STADE.ville}
                  </span>
                </div>
              </div>

              <div className="sc-ctas">
                <Link className="sc-btn-ghost" href="/contact/">
                  Page contact
                </Link>
                <Link className="sc-btn-ghost" href="/le-club/">
                  Découvrir le club
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
