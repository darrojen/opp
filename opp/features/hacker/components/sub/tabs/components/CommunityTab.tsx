
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ActivityTabProps } from '../types/types';

// ── Types ─────────────────────────────────────────────────────────────────────

interface CommunityGroup {
  id: string;
  name: string;
  handle: string;
  logoUrl?: string;
  logoFallback: string;
  logoBgColor?: string;
  description: string;
  members: number;
  rating: number; // 0–5
  ratingCount: number;
  tags: string[];
  pageUrl: string;
  role?: string; // e.g. "Admin", "Moderator", "Member"
  isVerified?: boolean;
}

// ── Dummy data ────────────────────────────────────────────────────────────────

const DUMMY_GROUPS: CommunityGroup[] = [
  {
    id: '1',
    name: 'Web3 Builders DAO',
    handle: '@web3builders',
    logoFallback: 'W3',
    logoBgColor: '#1a1f2e',
    description: 'A global collective of Web3 developers, designers, and founders building the decentralized future together.',
    members: 4821,
    rating: 4.8,
    ratingCount: 312,
    tags: ['Web3', 'DAO', 'Ethereum'],
    pageUrl: '/community/web3-builders-dao',
    role: 'Admin',
    isVerified: true,
  },
  {
    id: '2',
    name: 'DeFi Hackers Guild',
    handle: '@defihackers',
    logoFallback: 'DH',
    logoBgColor: '#0a2540',
    description: 'Hackers focused on DeFi protocols, yield strategies, and on-chain security research.',
    members: 2140,
    rating: 4.5,
    ratingCount: 189,
    tags: ['DeFi', 'Security', 'Solidity'],
    pageUrl: '/community/defi-hackers-guild',
    role: 'Member',
  },
  {
    id: '3',
    name: 'African Tech Founders',
    handle: '@africatechfounders',
    logoFallback: 'ATF',
    logoBgColor: '#7c2d12',
    description: 'Connecting African tech entrepreneurs, startup founders, and investors across the continent.',
    members: 9304,
    rating: 4.9,
    ratingCount: 540,
    tags: ['Startup', 'Africa', 'Community'],
    pageUrl: '/community/african-tech-founders',
    role: 'Moderator',
    isVerified: true,
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

const ROLE_STYLES: Record<string, string> = {
  Admin: 'bg-orange-50 text-orange-600 border-orange-200',
  Moderator: 'bg-blue-50 text-blue-600 border-blue-200',
  Member: 'bg-gray-100 text-gray-500 border-gray-200',
};

// ── Icons ─────────────────────────────────────────────────────────────────────

function StarIcon({ filled, half, className }: { filled?: boolean; half?: boolean; className?: string }) {
  if (half) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <defs>
          <linearGradient id="halfGrad">
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#d1d5db" />
          </linearGradient>
        </defs>
        <path
          fill="url(#halfGrad)"
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill={filled ? '#f59e0b' : '#d1d5db'}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = rating >= i;
        const half = !filled && rating >= i - 0.5;
        return <StarIcon key={i} filled={filled} half={half} className="w-3.5 h-3.5" />;
      })}
    </div>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  );
}

function VerifiedIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
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

function GroupCard({ group }: { group: CommunityGroup }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center gap-3.5 px-4 py-3.5">
        {/* Logo */}
        <Link href={group.pageUrl} className="shrink-0 cursor-pointer">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: group.logoBgColor ?? '#374151' }}
          >
            {group.logoUrl ? (
              <img src={group.logoUrl} alt={group.name} className="w-full h-full rounded-xl object-cover" />
            ) : (
              <span className="text-white text-[11px] font-black tracking-wide">{group.logoFallback}</span>
            )}
          </div>
        </Link>

        {/* Info */}
        <div className="flex-1 min-w-0">
          {/* Name row */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <Link href={group.pageUrl}>
              <span className="font-semibold text-gray-900 text-[14px] hover:text-orange-500 transition-colors cursor-pointer leading-snug">
                {group.name}
              </span>
            </Link>
            {group.isVerified && (
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 shrink-0">
                <VerifiedIcon className="w-2.5 h-2.5 text-white" />
              </span>
            )}
            {group.role && (
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${ROLE_STYLES[group.role] ?? ROLE_STYLES.Member}`}>
                {group.role}
              </span>
            )}
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-3 mt-1">
            {/* Members */}
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <UsersIcon className="w-3.5 h-3.5" />
              <span className="font-medium text-gray-600">{formatCount(group.members)}</span>
              <span>members</span>
            </span>

            {/* Divider */}
            <span className="text-gray-200">|</span>

            {/* Rating */}
            <span className="flex items-center gap-1.5">
              <Stars rating={group.rating} />
              <span className="text-xs font-semibold text-gray-700">{group.rating.toFixed(1)}</span>
              <span className="text-xs text-gray-400">({formatCount(group.ratingCount)})</span>
            </span>
          </div>
        </div>

        {/* Chevron */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-600 transition-all duration-150"
          aria-label={expanded ? 'Collapse' : 'Expand'}
        >
          <ChevronIcon open={expanded} />
        </button>
      </div>

      {/* Expanded */}
      {expanded && (
        <div
          className="border-t border-gray-100 px-4 py-3 bg-gray-50 space-y-2.5"
          style={{ animation: 'groupExpandIn 0.15s ease-out' }}
        >
          <style>{`
            @keyframes groupExpandIn {
              from { opacity: 0; transform: translateY(-4px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>

          <p className="text-xs text-gray-500 leading-relaxed">{group.description}</p>

          {group.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {group.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-50 text-orange-500 border border-orange-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function CommunityTab({ profile }: ActivityTabProps) {
  const groups = DUMMY_GROUPS;

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <h2 className="font-syne text-lg font-bold">Groups</h2>
        {groups.length > 0 && (
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold">
            {groups.length}
          </span>
        )}
      </div>

      {groups.length === 0 ? (
        <p className="text-gray-500 text-sm">No group joined yet.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {groups.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>
      )}
    </div>
  );
}