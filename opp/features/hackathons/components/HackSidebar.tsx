
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
        <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${accent ? "bg-orange-400" : "bg-gray-200"}`} />
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
      className="lg:w-100 w-full shrink-0 rounded-2xl overflow-hidden bg-white lg:h-137.5"
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

    

    </Box>
  );
}