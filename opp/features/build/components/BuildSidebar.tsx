'use client';

import React, { useState } from 'react';
import { Build } from '../types';

import { FaGlobe, FaPlayCircle, FaGithub } from 'react-icons/fa';
import { FaXTwitter, FaArrowUp, FaCircleArrowUp, FaCirclePlus } from 'react-icons/fa6';
import { BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs';

import Image from 'next/image';
import { BuildStatus } from '@/components/layout/BuildStatus';
import Box from '@/components/ui/box';
import TeamSection from '@/features/build/components/MembersList';
import { exampleBuild } from '@/features/build/build.config';

interface BuildSidebarProps {
  build: Build;
}

// ── Link Icon ─────────────────────────────────────────────
function LinkIcon({ type }: { type: string }) {
  if (type === 'github') return <FaGithub />;
  if (type === 'twitter') return <FaXTwitter />;
  if (type === 'demo') return <FaPlayCircle />;
  return <FaGlobe className="w-5 h-5 shrink-0" />;
}

// ── Sidebar ──────────────────────────────────────────────
export function BuildSidebar({ build }: BuildSidebarProps) {
  const [bookmarked, setBookmarked] = useState(build.isBookmarked ?? false);
  const [upvoted, setUpvoted] = useState(build.isUpvoted ?? false);
  const [upvotes, setUpvotes] = useState(build.upvotes);

  const handleUpvote = () => {
    setUpvoted(prev => {
      setUpvotes(count => (prev ? count - 1 : count + 1));
      return !prev;
    });
  };

  return (
    <aside className="w-full lg:max-w-[320px] shrink-0">

      {/* Logo + Name */}
      <Box as="div" className="mb-4">
       

           <div className="w-32 h-32 sm:w-47 sm:h-47 md:w-55 md:h-55 lg:w-60 lg:h-60 rounded-[10%] mb-5 overflow-hidden border border-gray-300">
           <Image
            src={build.logoUrl}
            alt={build.name}
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <h1 className="text-lg sm:text-xl font-bold text-gray-900">
            {build.name}
          </h1>
          <BuildStatus status={build.status ?? ''} />
        </div>
      </Box>

      {/* Tagline */}
      <p className="text-sm text-gray-600 mb-5 leading-relaxed">
        {build.tagline}
      </p>

      {/* Categories */}
      <Box as="div" className="flex flex-wrap gap-2 mb-6">
        {build.category.map(cat => (
          <span
            key={cat}
            className="px-3 py-1 rounded-full text-xs font-medium border border-amber-200 bg-amber-50 text-amber-700"
          >
            {cat}
          </span>
        ))}
      </Box>

      {/* Actions */}
      <div className="flex flex-wrap gap-2 mb-5 border-b pb-5">

        {/* Bookmark */}
        <button
          onClick={() => setBookmarked(prev => !prev)}
          className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-orange-500 text-white hover:bg-orange-600 transition"
        >
          {bookmarked ? (
            <BsBookmarkCheckFill className="w-4 h-4" />
          ) : (
            <BsBookmarkCheck className="w-4 h-4" />
          )}
          {bookmarked ? 'Saved' : 'Bookmark'}
        </button>

        {/* Upvote */}
        <button
          onClick={handleUpvote}
          className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold border transition ${
            upvoted
              ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
          }`}
        >
          {upvoted ? (
            <FaCircleArrowUp className="w-4 h-4" />
          ) : (
            <FaArrowUp className="w-4 h-4" />
          )}
          Upvote
        </button>

      
      </div>

      {/* Team */}
      <div className="pb-5 border-b mb-5">
        <TeamSection build={exampleBuild} />
      </div>

      {/* Links */}
      <div className="space-y-2">
        {build.links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition group"
          >
            <span className="text-gray-400 group-hover:text-gray-700">
              <LinkIcon type={link.type} />
            </span>
            <span className="truncate">{link.url}</span>
          </a>
        ))}
      </div>

    </aside>
  );
}