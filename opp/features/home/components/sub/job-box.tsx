// import Box from "@/components/ui/box";

// export type JobType = "remote" | "onsite" | "hybrid";
// export type JobStatus = "open" | "closing-soon" | "closed";
// export type JobLevel = "junior" | "mid" | "senior" | "lead";

// export interface JobBoxProps {
//   title: string;
//   company: string;
//   companyIcon?: string;
//   location: string;
//   type: JobType;
//   status: JobStatus;
//   level?: JobLevel;
//   salary?: string;
//   deadline?: string;
//   tags?: string[];
//   href?: string;
// }

// const statusConfig: Record<JobStatus, { label: string; bg: string; text: string; dot: string }> = {
//   open: { label: "Hiring", bg: "bg-blue-100", text: "text-blue-600", dot: "bg-blue-400" },
//   "closing-soon": { label: "Closing Soon", bg: "bg-amber-100", text: "text-amber-600", dot: "bg-amber-400" },
//   closed: { label: "Filled", bg: "bg-gray-100", text: "text-gray-500", dot: "bg-gray-400" },
// };

// const levelConfig: Record<JobLevel, { label: string; color: string }> = {
//   junior: { label: "Junior", color: "text-sky-600 bg-sky-50" },
//   mid: { label: "Mid-level", color: "text-violet-600 bg-violet-50" },
//   senior: { label: "Senior", color: "text-orange-600 bg-orange-50" },
//   lead: { label: "Lead", color: "text-rose-600 bg-rose-50" },
// };

// const typeConfig: Record<JobType, { label: string; icon: string }> = {
//   remote: { label: "Remote", icon: "🌐" },
//   onsite: { label: "On-site", icon: "🏢" },
//   hybrid: { label: "Hybrid", icon: "⚡" },
// };

// export default function JobBox({
//   title,
//   company,
//   companyIcon,
//   location,
//   type,
//   status,
//   level,
//   salary,
//   deadline,
//   tags = [],
//   href = "#",
// }: JobBoxProps) {
//   const s = statusConfig[status];
//   const t = typeConfig[type];
//   const l = level ? levelConfig[level] : null;

//   return (
//     <Box
//       as="a"
//       href={href}
//       className="group flex items-start gap-3 sm:gap-4 bg-white border border-gray-200 rounded-2xl px-4 py-3.5 hover:shadow-md hover:border-blue-200 transition-all duration-200 cursor-pointer relative overflow-hidden"
//     >
//       {/* Left accent bar — blue theme for jobs */}
//       <Box
//         as="span"
//         className={`absolute left-0 top-3 bottom-3 w-1 rounded-full ${
//           status === "open" ? "bg-blue-400" : status === "closing-soon" ? "bg-amber-400" : "bg-gray-300"
//         }`}
//       />

//       {/* Company icon */}
//       <Box as="div" className="flex-shrink-0 mt-0.5">
//         {companyIcon ? (
//           <Box
//             as="img"
//             src={companyIcon}
//             alt={company}
//             className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover border border-gray-100"
//           />
//         ) : (
//           <Box
//             as="div"
//             className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-sm font-bold text-blue-500 border border-blue-100"
//           >
//             {company[0]}
//           </Box>
//         )}
//       </Box>

//       {/* Main content */}
//       <Box as="div" className="flex-1 min-w-0">
//         {/* Title + status */}
//         <Box as="div" className="flex items-start justify-between gap-2 flex-wrap">
//           <Box
//             as="h3"
//             className="font-semibold text-gray-900 text-sm sm:text-base leading-snug group-hover:text-blue-600 transition-colors truncate"
//           >
//             {title}
//           </Box>
//           <Box
//             as="span"
//             className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${s.bg} ${s.text}`}
//           >
//             <Box as="span" className={`w-1.5 h-1.5 rounded-full ${s.dot} animate-pulse`} />
//             {s.label}
//           </Box>
//         </Box>

//         {/* Company + location + type */}
//         <Box as="div" className="flex items-center gap-1.5 mt-0.5 flex-wrap">
//           <Box as="span" className="text-xs font-medium text-gray-600 truncate">{company}</Box>
//           <Box as="span" className="text-gray-300 text-xs">·</Box>
//           <Box as="span" className="text-xs text-gray-400 truncate">{location}</Box>
//           <Box as="span" className="text-gray-300 text-xs">·</Box>
//           <Box as="span" className="text-xs text-gray-400">{t.icon} {t.label}</Box>
//         </Box>

//         {/* Tags + meta */}
//         <Box as="div" className="flex items-center gap-2 mt-2 flex-wrap">
//           {l && (
//             <Box as="span" className={`text-xs px-2 py-0.5 rounded-full font-semibold ${l.color}`}>
//               {l.label}
//             </Box>
//           )}
//           {tags.map((tag) => (
//             <Box key={tag} as="span" className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">
//               {tag}
//             </Box>
//           ))}
//           <Box as="div" className="flex items-center gap-3 ml-auto flex-wrap">
//             {salary && (
//               <Box as="span" className="text-xs font-semibold text-blue-600">{salary}</Box>
//             )}
//             {deadline && status !== "closed" && (
//               <Box as="span" className="text-xs text-gray-400">
//                 Apply by <Box as="span" className="font-medium text-gray-600">{deadline}</Box>
//               </Box>
//             )}
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }


// import Box from "@/components/ui/box";

// export type JobType = "remote" | "onsite" | "hybrid";
// export type JobStatus = "open" | "closing-soon" | "closed";
// export type JobLevel = "junior" | "mid" | "senior" | "lead";

// export interface JobBoxProps {
//   title: string;
//   company: string;
//   companyIcon?: string;
//   location: string;
//   type: JobType;
//   status: JobStatus;
//   level?: JobLevel;
//   salary?: string;
//   deadline?: string;
//   tags?: string[];
//   href?: string;
// }

// const statusConfig: Record<JobStatus, { label: string; bg: string; text: string; dot: string }> = {
//   open:           { label: "Hiring",       bg: "bg-blue-100",  text: "text-blue-700",  dot: "bg-blue-400"  },
//   "closing-soon": { label: "Closing Soon", bg: "bg-amber-100", text: "text-amber-700", dot: "bg-amber-400" },
//   closed:         { label: "Filled",       bg: "bg-gray-100",  text: "text-gray-500",  dot: "bg-gray-400"  },
// };

// const levelConfig: Record<JobLevel, { label: string; color: string }> = {
//   junior: { label: "Junior",    color: "text-sky-700 bg-sky-50 ring-1 ring-sky-200"          },
//   mid:    { label: "Mid-level", color: "text-violet-700 bg-violet-50 ring-1 ring-violet-200"  },
//   senior: { label: "Senior",    color: "text-orange-700 bg-orange-50 ring-1 ring-orange-200"  },
//   lead:   { label: "Lead",      color: "text-rose-700 bg-rose-50 ring-1 ring-rose-200"        },
// };

// function GlobeIcon() {
//   return (
//     <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <circle cx="8" cy="8" r="6.5" />
//       <path d="M1.5 8h13M8 1.5C6.5 4 5.5 6 5.5 8s1 4 2.5 6.5M8 1.5C9.5 4 10.5 6 10.5 8s-1 4-2.5 6.5" />
//     </svg>
//   );
// }
// function BuildingIcon() {
//   return (
//     <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <rect x="1.5" y="6" width="13" height="8.5" rx="1" />
//       <path d="M5 14.5V10h6v4.5M1.5 6l6.5-4.5L14.5 6" />
//     </svg>
//   );
// }
// function SplitIcon() {
//   return (
//     <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M8 2v12M4 6l4-4 4 4M4 10l4 4 4-4" />
//     </svg>
//   );
// }
// function MoneyIcon() {
//   return (
//     <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
//       <circle cx="8" cy="8" r="6.5" />
//       <path d="M8 4.5v7M6 6c0-1 1-1.5 2-1.5s2 .5 2 1.5-1 1.5-2 1.5-2 .5-2 1.5 1 1.5 2 1.5 2-.5 2-1.5" />
//     </svg>
//   );
// }
// function CalendarIcon() {
//   return (
//     <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <rect x="1.5" y="3" width="13" height="11.5" rx="1.5" />
//       <path d="M1.5 7h13M5 1.5V4M11 1.5V4" />
//     </svg>
//   );
// }
// function PinIcon() {
//   return (
//     <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M8 14.5S2.5 9.5 2.5 6a5.5 5.5 0 0 1 11 0c0 3.5-5.5 8.5-5.5 8.5z" />
//       <circle cx="8" cy="6" r="1.5" />
//     </svg>
//   );
// }

// const typeIcon: Record<JobType, React.ReactNode> = {
//   remote: <GlobeIcon />,
//   onsite: <BuildingIcon />,
//   hybrid: <SplitIcon />,
// };
// const typeLabel: Record<JobType, string> = {
//   remote: "Remote",
//   onsite: "On-site",
//   hybrid: "Hybrid",
// };

// export default function JobBox({ title, company, companyIcon, location, type, status, level, salary, deadline, tags = [], href = "#" }: JobBoxProps) {
//   const s = statusConfig[status];
//   const l = level ? levelConfig[level] : null;

//   return (
//     <Box
//       as="a"
//       href={href}
//       className="group flex items-start gap-3 sm:gap-4 bg-white border border-gray-200 rounded-2xl px-4 py-3.5 cursor-pointer relative overflow-hidden
//         transition-all duration-300 ease-out
//         hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:border-gray-300 hover:-translate-y-0.5"
//     >
//       {/* Subtle animated shimmer line at bottom on hover */}
//       <Box as="span" className="absolute bottom-0 left-4 right-4 h-px bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full" />

//       {/* Company icon */}
//       <Box as="div" className="flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-105">
//         {companyIcon ? (
//           <Box as="img" src={companyIcon} alt={company} className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover border border-gray-100 shadow-sm" />
//         ) : (
//           <Box as="div" className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-sm font-bold text-blue-600 border border-blue-100 shadow-sm">
//             {company?.[0] ?? "?"}
//           </Box>
//         )}
//       </Box>

//       <Box as="div" className="flex-1 min-w-0">
//         <Box as="div" className="flex items-start justify-between gap-2 flex-wrap">
//           <Box as="h3" className="font-semibold text-gray-900 text-sm sm:text-base leading-snug group-hover:text-blue-600 transition-colors duration-200 truncate">
//             {title}
//           </Box>
//           <Box as="span" className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${s.bg} ${s.text}`}>
//             <Box as="span" className={`w-1.5 h-1.5 rounded-full ${s.dot} animate-pulse`} />
//             {s.label}
//           </Box>
//         </Box>

//         <Box as="div" className="flex items-center gap-1.5 mt-0.5 flex-wrap text-gray-400">
//           <Box as="span" className="text-xs font-medium text-gray-600 truncate">{company}</Box>
//           <Box as="span" className="text-xs">·</Box>
//           <Box as="span" className="inline-flex items-center gap-0.5 text-xs"><PinIcon />{location}</Box>
//           <Box as="span" className="text-xs">·</Box>
//           <Box as="span" className="inline-flex items-center gap-1 text-xs">{typeIcon[type]}{typeLabel[type]}</Box>
//         </Box>

//         <Box as="div" className="flex items-center gap-2 mt-2 flex-wrap">
//           {l && (
//             <Box as="span" className={`text-xs px-2 py-0.5 rounded-md font-semibold ${l.color}`}>
//               {l.label}
//             </Box>
//           )}
//           {tags.map((tag) => (
//             <Box key={tag} as="span" className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md font-medium transition-colors duration-200 group-hover:bg-gray-200">
//               {tag}
//             </Box>
//           ))}
//           <Box as="div" className="flex items-center gap-3 ml-auto flex-wrap">
//             {salary && (
//               <Box as="span" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600">
//                 <MoneyIcon />{salary}
//               </Box>
//             )}
//             {deadline && status !== "closed" && (
//               <Box as="span" className="inline-flex items-center gap-1 text-xs text-gray-400">
//                 <CalendarIcon />
//                 <Box as="span" className="font-medium text-gray-600">{deadline}</Box>
//               </Box>
//             )}
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }


import Box from "@/components/ui/box";
import { JobBoxProps } from "@/features/home/props/JobBoxProps";

export type JobType = "remote" | "onsite" | "hybrid";
export type JobStatus = "open" | "closing-soon" | "closed";
export type JobLevel = "junior" | "mid" | "senior" | "lead";

const statusConfig: Record<JobStatus, { label: string; bg: string; text: string; dot: string }> = {
  open:           { label: "Hiring",       bg: "bg-blue-100",  text: "text-blue-700",  dot: "bg-blue-400"  },
  "closing-soon": { label: "Closing Soon", bg: "bg-amber-100", text: "text-amber-700", dot: "bg-amber-400" },
  closed:         { label: "Filled",       bg: "bg-gray-100",  text: "text-gray-500",  dot: "bg-gray-400"  },
};

const levelConfig: Record<JobLevel, { label: string; color: string }> = {
  junior: { label: "Junior",    color: "text-sky-700 bg-sky-50 ring-1 ring-sky-200"          },
  mid:    { label: "Mid-level", color: "text-violet-700 bg-violet-50 ring-1 ring-violet-200"  },
  senior: { label: "Senior",    color: "text-orange-700 bg-orange-50 ring-1 ring-orange-200"  },
  lead:   { label: "Lead",      color: "text-rose-700 bg-rose-50 ring-1 ring-rose-200"        },
};

function GlobeIcon() {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="6.5" />
      <path d="M1.5 8h13M8 1.5C6.5 4 5.5 6 5.5 8s1 4 2.5 6.5M8 1.5C9.5 4 10.5 6 10.5 8s-1 4-2.5 6.5" />
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1.5" y="6" width="13" height="8.5" rx="1" />
      <path d="M5 14.5V10h6v4.5M1.5 6l6.5-4.5L14.5 6" />
    </svg>
  );
}
function SplitIcon() {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v12M4 6l4-4 4 4M4 10l4 4 4-4" />
    </svg>
  );
}
function MoneyIcon() {
  return (
    <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="8" cy="8" r="6.5" />
      <path d="M8 4.5v7M6 6c0-1 1-1.5 2-1.5s2 .5 2 1.5-1 1.5-2 1.5-2 .5-2 1.5 1 1.5 2 1.5 2-.5 2-1.5" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 14.5S2.5 9.5 2.5 6a5.5 5.5 0 0 1 11 0c0 3.5-5.5 8.5-5.5 8.5z" />
      <circle cx="8" cy="6" r="1.5" />
    </svg>
  );
}

function CoverPlaceholder({ label }: { label: string }) {
  return (
    <Box as="div" className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center gap-1">
      <svg className="w-7 h-7 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M8 12h8M8 16h5" />
      </svg>
      <span className="text-[10px] font-semibold text-blue-400 text-center px-1 leading-tight line-clamp-2">{label}</span>
    </Box>
  );
}

const typeIcon: Record<JobType, React.ReactNode> = {
  remote: <GlobeIcon />,
  onsite: <BuildingIcon />,
  hybrid: <SplitIcon />,
};
const typeLabel: Record<JobType, string> = {
  remote: "Remote",
  onsite: "On-site",
  hybrid: "Hybrid",
};

export default function JobBox({
  title, company, companyIcon, coverImage, location, type, status, level, salary, deadline, tags = [], href = "#",
}: JobBoxProps) {
  const s = statusConfig[status];
  const l = level ? levelConfig[level] : null;

  return (
    <Box
      as="a"
      href={href}
      className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-300 ease-out
        hover:shadow-[0_4px_20px_rgba(0,0,0,0.09)] hover:border-gray-300 hover:-translate-y-0.5"
    >
      {/* ── Header: company logo + name + status ── */}
      <Box as="div" className="flex items-center gap-2 px-3 sm:px-4 pt-3 pb-2 flex-wrap">
        {companyIcon ? (
          <Box as="img" src={companyIcon} alt={company} className="w-6 h-6 rounded object-cover flex-shrink-0" />
        ) : (
          <Box as="div" className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600 flex-shrink-0">
            {company?.[0] ?? "?"}
          </Box>
        )}
        <Box as="span" className="text-sm font-medium text-gray-700 truncate min-w-0 flex-1">{company}</Box>

        <Box as="div" className="flex items-center gap-2 ml-auto flex-shrink-0">
          <Box as="span" className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${s.bg} ${s.text}`}>
            <Box as="span" className={`w-1.5 h-1.5 rounded-full ${s.dot} animate-pulse flex-shrink-0`} />
            {s.label}
          </Box>
          {deadline && status !== "closed" && (
            <Box as="span" className="text-xs text-amber-500 font-medium whitespace-nowrap">{deadline}</Box>
          )}
        </Box>
      </Box>

      {/* ── Cover image + info row ── */}
      <Box as="div" className="flex items-start gap-3 sm:gap-4 px-3 sm:px-4 pb-4">
        {/* Cover thumbnail */}
        <Box as="div" className="w-20 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
          {coverImage ? (
            <Box as="img" src={coverImage} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          ) : (
            <CoverPlaceholder label={company} />
          )}
        </Box>

        {/* Info */}
        <Box as="div" className="flex flex-col justify-between min-h-[4rem] sm:min-h-[5rem] py-0.5 min-w-0 flex-1">
          <Box as="h3" className="font-semibold text-gray-900 text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
            {title}
          </Box>

          <Box as="div" className="flex items-center gap-2 mt-auto flex-wrap">
            <Box as="span" className="inline-flex items-center gap-0.5 text-xs text-gray-400"><PinIcon />{location}</Box>
            <Box as="span" className="text-gray-300 text-xs">·</Box>
            <Box as="span" className="inline-flex items-center gap-1 text-xs text-gray-400">{typeIcon[type]}{typeLabel[type]}</Box>

            {l && (
              <Box as="span" className={`text-xs px-1.5 py-0.5 rounded-md font-semibold ${l.color}`}>
                {l.label}
              </Box>
            )}

            {salary && (
              <Box as="span" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 ml-auto">
                <MoneyIcon />{salary}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}