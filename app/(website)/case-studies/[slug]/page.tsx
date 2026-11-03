import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/configs/metadata";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { CaseStudyData } from "@/data/case-studies/case-studies-data";
import CaseStudyPage from "@/views/case-study-page";

export function generateStaticParams() {
  return CaseStudyData.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = CaseStudyData.find((item) => item.slug === slug);
  if (!study) notFound();
  return pageMetadata({
    title: study.seo.title,
    description: study.seo.description,
    keywords: study.seo.keywords,
    path: `/case-studies/${study.slug}`,
    image: typeof study.image === "string" ? study.image : study.image?.src,
  });
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<Loading />}>
      <CaseStudyPage params={params} />
    </Suspense>
  );
}
