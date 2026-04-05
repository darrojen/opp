// features/hacker/tabs/types.ts

import { HackerProfile } from "@/features/hacker/types/hacker.types";

export interface ActivityTabProps {
  profile: HackerProfile;
}

export interface ActivityTabConfig {
  id: string;
  label: string;
  component: React.ComponentType<ActivityTabProps>;
}