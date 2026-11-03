import StructuredData from "@/components/shared/structured-data";
import { absoluteUrl, site } from "@/configs/site";
import { manrope, spaceGrotesk } from "@/configs/fonts";
export { metadata } from "@/configs/metadata";
export { viewport } from "@/configs/viewport";
import "@/configs/styles";

import GlobalProvider from "@/providers/global-provider";

import { cn } from "cn";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        spaceGrotesk.variable,
        manrope.variable,
      )}
    >
      <body
        suppressHydrationWarning
        className="min-h-full w-full flex flex-col"
      >
        {site.configured && <StructuredData data={{
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, inLanguage: "en", image: absoluteUrl(site.logo) },
            { "@type": "Person", "@id": `${site.url}/#person`, name: site.name, url: site.url, jobTitle: "Full-Stack Software Engineer", ...(process.env.NEXT_PUBLIC_LINKEDIN_URL ? { sameAs: [process.env.NEXT_PUBLIC_LINKEDIN_URL] } : {}) },
          ],
        }} />}
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
