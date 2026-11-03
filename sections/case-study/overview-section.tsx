import type { ICaseStudyDetail } from "@/data/case-studies/case-studies-data";
import DetailSectionHeading from "./detail-section-heading";

export default function OverviewSection({ study }: { study: ICaseStudyDetail }) {
  const { detail } = study;
  return (
    <section aria-label="Project overview" className="page-layout pt-12 md:pt-18 lg:pt-24">
      <DetailSectionHeading number="01" label="At a glance" title="The problem. The approach. The outcome." />
      <dl className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {Object.entries(detail.atAGlance).map(([label, value]) => (
          <div key={label} className={`rounded-2xl border border-border bg-card p-6 lg:p-8 ${label === "outcome" ? "md:max-lg:col-span-2" : ""}`}>
            <dt className="mb-3 font-heading text-lg font-semibold text-heading capitalize">{label}</dt>
            <dd className="text-sm leading-[1.8] text-foreground sm:text-base">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
