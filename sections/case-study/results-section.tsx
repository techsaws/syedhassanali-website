import ResultMetricCard from "./result-metric-card";
import type { ICaseStudyDetail } from "@/data/case-studies/case-studies-data";
import DetailSectionHeading from "./detail-section-heading";

export default function ResultsSection({ study }: { study: ICaseStudyDetail }) {
  const { results } = study.detail;
  return (
    <section aria-label="Project results" className="page-layout pt-12 md:pt-18 lg:pt-24">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-9 lg:p-12">
        <DetailSectionHeading number="04" label="Results" title={results.heading} />
        <p className="max-w-3xl text-base leading-[1.8] text-foreground sm:text-lg">{results.verifiedOutcome || results.fallbackCopy}</p>
        {results.verifiedMetrics.length ? (
          <dl className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {results.verifiedMetrics.map((metric, index) => (
              <ResultMetricCard key={metric.label} metric={metric} index={index} />
            ))}
          </dl>
        ) : (
          <div className="mt-8 min-h-24 rounded-xl border border-dashed border-border bg-muted p-5 text-sm leading-relaxed text-sub-heading">Verified performance figures are not available yet.</div>
        )}
        {results.measurementNotes && <p className="mt-6 border-t border-border pt-5 text-sm leading-relaxed text-sub-heading">{results.measurementNotes}</p>}
      </div>
    </section>
  );
}
