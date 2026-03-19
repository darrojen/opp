import { JobLevel, JobStatus, JobType } from "@/features/home/components/sub/job-box";

export interface JobBoxProps {
  title: string;
  company: string;
  companyIcon?: string;
  coverImage?: string;
  location: string;
  type: JobType;
  status: JobStatus;
  level?: JobLevel;
  salary?: string;
  deadline?: string;
  tags?: string[];
  href?: string;
}
