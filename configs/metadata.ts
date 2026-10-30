import type { Metadata } from "next";
import { site } from "./site";

export function pageMetadata({
  title,
  description,
  path,
  image = site.socialImage,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: site.name,
      title,
      description,
      url: path,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...pageMetadata({
    title: site.title,
    description: site.description,
    path: "/",
  }),
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const caseStudiesMetadata = pageMetadata({
  title: "Case Studies | Web Apps & Automation | Syed Hassan Ali",
  description:
    "See how I build lead follow-ups, AI support, client portals, and connected business workflows. Explore the problems, solutions, and implementation details.",
  path: "/case-studies",
});
