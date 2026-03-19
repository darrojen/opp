
// import Box from "@/components/ui/box";
// import Link from "next/link";

// // ─── Dummy data ────────────────────────────────────────────────────────────────
// // Replace this with a real fetch by id when your API is ready:
// //   const data = await fetch(`/api/hackathons/${params.id}`).then(r => r.json())

// const DUMMY: Record<string, HackathonDetail> = {
//   default: {
//     id: "h1",
//     title: "GenLayer Testnet Bradbury",
//     organizer: "GenLayer",
//     organizerIcon: null,
//     coverImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80",
//     status: "upcoming",
//     daysLeft: 1,
//     hackersCount: 21,
//     prizePool: "GenLayer Builder Points + $5000",
//     timeline: {
//       status: "Upcoming",
//       note: "Submission starts in 1 day",
//       rows: [
//         { label: "Submission", date: "2026/03/20 12:30" },
//         { label: "Deadline",   date: "2026/04/04 02:30" },
//       ],
//     },
//     mode: "Virtual",
//     tags: ["Blockchain", "Web3", "AI", "AI x Blockchain", "Subjective Consensus", "GenLayer"],
//     ecosystem: ["base", "ai", "web3", "subjective consensus", "ethereum"],
//     submissionRequirements: "Deploy a working smart contract on GenLayer Testnet Bradbury. Teams of 1–5. Project must use at least one AI validator node.",
//     description: `More info at https://portal.genlayer.foundation/#hackathon\n\nThe first testnet where AI directly participates in blockchain consensus.\n\nBradbury marks the transition from infrastructure setup (Asimov) to active AI-driven validation and experimentation.`,
//     bullets: [
//       "Validators choose and optimize LLMs",
//       "AI-powered smart contracts become testable",
//       "Subjective consensus mechanisms go live",
//     ],
//     outline: [],
//   },
// };

// function getDummyHackathon(id: string): HackathonDetail {
//   return DUMMY[id] ?? { ...DUMMY.default, id, title: decodeURIComponent(id) };
// }

// // ─── Types ─────────────────────────────────────────────────────────────────────

// interface HackathonDetail {
//   id: string;
//   title: string;
//   organizer: string;
//   organizerIcon: string | null;
//   coverImage: string;
//   status: "upcoming" | "ongoing" | "ended";
//   daysLeft?: number;
//   hackersCount?: number;
//   prizePool: string;
//   timeline: {
//     status: string;
//     note: string;
//     rows: { label: string; date: string }[];
//   };
//   mode: string;
//   tags: string[];
//   ecosystem: string[];
//   submissionRequirements: string;
//   description: string;
//   bullets: string[];
//   outline: string[];
// }

// // ─── Sub-components ────────────────────────────────────────────────────────────

// const STATUS_COLORS = {
//   upcoming: { bg: "bg-amber-100",   text: "text-amber-600",   dot: "bg-amber-400",   label: "Upcoming" },
//   ongoing:  { bg: "bg-emerald-100", text: "text-emerald-600", dot: "bg-emerald-400", label: "Ongoing"  },
//   ended:    { bg: "bg-gray-100",    text: "text-gray-500",    dot: "bg-gray-400",    label: "Ended"    },
// };

// function StatusChip({ status }: { status: "upcoming" | "ongoing" | "ended" }) {
//   const s = STATUS_COLORS[status];
//   return (
//     <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${s.bg} ${s.text}`}>
//       <span className={`w-1.5 h-1.5 rounded-full ${s.dot} animate-pulse`} />
//       {s.label}
//     </span>
//   );
// }

// function Tag({ label }: { label: string }) {
//   return (
//     <span className="text-xs px-2.5 py-1 rounded-full border border-gray-200 text-gray-600 bg-white font-medium hover:border-gray-300 transition-colors">
//       {label}
//     </span>
//   );
// }

// // ─── Page ──────────────────────────────────────────────────────────────────────

// export default function HackathonDetailPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const data = getDummyHackathon(params.id);
//   const activeTab = "Details"; // static for now — wire up useState when client

//   const TABS = [
//     { label: "Details",       badge: null    },
//     { label: "BUIDLs",        badge: null    },
//     { label: "Hackers",       badge: data.hackersCount?.toString() ?? null },
//     { label: "Join a Team",   badge: "New"   },
//     { label: "Announcements", badge: null    },
//     { label: "Ask Question",  badge: null    },
//     { label: "Ideas",         badge: null    },
//   ];

//   return (
//     <Box as="div" className="min-h-screen bg-[#f5f5f5]">

//       {/* ── Top area: cover + sidebar ─────────────────────────────────── */}
//       <Box as="div" className="bg-[#f5f5f5] px-6 pt-6 pb-0">
//         <Box as="div" className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-5 items-start">

//           {/* Back link */}
//           {/* (uncomment if needed)
//           <Link href="/hackathons" className="text-sm text-gray-500 hover:text-gray-900 mb-2 inline-flex items-center gap-1">
//             ← Back
//           </Link> */}

//           {/* ── Cover image ─────────────────────────────────────────── */}
//           <Box as="div" className="flex-1 min-w-0 rounded-2xl overflow-hidden bg-gray-900 aspect-[16/9] lg:aspect-auto lg:h-[360px]">
//             <img
//               src={data.coverImage}
//               alt={data.title}
//               className="w-full h-full object-cover"
//             />
//           </Box>

//           {/* ── Sidebar ─────────────────────────────────────────────── */}
//           <Box as="div" className="lg:w-[340px] w-full flex-shrink-0 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">

//             {/* Prize pool */}
//             <Box as="div" className="px-5 pt-5 pb-4 border-b border-gray-100">
//               <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
//                 <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
//                 </svg>
//                 Prize Pool
//               </p>
//               <p className="text-[22px] font-bold text-orange-500 leading-tight flex items-start justify-between gap-2">
//                 {data.prizePool}
//                 <svg className="w-4 h-4 text-gray-300 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
//                 </svg>
//               </p>
//             </Box>

//             {/* Event Timeline */}
//             <Box as="div" className="px-5 py-4 border-b border-gray-100">
//               <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
//                 <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
//                 </svg>
//                 Event Timeline
//               </p>

//               {/* Collapsible note */}
//               <Box as="div" className="flex items-center justify-between mb-2">
//                 <p className="text-sm font-semibold text-orange-500">{data.timeline.note}</p>
//                 <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path d="M18 15l-6-6-6 6"/>
//                 </svg>
//               </Box>

//               {/* Status chip */}
//               <Box as="div" className="flex items-center gap-1.5 mb-3">
//                 <svg className="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
//                 </svg>
//                 <StatusChip status={data.status} />
//               </Box>

//               {/* Date rows */}
//               {data.timeline.rows.map(row => (
//                 <Box key={row.label} as="div" className="flex items-center justify-between py-1.5">
//                   <span className="text-sm text-gray-600">{row.label}</span>
//                   <span className="text-sm font-medium text-gray-800 tabular-nums">{row.date}</span>
//                 </Box>
//               ))}
//             </Box>

//             {/* Mode */}
//             <Box as="div" className="px-5 py-3.5 border-b border-gray-100 flex items-center gap-2 text-sm text-gray-700">
//               <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                 <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
//               </svg>
//               {data.mode}
//             </Box>

//             {/* Tags */}
//             <Box as="div" className="px-5 py-4 border-b border-gray-100">
//               <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2.5 flex items-center gap-1.5">
//                 <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>
//                 </svg>
//                 Hackathon Tags
//               </p>
//               <Box as="div" className="flex flex-wrap gap-1.5">
//                 {data.tags.map(t => <Tag key={t} label={t} />)}
//               </Box>
//             </Box>

//             {/* Ecosystem */}
//             <Box as="div" className="px-5 py-4 border-b border-gray-100">
//               <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
//                 <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
//                 </svg>
//                 Web3 Ecosystem
//               </p>
//               <p className="text-sm text-gray-700">{data.ecosystem.join(" • ")}</p>
//             </Box>

//             {/* Submission Requirements */}
//             <Box as="div" className="px-5 py-3.5 border-b border-gray-100">
//               <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
//                 <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path d="M9 12h6m-6 4h6M5 8h14M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/>
//                 </svg>
//                 Submission Requirements
//               </p>
//             </Box>

//             {/* Organizer row */}
//             <Box as="div" className="px-5 py-4 flex items-center justify-between">
//               <Box as="div" className="flex items-center gap-2.5">
//                 {data.organizerIcon ? (
//                   <img src={data.organizerIcon} alt={data.organizer} className="w-8 h-8 rounded-lg object-cover" />
//                 ) : (
//                   <Box as="div" className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center text-sm font-bold text-white">
//                     {data.organizer[0]}
//                   </Box>
//                 )}
//                 <span className="text-sm font-semibold text-gray-900">{data.organizer}</span>
//               </Box>
//               <button className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//                 <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
//                   <polyline points="22,6 12,13 2,6"/>
//                 </svg>
//                 Message
//               </button>
//             </Box>

//           </Box>
//         </Box>
//       </Box>

//       {/* ── Title + CTA row ───────────────────────────────────────────────── */}
//       <Box as="div" className="bg-[#f5f5f5] px-6 pt-5 pb-3">
//         <Box as="div" className="max-w-[1200px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//           <h1 className="text-2xl font-bold text-gray-900">{data.title}</h1>
//           <Box as="div" className="flex items-center gap-3 flex-shrink-0">
//             <button className="px-5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm font-semibold text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors shadow-sm">
//               Submit BUIDL
//             </button>
//             <button className="px-5 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors shadow-sm">
//               Register as Hacker
//             </button>
//           </Box>
//         </Box>
//       </Box>

//       {/* ── Tabs ─────────────────────────────────────────────────────────── */}
//       <Box as="div" className="bg-white border-b border-gray-200 px-6">
//         <Box as="div" className="max-w-[1200px] mx-auto flex gap-0 overflow-x-auto">
//           {TABS.map(tab => (
//             <button
//               key={tab.label}
//               className={`relative flex items-center gap-1.5 px-4 py-3.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
//                 tab.label === activeTab
//                   ? "border-orange-500 text-orange-500"
//                   : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
//               }`}
//             >
//               {tab.label}
//               {tab.badge === "New" && (
//                 <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-orange-500 text-white leading-none">
//                   New
//                 </span>
//               )}
//               {tab.badge && tab.badge !== "New" && (
//                 <span className="text-[11px] font-semibold px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-600 leading-none">
//                   {tab.badge}
//                 </span>
//               )}
//             </button>
//           ))}
//         </Box>
//       </Box>

//       {/* ── Tab body: Details ────────────────────────────────────────────── */}
//       <Box as="div" className="bg-[#f5f5f5] px-6 py-8">
//         <Box as="div" className="max-w-[1200px] mx-auto flex gap-10 items-start">

//           {/* Outline sidebar */}
//           <Box as="aside" className="hidden lg:block w-44 flex-shrink-0 pt-1">
//             <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-3">Outline</p>
//             {data.outline.length === 0 ? (
//               <p className="text-sm text-gray-400 italic">no chapters</p>
//             ) : (
//               <ul className="space-y-2">
//                 {data.outline.map(ch => (
//                   <li key={ch} className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">{ch}</li>
//                 ))}
//               </ul>
//             )}
//           </Box>

//           {/* Main content */}
//           <Box as="div" className="flex-1 min-w-0">
//             <Box as="div" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">

//               {/* Description paragraphs */}
//               {data.description.split("\n\n").map((para, i) => {
//                 // Render first "paragraph" as a link-style line if it's a URL line
//                 if (para.startsWith("More info at ")) {
//                   const url = para.replace("More info at ", "").trim();
//                   return (
//                     <p key={i} className="text-sm text-gray-700">
//                       More info at{" "}
//                       <a href={url} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline break-all">
//                         {url}
//                       </a>
//                     </p>
//                   );
//                 }
//                 return (
//                   <p key={i} className="text-sm text-gray-700 leading-relaxed">{para}</p>
//                 );
//               })}

//               {/* Bullet points */}
//               {data.bullets.length > 0 && (
//                 <ul className="space-y-2 pt-1">
//                   {data.bullets.map(b => (
//                     <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
//                       <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//                       </svg>
//                       {b}
//                     </li>
//                   ))}
//                 </ul>
//               )}

//             </Box>
//           </Box>

//         </Box>
//       </Box>

//     </Box>
//   );
// }

// app/hackathons/[id]/hack.config.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Central config for the hackathon detail page.
// Change tab labels, badge logic, status colors, and CTA copy here — nowhere else.

// import type { HackathonStatus } from "./props/HackathonDetailProps";

// // ─── Status badge appearance ──────────────────────────────────────────────────

// export const STATUS_CONFIG: Record<
//   HackathonStatus,
//   { label: string; bg: string; text: string; dot: string }
// > = {
//   upcoming: {
//     label: "Upcoming",
//     bg:    "bg-amber-100",
//     text:  "text-amber-600",
//     dot:   "bg-amber-400",
//   },
//   ongoing: {
//     label: "Ongoing",
//     bg:    "bg-emerald-100",
//     text:  "text-emerald-600",
//     dot:   "bg-emerald-400",
//   },
//   ended: {
//     label: "Ended",
//     bg:    "bg-gray-100",
//     text:  "text-gray-500",
//     dot:   "bg-gray-400",
//   },
// };

// // ─── Tab definitions ──────────────────────────────────────────────────────────
// // `badge` can be:
// //   "count"  → replaced at runtime with hackersCount
// //   "New"    → renders an orange "New" pill
// //   null     → no badge

// export interface TabConfig {
//   label: string;
//   badge: "count" | "New" | null;
// }

// export const HACK_TABS: TabConfig[] = [
//   { label: "Details",       badge: null    },
//   { label: "BUIDLs",        badge: null    },
//   { label: "Hackers",       badge: "count" },
//   { label: "Join a Team",   badge: "New"   },
//   { label: "Announcements", badge: null    },
//   { label: "Ask Question",  badge: null    },
//   { label: "Ideas",         badge: null    },
// ];

// // ─── CTA labels ───────────────────────────────────────────────────────────────

// export const CTA_PRIMARY   = "Register as Hacker";
// export const CTA_SECONDARY = "Submit BUIDL";



// features/hackathons/hack.config.tsx

import type { HackathonStatus } from "@/features/hackathons/props/HackathonDetailProps";

// ─── Status badge appearance ──────────────────────────────────────────────────

export const STATUS_CONFIG: Record<
  HackathonStatus,
  { label: string; bg: string; text: string; dot: string }
> = {
  upcoming: {
    label: "Upcoming",
    bg:   "bg-amber-100",
    text: "text-amber-600",
    dot:  "bg-amber-400",
  },
  ongoing: {
    label: "Ongoing",
    bg:   "bg-emerald-100",
    text: "text-emerald-600",
    dot:  "bg-emerald-400",
  },
  ended: {
    label: "Ended",
    bg:   "bg-gray-100",
    text: "text-gray-500",
    dot:  "bg-gray-400",
  },
};

// ─── Tabs ─────────────────────────────────────────────────────────────────────
// badge:
//   "count" → replaced at runtime with hackersCount
//   "New"   → orange pill
//   null    → no badge

export interface TabConfig {
  label: string;
  badge: "count" | "New" | null;
}

export const HACK_TABS: TabConfig[] = [
  { label: "Details",       badge: null    },
  { label: "BUIDLs",        badge: null    },
  { label: "Hackers",       badge: "count" },
  { label: "Join a Team",   badge: "New"   },
  { label: "Announcements", badge: null    },
  { label: "Ask Question",  badge: null    },
  { label: "Ideas",         badge: null    },
];

// ─── CTA labels ───────────────────────────────────────────────────────────────

export const CTA_PRIMARY   = "Register as Builder";
export const CTA_SECONDARY = "Submit BUIDL";