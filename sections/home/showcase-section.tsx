import { showcaseSectionData } from "@/data/view.home-page-data";

import SectionHeader from "@/components/shared/section-header";
import { FullWidthMarquee } from "@/components/shared/full-width-marquee";

function ShowcaseSection() {
  return (
    <section
      id="projects"
      className="w-full pt-6 max-[640px]:pt-9 md:pt-12 lg:pt-18"
    >
      <div className="page-layout">
        <SectionHeader
          number="01"
          label="Selected Work"
          variant="left"
          title="Real projects"
          accentTitle="real solutions."
          titleClassName="max-w-[13ch]"
          subtitle="See the problems I've solved."
          description="Real projects, practical solutions, and a closer look at how I approach each build."
          showButton
          buttonProps={{ href: "/case-studies", text: "Explore Case Studies" }}
        />
      </div>
      <div className="relative z-10 mt-10 w-full overflow-hidden sm:mt-12 lg:mt-16">
        <FullWidthMarquee images={showcaseSectionData} />
      </div>
    </section>
  );
}

export default ShowcaseSection;
