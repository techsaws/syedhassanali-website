import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  number: string;
  label: string;
  title: string;
  accentTitle: string;
  subtitle: string;
  description: string;
  variant?: "left" | "center";
  titleClassName?: string;
} & (
  | { showButton: true; buttonProps: { href: string; text: string } }
  | { showButton?: false; buttonProps?: never }
);

export default function SectionHeader({
  number,
  label,
  title,
  accentTitle,
  subtitle,
  description,
  variant = "left",
  titleClassName,
  showButton = false,
  buttonProps,
}: SectionHeaderProps) {
  const centered = variant === "center";

  return (
    <header
      className={
        centered
          ? "mx-auto max-w-4xl text-center"
          : "grid gap-7 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-10 xl:gap-12"
      }
    >
      <div>
        <div
          className={cn(
            "mb-4 flex items-center gap-2 sm:mb-5",
            centered && "justify-center",
          )}
        >
          <span className="inline-flex w-fit shrink-0 items-center rounded-md bg-primary px-2 py-1 text-xs leading-none font-semibold tabular-nums text-primary-foreground">
            {number}
          </span>
          <p className="text-xs leading-none font-semibold tracking-[0.18em] text-sub-heading uppercase sm:text-sm">
            {label}
          </p>
        </div>
        <h2
          className={cn(
            "font-heading text-[clamp(2rem,4.5vw,4rem)] leading-[1.1] font-bold tracking-[-0.055em] text-heading uppercase",
            centered && "text-balance",
            titleClassName,
          )}
        >
          {title}
          <span className="mt-0.5 block font-[Georgia,Times_New_Roman,serif] text-[1.08em] leading-[1.1] font-normal tracking-[-0.055em] normal-case italic">
            {accentTitle}
          </span>
        </h2>
      </div>
      <div
        className={
          centered
            ? "mx-auto mt-7 max-w-2xl sm:mt-9 md:mt-5 max-md:mx-0 max-md:w-full max-md:max-w-lg max-md:border-l-[3px] max-md:border-border max-md:pl-5 max-md:text-left sm:max-md:pl-6"
            : "max-w-lg border-l-[3px] border-border pl-5 sm:pl-6 lg:pb-1 lg:pl-7"
        }
      >
        <p className="mb-3 font-heading text-lg leading-snug font-medium tracking-tight text-sub-heading sm:text-xl">
          {subtitle}
        </p>
        <p
          className={cn(
            "text-base leading-[1.8] text-foreground sm:text-lg",
            centered ? "md:text-pretty max-md:max-w-[46ch]" : "max-w-[46ch]",
          )}
        >
          {description}
        </p>
        {showButton && buttonProps && (
          <Button
            nativeButton={false}
            render={<Link href={buttonProps.href} />}
            variant="secondary"
            className="mt-6 h-auto min-h-12 gap-3 rounded-[10px] px-5 py-3 text-base font-semibold transition-colors duration-200 hover:bg-secondary/85 sm:mt-7"
          >
            {buttonProps.text}
            <ArrowUpRight
              aria-hidden="true"
              className="size-4"
              strokeWidth={2.5}
            />
          </Button>
        )}
      </div>
    </header>
  );
}
