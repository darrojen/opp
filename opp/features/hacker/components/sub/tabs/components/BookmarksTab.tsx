'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ── Types ─────────────────────────────────────────────────────────────────────

interface BookmarkedProject {
  id: string;
  title: string;
  description: string;
  logoUrl?: string;
  logoFallback: string;
  logoBgColor?: string;
  tags: string[];
  ownerUsername: string;
  ownerAvatarUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
  demoUrl?: string;
  pageUrl: string;
}

// ── Dummy data ────────────────────────────────────────────────────────────────

const DUMMY_BOOKMARKS: BookmarkedProject[] = [
  {
    id: '1',
    title: 'Raffyl',
    description:
      'Raffyl is a decentralized application (dApp) for fun, fair, and instant raffles. It enables event organizers, creators, and communities to run giveaways where winn...',
    logoUrl: 'https://api.dicebear.com/7.x/shapes/svg?seed=raffyl&backgroundColor=b6e3f4,c0aede,d1d4f9',
    logoFallback: 'R',
    logoBgColor: '#f0e8ff',
    tags: ['Crypto / Web3', 'Ethereum', 'Social', 'lisk'],
    ownerUsername: 'Majormaxx',
    ownerAvatarUrl: 'https://api.dicebear.com/7.x/adventurer/svg?seed=majormaxx',
    githubUrl: 'https://github.com',
    websiteUrl: 'https://example.com',
    demoUrl: 'https://example.com',
    pageUrl: '/projects/raffyl',
  },
  {
    id: '2',
    title: 'On-Loan',
    description:
      'We envision a future where financial services are ac...',
    logoFallback: '↗',
    logoBgColor: '#1a2332',
    tags: ['DeFi', 'Lending'],
    ownerUsername: 'devbuilder',
    pageUrl: '/projects/on-loan',
  },
  {
    id: '3',
    title: 'ChainVault',
    description:
      'Secure multi-sig wallet infrastructure for DAOs and teams. Manage treasury funds with granular permissions and on-chain governance...',
    logoFallback: '🔐',
    logoBgColor: '#0f1e14',
    tags: ['Crypto / Web3', 'Security', 'DAO'],
    ownerUsername: 'vault_dev',
    ownerAvatarUrl: 'https://api.dicebear.com/7.x/adventurer/svg?seed=vault',
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
    pageUrl: '/projects/chainvault',
  },
];

// ── Icons ─────────────────────────────────────────────────────────────────────

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ChevronIcon({ open, className }: { open: boolean; className?: string }) {
  return (
    <svg
      className={`${className} transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

function UserCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
    </svg>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function ProjectLogo({ project }: { project: BookmarkedProject }) {
  if (project.logoUrl) {
    return (
      <img
        src={project.logoUrl}
        alt={project.title}
        className="w-14 h-14 rounded-xl object-cover shrink-0"
        // width={1}
        // height={1}
      />
    );
  }
  return (
    <div
      className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 text-xl"
      style={{ backgroundColor: project.logoBgColor ?? '#1a1a2e' }}
    >
      <span className="text-white font-bold">{project.logoFallback}</span>
    </div>
  );
}

function TagChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-50 text-orange-500 border border-orange-100">
      {label}
    </span>
  );
}

function BookmarkCard({ project }: { project: BookmarkedProject }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden transition-shadow duration-200 hover:shadow-md">
      <div className="flex items-start gap-4 p-4">
        {/* Logo */}
        <Link href={project.pageUrl} className="shrink-0 cursor-pointer">
          <ProjectLogo project={project} />
        </Link>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <Link href={project.pageUrl} className="group cursor-pointer">
              <h3 className="font-bold text-gray-900 text-[15px] leading-snug group-hover:text-orange-500 transition-colors">
                {project.title}
              </h3>
            </Link>
            {/* Expand toggle */}
            <button
              onClick={() => setExpanded((v) => !v)}
              className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-600 transition-all duration-150 mt-0.5"
              aria-label={expanded ? 'Collapse' : 'Expand'}
            >
              <ChevronIcon open={expanded} className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Description — always show truncated, expand on toggle */}
          <p className={`text-sm text-gray-500 mt-1 leading-relaxed ${expanded ? '' : 'line-clamp-2'}`}>
            {project.description}
          </p>

          {/* Expanded: tags + owner + links */}
          {expanded && (
            <div className="mt-3 space-y-2.5" style={{ animation: 'expandIn 0.15s ease-out' }}>
              <style>{`
                @keyframes expandIn {
                  from { opacity: 0; transform: translateY(-4px); }
                  to   { opacity: 1; transform: translateY(0);    }
                }
              `}</style>

              {/* Tags */}
              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <TagChip key={tag} label={tag} />
                  ))}
                </div>
              )}

              {/* Owner + action links */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  {project.ownerAvatarUrl ? (
                    <img
                      src={project.ownerAvatarUrl}
                      alt={project.ownerUsername}
                      className="w-5 h-5 rounded-full object-cover"
                    //   width={1}
                    //   height={1}
                    />
                  ) : (
                    <UserCircleIcon className="w-5 h-5 text-gray-400" />
                  )}
                  <span className="text-sm text-gray-500">{project.ownerUsername}</span>
                </div>

                <div className="flex items-center gap-2 ml-1">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-600 transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="w-4.5 h-4.5" />
                    </a>
                  )}
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-600 transition-colors"
                      aria-label="Website"
                    >
                      <GlobeIcon className="w-4.5 h-4.5" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-600 transition-colors"
                      aria-label="Demo"
                    >
                      <PlayIcon className="w-4.5 h-4.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function BookmarksList() {
  const bookmarks = DUMMY_BOOKMARKS;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="font-syne text-lg font-bold">Bookmarks</h2>
        {bookmarks.length > 0 && (
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold">
            {bookmarks.length}
          </span>
        )}
      </div>

      {/* List */}
      {bookmarks.length === 0 ? (
        <p className="text-gray-500 text-sm">No bookmarks yet.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {bookmarks.map((project) => (
            <BookmarkCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}