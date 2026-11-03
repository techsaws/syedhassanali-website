import Image, { type ImageProps } from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  LockKeyhole,
  PanelLeft,
  Plus,
  RotateCw,
  Share,
} from "lucide-react";

export default function CaseStudyPreview({
  image,
  title,
  featured = false,
}: {
  image: ImageProps["src"] | null;
  title: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative isolate flex h-full min-h-0 items-center justify-center overflow-hidden px-[7%] py-[7%] ${featured ? "bg-dth-muted" : "bg-muted"}`}
    >
      <div
        className={`relative flex max-h-full w-full flex-col overflow-hidden rounded-lg bg-[#f5f5f7] shadow-[0_16px_48px_-16px_rgba(0,0,0,0.45)] sm:rounded-xl ${featured ? "aspect-4/3" : "h-full"}`}
      >
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-2 border-b border-black/40 bg-[#303234] px-2.5 py-2.5 text-[#c5c6c8] sm:gap-3 sm:px-3 sm:py-3"
        >
          <div className="flex shrink-0 gap-1.5">
            <span className="size-2 rounded-full bg-[#ff5f57] ring-1 ring-black/10 sm:size-2.5" />
            <span className="size-2 rounded-full bg-[#febc2e] ring-1 ring-black/10 sm:size-2.5" />
            <span className="size-2 rounded-full bg-[#28c840] ring-1 ring-black/10 sm:size-2.5" />
          </div>
          <PanelLeft
            className="ml-1 hidden size-3.5 shrink-0 sm:block"
            strokeWidth={1.5}
          />
          <div className="hidden items-center gap-2 sm:flex">
            <ChevronLeft className="size-3.5" />
            <ChevronRight className="size-3.5 opacity-40" />
          </div>
          <div className="mx-1 flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-md border border-white/5 bg-[#484a4c] px-2 py-1.5 text-[9px] leading-none sm:text-[10px]">
            <LockKeyhole className="size-2.5 shrink-0 opacity-70" />
            <span className="truncate">{title}</span>
            <RotateCw className="ml-auto size-2.5 shrink-0 opacity-70" />
          </div>
          <Share
            className="hidden size-3.5 shrink-0 sm:block"
            strokeWidth={1.5}
          />
          <Plus className="size-3.5 shrink-0" strokeWidth={1.5} />
        </div>
        <div className="relative min-h-0 flex-1 bg-[#f5f5f7]">
          {image ? (
            <Image
              src={image}
              alt={`${title} product screenshot`}
              fill
              sizes={
                featured
                  ? "(max-width: 1023px) 85vw, 50vw"
                  : "(max-width: 639px) 85vw, (max-width: 1023px) 45vw, 30vw"
              }
              className="object-cover object-[0%_0%]"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
