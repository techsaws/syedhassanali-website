import Image from "next/image";

import { expertiseSectionData } from "@/data/view.home-page-data";

import SectionHeader from "@/components/shared/section-header";

export default function ExpertiseSection() {
  const tones = {
    graphite: "bg-card",
    secondary: "bg-[color-mix(in_oklab,var(--card)_65%,var(--muted))] lg:mt-7",
    muted: "bg-card lg:mt-14",
    accent: "bg-[color-mix(in_oklab,var(--card)_65%,var(--muted))] lg:mt-21",
  } as const;

  return (
    <section id="expertise" className="page-layout pt-12 md:pt-18 lg:pt-24">
      <SectionHeader
        number="02"
        label="What I Do"
        variant="center"
        title="Here's how I can help you."
        accentTitle=""
        subtitle="Need something else? I can help with that too."
        description="Whether you're starting something new or improving what you already have, I can help you build, automate, and secure it."
        showButton={false}
      />
      <ul className="mt-12 grid list-none grid-cols-1 items-start gap-4 p-0 sm:mt-16 sm:grid-cols-2 max-md:grid-cols-1 lg:mt-20 lg:grid-cols-4 lg:gap-0">
        {expertiseSectionData.map((expertise) => (
          <li
            key={expertise.id}
            className={`group relative flex min-w-0 flex-col max-md:isolate max-md:overflow-hidden max-lg:rounded-2xl border border-border shadow-[0_2px_6px_rgba(20,24,20,0.06),0_12px_28px_-12px_rgba(20,24,20,0.18),0_24px_48px_-24px_rgba(20,24,20,0.14)] p-6 md:min-h-140 xl:p-7 ${tones[expertise.tone]}`}
          >
            <span className="mb-5 max-md:mb-3 inline-flex w-fit shrink-0 items-center rounded-md bg-[#FFCE00] px-2 py-1 text-xs leading-none font-semibold text-black tabular-nums">
              {expertise.number}
            </span>
            <h3 className="md:min-h-[2.6em] font-heading text-[clamp(1.25rem,1.65vw,1.625rem)] leading-[1.3] font-semibold tracking-[-0.035em] text-heading">
              {expertise.title}
            </h3>

            <div className="mx-auto my-8 h-40 w-40 max-w-full sm:my-10 max-md:absolute max-md:top-6 max-md:right-6 max-md:m-0 max-md:size-36 max-md:opacity-[0.20] max-md:-z-10 max-md:pointer-events-none lg:h-44 lg:w-full lg:max-w-44">
              <Image
                src={expertise.image}
                alt=""
                width={176}
                height={176}
                className="h-full w-full object-contain"
              />
            </div>

            <p className="mt-auto max-md:mt-3 text-sm leading-[1.8] text-foreground">
              {expertise.description}
            </p>
            <p className="max-md:hidden mt-6 border-t border-border pt-5 text-xs leading-relaxed font-semibold text-sub-heading sm:min-h-[4.5em]">
              {expertise.service}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
