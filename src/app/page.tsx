import SiteHeader from '@/components/SiteHeader';
import HomeHero from '@/components/HomeHero';
import ClubSection from '@/components/ClubSection';
import DisciplinesSection from '@/components/DisciplinesSection';
import PPPBand from '@/components/PPPBand';
import JeunesSection from '@/components/JeunesSection';
import InfosSection from '@/components/InfosSection';
import FaqSection from '@/components/FaqSection';
import FinalCta from '@/components/FinalCta';
import SiteFooter from '@/components/SiteFooter';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HomeHero />
        <ClubSection />
        <DisciplinesSection />
        <PPPBand />
        <JeunesSection />
        <InfosSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
