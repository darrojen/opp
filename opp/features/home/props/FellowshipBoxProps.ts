import { FellowshipFormat, FellowshipStatus } from "@/features/home/components/sub/fellowship";

export interface FellowshipBoxProps {
  title: string;
  organization: string;
  organizationIcon?: string;
  coverImage?: string;
  location?: string;
  format: FellowshipFormat;
  status: FellowshipStatus;
  duration?: string;
  stipend?: string;
  cohort?: string;
  deadline?: string;
  tags?: string[];
  href?: string;
}