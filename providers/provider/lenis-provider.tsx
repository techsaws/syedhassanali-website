"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let destroy: (() => void) | undefined;
    const configure = () => {
      destroy?.();
      destroy = undefined;
      const lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: !preference.matches,
        respectReducedMotion: false,
        anchors: false,
        prevent: (node) => node.closest("[data-lenis-prevent]") !== null,
        autoRaf: true,
      });
      const navigateToSection = (event: MouseEvent) => {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
        if (!link || link.target === "_blank" || link.hasAttribute("download")) return;
        const url = new URL(link.href, window.location.href);
        if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || url.search !== window.location.search) return;
        if (!["#projects", "#expertise", "#about"].includes(url.hash)) return;
        const section = document.getElementById(url.hash.slice(1));
        if (!section) return;
        event.preventDefault();
        // Align the visible section header, rather than its large padding area.
        const inset = parseFloat(getComputedStyle(section).paddingTop) - 116;
        lenis.scrollTo(section, {
          offset: inset,
          duration: 1.2,
          lerp: 0,
          easing: (progress) => 1 - Math.pow(1 - progress, 3),
          force: true,
        });
        if (window.location.hash !== url.hash) window.history.pushState(null, "", url.hash);
      };
      window.addEventListener("click", navigateToSection, true);
      destroy = () => {
        window.removeEventListener("click", navigateToSection, true);
        lenis.destroy();
      };
    };
    configure();
    preference.addEventListener("change", configure);
    return () => {
      preference.removeEventListener("change", configure);
      destroy?.();
    };
  }, []);
  return <>{children}</>;
}
