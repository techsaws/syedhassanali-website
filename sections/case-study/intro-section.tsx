import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import type { ICaseStudyDetail } from "@/data/case-studies/case-studies-data";

export default function IntroSection({ study }: { study: ICaseStudyDetail }) {
  return (
    <header className="page-layout pt-8 sm:pt-10 md:pt-12 lg:pt-16">
      <nav aria-label="Breadcrumb" className="mb-8 md:mb-10">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 text-xs text-sub-heading sm:text-sm">
          <li><Link href="/" className="hover:text-heading">Home</Link></li>
          <li aria-hidden="true"><ChevronRight className="size-3.5" /></li>
          <li><Link href="/case-studies" className="hover:text-heading">Case studies</Link></li>
          <li aria-hidden="true"><ChevronRight className="size-3.5" /></li>
          <li aria-current="page" className="font-medium text-heading">{study.project || study.title}</li>
        </ol>
      </nav>
      <div className="grid gap-7 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-16">
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground">{study.detail.eyebrow}</span>
            {study.project && <span className="rounded-md bg-muted px-3 py-1.5 text-sub-heading">{study.project}</span>}
            {study.featured && <span className="px-1 text-sub-heading">Featured case study</span>}
          </div>
          <h1 className="max-w-[22ch] font-heading text-[clamp(2.25rem,5vw,4.75rem)] leading-[1.06] font-semibold tracking-[-0.055em] text-heading text-balance">{study.detail.heroTitle || study.title}</h1>
        </div>
        <div className="border-l-[3px] border-border pl-5 sm:pl-6 lg:pl-7">
          <p className="max-w-[48ch] text-base leading-[1.8] text-foreground sm:text-lg">{study.detail.heroDescription || study.description}</p>
          <ul aria-label="Project technologies" className="mt-5 flex flex-wrap gap-2">
            {study.technologies.map((technology) => <li key={technology} className="rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-sub-heading">{technology}</li>)}
          </ul>
        </div>
      </div>
      <div className="relative mt-10 aspect-16/10 overflow-hidden rounded-2xl border border-border bg-muted shadow-[0_2px_8px_rgba(20,24,20,0.06),0_20px_48px_-16px_rgba(20,24,20,0.20),0_40px_80px_-32px_rgba(20,24,20,0.16)] sm:mt-12 lg:mt-16 lg:aspect-21/9">
        {study.image ? <Image src={study.image} alt={`${study.project || study.title} project overview`} fill sizes="(max-width: 1440px) 100vw, 1344px" preload className="object-cover object-[0%_0%]" /> : <div className="flex h-full items-center justify-center text-sm text-sub-heading">Project preview coming soon</div>}
      </div>
    </header>
  );
}
