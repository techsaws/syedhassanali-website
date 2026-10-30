import { showcaseSectionData } from "@/data/view.home-page-data";

import SectionHeader from "@/components/shared/section-header";
import { MarqueeCard } from "@/components/shared/marquee-card";

function ShowcaseSection() {
  return (
    <section
      id="projects"
      className="page-layout pt-6 max-[640px]:pt-9 md:pt-12 lg:pt-18"
    >
      <SectionHeader
        number="01"
        label="Selected Work"
        variant="left"
        title="Real projects."
        accentTitle="Real solutions."
        titleClassName="max-w-[13ch]"
        subtitle="See the problems I've solved."
        description="Real projects, practical solutions, and a closer look at how I approach each build."
        showButton
        buttonProps={{ href: "/case-studies", text: "Explore Case Studies" }}
      />
      <div className="relative z-10 mt-10 rounded-2xl bg-card shadow-[0_2px_8px_rgba(20,24,20,0.06),0_16px_36px_-12px_rgba(20,24,20,0.16),0_32px_64px_-20px_rgba(20,24,20,0.12)] sm:mt-12 sm:rounded-3xl lg:mt-16">
        <div className="overflow-hidden rounded-[inherit] border border-border bg-card p-1.5 sm:p-2">
          <MarqueeCard images={showcaseSectionData} />
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection;
