import { HackathonStatus } from "@/features/home/components/sub/hack-box";

export interface HackBoxProps {
  id: string;
  title: string;
  organizer: string;
  organizerIcon?: string | null;
  coverImage: string;
  status: HackathonStatus;
  daysLeft?: number;
  hackersCount?: number;
  href?: string;
}