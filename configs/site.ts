const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const site = {
  name: "Syed Hassan Ali",
  title: "Syed Hassan Ali | Full-Stack Software Engineer",
  description:
    "I build websites, web apps, and automations that save time and simplify business operations. Explore my work and discuss your project directly with me.",
  url: configuredUrl ? new URL(configuredUrl).origin : "http://localhost:3000",
  configured: Boolean(configuredUrl),
  socialImage:
    process.env.NEXT_PUBLIC_SOCIAL_IMAGE?.trim() ||
    "/favicons/og-banner.png",
  twitterImage: process.env.NEXT_PUBLIC_TWITTER_IMAGE?.trim() || "/favicons/social-preview.png",
  logo: "/favicons/logo.png",
};

export const absoluteUrl = (path: string) => new URL(path, site.url).toString();
