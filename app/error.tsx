"use client";

import Link from "next/link";
import { ArrowLeft, RotateCw } from "lucide-react";
import { Header03 } from "@/components/layouts/headers";
import Footer from "@/components/layouts/footer";

export default function ErrorPage({ retry }: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <div className="flex min-h-svh flex-col">
      <Header03 />
      <main className="page-layout flex flex-1 flex-col items-center justify-center py-12 text-center md:py-18 lg:py-24">
        <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-sub-heading uppercase sm:text-sm">
          <span className="rounded-md bg-primary px-2 py-1 leading-none text-primary-foreground">Error</span>
          Something went wrong
        </p>
        <h1 className="max-w-[20ch] font-heading text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[1.04] font-semibold tracking-[-0.055em] text-heading text-balance">
          Something didn&apos;t load.
        </h1>
        <p className="mt-5 max-w-lg text-base leading-[1.8] text-foreground sm:text-lg">
          Please try again. If the problem continues, you can return to the home page.
        </p>
        <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:gap-4">
          <Link
            href="/"
            className="group/home inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] border border-border bg-background px-5 py-3 text-sm font-semibold text-heading transition-colors duration-200 hover:border-heading/25 hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:w-auto sm:text-base"
          >
            <ArrowLeft aria-hidden="true" className="size-4 transition-transform duration-200 motion-safe:group-hover/home:-translate-x-0.5 motion-reduce:transition-none" />
            Back to home
          </Link>
          <button
            type="button"
            onClick={() => retry()}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:w-auto sm:text-base"
          >
            Try again
            <RotateCw aria-hidden="true" className="size-4" />
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
