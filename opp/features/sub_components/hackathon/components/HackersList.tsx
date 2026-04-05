

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Hacker,
  HackerCardProps,
  HackersListProps,
  HackerTag,
} from "@/features/sub_components/hackathon/types/hackers-list";
import { TiUserAdd } from "react-icons/ti";
import { IoMail } from "react-icons/io5";
import Title from "@/components/ui/title";
import ThreeBodyLoader from "@/components/loading/page";

// ── Tag badge ────────────────────────────────────────────────────────────────
const tagStyles: Record<string, string> = {
  buidl: "bg-orange-100 text-orange-600 border border-orange-300",
  winner: "bg-yellow-100 text-yellow-700 border border-yellow-300",
  mentor: "bg-blue-100 text-blue-700 border border-blue-300",
  sponsor: "bg-purple-100 text-purple-700 border border-purple-300",
};

function TagBadge({ tag }: { tag: HackerTag }) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold tracking-wide uppercase ${
        tagStyles[tag.variant] ?? "bg-gray-100 text-gray-600 border border-gray-300"
      }`}
    >
      {tag.label}
    </span>
  );
}

// ── Avatar ────────────────────────────────────────────────────────────────────
function Avatar({ hacker }: { hacker: Hacker }) {
  const [errored, setErrored] = useState(false);

  if (hacker.avatarUrl && !errored) {
    return (
      <img
        src={hacker.avatarUrl}
        alt={hacker.username}
        onError={() => setErrored(true)}
        className="w-12 h-12 rounded-full object-cover flex-shrink-0 bg-gray-200"
      />
    );
  }

  const initial = hacker.username.charAt(0).toUpperCase();
  const colors = ["bg-indigo-500", "bg-teal-500", "bg-rose-500", "bg-amber-500", "bg-violet-500", "bg-sky-500"];
  const color = colors[hacker.username.charCodeAt(0) % colors.length];

  return (
    <div
      className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg ${color}`}
    >
      {initial}
    </div>
  );
}

// ── Hacker Card with Expandable Section ───────────────────────────────────────
function HackerCard({ hacker, onAddFriend, onMessage, onViewProfile }: HackerCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2 bg-white border border-gray-200 rounded-2xl hover:shadow-md transition-shadow duration-200 group overflow-hidden">
      <div className="flex items-center gap-4 p-4">
        {/* Expand chevron */}
        <button
          aria-label="Toggle expand"
          onClick={() => setOpen((prev) => !prev)}
          className={`text-gray-300 hover:text-gray-500 transition-transform flex-shrink-0 ${open ? "rotate-90" : ""}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Avatar + Info — clicking navigates to profile */}
        <Link
          href={`/hacker/${hacker.id}`}
          className="flex items-center gap-4 flex-1 min-w-0 cursor-pointer"
        >
          <Avatar hacker={hacker} />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-900 text-sm leading-tight truncate hover:text-orange-500 transition-colors">
              {hacker.username}
            </p>
            {hacker.organization && (
              <p className="text-xs text-gray-400 truncate mt-0.5">{hacker.organization}</p>
            )}
            {hacker.tags && hacker.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-1">
                {hacker.tags.map((tag, i) => (
                  <TagBadge key={i} tag={tag} />
                ))}
              </div>
            )}
            {hacker.bio && (
              <p className="text-xs text-gray-500 mt-1 truncate">{hacker.bio}</p>
            )}
          </div>
        </Link>

        {/* Actions — stop propagation so clicks don't bubble to the Link */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            aria-label="Add friend"
            onClick={(e) => { e.preventDefault(); onAddFriend?.(hacker); }}
            className="p-1.5 rounded-lg text-gray-400 hover:text-black cursor-pointer transition-colors"
          >
            <Title title="Follow">
              <TiUserAdd size={23} className="text-gray-500 hover:text-black cursor-pointer" />
            </Title>
          </button>
          <button
            aria-label="Message"
            onClick={(e) => { e.preventDefault(); onMessage?.(hacker); }}
            className="p-1.5 rounded-lg text-gray-400 hover:text-black cursor-pointer transition-colors"
          >
            <Title title="Message">
              <IoMail size={23} className="text-gray-500 hover:text-black cursor-pointer" />
            </Title>
          </button>
        </div>
      </div>

      {/* Expandable Section */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100 px-4 pb-4" : "max-h-0 opacity-0 px-4"
        }`}
      >
        {hacker.skills && hacker.skills.length > 0 && (
          <div className="mt-2">
            <p className="text-xs text-gray-400 mb-1">Skills</p>
            <div className="flex flex-wrap gap-2">
              {hacker.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 text-sm bg-orange-100 text-orange-600 rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
        {hacker.interests && hacker.interests.length > 0 && (
          <div className="mt-3">
            <p className="text-xs text-gray-400 mb-1">Interests</p>
            <p className="text-sm text-gray-700 leading-relaxed">{hacker.interests.join(", ")}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Search Bar ────────────────────────────────────────────────────────────────
function SearchBar({ placeholder = "search for hackers...", onSearch }: { placeholder?: string; onSearch?: (q: string) => void }) {
  const [query, setQuery] = useState("");
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    onSearch?.(e.target.value);
  }
  return (
    <div className="relative w-64">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full pl-8 pr-3 py-2 text-sm bg-white border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition"
      />
    </div>
  );
}

// ── HackersList ───────────────────────────────────────────────────────────────
export default function HackersList({
  hackers,
  onAddFriend,
  onMessage,
  onViewProfile,
  onSearch,
  searchPlaceholder,
  isLoading = false,
  onLoadMore,
  hasMore = false,
}: HackersListProps & { onLoadMore?: () => void; hasMore?: boolean }) {
  return (
    <div className="font-sans">
      {/* Search */}
      <div className="mb-6">
        <SearchBar placeholder={searchPlaceholder} onSearch={onSearch} />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 auto-rows-max">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => <ThreeBodyLoader key={i} />)
          : hackers.map((hacker) => (
              <HackerCard
                key={hacker.id}
                hacker={hacker}
                onAddFriend={onAddFriend}
                onMessage={onMessage}
                onViewProfile={onViewProfile}
              />
            ))}
      </div>

      {!isLoading && hackers.length === 0 && (
        <p className="text-center text-gray-400 text-sm mt-16">No hackers found.</p>
      )}

      {/* View More */}
      {!isLoading && hasMore && (
        <div className="flex justify-center mt-6">
          <button
            onClick={onLoadMore}
            className="px-6 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
}