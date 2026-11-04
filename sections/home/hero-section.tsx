"use client";

import Image from "next/image";
import Link from "next/link";

import { useGlobalContext } from "@/contexts/global-context";

import { Button } from "@/components/ui/button";

import homeHeroImage from "../../public/images/home-hero.png";
import { socialLinks } from "@/configs/social-links";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import styles from "@/styles/sections/home.sections.module.css";

function HeroSection() {
  const { setConnectModal } = useGlobalContext();

  return (
    <div className="p-6 max-[640px]:p-3">
      <section
        id="hero"
        className={`relative isolate h-[calc(100svh-48px)] min-h-170 overflow-hidden rounded-[18px] bg-[#050505] lg:@container-size max-md:h-auto max-md:min-h-0 md:max-lg:h-[clamp(600px,72svh,720px)] md:max-lg:min-h-150 md:max-lg:pt-0 max-md:pt-24 md:max-lg:pb-0 max-md:pb-6 max-[640px]:rounded-xl`}
      >
        <div
          className={`relative max-md:overflow-hidden md:max-lg:absolute md:max-lg:inset-0 lg:contents`}
        >
          <Image
            src={homeHeroImage}
            alt="Syed Hassan Ali"
            width={homeHeroImage.width}
            height={homeHeroImage.height}
            unoptimized
            preload
            className={`${styles.image} absolute right-0 bottom-0 h-auto w-[min(100cqw,200cqh)] max-w-none max-md:relative max-md:right-auto max-md:bottom-auto max-lg:w-full max-md:object-cover md:max-lg:inset-0 md:max-lg:h-full md:max-lg:object-cover md:max-lg:object-[75%_bottom] max-md:h-[clamp(240px,65vw,280px)] max-md:object-[78%_bottom] max-md:origin-[85%_bottom] max-md:scale-[1.18]`}
          />
          <nav
            aria-label="Social profiles"
            className={`absolute bottom-6 max-md:bottom-auto max-md:top-4 left-6 z-10 grid grid-cols-2 gap-x-2 gap-y-2 md:left-7 md:bottom-6 md:flex md:flex-row md:flex-wrap md:gap-3 lg:hidden`}
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.name} (opens in a new tab)`}
                title={social.name}
                className="flex size-7 shrink-0 items-center justify-center rounded-lg text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:-translate-y-1 motion-safe:focus-visible:-translate-y-1 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:size-8"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={36}
                  height={36}
                  className="size-5 object-contain md:size-7"
                />
              </a>
            ))}
          </nav>
        </div>
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgb(0_0_0/35%),transparent_65%)] max-lg:bg-none"
          aria-hidden="true"
        />
        <div
          className={`${styles.copy} absolute top-[46%] left-[clamp(28px,4vw,64px)] w-max max-w-[calc(100%-clamp(28px,4vw,64px)*2)] max-lg:max-w-none max-md:relative max-md:top-auto max-md:left-auto max-md:mx-7 max-md:mt-5 max-md:w-auto max-md:pb-0 md:max-lg:top-[44%] md:max-lg:left-7 md:max-lg:m-0 md:max-lg:w-[calc(100%-56px)] md:max-lg:max-w-140 max-[640px]:mx-6`}
        >
          <nav
            aria-label="Social profiles"
            className="mb-5 hidden lg:flex flex-wrap items-center gap-2 sm:mb-6 sm:gap-3"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.name} (opens in a new tab)`}
                title={social.name}
                className="flex size-10 shrink-0 items-center justify-center rounded-lg text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:-translate-y-1 motion-safe:focus-visible:-translate-y-1 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:size-11"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={36}
                  height={36}
                  className="size-9 object-contain"
                />
              </a>
            ))}
          </nav>
          <h1
            id="hero-title"
            className="m-0 w-fit max-w-full lg:whitespace-nowrap max-md:whitespace-nowrap font-heading text-[clamp(36px,3.4vw,60px)] leading-[1.12] font-bold tracking-[-0.055em] text-[#f5f4ee] uppercase text-balance max-lg:max-w-145 max-lg:text-[clamp(36px,5vw,48px)] max-md:text-[clamp(20px,6.2vw,40px)]"
          >
            You bring the problem
            <span className="mt-1 block font-[Georgia,Times_New_Roman,serif] text-[1.18em] leading-[1.12] font-normal tracking-[-0.055em] normal-case italic">
              I will build the solution.
            </span>
          </h1>
          <div className="mt-7 flex flex-wrap gap-3 max-md:mt-5 max-[640px]:gap-2.5">
            <Button
              nativeButton={false}
              render={<Link href="/case-studies" />}
              className="h-auto min-h-12.5 gap-2.5 rounded-[10px] px-4.5 py-3 text-base leading-[1.4] font-extrabold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring max-md:min-h-10 max-md:gap-2 max-md:px-3 max-md:py-2.5 max-md:text-xs bg-primary text-primary-foreground hover:bg-primary-hover"
            >
              See My Work
              <ArrowUpRight
                aria-hidden="true"
                strokeWidth={3}
                className="max-md:size-3.5 transition-transform duration-500 ease-out motion-safe:group-hover/button:translate-x-0.75 motion-safe:group-hover/button:-translate-y-0.75 motion-safe:group-focus-visible/button:translate-x-0.75 motion-safe:group-focus-visible/button:-translate-y-0.75 motion-reduce:transition-none"
              />
            </Button>
            <Button
              onClick={() => setConnectModal(true)}
              variant="outline"
              className="h-auto min-h-12.5 gap-2.5 rounded-[10px] px-4.5 py-3 text-base leading-[1.4] font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring max-md:min-h-10 max-md:gap-2 max-md:px-3 max-md:py-2.5 max-md:text-xs border-[#FFCE00] border-2 bg-transparent text-[#FFCE00] hover:border-[#FFCE00] hover:bg-dth-accent hover:text-[#FFCE00]"
            >
              Let&apos;s Talk{" "}
              <ArrowRight
                aria-hidden="true"
                strokeWidth={3}
                className="max-md:size-3.5 transition-transform duration-500 ease-out motion-safe:group-hover/button:translate-x-1 motion-safe:group-focus-visible/button:translate-x-1 motion-reduce:transition-none"
              />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
