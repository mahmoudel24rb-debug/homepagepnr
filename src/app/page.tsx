import SiteHeader from '@/components/SiteHeader';
import HomeHero from '@/components/HomeHero';
import ClubSection from '@/components/ClubSection';
import DisciplinesSection from '@/components/DisciplinesSection';
import SectionsGrid from '@/components/SectionsGrid';
import PPPBand from '@/components/PPPBand';
import JeunesSection from '@/components/JeunesSection';
import InfosSection from '@/components/InfosSection';
import BlogTeaser from '@/components/BlogTeaser';
import FaqSection from '@/components/FaqSection';
import FinalCta from '@/components/FinalCta';
import PartenairesBand from '@/components/PartenairesBand';
import SiteFooter from '@/components/SiteFooter';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HomeHero />
        <ClubSection />
        <DisciplinesSection />
        <SectionsGrid />
        <PPPBand />
        <JeunesSection />
        <InfosSection />
        <BlogTeaser />
        <FaqSection />
        <FinalCta />
        <PartenairesBand />
      </main>
      <SiteFooter />
    </>
  );
}
