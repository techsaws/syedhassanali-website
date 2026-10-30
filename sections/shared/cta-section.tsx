"use client";

import Image from "next/image";

import { useGlobalContext } from "@/contexts/global-context";

import { Button } from "@/components/ui/button";

import { ArrowUpRight } from "lucide-react";
import ctaImage from "../../public/images/cta-background.png";

function CTASection() {
  const { setConnectModal } = useGlobalContext();

  return (
    <section id="cta" className="page-layout py-12 md:py-18 lg:py-24">
      <div className="relative isolate overflow-hidden rounded-2xl border border-border bg-card shadow-[0_2px_6px_-2px_rgba(20,24,20,0.04),0_16px_40px_-16px_rgba(20,24,20,0.10),0_36px_80px_-36px_rgba(20,24,20,0.12)] sm:rounded-3xl">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-full opacity-30 sm:w-4/5 sm:opacity-60 lg:w-3/4 lg:opacity-85 max-lg:w-full max-lg:opacity-25"
        >
          <Image
            src={ctaImage}
            alt=""
            fill
            sizes="(max-width: 767px) 100vw, 1000px"
            className="h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-linear-to-r from-card via-card/70 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-card/70 via-transparent to-card/20" />
          <div className="absolute inset-0 bg-card/40 lg:hidden" />
        </div>

        <div className="relative max-w-3xl max-lg:w-full max-lg:max-w-none px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <p className="mb-3 text-sm leading-snug font-semibold tracking-[0.08em] text-sub-heading uppercase sm:mb-4 sm:text-base">
            Have a project in mind?
          </p>
          <h2
            id="cta-title"
            className="font-heading text-[clamp(2.25rem,4vw,4rem)] leading-[1.08] font-bold tracking-[-0.055em] text-heading"
          >
            Let&apos;s talk about
            <span className="mt-2 block font-[Georgia,Times_New_Roman,serif] font-normal tracking-[-0.055em] italic">
              what you need.
            </span>
          </h2>
          <p
            id="cta-description"
            className="mt-6 max-w-[44ch] max-lg:w-full max-lg:max-w-none text-base leading-[1.8] text-sub-heading max-lg:font-medium max-lg:text-heading/90 sm:text-lg"
          >
            Tell me what you&apos;re working on or what you&apos;d like to improve. I&apos;ll
            help you figure out the best way forward.
          </p>
          <Button
            onClick={() => setConnectModal(true)}
            type="button"
            className="mt-7 h-auto min-h-12.5 gap-3 rounded-[10px] bg-primary px-6 py-3 text-base leading-normal font-bold text-primary-foreground hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:mt-8"
          >
            Tell Me About It
            <ArrowUpRight
              aria-hidden="true"
              strokeWidth={3}
              className="transition-transform duration-500 ease-out motion-safe:group-hover/button:translate-x-0.75 motion-safe:group-hover/button:-translate-y-0.75 motion-safe:group-focus-visible/button:translate-x-0.75 motion-safe:group-focus-visible/button:-translate-y-0.75 motion-reduce:transition-none"
            />
          </Button>
          <p className="mt-4 max-w-[44ch] max-lg:w-full max-lg:max-w-none text-xs leading-relaxed text-foreground max-lg:font-medium max-lg:text-sub-heading sm:text-sm">
            No technical brief needed. Just a conversation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
