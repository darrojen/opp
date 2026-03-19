
import Box from "@/components/ui/box";

export type BootcampStatus = "enrolling" | "starting-soon" | "in-progress" | "ended";
export type BootcampFormat = "online" | "in-person" | "hybrid";
export type BootcampPace = "full-time" | "part-time" | "self-paced";

export interface BootcampBoxProps {
  title: string;
  provider: string;
  providerIcon?: string;
  coverImage?: string;
  format: BootcampFormat;
  pace: BootcampPace;
  status: BootcampStatus;
  duration?: string;
  price?: string;
  startDate?: string;
  topics?: string[];
  href?: string;
  featured?: boolean;
}

const statusConfig: Record<BootcampStatus, { label: string; bg: string; text: string; dot: string }> = {
  enrolling:       { label: "Enrolling",     bg: "bg-sky-100",    text: "text-sky-700",    dot: "bg-sky-400"    },
  "starting-soon": { label: "Starting Soon", bg: "bg-amber-100",  text: "text-amber-700",  dot: "bg-amber-400"  },
  "in-progress":   { label: "In Progress",   bg: "bg-orange-100", text: "text-orange-700", dot: "bg-orange-400" },
  ended:           { label: "Ended",         bg: "bg-gray-100",   text: "text-gray-500",   dot: "bg-gray-400"   },
};

function MonitorIcon() {
  return <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1.5" y="2" width="13" height="9" rx="1.5" /><path d="M5 14h6M8 11v3" /></svg>;
}
function BuildingIcon() {
  return <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1.5" y="6" width="13" height="8.5" rx="1" /><path d="M5 14.5V10h6v4.5M1.5 6l6.5-4.5L14.5 6" /></svg>;
}
function SplitIcon() {
  return <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v12M4 6l4-4 4 4M4 10l4 4 4-4" /></svg>;
}
function ClockIcon() {
  return <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="8" cy="8" r="6.5" /><path d="M8 4.5V8l2.5 2" /></svg>;
}
function CalendarIcon() {
  return <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1.5" y="3" width="13" height="11.5" rx="1.5" /><path d="M1.5 7h13M5 1.5V4M11 1.5V4" /></svg>;
}
function TagIcon() {
  return <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1.5 8.5V3A1.5 1.5 0 0 1 3 1.5h5.5l6 6a1.5 1.5 0 0 1 0 2.1l-5.4 5.4a1.5 1.5 0 0 1-2.1 0l-5.5-5.5z" /><circle cx="5" cy="5" r="1" fill="currentColor" stroke="none" /></svg>;
}

const formatIcon: Record<BootcampFormat, React.ReactNode> = {
  online:      <MonitorIcon />,
  "in-person": <BuildingIcon />,
  hybrid:      <SplitIcon />,
};
const formatLabel: Record<BootcampFormat, string> = {
  online:      "Online",
  "in-person": "In-person",
  hybrid:      "Hybrid",
};
const paceLabel: Record<BootcampPace, string> = {
  "full-time":  "Full-time",
  "part-time":  "Part-time",
  "self-paced": "Self-paced",
};

function CoverPlaceholder({ label }: { label: string }) {
  return (
    <Box as="div" className="w-full h-full bg-gradient-to-br from-sky-50 to-cyan-100 flex flex-col items-center justify-center gap-1">
      <svg className="w-7 h-7 text-sky-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8h10M7 12h6" />
      </svg>
      <span className="text-[10px] font-semibold text-sky-400 text-center px-1 leading-tight line-clamp-2">{label}</span>
    </Box>
  );
}

// ─── Featured card (same cover+logo layout, just larger) ──────────────────────

function FeaturedCard({ title, provider, providerIcon, coverImage, format, pace, status, duration, price, startDate, topics = [], href = "#" }: BootcampBoxProps) {
  const s = statusConfig[status];
  const isFree = price?.toLowerCase() === "free";
  const isActive = status !== "ended";

  return (
    <Box
      as="a"
      href={href}
      className="group flex flex-col bg-white border-2 border-gray-200 rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-300 ease-out
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:border-sky-300 hover:-translate-y-0.5"
    >
      {/* Header */}
      <Box as="div" className="flex items-center gap-2 px-4 pt-3 pb-2 flex-wrap">
        {providerIcon ? (
          <Box as="img" src={providerIcon} alt={provider} className="w-6 h-6 rounded object-cover flex-shrink-0" />
        ) : (
          <Box as="div" className="w-6 h-6 rounded bg-sky-100 flex items-center justify-center text-xs font-bold text-sky-600 flex-shrink-0">
            {provider?.[0] ?? "?"}
          </Box>
        )}
        <Box as="span" className="text-sm font-medium text-gray-700 truncate min-w-0 flex-1">{provider}</Box>
        <Box as="div" className="flex items-center gap-2 ml-auto flex-shrink-0">
          <Box as="span" className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${s.bg} ${s.text}`}>
            <Box as="span" className={`w-1.5 h-1.5 rounded-full ${s.dot} animate-pulse flex-shrink-0`} />
            {s.label}
          </Box>
          {price && (
            <Box as="span" className={`text-xs font-bold flex-shrink-0 ${isFree ? "text-emerald-600" : "text-gray-700"}`}>
              {price}
            </Box>
          )}
        </Box>
      </Box>

      {/* Cover image — taller for featured */}
      <Box as="div" className="mx-4 rounded-xl overflow-hidden bg-gray-100 h-36 sm:h-44">
        {coverImage ? (
          <Box as="img" src={coverImage} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <CoverPlaceholder label={provider} />
        )}
      </Box>

      {/* Info below image */}
      <Box as="div" className="px-4 pt-3 pb-4 flex flex-col gap-2">
        <Box as="h3" className="font-bold text-gray-900 text-base leading-snug group-hover:text-sky-600 transition-colors duration-200">
          {title}
        </Box>
        <Box as="div" className="flex items-center gap-2 flex-wrap">
          <Box as="span" className="inline-flex items-center gap-1 text-xs text-gray-400">{formatIcon[format]}{formatLabel[format]}</Box>
          <Box as="span" className="text-gray-300 text-xs">·</Box>
          <Box as="span" className="text-xs text-gray-400">{paceLabel[pace]}</Box>
          {duration && (
            <>
              <Box as="span" className="text-gray-300 text-xs">·</Box>
              <Box as="span" className="inline-flex items-center gap-1 text-xs text-gray-400"><ClockIcon />{duration}</Box>
            </>
          )}
          {startDate && isActive && (
            <Box as="span" className="inline-flex items-center gap-1 text-xs text-gray-400 ml-auto"><CalendarIcon />Starts <Box as="span" className="font-semibold text-gray-700">{startDate}</Box></Box>
          )}
        </Box>
        {topics.length > 0 && (
          <Box as="div" className="flex items-center gap-1.5 flex-wrap">
            {topics.map((t) => (
              <Box key={t} as="span" className="inline-flex items-center gap-0.5 text-xs font-medium px-2 py-0.5 rounded-md bg-gray-900 text-white">
                <TagIcon />{t}
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}

// ─── Compact row (HackBox-style: logo in header, cover as thumbnail) ──────────

function CompactRow({ title, provider, providerIcon, coverImage, format, pace, status, duration, price, startDate, topics = [], href = "#" }: BootcampBoxProps) {
  const s = statusConfig[status];
  const isFree = price?.toLowerCase() === "free";
  const isActive = status !== "ended";

  return (
    <Box
      as="a"
      href={href}
      className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-300 ease-out
        hover:shadow-[0_4px_20px_rgba(0,0,0,0.09)] hover:border-gray-300 hover:-translate-y-0.5"
    >
      {/* Header */}
      <Box as="div" className="flex items-center gap-2 px-3 sm:px-4 pt-3 pb-2 flex-wrap">
        {providerIcon ? (
          <Box as="img" src={providerIcon} alt={provider} className="w-6 h-6 rounded object-cover flex-shrink-0" />
        ) : (
          <Box as="div" className="w-6 h-6 rounded bg-sky-100 flex items-center justify-center text-xs font-bold text-sky-600 flex-shrink-0">
            {provider?.[0] ?? "?"}
          </Box>
        )}
        <Box as="span" className="text-sm font-medium text-gray-700 truncate min-w-0 flex-1">{provider}</Box>
        <Box as="div" className="flex items-center gap-2 ml-auto flex-shrink-0">
          <Box as="span" className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${s.bg} ${s.text}`}>
            <Box as="span" className={`w-1.5 h-1.5 rounded-full ${s.dot} animate-pulse flex-shrink-0`} />
            {s.label}
          </Box>
          {startDate && isActive && (
            <Box as="span" className="text-xs text-amber-500 font-medium whitespace-nowrap">{startDate}</Box>
          )}
        </Box>
      </Box>

      {/* Cover + info */}
      <Box as="div" className="flex items-start gap-3 sm:gap-4 px-3 sm:px-4 pb-4">
        <Box as="div" className="w-20 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
          {coverImage ? (
            <Box as="img" src={coverImage} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          ) : (
            <CoverPlaceholder label={provider} />
          )}
        </Box>

        <Box as="div" className="flex flex-col justify-between min-h-[4rem] sm:min-h-[5rem] py-0.5 min-w-0 flex-1">
          <Box as="h3" className="font-semibold text-gray-900 text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-sky-600 transition-colors duration-200">
            {title}
          </Box>
          <Box as="div" className="flex items-center gap-2 mt-auto flex-wrap">
            <Box as="span" className="inline-flex items-center gap-1 text-xs text-gray-400">{formatIcon[format]}{formatLabel[format]}</Box>
            <Box as="span" className="text-gray-300 text-xs">·</Box>
            <Box as="span" className="text-xs text-gray-400">{paceLabel[pace]}</Box>
            {duration && <Box as="span" className="inline-flex items-center gap-0.5 text-xs text-gray-400"><ClockIcon />{duration}</Box>}
            {topics.slice(0, 2).map((t) => (
              <Box key={t} as="span" className="inline-flex items-center gap-0.5 text-[11px] font-medium px-1.5 py-0.5 rounded-md bg-gray-900 text-white"><TagIcon />{t}</Box>
            ))}
            {price && (
              <Box as="span" className={`text-xs font-bold ml-auto ${isFree ? "text-emerald-600" : "text-sky-600"}`}>{price}</Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function BootcampBox({ featured = false, ...props }: BootcampBoxProps) {
  return featured ? <FeaturedCard {...props} /> : <CompactRow {...props} />;
}