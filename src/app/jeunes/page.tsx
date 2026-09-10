import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import YardLine from '@/components/YardLine';
import FaqSection from '@/components/FaqSection';
import TarifsBloc from '@/components/TarifsBloc';
import { getEmoji } from '@/lib/funnelIcons';
import { STADE, CONTACT, REJOINDRE_TUNNEL_URL, ECOLE_DE_FLAG_AGES } from '@/lib/infos';

// Démo GitHub Pages : pas de canonique, la démo est déjà noindex (layout).
const IS_DEMO = (process.env.NEXT_PUBLIC_BASE_PATH ?? '/homepagepnr') !== '/';

export const metadata: Metadata = {
  title: 'Foot US et flag pour les jeunes à Tours',
  description:
    'Les sections jeunes des Pionniers de Touraine à Tours : école de flag U7 à U18, flag mixte juniors, foot US juniors. Horaires, tarifs et essai gratuit.',
  ...(IS_DEMO ? {} : { alternates: { canonical: '/jeunes/' } }),
  openGraph: {
    title: 'Foot US et flag pour les jeunes à Tours',
    description:
      'École de flag le samedi, flag mixte juniors le jeudi, foot US juniors lundi et jeudi : le parcours jeunes des Pionniers de Touraine, de U7 à U18.',
    url: '/jeunes/',
    type: 'article',
  },
};

/** Les trois collectifs jeunes du club, dans l'ordre d'entrée dans la pratique. */
const COLLECTIFS = [
  {
    emoji: 'jeunes-flag',
    alt: 'Emoji drapeau NFL Flag',
    titre: 'École de flag',
    chips: ['U7 à U18', 'Samedi 10h-12h', 'Zéro contact'],
    texte:
      'La porte d’entrée du club pour les plus jeunes, le samedi matin. On y apprend le flag football par le jeu : courir, attraper, lancer, arracher le flag. Les groupes sont constitués par âge, et les ceintures comme les flags sont fournis par le club.',
    href: '/ecole-de-flag/',
    cta: 'Voir l’école de flag',
  },
  {
    emoji: 'flag',
    alt: 'Emoji flag football',
    titre: 'Flag mixte juniors',
    chips: ['Jeudi 19h-20h30', 'Mixte', 'Sans contact'],
    texte:
      'Un créneau de flag en semaine, pour les jeunes qui veulent jouer davantage ou aller vers la compétition. Filles et garçons sur le même terrain, toujours sans aucun contact : l’intensité vient de la vitesse et de la lecture du jeu.',
    href: '/flag-football/',
    cta: 'Voir le flag football',
  },
  {
    emoji: 'foot-us',
    alt: 'Emoji football américain',
    titre: 'Foot US juniors U18',
    chips: ['Nés 2009-2011', 'Lundi & jeudi 19h-21h', 'Initiation au contact'],
    texte:
      'L’équipe U18 découvre le football américain avec casque et épaulières. Le contact s’apprend par étapes, en commençant par la technique de chute, et l’équipement de protection est prêté pour les premières séances.',
    href: '/football-americain/',
    cta: 'Voir le football américain',
  },
];

/** FAQ de la page, affichée et exposée en données structurées FAQPage. */
const FAQ = [
  {
    q: 'À partir de quel âge peut-on commencer ?',
    r: `L’école de flag accueille les ${ECOLE_DE_FLAG_AGES}, du plus jeune groupe jusqu’aux adolescents. Les groupes sont constitués par âge, pour que chacun joue avec des enfants de son gabarit. Les jeunes nés en 2009, 2010 et 2011 peuvent en plus rejoindre l’équipe U18 de football américain, qui s’entraîne le lundi et le jeudi en soirée.`,
  },
  {
    q: 'Y a-t-il du contact ?',
    r: 'Cela dépend de la section. À l’école de flag et au flag mixte juniors, il n’y a aucun contact : le règlement l’interdit, on arrache un ruban à la ceinture au lieu de plaquer, et aucune protection n’est nécessaire. Chez les juniors de football américain, le contact existe, mais il s’apprend par étapes, avec casque et épaulières prêtés.',
  },
  {
    q: 'Que doit apporter mon enfant ?',
    r: 'Une tenue de sport confortable, des chaussures adaptées à un terrain extérieur et une gourde suffisent, avec une veste ou un coupe-vent selon la météo. Les ceintures et les flags sont fournis par le club. Pour le football américain, le casque et les épaulières sont prêtés au début : il n’y a rien à acheter pour venir essayer.',
  },
  {
    q: 'Faut-il savoir jouer ?',
    r: 'Non. Les jeunes arrivent presque toujours sans rien connaître du ballon ovale, et beaucoup de parents découvrent la discipline en même temps qu’eux. Les encadrants décomposent chaque geste en petits groupes, puis le remettent dans le jeu. Aucun niveau n’est demandé à l’entrée, ni au flag ni au football américain.',
  },
  {
    q: 'Combien coûte la saison ?',
    r: 'L’adhésion à l’école de flag est de 100 € par saison, licence FFFA incluse. Chez les juniors U18 de football américain, elle est de 150 € par saison, licence FFFA incluse également, avec un paiement possible en trois fois de 50 €. La semaine découverte, elle, est offerte : rien n’est demandé avant de se décider.',
  },
  {
    q: 'Comment essayer ?',
    r: `Écrivez au club à ${CONTACT.email}, appelez le ${CONTACT.telephone}, ou remplissez le parcours en ligne en deux minutes. Votre enfant vient ensuite sur le créneau qui correspond à son âge, au ${STADE.nom}, en tenue de sport. La première séance est un essai gratuit, et la semaine découverte est offerte, sans engagement.`,
  },
];

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          fil="Jeunes"
          chemin="/jeunes/"
          eyebrow="Nos sections"
          titre="Football américain et flag football pour les jeunes à Tours"
          sousTitre="Trois créneaux réservés aux jeunes au stade de la Chambrerie : l’école de flag le samedi matin, le flag mixte juniors le jeudi soir et les juniors de football américain le lundi et le jeudi. Sans contact chez les plus jeunes, avec initiation au contact chez les U18."
        >
          <div className="sc-chips" style={{ marginTop: 24 }}>
            <span className="sc-chip">U7 à U18</span>
            <span className="sc-chip">École de flag le samedi</span>
            <span className="sc-chip">Flag juniors le jeudi</span>
            <span className="sc-chip">Foot US juniors lundi et jeudi</span>
          </div>
          <div className="sc-ctas">
            <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>
              Inscrire mon enfant
            </a>
            <a className="sc-btn-ghost" href="#tarifs">
              Voir les tarifs
            </a>
          </div>
        </PageHero>

        {/* ── Réponse directe : qui, quoi, quand, où, combien, comment ── */}
        <section className="sc-sec" id="en-resume">
          <div className="sc-wrap" data-reveal>
            <p className="sc-lead">
              Les Pionniers de Touraine font jouer les jeunes au football américain et au flag
              football à Tours depuis 1987, au {STADE.nom}, {STADE.rue}, {STADE.codePostal}{' '}
              {STADE.ville}. Trois créneaux leur sont réservés : l’école de flag, sans aucun
              contact, le samedi de 10h00 à 12h00, pour les {ECOLE_DE_FLAG_AGES} ; le flag mixte
              juniors, sans contact lui aussi, le jeudi de 19h00 à 20h30 ; et les juniors de
              football américain, avec initiation au contact, le lundi et le jeudi de 19h00 à
              21h00, pour les jeunes nés en 2009, 2010 et 2011. L’adhésion est de 100 € par saison
              à l’école de flag et de 150 € par saison chez les juniors U18, licence FFFA incluse
              dans les deux cas. Une séance d’essai gratuite, puis une semaine découverte offerte :
              venez tester avant de vous licencier, en tenue de sport, sans rien acheter.
            </p>
          </div>
        </section>

        {/* ── Le parcours par âge ── */}
        <section className="sc-sec" id="parcours">
          <YardLine n="10" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Trouver le bon créneau</p>
              <h2 className="sc-title">Le parcours par âge.</h2>
              <p className="sc-lead">
                Un jeune n’entre pas au club par la même porte à sept ans et à seize ans. Le tableau
                ci-dessous résume les trois collectifs jeunes, leurs années de naissance, leurs
                créneaux et leur rapport au contact, pour que vous sachiez tout de suite où se situe
                votre enfant. Si vous hésitez encore sur le moment de commencer, nous avons répondu
                en détail à la question{' '}
                <Link href="/blog/a-quel-age-commencer-le-football-americain/">
                  à quel âge commencer le football américain
                </Link>
                .
              </p>
            </div>

            <div
              data-reveal
              role="region"
              tabIndex={0}
              aria-label="Le parcours jeunes par âge"
              style={{ overflowX: 'auto', marginTop: 30 }}
            >
              <table
                style={{
                  width: '100%',
                  minWidth: 640,
                  borderCollapse: 'collapse',
                  fontSize: 'clamp(14px, 1.2vw, 16px)',
                  color: 'var(--sc-cream-72)',
                  textAlign: 'left',
                }}
              >
                <thead>
                  <tr>
                    <th scope="col" style={{ padding: '12px 14px', borderBottom: '1px solid var(--sc-line)', color: 'var(--rf-cream)' }}>
                      Catégorie
                    </th>
                    <th scope="col" style={{ padding: '12px 14px', borderBottom: '1px solid var(--sc-line)', color: 'var(--rf-cream)' }}>
                      Années de naissance
                    </th>
                    <th scope="col" style={{ padding: '12px 14px', borderBottom: '1px solid var(--sc-line)', color: 'var(--rf-cream)' }}>
                      Créneau
                    </th>
                    <th scope="col" style={{ padding: '12px 14px', borderBottom: '1px solid var(--sc-line)', color: 'var(--rf-cream)' }}>
                      Contact
                    </th>
                    <th scope="col" style={{ padding: '12px 14px', borderBottom: '1px solid var(--sc-line)', color: 'var(--rf-cream)' }}>
                      Tarif
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" style={{ padding: '12px 14px', borderBottom: '1px solid var(--sc-line)', color: 'var(--rf-cream)', fontWeight: 700 }}>
                      École de flag
                    </th>
                    <td style={{ padding: '12px 14px', borderBottom: '1px solid var(--sc-line)' }}>
                      Nés de 2009 à 2021 (U7 à U18), groupes constitués par âge
                    </td>
                    <td style={{ padding: '12px 14px', borderBottom: '1px solid var(--sc-line)' }}>
                      Samedi 10h00 à 12h00
                    </td>
                    <td style={{ padding: '12px 14px', borderBottom: '1px solid var(--sc-line)' }}>
                      Aucun contact
                    </td>
                    <td style={{ padding: '12px 14px', borderBottom: '1px solid var(--sc-line)' }}>
                      100 € / saison, licence FFFA incluse
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" style={{ padding: '12px 14px', borderBottom: '1px solid var(--sc-line)', color: 'var(--rf-cream)', fontWeight: 700 }}>
                      Flag mixte juniors
                    </th>
                    <td style={{ padding: '12px 14px', borderBottom: '1px solid var(--sc-line)' }}>
                      Jeunes de l’école de flag, selon l’âge et l’envie de compétition
                    </td>
                    <td style={{ padding: '12px 14px', borderBottom: '1px solid var(--sc-line)' }}>
                      Jeudi 19h00 à 20h30
                    </td>
                    <td style={{ padding: '12px 14px', borderBottom: '1px solid var(--sc-line)' }}>
                      Aucun contact
                    </td>
                    <td style={{ padding: '12px 14px', borderBottom: '1px solid var(--sc-line)' }}>
                      Selon la formule retenue : <Link href="/contact/">nous écrire</Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" style={{ padding: '12px 14px', color: 'var(--rf-cream)', fontWeight: 700 }}>
                      Foot US juniors U18
                    </th>
                    <td style={{ padding: '12px 14px' }}>Nés en 2009, 2010 et 2011</td>
                    <td style={{ padding: '12px 14px' }}>Lundi et jeudi 19h00 à 21h00</td>
                    <td style={{ padding: '12px 14px' }}>Oui, initiation par étapes</td>
                    <td style={{ padding: '12px 14px' }}>
                      150 € / saison ou 3 × 50 €, licence FFFA incluse
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="sc-cards" data-reveal style={{ marginTop: 34 }}>
              {COLLECTIFS.map((c) => (
                <Link key={c.titre} className="sc-card" href={c.href}>
                  <div className="sc-card-badges">
                    <img
                      className="sc-card-badge"
                      src={getEmoji(c.emoji)}
                      alt={c.alt}
                      width={160}
                      height={160}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="sc-card-title">{c.titre}</h3>
                  <div className="sc-chips">
                    {c.chips.map((ch) => (
                      <span key={ch} className="sc-chip">
                        {ch}
                      </span>
                    ))}
                  </div>
                  <p className="sc-card-desc">{c.texte}</p>
                  <span className="sc-card-cta">
                    {c.cta} <ArrowRight size={15} strokeWidth={2.6} />
                  </span>
                </Link>
              ))}
            </div>

            <div className="sc-body" data-reveal style={{ marginTop: 34 }}>
              <h3 className="sc-h3">Passer d’un créneau à l’autre</h3>
              <p className="sc-legal-text">
                Rien n’oblige un jeune à rester dans une seule case. Beaucoup commencent par{' '}
                <Link href="/ecole-de-flag/">l’école de flag du samedi matin</Link>, découvrent le
                jeu sans contact, puis ajoutent le créneau de flag mixte juniors du jeudi quand
                l’envie de jouer davantage arrive. Les jeunes nés en 2009, 2010 et 2011 peuvent
                ensuite rejoindre l’équipe U18 de football américain, sans quitter le flag pour
                autant : les juniors alternent les deux disciplines, la vitesse et la lecture du jeu
                d’un côté, la technique du contact de l’autre.
              </p>
              <p className="sc-legal-text">
                Comme les formules et les créneaux se combinent, le plus simple reste de nous dire
                l’âge de votre enfant et ce qu’il cherche. Nous détaillons aussi ce parcours dans{' '}
                <Link href="/blog/football-americain-jeunes-u13-u16-u18/">
                  football américain et flag pour les jeunes
                </Link>{' '}
                et, pour les familles qui comparent plusieurs activités, dans{' '}
                <Link href="/blog/quel-sport-pour-mon-enfant-tours/">
                  quel sport pour mon enfant à Tours
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ── Sécurité et encadrement ── */}
        <section className="sc-sec" id="securite">
          <YardLine n="20" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">La question des parents</p>
              <h2 className="sc-title">Sécurité et encadrement.</h2>
            </div>
            <div className="sc-two" data-reveal>
              <div className="sc-body">
                <h3 className="sc-h3">Zéro contact chez les plus jeunes</h3>
                <p className="sc-legal-text">
                  C’est la première question posée au bord du terrain, et la réponse est simple : à
                  l’école de flag comme au flag mixte juniors, il n’y a aucun contact. Ce n’est pas
                  une consigne d’entraînement mais le règlement lui-même : au lieu de plaquer, on
                  arrache un ruban accroché à la ceinture du porteur de balle, et l’action s’arrête
                  là. Pas de plaquage, pas de blocage, pas de choc entre joueurs. Aucun casque ni
                  aucune protection n’est nécessaire, parce qu’il n’y a rien contre quoi se
                  protéger.
                </p>
                <h3 className="sc-h3">Le contact s’apprend par étapes chez les U18</h3>
                <p className="sc-legal-text">
                  Chez les juniors de football américain, le contact existe, avec casque et
                  épaulières. Mais il ne s’improvise pas et l’ordre des étapes n’est jamais inversé.
                  On commence sans opposition, à vide, puis à faible intensité avec un partenaire
                  coopératif. La technique de chute, savoir tomber, s’acquiert avant toute mise en
                  situation réelle : c’est l’une des toutes premières choses enseignées.
                  L’équipement de protection est prêté pour les premières séances, il n’y a donc
                  rien à acheter pour essayer.
                </p>
                <h3 className="sc-h3">Un encadrement diplômé et une licence</h3>
                <p className="sc-legal-text">
                  Les séances sont menées par un encadrement diplômé, et l’adhésion comprend la
                  licence de la Fédération Française de Football Américain. Le club fait pratiquer
                  ces deux disciplines depuis 1987, ce qui en fait l’un des plus anciens clubs de
                  football américain de France : la progression des jeunes s’y construit sur des
                  repères connus, pas sur l’improvisation.
                </p>
              </div>
              <aside className="sc-aside">
                <div className="sc-panel">
                  <h3 className="sc-panel-title">En bref</h3>
                  <ul className="sc-liste">
                    <li>
                      <strong>Zéro contact</strong> à l’école de flag et au flag mixte juniors
                    </li>
                    <li>
                      Chez les U18, <strong>initiation au contact par étapes</strong>, technique de
                      chute d’abord
                    </li>
                    <li>
                      Casque et épaulières <strong>prêtés</strong> pour les premières séances
                    </li>
                    <li>
                      <strong>Encadrement diplômé</strong> sur tous les créneaux
                    </li>
                    <li>
                      <strong>Licence FFFA incluse</strong> dans l’adhésion
                    </li>
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
                      En bus : ligne 2, arrêt Maréchal Juin, ou ligne 12, arrêt Chambrerie /
                      Giraudoux, à 5 minutes à pied
                    </li>
                    <li>
                      En voiture : A10, sortie n°19 (Tours Nord) à 5 minutes, périphérique de Tours
                      Nord à 3 minutes
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── Ce qu'il faut apporter ── */}
        <section className="sc-sec" id="apporter">
          <YardLine n="30" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Avant la première séance</p>
              <h2 className="sc-title">Ce qu’il faut apporter.</h2>
              <p className="sc-lead">
                Rien de compliqué, et surtout rien à acheter pour venir essayer : le club fournit
                tout ce qui est spécifique à la discipline.
              </p>
            </div>
            <div className="sc-body" data-reveal style={{ marginTop: 30 }}>
              <ul className="sc-liste">
                <li>
                  Une <strong>tenue de sport</strong> confortable, dans laquelle votre enfant peut
                  courir librement.
                </li>
                <li>
                  Des <strong>chaussures adaptées au terrain</strong>, en extérieur, et une veste ou
                  un coupe-vent selon la météo.
                </li>
                <li>
                  Une <strong>gourde</strong> : on boit souvent, même quand il ne fait pas chaud.
                </li>
                <li>
                  Les <strong>ceintures et les flags sont fournis</strong> par le club, à l’école de
                  flag comme chez les juniors.
                </li>
                <li>
                  Pour le football américain, le <strong>casque et les épaulières sont prêtés</strong>{' '}
                  au début : personne n’achète son équipement avant d’avoir essayé.
                </li>
              </ul>
              <p className="sc-legal-text" style={{ marginTop: 18 }}>
                Cette liste vaut pour la séance d’essai comme pour le reste de la saison. Si vous
                voulez anticiper le budget d’une année complète, nous détaillons{' '}
                <Link href="/blog/combien-coute-le-football-americain/">
                  le coût d’une saison pour un jeune
                </Link>
                , poste par poste, licence comprise.
              </p>
            </div>
          </div>
        </section>

        {/* ── Compétitions ── */}
        <section className="sc-sec" id="competitions">
          <YardLine n="40" />
          <div className="sc-wrap">
            <div data-reveal>
              <p className="sc-eyebrow">Jouer pour de vrai</p>
              <h2 className="sc-title">Les compétitions jeunes.</h2>
            </div>
            <div className="sc-body" data-reveal style={{ marginTop: 30 }}>
              <p className="sc-legal-text">
                Une saison ne se résume pas aux entraînements. L’adhésion à l’école de flag donne
                accès au <strong>championnat jeunes U13, U15 et U18</strong> ainsi qu’au{' '}
                <strong>programme NFL Flag, en U13 et U15</strong>. Au fil de l’année, les équipes
                disputent des championnats régionaux et des championnats nationaux, ainsi que des
                rencontres au format NFL FLAG.
              </p>
              <p className="sc-legal-text">
                La compétition n’est pas une obligation d’entrée : un jeune peut passer une première
                saison à découvrir le jeu le samedi matin, puis basculer vers le créneau du jeudi et
                les rencontres quand il en a envie. C’est aussi ce qui distingue les deux
                disciplines du club : le{' '}
                <Link href="/flag-football/">flag football</Link> se joue à 5 contre 5 sans aucun
                contact et devient sport olympique aux Jeux de Los Angeles 2028, tandis que le{' '}
                <Link href="/football-americain/">football américain</Link> se joue au contact, avec
                casque et épaulières, en championnat.
              </p>
              <p className="sc-legal-text">
                Une question sur une catégorie, un créneau ou une date ? La page{' '}
                <Link href="/contact/">contact</Link> permet de joindre le club directement, par
                mail ou par téléphone, et personne n’a besoin de remplir trois formulaires pour
                obtenir une réponse.
              </p>
            </div>
          </div>
        </section>

        {/* ── Tarifs jeunes ── */}
        <TarifsBloc
          sections={['ecole', 'foot-us']}
          noms={['École de flag', 'Foot US juniors U18']}
          titre="Tarifs jeunes 2026/2027"
        />

        {/* ── FAQ ── */}
        <FaqSection titre="Les questions des parents." items={FAQ} />

        {/* ── CTA final ── */}
        <section className="sc-sec sc-endzone" id="inscription">
          <YardLine n="endzone" />
          <div className="sc-wrap" data-reveal>
            <p className="sc-eyebrow">Première séance</p>
            <h2 className="sc-title">Inscrire mon enfant</h2>
            <p className="sc-lead" style={{ maxWidth: 640 }}>
              Une <strong>séance d’essai gratuite</strong>, puis une{' '}
              <strong>semaine découverte offerte</strong> : votre enfant vient tester avant de se
              licencier, en tenue de sport, sans engagement.
            </p>
            <ul
              className="sc-liste"
              style={{ display: 'inline-grid', textAlign: 'left', margin: '20px auto 0' }}
            >
              <li>
                <strong>1.</strong> Vous nous écrivez ou vous remplissez le parcours en ligne, en
                deux minutes.
              </li>
              <li>
                <strong>2.</strong> Nous vous indiquons le créneau qui correspond à son âge.
              </li>
              <li>
                <strong>3.</strong> Si le courant passe, on finalise l’adhésion, licence FFFA
                incluse.
              </li>
            </ul>
            <div className="sc-ctas" style={{ justifyContent: 'center' }}>
              <a className="sc-btn" href={REJOINDRE_TUNNEL_URL}>
                Inscrire mon enfant
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
