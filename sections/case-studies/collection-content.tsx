"use client";

import { Fragment, use, useSyncExternalStore } from "react";
import Link from "next/link";
import { CaseStudiesData } from "@/data/case-studies/case-studies-data";
import CaseStudyCard from "@/components/shared/case-study-card";
import { ArrowLeft, ArrowRight } from "lucide-react";

function getPageSize() {
  if (window.matchMedia("(min-width: 1024px)").matches) return 6;
  if (window.matchMedia("(min-width: 768px)").matches) return 4;
  return 3;
}

function getServerPageSize() {
  return 3;
}

function subscribePageSize(onChange: () => void) {
  const queries = [
    window.matchMedia("(min-width: 768px)"),
    window.matchMedia("(min-width: 1024px)"),
  ];
  queries.forEach((query) => query.addEventListener("change", onChange));
  return () => queries.forEach((query) => query.removeEventListener("change", onChange));
}

export function CollectionContent({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const params = use(searchParams);
  const pageSize = useSyncExternalStore(subscribePageSize, getPageSize, getServerPageSize);
  const raw = typeof params.page === "string" ? params.page : "1";
  const totalPages = Math.ceil(CaseStudiesData.length / pageSize);

  const page = Math.min(
    totalPages,
    Math.max(1, /^\d+$/.test(raw) ? Number(raw) || 1 : 1),
  );

  const visiblePages = totalPages <= 4
    ? Array.from({ length: totalPages }, (_, index) => index + 1)
    : page <= 2
      ? [1, 2, "end-gap", totalPages]
      : page >= totalPages - 1
        ? [1, "start-gap", totalPages - 1, totalPages]
        : [1, "start-gap", page, "end-gap", totalPages];

  const start = (page - 1) * pageSize;
  const studies = CaseStudiesData.slice(start, start + pageSize);
  const pageHref = (value: number) =>
    `/case-studies${value > 1 ? `?page=${value}` : ""}#all-case-studies`;

  return (
    <>
      <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
        {studies.map((study, index) => (
          <Fragment key={study.slug}>
            <CaseStudyCard study={study} />
            {index < studies.length - 1 && (
              <div
                aria-hidden="true"
                className={`col-span-full my-8 border-t-2 border-border sm:my-10 lg:my-12 ${(index + 1) % 2 === 0 ? "md:max-lg:block" : "md:max-lg:hidden"} ${(index + 1) % 3 === 0 ? "lg:block" : "lg:hidden"}`}
              />
            )}
          </Fragment>
        ))}
      </div>
      <nav
        aria-label="Case study pagination"
        className="mt-10 flex flex-wrap items-center justify-between gap-2 border-t-2 border-border pt-6 sm:mt-14 sm:gap-4"
      >
        {page > 1 ? (
          <Link
            href={pageHref(page - 1)}
            aria-label="Previous page"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-heading"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            <span className="hidden sm:inline">Previous</span>
          </Link>
        ) : (
          <span
            aria-disabled="true"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            <span className="hidden sm:inline">Previous</span>
          </span>
        )}
        <ol className="flex items-center gap-1">
          {visiblePages.map(
            (value) => typeof value === "string" ? (
              <li key={value} className="px-1 text-sub-heading" aria-hidden="true">?</li>
            ) : (
              <li key={value}>
                <Link
                  href={pageHref(value)}
                  aria-label={`Page ${value}`}
                  aria-current={value === page ? "page" : undefined}
                  className={`grid size-11 place-items-center rounded-lg text-sm font-semibold transition-colors ${value === page ? "bg-secondary text-secondary-foreground" : "text-heading hover:bg-muted"}`}
                >
                  {value}
                </Link>
              </li>
            ),
          )}
        </ol>
        {page < totalPages ? (
          <Link
            href={pageHref(page + 1)}
            aria-label="Next page"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-heading"
          >
            <span className="hidden sm:inline">Next</span>
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        ) : (
          <span
            aria-disabled="true"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground"
          >
            <span className="hidden sm:inline">Next</span>
            <ArrowRight aria-hidden="true" className="size-4" />
          </span>
        )}
      </nav>
    </>
  );
}

type CollectionProps = {
  searchParams: Promise<{ page?: string | string[] }>;
};

export function CollectionPageStatus({ searchParams }: CollectionProps) {
  const params = use(searchParams);
  const pageSize = useSyncExternalStore(subscribePageSize, getPageSize, getServerPageSize);
  const raw = typeof params.page === "string" ? params.page : "1";
  const totalPages = Math.ceil(CaseStudiesData.length / pageSize);
  const page = Math.min(totalPages, Math.max(1, /^\d+$/.test(raw) ? Number(raw) || 1 : 1));

  return (
    <p role="status" className="text-xs text-sub-heading sm:text-sm">
      Showing {page} of {totalPages} pages
    </p>
  );
}

