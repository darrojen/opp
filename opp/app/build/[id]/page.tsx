

import { notFound } from "next/navigation";
import { getBuildById } from "@/features/build/build.config";
import { BuildSidebar } from "@/features/build/components/BuildSidebar";
import { BuildContent } from "@/features/build/components/BuildContent";
import { BuildTab } from "@/features/build/types";

interface BuildPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ tab?: string }>;
}

export async function generateMetadata({ params }: BuildPageProps) {
  const { id } = await params;
  const build = getBuildById(id);

  if (!build) return { title: "Build Not Found" };

  return {
    title: `${build.name} — Build`,
    description: build.tagline,
  };
}

export default async function BuildPage({ params, searchParams }: BuildPageProps) {
  const { id } = await params;
  const { tab } = await searchParams;

  const build = getBuildById(id);
  if (!build) notFound();

  const activeTab = (tab as BuildTab) || "details";

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-17 py-6 sm:py-10">
        
        {/* Mobile: stacked | Desktop: 2 columns */}
        <div className="flex flex-col lg:grid lg:grid-cols-[380px_1fr] gap-8 lg:gap-12">
          <BuildSidebar build={build} />
          <BuildContent build={build} activeTab={activeTab} />
        </div>

      </div>
    </main>
  );
}