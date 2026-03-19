// import Box from "@/components/ui/box";

// export type GrantStatus = "open" | "closing-soon" | "closed";
// export type GrantCategory = "research" | "startup" | "social-impact" | "arts" | "climate" | "education";

// export interface GrantBoxProps {
//   title: string;
//   funder: string;
//   funderIcon?: string;
//   amount: string; // e.g. "Up to $50,000" or "$5K–$25K"
//   status: GrantStatus;
//   category?: GrantCategory;
//   deadline?: string;
//   eligibility?: string; // e.g. "African founders", "Students"
//   tags?: string[];
//   href?: string;
// }

// const statusConfig: Record<GrantStatus, { label: string; bg: string; text: string; dot: string }> = {
//   open: { label: "Accepting", bg: "bg-emerald-100", text: "text-emerald-600", dot: "bg-emerald-400" },
//   "closing-soon": { label: "Closing Soon", bg: "bg-amber-100", text: "text-amber-600", dot: "bg-amber-400" },
//   closed: { label: "Closed", bg: "bg-gray-100", text: "text-gray-500", dot: "bg-gray-400" },
// };

// const categoryConfig: Record<GrantCategory, { label: string; icon: string; color: string }> = {
//   research: { label: "Research", icon: "🔬", color: "text-violet-600 bg-violet-50" },
//   startup: { label: "Startup", icon: "🚀", color: "text-orange-600 bg-orange-50" },
//   "social-impact": { label: "Social Impact", icon: "🤝", color: "text-pink-600 bg-pink-50" },
//   arts: { label: "Arts", icon: "🎨", color: "text-indigo-600 bg-indigo-50" },
//   climate: { label: "Climate", icon: "🌱", color: "text-green-600 bg-green-50" },
//   education: { label: "Education", icon: "📚", color: "text-sky-600 bg-sky-50" },
// };

// export default function GrantBox({
//   title,
//   funder,
//   funderIcon,
//   amount,
//   status,
//   category,
//   deadline,
//   eligibility,
//   tags = [],
//   href = "#",
// }: GrantBoxProps) {
//   const s = statusConfig[status];
//   const c = category ? categoryConfig[category] : null;

//   return (
//     <Box
//       as="a"
//       href={href}
//       className="group flex items-start gap-3 sm:gap-4 bg-white border border-gray-200 rounded-2xl px-4 py-3.5 hover:shadow-md hover:border-emerald-200 transition-all duration-200 cursor-pointer relative overflow-hidden"
//     >
//       {/* Left accent bar — green/money theme */}
//       <Box
//         as="span"
//         className={`absolute left-0 top-3 bottom-3 w-1 rounded-full ${
//           status === "open" ? "bg-emerald-400" : status === "closing-soon" ? "bg-amber-400" : "bg-gray-300"
//         }`}
//       />

//       {/* Funder icon */}
//       <Box as="div" className="flex-shrink-0 mt-0.5">
//         {funderIcon ? (
//           <Box
//             as="img"
//             src={funderIcon}
//             alt={funder}
//             className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover border border-gray-100"
//           />
//         ) : (
//           <Box
//             as="div"
//             className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center text-base border border-emerald-100"
//           >
//             💰
//           </Box>
//         )}
//       </Box>

//       {/* Main content */}
//       <Box as="div" className="flex-1 min-w-0">
//         {/* Title + status */}
//         <Box as="div" className="flex items-start justify-between gap-2 flex-wrap">
//           <Box
//             as="h3"
//             className="font-semibold text-gray-900 text-sm sm:text-base leading-snug group-hover:text-emerald-600 transition-colors line-clamp-1"
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

//         {/* Funder + eligibility */}
//         <Box as="div" className="flex items-center gap-1.5 mt-0.5 flex-wrap">
//           <Box as="span" className="text-xs font-medium text-gray-600 truncate">{funder}</Box>
//           {eligibility && (
//             <>
//               <Box as="span" className="text-gray-300 text-xs">·</Box>
//               <Box as="span" className="text-xs text-gray-400 truncate">{eligibility}</Box>
//             </>
//           )}
//         </Box>

//         {/* Tags + amount + deadline */}
//         <Box as="div" className="flex items-center gap-2 mt-2 flex-wrap">
//           {c && (
//             <Box as="span" className={`text-xs px-2 py-0.5 rounded-full font-semibold ${c.color}`}>
//               {c.icon} {c.label}
//             </Box>
//           )}
//           {tags.map((tag) => (
//             <Box key={tag} as="span" className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">
//               {tag}
//             </Box>
//           ))}
//           <Box as="div" className="flex items-center gap-3 ml-auto flex-wrap">
//             <Box as="span" className="text-xs font-bold text-emerald-600">{amount}</Box>
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

// export type GrantStatus = "open" | "closing-soon" | "closed";
// export type GrantCategory = "research" | "startup" | "social-impact" | "arts" | "climate" | "education";

// export interface GrantBoxProps {
//   title: string;
//   funder: string;
//   funderIcon?: string;
//   amount: string;
//   status: GrantStatus;
//   category?: GrantCategory;
//   deadline?: string;
//   eligibility?: string;
//   tags?: string[];
//   href?: string;
// }

// const statusConfig: Record<GrantStatus, { label: string; bg: string; text: string; dot: string }> = {
//   open:           { label: "Accepting",    bg: "bg-emerald-100", text: "text-emerald-700", dot: "bg-emerald-400" },
//   "closing-soon": { label: "Closing Soon", bg: "bg-amber-100",   text: "text-amber-700",   dot: "bg-amber-400"   },
//   closed:         { label: "Closed",       bg: "bg-gray-100",    text: "text-gray-500",    dot: "bg-gray-400"    },
// };

// const categoryConfig: Record<GrantCategory, { label: string; color: string; icon: React.ReactNode }> = {
//   research:      { label: "Research",      color: "text-violet-700 bg-violet-50 ring-1 ring-violet-200", icon: <MicroscopeIcon /> },
//   startup:       { label: "Startup",       color: "text-orange-700 bg-orange-50 ring-1 ring-orange-200", icon: <RocketIcon />     },
//   "social-impact":{ label: "Social Impact",color: "text-pink-700 bg-pink-50 ring-1 ring-pink-200",       icon: <HandsIcon />      },
//   arts:          { label: "Arts",          color: "text-indigo-700 bg-indigo-50 ring-1 ring-indigo-200", icon: <BrushIcon />      },
//   climate:       { label: "Climate",       color: "text-green-700 bg-green-50 ring-1 ring-green-200",    icon: <LeafIcon />       },
//   education:     { label: "Education",     color: "text-sky-700 bg-sky-50 ring-1 ring-sky-200",          icon: <BookIcon />       },
// };

// function MicroscopeIcon() {
//   return (
//     <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M6 2h4M8 2v7M5 9h6M8 9v1M5 14h6M6 11a2 2 0 0 0-1 1.7V14M10 11a2 2 0 0 1 1 1.7V14" />
//     </svg>
//   );
// }
// function RocketIcon() {
//   return (
//     <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M8 13.5S4 10 4 6c0-2.5 2-4.5 4-4.5S12 3.5 12 6c0 4-4 7.5-4 7.5z" />
//       <circle cx="8" cy="6" r="1.5" />
//       <path d="M5.5 10.5L3 13M10.5 10.5L13 13" />
//     </svg>
//   );
// }
// function HandsIcon() {
//   return (
//     <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M4 8V4.5a1 1 0 0 1 2 0V8M4 8c-1 0-2.5.5-2.5 2.5V12h5.5M12 8V4.5a1 1 0 0 0-2 0V8M12 8c1 0 2.5.5 2.5 2.5V12h-5.5M6.5 12v1.5M9.5 12v1.5" />
//     </svg>
//   );
// }
// function BrushIcon() {
//   return (
//     <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M3 13c1-1 2-3 4-3s2.5 1.5 2 3c-.5 1.5-2.5 1.5-3 0" />
//       <path d="M9 10L13.5 2.5" />
//     </svg>
//   );
// }
// function LeafIcon() {
//   return (
//     <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M3 13c1-4 3-8 10-10-2 7-5 10-10 10z" />
//       <path d="M3 13L7 9" />
//     </svg>
//   );
// }
// function BookIcon() {
//   return (
//     <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2H13v12H3.5A1.5 1.5 0 0 1 2 12.5V3.5z" />
//       <path d="M2 12.5A1.5 1.5 0 0 0 3.5 14H13" />
//       <path d="M5.5 5.5h5M5.5 8h3" />
//     </svg>
//   );
// }
// function CoinsIcon() {
//   return (
//     <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <circle cx="6" cy="9" r="4" />
//       <path d="M10 4a4 4 0 0 1 0 8" />
//       <path d="M6 7.5v3M5 8.5c0-.5.5-1 1-1s1 .5 1 1-.5 1-1 1-1 .5-1 1 .5 1 1 1 1-.5 1-1" />
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
// function UserIcon() {
//   return (
//     <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <circle cx="8" cy="5" r="3" />
//       <path d="M2 14c0-3 2.5-5 6-5s6 2 6 5" />
//     </svg>
//   );
// }

// export default function GrantBox({ title, funder, funderIcon, amount, status, category, deadline, eligibility, tags = [], href = "#" }: GrantBoxProps) {
//   const s = statusConfig[status];
//   const c = category ? categoryConfig[category] : null;

//   return (
//     <Box
//       as="a"
//       href={href}
//       className="group flex items-start gap-3 sm:gap-4 bg-white border border-gray-200 rounded-2xl px-4 py-3.5 cursor-pointer relative overflow-hidden
//         transition-all duration-300 ease-out
//         hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:border-gray-300 hover:-translate-y-0.5"
//     >
//       <Box as="span" className="absolute bottom-0 left-4 right-4 h-px bg-emerald-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full" />

//       {/* Funder icon */}
//       <Box as="div" className="flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-105">
//         {funderIcon ? (
//           <Box as="img" src={funderIcon} alt={funder} className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover border border-gray-100 shadow-sm" />
//         ) : (
//           <Box as="div" className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center border border-emerald-100 shadow-sm">
//             <CoinsIcon />
//           </Box>
//         )}
//       </Box>

//       <Box as="div" className="flex-1 min-w-0">
//         {/* Title + status */}
//         <Box as="div" className="flex items-start justify-between gap-2 flex-wrap">
//           <Box as="h3" className="font-semibold text-gray-900 text-sm sm:text-base leading-snug group-hover:text-emerald-600 transition-colors duration-200 line-clamp-1">
//             {title}
//           </Box>
//           <Box as="span" className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${s.bg} ${s.text}`}>
//             <Box as="span" className={`w-1.5 h-1.5 rounded-full ${s.dot} animate-pulse`} />
//             {s.label}
//           </Box>
//         </Box>

//         {/* Funder · eligibility */}
//         <Box as="div" className="flex items-center gap-1.5 mt-0.5 flex-wrap text-gray-400">
//           <Box as="span" className="text-xs font-medium text-gray-600 truncate">{funder}</Box>
//           {eligibility && (
//             <>
//               <Box as="span" className="text-xs">·</Box>
//               <Box as="span" className="inline-flex items-center gap-0.5 text-xs"><UserIcon />{eligibility}</Box>
//             </>
//           )}
//         </Box>

//         {/* Category + tags + amount + deadline */}
//         <Box as="div" className="flex items-center gap-2 mt-2 flex-wrap">
//           {c && (
//             <Box as="span" className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md font-semibold ${c.color}`}>
//               {c.icon}{c.label}
//             </Box>
//           )}
//           {tags.map((tag) => (
//             <Box key={tag} as="span" className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md font-medium transition-colors duration-200 group-hover:bg-gray-200">
//               {tag}
//             </Box>
//           ))}
//           <Box as="div" className="flex items-center gap-3 ml-auto flex-wrap">
//             <Box as="span" className="text-xs font-bold text-emerald-700">{amount}</Box>
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
import { GrantBoxProps } from "@/features/home/props/GrantBoxProps";

export type GrantStatus = "open" | "closing-soon" | "closed";
export type GrantCategory = "research" | "startup" | "social-impact" | "arts" | "climate" | "education";



const statusConfig: Record<GrantStatus, { label: string; bg: string; text: string; dot: string }> = {
  open:           { label: "Accepting",    bg: "bg-emerald-100", text: "text-emerald-700", dot: "bg-emerald-400" },
  "closing-soon": { label: "Closing Soon", bg: "bg-amber-100",   text: "text-amber-700",   dot: "bg-amber-400"   },
  closed:         { label: "Closed",       bg: "bg-gray-100",    text: "text-gray-500",    dot: "bg-gray-400"    },
};

const categoryConfig: Record<GrantCategory, { label: string; color: string; icon: React.ReactNode }> = {
  research:       { label: "Research",      color: "text-violet-700 bg-violet-50 ring-1 ring-violet-200", icon: <MicroscopeIcon /> },
  startup:        { label: "Startup",       color: "text-orange-700 bg-orange-50 ring-1 ring-orange-200", icon: <RocketIcon />     },
  "social-impact":{ label: "Social Impact", color: "text-pink-700 bg-pink-50 ring-1 ring-pink-200",       icon: <HandsIcon />      },
  arts:           { label: "Arts",          color: "text-indigo-700 bg-indigo-50 ring-1 ring-indigo-200", icon: <BrushIcon />      },
  climate:        { label: "Climate",       color: "text-green-700 bg-green-50 ring-1 ring-green-200",    icon: <LeafIcon />       },
  education:      { label: "Education",     color: "text-sky-700 bg-sky-50 ring-1 ring-sky-200",          icon: <BookIcon />       },
};

function MicroscopeIcon() {
  return <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2h4M8 2v7M5 9h6M8 9v1M5 14h6M6 11a2 2 0 0 0-1 1.7V14M10 11a2 2 0 0 1 1 1.7V14" /></svg>;
}
function RocketIcon() {
  return <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 13.5S4 10 4 6c0-2.5 2-4.5 4-4.5S12 3.5 12 6c0 4-4 7.5-4 7.5z" /><circle cx="8" cy="6" r="1.5" /><path d="M5.5 10.5L3 13M10.5 10.5L13 13" /></svg>;
}
function HandsIcon() {
  return <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8V4.5a1 1 0 0 1 2 0V8M4 8c-1 0-2.5.5-2.5 2.5V12h5.5M12 8V4.5a1 1 0 0 0-2 0V8M12 8c1 0 2.5.5 2.5 2.5V12h-5.5" /></svg>;
}
function BrushIcon() {
  return <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13c1-1 2-3 4-3s2.5 1.5 2 3c-.5 1.5-2.5 1.5-3 0" /><path d="M9 10L13.5 2.5" /></svg>;
}
function LeafIcon() {
  return <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13c1-4 3-8 10-10-2 7-5 10-10 10z" /><path d="M3 13L7 9" /></svg>;
}
function BookIcon() {
  return <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3.5A1.5 1.5 0 0 1 3.5 2H13v12H3.5A1.5 1.5 0 0 1 2 12.5V3.5z" /><path d="M2 12.5A1.5 1.5 0 0 0 3.5 14H13" /><path d="M5.5 5.5h5M5.5 8h3" /></svg>;
}
function CalendarIcon() {
  return <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1.5" y="3" width="13" height="11.5" rx="1.5" /><path d="M1.5 7h13M5 1.5V4M11 1.5V4" /></svg>;
}
function UserIcon() {
  return <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="5" r="3" /><path d="M2 14c0-3 2.5-5 6-5s6 2 6 5" /></svg>;
}

function CoverPlaceholder({ label }: { label: string }) {
  return (
    <Box as="div" className="w-full h-full bg-gradient-to-br from-emerald-50 to-green-100 flex flex-col items-center justify-center gap-1">
      <svg className="w-7 h-7 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
        <path d="M9 3.5a9 9 0 0 0 0 17" />
      </svg>
      <span className="text-[10px] font-semibold text-emerald-400 text-center px-1 leading-tight line-clamp-2">{label}</span>
    </Box>
  );
}

export default function GrantBox({
  title, funder, funderIcon, coverImage, amount, status, category, deadline, eligibility, tags = [], href = "#",
}: GrantBoxProps) {
  const s = statusConfig[status];
  const c = category ? categoryConfig[category] : null;

  return (
    <Box
      as="a"
      href={href}
      className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-300 ease-out
        hover:shadow-[0_4px_20px_rgba(0,0,0,0.09)] hover:border-gray-300 hover:-translate-y-0.5"
    >
      {/* ── Header: funder logo + name + status ── */}
      <Box as="div" className="flex items-center gap-2 px-3 sm:px-4 pt-3 pb-2 flex-wrap">
        {funderIcon ? (
          <Box as="img" src={funderIcon} alt={funder} className="w-6 h-6 rounded object-cover flex-shrink-0" />
        ) : (
          <Box as="div" className="w-6 h-6 rounded bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-600 flex-shrink-0">
            {funder?.[0] ?? "?"}
          </Box>
        )}
        <Box as="span" className="text-sm font-medium text-gray-700 truncate min-w-0 flex-1">{funder}</Box>

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
            <CoverPlaceholder label={funder} />
          )}
        </Box>

        {/* Info */}
        <Box as="div" className="flex flex-col justify-between min-h-[4rem] sm:min-h-[5rem] py-0.5 min-w-0 flex-1">
          <Box as="h3" className="font-semibold text-gray-900 text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-emerald-600 transition-colors duration-200">
            {title}
          </Box>

          <Box as="div" className="flex items-center gap-2 mt-auto flex-wrap">
            {eligibility && (
              <Box as="span" className="inline-flex items-center gap-0.5 text-xs text-gray-400"><UserIcon />{eligibility}</Box>
            )}
            {c && (
              <Box as="span" className={`inline-flex items-center gap-1 text-xs px-1.5 py-0.5 rounded-md font-semibold ${c.color}`}>
                {c.icon}{c.label}
              </Box>
            )}
            {tags.slice(0, 1).map((tag) => (
              <Box key={tag} as="span" className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-md font-medium">{tag}</Box>
            ))}
            <Box as="span" className="text-xs font-bold text-emerald-700 ml-auto">{amount}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}