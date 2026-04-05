
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ActivityTabProps } from '../types/types';
import { HoverProfileCard } from '@/components/layout/HoverProfileCardData';

// ── Types ────────────────────────────────────────────────────────────────────

interface Build {
  id: string;
  title: string;
  description: string;
  logoUrl?: string;
  logoFallback: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  pageUrl: string;
}

// ── Icons ────────────────────────────────────────────────────────────────────

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
    </svg>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function BuildLogo({
  logoUrl,
  logoFallback,
  title,
}: {
  logoUrl?: string;
  logoFallback: string;
  title: string;
}) {
  if (logoUrl) {
    return (
      <Image
        src={logoUrl}
        alt={`${title} logo`}
        width={64}
        height={64}
        className="w-16 h-16 rounded-lg object-cover shrink-0"
      />
    );
  }

  return (
    <div className="w-16 h-16 rounded-lg bg-gray-900 flex items-center justify-center shrink-0">
      <span className="text-white text-xs font-bold text-center px-1">
        {logoFallback}
      </span>
    </div>
  );
}

function TagChip({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-600">
      {label}
    </span>
  );
}

function BuildCard({
  build,
  profile,
}: {
  build: Build;
  profile: ActivityTabProps['profile'];
}) {
  return (
    <Link
      href={build.pageUrl}
      className="block border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-gray-300 hover:shadow-sm transition-all"
    >
      {/* Hacker row */}
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
        <div className="w-5 h-5 rounded-full overflow-hidden">
          <Image
            src={profile.avatarUrl}
            alt={profile.username}
            width={20}
            height={20}
            className="w-full h-full object-cover"
          />
        </div>



    <HoverProfileCard
  profile={{
    name: profile.username, // ✅ map it here
    handle: profile.handle,
    avatarUrl: profile.avatarUrl,
    bio: profile.bio,
    following: profile.following,
    followers: profile.followers,
    // messageUrl: profile.messageUrl,
    // profileUrl: ,
  }}
>
  <span className="text-sm text-gray-600 cursor-pointer hover:underline">
    {profile.handle}
  </span>
</HoverProfileCard>
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="flex items-start gap-4">
          <BuildLogo
            logoUrl={build.logoUrl}
            logoFallback={build.logoFallback}
            title={build.title}
          />

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-bold text-gray-900 text-base line-clamp-2 font-syne">
                {build.title}
              </h3>

              <div className="flex items-center gap-2">
                {build.githubUrl && (
                  <a
                    href={build.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-600"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                )}

                {build.demoUrl && (
                  <a
                    href={build.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-600"
                  >
                    <PlayIcon className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
              {build.description}
            </p>
          </div>
        </div>

        {/* Tags */}
        {build.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {build.tags.map((tag) => (
              <TagChip key={tag} label={tag} />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

// ── Main ─────────────────────────────────────────────────────────────────────

export default function BuildsTab({ profile }: ActivityTabProps) {
  const builds: Build[] = [
    {
      id: '1',
      title: 'LexiAI – AI Legal Assistant',
      description:
        'LexiAI simplifies complex legal language into clear explanations.',
      logoFallback: 'LexiAI',
      tags: ['AI / Robotics'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://example.com',
      pageUrl: '/build/1',
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="font-syne text-lg font-bold">BUILDs</h2>
        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-xs font-semibold">
          {builds.length}
        </span>
      </div>

      {/* Content */}
      {builds.length === 0 ? (
        <p className="text-gray-500 text-sm">No builds uploaded yet.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {builds.map((build) => (
            <BuildCard key={build.id} build={build} profile={profile} />
          ))}
        </div>
      )}
    </div>
  );
}