"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";

type FAQItem = { question: string; answer: string };

export default function FAQAccordion({ items }: { items: readonly FAQItem[] }) {
  const [active, setActive] = useState<number | null>(0);
  const id = useId();
  const reducedMotion = useReducedMotion();

  return (
    <div className="border-t-2 border-border">
      {items.map((item, index) => {
        const open = active === index;
        const triggerId = `${id}-trigger-${index}`;
        const panelId = `${id}-panel-${index}`;
        return (
          <div key={item.question} className="border-b-2 border-border">
            <h3>
              <button
                id={triggerId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setActive(open ? null : index)}
                className="flex w-full items-start justify-between gap-5 py-6 text-left font-heading text-lg leading-snug font-semibold text-heading focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:text-xl"
              >
                {item.question}
                <Plus aria-hidden="true" className={`mt-1 size-5 shrink-0 transition-transform duration-300 motion-reduce:transition-none ${open ? "rotate-45" : "rotate-0"}`} />
              </button>
            </h3>
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!open}
              inert={!open}
              initial={false}
              animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="max-w-[65ch] pb-6 pr-6 text-base leading-[1.8] text-foreground sm:pr-10">{item.answer}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
