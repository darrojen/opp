

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Build, TeamMember } from "../types";
import { HoverProfileCard } from "@/components/layout/HoverProfileCardData";
import Box from "@/components/ui/box";

interface BuildTeamProps {
  build: Build;
}

// ─── Colour maps ──────────────────────────────────────────────────────────────

const ROLE_COLORS: Record<string, { bg: string; color: string }> = {
  "Product Lead": { bg: "#E1F5EE", color: "#0F6E56" },
  Engineer:       { bg: "#E6F1FB", color: "#185FA5" },
  Designer:       { bg: "#EEEDFE", color: "#534AB7" },
  PM:             { bg: "#FAEEDA", color: "#854F0B" },
  QA:             { bg: "#FAECE7", color: "#993C1D" },
  Owner:          { bg: "#E1F5EE", color: "#0F6E56" },
  default:        { bg: "#F1EFE8", color: "#5F5E5A" },
};

const FALLBACK_COLORS = [
  { bg: "#9FE1CB", color: "#085041" },
  { bg: "#B5D4F4", color: "#0C447C" },
  { bg: "#F5C4B3", color: "#712B13" },
  { bg: "#C0DD97", color: "#27500A" },
  { bg: "#FAC775", color: "#633806" },
  { bg: "#F4C0D1", color: "#72243E" },
];

function getInitials(name: string) {
  return name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();
}

function getFallbackColor(index: number) {
  return FALLBACK_COLORS[index % FALLBACK_COLORS.length];
}

function getRoleColor(role: string) {
  return ROLE_COLORS[role] ?? ROLE_COLORS.default;
}

// ─── Avatar ───────────────────────────────────────────────────────────────────

function Avatar({
  name,
  avatar,
  colorIndex,
  size,
  ringColor,
}: {
  name: string;
  avatar?: string;
  colorIndex: number;
  size: number;
  ringColor?: string;
}) {
  const [imgError, setImgError] = useState(false);
  const fallback = getFallbackColor(colorIndex);

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: fallback.bg,
        color: fallback.color,
        fontSize: Math.round(size * 0.32),
        fontWeight: 500,
        outline: ringColor ? `2px solid ${ringColor}` : undefined,
        outlineOffset: ringColor ? 2 : undefined,
      }}
    >
      {avatar && !imgError ? (
        <Image
          src={avatar}
          alt={name}
          width={size}
          height={size}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={() => setImgError(true)}
        />
      ) : (
        getInitials(name)
      )}
    </div>
  );
}

// ─── Role badge ───────────────────────────────────────────────────────────────

function RoleBadge({ role }: { role: string }) {
  const rc = getRoleColor(role);
  return (
    <span
      style={{
        display: "inline-flex",
        fontSize: 10,
        fontWeight: 500,
        padding: "2px 8px",
        borderRadius: 20,
        background: rc.bg,
        color: rc.color,
      }}
    >
      {role}
    </span>
  );
}

// ─── Lead badge ───────────────────────────────────────────────────────────────

function LeadBadge() {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 3,
        fontSize: 10,
        fontWeight: 500,
        color: "#0F6E56",
        background: "#E1F5EE",
        border: "0.5px solid #5DCAA5",
        padding: "2px 7px 2px 5px",
        borderRadius: 20,
      }}
    >
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "#1D9E75",
          display: "inline-block",
        }}
      />
      Lead
    </span>
  );
}

// ─── Roster strip ─────────────────────────────────────────────────────────────

function RosterStrip({ team }: { team: TeamMember[] }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        marginBottom: "1.5rem",
      }}
    >
      {team.map((member, i) => {
        const isLead = !!member.isLead;
        return (
<Box as="div" key={member.id}>

                    <HoverProfileCard
              profile={{
                name: member.name, // ✅ map it here
                handle: member.name,
                avatarUrl: member.avatar,
                bio: 'I am',
                following: 2,
                followers: 123,
                // messageUrl: profile.messageUrl,
                // profileUrl: ,
              }}
            >
              {/* <span
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: '#111827',
                  textAlign: 'center',
                  lineHeight: 1.3,
                  wordBreak: 'break-word',
                }}
              >
                {member.name}
              </span> */}
               <a
            key={member.id}
            href={member.url ?? "#"}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 7,
              padding: "14px 12px",
              border: isLead ? "0.5px solid #5DCAA5" : "0.5px solid #e5e7eb",
              borderRadius: 12,
              background: isLead ? "#E1F5EE" : "#fff",
              textDecoration: "none",
              flex: "1 1 80px",
              minWidth: 80,
              maxWidth: 110,
              transition: "border-color .15s, background .15s",
            }}
          >
            <Avatar
              name={member.name}
              avatar={member.avatar}
              colorIndex={i}
              size={isLead ? 48 : 40}
              ringColor={isLead ? "#5DCAA5" : undefined}
            />
            <span
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "#111827",
                textAlign: "center",
                lineHeight: 1.3,
                wordBreak: "break-word",
              }}
            >
              {member.name}
            </span>


            
            {isLead ? (
              <LeadBadge />
            ) : (
              <span style={{ fontSize: 10, color: "#9ca3af", textAlign: "center" }}>
                {member.role}
              </span>
            )}
          </a>
            </HoverProfileCard>
            </Box>
         
        );
      })}
    </div>
  );
}

// ─── Member card ─────────────────────────────────────────────────────────────

function MemberCard({
  member,
  colorIndex,
}: {
  member: TeamMember;
  colorIndex: number;
}) {
  return (
    <a
      href={member.url ?? "#"}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 12px",
        borderRadius: 10,
        border: "1px solid #f3f4f6",
        background: "#fafafa",
        textDecoration: "none",
        transition: "border-color .15s, background .15s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.background = "#f3f4f6";
        (e.currentTarget as HTMLAnchorElement).style.borderColor = "#e5e7eb";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.background = "#fafafa";
        (e.currentTarget as HTMLAnchorElement).style.borderColor = "#f3f4f6";
      }}
    >
      <Avatar
        name={member.name}
        avatar={member.avatar}
        colorIndex={colorIndex}
        size={36}
      />
      <div style={{ minWidth: 0 }}>
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#111827",
            margin: 0,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {member.name}
        </p>
        {member.role && (
          <div style={{ marginTop: 3 }}>
            <RoleBadge role={member.role} />
          </div>
        )}
      </div>
    </a>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function BuildTeam({ build }: BuildTeamProps) {
  const lead = build.team.find((m) => m.isLead) ?? build.team[0];
  const allMembers = build.team.filter((m) => m.id !== lead.id);

  return (
    <div>
      <h3
        style={{
          fontSize: 15,
          fontWeight: 600,
          color: "#111827",
          marginBottom: 16,
        }}
      >
        Team
      </h3>

      {/* ── Roster strip ── */}
      <RosterStrip team={build.team} />

      {/* ── Lead row ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: 16,
          marginBottom: 16,
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Avatar
            name={lead.name}
            avatar={lead.avatar}
            colorIndex={0}
            size={44}
            ringColor="#5DCAA5"
          />
          <div>
            <p style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: 0 }}>
              {lead.name}
            </p>
            <p style={{ fontSize: 13, color: "#9ca3af", margin: "2px 0 0" }}>
              {lead.role ?? "Team Lead"}
            </p>
          </div>
        </div>

        <a
          href={lead.url ?? "#"}
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "8px 18px",
            borderRadius: 8,
            background: "#f97316",
            color: "#fff",
            fontSize: 14,
            fontWeight: 500,
            textDecoration: "none",
            transition: "background .15s",
            flexShrink: 0,
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.background = "#ea6c0a")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.background = "#f97316")
          }
        >
          Message
        </a>
      </div>

      {/* ── Members grid ── */}
      {allMembers.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 8,
          }}
        >
          {allMembers.map((member, i) => (
            <MemberCard key={member.id} member={member} colorIndex={i + 1} />
          ))}
        </div>
      )}
    </div>
  );
}