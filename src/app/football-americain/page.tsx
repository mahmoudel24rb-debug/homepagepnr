import type { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import { asset } from '@/lib/asset';
import { STADE, HORAIRES, CONTACT, REJOINDRE_TUNNEL_URL } from '@/lib/infos';

/** Créneaux affichés sur cette page : les deux collectifs de football américain. */
const HORAIRES_FOOTUS = HORAIRES.filter(
  (h) => h.cat === 'Seniors · Foot US compétition' || h.cat === 'Juniors · Foot US & flag',
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
          <div className="hp-chips">
            <span className="hp-chip">Au contact</span>
            <span className="hp-chip">Compétition</span>
            <span className="hp-chip">Seniors &amp; juniors</span>
            <span className="hp-chip">Équipement prêté</span>
          </div>
          <div className="hp-section-cta">
            <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>Venir essayer</a>
            <a className="sc-btn-ghost" href="#horaires">Voir les horaires</a>
          </div>
        </PageHero>

        <section className="hp-sec">
          <div className="hp-wrap">
            <div data-reveal>
              <p className="hp-eyebrow">Le sport</p>
              <h2 className="hp-h2">Le football américain à Tours, c’est quoi ?</h2>
            </div>
            <div className="hp-two" data-reveal>
              <div className="hp-prose">
                <h3>Un jeu de conquête de terrain</h3>
                <p>
                  Le football américain se joue en phases arrêtées. À chaque action, l’attaque
                  dispose de quatre tentatives pour gagner dix yards ; si elle y parvient, le
                  compteur repart à zéro. Le jeu s’interrompt, tout le monde se replace, et une
                  nouvelle action commence. C’est ce rythme haché qui rend le sport lisible, même
                  quand on le découvre depuis le bord du terrain.
                </p>
                <p>
                  Deux unités distinctes se relaient : l’attaque, qui porte le ballon, et la
                  défense, qui doit l’arrêter. On ne joue donc pas les deux à la fois, et chaque
                  joueur apprend un rôle précis plutôt qu’un poste à tout faire. La stratégie compte
                  autant que le physique : avant chaque action, vous savez exactement ce que vous
                  avez à faire.
                </p>
                <p>
                  C’est aussi le sport collectif où le gabarit ferme le moins de portes. Un joueur
                  rapide et léger trouve sa place au large du terrain, un joueur puissant la trouve
                  au centre, dans la ligne. Grand, petit, fin ou massif : il existe un poste pour
                  chaque morphologie.
                </p>
                <h3>Débuter adulte, c’est la norme</h3>
                <p>
                  Le football américain ne s’apprend pas à l’école en France. L’immense majorité des
                  joueurs des championnats français ont donc découvert le sport à l’âge adulte,
                  souvent après avoir regardé un match à la télévision. Arriver sans rien connaître
                  n’est pas l’exception ici, c’est le cas le plus fréquent.
                </p>
                <p>
                  Les Pionniers de Touraine forment des débutants depuis 1987, ce qui fait du club
                  l’un des plus anciens clubs de football américain de France. Bientôt quarante ans
                  plus tard, la méthode tient en une phrase : les bases d’abord, le reste ensuite.
                  Aucun niveau athlétique n’est exigé au départ, et personne ne vous demandera votre
                  passé sportif avant de vous faire entrer sur le terrain.
                </p>
              </div>
              <aside className="hp-aside">
                <div className="hp-panel">
                  <h3>En bref</h3>
                  <ul className="hp-list">
                    <li>Sport au contact, avec casque et épaulières</li>
                    <li>Seniors en compétition et juniors en formation</li>
                    <li>Équipement de protection prêté aux débutants</li>
                    <li>Semaine découverte offerte, sans engagement</li>
                    <li>Licence FFFA incluse dans les formules d’adhésion</li>
                  </ul>
                </div>
                <div className="hp-panel">
                  <h3>Le stade</h3>
                  <ul className="hp-list">
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

        <section className="hp-dark">
          <div className="hp-wrap">
            <div data-reveal>
              <p className="hp-eyebrow">Le contact</p>
              <h2 className="hp-h2">Personne n’est jeté dans le grand bain.</h2>
            </div>
            <div className="hp-prose" data-reveal>
              <p>
                C’est la première question de celles et ceux qui hésitent : est-ce que ça fait mal ?
                La réponse tient surtout à la façon dont le contact s’apprend. Il ne s’improvise
                pas, il se construit par étapes, et l’ordre de ces étapes n’est jamais inversé.
              </p>
              <p>
                On commence sans opposition. Les gestes se travaillent d’abord à vide, puis à faible
                intensité, avec un partenaire coopératif. La technique de plaquage et, surtout, la
                technique de chute sont acquises avant toute mise en situation réelle. Savoir tomber
                est une compétence à part entière : c’est l’une des toutes premières choses que l’on
                enseigne.
              </p>
              <p>
                L’équipement complet, casque et épaulières, est <strong>prêté aux débutants</strong>.
                Vous n’avez donc rien à acheter pour essayer. L’échauffement et la préparation
                physique sont encadrés par le PPP, le Pionniers Programme Performance, qui couvre le
                physique, la technique, la tactique et le mental. On avance quand les bases sont là,
                pas avant.
              </p>
            </div>
          </div>
        </section>

        <section className="hp-sec">
          <div className="hp-wrap">
            <div data-reveal>
              <p className="hp-eyebrow">Nos collectifs</p>
              <h2 className="hp-h2">Deux collectifs, une même formation.</h2>
            </div>
            <div className="hp-cards" data-reveal>
              <article className="hp-card">
                <img
                  className="hp-card-badge"
                  src={asset('/assets/refonte/badge-1-footus.svg')}
                  alt="Écusson Foot US et Flag des Pionniers de Touraine"
                  loading="lazy"
                />
                <h3>Seniors, la compétition</h3>
                <div className="hp-chips">
                  <span className="hp-chip">Au contact</span>
                  <span className="hp-chip">Compétition</span>
                  <span className="hp-chip">Trois séances</span>
                </div>
                <p>
                  L’équipe senior s’entraîne trois fois par semaine et joue en compétition. Le
                  groupe accueille aussi bien des joueurs formés au club que des débutants complets,
                  encadrés par le PPP. Les premières semaines servent à apprendre, pas à performer.
                </p>
                <a className="hp-card-link" href={REJOINDRE_TUNNEL_URL}>
                  Venir essayer <FaArrowRight size={12} />
                </a>
              </article>
              <article className="hp-card">
                <img
                  className="hp-card-badge"
                  src={asset('/assets/refonte/badge-4-u18.svg')}
                  alt="Écusson de la section juniors des Pionniers de Touraine"
                  loading="lazy"
                />
                <h3>Juniors, la formation</h3>
                <div className="hp-chips">
                  <span className="hp-chip">Foot US &amp; flag</span>
                  <span className="hp-chip">Formation</span>
                  <span className="hp-chip">Deux séances</span>
                </div>
                <p>
                  Les juniors alternent football américain et flag football : la lecture du jeu et
                  la vitesse se travaillent sans passer tout de suite par le contact. Le passage
                  vers le groupe senior se prépare ici, saison après saison, avec le même
                  encadrement.
                </p>
                <a className="hp-card-link" href={REJOINDRE_TUNNEL_URL}>
                  Commencer le parcours <FaArrowRight size={12} />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="hp-sec" id="horaires">
          <div className="hp-wrap">
            <div data-reveal>
              <p className="hp-eyebrow">Infos pratiques</p>
              <h2 className="hp-h2">Horaires, stade et accès.</h2>
            </div>
            <div className="hp-two" data-reveal>
              <div className="hp-prose">
                <p>
                  Tous les entraînements de foot US à Tours ont lieu au {STADE.nom}, à Tours Nord.
                  Deux créneaux vous concernent selon votre âge. Venez en tenue de sport : le reste
                  vous est prêté.
                </p>
                <div className="hp-panel">
                  <h3>Entraînements de football américain</h3>
                  {HORAIRES_FOOTUS.map((h) => (
                    <div key={h.cat} className="hp-horaire">
                      <span className="hp-horaire-cat">{h.cat}</span>
                      <span className="hp-horaire-times">
                        {h.creneaux.map((c) => (
                          <span key={c}>{c}</span>
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <aside className="hp-aside">
                <div className="hp-panel">
                  <h3>Venir au stade</h3>
                  <ul className="hp-list">
                    <li>
                      <strong>{STADE.nom}</strong>, {STADE.rue}, {STADE.codePostal} {STADE.ville}
                    </li>
                    <li>Bus ligne 2, arrêt Maréchal Juin, ou ligne 12, arrêt Chambrerie / Giraudoux</li>
                    <li>A10, sortie n°19 Tours Nord à 5 minutes ; périphérique de Tours Nord à 3 minutes</li>
                  </ul>
                  {/* À COMPLÉTER : dates de reprise et de fin de saison des créneaux foot US. */}
                  <p className="hp-p" style={{ fontSize: 14, marginTop: 14 }}>
                    Dates de reprise de la saison : <span className="hp-todo">À compléter</span>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="hp-sec">
          <div className="hp-wrap">
            <div data-reveal>
              <p className="hp-eyebrow">Premiers pas</p>
              <h2 className="hp-h2">La semaine découverte, offerte.</h2>
            </div>
            <div className="hp-prose" data-reveal>
              <p>
                Essayer ne demande ni licence ni engagement. La semaine découverte est offerte :
                vous vous entraînez avec le groupe, dans les conditions réelles, et vous décidez
                après. Voilà comment cela se passe.
              </p>
              <ul className="hp-list">
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
            </div>

            <div className="hp-inset" data-reveal>
              <p className="hp-eyebrow">Passer à l’action</p>
              <h2>Comment nous rejoindre</h2>
              <p>
                Vous voulez jouer au football américain à Tours cette saison ? Écrivez au club ou
                lancez le parcours en ligne : nous vous indiquons le créneau qui vous correspond et
                la marche à suivre pour votre premier entraînement.
              </p>
              <div className="hp-section-cta">
                <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>Venir essayer</a>
                <Link className="hp-ghost" href="/contact/">Nous écrire</Link>
              </div>
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
                  {STADE.rue}, {STADE.codePostal} {STADE.ville}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="hp-sec">
          <div className="hp-wrap">
            <div data-reveal>
              <p className="hp-eyebrow">Aller plus loin</p>
              <h2 className="hp-h2">Les autres sections du club.</h2>
            </div>
            <div className="hp-prose" data-reveal>
              <p>
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
      </main>
      <SiteFooter />
    </>
  );
}
