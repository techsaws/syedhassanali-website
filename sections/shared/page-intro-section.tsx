"use client";

import { useEffect, useState } from "react";

import styles from "@/styles/sections/case-studies.sections.module.css";

type PageIntroSectionProps = {
  id: string;
  title: string;
  phrases: readonly string[];
  subtitle: string;
  description: string;
};

function PageIntroSection({
  id,
  title,
  phrases,
  subtitle,
  description,
}: PageIntroSectionProps) {
  const [state, setState] = useState({
    index: 0,
    count: 0,
    deleting: false,
  });

  const phrase = phrases[state.index] || "";
  const cursorIdle = state.deleting
    ? state.count === 0
    : state.count === phrase.length;

  useEffect(() => {
    if (!phrases.length) return;
    const complete = state.count === phrase.length;
    const empty = state.count === 0;
    const delay = state.deleting ? (empty ? 260 : 32) : complete ? 2200 : 65;
    const timer = window.setTimeout(() => {
      if (document.hidden) {
        setState((current) => ({ ...current }));
        return;
      }
      if (!state.deleting && complete)
        setState((current) => ({ ...current, deleting: true }));
      else if (state.deleting && empty)
        setState({
          index: (state.index + 1) % phrases.length,
          count: 0,
          deleting: false,
        });
      else
        setState((current) => ({
          ...current,
          count: current.count + (current.deleting ? -1 : 1),
        }));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [state, phrase, phrases.length]);

  return (
    <header className="page-layout pt-8 sm:pt-10 md:pt-12 lg:pt-32">
      <div className="grid items-end gap-7 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <h1
          id={id}
          className="font-heading text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.04] font-semibold tracking-[-0.055em] text-heading"
        >
          {title}
          <span className="mt-2 block font-[Georgia,Times_New_Roman,serif] font-normal italic">
            <span className="sr-only">{phrases[0]}</span>
            <span aria-hidden="true" className="grid">
              {phrases.map((text) => (
                <span key={text} className="invisible col-start-1 row-start-1">
                  {text}
                </span>
              ))}
              <span className="col-start-1 row-start-1">
                {phrase.slice(0, state.count)}
                <span className={styles.cursor} data-idle={cursorIdle}>|</span>
              </span>
            </span>
          </span>
        </h1>
        <div className="max-w-lg border-l-[3px] border-border pl-5 sm:pl-6 lg:pl-7">
          <p className="mb-3 font-heading text-lg leading-snug font-medium text-sub-heading sm:text-xl">
            {subtitle}
          </p>
          <p className="max-w-[46ch] text-base leading-[1.8] text-foreground sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </header>
  );
}

export default PageIntroSection;
