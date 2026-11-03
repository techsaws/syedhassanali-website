"use client";

import { useEffect, useRef } from "react";
import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";

type MarqueeCardProps = {
  images: readonly ImageProps["src"][];
  className?: string;
};

export function MarqueeCard({ images, className }: MarqueeCardProps) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element) return;

    const animations = Array.from(
      element.querySelectorAll<HTMLElement>("[data-marquee-track]"),
    ).map((track, index) => {
      const frames =
        index % 2 === 0
          ? ["translateY(0%)", "translateY(-25%)"]
          : ["translateY(-25%)", "translateY(0%)"];
      return track.animate(
        frames.map((transform) => ({ transform })),
        {
          duration: (42 + index * 5) * 1000,
          iterations: Infinity,
          easing: "linear",
        },
      );
    });
    let inView = true;
    const sync = () =>
      animations.forEach((animation) => {
        if (inView && !document.hidden) animation.play();
        else animation.pause();
      });
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { rootMargin: "200px" },
    );
    observer.observe(element);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      animations.forEach((animation) => animation.cancel());
    };
  }, [images]);

  if (!images.length) return null;

  const chunkSize = Math.max(6, Math.ceil(images.length / 4));
  const columns = Array.from({ length: 4 }, (_, column) =>
    Array.from(
      { length: chunkSize },
      (_, row) => images[(column * chunkSize + row) % images.length],
    ),
  );

  return (
    <div
      ref={root}
      className={cn(
        "relative isolate h-80 overflow-hidden rounded-xl bg-card sm:h-110 sm:rounded-2xl lg:h-140 xl:h-155",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 w-[150%] min-w-225 -translate-x-1/2 -translate-y-1/2 sm:min-w-300 lg:min-w-[1700px]">
          <div
            className="grid grid-cols-4 items-start gap-3 sm:gap-5 lg:gap-6"
            style={{
              transform: "rotateX(45deg) rotateZ(-35deg)",
              transformOrigin: "center",
            }}
          >
            {columns.map((column, index) => (
              <div
                key={index}
                data-marquee-track
                style={{
                  transform:
                    index % 2 === 0 ? "translateY(0%)" : "translateY(-25%)",
                }}
                className="flex flex-col will-change-transform"
              >
                {[0, 1, 2, 3].map((copy) => (
                  <div
                    key={copy}
                    className="flex flex-col gap-3 pb-3 sm:gap-5 sm:pb-5 lg:gap-6 lg:pb-6"
                  >
                    {column.map((src, imageIndex) => (
                      <div
                        key={imageIndex}
                        className="relative aspect-970/700 overflow-hidden rounded-lg border border-border bg-dth-card shadow-sm sm:rounded-xl"
                      >
                        <Image
                          src={src}
                          alt=""
                          fill
                          sizes="(max-width: 639px) 225px, (max-width: 1023px) 300px, 500px"
                          unoptimized
                          className="object-cover object-top-left"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
