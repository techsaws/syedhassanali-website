import ResponsiveCardCarousel from "@/components/shared/responsive-card-carousel";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { ICaseStudyDetail } from "@/data/case-studies/case-studies-data";
import DetailSectionHeading from "./detail-section-heading";

export default function GallerySection({ study }: { study: ICaseStudyDetail }) {
  const { proof } = study.detail;
  return (
    <section
      aria-label="Project gallery"
      className="page-layout pt-12 md:pt-18 lg:pt-24"
    >
      <DetailSectionHeading number="03" label="Project gallery" title={proof.heading} />
      <ResponsiveCardCarousel label="project gallery" desktopClassName="grid-cols-2 gap-8">
        {proof.screenshots.map(({ heading, screenshot }) => (
          <figure key={heading} className="self-start overflow-hidden rounded-2xl border border-border bg-card">
            <figcaption className="border-b border-border px-5 py-4 text-sm leading-relaxed font-medium text-heading">
              {heading}
            </figcaption>
            <div className={screenshot ? "bg-muted" : "relative aspect-16/10 bg-muted"}>
              {screenshot ? (
                <Image
                  src={screenshot}
                  alt={heading}
                  width={typeof screenshot === "string" ? 1200 : screenshot.width}
                  height={typeof screenshot === "string" ? 750 : screenshot.height}
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="block h-auto w-full object-contain object-[0%_0%]"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-sub-heading">
                  <ImageIcon aria-hidden="true" className="size-7 opacity-40" />
                  <span className="text-xs">Preview not available yet</span>
                </div>
              )}
            </div>
          </figure>
        ))}
      </ResponsiveCardCarousel>
    </section>
  );
}
