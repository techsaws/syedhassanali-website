"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { useGlobalContext } from "@/contexts/global-context";

import { headerNavLinks } from "@/data/components.layout-data";

import { Button } from "../ui/button";

import { ArrowUpRight, Menu, X } from "lucide-react";
import styles from "@/styles/components/layouts.headers.module.css";

export function HeaderContent({ compact = false }: { compact?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const { setConnectModal } = useGlobalContext();
  const reducedMotion = useReducedMotion();
  const menuId = useId();
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggle.current?.focus();
      }
    };
    const onOutside = (event: PointerEvent) => {
      const header = toggle.current?.closest("header");
      if (event.target instanceof Node && !header?.contains(event.target))
        setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onOutside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  return (
    <>
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                data-lenis-prevent
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className={`${styles.backdrop} fixed inset-0 z-30 touch-none bg-black/25 backdrop-blur-md lg:hidden`}
              />
            )}
          </AnimatePresence>,
          document.body,
        )}
      <Link
        href="/"
        className={`pointer-events-auto min-w-0 font-heading leading-[1.1] font-bold tracking-wide text-dth-heading uppercase ${compact ? "text-[clamp(18px,2vw,28px)]" : "text-[clamp(26px,2.1vw,38px)] max-[640px]:text-[clamp(20px,5vw,24px)]"}`}
        aria-label="Syed Hassan Ali home"
      >
        Syed Hassan Ali
      </Link>
      <nav
        className={`pointer-events-auto flex shrink-0 items-center max-lg:hidden ${compact ? "gap-6 xl:gap-9" : "gap-[clamp(24px,3vw,48px)]"}`}
        aria-label="Main navigation"
      >
        <ul
          className={`flex list-none items-center ${compact ? "gap-5 xl:gap-8" : "gap-[clamp(18px,2.5vw,36px)]"}`}
        >
          {headerNavLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href.startsWith("#") ? `/${href}` : href}
                className={`inline-block py-3 font-semibold tracking-[0.01em] text-dth-heading transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${compact ? "text-base" : "text-[clamp(16px,1.1vw,20px)]"}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <Button
          onClick={() => setConnectModal(true)}
          className={`gap-3 rounded-[10px] bg-primary font-bold text-primary-foreground hover:bg-primary-hover ${compact ? "h-12 px-6 text-base" : "h-14 px-7 text-lg"}`}
        >
          Let&apos;s Talk
          <ArrowUpRight
            aria-hidden="true"
            strokeWidth={3}
            className={`${compact ? "size-4" : "size-5"} transition-transform duration-200 motion-safe:group-hover/button:translate-x-0.5 motion-safe:group-hover/button:-translate-y-0.5`}
          />
        </Button>
      </nav>
      <button
        ref={toggle}
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-controls={menuOpen ? menuId : undefined}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        className="pointer-events-auto grid size-12 shrink-0 place-items-center rounded-[10px] border border-white/20 bg-transparent text-dth-heading transition-colors hover:border-white/40 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:hidden"
      >
        <motion.span
          animate={{ rotate: menuOpen ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 420, damping: 24 }}
        >
          {menuOpen ? (
            <X aria-hidden="true" className="size-5" strokeWidth={2.5} />
          ) : (
            <Menu aria-hidden="true" className="size-5" strokeWidth={2.5} />
          )}
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            id={menuId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 340, damping: 27, mass: 0.8 }
            }
            className="pointer-events-auto w-full overflow-hidden lg:hidden"
          >
            <nav
              aria-label="Mobile navigation"
              data-lenis-prevent
              className="mt-5 max-h-[calc(100dvh-200px)] overflow-y-auto overscroll-contain border-t border-white/10 pt-5 pb-3 sm:mt-6 sm:pt-6"
            >
              <ul className="space-y-1">
                {headerNavLinks.map(({ label, href }, index) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: reducedMotion ? 0 : 0.2,
                      delay: reducedMotion ? 0 : index * 0.035,
                    }}
                  >
                    <a
                      href={href.startsWith("#") ? `/${href}` : href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between rounded-lg px-2 py-4 font-heading text-xl font-semibold text-dth-heading transition-colors hover:bg-white/5 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"
                    >
                      {label}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 text-white/50"
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-4" onClick={() => setMenuOpen(false)}>
                <Button
                  onClick={() => setConnectModal(true)}
                  className="h-12 w-full gap-3 rounded-[10px] bg-primary text-base font-bold text-primary-foreground hover:bg-primary-hover"
                >
                  Let&apos;s Talk{" "}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={2.5}
                  />
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Header01() {
  const [pastHero, setPastHero] = useState(false);
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setPastHero(
          !entry.isIntersecting && entry.boundingClientRect.bottom <= 0,
        );
      },
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <header
        className={`${styles.hero} bg-[#050505] pointer-events-none absolute inset-x-6 top-6 z-40 flex flex-wrap items-center justify-between gap-x-6 gap-y-0 rounded-2xl p-[clamp(28px,4vw,64px)] max-[640px]:inset-x-3 max-[640px]:top-3 max-[640px]:px-6 max-[640px]:py-7`}
      >
        <HeaderContent />
      </header>
      <AnimatePresence>
        {pastHero && (
          <motion.header
            data-floating-header
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : -24,
              scale: reducedMotion ? 1 : 0.98,
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: reducedMotion ? 0 : -18,
              scale: reducedMotion ? 1 : 0.985,
            }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 380, damping: 23, mass: 0.8 }
            }
            className={`${styles.glass} fixed inset-x-4 top-4 z-40 mx-auto flex max-w-360 flex-wrap items-center bg-[#050505] justify-between gap-x-4 gap-y-0 rounded-2xl border border-white/10 px-5 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.22)] sm:inset-x-6 sm:top-5 sm:px-7`}
          >
            <HeaderContent compact />
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
}

export function Header02() {
  return (
    <header
      className={`${styles.glass} sticky top-0 left-0 z-40 w-full bg-[#050505] shadow-[0_4px_20px_rgba(0,0,0,0.10)]`}
    >
      <div className="page-layout flex min-h-20 flex-wrap items-center justify-between gap-x-4 gap-y-0 py-4 lg:min-h-24 lg:py-5">
        <HeaderContent compact />
      </div>
    </header>
  );
}

export function Header03() {
  return (
    <header className="w-full bg-[#050505] text-dth-heading">
      <div className="page-layout flex min-h-20 items-center justify-center py-5 lg:min-h-24 lg:py-6">
        <Link
          href="/"
          aria-label="Syed Hassan Ali home"
          className="font-heading text-[clamp(24px,4vw,38px)] leading-[1.1] font-bold tracking-wide text-dth-heading uppercase transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          Syed Hassan Ali
        </Link>
      </div>
    </header>
  );
}
