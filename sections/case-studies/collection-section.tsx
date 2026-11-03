import { Suspense } from "react";
import { CaseStudiesData } from "@/data/case-studies/case-studies-data";
import { CollectionContent, CollectionPageStatus } from "./collection-content";

type CollectionProps = {
  searchParams: Promise<{ page?: string | string[] }>;
};

function CollectionSection({ searchParams }: CollectionProps) {
  return (
    <section id="all-case-studies" className="page-layout pt-12 md:pt-18 lg:pt-24">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b-2 border-border pb-5 sm:mb-9">
        <div>
          <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-sub-heading uppercase">
            The collection
          </p>
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.035em] text-heading sm:text-4xl">
            All case studies
            <span className="ml-3 inline-flex min-w-8 items-center justify-center rounded-md bg-muted px-2.5 py-1 align-middle text-sm leading-none font-medium tracking-normal text-sub-heading">
              {CaseStudiesData.length}
            </span>
          </h2>
        </div>
        <Suspense fallback={null}>
          <CollectionPageStatus searchParams={searchParams} />
        </Suspense>
      </div>
      <Suspense
        fallback={
          <div className="flex min-h-96 items-center justify-center" role="status">
            <span aria-hidden="true" className="size-12 animate-spin rounded-full border-[5px] border-primary border-t-transparent motion-reduce:animate-none" />
            <span className="sr-only">Loading case studies...</span>
          </div>
        }
      >
        <CollectionContent searchParams={searchParams} />
      </Suspense>
    </section>
  );
}

export default CollectionSection;
