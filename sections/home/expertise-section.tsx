import { expertiseSectionData } from "@/data/view.home-page-data";

import SectionHeader from "@/components/shared/section-header";

export default function ExpertiseSection() {
  const tones = {
    graphite: "bg-dth-card",
    secondary: "bg-dth-secondary lg:mt-7",
    muted: "bg-dth-muted lg:mt-14",
    accent: "bg-dth-accent lg:mt-21",
  } as const;

  type SymbolName = "efficiency" | "revenue" | "growth" | "protection";

  const symbolPaths: Record<SymbolName, string[]> = {
    efficiency: [
      "M100 28 164 91 101 151 38 91Z",
      "M31 54 63 86M139 86 173 53",
      "M34 131 64 101M138 101 168 132",
      "M69 178 101 147 132 179M78 190 102 167 125 190",
    ],
    revenue: [
      "M101 23 99 179",
      "M62 49 101 91 140 48",
      "M40 127 101 63 162 127Z",
      "M61 166 100 127 141 167",
      "M82 188 100 169 119 189",
    ],
    growth: [
      "M100 24 166 103 100 185 35 103Z",
      "M75 82 126 83 124 126 75 124Z",
      "M101 60 99 96M100 112 101 147",
      "M53 103 68 103M133 102 148 102",
    ],
    protection: [
      "M100 33 155 56 151 114Q143 151 100 176Q59 151 49 115L46 57Z",
      "M76 99 94 117 127 81",
      "M31 46 44 32 60 42M144 41 157 31 171 46",
      "M64 175 53 189M138 175 149 190",
    ],
  };

  function ExpertiseSymbol({ symbol }: { symbol: SymbolName }) {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 200 210"
        fill="none"
        className="h-full w-full"
      >
        <g
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="square"
          strokeLinejoin="round"
        >
          {symbolPaths[symbol].map((path, index) => (
            <path key={index} d={path} />
          ))}
        </g>
        <g
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.24"
          transform="translate(3 -2)"
        >
          {symbolPaths[symbol].map((path, index) => (
            <path key={index} d={path} />
          ))}
        </g>
      </svg>
    );
  }

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
            className={`group relative flex min-w-0 flex-col max-md:isolate max-md:overflow-hidden max-lg:rounded-2xl border border-white/5 shadow-[0_2px_6px_rgba(20,24,20,0.06),0_12px_28px_-12px_rgba(20,24,20,0.18),0_24px_48px_-24px_rgba(20,24,20,0.14)] p-6 md:min-h-140 xl:p-7 ${tones[expertise.tone]}`}
          >
            <span className="mb-5 max-md:mb-3 max-md:flex max-md:min-h-5 max-md:items-center text-xs leading-none font-medium tracking-[0.12em] text-primary tabular-nums">
              {expertise.number}
            </span>
            <h3 className="md:min-h-[2.6em] font-heading text-[clamp(1.25rem,1.65vw,1.625rem)] leading-[1.3] font-semibold tracking-[-0.035em] text-dth-heading">
              {expertise.title}
            </h3>

            <div className="mx-auto my-8 h-40 w-40 max-w-full text-primary sm:my-10 max-md:absolute max-md:top-6 max-md:right-6 max-md:m-0 max-md:size-36 max-md:opacity-[0.20] max-md:-z-10 max-md:pointer-events-none lg:h-44 lg:w-full lg:max-w-44">
              <ExpertiseSymbol symbol={expertise.symbol} />
            </div>

            <p className="mt-auto max-md:mt-3 text-sm leading-[1.8] text-dth-foreground">
              {expertise.description}
            </p>
            <p className="max-md:hidden mt-6 border-t border-dth-border pt-5 text-xs leading-relaxed font-semibold text-dth-heading sm:min-h-[4.5em]">
              {expertise.service}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
