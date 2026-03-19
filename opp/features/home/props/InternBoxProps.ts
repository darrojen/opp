import { InternshipStatus, InternshipType } from "@/features/home/components/sub/intern-box";

export interface InternBoxProps {
  role: string;
  company: string;
  companyIcon?: string;
  coverImage?: string;
  location: string;
  type: InternshipType;
  status: InternshipStatus;
  stipend?: string;
  deadline?: string;
  tags?: string[];
  href?: string;
}