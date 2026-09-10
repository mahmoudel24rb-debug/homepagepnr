import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import ReponseDirecte from '@/components/ReponseDirecte';
import YardLine from '@/components/YardLine';
import FaqSection from '@/components/FaqSection';
import TarifsBloc from '@/components/TarifsBloc';
import { asset } from '@/lib/asset';
import { STADE, HORAIRES, CONTACT, REJOINDRE_TUNNEL_URL } from '@/lib/infos';

/** FAQ de la page, affichée et exposée en données structurées FAQPage. */
const FAQ = [
  {
    q: 'Faut-il de l’expérience ?',
    r: 'Non. Le football américain ne s’apprend pas à l’école en France : la grande majorité des joueurs des championnats français ont découvert le sport à l’âge adulte. Arriver sans rien connaître est le cas le plus fréquent aux Pionniers, et personne ne vous demandera votre passé sportif avant de vous faire entrer sur le terrain.',
  },
  {
    q: 'Que dois-je apporter ?',
    r: 'Une tenue de sport et des chaussures adaptées à un terrain extérieur suffisent pour un premier entraînement. L’équipement de protection, casque et épaulières compris, est prêté aux débutants : vous n’avez rien à acheter pour essayer. Prévoyez aussi une gourde, les séances durent deux à trois heures.',
  },
  {
    q: 'Y a-t-il du contact ?',
    r: 'Oui, c’est la discipline au contact du club, avec casque et épaulières. Mais le contact ne s’improvise pas : on commence sans opposition, à vide, puis à faible intensité avec un partenaire coopératif. La technique de chute s’acquiert avant toute mise en situation réelle. Le flag football, lui, se joue sans aucun contact.',
  },
  {
    q: 'Combien coûte la saison ?',
    r: 'L’adhésion 2026/2027 est de 249,99 € par saison pour les seniors en compétition et de 150 € par saison pour les juniors U18, licence FFFA incluse dans les deux cas. Le paiement peut être fractionné en trois fois : 3 × 83,33 € pour les seniors, 3 × 50 € pour les juniors. La semaine découverte, elle, est offerte.',
  },
  {
    q: 'Comment essayer ?',
    r: `Écrivez au club à ${CONTACT.email}, appelez le ${CONTACT.telephone}, ou lancez le parcours en ligne en quelques minutes. Vous venez ensuite vous entraîner avec le groupe, sur un créneau adapté à votre âge, au stade de la Chambrerie. La semaine découverte est offerte, sans licence ni engagement.`,
  },
];

/** Créneaux affichés sur cette page : les deux collectifs de football américain. */
const HORAIRES_FOOTUS = HORAIRES.filter(
  (h) => h.cat === 'Seniors · Foot US compétition' || h.cat === 'Juniors · Foot US',
);

export const metadata: Metadata = {
  title: 'Football américain à Tours',
  description:
    'Jouer au football américain à Tours avec les Pionniers de Touraine (1987) : seniors en compétition, juniors, équipement prêté et semaine découverte offerte.',
  alternates: { canonical: '/football-americain/' },
  openGraph: {
    title: 'Football américain à Tours',
    description:
      'Seniors en compétition, juniors en formation, débutants bienvenus : le football américain à Tours au stade de la Chambrerie, avec équipement prêté.',
    url: '/football-americain/',
    type: 'article',
  },
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          fil="Football américain"
          chemin="/football-americain/"
          eyebrow="Nos sections"
          titre="Football américain à Tours"
          sousTitre="Le sport au contact, tel qu’on le pratique à la Chambrerie depuis 1987 : une équipe senior en compétition, un collectif juniors en formation, et des débutants accueillis chaque saison. Aucune expérience n’est demandée pour venir voir."
        >
          <div className="sc-chips" style={{ marginTop: 24 }}>
            <span className="sc-chip">Au contact</span>
            <span className="sc-chip">Compétition</span>
            <span className="sc-chip">Seniors &amp; juniors</span>
            <span className="sc-chip">Équipement prêté</span>
          </div>
          <div className="sc-ctas">
            <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>
              Venir essayer
            </a>
            <a className="sc-btn-ghost" href="#horaires">
              Voir les horaires
            </a>
          </div>
        </PageHero>

        {/* ── Réponse directe : qui, quoi, quand, où, combien, comment essayer ── */}
        <ReponseDirecte
          bouton="Venir essayer"
          reperes={[
            <><strong>Seniors</strong> : lundi et vendredi de 20h00 à 23h00, mercredi de 21h00 à 23h00</>,
            <><strong>Juniors U18</strong> : lundi et jeudi de 19h00 à 21h00</>,
            <><strong>{STADE.nom}</strong>, {STADE.rue}, {STADE.codePostal} {STADE.ville}</>,
            <>Casque et épaulières <strong>prêtés aux débutants</strong></>,
            <><strong>Séance d’essai gratuite</strong>, semaine découverte offerte</>,
            <>Licence FFFA incluse : <a href="#tarifs">voir les tarifs</a></>,
          ]}
        >
              Les Pionniers de Touraine font pratiquer le football américain à Tours depuis 1987, au{' '}
              {STADE.nom}, {STADE.rue}, {STADE.codePostal} {STADE.ville}. Deux collectifs
              s’entraînent au contact : les seniors, en compétition, le lundi et le vendredi de
              20h00 à 23h00 puis le mercredi de 21h00 à 23h00, et les juniors, en formation, le
              lundi et le jeudi de 19h00 à 21h00. Aucune expérience n’est demandée : la grande
              majorité des joueurs ont découvert le sport à l’âge adulte, et le contact s’apprend par
              étapes, en commençant par la technique de chute. L’équipement de protection, casque et
              épaulières, est prêté aux débutants : il suffit d’arriver en tenue de sport avec des
              chaussures de terrain. Une semaine découverte est offerte, et cette séance d’essai
              gratuite n’engage à rien : la licence FFFA vient ensuite, incluse dans les formules
              d’adhésion.
        </ReponseDirecte>

        {/* ── Le sport ── */}
        <section className="sc-sec" id="le-sport">
          <YardLine n="10" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Le sport</p>
              <h2 className="sc-title">Le football américain à Tours, c’est quoi ?</h2>
            </div>
            <div className="sc-two" data-reveal>
              <div className="sc-body">
                <h3 className="sc-h3">Un jeu de conquête de terrain</h3>
                <p className="sc-legal-text">
                  Le football américain se joue en phases arrêtées. À chaque action, l’attaque
                  dispose de quatre tentatives pour gagner dix yards ; si elle y parvient, le
                  compteur repart à zéro. Le jeu s’interrompt, tout le monde se replace, et une
                  nouvelle action commence. C’est ce rythme haché qui rend le sport lisible, même
                  quand on le découvre depuis le bord du terrain. Pour entrer dans le détail, nous
                  avons résumé{' '}
                  <Link href="/blog/regles-football-americain/">
                    les règles du football américain
                  </Link>{' '}
                  dans un article à part.
                </p>
                <p className="sc-legal-text">
                  Deux unités distinctes se relaient : l’attaque, qui porte le ballon, et la
                  défense, qui doit l’arrêter. On ne joue donc pas les deux à la fois, et chaque
                  joueur apprend un rôle précis plutôt qu’un poste à tout faire. La stratégie compte
                  autant que le physique : avant chaque action, vous savez exactement ce que vous
                  avez à faire.
                </p>
                <p className="sc-legal-text">
                  C’est aussi le sport collectif où le gabarit ferme le moins de portes. Un joueur
                  rapide et léger trouve sa place au large du terrain, un joueur puissant la trouve
                  au centre, dans la ligne. Grand, petit, fin ou massif : il existe un poste pour
                  chaque morphologie, et nous passons en revue{' '}
                  <Link href="/blog/postes-football-americain/">
                    les postes au football américain
                  </Link>{' '}
                  un par un.
                </p>
                <h3 className="sc-h3">Débuter adulte, c’est la norme</h3>
                <p className="sc-legal-text">
                  Le football américain ne s’apprend pas à l’école en France. L’immense majorité des
                  joueurs des championnats français ont donc découvert le sport à l’âge adulte,
                  souvent après avoir regardé un match à la télévision, comme nous l’expliquons dans
                  notre guide pour{' '}
                  <Link href="/blog/comment-regarder-le-college-football-en-france/">
                    regarder le college football en France
                  </Link>
                  . Arriver sans rien connaître n’est pas l’exception ici, c’est le cas le plus
                  fréquent : voyez{' '}
                  <Link href="/blog/commencer-le-football-americain-adulte/">
                    commencer le football américain à l’âge adulte
                  </Link>{' '}
                  et{' '}
                  <Link href="/blog/comment-pratiquer-le-football-americain-en-france/">
                    comment pratiquer le football américain en France
                  </Link>
                  .
                </p>
                <p className="sc-legal-text">
                  Les Pionniers de Touraine forment des débutants depuis 1987, ce qui fait du club
                  l’un des plus anciens clubs de football américain de France. Bientôt quarante ans
                  plus tard, la méthode tient en une phrase : les bases d’abord, le reste ensuite.
                  Aucun niveau athlétique n’est exigé au départ, et personne ne vous demandera votre
                  passé sportif avant de vous faire entrer sur le terrain.
                </p>
              </div>
              <aside className="sc-aside">
                <div className="sc-panel">
                  <h3 className="sc-panel-title">En bref</h3>
                  <ul className="sc-liste">
                    <li>Sport au contact, avec casque et épaulières</li>
                    <li>Seniors en compétition et juniors en formation</li>
                    <li>Équipement de protection prêté aux débutants</li>
                    <li>Semaine découverte offerte, sans engagement</li>
                    <li>Licence FFFA incluse dans les formules d’adhésion</li>
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
                      Bus ligne 2, arrêt Maréchal Juin, ou ligne 12, arrêt Chambrerie / Giraudoux :
                      5 minutes à pied
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── Le contact ── */}
        <section className="sc-sec" id="le-contact">
          <YardLine n="20" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Le contact</p>
              <h2 className="sc-title">Personne n’est jeté dans le grand bain.</h2>
            </div>
            <div className="sc-body" data-reveal style={{ marginTop: 30 }}>
              <p className="sc-legal-text">
                C’est la première question de celles et ceux qui hésitent : est-ce que ça fait mal ?
                La réponse tient surtout à la façon dont le contact s’apprend. Il ne s’improvise
                pas, il se construit par étapes, et l’ordre de ces étapes n’est jamais inversé.
              </p>
              <p className="sc-legal-text">
                On commence sans opposition. Les gestes se travaillent d’abord à vide, puis à faible
                intensité, avec un partenaire coopératif. La technique de plaquage et, surtout, la
                technique de chute sont acquises avant toute mise en situation réelle. Savoir tomber
                est une compétence à part entière : c’est l’une des toutes premières choses que l’on
                enseigne.
              </p>
              <p className="sc-legal-text">
                L’équipement complet, casque et épaulières, est <strong>prêté aux débutants</strong>
                . Vous n’avez donc rien à acheter pour essayer, et nous détaillons par ailleurs{' '}
                <Link href="/blog/equipement-football-americain-debutant/">
                  l’équipement pour débuter
                </Link>
                . L’échauffement et la préparation
                physique sont encadrés par le PPP, le Pionniers Programme Performance, qui couvre le
                physique, la technique, la tactique et le mental. On avance quand les bases sont là,
                pas avant.
              </p>
            </div>
          </div>
        </section>

        {/* ── Nos collectifs ── */}
        <section className="sc-sec" id="collectifs">
          <YardLine n="30" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Nos collectifs</p>
              <h2 className="sc-title">Deux collectifs, une même formation.</h2>
            </div>
            <div className="sc-cards sc-cards--deux" data-reveal>
              <article className="sc-card sc-card--statique">
                <div className="sc-card-badges">
                  <img
                    className="sc-card-badge"
                    src={asset('/assets/refonte/badge-1-footus.webp')}
                    alt="Écusson Foot US et Flag des Pionniers de Touraine"
                    width={560}
                    height={400}
                    loading="lazy"
                  />
                </div>
                <h3 className="sc-card-title">Seniors, la compétition</h3>
                <div className="sc-chips">
                  <span className="sc-chip">Au contact</span>
                  <span className="sc-chip">Compétition</span>
                  <span className="sc-chip">Trois séances</span>
                </div>
                <p className="sc-card-desc">
                  L’équipe senior s’entraîne trois fois par semaine et joue en compétition. Le
                  groupe accueille aussi bien des joueurs formés au club que des débutants complets,
                  encadrés par le PPP. Les premières semaines servent à apprendre, pas à performer.
                </p>
                <a className="sc-card-cta" href={REJOINDRE_TUNNEL_URL}>
                  Venir essayer <ArrowRight size={15} strokeWidth={2.6} />
                </a>
              </article>
              <article className="sc-card sc-card--statique">
                <div className="sc-card-badges">
                  <img
                    className="sc-card-badge sc-card-badge--u18"
                    src={asset('/assets/refonte/badge-4-u18.webp')}
                    alt="Écusson de la section juniors des Pionniers de Touraine"
                    width={460}
                    height={400}
                    loading="lazy"
                  />
                </div>
                <h3 className="sc-card-title">Juniors, la formation</h3>
                <div className="sc-chips">
                  <span className="sc-chip">Foot US &amp; flag</span>
                  <span className="sc-chip">Formation</span>
                  <span className="sc-chip">Deux séances</span>
                </div>
                <p className="sc-card-desc">
                  Les juniors alternent football américain et flag football : la lecture du jeu et
                  la vitesse se travaillent sans passer tout de suite par le contact. Le passage
                  vers le groupe senior se prépare ici, saison après saison, avec le même
                  encadrement. Le détail des créneaux et des tarifs est réuni sur la page{' '}
                  <Link href="/jeunes/">football américain et flag pour les jeunes</Link>.
                </p>
                <a className="sc-card-cta" href={REJOINDRE_TUNNEL_URL}>
                  Commencer le parcours <ArrowRight size={15} strokeWidth={2.6} />
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* ── Infos pratiques ── */}
        <section className="sc-sec" id="horaires">
          <YardLine n="40" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Infos pratiques</p>
              <h2 className="sc-title">Horaires, stade et accès.</h2>
              <p className="sc-lead">
                Tous les entraînements de foot US à Tours ont lieu au{' '}
                <Link href="/blog/stade-de-la-chambrerie-tours/">
                  stade de la Chambrerie à Tours
                </Link>
                , à Tours Nord. Deux créneaux vous concernent selon votre âge. Venez en tenue de
                sport : le reste vous est prêté.
              </p>
            </div>
            <div className="sc-two" data-reveal>
              <div className="sc-panel">
                <h3 className="sc-panel-title">Entraînements de football américain</h3>
                <div className="sc-horaires">
                  {HORAIRES_FOOTUS.map((h) => (
                    <div key={h.cat} className="sc-horaire">
                      <span className="sc-horaire-cat">{h.cat}</span>
                      <span className="sc-horaire-time">{h.creneaux.join(' / ')}</span>
                    </div>
                  ))}
                </div>
              </div>
              <aside className="sc-aside">
                <div className="sc-panel">
                  <h3 className="sc-panel-title">Venir au stade</h3>
                  <ul className="sc-liste">
                    <li>
                      <strong>{STADE.nom}</strong>, {STADE.rue}, {STADE.codePostal} {STADE.ville}
                    </li>
                    <li>
                      Bus ligne 2, arrêt Maréchal Juin, ou ligne 12, arrêt Chambrerie / Giraudoux
                    </li>
                    <li>
                      A10, sortie n°19 Tours Nord à 5 minutes ; périphérique de Tours Nord à 3
                      minutes
                    </li>
                  </ul>
                  {/* À COMPLÉTER : dates de reprise et de fin de saison des créneaux foot US. */}
                  <p className="sc-legal-text" style={{ marginTop: 16 }}>
                    Dates de reprise de la saison : <span className="sc-todo">À compléter</span>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── Tarifs ── */}
        <TarifsBloc sections={['foot-us']} />

        {/* ── Premiers pas ── */}
        <section className="sc-sec" id="premiers-pas">
          <YardLine n="50" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Premiers pas</p>
              <h2 className="sc-title">La semaine découverte, offerte.</h2>
            </div>
            <div className="sc-body" data-reveal style={{ marginTop: 30 }}>
              <p className="sc-legal-text">
                Une séance d’essai gratuite, puis une semaine découverte offerte : venez tester
                avant de vous licencier. Essayer ne demande ni licence ni engagement : vous vous
                entraînez avec le groupe, dans les conditions réelles, et vous décidez après.
                Voilà comment cela se passe.
              </p>
              <ul className="sc-liste">
                <li>
                  <strong>Vous prenez contact.</strong> Un message au club, ou le parcours en ligne
                  qui prend quelques minutes.
                </li>
                <li>
                  <strong>Vous venez vous entraîner.</strong> En tenue de sport, avec des chaussures
                  de terrain. L’équipement de protection vous est prêté sur place.
                </li>
                <li>
                  <strong>Vous décidez ensuite.</strong> Si vous continuez, la licence FFFA est
                  incluse dans les formules d’adhésion.
                </li>
              </ul>
              <p className="sc-legal-text" style={{ marginTop: 18 }}>
                Avant de vous décider, vous voulez sans doute savoir{' '}
                <Link href="/blog/combien-coute-le-football-americain/">
                  combien coûte une saison de football américain
                </Link>{' '}
                : nous détaillons les postes de dépense, licence comprise.
              </p>
            </div>

            <div className="sc-contacts" data-reveal>
              <div className="sc-contact-item">
                <span>Email</span>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
              <div className="sc-contact-item">
                <span>Téléphone</span>
                <a href={CONTACT.telHref}>{CONTACT.telephone}</a>
              </div>
              <div className="sc-contact-item">
                <span>Le stade</span>
                <p>
                  {STADE.nom}
                  <br />
                  {STADE.rue}, {STADE.codePostal} {STADE.ville}
                </p>
              </div>
            </div>

            <div className="sc-body" data-reveal style={{ marginTop: 'clamp(48px, 5vw, 70px)' }}>
              <p className="sc-eyebrow">Aller plus loin</p>
              <h2 className="sc-title" style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}>
                Les autres sections du club.
              </h2>
              <p className="sc-legal-text" style={{ marginTop: 18 }}>
                Le contact ne vous tente pas ? Le{' '}
                <Link href="/flag-football/">flag football</Link> se joue à cinq contre cinq, en
                mixte et sans contact, et devient sport olympique aux JO de Los Angeles 2028. Pour
                les plus jeunes, l’<Link href="/ecole-de-flag/">école de flag</Link> ouvre la porte
                du club le samedi matin. Et si vous voulez savoir d’où viennent les Pionniers,
                l’histoire du <Link href="/le-club/">club depuis 1987</Link> est racontée ici.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FaqSection titre="Avant votre premier entraînement." items={FAQ} />

        {/* ── CTA final ── */}
        <section className="sc-sec sc-endzone" id="nous-rejoindre">
          <YardLine n="endzone" />
          <div className="sc-wrap" data-reveal>
            <p className="sc-eyebrow">Passer à l’action</p>
            <h2 className="sc-title">Comment nous rejoindre</h2>
            <p className="sc-lead" style={{ maxWidth: 660 }}>
              Vous voulez jouer au football américain à Tours cette saison ? Écrivez au club ou
              lancez le parcours en ligne : nous vous indiquons le créneau qui vous correspond et la
              marche à suivre pour votre premier entraînement.
            </p>
            <div className="sc-ctas" style={{ justifyContent: 'center' }}>
              <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>
                Venir essayer
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
