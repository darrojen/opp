// // features/hacker/tabs/components/HackathonsTab.tsx
// 'use client';

// import { ActivityTabProps } from '../types/types';

// export default function HackathonsTab({ profile }: ActivityTabProps) {
//   return (
//     <div>
//       <h2 className="font-syne text-lg font-bold mb-4">Hackathons</h2>
//       <p className="text-gray-500">You haven’t participated in any hackathons yet.</p>
//     </div>
//   );
// }



'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ActivityTabProps } from '../types/types';

// ── Types ─────────────────────────────────────────────────────────────────────

interface HackathonEntry {
  id: string;
  name: string;
  logoUrl?: string;
  logoFallback: string;
  logoBgColor?: string;
  startDate: string;
  endDate: string;
  location: string;
  prize?: string;
  placement?: string; // e.g. "1st", "2nd", "Finalist"
  projectTitle?: string;
  projectUrl?: string;
  pageUrl: string;
  status: 'completed' | 'ongoing' | 'upcoming';
  tags: string[];
}

// ── Dummy data ────────────────────────────────────────────────────────────────

const DUMMY_HACKATHONS: HackathonEntry[] = [
  {
    id: '1',
    name: 'ETHGlobal Bangkok 2024',
    logoFallback: 'ETH',
    logoBgColor: '#627EEA',
    startDate: 'Nov 15, 2024',
    endDate: 'Nov 17, 2024',
    location: 'Bangkok, Thailand',
    prize: '$2,000',
    placement: '2nd',
    projectTitle: 'Raffyl – Decentralized Raffle dApp',
    projectUrl: '/projects/raffyl',
    pageUrl: '/hackathons/ethglobal-bangkok-2024',
    status: 'completed',
    tags: ['Ethereum', 'DeFi', 'Web3'],
  },
  {
    id: '2',
    name: 'Lisk Builders Hackathon',
    logoFallback: 'LSK',
    logoBgColor: '#0D5EFF',
    startDate: 'Jan 10, 2025',
    endDate: 'Jan 24, 2025',
    location: 'Online',
    placement: 'Finalist',
    projectTitle: 'ChainVault – DAO Treasury',
    projectUrl: '/projects/chainvault',
    pageUrl: '/hackathons/lisk-builders-2025',
    status: 'completed',
    tags: ['Lisk', 'DAO', 'Governance'],
  },
  {
    id: '3',
    name: 'HackFS 2025',
    logoFallback: 'HFS',
    logoBgColor: '#00B4D8',
    startDate: 'Mar 1, 2025',
    endDate: 'Mar 21, 2025',
    location: 'Online',
    pageUrl: '/hackathons/hackfs-2025',
    status: 'ongoing',
    tags: ['IPFS', 'Filecoin', 'Storage'],
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

const PLACEMENT_STYLES: Record<string, string> = {
  '1st': 'bg-yellow-50 text-yellow-600 border-yellow-200',
  '2nd': 'bg-gray-100 text-gray-600 border-gray-200',
  '3rd': 'bg-orange-50 text-orange-500 border-orange-200',
  Finalist: 'bg-blue-50 text-blue-500 border-blue-200',
};

const STATUS_STYLES: Record<HackathonEntry['status'], string> = {
  completed: 'bg-gray-100 text-gray-500',
  ongoing: 'bg-green-50 text-green-600',
  upcoming: 'bg-orange-50 text-orange-500',
};

const STATUS_LABELS: Record<HackathonEntry['status'], string> = {
  completed: 'Completed',
  ongoing: 'Ongoing',
  upcoming: 'Upcoming',
};

// ── Icons ─────────────────────────────────────────────────────────────────────

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
    </svg>
  );
}

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

// ── Card ──────────────────────────────────────────────────────────────────────

function HackathonCard({ entry }: { entry: HackathonEntry }) {
  const [expanded, setExpanded] = useState(entry.status === 'completed' && !!entry.placement);

  return (
    <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Main row */}
      <div className="flex items-center gap-4 px-4 py-3.5">
        {/* Logo */}
        <Link href={entry.pageUrl}>
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 cursor-pointer"
            style={{ backgroundColor: entry.logoBgColor ?? '#374151' }}
          >
            {entry.logoUrl ? (
              <img src={entry.logoUrl} alt={entry.name} className="w-full h-full rounded-xl object-cover" />
            ) : (
              <span className="text-white text-[10px] font-black tracking-wide">{entry.logoFallback}</span>
            )}
          </div>
        </Link>

        {/* Name + meta */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <Link href={entry.pageUrl}>
              <span className="font-semibold text-gray-900 text-[14px] hover:text-orange-500 transition-colors cursor-pointer leading-snug">
                {entry.name}
              </span>
            </Link>
            {/* Status badge */}
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${STATUS_STYLES[entry.status]}`}>
              {STATUS_LABELS[entry.status]}
            </span>
            {/* Placement badge */}
            {entry.placement && (
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${PLACEMENT_STYLES[entry.placement] ?? 'bg-purple-50 text-purple-500 border-purple-200'}`}>
                {entry.placement} Place
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 mt-1 flex-wrap">
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <CalendarIcon className="w-3 h-3" />
              {entry.startDate} – {entry.endDate}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <MapPinIcon className="w-3 h-3" />
              {entry.location}
            </span>
          </div>
        </div>

        {/* Chevron */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-600 transition-all duration-150"
          aria-label={expanded ? 'Collapse' : 'Expand'}
        >
          <ChevronIcon open={expanded} />
        </button>
      </div>

      {/* Expanded section */}
      {expanded && (
        <div
          className="border-t border-gray-100 px-4 py-3 bg-gray-50 space-y-3"
          style={{ animation: 'expandIn 0.15s ease-out' }}
        >
          <style>{`
            @keyframes expandIn {
              from { opacity: 0; transform: translateY(-4px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>

          {/* Tags */}
          {entry.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-50 text-orange-500 border border-orange-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Project submitted */}
          {entry.projectTitle && (
            <div className="flex items-center gap-2">
              <LinkIcon className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              <span className="text-xs text-gray-500">Project:</span>
              {entry.projectUrl ? (
                <Link href={entry.projectUrl} className="text-xs font-medium text-orange-500 hover:underline">
                  {entry.projectTitle}
                </Link>
              ) : (
                <span className="text-xs font-medium text-gray-700">{entry.projectTitle}</span>
              )}
            </div>
          )}

          {/* Prize */}
          {entry.prize && (
            <div className="flex items-center gap-2">
              <TrophyIcon className="w-3.5 h-3.5 text-yellow-500 flex-shrink-0" />
              <span className="text-xs text-gray-500">Prize won:</span>
              <span className="text-xs font-bold text-gray-800">{entry.prize}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function HackathonsTab({ profile }: ActivityTabProps) {
  const hackathons = DUMMY_HACKATHONS;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="font-syne text-lg font-bold">Hackathons</h2>
        {hackathons.length > 0 && (
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold">
            {hackathons.length}
          </span>
        )}
      </div>

      {hackathons.length === 0 ? (
        <p className="text-gray-500 text-sm">You haven&quote;t participated in any hackathons yet.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {hackathons.map((entry) => (
            <HackathonCard key={entry.id} entry={entry} />
          ))}
        </div>
      )}
    </div>
  );
}