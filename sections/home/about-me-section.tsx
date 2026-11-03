import Image from "next/image";

import {
  aboutMeSectionData01,
  aboutMeSectionData02,
} from "@/data/view.home-page-data";

import SectionHeader from "@/components/shared/section-header";

import { Plus } from "lucide-react";

export default function AboutMeSection() {
  function HighlightedDescription({
    text,
    highlights = [],
  }: {
    text: string;
    highlights?: readonly string[];
  }) {
    if (!highlights.length) return <>{text}</>;
    const pattern = new RegExp(
      `(${highlights.map((item) => item.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
      "g",
    );
    return (
      <>
        {text.split(pattern).map((part, index) =>
          highlights.includes(part) ? (
            <em
              key={index}
              className="font-semibold text-heading underline decoration-border decoration-2 underline-offset-4"
            >
              {part}
            </em>
          ) : (
            part
          ),
        )}
      </>
    );
  }

  const portrait = aboutMeSectionData01.find((item) => item.id === "about-01");

  return (
    <section id="about" className="page-layout pt-12 md:pt-18 lg:pt-24">
      <SectionHeader
        number="03"
        label="About me"
        variant="left"
        title="The developer"
        accentTitle="behind the work."
        titleClassName="text-balance"
        subtitle="You'll work directly with me, from start to finish."
        description="From discussing your requirements to writing the code and handling changes, I'll be involved throughout the process."
        showButton={false}
      />

      <div className="mt-12 grid items-start gap-10 sm:mt-16 lg:mt-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-24">
        <div className="relative lg:sticky lg:top-32">
          <div className="relative isolate mx-auto aspect-4/5 w-full max-w-115 overflow-hidden lg:max-w-none">
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 text-center font-heading text-[clamp(6rem,17vw,15rem)] leading-none font-bold tracking-[-0.08em] text-heading/[0.035]"
            >
              HASSAN
            </span>
            {portrait && "image" in portrait && (
              <Image
                src={portrait.image}
                alt="Portrait of Hassan Ali"
                fill
                sizes="(max-width: 1023px) 460px, 40vw"
                className="object-contain object-bottom brightness-90"
              />
            )}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[12%] bg-linear-to-t from-background via-background/30 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] bg-[linear-gradient(to_right,var(--background)_0%,transparent_15%,transparent_85%,var(--background)_100%)] mask-[linear-gradient(to_bottom,transparent,black)]"
            />
          </div>
          <div className="mx-auto mt-2 flex max-w-115 flex-wrap items-center justify-between gap-x-4 gap-y-3 border-t-2 border-border pt-4 lg:max-w-none">
            <div>
              <span className="font-heading text-base font-semibold tracking-tight text-heading sm:text-lg">
                Syed Hassan Ali
              </span>
              <p className="mt-1 text-xs leading-snug font-medium text-sub-heading sm:text-sm">
                Full-Stack Software Engineer
              </p>
            </div>
            <span className="flex items-center gap-2 text-xs text-sub-heading sm:text-sm">
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-primary"
              />
              Based in Pakistan
            </span>
          </div>
        </div>

        <div className="min-w-0">
          {aboutMeSectionData01.map((panel, index) => (
            <article
              key={panel.id}
              aria-labelledby={`${panel.id}-title`}
              className={`py-8 first:pt-0 last:pb-0 sm:py-10 ${index > 0 ? "border-t-2 border-border" : ""}`}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex shrink-0 items-center rounded-md bg-primary px-2 py-1 text-xs leading-none font-semibold text-primary-foreground tabular-nums">
                  {panel.number}
                </span>
                <span
                  aria-hidden="true"
                  className="h-0.5 w-8 shrink-0 bg-border"
                />
                <ul aria-label="About details" className="flex flex-wrap gap-2">
                  {panel.tags.map((tag) => (
                    <li
                      key={tag}
                      className="text-xs font-semibold tracking-[0.12em] text-sub-heading uppercase"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <h3
                id={`${panel.id}-title`}
                className="font-heading text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.12] font-semibold tracking-[-0.04em] text-heading"
              >
                {panel.title}
              </h3>
              <p className="mt-3 text-lg leading-snug font-medium text-sub-heading sm:text-xl">
                {panel.subtitle}
              </p>
              <p className="mt-5 max-w-[54ch] text-base leading-[1.8] text-foreground sm:text-lg">
                <HighlightedDescription
                  text={panel.description}
                  highlights={
                    "descriptionHighlights" in panel
                      ? panel.descriptionHighlights
                      : undefined
                  }
                />
              </p>
              {"content" in panel && panel.content === "tech-stack" && (
                <div className="mt-6 border-t border-border">
                  {aboutMeSectionData02.map(
                    ({ category, technologies }, categoryIndex) => (
                      <details
                        key={category}
                        open={categoryIndex === 0}
                        className="group border-b border-border last:border-b-0"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-heading text-sm leading-snug font-semibold text-heading transition-colors hover:text-sub-heading focus-visible:outline-2 focus-visible:outline-primary sm:text-base [&::-webkit-details-marker]:hidden">
                          <span>{category}</span>
                          <Plus
                            aria-hidden="true"
                            className="size-4 shrink-0 text-sub-heading transition-transform duration-200 group-open:rotate-45"
                            strokeWidth={2}
                          />
                        </summary>
                        <ul className="flex flex-wrap gap-2 pb-5">
                          {technologies.map((technology) => (
                            <li
                              key={technology}
                              className="rounded-md bg-muted px-3 py-1.5 text-sm leading-relaxed font-medium text-foreground"
                            >
                              {technology}
                            </li>
                          ))}
                        </ul>
                      </details>
                    ),
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
