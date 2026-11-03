import type { ImageProps } from "next/image";
import { MarqueeCard } from "./marquee-card";

type FullWidthMarqueeProps = {
  images: readonly ImageProps["src"][];
};

export function FullWidthMarquee({ images }: FullWidthMarqueeProps) {
  return (
    <MarqueeCard
      images={images}
      className="w-full rounded-none border-0 shadow-none sm:rounded-none lg:h-[clamp(35rem,40vw,45rem)] xl:h-[clamp(35rem,40vw,45rem)]"
    />
  );
}
