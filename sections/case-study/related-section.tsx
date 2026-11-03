import ResponsiveCardCarousel from "@/components/shared/responsive-card-carousel";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CaseStudiesData, CaseStudyData, type ICaseStudyDetail } from "@/data/case-studies/case-studies-data";
import CaseStudyCard from "@/components/shared/case-study-card";
import DetailSectionHeading from "./detail-section-heading";

export default function RelatedSection({ study }: { study: ICaseStudyDetail }) {
  const related = study.relatedSlugs.flatMap((slug) => {
    const match = CaseStudiesData.find((item) => item.slug === slug) || CaseStudyData.find((item) => item.slug === slug);
    return match && match.slug !== study.slug ? [match] : [];
  });
  const unavailable = study.relatedSlugs.filter((slug) => slug !== study.slug && !related.some((item) => item.slug === slug));
  return (
    <section aria-label="Related case studies" className="page-layout pt-12 md:pt-18 lg:pt-24">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <DetailSectionHeading number="06" label="Keep exploring" title="Related work." />
        <Link href="/case-studies" className="group/link mb-7 inline-flex min-h-11 items-center gap-2 py-1 text-sm font-semibold text-heading md:mb-9"><span className="relative after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 group-hover/link:after:scale-x-100 group-focus-visible/link:after:scale-x-100 motion-reduce:after:transition-none">All case studies</span><ArrowUpRight aria-hidden="true" strokeWidth={2.5} className="size-4 transition-transform duration-300 motion-safe:group-hover/link:translate-x-0.5 motion-safe:group-hover/link:-translate-y-0.5 motion-safe:group-focus-visible/link:translate-x-0.5 motion-safe:group-focus-visible/link:-translate-y-0.5" /></Link>
      </div>
      <ResponsiveCardCarousel label="related case studies" desktopClassName="grid-cols-3 gap-x-8">
        {related.map((item) => <CaseStudyCard key={item.slug} study={item} />)}
        {unavailable.map((slug) => (
          <article key={slug} className="flex min-w-0 flex-col rounded-2xl border border-dashed border-border bg-muted p-6 md:row-span-6">
            <p className="mb-4 text-xs font-semibold tracking-widest text-sub-heading uppercase">Related project</p>
            <h3 className="font-heading text-xl leading-snug font-semibold text-heading capitalize">{slug.replaceAll("-", " ")}</h3>
            <p className="mt-3 text-sm leading-relaxed text-sub-heading">This case study is not available yet.</p>
          </article>
        ))}
      </ResponsiveCardCarousel>
    </section>
  );
}
