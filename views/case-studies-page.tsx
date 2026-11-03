import PageIntroSection from "@/sections/shared/page-intro-section";
import CTASection from "@/sections/shared/cta-section";
import FeaturedStudiesSection from "@/sections/case-studies/featured-case-studies-section";
import CollectionSection from "@/sections/case-studies/collection-section";

export default function CaseStudiesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  return (
    <main>
      <PageIntroSection
        id="case-studies-title"
        title="Problems solved."
        subtitle="Real projects. Practical solutions."
        description="Explore the software, automations, and systems I've built, the problems they solve, and how they work."
        phrases={[
          "Software built.",
          "Work automated.",
          "Problems solved.",
          "Products launched.",
        ]}
      />
      <FeaturedStudiesSection />
      <CollectionSection searchParams={searchParams} />
      <CTASection />
    </main>
  );
}
