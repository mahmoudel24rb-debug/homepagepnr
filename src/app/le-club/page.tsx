import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import YardLine from '@/components/YardLine';
import ClubSlideshow from '@/components/ClubSlideshow';
import PPPSection from '@/components/PPPSection';
import { STADE, REJOINDRE_TUNNEL_URL } from '@/lib/infos';

export const metadata: Metadata = {
  title: 'Le club de foot US à Tours depuis 1987',
  description:
    'Fondés en 1987, les Pionniers de Touraine sont l’un des plus anciens clubs de football américain de France. Histoire, valeurs, palmarès et programme PPP.',
  alternates: { canonical: '/le-club/' },
  openGraph: {
    title: 'Le club · Pionniers de Touraine, football américain à Tours',
    description:
      'Histoire, valeurs et organisation du club de football américain et de flag football de Tours, fondé en 1987 au stade de la Chambrerie.',
    url: '/le-club/',
    type: 'article',
  },
};

/**
 * Palmarès : une ligne par section.
 * Une SEULE entrée réelle est connue à ce jour (flag mixte). Les autres lignes
 * restent des emplacements à compléter par le club, saison par saison.
 */
const PALMARES = [
  {
    section: 'Flag mixte seniors',
    resultat: 'Qualifiés en demi-finales de Conférence Nord.',
    aCompleter: false,
  },
  { section: 'Seniors · Foot US', resultat: 'Résultats et classements par saison', aCompleter: true },
  { section: 'Juniors · Foot US & flag', resultat: 'Résultats et classements par saison', aCompleter: true },
  { section: 'École de flag', resultat: 'Tournois et rencontres jeunes', aCompleter: true },
];

/**
 * Le club en chiffres. Seule l'ancienneté est un fait établi ; les trois autres
 * repères attendent des chiffres officiels du club.
 */
const CHIFFRES = [
  { valeur: 'Bientôt 40 ans', detail: 'Fondé en 1987, le club approche de son quarantième anniversaire.', aCompleter: false },
  { valeur: 'Licenciés', detail: 'Nombre de licenciés toutes catégories confondues.', aCompleter: true },
  { valeur: 'Équipes engagées', detail: 'Nombre d’équipes engagées en compétition sur la saison.', aCompleter: true },
  { valeur: 'Bénévoles', detail: 'Nombre de bénévoles qui font vivre le club au quotidien.', aCompleter: true },
];

/** Les trois valeurs du club, en cartes de verre. */
const VALEURS = [
  {
    titre: 'La famille',
    texte:
      '« Dans ce club, nous ne sommes pas juste des Pionniers, nous sommes une famille. » Ce n’est pas une formule de communication : c’est ce que disent les joueurs. On vient pour le sport, on reste pour le vestiaire, les troisièmes mi-temps et les gens qu’on y rencontre.',
  },
  {
    titre: 'La formation',
    texte:
      'Personne n’arrive en connaissant le football américain. Le club forme depuis 1987, et il forme d’abord des débutants : gestes techniques, règles, lecture du jeu, préparation physique. Le programme PPP structure cette progression pour toutes les catégories.',
  },
  {
    titre: 'L’inclusion',
    texte:
      'Le football américain est l’un des rares sports collectifs où chaque gabarit a un poste. Grand, petit, léger, puissant, rapide ou endurant : il existe un rôle où votre morphologie devient un avantage. Le flag, lui, se joue en mixte, femmes et hommes dans la même équipe.',
  },
];

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          fil="Le club"
          chemin="/le-club/"
          eyebrow="Depuis 1987"
          titre={
            <>
              Le club de football{' '}
              <br />
              américain à Tours
            </>
          }
          sousTitre="Fondés en 1987, les Pionniers de Touraine sont l’un des plus anciens clubs de football américain de France. Quatre collectifs, un stade, une même famille sportive en Touraine."
        >
          <div className="sc-chips" style={{ marginTop: 24 }}>
            <span className="sc-chip">Fondé en 1987</span>
            <span className="sc-chip">Foot US &amp; flag</span>
            <span className="sc-chip">Stade de la Chambrerie</span>
            <span className="sc-chip">Tours (37)</span>
          </div>
        </PageHero>

        {/* ── Notre histoire ── */}
        <section className="sc-sec" id="histoire">
          <YardLine n="10" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Notre histoire</p>
              <h2 className="sc-title">Le football américain en Touraine depuis 1987.</h2>
            </div>

            <div className="sc-club-grid" style={{ marginTop: 40 }}>
              <div className="sc-body" data-reveal>
                <p className="sc-legal-text">
                  Quand les <strong>Pionniers de Touraine</strong> naissent en 1987, le football
                  américain n’est encore en France qu’un sport de curieux, découvert à la télévision
                  et pratiqué par une poignée de passionnés. À Tours, quelques-uns décident de s’y
                  mettre pour de bon. Le nom du club dit exactement ce qu’ils étaient : des
                  pionniers.
                </p>
                <p className="sc-legal-text">
                  Près de quarante ans plus tard, le club est toujours là. C’est l’un des plus
                  anciens clubs de football américain de France, et il approche de son quarantième
                  anniversaire sans avoir changé de cap : faire découvrir ce sport au plus grand
                  nombre, en Touraine, sans sélection à l’entrée.
                </p>

                <h3 className="sc-h3">Une maison : le stade de la Chambrerie</h3>
                <p className="sc-legal-text">
                  Tous les entraînements ont lieu au <strong>{STADE.nom}</strong>, {STADE.rue}, à{' '}
                  {STADE.ville} Nord. C’est là que se retrouvent les seniors du football américain,
                  l’équipe de flag mixte, les juniors et les enfants de l’école de flag, du lundi au
                  samedi selon les catégories. Le stade est accessible en bus comme en voiture, à
                  quelques minutes du périphérique. Nous avons consacré un article entier à{' '}
                  <Link href="/blog/stade-de-la-chambrerie-tours/">le stade de la Chambrerie</Link>,
                  son terrain, ses accès et son histoire.
                </p>

                <h3 className="sc-h3">Un club ancré dans son territoire</h3>
                <p className="sc-legal-text">
                  Les Pionniers recrutent dans toute l’agglomération de Tours et plus largement en
                  Indre-et-Loire. Étudiants, salariés, parents, lycéens : les vestiaires mélangent
                  des parcours qui ne se seraient jamais croisés ailleurs. C’est une bonne partie de
                  ce qui fait tenir un club associatif pendant quatre décennies.
                </p>
                <p className="sc-legal-text">
                  Le club vit aussi grâce à ses bénévoles et à ses partenaires locaux, qui financent
                  le matériel, les déplacements et la formation des jeunes. Vous pouvez découvrir{' '}
                  <Link href="/partenaires/">les entreprises qui nous accompagnent</Link>.
                </p>

                {/* À COMPLÉTER : dates clés de l'histoire du club (montées, créations de
                    sections, anniversaires, moments fondateurs) à fournir par le club. */}
                <h3 className="sc-h3">Les dates clés</h3>
                <p className="sc-legal-text">
                  Le club prépare une frise des moments qui ont marqué son histoire : créations de
                  sections, montées, anniversaires. <span className="sc-todo">À compléter</span>
                </p>
              </div>

              <div className="sc-club-media" data-reveal>
                <ClubSlideshow />
              </div>
            </div>

            <div className="sc-cards sc-cards--deux" data-reveal>
              <div className="sc-panel">
                <h3 className="sc-panel-title">Carte d’identité</h3>
                <ul className="sc-liste">
                  <li>
                    <strong>Fondation :</strong> 1987, à Tours
                  </li>
                  <li>
                    <strong>Sports :</strong> football américain et flag football
                  </li>
                  <li>
                    <strong>Collectifs :</strong> seniors foot US, flag mixte, juniors, école de
                    flag
                  </li>
                  <li>
                    <strong>Stade :</strong> {STADE.nom}, {STADE.ville} Nord
                  </li>
                  <li>
                    <strong>Licence :</strong> FFFA, incluse dans les formules d’adhésion
                  </li>
                </ul>
              </div>
              <div className="sc-panel">
                <h3 className="sc-panel-title">Nos sections</h3>
                <ul className="sc-liste">
                  <li>
                    <Link href="/football-americain/">Football américain</Link>, seniors et juniors
                  </li>
                  <li>
                    <Link href="/flag-football/">Flag football</Link>, mixte et sans contact
                  </li>
                  <li>
                    <Link href="/ecole-de-flag/">École de flag</Link>, le samedi matin
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Nos valeurs ── */}
        <section className="sc-sec" id="valeurs">
          <YardLine n="20" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Nos valeurs</p>
              <h2 className="sc-title">Ce qui tient le club debout.</h2>
              <p className="sc-lead">
                Un club de quarante ans ne survit pas grâce à ses résultats. Il survit grâce à ce
                qu’on y trouve, saison après saison, et grâce à celles et ceux qui le font tourner
                en dehors du terrain :{' '}
                <Link href="/blog/arbitre-coach-benevole-club-football-americain/">
                  devenir arbitre, coach ou bénévole
                </Link>{' '}
                est une façon de prendre sa place aux Pionniers.
              </p>
            </div>
            <div className="sc-cards" data-reveal>
              {VALEURS.map((v) => (
                <article key={v.titre} className="sc-card sc-card--statique">
                  <h3 className="sc-card-title">{v.titre}</h3>
                  <p className="sc-card-desc" style={{ marginBottom: 0 }}>
                    {v.texte}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Le club en chiffres, puis palmarès ── */}
        <section className="sc-sec" id="chiffres">
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Le club en chiffres</p>
              <h2 className="sc-title">Quatre repères.</h2>
            </div>
            {/* À COMPLÉTER : chiffres officiels (licenciés, équipes engagées, bénévoles)
                à fournir par le club, puis remplacer les emplacements ci-dessous. */}
            <div className="sc-chiffres" data-reveal>
              {CHIFFRES.map((c) => (
                <div key={c.valeur} className="sc-chiffre">
                  {c.aCompleter ? (
                    <>
                      <span>
                        <span className="sc-todo">À compléter</span>
                      </span>
                      <strong>{c.valeur}</strong>
                    </>
                  ) : (
                    <strong>{c.valeur}</strong>
                  )}
                  <span>{c.detail}</span>
                </div>
              ))}
            </div>

            <div id="palmares" data-reveal style={{ marginTop: 'clamp(56px, 6vw, 80px)' }}>
              <p className="sc-eyebrow">Palmarès</p>
              <h2 className="sc-title">Nos résultats, section par section.</h2>
              <p className="sc-lead">
                Le club met à jour cette page à la fin de chaque saison. Les lignes marquées comme à
                compléter attendent les résultats officiels. Pour comprendre comment s’organisent
                les divisions et les phases finales, lisez{' '}
                <Link href="/blog/championnat-de-france-football-americain/">
                  le championnat de France de football américain
                </Link>
                .
              </p>
            </div>
            {/* À COMPLÉTER : palmarès saison par saison pour chaque section.
                Seule l'entrée « Flag mixte seniors » est confirmée à ce jour. */}
            <div className="sc-panel" data-reveal style={{ marginTop: 30, maxWidth: 900 }}>
              <div className="sc-horaires">
                {PALMARES.map((p) => (
                  <div key={p.section} className="sc-horaire">
                    <span className="sc-horaire-cat">{p.section}</span>
                    <span className="sc-horaire-time" style={{ color: 'var(--sc-cream-72)' }}>
                      {p.aCompleter ? (
                        <>
                          <span className="sc-todo">À compléter</span> {p.resultat}
                        </>
                      ) : (
                        p.resultat
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Le programme PPP ── */}
        <PPPSection />

        {/* ── Les sections du club ── */}
        <section className="sc-sec" id="sections">
          <YardLine n="40" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Aller plus loin</p>
              <h2 className="sc-title">Nos sections.</h2>
            </div>
            <div className="sc-cards" data-reveal>
              <Link className="sc-card" href="/football-americain/">
                <h3 className="sc-card-title">Football américain</h3>
                <p className="sc-card-desc">
                  Le sport au contact, en compétition, pour les seniors et les juniors.
                </p>
                <span className="sc-card-cta">
                  Découvrir la section <ArrowRight size={15} strokeWidth={2.6} />
                </span>
              </Link>
              <Link className="sc-card" href="/flag-football/">
                <h3 className="sc-card-title">Flag football</h3>
                <p className="sc-card-desc">
                  Le 5 contre 5 sans contact, en mixte, olympique aux JO de 2028.
                </p>
                <span className="sc-card-cta">
                  Découvrir la section <ArrowRight size={15} strokeWidth={2.6} />
                </span>
              </Link>
              <Link className="sc-card" href="/ecole-de-flag/">
                <h3 className="sc-card-title">École de flag</h3>
                <p className="sc-card-desc">
                  Le samedi matin, pour les U7 à U18, zéro contact et matériel fourni.
                </p>
                <span className="sc-card-cta">
                  Découvrir la section <ArrowRight size={15} strokeWidth={2.6} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA final ── */}
        <section className="sc-sec sc-endzone" id="candidater">
          <YardLine n="endzone" />
          <div className="sc-wrap" data-reveal>
            <p className="sc-eyebrow">Prendre sa place</p>
            <h2 className="sc-title">Sur le terrain ou à nos côtés.</h2>
            <p className="sc-lead" style={{ maxWidth: 660 }}>
              Jouer, encadrer, arbitrer, filmer, aider un jour de match ou soutenir le projet : les
              Pionniers ont besoin de profils très différents. Le parcours en ligne vous oriente vers
              la place qui vous correspond en deux minutes, sans engagement. Une semaine découverte
              est offerte à celles et ceux qui veulent d’abord essayer.
            </p>
            <div className="sc-ctas" style={{ justifyContent: 'center' }}>
              <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>
                Commencer le parcours
              </a>
              <Link className="sc-btn-ghost" href="/contact/">
                Nous écrire
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
