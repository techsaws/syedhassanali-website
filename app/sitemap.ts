import type { MetadataRoute } from "next";
import { CaseStudyData } from "@/data/case-studies/case-studies-data";
import { absoluteUrl, site } from "@/configs/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.configured) return [];
  return ["/", "/case-studies", ...CaseStudyData.map((study) => `/case-studies/${study.slug}`)]
    .map((path) => ({ url: absoluteUrl(path) }));
}
