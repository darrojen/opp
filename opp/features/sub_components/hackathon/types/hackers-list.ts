export interface Hacker {
  id: string;
  username: string;
  avatarUrl?: string;
  organization?: string;
  bio?: string;
  tags?: HackerTag[];
   skills?: string[];
  interests?: string[];
}

export type HackerTagVariant = "build" | "winner" | "mentor" | "sponsor";

export interface HackerTag {
  label: string;
  variant: HackerTagVariant;
}

export interface HackersListProps {
  hackers: Hacker[];
  onAddFriend?: (hacker: Hacker) => void;
  onMessage?: (hacker: Hacker) => void;
  onViewProfile?: (hacker: Hacker) => void;
  onSearch?: (query: string) => void;
  searchPlaceholder?: string;
  isLoading?: boolean;
}

export interface HackerCardProps {
  hacker: Hacker;
  onAddFriend?: (hacker: Hacker) => void;
  onMessage?: (hacker: Hacker) => void;
  onViewProfile?: (hacker: Hacker) => void;
}