import Box from '@/components/ui/box';
import HackSidebar from '@/features/hackathons/components/HackSidebar';
import type { HackathonDetailProps } from '@/features/hackathons/props/HackathonDetailProps';
import { VscVerifiedFilled } from 'react-icons/vsc';

type Props = Pick<
  HackathonDetailProps,
  | 'title'
  | 'coverImage'
  | 'prizePool'
  | 'timeline'
  | 'mode'
  | 'tags'
  | 'ecosystem'
  | 'submissionRequirements'
  | 'organizer'
  | 'organizerIcon'
>;

export default function HackCoverSidebar({
  title,
  coverImage,
  organizer,
  organizerIcon,
  ...sidebarProps
}: Props) {
  return (
    <Box
      as="div"
      className="max-w-380 mx-auto px-6 pt-6 pb-0 flex flex-col lg:flex-row gap-5 items-start"
    >
      {/* Left col: image + organizer row */}
      <Box as="div" className="flex-1 min-w-0 flex flex-col gap-4">
        {/* Cover image */}
        <div className="w-full rounded-2xl overflow-hidden bg-gray-900 lg:h-[540px] aspect-video lg:aspect-auto">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Organizer row — completely separate, like YouTube channel info */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-3.5">
            {/* Vertical accent line */}
            <div
              className="w-0.5 h-9 rounded-full flex-shrink-0"
              style={{
                background: 'linear-gradient(to bottom, #f97316, #fdba74)',
              }}
            />

            {/* Avatar */}
            {organizerIcon ? (
              <img
                src={organizerIcon}
                alt={organizer}
                className="w-9 h-9 rounded-xl object-cover flex-shrink-0"
                style={{ border: '1px solid #ede9e4' }}
              />
            ) : (
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black text-white flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #1c1c1c, #444)' }}
              >
                {organizer[0]}
              </div>
            )}

            <div>
              <div className="flex p-0 items-center gap-1.5">
                <p className="text-lg font-bold text-gray-900">{organizer}</p>
                <VscVerifiedFilled color="#f97316" className="h-6 w-6" />
              </div>
              <p className="text-[13px] text-gray-400 font-medium">1k subscribers</p>
            </div>
          </div>
        </div>
      </Box>

      {/* Sidebar */}
      <HackSidebar
        organizer={organizer}
        organizerIcon={organizerIcon}
        {...sidebarProps}
      />
    </Box>
  );
}



// 'use client'

// import { useState, useRef, useEffect } from "react";
// import Box from "@/components/ui/box";
// import HackSidebar from "@/features/hackathons/components/HackSidebar";
// import type { HackathonDetailProps } from "@/features/hackathons/props/HackathonDetailProps";
// import { VscVerifiedFilled } from "react-icons/vsc";

// // ─── Notification dropdown ────────────────────────────────────────────────────

// type NotifOption = "all" | "personalized" | "none";

// const notifOptions: { id: NotifOption; label: string; icon: React.ReactNode }[] = [
//   {
//     id: "all",
//     label: "All",
//     icon: (
//       <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//         <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>
//         <line x1="12" y1="2" x2="12" y2="3"/>
//       </svg>
//     ),
//   },
//   {
//     id: "personalized",
//     label: "Personalized",
//     icon: (
//       <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//         <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>
//       </svg>
//     ),
//   },
//   {
//     id: "none",
//     label: "None",
//     icon: (
//       <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//         <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>
//         <line x1="1" y1="1" x2="23" y2="23"/>
//       </svg>
//     ),
//   },
// ];

// function NotifDropdown({
//   open,
//   current,
//   onSelect,
// }: {
//   open: boolean;
//   current: NotifOption;
//   onSelect: (v: NotifOption) => void;
// }) {
//   if (!open) return null;
//   return (
//     <div
//       className="absolute left-0 bottom-full mb-2 w-48 rounded-xl overflow-hidden z-50"
//       style={{ background: "#2e2e2e", boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}
//     >
//       {notifOptions.map(opt => (
//         <button
//           key={opt.id}
//           onClick={() => onSelect(opt.id)}
//           className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-white transition-colors text-left"
//           style={{ background: current === opt.id ? "#3d3d3d" : "transparent" }}
//           onMouseEnter={e => { if (current !== opt.id) (e.currentTarget as HTMLElement).style.background = "#383838"; }}
//           onMouseLeave={e => { if (current !== opt.id) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
//         >
//           <span className="text-gray-300">{opt.icon}</span>
//           {opt.label}
//           {current === opt.id && (
//             <svg className="w-4 h-4 ml-auto text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//               <path d="M20 6L9 17l-5-5"/>
//             </svg>
//           )}
//         </button>
//       ))}
//     </div>
//   );
// }

// // ─── Organizer row ────────────────────────────────────────────────────────────

// function OrganizerRow({ organizer, organizerIcon }: { organizer: string; organizerIcon: string | null }) {
//   const [subscribed, setSubscribed] = useState(false);
//   const [notif, setNotif] = useState<NotifOption>("personalized");
//   const [notifOpen, setNotifOpen] = useState(false);
//   const [joined, setJoined] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     function handleClick(e: MouseEvent) {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//         setNotifOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, []);

//   const notifIcon = notif === "all"
//     ? <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/><line x1="12" y1="2" x2="12" y2="3" stroke="currentColor" strokeWidth="2"/></svg>
//     : notif === "none"
//     ? <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
//     : <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>;

//   return (
//     <div className="flex items-center justify-between px-1">

//       {/* Left: accent line + avatar + info */}
//       <div className="flex items-center gap-3.5">
//         <div
//           className="w-0.5 h-9 rounded-full flex-shrink-0"
//           style={{ background: "linear-gradient(to bottom, #f97316, #fdba74)" }}
//         />

//         {organizerIcon ? (
//           <img src={organizerIcon} alt={organizer} className="w-10 h-10 rounded-xl object-cover flex-shrink-0" style={{ border: "1px solid #ede9e4" }} />
//         ) : (
//           <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black text-white flex-shrink-0" style={{ background: "linear-gradient(135deg, #1c1c1c, #444)" }}>
//             {organizer[0]}
//           </div>
//         )}

//         <div>
//           <div className="flex items-center gap-1">
//             <p className="text-sm font-bold text-gray-900">{organizer}</p>
//             <VscVerifiedFilled color="#f97316" className="w-4 h-4" />
//           </div>
//           <p className="text-xs text-gray-400 font-medium">1.2k followers</p>
//         </div>
//       </div>

//       {/* Right: action buttons */}
//       <div className="flex items-center gap-2">

//         {/* Join button — only after subscribed */}
//         {subscribed && (
//           <button
//             onClick={() => setJoined(v => !v)}
//             className="text-[12px] font-bold px-4 py-2 rounded-full transition-all active:scale-95"
//             style={{
//               background: joined ? "#f3f4f6" : "white",
//               border: "1px solid #e5e7eb",
//               color: "#111827",
//             }}
//           >
//             {joined ? "Joined" : "Join"}
//           </button>
//         )}

//         {/* Subscribe button */}
//         <button
//           onClick={() => {
//             setSubscribed(v => !v);
//             if (subscribed) { setNotifOpen(false); setJoined(false); }
//           }}
//           className="text-[12px] font-bold px-5 py-2 rounded-full transition-all active:scale-95"
//           style={{
//             background: subscribed ? "#f3f4f6" : "#0f0f0f",
//             color: subscribed ? "#111827" : "white",
//             border: subscribed ? "1px solid #e5e7eb" : "none",
//           }}
//         >
//           {subscribed ? "Subscribed" : "Subscribe"}
//         </button>

//         {/* Notification bell — only after subscribed */}
//         {subscribed && (
//           <div className="relative" ref={dropdownRef}>
//             <button
//               onClick={() => setNotifOpen(v => !v)}
//               className="flex items-center gap-1.5 text-[12px] font-bold px-3 py-2 rounded-full transition-all active:scale-95"
//               style={{
//                 background: "#f3f4f6",
//                 border: "1px solid #e5e7eb",
//                 color: "#374151",
//               }}
//             >
//               {notifIcon}
//               <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//                 <path d="M6 9l6 6 6-6"/>
//               </svg>
//             </button>
//             <NotifDropdown open={notifOpen} current={notif} onSelect={(v) => { setNotif(v); setNotifOpen(false); }} />
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

// // ─── Props ────────────────────────────────────────────────────────────────────

// type Props = Pick<
//   HackathonDetailProps,
//   | "title"
//   | "coverImage"
//   | "prizePool"
//   | "timeline"
//   | "mode"
//   | "tags"
//   | "ecosystem"
//   | "submissionRequirements"
//   | "organizer"
//   | "organizerIcon"
// >;

// // ─── Component ───────────────────────────────────────────────────────────────

// export default function HackCoverSidebar({ title, coverImage, organizer, organizerIcon, ...sidebarProps }: Props) {
//   return (
//     <Box as="div" className="max-w-360 mx-auto px-6 pt-6 pb-0 flex flex-col lg:flex-row gap-5 items-start">

//       {/* Left col: image + organizer row */}
//       <Box as="div" className="flex-1 min-w-0 flex flex-col gap-4">

//         {/* Cover image */}
//         <div className="w-full rounded-2xl overflow-hidden bg-gray-900 lg:h-[440px] aspect-video lg:aspect-auto">
//           <img src={coverImage} alt={title} className="w-full h-full object-cover" />
//         </div>

//         {/* Organizer row */}
//         <OrganizerRow organizer={organizer} organizerIcon={organizerIcon} />

//       </Box>

//       {/* Sidebar */}
//       <HackSidebar organizer={organizer} organizerIcon={organizerIcon} {...sidebarProps}  />

//     </Box>
//   );
// }