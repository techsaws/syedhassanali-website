"use client";

import { Children, useId, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ResponsiveCardCarousel({ children, label, desktopClassName }: {
  children: ReactNode;
  label: string;
  desktopClassName: string;
}) {
  const cards = Children.toArray(children);
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const reducedMotion = useReducedMotion();
  const id = useId();
  if (!cards.length) return null;
  const current = active % cards.length;
  const move = (delta: number) => {
    setDirection(delta);
    setActive((value) => (value + delta + cards.length) % cards.length);
  };
  const controlClass = "grid size-11 place-items-center rounded-full border border-border bg-card text-heading transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:opacity-40";

  return (
    <>
      <div className={`hidden lg:grid ${desktopClassName}`}>{children}</div>
      <div role="region" aria-roledescription="carousel" aria-label={label} className="lg:hidden">
        <div id={id} className="overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: reducedMotion ? 0 : direction * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reducedMotion ? 0 : direction * -24 }}
              transition={{ duration: reducedMotion ? 0 : 0.18, ease: "easeOut" }}
              className="grid gap-x-6 md:grid-cols-2"
            >
              {cards[current]}
              {cards.length > 1 && <div className="hidden md:contents">{cards[(current + 1) % cards.length]}</div>}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex items-center justify-between gap-4">
          <p aria-live="polite" aria-atomic="true" className="text-xs text-sub-heading tabular-nums">{String(current + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}</p>
          <div className="flex gap-2">
            <button type="button" aria-label={`Previous ${label}`} aria-controls={id} disabled={cards.length < 2} onClick={() => move(-1)} className={controlClass}><ArrowLeft aria-hidden="true" className="size-4" /></button>
            <button type="button" aria-label={`Next ${label}`} aria-controls={id} disabled={cards.length < 2} onClick={() => move(1)} className={controlClass}><ArrowRight aria-hidden="true" className="size-4" /></button>
          </div>
        </div>
      </div>
    </>
  );
}
