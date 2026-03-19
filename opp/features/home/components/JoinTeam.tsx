// export default function JoinTeam() {
//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-4">Join a Team</h2>
//       <div className="space-y-4">
//         {[1, 2, 3].map((item) => (
//           <div key={item} className="border rounded-xl p-4 bg-white">
//             <h3 className="font-medium">Team Opportunity</h3>
//             <p className="text-sm text-gray-500">
//               Find teammates and collaborate.
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }



// // components/home/CommunityUp.tsx
// import Box from "@/components/ui/box";

// export default function CommunityUp() {
//   // Sample data — in real app, fetch from API
//   const joinItemsLeft = [
//     {
//       avatar: "bg-gradient-to-br from-blue-600 to-indigo-800",
//       role: "前端开发达",
//       handle: "MetaPT-0623",
//       from: "HashKey Chain Horizon Hackathon",
//       openRoles: 1,
//     },
//     {
//       avatar: "bg-gradient-to-br from-red-500 to-orange-600",
//       role: "Backend developer",
//       handle: "Remora",
//       from: "HashKey Chain Horizon Hackathon",
//       openRoles: 1,
//     },
//     {
//       avatar: "bg-gradient-to-br from-purple-600 to-pink-600",
//       role: "Ai dev and marketing guy",
//       handle: "Gami Protocol",
//       from: "AWS Activate Program for Web3 Startups",
//       openRoles: 1,
//     },
//     {
//       avatar: "bg-gradient-to-br from-teal-600 to-cyan-700",
//       role: "Fullstack (but still in beginner terms)",
//       handle: "somning",
//       from: "Somnia Reactivity Mini Hackathon",
//       openRoles: 1,
//     },
//     {
//       avatar: "bg-gradient-to-br from-yellow-500 to-amber-600",
//       role: "Devo",
//       handle: "Smart Contract Validator",
//       from: "Somnia Reactivity Mini Hackathon",
//       openRoles: 1,
//     },
//   ];

//   const joinItemsRight = [
//     {
//       avatar: "bg-green-600",
//       role: "ML Engineer",
//       handle: "Nguyen Viet Phuong (ML Engineer)",
//       from: "ClawBio: Agentic Genomics",
//       openRoles: 1,
//     },
//     {
//       avatar: "bg-gradient-to-br from-indigo-700 to-blue-900",
//       role: "ML/AI",
//       handle: "chirag (Full-Stack & System Architect)",
//       from: "The Vertex Swarm Challenge 2026 - Coordinating Robots, Drones, AI...",
//       openRoles: 1,
//     },
//     {
//       avatar: "bg-rose-600",
//       role: "Frontend Developer",
//       handle: "Sreeja07 (.)",
//       from: "AWS Prompt the Planet Challenge",
//       openRoles: 1,
//     },
//     {
//       avatar: "bg-violet-600",
//       role: "frontend developer",
//       handle: "khamar (im a student)",
//       from: "AWS Prompt the Planet Challenge",
//       openRoles: 1,
//     },
//     {
//       avatar: "bg-orange-600",
//       role: "front end | backend +1",
//       handle: "han2609 (frontend developer)",
//       from: "AWS Prompt the Planet Challenge",
//       openRoles: 3,
//     },
//   ];

//   const renderCard = (item: typeof joinItemsLeft[0], index: number) => (
//     <Box
//       key={index}
//       className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-sm transition group cursor-pointer"
//     >
//       <div className="flex items-start justify-between">
//         <div className="flex items-center gap-3 flex-1">
//           {/* Avatar / Logo */}
//           <div
//             className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl shrink-0 ${item.avatar}`}
//           >
//             {item.handle.charAt(0).toUpperCase()}
//           </div>

//           <div className="space-y-0.5">
//             <div className="font-medium text-base leading-tight">{item.role}</div>
//             <div className="text-sm text-gray-600 flex items-center gap-1.5">
//               <span className="text-gray-400">⌂</span> {item.handle}
//             </div>
//             <div className="text-xs text-blue-600 hover:underline mt-1">
//               From Hackathon: <span className="font-medium">{item.from}</span>
//             </div>
//           </div>
//         </div>

//         {/* Right side badge + chevron */}
//         <div className="flex flex-col items-end gap-2">
//           <span
//             className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
//               item.openRoles > 1
//                 ? "bg-orange-100 text-orange-700 border border-orange-300"
//                 : "bg-orange-50 text-orange-600 border border-orange-200"
//             }`}
//           >
//             {item.openRoles} OPEN ROLE{item.openRoles > 1 ? "S" : ""}
//           </span>
//           <button className="text-gray-400 hover:text-gray-600">
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </Box>
//   );

//   return (
//     <Box as="section" className="space-y-6">
//       {/* Tabs */}
     

//       {/* Action buttons */}
//       <div className="flex flex-wrap gap-3">
//         <button className="flex items-center gap-2 px-5 py-2.5 bg-orange-50 text-orange-700 font-medium rounded-lg border border-orange-200 hover:bg-orange-100 transition">
//           <span>📁</span> Join a Group
//         </button>
//         <button className="flex items-center gap-2 px-5 py-2.5 bg-orange-50 text-orange-700 font-medium rounded-lg border border-orange-200 hover:bg-orange-100 transition">
//           <span>👥</span> Join Organisation
//         </button>
//       </div>

//       {/* Two-column responsive grid of cards */}
//       <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
//         <div className="space-y-4">{joinItemsLeft.map(renderCard)}</div>
//         <div className="space-y-4">{joinItemsRight.map(renderCard)}</div>
//       </div>

//       {/* Optional footer link */}
//       <div className="text-center pt-4">
//         <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
//           View More Opportunities →
//         </a>
//       </div>
//     </Box>
//   );
// }




// // components/home/CommunityUp.tsx
// import Box from "@/components/ui/box";

// export default function CommunityUp() {
//   const joinItemsLeft = [
//     {
//       avatar: "bg-gradient-to-br from-blue-600 to-indigo-800",
//       role: "前端开发达",
//       handle: "MetaPT-0623",
//       from: "HashKey Chain Horizon Hackathon",
//       openRoles: 1,
//     },
//     {
//       avatar: "bg-gradient-to-br from-red-500 to-orange-600",
//       role: "Backend developer",
//       handle: "Remora",
//       from: "HashKey Chain Horizon Hackathon",
//       openRoles: 1,
//     },
//     {
//       avatar: "bg-gradient-to-br from-purple-600 to-pink-600",
//       role: "Ai dev and marketing guy",
//       handle: "Gami Protocol",
//       from: "AWS Activate Program for Web3 Startups",
//       openRoles: 1,
//     },
//     {
//       avatar: "bg-gradient-to-br from-teal-600 to-cyan-700",
//       role: "Fullstack (but still in beginner terms)",
//       handle: "somning",
//       from: "Somnia Reactivity Mini Hackathon",
//       openRoles: 1,
//     },
//     {
//       avatar: "bg-gradient-to-br from-yellow-500 to-amber-600",
//       role: "Devo",
//       handle: "Smart Contract Validator",
//       from: "Somnia Reactivity Mini Hackathon",
//       openRoles: 1,
//     },
//   ];

//   const joinItemsRight = [
//     {
//       avatar: "bg-green-600",
//       role: "ML Engineer",
//       handle: "Nguyen Viet Phuong (ML Engineer)",
//       from: "ClawBio: Agentic Genomics",
//       openRoles: 1,
//     },
//     {
//       avatar: "bg-gradient-to-br from-indigo-700 to-blue-900",
//       role: "ML/AI",
//       handle: "chirag (Full-Stack & System Architect)",
//       from: "The Vertex Swarm Challenge 2026 - Coordinating Robots, Drones, AI...",
//       openRoles: 1,
//     },
//     {
//       avatar: "bg-rose-600",
//       role: "Frontend Developer",
//       handle: "Sreeja07 (.)",
//       from: "AWS Prompt the Planet Challenge",
//       openRoles: 1,
//     },
//     {
//       avatar: "bg-violet-600",
//       role: "frontend developer",
//       handle: "khamar (im a student)",
//       from: "AWS Prompt the Planet Challenge",
//       openRoles: 1,
//     },
//     {
//       avatar: "bg-orange-600",
//       role: "front end | backend +1",
//       handle: "han2609 (frontend developer)",
//       from: "AWS Prompt the Planet Challenge",
//       openRoles: 3,
//     },
//   ];

//   const renderCard = (item: (typeof joinItemsLeft)[0], index: number) => (
//     <Box
//       key={index}
//       className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-sm transition group cursor-pointer"
//     >
//       {/* Top section: avatar + role info + mail icon */}
//       <div className="flex items-start gap-3 p-3">
//         {/* Avatar */}
//         <div
//           className={`w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-2xl shrink-0 ${item.avatar}`}
//         >
//           {item.handle.charAt(0).toUpperCase()}
//         </div>

//         {/* Role + handle */}
//         <div className="flex-1 min-w-0 pt-0.5">
//           {/* Open roles badge */}
//           <div className="text-xs font-bold text-orange-500 uppercase tracking-wide mb-1">
//             {item.openRoles} OPEN ROLE{item.openRoles > 1 ? "S" : ""}
//           </div>
//           <div className="font-semibold text-gray-900 text-base leading-tight truncate">
//             {item.role}
//           </div>
//           <div className="flex items-center gap-1 text-sm text-gray-500 mt-0.5">
//             {/* Document icon */}
//             <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
//                 d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//             </svg>
//             <span className="truncate">{item.handle}</span>
//           </div>
//         </div>

//         {/* Mail icon */}
//         <button className="text-gray-400 hover:text-gray-600 mt-0.5 shrink-0">
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
//               d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//           </svg>
//         </button>
//       </div>

//       {/* Divider + From Hackathon footer */}
//       <div className="border-t border-gray-100 px-3 py-2">
//         <p className="text-xs text-gray-500 truncate">
//           From Hackathon:{" "}
//           <a href="#" className="text-blue-600 hover:underline font-medium">
//             {item.from}
//           </a>
//         </p>
//       </div>
//     </Box>
//   );

//   return (
//     <Box as="section" className="space-y-5">
//       {/* Two-column layout with column headers */}
//       <div className="grid md:grid-cols-2 gap-0 divide-x divide-gray-200 border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
//         {/* Left column */}
//         <div className="flex flex-col">
//           {/* Column header button */}
//           <div className="flex justify-center py-3 border-b border-gray-200 bg-white">
//             <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-orange-600 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 transition">
//               {/* Folder icon */}
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//                   d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
//               </svg>
//               Join a Group
//             </button>
//           </div>
//           {/* Cards */}
//           <div className="flex flex-col gap-3 p-4">
//             {joinItemsLeft.map(renderCard)}
//           </div>
//         </div>

//         {/* Right column */}
//         <div className="flex flex-col">
//           {/* Column header button */}
//           <div className="flex justify-center py-3 border-b border-gray-200 bg-white">
//             <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-orange-600 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 transition">
//               {/* People icon */}
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//                   d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
//               </svg>
//               Join Organisation
//             </button>
//           </div>
//           {/* Cards */}
//           <div className="flex flex-col gap-3 p-4">
//             {joinItemsRight.map(renderCard)}
//           </div>
//         </div>
//       </div>

//       {/* Footer link */}
//       <div className="text-center pt-1">
//         <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
//           View More Opportunities →
//         </a>
//       </div>
//     </Box>
//   );
// }



"use client";
// components/home/CommunityUp.tsx
import { useState } from "react";
import Box from "@/components/ui/box";

type JoinItem = {
  avatar: string;
  role: string;
  handle: string;
  from: string;
  openRoles: number;
};

export default function CommunityUp() {
  const [activeTab, setActiveTab] = useState<"group" | "org">("group");

  const joinItemsLeft: JoinItem[] = [
    {
      avatar: "bg-gradient-to-br from-blue-600 to-indigo-800",
      role: "前端开发达",
      handle: "MetaPT-0623",
      from: "HashKey Chain Horizon Hackathon",
      openRoles: 1,
    },
    {
      avatar: "bg-gradient-to-br from-red-500 to-orange-600",
      role: "Backend developer",
      handle: "Remora",
      from: "HashKey Chain Horizon Hackathon",
      openRoles: 1,
    },
    {
      avatar: "bg-gradient-to-br from-purple-600 to-pink-600",
      role: "Ai dev and marketing guy",
      handle: "Gami Protocol",
      from: "AWS Activate Program for Web3 Startups",
      openRoles: 1,
    },
    {
      avatar: "bg-gradient-to-br from-teal-600 to-cyan-700",
      role: "Fullstack (but still in beginner terms)",
      handle: "somning",
      from: "Somnia Reactivity Mini Hackathon",
      openRoles: 1,
    },
    {
      avatar: "bg-gradient-to-br from-yellow-500 to-amber-600",
      role: "Devo",
      handle: "Smart Contract Validator",
      from: "Somnia Reactivity Mini Hackathon",
      openRoles: 1,
    },
  ];

  const joinItemsRight: JoinItem[] = [
    {
      avatar: "bg-green-600",
      role: "ML Engineer",
      handle: "Nguyen Viet Phuong (ML Engineer)",
      from: "ClawBio: Agentic Genomics",
      openRoles: 1,
    },
    {
      avatar: "bg-gradient-to-br from-indigo-700 to-blue-900",
      role: "ML/AI",
      handle: "chirag (Full-Stack & System Architect)",
      from: "The Vertex Swarm Challenge 2026 - Coordinating Robots, Drones, AI...",
      openRoles: 1,
    },
    {
      avatar: "bg-rose-600",
      role: "Frontend Developer",
      handle: "Sreeja07 (.)",
      from: "AWS Prompt the Planet Challenge",
      openRoles: 1,
    },
    {
      avatar: "bg-violet-600",
      role: "frontend developer",
      handle: "khamar (im a student)",
      from: "AWS Prompt the Planet Challenge",
      openRoles: 1,
    },
    {
      avatar: "bg-orange-600",
      role: "front end | backend +1",
      handle: "han2609 (frontend developer)",
      from: "AWS Prompt the Planet Challenge",
      openRoles: 3,
    },
  ];

  const renderCard = (item: JoinItem, index: number, type: "group" | "org") => {
    const badgeLabel =
      type === "group"
        ? `${item.openRoles} OPEN BUILD${item.openRoles > 1 ? "S" : ""}`
        : `${item.openRoles} OPEN ROLE${item.openRoles > 1 ? "S" : ""}`;

    return (
      <Box
        key={index}
        className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-sm transition cursor-pointer"
      >
        {/* Top section */}
        <div className="flex items-start gap-3 p-3">
          {/* Avatar */}
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-2xl shrink-0 ${item.avatar}`}
          >
            {item.handle.charAt(0).toUpperCase()}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0 pt-0.5">
            <div className="text-xs font-bold text-orange-500 uppercase tracking-wide mb-1">
              {badgeLabel}
            </div>
            <div className="font-semibold text-gray-900 text-base leading-tight">
              {item.role}
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-500 mt-0.5">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="truncate">{item.handle}</span>
            </div>
          </div>

          {/* Mail icon */}
          <button className="text-gray-400 hover:text-gray-600 mt-0.5 shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 px-3 py-2">
          <p className="text-xs text-gray-500 truncate">
            From Hackathon:{" "}
            <a href="#" className="text-blue-600 hover:underline font-medium">
              {item.from}
            </a>
          </p>
        </div>
      </Box>
    );
  };

  return (
    <Box as="section" className="space-y-5">

      {/* ── Mobile: toggle tabs + single column ── */}
      <div className="md:hidden">
        {/* Toggle pill */}
        <div className="flex rounded-lg border border-gray-200 overflow-hidden mb-5 bg-gray-50">
          <button
            onClick={() => setActiveTab("group")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium transition border-r border-gray-200 ${
              activeTab === "group"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
            </svg>
            Join a Group
          </button>
          <button
            onClick={() => setActiveTab("org")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium transition ${
              activeTab === "org"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Join Organisation
          </button>
        </div>

        {/* Single-column cards */}
        <div className="space-y-3">
          {(activeTab === "group" ? joinItemsLeft : joinItemsRight).map((item, i) =>
            renderCard(item, i, activeTab)
          )}
        </div>
      </div>

      {/* ── Desktop: two-column panel ── */}
      <div className="hidden md:grid md:grid-cols-2 gap-0 divide-x divide-gray-200 border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
        {/* Left column — Groups / BUILDs */}
        <div className="flex flex-col">
          <div className="flex justify-center py-3 border-b border-gray-200 bg-white">
            <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-orange-600 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
              </svg>
              Join a Group
            </button>
          </div>
          <div className="flex flex-col gap-3 p-4">
            {joinItemsLeft.map((item, i) => renderCard(item, i, "group"))}
          </div>
        </div>

        {/* Right column — Organisations / Roles */}
        <div className="flex flex-col">
          <div className="flex justify-center py-3 border-b border-gray-200 bg-white">
            <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-orange-600 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Join Organisation
            </button>
          </div>
          <div className="flex flex-col gap-3 p-4">
            {joinItemsRight.map((item, i) => renderCard(item, i, "org"))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center pt-1">
        <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
          View More Opportunities →
        </a>
      </div>
    </Box>
  );
}