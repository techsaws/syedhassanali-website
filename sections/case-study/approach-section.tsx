import { Check, ArrowDown } from "lucide-react";
import type { ICaseStudyDetail } from "@/data/case-studies/case-studies-data";
import DetailSectionHeading from "./detail-section-heading";

export default function ApproachSection({
  study,
}: {
  study: ICaseStudyDetail;
}) {
  const { detail } = study;
  return (
    <section
      aria-label="Project approach"
      className="page-layout pt-12 md:pt-18 lg:pt-24"
    >
      <DetailSectionHeading
        number="02"
        label="The work"
        title="From the challenge to a working system."
      />
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="space-y-8 md:space-y-10">
          {[detail.challenge, detail.solution].map((block) => (
            <article
              key={block.heading}
              className="border-t-2 border-border pt-6"
            >
              <h3 className="font-heading text-2xl leading-tight font-semibold tracking-tight text-heading">
                {block.heading}
              </h3>
              <p className="mt-4 max-w-[66ch] text-base leading-[1.8] text-foreground">
                {block.body}
              </p>
            </article>
          ))}
          <article className="border-t-2 border-border pt-6">
            <h3 className="font-heading text-2xl font-semibold tracking-tight text-heading">
              {detail.capabilities.heading}
            </h3>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {detail.capabilities.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-[1.8] text-foreground"
                >
                  <Check
                    aria-hidden="true"
                    className="mt-1 size-4 shrink-0 text-heading"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
        <aside className="self-start rounded-2xl bg-dth-card p-6 text-dth-heading shadow-[0_2px_6px_rgba(0,0,0,0.06),0_16px_36px_-12px_rgba(0,0,0,0.22)] sm:p-8">
          <h3 className="font-heading text-2xl font-semibold tracking-tight text-dth-heading">
            {detail.workflow.heading}
          </h3>
          <ol className="mt-7">
            {detail.workflow.steps.map((step, index) => (
              <li key={step.step}>
                <div className="flex items-start gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  <span className="pt-1 text-sm leading-relaxed">
                    {step.label}
                  </span>
                </div>
                {index < detail.workflow.steps.length - 1 && (
                  <ArrowDown
                    aria-hidden="true"
                    className="my-3 ml-2 size-4 text-dth-sub-heading"
                  />
                )}
              </li>
            ))}
          </ol>
        </aside>
      </div>
      <div className="mt-10 grid gap-8 border-t-2 border-border pt-8 md:mt-14 lg:grid-cols-2 lg:gap-16">
        <article>
          <h3 className="font-heading text-2xl font-semibold tracking-tight text-heading">
            {detail.businessValue.heading}
          </h3>
          <ul className="mt-5 space-y-3">
            {detail.businessValue.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-base leading-relaxed text-foreground"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 size-2 shrink-0 rounded-full bg-primary"
                />
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article>
          <h3 className="font-heading text-2xl font-semibold tracking-tight text-heading">
            {detail.implementation.heading}
          </h3>
          <p className="mt-4 text-base leading-[1.8] text-foreground">
            {detail.implementation.body}
          </p>
          <p className="mt-5 text-xs font-semibold tracking-widest text-sub-heading uppercase">
            Technical focus
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {detail.implementation.technicalFocus.map((item) => (
              <li
                key={item}
                className="rounded-md border border-border bg-card px-3 py-1.5 text-xs text-sub-heading"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
