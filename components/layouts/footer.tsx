import Link from "next/link";

import {
  footerNavLinks,
  footerSocialLinks,
} from "@/data/components.layout-data";

import { ArrowUpRight, Download } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-dth-border bg-[#050505] text-dth-heading">
      <div className="page-layout">
        <div className="flex flex-col gap-7 py-10 sm:py-12 max-md:gap-5 max-md:pt-8 max-md:pb-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <Link
            href="/"
            aria-label="Syed Hassan Ali home"
            className="w-fit shrink-0 font-heading text-[clamp(26px,2.1vw,38px)] leading-[1.1] font-bold tracking-wide text-[#f5f4ee] uppercase max-lg:text-[clamp(28px,5.5vw,40px)]"
          >
            Syed Hassan Ali
          </Link>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-2 sm:gap-x-10">
              {footerNavLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href.startsWith("#") ? `/${href}` : href}
                    className="inline-block py-2 text-sm font-medium text-dth-heading transition-colors hover:text-primary sm:text-base"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col-reverse gap-6 max-md:items-center max-md:gap-4 max-md:text-center border-t border-dth-border/70 py-6 sm:py-7 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <p className="text-xs leading-relaxed text-dth-foreground sm:text-sm">
            &copy; 2026 Syed Hassan Ali. All rights reserved.
          </p>
          <ul
            aria-label="Contact and résumé"
            className="flex flex-wrap items-center max-md:justify-center gap-x-5 gap-y-3 sm:gap-x-6"
          >
            {footerSocialLinks.map(({ label, href, external, download }) => {
              const content = (
                <>
                  {label}
                  {download ? (
                    <Download aria-hidden="true" className="size-3.5" />
                  ) : (
                    <ArrowUpRight aria-hidden="true" className="size-3" />
                  )}
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      download={download || undefined}
                      className="inline-flex items-center gap-1.5 py-1 text-xs font-medium text-dth-heading transition-colors hover:text-primary sm:text-sm"
                    >
                      {content}
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="inline-flex items-center gap-1.5 py-1 text-xs font-medium text-dth-foreground sm:text-sm"
                    >
                      {content}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
