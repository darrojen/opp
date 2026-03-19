export type CategoryFilter =
  | "all"
  | "hackathons"
  | "internships"
  | "jobs"
  | "grants"
  | "fellowships"
  | "bootcamps";

export const categoryFilters: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "hackathons", label: "Hackathons" },
  { id: "internships", label: "Internships" },
  { id: "jobs", label: "Jobs" },
  { id: "grants", label: "Grants" },
  { id: "fellowships", label: "Fellowships" },
  { id: "bootcamps", label: "Bootcamps" },
];