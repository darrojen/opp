// 'use client';

// export default function AnnouncementsTab() {
//   return (
//     <div className="space-y-4">
//       <h2 className="text-lg font-semibold">Announcements</h2>
//       <p className="text-gray-600">
//         Important updates from organizers will appear here.
//       </p>
//     </div>
//   );
// }


// AnnounceUsage.tsx — example usage of the Announce component

"use client";

import Announce from "@/features/sub_components/announce/components/Announce";
import { Announcement } from "@/features/sub_components/announce/types/announce";


// ---------------------------------------------------------------------------
// Example 1: Auto-fetch (no props needed)
// The component calls fetchAnnouncements() internally when no data is passed.
// ---------------------------------------------------------------------------

export function AnnounceAutoFetch() {
  return (
    <div style={{ padding: "24px" }}>
      <Announce />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Example 2: Pass announcements directly (e.g. from a server component)
// ---------------------------------------------------------------------------

const MOCK_ANNOUNCEMENTS: Announcement[] = [
  {
    id: "ann-001",
    title: "AWS Prompt the Planet: Transform Ideas into Production-Ready Infrastructure",
    body: "The AWS Prompt the Planet Challenge invites developers, founders, and AI enthusiasts worldwide to contribute expert-designed prompts that help startups build faster, smarter, and more efficiently on AWS.",
    type: "general",
    author: { name: "Organizer Team", role: "Organizer" },
    publishedAt: "2026-03-20T10:00:00Z",
    pinned: true,
  },
  {
    id: "ann-002",
    title: "Submission Deadline Extended by 48 Hours",
    body: "New deadline: April 5, 2026 at 11:59 PM UTC.",
    type: "update",
    author: { name: "Organizer Team", role: "Organizer" },
    publishedAt: "2026-03-25T14:30:00Z",
  },
];

export function AnnounceWithData() {
  return (
    <div style={{ padding: "24px" }}>
      <Announce
        announcements={MOCK_ANNOUNCEMENTS}
        eventTitle="AWS Prompt the Planet Hackathon"
        onSelect={(ann) => {
          console.log("Selected announcement:", ann.id, ann.title);
        }}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Example 3: Inside a tab / page section (typical integration)
// ---------------------------------------------------------------------------

export default function AnnouncementsTab() {
  return (
    <section style={{ maxWidth: 1200, margin: "0 0", padding: "32px 0px" }}>
      <Announce
        onSelect={(ann) => {
          // e.g. open a modal, track analytics, etc.
          console.log("Announcement clicked:", ann.id);
        }}
      />
    </section>
  );
}