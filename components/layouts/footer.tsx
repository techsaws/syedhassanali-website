"use client";

import Link from "next/link";

import Image from "next/image";
import { footerNavLinks } from "@/data/components.layout-data";
import { ArrowUpRight } from "lucide-react";
import { useGlobalContext } from "@/contexts/global-context";
import { socialLinks } from "@/configs/social-links";

function Footer() {
  const { setConnectModal, setContactStep } = useGlobalContext();
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim();
  const contactClass = "group/contact relative inline-flex items-center gap-1.5 py-2 text-xs font-medium text-dth-foreground transition-colors hover:text-white focus-visible:text-white sm:text-sm";
  const underline = <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 rounded-full bg-white transition-transform duration-400 ease-out group-hover/contact:scale-x-100 group-focus-visible/contact:scale-x-100 motion-reduce:transition-none" />;
  return (
    <footer className="border-t border-dth-border bg-[#050505] text-dth-heading">
      <div className="page-layout">
        <div className="flex flex-col gap-7 py-10 sm:py-12 max-md:gap-5 max-md:pt-8 max-md:pb-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
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

        <div className="flex flex-col-reverse gap-6 max-md:items-center max-md:gap-4 max-md:text-center border-t border-dth-border/70 py-6 sm:py-7 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
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


          <nav aria-label="Footer contact links">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-6">
              {email && <li><a href={`mailto:${email}`} className={contactClass}>Email <ArrowUpRight aria-hidden="true" className="size-3.5" />{underline}</a></li>}
              {phone && <li><a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className={contactClass}>Call <ArrowUpRight aria-hidden="true" className="size-3.5" />{underline}</a></li>}
              <li><button type="button" onClick={() => { setContactStep("resume"); setConnectModal(true); }} className={contactClass}>Download resume <ArrowUpRight aria-hidden="true" className="size-3.5" />{underline}</button></li>
            </ul>
          </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;