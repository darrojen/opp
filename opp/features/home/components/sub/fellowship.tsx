// import Box from "@/components/ui/box";

// export type FellowshipStatus = "open" | "closing-soon" | "closed";
// export type FellowshipFormat = "in-person" | "virtual" | "hybrid";

// export interface FellowshipBoxProps {
//   title: string;
//   organization: string;
//   organizationIcon?: string;
//   location?: string;
//   format: FellowshipFormat;
//   status: FellowshipStatus;
//   duration?: string; // e.g. "6 months", "1 year"
//   stipend?: string;
//   cohort?: string; // e.g. "2025 Cohort", "Cohort 12"
//   deadline?: string;
//   tags?: string[];
//   href?: string;
// }

// const statusConfig: Record<FellowshipStatus, { label: string; bg: string; text: string; dot: string }> = {
//   open: { label: "Applications Open", bg: "bg-violet-100", text: "text-violet-600", dot: "bg-violet-400" },
//   "closing-soon": { label: "Closing Soon", bg: "bg-amber-100", text: "text-amber-600", dot: "bg-amber-400" },
//   closed: { label: "Closed", bg: "bg-gray-100", text: "text-gray-500", dot: "bg-gray-400" },
// };

// const formatConfig: Record<FellowshipFormat, { label: string; icon: string }> = {
//   "in-person": { label: "In-person", icon: "🏛️" },
//   virtual: { label: "Virtual", icon: "💻" },
//   hybrid: { label: "Hybrid", icon: "⚡" },
// };

// export default function FellowshipBox({
//   title,
//   organization,
//   organizationIcon,
//   location,
//   format,
//   status,
//   duration,
//   stipend,
//   cohort,
//   deadline,
//   tags = [],
//   href = "#",
// }: FellowshipBoxProps) {
//   const s = statusConfig[status];
//   const f = formatConfig[format];

//   return (
//     <Box
//       as="a"
//       href={href}
//       className="group flex items-start gap-3 sm:gap-4 bg-white border border-gray-200 rounded-2xl px-4 py-3.5 hover:shadow-md hover:border-violet-200 transition-all duration-200 cursor-pointer relative overflow-hidden"
//     >
//       {/* Left accent bar — violet/prestige theme */}
//       <Box
//         as="span"
//         className={`absolute left-0 top-3 bottom-3 w-1 rounded-full ${
//           status === "open" ? "bg-violet-400" : status === "closing-soon" ? "bg-amber-400" : "bg-gray-300"
//         }`}
//       />

//       {/* Org icon */}
//       <Box as="div" className="flex-shrink-0 mt-0.5">
//         {organizationIcon ? (
//           <Box
//             as="img"
//             src={organizationIcon}
//             alt={organization}
//             className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover border border-gray-100"
//           />
//         ) : (
//           <Box
//             as="div"
//             className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-violet-50 to-violet-100 flex items-center justify-center text-base border border-violet-100"
//           >
//             🎓
//           </Box>
//         )}
//       </Box>

//       {/* Main content */}
//       <Box as="div" className="flex-1 min-w-0">
//         {/* Title + status */}
//         <Box as="div" className="flex items-start justify-between gap-2 flex-wrap">
//           <Box
//             as="h3"
//             className="font-semibold text-gray-900 text-sm sm:text-base leading-snug group-hover:text-violet-600 transition-colors line-clamp-1"
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

//         {/* Org + location + format */}
//         <Box as="div" className="flex items-center gap-1.5 mt-0.5 flex-wrap">
//           <Box as="span" className="text-xs font-medium text-gray-600 truncate">{organization}</Box>
//           {location && (
//             <>
//               <Box as="span" className="text-gray-300 text-xs">·</Box>
//               <Box as="span" className="text-xs text-gray-400 truncate">{location}</Box>
//             </>
//           )}
//           <Box as="span" className="text-gray-300 text-xs">·</Box>
//           <Box as="span" className="text-xs text-gray-400">{f.icon} {f.label}</Box>
//         </Box>

//         {/* Tags + meta */}
//         <Box as="div" className="flex items-center gap-2 mt-2 flex-wrap">
//           {cohort && (
//             <Box as="span" className="text-xs px-2 py-0.5 rounded-full font-semibold text-violet-600 bg-violet-50">
//               {cohort}
//             </Box>
//           )}
//           {duration && (
//             <Box as="span" className="text-xs px-2 py-0.5 rounded-full font-medium text-gray-500 bg-gray-100">
//               🕐 {duration}
//             </Box>
//           )}
//           {tags.map((tag) => (
//             <Box key={tag} as="span" className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">
//               {tag}
//             </Box>
//           ))}
//           <Box as="div" className="flex items-center gap-3 ml-auto flex-wrap">
//             {stipend && (
//               <Box as="span" className="text-xs font-semibold text-violet-600">{stipend}</Box>
//             )}
//             {deadline && status !== "closed" && (
//               <Box as="span" className="text-xs text-gray-400">
//                 Due <Box as="span" className="font-medium text-gray-600">{deadline}</Box>
//               </Box>
//             )}
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }


// import Box from "@/components/ui/box";

// export type FellowshipStatus = "open" | "closing-soon" | "closed";
// export type FellowshipFormat = "in-person" | "virtual" | "hybrid";

// export interface FellowshipBoxProps {
//   title: string;
//   organization: string;
//   organizationIcon?: string;
//   location?: string;
//   format: FellowshipFormat;
//   status: FellowshipStatus;
//   duration?: string;
//   stipend?: string;
//   cohort?: string;
//   deadline?: string;
//   tags?: string[];
//   href?: string;
// }

// const statusConfig: Record<FellowshipStatus, { label: string; bg: string; text: string; dot: string }> = {
//   open:           { label: "Applications Open", bg: "bg-violet-100", text: "text-violet-700", dot: "bg-violet-400" },
//   "closing-soon": { label: "Closing Soon",      bg: "bg-amber-100",  text: "text-amber-700",  dot: "bg-amber-400"  },
//   closed:         { label: "Closed",            bg: "bg-gray-100",   text: "text-gray-500",   dot: "bg-gray-400"   },
// };

// function BuildingIcon() {
//   return (
//     <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <rect x="1.5" y="6" width="13" height="8.5" rx="1" />
//       <path d="M5 14.5V10h6v4.5M1.5 6l6.5-4.5L14.5 6" />
//     </svg>
//   );
// }
// function MonitorIcon() {
//   return (
//     <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <rect x="1.5" y="2" width="13" height="9" rx="1.5" />
//       <path d="M5 14h6M8 11v3" />
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
// function GraduationIcon() {
//   return (
//     <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M8 3L1.5 6.5 8 10l6.5-3.5L8 3z" />
//       <path d="M4.5 8.5V12c0 1 1.5 2 3.5 2s3.5-1 3.5-2V8.5" />
//       <path d="M14.5 6.5v4" />
//     </svg>
//   );
// }
// function ClockIcon() {
//   return (
//     <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
//       <circle cx="8" cy="8" r="6.5" />
//       <path d="M8 4.5V8l2.5 2" />
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
// function UsersIcon() {
//   return (
//     <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <circle cx="6" cy="5" r="2.5" />
//       <path d="M1 14c0-2.5 2-4 5-4s5 1.5 5 4" />
//       <path d="M11 3a2.5 2.5 0 0 1 0 5M15 14c0-2.5-1.5-4-4-4" />
//     </svg>
//   );
// }

// const formatIcon: Record<FellowshipFormat, React.ReactNode> = {
//   "in-person": <BuildingIcon />,
//   virtual:     <MonitorIcon />,
//   hybrid:      <SplitIcon />,
// };
// const formatLabel: Record<FellowshipFormat, string> = {
//   "in-person": "In-person",
//   virtual:     "Virtual",
//   hybrid:      "Hybrid",
// };

// export default function FellowshipBox({ title, organization, organizationIcon, location, format, status, duration, stipend, cohort, deadline, tags = [], href = "#" }: FellowshipBoxProps) {
//   const s = statusConfig[status];

//   return (
//     <Box
//       as="a"
//       href={href}
//       className="group flex items-start gap-3 sm:gap-4 bg-white border border-gray-200 rounded-2xl px-4 py-3.5 cursor-pointer relative overflow-hidden
//         transition-all duration-300 ease-out
//         hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:border-gray-300 hover:-translate-y-0.5"
//     >
//       <Box as="span" className="absolute bottom-0 left-4 right-4 h-px bg-violet-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full" />

//       {/* Org icon */}
//       <Box as="div" className="flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-105">
//         {organizationIcon ? (
//           <Box as="img" src={organizationIcon} alt={organization} className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover border border-gray-100 shadow-sm" />
//         ) : (
//           <Box as="div" className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-violet-50 to-violet-100 flex items-center justify-center border border-violet-100 shadow-sm text-violet-500">
//             <GraduationIcon />
//           </Box>
//         )}
//       </Box>

//       <Box as="div" className="flex-1 min-w-0">
//         {/* Title + status */}
//         <Box as="div" className="flex items-start justify-between gap-2 flex-wrap">
//           <Box as="h3" className="font-semibold text-gray-900 text-sm sm:text-base leading-snug group-hover:text-violet-600 transition-colors duration-200 line-clamp-1">
//             {title}
//           </Box>
//           <Box as="span" className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${s.bg} ${s.text}`}>
//             <Box as="span" className={`w-1.5 h-1.5 rounded-full ${s.dot} animate-pulse`} />
//             {s.label}
//           </Box>
//         </Box>

//         {/* Org · location · format */}
//         <Box as="div" className="flex items-center gap-1.5 mt-0.5 flex-wrap text-gray-400">
//           <Box as="span" className="text-xs font-medium text-gray-600 truncate">{organization}</Box>
//           {location && (
//             <>
//               <Box as="span" className="text-xs">·</Box>
//               <Box as="span" className="inline-flex items-center gap-0.5 text-xs"><PinIcon />{location}</Box>
//             </>
//           )}
//           <Box as="span" className="text-xs">·</Box>
//           <Box as="span" className="inline-flex items-center gap-1 text-xs">{formatIcon[format]}{formatLabel[format]}</Box>
//         </Box>

//         {/* Meta chips + stipend + deadline */}
//         <Box as="div" className="flex items-center gap-2 mt-2 flex-wrap">
//           {cohort && (
//             <Box as="span" className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md font-semibold text-violet-700 bg-violet-50 ring-1 ring-violet-200">
//               <UsersIcon />{cohort}
//             </Box>
//           )}
//           {duration && (
//             <Box as="span" className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md font-medium text-gray-500 bg-gray-100">
//               <ClockIcon />{duration}
//             </Box>
//           )}
//           {tags.map((tag) => (
//             <Box key={tag} as="span" className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md font-medium transition-colors duration-200 group-hover:bg-gray-200">
//               {tag}
//             </Box>
//           ))}
//           <Box as="div" className="flex items-center gap-3 ml-auto flex-wrap">
//             {stipend && (
//               <Box as="span" className="inline-flex items-center gap-1 text-xs font-semibold text-violet-700">
//                 <MoneyIcon />{stipend}
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
import { FellowshipBoxProps } from "@/features/home/props/FellowshipBoxProps";

export type FellowshipStatus = "open" | "closing-soon" | "closed";
export type FellowshipFormat = "in-person" | "virtual" | "hybrid";



const statusConfig: Record<FellowshipStatus, { label: string; bg: string; text: string; dot: string }> = {
  open:           { label: "Applications Open", bg: "bg-violet-100", text: "text-violet-700", dot: "bg-violet-400" },
  "closing-soon": { label: "Closing Soon",      bg: "bg-amber-100",  text: "text-amber-700",  dot: "bg-amber-400"  },
  closed:         { label: "Closed",            bg: "bg-gray-100",   text: "text-gray-500",   dot: "bg-gray-400"   },
};

function BuildingIcon() {
  return <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1.5" y="6" width="13" height="8.5" rx="1" /><path d="M5 14.5V10h6v4.5M1.5 6l6.5-4.5L14.5 6" /></svg>;
}
function MonitorIcon() {
  return <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1.5" y="2" width="13" height="9" rx="1.5" /><path d="M5 14h6M8 11v3" /></svg>;
}
function SplitIcon() {
  return <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v12M4 6l4-4 4 4M4 10l4 4 4-4" /></svg>;
}
function ClockIcon() {
  return <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="8" cy="8" r="6.5" /><path d="M8 4.5V8l2.5 2" /></svg>;
}
function MoneyIcon() {
  return <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="8" cy="8" r="6.5" /><path d="M8 4.5v7M6 6c0-1 1-1.5 2-1.5s2 .5 2 1.5-1 1.5-2 1.5-2 .5-2 1.5 1 1.5 2 1.5 2-.5 2-1.5" /></svg>;
}
function PinIcon() {
  return <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 14.5S2.5 9.5 2.5 6a5.5 5.5 0 0 1 11 0c0 3.5-5.5 8.5-5.5 8.5z" /><circle cx="8" cy="6" r="1.5" /></svg>;
}
function UsersIcon() {
  return <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="5" r="2.5" /><path d="M1 14c0-2.5 2-4 5-4s5 1.5 5 4" /><path d="M11 3a2.5 2.5 0 0 1 0 5M15 14c0-2.5-1.5-4-4-4" /></svg>;
}

const formatIcon: Record<FellowshipFormat, React.ReactNode> = {
  "in-person": <BuildingIcon />,
  virtual:     <MonitorIcon />,
  hybrid:      <SplitIcon />,
};
const formatLabel: Record<FellowshipFormat, string> = {
  "in-person": "In-person",
  virtual:     "Virtual",
  hybrid:      "Hybrid",
};

function CoverPlaceholder({ label }: { label: string }) {
  return (
    <Box as="div" className="w-full h-full bg-gradient-to-br from-violet-50 to-purple-100 flex flex-col items-center justify-center gap-1">
      <svg className="w-7 h-7 text-violet-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3L2 8l10 5 10-5-10-5z" />
        <path d="M2 13l10 5 10-5" />
        <path d="M2 18l10 5 10-5" />
      </svg>
      <span className="text-[10px] font-semibold text-violet-400 text-center px-1 leading-tight line-clamp-2">{label}</span>
    </Box>
  );
}

export default function FellowshipBox({
  title, organization, organizationIcon, coverImage, location, format, status, duration, stipend, cohort, deadline, tags = [], href = "#",
}: FellowshipBoxProps) {
  const s = statusConfig[status];

  return (
    <Box
      as="a"
      href={href}
      className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-300 ease-out
        hover:shadow-[0_4px_20px_rgba(0,0,0,0.09)] hover:border-gray-300 hover:-translate-y-0.5"
    >
      {/* ── Header: org logo + name + status ── */}
      <Box as="div" className="flex items-center gap-2 px-3 sm:px-4 pt-3 pb-2 flex-wrap">
        {organizationIcon ? (
          <Box as="img" src={organizationIcon} alt={organization} className="w-6 h-6 rounded object-cover flex-shrink-0" />
        ) : (
          <Box as="div" className="w-6 h-6 rounded bg-violet-100 flex items-center justify-center text-xs font-bold text-violet-600 flex-shrink-0">
            {organization?.[0] ?? "?"}
          </Box>
        )}
        <Box as="span" className="text-sm font-medium text-gray-700 truncate min-w-0 flex-1">{organization}</Box>

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
            <CoverPlaceholder label={organization} />
          )}
        </Box>

        {/* Info */}
        <Box as="div" className="flex flex-col justify-between min-h-[4rem] sm:min-h-[5rem] py-0.5 min-w-0 flex-1">
          <Box as="h3" className="font-semibold text-gray-900 text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-violet-600 transition-colors duration-200">
            {title}
          </Box>

          <Box as="div" className="flex items-center gap-2 mt-auto flex-wrap">
            {location && (
              <Box as="span" className="inline-flex items-center gap-0.5 text-xs text-gray-400"><PinIcon />{location}</Box>
            )}
            <Box as="span" className="inline-flex items-center gap-1 text-xs text-gray-400">{formatIcon[format]}{formatLabel[format]}</Box>
            {duration && (
              <Box as="span" className="inline-flex items-center gap-1 text-xs text-gray-400"><ClockIcon />{duration}</Box>
            )}
            {cohort && (
              <Box as="span" className="inline-flex items-center gap-1 text-xs px-1.5 py-0.5 rounded-md font-semibold text-violet-700 bg-violet-50 ring-1 ring-violet-200">
                <UsersIcon />{cohort}
              </Box>
            )}
            {stipend && (
              <Box as="span" className="inline-flex items-center gap-1 text-xs font-semibold text-violet-700 ml-auto">
                <MoneyIcon />{stipend}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}