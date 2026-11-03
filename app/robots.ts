import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "@/configs/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(site.configured
      ? { sitemap: absoluteUrl("/sitemap.xml"), host: site.url }
      : {}),
  };
}
