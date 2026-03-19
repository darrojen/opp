import { GrantCategory, GrantStatus } from "@/features/home/components/sub/grant-box";

export interface GrantBoxProps {
  title: string;
  funder: string;
  funderIcon?: string;
  coverImage?: string;
  amount: string;
  status: GrantStatus;
  category?: GrantCategory;
  deadline?: string;
  eligibility?: string;
  tags?: string[];
  href?: string;
}