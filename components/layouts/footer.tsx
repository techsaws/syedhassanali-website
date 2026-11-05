import Link from "next/link";

import Image from "next/image";
import { footerNavLinks } from "@/data/components.layout-data";
import { socialLinks } from "@/configs/social-links";

function Footer() {
  return (
    <footer className="border-t border-dth-border bg-[#050505] text-dth-heading">
      <div className="page-layout">
        <div className="flex flex-col gap-7 pt-10 pb-6 sm:pt-12 sm:pb-7 max-md:gap-5 max-md:pt-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="min-w-0">
          <Link
            href="/"
            aria-label="Syed Hassan Ali home"
            className="block w-fit shrink-0 font-heading text-[clamp(26px,2.1vw,38px)] leading-[1.1] font-bold tracking-wide text-[#f5f4ee] uppercase max-lg:text-[clamp(28px,5.5vw,40px)]"
          >
            <span className="block">Syed Hassan Ali</span>
            <span className="mt-1.5 block font-sans text-[clamp(12px,1vw,17px)] leading-snug font-medium tracking-[0.01em] normal-case text-[#FFCE00] max-md:text-xs">
              Full-Stack Software Engineer
            </span>
          </Link>

          </div>
            <div className="w-full lg:w-auto">
          <nav aria-label="Footer social profiles">
            <ul className="flex w-full flex-wrap items-center gap-x-3 gap-y-3 lg:justify-end">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.name} (opens in a new tab)`}
                    title={social.name}
                    className="flex size-10 items-center justify-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <Image src={social.icon} alt="" width={28} height={28} className="size-7 object-contain" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
            </div>
        </div>

        <div className="flex flex-col-reverse gap-6 max-md:items-center max-md:gap-4 max-md:text-center border-t border-dth-border/70 py-6 sm:py-7 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <p className="text-xs leading-relaxed text-dth-foreground sm:text-sm">
            &copy; 2026 Syed Hassan Ali. All rights reserved.
          </p>
          <div className="flex w-full min-w-0 flex-col gap-5 lg:w-auto lg:items-end">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-2 sm:gap-x-10">
              {footerNavLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href.startsWith("#") ? `/${href}` : href}
                    className="inline-block py-2 text-sm font-medium text-dth-heading decoration-white underline-offset-8 transition-colors hover:text-white hover:underline sm:text-base"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>



          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;