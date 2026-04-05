'use client';

import Box from '@/components/ui/box';
import Title from '@/components/ui/title';
import Image from 'next/image';
import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { IoMail } from 'react-icons/io5';
import { TiUserAdd } from 'react-icons/ti';

// ── Types ─────────────────────────────────────────────────────────────────────

export interface HoverProfileCardData {
  name: string;
  handle: string;
  avatarUrl?: string;
  bio?: string;
  following: number;
  followers: number;
  messageUrl?: string;
  profileUrl?: string;
}

interface HoverProfileCardProps {
  profile: HoverProfileCardData;
  children: React.ReactNode;
}

interface PopoverPosition {
  top: number;
  left: number;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

function AvatarFallback({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map(w => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
  return (
    <div className="w-14 h-14 rounded-full bg-linear-to-br from-gray-700 to-gray-900 flex items-center justify-center shrink-0 ring-2 ring-white">
      <span className="text-white text-sm font-semibold tracking-wide">
        {initials}
      </span>
    </div>
  );
}

// ── Popover card (rendered into document.body via portal) ─────────────────────

function ProfilePopover({
  profile,
  position,
  onMouseEnter,
  onMouseLeave,
}: {
  profile: HoverProfileCardData;
  position: PopoverPosition;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return createPortal(
    <>
      <style>{`
        @keyframes hpcIn {
          from { opacity: 0; transform: translateY(-8px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
      `}</style>
      <Box
        as="div"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
          position: 'fixed',
          top: position.top,
          left: position.left,
          zIndex: 99999,
          width: '288px',
          animation: 'hpcIn 0.18s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        }}
        className="rounded-2xl shadow-2xl border border-gray-100 bg-white overflow-hidden"
      >
        {/* Top section */}
        <div className="p-4 pb-3">
          <div className="flex items-start justify-between mb-3">
            {profile.avatarUrl ? (
              <Image
                src={profile.avatarUrl}
                alt={profile.name}
                className="w-14 h-14 rounded-full object-cover shrink-0 ring-2 ring-white shadow-sm"
                // fill
                width={59}
                height={59}
              />
            ) : (
              <AvatarFallback name={profile.name} />
            )}

            <div className="flex items-center gap-2 mt-1">
              <Title title="Follow">
                <TiUserAdd
                  size={23}
                  className="text-gray-500 hover:text-black cursor-pointer"
                />
              </Title>
              <Title title="Message">
                <IoMail
                  size={23}
                  className="text-gray-500 hover:text-black cursor-pointer"
                />
              </Title>
            </div>
          </div>

          <div>
            <p className="font-bold text-gray-900 text-[14px] leading-snug tracking-tight">
              {profile.name}
            </p>
            <p className="text-gray-400 text-xs mt-0.5 font-mono">
              {profile.handle}
            </p>
          </div>

          {profile.bio && (
            <p className="text-gray-600 text-[12px] mt-2.5 leading-relaxed line-clamp-2">
              {profile.bio}
            </p>
          )}
        </div>

        <div className="h-px bg-gray-100 mx-4" />

        {/* Stats row */}
        <div className="flex items-center gap-5 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="text-gray-900 text-[13px] font-bold tabular-nums">
              {formatCount(profile.following)}
            </span>
            <span className="text-gray-400 text-[12px]">Following</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-gray-900 text-[13px] font-bold tabular-nums">
              {formatCount(profile.followers)}
            </span>
            <span className="text-gray-400 text-[12px]">Followers</span>
          </div>
        </div>
      </Box>
    </>,
    document.body,
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export function HoverProfileCard({ profile, children }: HoverProfileCardProps) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<PopoverPosition>({
    top: 0,
    left: 0,
  });
  const triggerRef = useRef<HTMLSpanElement>(null);
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearHide = useCallback(() => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
  }, []);

  const scheduleHide = useCallback(() => {
    hideTimeout.current = setTimeout(() => setOpen(false), 150);
  }, []);

  const show = useCallback(() => {
    clearHide();
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const CARD_HEIGHT = 200;
      const CARD_WIDTH = 288;
      const GAP = 8;

      const spaceBelow = window.innerHeight - rect.bottom;
      const top =
        spaceBelow >= CARD_HEIGHT + GAP
          ? rect.bottom + GAP
          : rect.top - CARD_HEIGHT - GAP;

      const left = Math.min(rect.left, window.innerWidth - CARD_WIDTH - GAP);

      setPosition({ top, left });
    }
    setOpen(true);
  }, [clearHide]);

  useEffect(() => () => clearHide(), [clearHide]);

  return (
    <Box
      as="span"
      ref={triggerRef}
      className="relative inline-block"
      onMouseEnter={show}
      onMouseLeave={scheduleHide}
    >
      {children}
      {open && (
        <ProfilePopover
          profile={profile}
          position={position}
          onMouseEnter={clearHide}
          onMouseLeave={scheduleHide}
        />
      )}
    </Box>
  );
}
