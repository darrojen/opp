export type Skill = "Frontend" | "UX/UI" | "Full-Stack" | "Blockchain" | "Backend" | "Mobile";
export type Status = "active" | "in_hackathon" | "offline" | "logged_out" | "busy" | "grinding";

export type ActivityMonth = {
  month: string;
  value: number;
};

export interface HackerProfile {
  id: string;
  username: string;
  handle: string;
  avatarUrl: string;
  location: string;
  roles: string[];
  organization: string;
  techStack: string[];
  bio: string;
  skills: Skill[];
  interest: string;
  following: number;
  followers: number;
  status: Status;
  karma: number;
  activity: ActivityMonth[];
  socialLinks: {
    website?: string;
    github?: string;
    twitter?: string;
  };
}