"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";

import { useGlobalContext } from "@/contexts/global-context";

import { Button } from "@/components/ui/button";

import homeHeroImage from "../../public/images/home-hero.png";
import scrollDownIcon from "../../public/icons/scroll-down.png";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import styles from "@/styles/sections/home.sections.module.css";

function HeroSection() {
  const { setConnectModal } = useGlobalContext();

  return (
    <div className="p-6 max-[640px]:p-3">
      <section
        id="hero"
        className="relative isolate h-[calc(100svh-48px)] min-h-170 overflow-hidden rounded-[18px] bg-[#050505] lg:@container-size max-lg:h-auto max-lg:min-h-0 max-lg:pt-24 max-lg:pb-6 max-[640px]:rounded-xl"
      >
        <Image
          src={homeHeroImage}
          alt="Syed Hassan Ali"
          width={homeHeroImage.width}
          height={homeHeroImage.height}
          unoptimized
          preload
          className={`${styles.image} absolute right-0 bottom-0 h-auto w-[min(100cqw,200cqh)] max-w-none max-lg:relative max-lg:right-auto max-lg:bottom-auto max-lg:h-[clamp(280px,52vw,440px)] max-lg:w-full max-lg:object-cover max-lg:object-[78%_center]`}
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgb(0_0_0/35%),transparent_65%)] max-lg:bg-none"
          aria-hidden="true"
        />
        <div
          className={`${styles.copy} absolute top-[46%] left-[clamp(28px,4vw,64px)] w-[min(48%,640px)] max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:mx-7 max-lg:mt-2 max-lg:w-auto max-lg:pb-7 max-[640px]:mx-6`}
        >
          <h1
            id="hero-title"
            className="m-0 font-heading text-[clamp(25px,2.6vw,44px)] leading-[1.25] font-bold tracking-[-0.055em] text-[#f5f4ee] uppercase text-balance max-lg:max-w-145 max-lg:text-[clamp(26px,4vw,38px)] max-[640px]:max-w-95 max-[640px]:text-[clamp(25px,6.5vw,36px)]"
          >
            I build software & systems <br className="max-lg:hidden" />
            that help businesses
            <span className="mt-2 block font-[Georgia,Times_New_Roman,serif] text-[1.18em] leading-[1.12] font-normal tracking-[-0.055em] normal-case italic">
              grow, scale & stay secure.
            </span>
          </h1>
          <div className="mt-7 flex flex-wrap gap-3 max-[640px]:mt-6 max-[640px]:gap-2.5">
            <Button
              nativeButton={false}
              render={<Link href="/case-studies" />}
              className="h-auto min-h-12.5 gap-2.5 rounded-[10px] px-4.5 py-3 text-base leading-[1.4] font-extrabold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring max-[640px]:px-3.5 max-[640px]:text-sm bg-primary text-primary-foreground hover:bg-primary-hover"
            >
              See My Work
              <ArrowUpRight
                aria-hidden="true"
                strokeWidth={3}
                className="transition-transform duration-500 ease-out motion-safe:group-hover/button:translate-x-0.75 motion-safe:group-hover/button:-translate-y-0.75 motion-safe:group-focus-visible/button:translate-x-0.75 motion-safe:group-focus-visible/button:-translate-y-0.75 motion-reduce:transition-none"
              />
            </Button>
            <Button
              onClick={() => setConnectModal(true)}
              variant="outline"
              className="h-auto min-h-12.5 gap-2.5 rounded-[10px] px-4.5 py-3 text-base leading-[1.4] font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring max-[640px]:px-3.5 max-[640px]:text-sm border-dth-input bg-transparent text-dth-heading hover:border-dth-muted-foreground hover:bg-dth-accent hover:text-dth-accent-foreground"
            >
              Let&apos;s Talk{" "}
              <ArrowRight
                aria-hidden="true"
                strokeWidth={3}
                className="transition-transform duration-500 ease-out motion-safe:group-hover/button:translate-x-1 motion-safe:group-focus-visible/button:translate-x-1 motion-reduce:transition-none"
              />
            </Button>
          </div>
        </div>
        <div className="max-lg:hidden absolute bottom-7.5 left-1/2 grid w-max -translate-x-1/2 justify-items-center gap-3.5 text-center text-[clamp(14px,1vw,18px)] font-semibold tracking-wide text-[#f5f4ee] max-lg:relative max-lg:bottom-auto max-lg:left-auto max-lg:mx-auto max-lg:translate-x-0 max-lg:gap-2 max-lg:text-sm">
          <span>Full-Stack Software Engineer</span>
          <MotionConfig reducedMotion="never">
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3.6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="h-14.5 w-12"
            >
              <Image
                src={scrollDownIcon}
                alt="Scroll Down"
                width={48}
                height={58}
                className="h-full w-full object-contain"
              />
            </motion.div>
          </MotionConfig>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
