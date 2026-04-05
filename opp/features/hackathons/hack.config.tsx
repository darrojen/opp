

// features/hackathons/hack.config.tsx

import AnnouncementsTab from "@/features/hackathons/components/sub/AnnouncementsTab";
import BuidlsTab from "@/features/hackathons/components/sub/BuidlsTab";
import DetailsTab from "@/features/hackathons/components/sub/DetailsTab";
import HackersTab from "@/features/hackathons/components/sub/HackersTab";
import IdeasTab from "@/features/hackathons/components/sub/IdeasTab";
import QuestionsTab from "@/features/hackathons/components/sub/QuestionsTab";
import TeamTab from "@/features/hackathons/components/sub/TeamTab";
// import type { HackathonStatus } from "@/features/hackathons/props/HackathonDetailProps";

// 👉 import tab components


// ─── Status config (unchanged) ────────────────────────────────────────────────
export const STATUS_CONFIG = {
  upcoming: {
    label: "Upcoming",
    bg: "bg-amber-100",
    text: "text-amber-600",
    dot: "bg-amber-400",
  },
  ongoing: {
    label: "Ongoing",
    bg: "bg-emerald-100",
    text: "text-emerald-600",
    dot: "bg-emerald-400",
  },
  ended: {
    label: "Ended",
    bg: "bg-gray-100",
    text: "text-gray-500",
    dot: "bg-gray-400",
  },
};

// ─── Tabs with components ─────────────────────────────────────────────────────
export interface TabConfig {
  id: string;
  label: string;
  badge: "count" | "New" | null;
  component: React.ComponentType<any>;
}

export const HACK_TABS: TabConfig[] = [
  { id: "details", label: "Details", badge: null, component: DetailsTab },
  { id: "buidls", label: "Build", badge: null, component: BuidlsTab },
  { id: "hackers", label: "Hackers", badge: "count", component: HackersTab },
  { id: "team", label: "Join a Team", badge: "New", component: TeamTab },
  { id: "announcements", label: "Announcements", badge: null, component: AnnouncementsTab },
  { id: "questions", label: "Ask Question", badge: null, component: QuestionsTab },
  { id: "ideas", label: "Ideas", badge: null, component: IdeasTab },
];

// ─── CTA ──────────────────────────────────────────────────────────────────────
export const CTA_PRIMARY = "Register as Hacker";
export const CTA_SECONDARY = "Submit Build";