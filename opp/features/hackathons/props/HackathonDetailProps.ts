
// features/hackathons/props/HackathonDetailProps.ts

export type HackathonStatus = "upcoming" | "ongoing" | "ended";

export interface TimelineRow {
  label: string;
  date: string;
}

export interface HackathonTimeline {
  note: string;          // e.g. "Submission starts in 1 day"
  status: HackathonStatus;
  rows: TimelineRow[];
}

export interface HackathonDetailProps {
  id: string;
  title: string;
  organizer: string;
  organizerIcon: string | null;
  coverImage: string;
  status: HackathonStatus;
  daysLeft?: number;
  hackersCount?: number;

  // Sidebar
  prizePool: string;
  timeline: HackathonTimeline;
  mode: string;
  tags: string[];
  ecosystem: string[];
  submissionRequirements: string;

  // Content
  description: string;   // \n\n-separated paragraphs; first line may be "More info at <url>"
  bullets: string[];     // green checkmark bullets
  outline: string[];     // chapter list — empty = "no chapters"
}