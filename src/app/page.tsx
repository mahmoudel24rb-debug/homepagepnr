import SiteHeader from '@/components/SiteHeader';
import SiteHero from '@/components/SiteHero';
import YardLine from '@/components/YardLine';
import ClubSlideshow from '@/components/ClubSlideshow';
import SectionsGrid from '@/components/SectionsGrid';
import PPPSection from '@/components/PPPSection';
import PartenairesBand from '@/components/PartenairesBand';
import BlogTeaser from '@/components/BlogTeaser';
import FaqHome from '@/components/FaqHome';
import EndzoneSection from '@/components/EndzoneSection';
import SiteFooter from '@/components/SiteFooter';

/** Repères du club, affichés en liste sous le texte d'histoire. */
const REPERES = [
  { label: '1987', detail: 'Fondation du club à Tours : le football américain arrive en Touraine.' },
  { label: 'Deux sports', detail: 'Football américain au contact, flag football sans contact.' },
  { label: 'Quatre collectifs', detail: 'Seniors foot US, flag mixte, juniors U18 et école de flag.' },
  { label: 'Cap 2028', detail: 'Le flag football devient olympique aux JO de Los Angeles.' },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <SiteHero />

        <section className="sc-sec" id="club">
          <YardLine n="10" />
          <div className="sc-wrap">
            <div className="sc-club-grid">
              <div data-reveal>
                <p className="sc-eyebrow">Le club</p>
                <h2 className="sc-title">
                  Le football américain{' '}
                  <br />
                  au cœur de la Touraine.
                </h2>
                <p className="sc-lead">
                  Les <strong>Pionniers de Touraine</strong> sont le club de football américain et
                  de flag football de <strong>Tours</strong>, en Indre-et-Loire. Depuis 1987, le
                  club forme des athlètes de tous âges et de tous niveaux : équipe senior en
                  championnat, juniors U18, flag mixte et école de flag pour les plus jeunes.
                </p>
                <ul className="sc-reperes">
                  {REPERES.map((r) => (
                    <li key={r.label}>
                      <span className="sc-repere-label">{r.label}</span>
                      <span className="sc-repere-txt">{r.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sc-club-media" data-reveal>
                <ClubSlideshow />
              </div>
            </div>
          </div>
        </section>

        <SectionsGrid />
        <PPPSection />
        <PartenairesBand />
        <BlogTeaser />
        <FaqHome />
        <EndzoneSection />
      </main>
      <SiteFooter />
    </>
  );
}
