import Link from "next/link";

import type { ICaseStudy } from "@/data/case-studies/case-studies-data";

import CaseStudyPreview from "./case-study-preview";

import { ArrowUpRight } from "lucide-react";

export default function CaseStudyCard({ study }: { study: ICaseStudy }) {
  return (
    <article className="group/card flex min-w-0 flex-col md:row-span-6 md:grid md:grid-rows-subgrid">
      <Link
        href={`/case-studies/${study.slug}`}
        tabIndex={-1}
        aria-hidden="true"
        className="block aspect-16/10 overflow-hidden rounded-2xl border border-border bg-muted transition-shadow duration-300 group-hover/card:shadow-lg"
      >
        <CaseStudyPreview image={study.image} title={study.project ?? study.title} />
      </Link>
      <div className="flex flex-1 flex-col pt-5 md:contents">
        <div className="mb-3 flex flex-wrap items-start gap-2 md:pt-5">
          <span className="rounded-md bg-primary px-2.5 py-1 text-xs leading-snug font-medium text-primary-foreground">
            {study.category}
          </span>
          {study.project && (
            <span className="rounded-md bg-slate-200/70 px-2.5 py-1 text-xs leading-snug font-medium text-slate-700">
              {study.project}
            </span>
          )}
        </div>
        <h3 className="font-heading text-xl leading-snug font-semibold tracking-tight text-heading sm:text-2xl">
          <Link
            href={`/case-studies/${study.slug}`}
            className="transition-colors hover:text-sub-heading"
          >
            {study.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-[1.8] text-foreground sm:text-base">
          {study.description}
        </p>
        <ul aria-label="Technologies" className="mt-4 flex flex-wrap content-start items-start gap-2">
          {study.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-md bg-card px-2.5 py-1 text-xs leading-snug font-medium text-sub-heading ring-1 ring-inset ring-border"
            >
              {technology}
            </li>
          ))}
        </ul>
        <Link
          href={`/case-studies/${study.slug}`}
          className="group/link mt-5 inline-flex w-fit items-center gap-2 py-1 text-sm font-semibold text-heading"
        >
          <span className="relative after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 group-hover/card:after:scale-x-100 group-focus-within/card:after:scale-x-100 motion-reduce:after:transition-none">
            View Case Study
          </span>{" "}
          <ArrowUpRight
            aria-hidden="true"
            strokeWidth={2.5}
            className="size-4 text-current transition-transform duration-300 motion-safe:group-hover/card:translate-x-0.5 motion-safe:group-hover/card:-translate-y-0.5 motion-safe:group-focus-within/card:translate-x-0.5 motion-safe:group-focus-within/card:-translate-y-0.5 motion-reduce:transition-none"
          />
        </Link>
      </div>
    </article>
  );
}
