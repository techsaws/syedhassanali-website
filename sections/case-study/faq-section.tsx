import FAQAccordion from "./faq-accordion";
import type { ICaseStudyDetail } from "@/data/case-studies/case-studies-data";
import DetailSectionHeading from "./detail-section-heading";

export default function FAQSection({ study }: { study: ICaseStudyDetail }) {
  return (
    <section aria-label="Frequently asked questions" className="page-layout pt-12 md:pt-18 lg:pt-24">
      <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <DetailSectionHeading number="05" label="Questions & answers" title="A few things you might be wondering." />
        <FAQAccordion items={study.detail.faq} />
      </div>
    </section>
  );
}
