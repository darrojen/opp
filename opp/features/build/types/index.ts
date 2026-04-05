import { StatusType } from "@/components/layout/BuildStatus";

export interface TeamMember {
  id: string;
  name: string;
  avatar: string;
  role?: string;
  url?: string;
      isLead?: boolean;

}

export interface BuildLink {
  type: "demo" | "github" | "website" | "twitter" | "other";
  url: string;
  label?: string;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate?: string;
}

export interface BuildModule {
  title: string;
  description: string;
  bullets?: string[];
}

export interface Build {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logoUrl: string;
  logoColor: string;
  logoIcon: string;
  status: StatusType;
  category: string[];
  tags?: string[];
  upvotes: number;
//   upvoters: number;
  followers: number;
  isBookmarked?: boolean;
  isUpvoted?: boolean;
  updatedAt: string;
  createdAt: string;


  // Detail fields
  fullDescription?: string;
  problem?: string[];
  solution?: BuildModule[];
  links: BuildLink[];
  team: TeamMember[];
  milestones?: Milestone[];
}
export type Upvoter = {
  id: string | number;
  name: string;
  handle?: string;   // e.g. "kieran_ir_vc" or "@kieran_ir_vc"
  bio?: string;
  avatar?: string;
  url?: string;
};
export type BuildTab = "details" | "team" | "milestones" | "followers" | "upvoters";