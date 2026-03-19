
// 'use client'

// import Box from "@/components/ui/box";
// import { STATUS_CONFIG } from "@/features/hackathons/hack.config";
// import type { HackathonDetailProps } from "@/features/hackathons/props/HackathonDetailProps";

// // ─── Atoms ────────────────────────────────────────────────────────────────────

// function StatusChip({ status }: { status: HackathonDetailProps["status"] }) {
//   const s = STATUS_CONFIG[status];
//   return (
//     <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase px-3 py-1.5 rounded-full ${s.bg} ${s.text}`}>
//       <span className={`w-2 h-2 rounded-full ${s.dot} animate-pulse`} />
//       {s.label}
//     </span>
//   );
// }

// function Tag({ label }: { label: string }) {
//   return (
//     <span className="text-xs px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 font-semibold hover:bg-orange-100 transition-colors">
//       {label}
//     </span>
//   );
// }

// function EcoTag({ label }: { label: string }) {
//   return (
//     <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-mono font-medium tracking-widest uppercase hover:bg-gray-200 transition-colors">
//       {label}
//     </span>
//   );
// }

// function SectionLabel({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
//   return (
//     <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
//       {icon}
//       {children}
//     </p>
//   );
// }

// // ─── Props ────────────────────────────────────────────────────────────────────

// type Props = Pick<
//   HackathonDetailProps,
//   "prizePool" | "timeline" | "mode" | "tags" | "ecosystem" | "submissionRequirements" | "organizer" | "organizerIcon"
// >;

// // ─── Component ────────────────────────────────────────────────────────────────

// export default function HackSidebar({
//   prizePool,
//   timeline,
//   mode,
//   tags,
//   ecosystem,
//   organizer,
//   organizerIcon,
//   submissionRequirements,
// }: Props) {
//   return (
//     <Box
//       as="aside"
//       className="lg:w-[480px] w-full flex-shrink-0 rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-white"
//     >

//       {/* ── Prize Pool ── */}
//       <Box as="div" className="px-6 pt-6 pb-5 bg-gradient-to-br from-orange-50 to-orange-100 border-b border-gray-100">
//         <SectionLabel icon={
//           <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
//           </svg>
//         }>
//           Prize Pool
//         </SectionLabel>
//         <Box className="flex items-start justify-between gap-3">
//           <p className="font-black text-orange-500 leading-none tracking-tight text-2xl md:text-3xl" style={{ fontFamily: "'Georgia', serif" }}>
//             {prizePool}
//           </p>
//           <Box className="w-8 h-8 rounded-full flex items-center justify-center bg-orange-50 border border-orange-200">
//             <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <circle cx="12" cy="12" r="10"/>
//               <path d="M12 16v-4M12 8h.01"/>
//             </svg>
//           </Box>
//         </Box>
//       </Box>

//       {/* ── Event Timeline ── */}
//       <Box className="px-6 py-5 border-b border-gray-100">
//         <SectionLabel icon={
//           <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//             <rect x="3" y="4" width="18" height="18" rx="2"/>
//             <path d="M16 2v4M8 2v4M3 10h18"/>
//           </svg>
//         }>
//           Event Timeline
//         </SectionLabel>

//         <Box className="flex items-center justify-between mb-3">
//           <StatusChip status={timeline.status} />
//           <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <path d="M18 15l-6-6-6 6"/>
//           </svg>
//         </Box>

//         <Box className="text-sm font-semibold text-orange-500 mb-4 px-3 py-2 rounded-xl bg-orange-50 border border-dashed border-orange-200">
//           {timeline.note}
//         </Box>

//         <Box className="space-y-2">
//           {timeline.rows.map((row, i) => (
//             <Box key={row.label} className="flex items-center justify-between py-2 gap-3 border-b border-dashed border-gray-100 last:border-none">
//               <Box className="flex items-center gap-3">
//                 <div className={`w-2 h-2 rounded-full ${i === 0 ? "bg-orange-500" : "bg-gray-300"}`}></div>
//                 <span className="text-sm text-gray-500 font-medium">{row.label}</span>
//               </Box>
//               <span className="text-sm font-mono font-bold text-gray-800">{row.date}</span>
//             </Box>
//           ))}
//         </Box>
//       </Box>

//       {/* ── Mode ── */}
//       <Box className="px-6 py-4 flex items-center gap-3 bg-gray-50 border-b border-gray-100">
//         <Box className="w-8 h-8 rounded-lg flex items-center justify-center bg-green-50 border border-green-200">
//           <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <circle cx="12" cy="12" r="10"/>
//             <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
//           </svg>
//         </Box>
//         <span className="text-sm font-semibold text-gray-700">{mode}</span>
//       </Box>

//       {/* ── Tags ── */}
//       <Box className="px-6 py-5 border-b border-gray-100">
//         <SectionLabel icon={
//           <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//             <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
//             <line x1="7" y1="7" x2="7.01" y2="7"/>
//           </svg>
//         }>
//           Tags
//         </SectionLabel>
//         <Box className="flex flex-wrap gap-2">{tags.map(t => <Tag key={t} label={t} />)}</Box>
//       </Box>

//       {/* ── Ecosystem ── */}
//       <Box className="px-6 py-5 border-b border-gray-100">
//         <SectionLabel icon={
//           <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//             <circle cx="12" cy="12" r="3"/>
//             <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
//           </svg>
//         }>
//           Web3 Ecosystem
//         </SectionLabel>
//         <Box className="flex flex-wrap gap-2">{ecosystem.map(e => <EcoTag key={e} label={e} />)}</Box>
//       </Box>

//       {/* ── Submission Requirements ── */}
//       {submissionRequirements && (
//         <Box className="px-6 py-5 border-b border-gray-100">
//           <SectionLabel icon={
//             <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//               <path d="M9 12h6m-6 4h6M5 8h14M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/>
//             </svg>
//           }>
//             Submission Requirements
//           </SectionLabel>
//           <p className="text-sm text-gray-600 leading-relaxed">{submissionRequirements}</p>
//         </Box>
//       )}

//       {/* ── Organizer ── */}
//       <Box className="px-6 py-5 flex items-center justify-between bg-gray-50">
//         <Box className="flex items-center gap-4">
//           {organizerIcon ? (
//             <img src={organizerIcon} alt={organizer} className="w-10 h-10 rounded-xl object-cover border" />
//           ) : (
//             <Box className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black text-white bg-gradient-to-br from-gray-800 to-gray-600">
//               {organizer[0]}
//             </Box>
//           )}
//           <Box>
//             <p className="text-xs text-gray-400 font-medium mb-0.5">Organized by</p>
//             <p className="text-sm font-bold text-gray-900">{organizer}</p>
//           </Box>
//         </Box>

//         <button className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 transition">
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
//             <polyline points="22,6 12,13 2,6"/>
//           </svg>
//           Message
//         </button>
//       </Box>
//     </Box>
//   );
// }


'use client'

import Box from "@/components/ui/box";
import { STATUS_CONFIG } from "@/features/hackathons/hack.config";
import type { HackathonDetailProps } from "@/features/hackathons/props/HackathonDetailProps";

function StatusChip({ status }: { status: HackathonDetailProps["status"] }) {
  const s = STATUS_CONFIG[status];
  return (
    <span className={`inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full ${s.bg} ${s.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot} animate-pulse`} />
      {s.label}
    </span>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-dashed border-gray-100 last:border-none">
      <div className="flex items-center gap-2.5">
        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${accent ? "bg-orange-400" : "bg-gray-200"}`} />
        <span className="text-xs text-gray-500">{label}</span>
      </div>
      <span className="text-xs font-mono font-bold text-gray-700 tabular-nums">{value}</span>
    </div>
  );
}

type Props = Pick<
  HackathonDetailProps,
  "prizePool" | "timeline" | "mode" | "tags" | "ecosystem" | "submissionRequirements" | "organizer" | "organizerIcon"
>;

export default function HackSidebar({ prizePool, timeline, mode, tags, ecosystem, organizer, organizerIcon, submissionRequirements }: Props) {
  return (
    <Box
      as="aside"
      className="lg:w-[400px] w-full flex-shrink-0 rounded-2xl overflow-hidden bg-white"
      style={{ border: "1px solid #ede9e4", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >

      {/* Prize */}
      <div className="px-5 pt-5 pb-4" style={{ background: "linear-gradient(145deg, #fff8f4, #fff2eb)", borderBottom: "1px solid #f5ede6" }}>
        <p className="text-[9px] font-black text-orange-300 tracking-[0.2em] uppercase mb-2">Prize Pool</p>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-black text-orange-500 leading-none" style={{ fontFamily: "Georgia, serif" }}>
            {prizePool}
          </p>
          <StatusChip status={timeline.status} />
        </div>
      </div>

      {/* Timeline */}
      <div className="px-5 py-4" style={{ borderBottom: "1px solid #f0ece8" }}>
        <p className="text-[9px] font-black text-gray-300 tracking-[0.2em] uppercase mb-3">Timeline</p>
        <p className="text-xs font-semibold text-orange-500 mb-3 px-2.5 py-1.5 rounded-lg bg-orange-50 border border-orange-100 inline-block">
          {timeline.note}
        </p>
        <div className="mt-1">
          {timeline.rows.map((row, i) => (
            <Row key={row.label} label={row.label} value={row.date} accent={i === 0} />
          ))}
        </div>
      </div>

      {/* Mode */}
      <div className="px-5 py-3 flex items-center gap-2.5" style={{ background: "#fafaf9", borderBottom: "1px solid #f0ece8" }}>
        <div className="w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center">
          <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
          </svg>
        </div>
        <span className="text-xs font-semibold text-gray-600">{mode}</span>
      </div>

      {/* Tags */}
      <div className="px-5 py-4" style={{ borderBottom: "1px solid #f0ece8" }}>
        <p className="text-[9px] font-black text-gray-300 tracking-[0.2em] uppercase mb-2.5">Tags</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map(t => (
            <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-500 font-semibold hover:bg-orange-100 transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Ecosystem */}
      <div className="px-5 py-4" style={{ borderBottom: "1px solid #f0ece8" }}>
        <p className="text-[9px] font-black text-gray-300 tracking-[0.2em] uppercase mb-2.5">Web3 Ecosystem</p>
        <div className="flex flex-wrap gap-1.5">
          {ecosystem.map(e => (
            <span key={e} className="text-[10px] px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 font-mono font-bold tracking-wider uppercase hover:bg-gray-200 transition-colors">
              {e}
            </span>
          ))}
        </div>
      </div>

      {/* Submission */}
      {submissionRequirements && (
        <div className="px-5 py-4" style={{ borderBottom: "1px solid #f0ece8" }}>
          <p className="text-[9px] font-black text-gray-300 tracking-[0.2em] uppercase mb-2.5">Requirements</p>
          <p className="text-xs text-gray-500 leading-relaxed">{submissionRequirements}</p>
        </div>
      )}

      {/* Organizer */}
      {/* <div className="px-5 py-4 flex items-center justify-between" style={{ background: "#fafaf9" }}>
        <div className="flex items-center gap-3">
          {organizerIcon ? (
            <img src={organizerIcon} alt={organizer} className="w-9 h-9 rounded-xl object-cover" style={{ border: "1px solid #ede9e4" }} />
          ) : (
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black text-white" style={{ background: "linear-gradient(135deg, #1c1c1c, #444)" }}>
              {organizer[0]}
            </div>
          )}
          <div>
            <p className="text-[10px] text-gray-400 font-medium">Organized by</p>
            <p className="text-sm font-bold text-gray-900 leading-tight">{organizer}</p>
          </div>
        </div>

        <button className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3.5 py-2 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Message
        </button>
      </div> */}

    </Box>
  );
}