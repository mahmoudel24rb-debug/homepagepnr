import type { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import { asset } from '@/lib/asset';
import { STADE, REJOINDRE_TUNNEL_URL } from '@/lib/infos';

export const metadata: Metadata = {
  title: 'Le club, foot US à Tours depuis 1987',
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
              Le club de football
              <br />
              américain à Tours
            </>
          }
          sousTitre="Fondés en 1987, les Pionniers de Touraine sont l’un des plus anciens clubs de football américain de France. Quatre collectifs, un stade, une même famille sportive en Touraine."
        >
          <div className="hp-chips" style={{ marginTop: 24 }}>
            <span className="hp-chip">Fondé en 1987</span>
            <span className="hp-chip">Foot US &amp; flag</span>
            <span className="hp-chip">Stade de la Chambrerie</span>
            <span className="hp-chip">Tours (37)</span>
          </div>
        </PageHero>

        {/* ── Notre histoire ── */}
        <section className="hp-sec" id="histoire">
          <div className="hp-wrap">
            <div className="hp-two">
              <div className="hp-prose" data-reveal>
                <p className="hp-eyebrow">Notre histoire</p>
                <h2 className="hp-h2">Le football américain en Touraine depuis 1987.</h2>
                <p>
                  Quand les <strong>Pionniers de Touraine</strong> naissent en 1987, le football
                  américain n’est encore en France qu’un sport de curieux, découvert à la télévision
                  et pratiqué par une poignée de passionnés. À Tours, quelques-uns décident de s’y
                  mettre pour de bon. Le nom du club dit exactement ce qu’ils étaient : des
                  pionniers.
                </p>
                <p>
                  Près de quarante ans plus tard, le club est toujours là. C’est l’un des plus
                  anciens clubs de football américain de France, et il approche de son quarantième
                  anniversaire sans avoir changé de cap : faire découvrir ce sport au plus grand
                  nombre, en Touraine, sans sélection à l’entrée.
                </p>

                <h3>Une maison : le stade de la Chambrerie</h3>
                <p>
                  Tous les entraînements ont lieu au <strong>{STADE.nom}</strong>, {STADE.rue}, à{' '}
                  {STADE.ville} Nord. C’est là que se retrouvent les seniors du football américain,
                  l’équipe de flag mixte, les juniors et les enfants de l’école de flag, du lundi au
                  samedi selon les catégories. Le stade est accessible en bus comme en voiture, à
                  quelques minutes du périphérique.
                </p>

                <h3>Un club ancré dans son territoire</h3>
                <p>
                  Les Pionniers recrutent dans toute l’agglomération de Tours et plus largement en
                  Indre-et-Loire. Étudiants, salariés, parents, lycéens : les vestiaires mélangent
                  des parcours qui ne se seraient jamais croisés ailleurs. C’est une bonne partie de
                  ce qui fait tenir un club associatif pendant quatre décennies.
                </p>
                <p>
                  Le club vit aussi grâce à ses bénévoles et à ses partenaires locaux, qui financent
                  le matériel, les déplacements et la formation des jeunes. Vous pouvez découvrir{' '}
                  <Link href="/partenaires/">les entreprises qui nous accompagnent</Link>.
                </p>

                {/* À COMPLÉTER : dates clés de l'histoire du club (montées, créations de
                    sections, anniversaires, moments fondateurs) à fournir par le club. */}
                <h3>Les dates clés</h3>
                <p>
                  Le club prépare une frise des moments qui ont marqué son histoire : créations de
                  sections, montées, anniversaires. <span className="hp-todo">À compléter</span>
                </p>
              </div>

              <aside className="hp-aside" data-reveal>
                <div className="hp-panel">
                  <h3>Carte d’identité</h3>
                  <ul className="hp-list">
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
                <div className="hp-panel">
                  <h3>Nos sections</h3>
                  <ul className="hp-list">
                    <li>
                      <Link href="/football-americain/">Football américain</Link>, seniors et
                      juniors
                    </li>
                    <li>
                      <Link href="/flag-football/">Flag football</Link>, mixte et sans contact
                    </li>
                    <li>
                      <Link href="/ecole-de-flag/">École de flag</Link>, le samedi matin
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── Nos valeurs ── */}
        <section className="hp-dark" id="valeurs">
          <div className="hp-wrap">
            <div data-reveal>
              <p className="hp-eyebrow">Nos valeurs</p>
              <h2 className="hp-h2">Ce qui tient le club debout.</h2>
              <p className="hp-p">
                Un club de quarante ans ne survit pas grâce à ses résultats. Il survit grâce à ce
                qu’on y trouve, saison après saison.
              </p>
            </div>
            <div className="hp-cards hp-cards-3" data-reveal style={{ marginTop: 40 }}>
              <article className="hp-card">
                <h3>La famille</h3>
                <p>
                  « Dans ce club, nous ne sommes pas juste des Pionniers, nous sommes une famille. »
                  Ce n’est pas une formule de communication : c’est ce que disent les joueurs. On
                  vient pour le sport, on reste pour le vestiaire, les troisièmes mi-temps et les
                  gens qu’on y rencontre.
                </p>
              </article>
              <article className="hp-card">
                <h3>La formation</h3>
                <p>
                  Personne n’arrive en connaissant le football américain. Le club forme depuis 1987,
                  et il forme d’abord des débutants : gestes techniques, règles, lecture du jeu,
                  préparation physique. Le programme PPP structure cette progression pour toutes les
                  catégories.
                </p>
              </article>
              <article className="hp-card">
                <h3>L’inclusion</h3>
                <p>
                  Le football américain est l’un des rares sports collectifs où chaque gabarit a un
                  poste. Grand, petit, léger, puissant, rapide ou endurant : il existe un rôle où
                  votre morphologie devient un avantage. Le flag, lui, se joue en mixte, femmes et
                  hommes dans la même équipe.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── Le club en chiffres ── */}
        <section className="hp-sec" id="chiffres">
          <div className="hp-wrap">
            <div data-reveal>
              <p className="hp-eyebrow">Le club en chiffres</p>
              <h2 className="hp-h2">Quatre repères.</h2>
            </div>
            {/* À COMPLÉTER : chiffres officiels (licenciés, équipes engagées, bénévoles)
                à fournir par le club, puis remplacer les emplacements ci-dessous. */}
            <div className="hp-reperes" data-reveal>
              {CHIFFRES.map((c) => (
                <div key={c.valeur} className="hp-repere">
                  {c.aCompleter ? (
                    <>
                      <span className="hp-todo">À compléter</span>
                      <strong>{c.valeur}</strong>
                    </>
                  ) : (
                    <strong>{c.valeur}</strong>
                  )}
                  <span>{c.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Palmarès ── */}
        <section className="hp-sec" id="palmares" style={{ paddingTop: 0 }}>
          <div className="hp-wrap">
            <div data-reveal>
              <p className="hp-eyebrow">Palmarès</p>
              <h2 className="hp-h2">Nos résultats, section par section.</h2>
              <p className="hp-p">
                Le club met à jour cette page à la fin de chaque saison. Les lignes marquées comme à
                compléter attendent les résultats officiels.
              </p>
            </div>
            {/* À COMPLÉTER : palmarès saison par saison pour chaque section.
                Seule l'entrée « Flag mixte seniors » est confirmée à ce jour. */}
            <div className="hp-palmares" data-reveal>
              {PALMARES.map((p) => (
                <div key={p.section} className="hp-palm-row">
                  <span className="hp-palm-sec">{p.section}</span>
                  <span className="hp-palm-val">
                    {p.aCompleter ? (
                      <>
                        <span className="hp-todo">À compléter</span>{' '}
                        {p.resultat}
                      </>
                    ) : (
                      p.resultat
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Le programme PPP ── */}
        <section className="hp-dark" id="ppp">
          <div className="hp-wrap hp-ppp-grid" data-reveal>
            <img
              className="hp-ppp-logo"
              src={asset('/assets/logo-ppp.png')}
              alt="Logo du Pionniers Programme Performance"
              loading="lazy"
            />
            <div>
              <p className="hp-eyebrow">Pionniers Programme Performance</p>
              <h2 className="hp-h2">La méthode maison pour viser plus haut.</h2>
              <p className="hp-p">
                Préparation physique, technique, tactique et mentale : le PPP structure la
                progression de chaque athlète, à chaque entraînement. Débutant motivé ou joueur
                confirmé, chacun progresse dans un cadre exigeant et accessible.
              </p>
              <p className="hp-p">
                C’est aussi ce qui permet d’accueillir des débutants adultes sans les mettre en
                difficulté : les fondamentaux d’abord, la mise en situation ensuite, avec un
                encadrement à chaque étape.
              </p>
              <div className="hp-section-cta">
                <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>
                  Candidater au club
                </a>
                <Link className="sc-btn-ghost" href="/football-americain/">
                  Voir la section foot US
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA final ── */}
        <section className="hp-sec" id="candidater">
          <div className="hp-wrap">
            <div className="hp-inset" data-reveal>
              <p className="hp-eyebrow">Prendre sa place</p>
              <h2>Sur le terrain ou à nos côtés.</h2>
              <p>
                Jouer, encadrer, arbitrer, filmer, aider un jour de match ou soutenir le projet :
                les Pionniers ont besoin de profils très différents. Le parcours en ligne vous
                oriente vers la place qui vous correspond en deux minutes, sans engagement. Une
                semaine découverte est offerte à celles et ceux qui veulent d’abord essayer.
              </p>
              <div className="hp-section-cta">
                <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>
                  Commencer le parcours
                </a>
                <Link className="hp-ghost" href="/contact/">
                  Nous écrire
                </Link>
              </div>
            </div>

            <div className="hp-cards hp-cards-3" data-reveal style={{ marginTop: 24 }}>
              <article className="hp-card">
                <h3>Football américain</h3>
                <p>Le sport au contact, en compétition, pour les seniors et les juniors.</p>
                <Link className="hp-card-link" href="/football-americain/">
                  Découvrir la section <FaArrowRight size={12} />
                </Link>
              </article>
              <article className="hp-card">
                <h3>Flag football</h3>
                <p>Le 5 contre 5 sans contact, en mixte, olympique aux JO de 2028.</p>
                <Link className="hp-card-link" href="/flag-football/">
                  Découvrir la section <FaArrowRight size={12} />
                </Link>
              </article>
              <article className="hp-card">
                <h3>École de flag</h3>
                <p>Le samedi matin, dès 6 à 8 ans, zéro contact et matériel fourni.</p>
                <Link className="hp-card-link" href="/ecole-de-flag/">
                  Découvrir la section <FaArrowRight size={12} />
                </Link>
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
