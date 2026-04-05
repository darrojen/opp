// announce.ts — types & API helpers for the Announcements feature

export type AnnouncementType = "general" | "update" | "warning" | "milestone";

export interface Announcement {
  id: string;
  title: string;
  body: string;
  type: AnnouncementType;
  author: {
    name: string;
    avatarUrl?: string;
    role?: string; // e.g. "Organizer"
  };
  publishedAt: string; // ISO date string
  pinned?: boolean;
}

export interface AnnounceProps {
  announcements?: Announcement[];
  /** Hackathon / event title shown in the outline sidebar */
  eventTitle?: string;
  /** Called when the user clicks an announcement (e.g. to expand) */
  onSelect?: (announcement: Announcement) => void;
}

// ---------------------------------------------------------------------------
// Type config (icon + color per type)
// ---------------------------------------------------------------------------

export const ANNOUNCEMENT_TYPE_CONFIG: Record<
  AnnouncementType,
  { label: string; color: string; bg: string; icon: string }
> = {
  general:   { label: "General",   color: "#6b7280", bg: "#f3f4f6", icon: "📢" },
  update:    { label: "Update",    color: "#2563eb", bg: "#eff6ff", icon: "🔄" },
  warning:   { label: "Warning",   color: "#b45309", bg: "#fffbeb", icon: "⚠️" },
  milestone: { label: "Milestone", color: "#16a34a", bg: "#f0fdf4", icon: "🏆" },
};

// ---------------------------------------------------------------------------
// Mock data
// ---------------------------------------------------------------------------

export async function fetchAnnouncements(): Promise<Announcement[]> {
  // Replace with: const res = await fetch('/api/announcements'); return res.json();
  return [
    {
      id: "ann-001",
      title: "AWS Prompt the Planet: Transform Ideas into Production-Ready Infrastructure",
      body: "The AWS Prompt the Planet Challenge invites developers, founders, and AI enthusiasts worldwide to contribute expert-designed prompts that help startups build faster, smarter, and more efficiently on AWS. Whether you're crafting prompts for infrastructure-as-code, security baselines, cost optimization, or AI-powered workflows, your contribution will empower the next generation of builders.",
      type: "general",
      author: { name: "Organizer Team", role: "Organizer" },
      publishedAt: "2026-03-20T10:00:00Z",
      pinned: true,
    },
    {
      id: "ann-002",
      title: "Submission Deadline Extended by 48 Hours",
      body: "Due to popular demand and technical issues some participants experienced over the weekend, we are extending the submission deadline by 48 hours. New deadline: April 5, 2026 at 11:59 PM UTC.",
      type: "update",
      author: { name: "Organizer Team", role: "Organizer" },
      publishedAt: "2026-03-25T14:30:00Z",
    },
    {
      id: "ann-003",
      title: "Important: API Rate Limits During Judging Window",
      body: "Please be aware that AWS sandbox API rate limits will be enforced more strictly during the judging window (April 6–10). Ensure your demos do not rely on burst requests exceeding 100 req/min.",
      type: "warning",
      author: { name: "AWS Support", role: "Sponsor" },
      publishedAt: "2026-03-27T09:00:00Z",
    },
  ];
}