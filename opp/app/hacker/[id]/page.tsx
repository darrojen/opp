import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import Box from '@/components/ui/box';
import ActivityTabs from '@/features/hacker/components/Tabs';
import { ProfileCard } from '@/features/hacker/components/ProfileCard';
import { MOCK_HACKERS } from '@/features/hacker/types/mock-hackers';
import { HackerProfile } from '@/features/hacker/types/hacker.types';

// ─────────────────────────────────────────────────────────────
// Skeleton
// ─────────────────────────────────────────────────────────────
function HackerProfileSkeleton() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 animate-pulse">
      {/* Profile skeleton */}
      <div className="w-full max-w-sm h-64 lg:h-96 bg-gray-200 rounded-2xl shrink-0 mx-auto lg:mx-0" />

      {/* Content skeleton */}
      <div className="flex-1 space-y-4 pt-2">
        <div className="h-5 bg-gray-200 rounded w-1/3" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-40 bg-gray-200 rounded-xl mt-6" />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Async Content
// ─────────────────────────────────────────────────────────────
async function HackerContent({ id }: { id: string }) {
  const profile = (MOCK_HACKERS as Record<string, HackerProfile | undefined>)[id];

  if (!profile) notFound();

  return (
    <Box
      as="div"
      className="
        grid grid-cols-1 
        gap-10
        lg:grid-cols-[minmax(280px,350px)_1fr]
        xl:gap-12
      "
    >
      <ProfileCard profile={profile} />
      <ActivityTabs profile={profile} />
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return Object.keys(MOCK_HACKERS).map(id => ({ id }));
}

export default async function HackerProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Box
      as="div"
      className="
        min-h-screen
        px-4 sm:px-6 md:px-8 lg:px-10
        py-6 sm:py-8 lg:py-10
      "
    >
      <div className="w-full max-w-7xl mx-auto lg:mx-17 xl:mx-17">
        <Suspense fallback={<HackerProfileSkeleton />}>
          <HackerContent id={id} />
        </Suspense>
      </div>
    </Box>
  );
}