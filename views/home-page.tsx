import HeroSection from "@/sections/home/hero-section";
import ExpertiseSection from "@/sections/home/expertise-section";
import ShowcaseSection from "@/sections/home/showcase-section";
import AboutMeSection from "@/sections/home/about-me-section";
import CTASection from "@/sections/shared/cta-section";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <ShowcaseSection />
      <ExpertiseSection />
      <AboutMeSection />
      <CTASection />
    </main>
  );
}

export default HomePage;
