

'use client';

import { useState } from 'react';
import Image from 'next/image';

// ─── Types ────────────────────────────────────────────────────────────────────

export type TeamMember = {
  id: string | number;
  name: string;
  role: string;    // e.g. "Engineer" | "Designer" | "PM" | "QA"
  title: string;   // e.g. "Senior Frontend Engineer"
  avatar?: string; // URL – falls back to initials if omitted or broken
  url?: string;
  isLead?: boolean;
};

export type Build = {
  team: TeamMember[];
};

// ─── Colour maps ──────────────────────────────────────────────────────────────

const ROLE_COLORS: Record<string, { bg: string; color: string }> = {
  'Product Lead': { bg: '#E1F5EE', color: '#0F6E56' },
  Engineer:       { bg: '#E6F1FB', color: '#185FA5' },
  Designer:       { bg: '#EEEDFE', color: '#534AB7' },
  PM:             { bg: '#FAEEDA', color: '#854F0B' },
  QA:             { bg: '#FAECE7', color: '#993C1D' },
  default:        { bg: '#F1EFE8', color: '#5F5E5A' },
};

const FALLBACK_COLORS = [
  { bg: '#9FE1CB', color: '#085041' },
  { bg: '#B5D4F4', color: '#0C447C' },
  { bg: '#F5C4B3', color: '#712B13' },
  { bg: '#C0DD97', color: '#27500A' },
  { bg: '#FAC775', color: '#633806' },
  { bg: '#F4C0D1', color: '#72243E' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getInitials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function getFallbackColor(index: number) {
  return FALLBACK_COLORS[index % FALLBACK_COLORS.length];
}

function getRoleColor(role: string) {
  return ROLE_COLORS[role] ?? ROLE_COLORS.default;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

type AvatarProps = {
  member: TeamMember;
  colorIndex: number;
  size: number;
  ringColor?: string;
};

function Avatar({ member, colorIndex, size, ringColor }: AvatarProps) {
  const [imgError, setImgError] = useState(false);
  const fallback = getFallbackColor(colorIndex);
  const fontSize = Math.round(size * 0.32);

  const containerStyle: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: '50%',
    overflow: 'hidden',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: ringColor ? `2px solid ${ringColor}` : undefined,
    outlineOffset: ringColor ? 2 : undefined,
  };

  const fallbackStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: fallback.bg,
    color: fallback.color,
    fontSize,
    fontWeight: 500,
  };

  return (
    <div style={containerStyle}>
      {member.avatar && !imgError ? (
        <Image
          src={member.avatar}
          alt={member.name}
          width={size}
          height={size}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={() => setImgError(true)}
        />
      ) : (
        <div style={fallbackStyle}>{getInitials(member.name)}</div>
      )}
    </div>
  );
}

// ─── Roster strip (top) ───────────────────────────────────────────────────────

export function RosterStrip({ team }: { team: TeamMember[] }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        marginBottom: '1.5rem',
      }}
    >
      {team.map((member, i) => {
        const isLead = !!member.isLead;
        return (
          <a
            key={member.id}
            href={member.url ?? '#'}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 7,
              padding: '14px 12px',
              border: isLead ? '0.5px solid #5DCAA5' : '0.5px solid #e5e7eb',
              borderRadius: 12,
              background: isLead ? '#E1F5EE' : '#fff',
              textDecoration: 'none',
              flex: '1 1 80px',
              minWidth: 80,
              maxWidth: 110,
              transition: 'border-color .15s, background .15s',
              animationDelay: `${i * 0.06}s`,
            }}
            className="roster-card"
          >
            <Avatar
              member={member}
              colorIndex={i}
              size={isLead ? 48 : 40}
              ringColor={isLead ? '#5DCAA5' : undefined}
            />

            <span
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: '#111',
                textAlign: 'center',
                lineHeight: 1.3,
                wordBreak: 'break-word',
              }}
            >
              {member.name}
            </span>

            {isLead ? (
              <LeadBadge />
            ) : (
              <span
                style={{
                  fontSize: 10,
                  color: '#9ca3af',
                  textAlign: 'center',
                }}
              >
                {member.role}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}

// ─── Lead badge ───────────────────────────────────────────────────────────────

function LeadBadge() {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 3,
        fontSize: 10,
        fontWeight: 500,
        color: '#0F6E56',
        background: '#E1F5EE',
        border: '0.5px solid #5DCAA5',
        padding: '2px 7px 2px 5px',
        borderRadius: 20,
      }}
    >
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: '50%',
          background: '#1D9E75',
          display: 'inline-block',
        }}
      />
      Lead
    </span>
  );
}

// ─── Member row ───────────────────────────────────────────────────────────────

function MemberRow({
  member,
  colorIndex,
  animDelay,
}: {
  member: TeamMember;
  colorIndex: number;
  animDelay: number;
}) {
  const rc = getRoleColor(member.role);

  return (
    <a
      href={member.url ?? '#'}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '8px 10px',
        border: '0.5px solid #e5e7eb',
        borderRadius: 8,
        textDecoration: 'none',
        transition: 'border-color .15s, background .15s',
        animationDelay: `${animDelay * 0.07}s`,
      }}
    >
      <Avatar member={member} colorIndex={colorIndex} size={34} />

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 500, color: '#111' }}>
          {member.name}
        </div>
        <div
          style={{
            display: 'inline-flex',
            fontSize: 10,
            padding: '2px 7px',
            borderRadius: 12,
            fontWeight: 500,
            marginTop: 2,
            background: rc.bg,
            color: rc.color,
          }}
        >
          {member.role}
        </div>
      </div>

      <div
        style={{
          fontSize: 12,
          color: '#9ca3af',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: 160,
          textAlign: 'right',
        }}
      >
        {member.title}
      </div>
    </a>
  );
}

// ─── Chevron icon ─────────────────────────────────────────────────────────────

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        transition: 'transform .25s cubic-bezier(.34,1.56,.64,1)',
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      }}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2 4L6 8L10 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

// ─── Members icon ─────────────────────────────────────────────────────────────

function MembersIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M11 7C12.1046 7 13 6.10457 13 5C13 3.89543 12.1046 3 11 3"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M13 11C14.3333 11.6667 15 12.5 15 13"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="6.5" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M1 13C1 11 3.46243 9.5 6.5 9.5C9.53757 9.5 12 11 12 13"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

const TeamSection = ({ build }: { build: Build }) => {
  const [showAll, setShowAll] = useState(false);

  const lead = build.team.find((m) => m.isLead) ?? build.team[0];
  const members = build.team.filter((m) => m.id !== lead.id);
  const visibleMembers = members.slice(0, 3);
  const hiddenMembers = members.slice(3);

  return (
    <div style={{ fontFamily: 'inherit', maxWidth: 480 }}>
      {/* ── Roster strip ── */}
      {/* <RosterStrip team={build.team} /> */}

      {/* ── Detail panel ── */}
      <div
        style={{
          background: '#fff',
          border: '0.5px solid #e5e7eb',
          borderRadius: 12,
          padding: '1.25rem',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            color: '#9ca3af',
            marginBottom: '1rem',
          }}
        >
          <MembersIcon />
          Members
          <span
            style={{
              background: '#f3f4f6',
              color: '#6b7280',
              fontSize: 10,
              padding: '1px 7px',
              borderRadius: 20,
              textTransform: 'none',
              letterSpacing: 0,
              fontWeight: 400,
            }}
          >
            {build.team.length}
          </span>
        </div>

        {/* Lead row */}
        <a
          href={lead.url ?? '#'}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '10px 12px',
            borderRadius: 8,
            border: '0.5px solid #e5e7eb',
            background: '#f9fafb',
            textDecoration: 'none',
            marginBottom: '1rem',
            transition: 'border-color .15s, background .15s',
          }}
        >
          <Avatar
            member={lead}
            colorIndex={0}
            size={42}
            ringColor="#5DCAA5"
          />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: '#111' }}>
              {lead.name}
            </div>
            <div style={{ fontSize: 12, color: '#6b7280', marginTop: 2 }}>
              {lead.title}
            </div>
          </div>
          <LeadBadge />
        </a>

        {/* Visible members */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {visibleMembers.map((m, i) => (
            <MemberRow key={m.id} member={m} colorIndex={i + 1} animDelay={i} />
          ))}
        </div>

        {/* Show more toggle */}
        {hiddenMembers.length > 0 && (
          <>
            <div
              style={{
                height: '0.5px',
                background: '#e5e7eb',
                margin: '0.875rem 0',
              }}
            />

            <button
              onClick={() => setShowAll((v) => !v)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                fontSize: 12,
                fontWeight: 500,
                color: '#6b7280',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px 0',
                transition: 'color .15s',
              }}
            >
              <ChevronIcon open={showAll} />
              {showAll ? 'Show less' : `Show ${hiddenMembers.length} more`}
            </button>

            {/* Animated expand */}
            <div
              style={{
                overflow: 'hidden',
                maxHeight: showAll ? 600 : 0,
                opacity: showAll ? 1 : 0,
                transition: 'max-height .3s cubic-bezier(.22,1,.36,1), opacity .25s ease',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                  paddingTop: '0.75rem',
                }}
              >
                {hiddenMembers.map((m, i) => (
                  <MemberRow
                    key={m.id}
                    member={m}
                    colorIndex={visibleMembers.length + i + 1}
                    animDelay={i}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TeamSection;