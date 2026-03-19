

import { notFound } from "next/navigation";
import Box from "@/components/ui/box";
import { getHackathon }        from "@/features/hackathons/lib/getHackathon";
import HackCoverSidebar        from "@/features/hackathons/components/HackCoverSidebar";
import HackTitleCTA            from "@/features/hackathons/components/HackTitleCTA";
import HackTabs                from "@/features/hackathons/components/HackTabs";
import HackDetailsContent      from "@/features/hackathons/components/HackDetailsContent";

export default async function HackathonDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  
  const { id } = await params;
  const data = await getHackathon(id);
  if (!data) notFound();

  return (
    <Box as="div" className="min-h-screen bg-[#f5f5f5]">
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
      <HackDetailsContent
        description={data.description}
        bullets={data.bullets}
        outline={data.outline}
      />
    </Box>
  );
}