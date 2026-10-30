import StructuredData from "@/components/shared/structured-data";
import { absoluteUrl, site } from "@/configs/site";
import { notFound } from "next/navigation";
import { CaseStudyData } from "@/data/case-studies/case-studies-data";
import IntroSection from "@/sections/case-study/intro-section";
import OverviewSection from "@/sections/case-study/overview-section";
import ApproachSection from "@/sections/case-study/approach-section";
import GallerySection from "@/sections/case-study/gallery-section";
import ResultsSection from "@/sections/case-study/results-section";
import FAQSection from "@/sections/case-study/faq-section";
import RelatedSection from "@/sections/case-study/related-section";
import CTASection from "@/sections/shared/cta-section";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = CaseStudyData.find((item) => item.slug === slug);
  if (!study) notFound();

  return (
    <main>
      {site.configured && (
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CreativeWork",
                name: study.title,
                description: study.description,
                url: absoluteUrl(`/case-studies/${study.slug}`),
                author: { "@id": `${site.url}/#person` },
                ...(study.image
                  ? {
                      image: absoluteUrl(
                        typeof study.image === "string"
                          ? study.image
                          : study.image.src,
                      ),
                    }
                  : {}),
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: site.url,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Case studies",
                    item: absoluteUrl("/case-studies"),
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: study.project || study.title,
                    item: absoluteUrl(`/case-studies/${study.slug}`),
                  },
                ],
              },
            ],
          }}
        />
      )}
      <IntroSection study={study} />
      <OverviewSection study={study} />
      <ApproachSection study={study} />
      <GallerySection study={study} />
      <ResultsSection study={study} />
      <FAQSection study={study} />
      <RelatedSection study={study} />
      <CTASection />
    </main>
  );
}
