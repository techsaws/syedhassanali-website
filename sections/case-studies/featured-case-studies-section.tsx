"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { CaseStudiesData } from "@/data/case-studies/case-studies-data";

import { Button } from "@/components/ui/button";
import CaseStudyPreview from "@/components/shared/case-study-preview";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const studies = CaseStudiesData.filter((study) => study.featured);

function FeaturedStudiesSection() {
  const root = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const [active, setActive] = useState(0);
  const [interacting, setInteracting] = useState(false);

  useEffect(() => {
    if (interacting || studies.length < 2) return;
    const timer = window.setInterval(() => {
      if (
        !document.hidden &&
        root.current &&
        root.current.getBoundingClientRect().bottom > 0
      )
        setActive((value) => (value + 1) % studies.length);
    }, 9000);
    return () => window.clearInterval(timer);
  }, [active, interacting]);
  const study = studies[active];
  if (!study) return null;

  const controlClass =
    "grid size-10 place-items-center rounded-full border border-white/20 text-dth-heading transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-primary disabled:opacity-40";

  return (
    <section className="page-layout pt-12 md:pt-18 lg:pt-24">
      <div
        ref={root}
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured case studies"
        onMouseEnter={() => setInteracting(true)}
        onMouseLeave={() => setInteracting(false)}
        onFocusCapture={() => setInteracting(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setInteracting(false);
        }}
        className="overflow-hidden rounded-2xl border border-dth-border bg-dth-card shadow-[0_2px_6px_-2px_rgba(20,24,20,0.04),0_16px_40px_-16px_rgba(20,24,20,0.10),0_36px_80px_-36px_rgba(20,24,20,0.12)] sm:rounded-3xl"
      >
        <div className="grid lg:grid-cols-[1fr_1.15fr]">
          <div className="order-2 flex min-w-0 flex-col p-6 sm:p-9 lg:order-1 lg:p-10 xl:p-12">
            <div className="mb-6 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="text-xs font-semibold tracking-[0.14em] text-dth-sub-heading uppercase">
                Featured{study.project ? ` / ${study.project ?? study.title}` : ""}
              </span>
            </div>
            <div
              aria-live={interacting ? "polite" : "off"}
              className="min-h-62.5 sm:min-h-57.5 lg:min-h-75"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={study.slug}
                  initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.2 }}
                >
                  <span className="mb-4 inline-block rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-dth-heading">
                    {study.category}
                  </span>
                  <h2 className="max-w-[19ch] font-heading text-[clamp(1.75rem,3.3vw,3.25rem)] leading-[1.12] font-semibold tracking-[-0.04em] text-dth-heading">
                    {study.title}
                  </h2>
                  <p className="mt-4 max-w-[43ch] text-sm leading-[1.8] text-dth-foreground sm:text-base">
                    {study.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <Button
              nativeButton={false}
              render={<Link href={`/case-studies/${study.slug}`} />}
              className="mt-6 h-12 w-fit gap-3 rounded-[10px] bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover"
            >
              View Case Study{" "}
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 motion-safe:group-hover/button:translate-x-0.5 motion-safe:group-hover/button:-translate-y-0.5"
              />
            </Button>
            <div className="mt-8 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
              <span className="text-xs font-medium text-dth-foreground tabular-nums">
                {String(active + 1).padStart(2, "0")}{" "}
                <span className="mx-1 text-white/30">/</span>{" "}
                {String(studies.length).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous featured case study"
                  className={controlClass}
                  onClick={() =>
                    setActive(
                      (value) => (value - 1 + studies.length) % studies.length,
                    )
                  }
                >
                  <ArrowLeft aria-hidden="true" className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next featured case study"
                  className={controlClass}
                  onClick={() =>
                    setActive((value) => (value + 1) % studies.length)
                  }
                >
                  <ArrowRight aria-hidden="true" className="size-4" />
                </button>
              </div>
            </div>
          </div>
          <div
            role="group"
            aria-roledescription="slide"
            aria-label={`${active + 1} of ${studies.length}: ${study.project ?? study.title}`}
            className="order-1 aspect-16/10 border-b border-white/10 lg:order-2 lg:aspect-auto lg:border-b-0 lg:border-l"
          >
            <CaseStudyPreview
              key={study.slug}
              image={study.image}
              title={study.project ?? study.title}
              featured
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedStudiesSection;
