import type { Metadata } from "next";
import { caseStudiesMetadata, pageMetadata } from "@/configs/metadata";
import { CaseStudiesData } from "@/data/case-studies/case-studies-data";

import CaseStudiesPage from "@/views/case-studies-page";

export async function generateMetadata({ searchParams }: {
  searchParams: Promise<{ page?: string | string[] }>;
}): Promise<Metadata> {
  const { page: raw } = await searchParams;
  const page = typeof raw === "string" && /^\d+$/.test(raw)
    ? Math.min(Math.ceil(CaseStudiesData.length / 3), Math.max(1, Number(raw) || 1))
    : 1;
  if (page === 1) return caseStudiesMetadata;
  return pageMetadata({
    title: `Case Studies - Page ${page} | Syed Hassan Ali`,
    description: "Explore more web applications, AI tools, and business automation projects by Syed Hassan Ali, including the problems they solve and how they work.",
    path: `/case-studies?page=${page}`,
  });
}

export default function CaseStudies({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  return <CaseStudiesPage searchParams={searchParams} />;
}
