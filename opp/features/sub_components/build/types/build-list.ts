export type BuildTrack = string;

export type BuildCategory =
  | "AI / Robotics"
  | "Other"
  | "DeFi"
  | "NFT"
  | "Gaming"
  | "DAO"
  | "Infrastructure"
  | "Social"
  | string;

export type ViewMode = "grid" | "list";

export interface Build {
  id: string;
  title: string;
  description: string;
  thumbnailUrl?: string;
  category: BuildCategory;
  track: BuildTrack;
  author: {
    username: string;
    avatarUrl?: string;
  };
  hasGithub?: boolean;
  hasWebsite?: boolean;
}

export interface BuildListProps {
  builds: Build[];
  isLoading?: boolean;
  onBuildClick?: (build: Build) => void;
  onSearch?: (query: string) => void;
  onSortChange?: (sort: string) => void;
  onTrackChange?: (track: string) => void;
  searchPlaceholder?: string;
  tracks?: string[];
}

export interface BuildCardProps {
  build: Build;
  viewMode?: ViewMode;
  onClick?: (build: Build) => void;
}