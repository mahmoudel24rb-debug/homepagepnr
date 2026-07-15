import SiteHeader from '@/components/SiteHeader';
import HomeHero from '@/components/HomeHero';
import ClubSection from '@/components/ClubSection';
import FootUsSection from '@/components/FootUsSection';
import FlagSection from '@/components/FlagSection';
import JeunesSection from '@/components/JeunesSection';
import InfosSection from '@/components/InfosSection';
import FaqSection from '@/components/FaqSection';
import EndzoneSection from '@/components/EndzoneSection';
import SiteFooter from '@/components/SiteFooter';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HomeHero />
        <ClubSection />
        <FootUsSection />
        <FlagSection />
        <JeunesSection />
        <InfosSection />
        <FaqSection />
        <EndzoneSection />
      </main>
      <SiteFooter />
    </>
  );
}
