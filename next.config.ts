import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/favicon.ico", destination: "/favicons/favicon.ico", permanent: true },
      { source: "/icon.svg", destination: "/favicons/icon.svg", permanent: true },
      { source: "/apple-touch-icon.png", destination: "/favicons/apple-touch-icon.png", permanent: true },
      { source: "/favicon-96.png", destination: "/favicons/favicon-96.png", permanent: true },
      { source: "/logo.png", destination: "/favicons/logo.png", permanent: true },
      { source: "/images/social-preview.png", destination: "/favicons/social-preview.png", permanent: true },
    ];
  },
  outputFileTracingIncludes: { "/api/resume": ["./data/resume/resume-02.pdf"] },
  async headers() {
    return [{ source: "/(.*)", headers: [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
    ] }];
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
