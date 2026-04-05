
import { notFound } from "next/navigation";
import { Suspense } from "react";

import Box from "@/components/ui/box";

import HackCoverSidebar from "@/features/hackathons/components/HackCoverSidebar";

import HackTitleCTA from "@/features/hackathons/components/HackTitleCTA";
import HackTabs from "@/features/hackathons/components/HackTabs";

import { getHackathon } from "@/features/hackathons/lib/getHackathon";
import HackCoverSidebarSkeleton from "@/features/hackathons/skeleton/HackCoverSidebarSkeleton";
// import HoneycombRingLoader  from '@/components/loading/logo-load';

// ─────────────────────────────────────────────────────────────
// Async Content (Suspense will wait here)
// ─────────────────────────────────────────────────────────────
async function HackathonContent({ id }: { id: string }) {
  const [data] = await Promise.all([
    getHackathon(id),
    new Promise((resolve) => setTimeout(resolve, 2000)),
  ]);

  if (!data) notFound();

  return (
    <>
      <HackCoverSidebar
        title={data.title}
        coverImage={data.coverImage}
        prizePool={data.prizePool}
        timeline={data.timeline}
        mode={data.mode}
        tags={data.tags}
        ecosystem={data.ecosystem}
        submissionRequirements={data.submissionRequirements}
        organizer={data.organizer}
        organizerIcon={data.organizerIcon}
      />

      <HackTitleCTA title={data.title} />

      <HackTabs hackersCount={data.hackersCount} />


    </>
  );
}

// ─────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────
export default async function HackathonDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Box as="div" className=" bg-[#f5f5f5]">
      <Suspense fallback={<HackCoverSidebarSkeleton />}>
        <HackathonContent id={id} />
      </Suspense>
    </Box>
  );
}