"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Upvoter } from "../types";

interface UpvotersProps {
  upvoters: Upvoter[];
}

// ─── Avatar ───────────────────────────────────────────────────────────────────

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

function Avatar({ upvoter, index }: { upvoter: Upvoter; index: number }) {
  const [imgError, setImgError] = useState(false);
  const fallback = FALLBACK_COLORS[index % FALLBACK_COLORS.length];

  return (
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        overflow: "hidden",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: fallback.bg,
        color: fallback.color,
        fontSize: 14,
        fontWeight: 500,
      }}
    >
      {upvoter.avatar && !imgError ? (
        <Image
          src={upvoter.avatar}
          alt={upvoter.name}
          width={44}
          height={44}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={() => setImgError(true)}
        />
      ) : (
        getInitials(upvoter.name)
      )}
    </div>
  );
}

// ─── Single upvoter row ───────────────────────────────────────────────────────

function UpvoterRow({
  upvoter,
  index,
}: {
  upvoter: Upvoter;
  index: number;
}) {
  const [following, setFollowing] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        padding: "14px 0",
        borderBottom: "1px solid #f3f4f6",
      }}
    >
      {/* Avatar */}
      <a href={upvoter.url ?? "#"} style={{ textDecoration: "none", flexShrink: 0 }}>
        <Avatar upvoter={upvoter} index={index} />
      </a>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
          <a
            href={upvoter.url ?? "#"}
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "#111827",
              textDecoration: "none",
              lineHeight: 1.3,
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.textDecoration = "none")
            }
          >
            {upvoter.name}
          </a>
        </div>

        {upvoter.handle && (
          <p
            style={{
              fontSize: 13,
              color: "#9ca3af",
              margin: "1px 0 0",
              fontWeight: 400,
            }}
          >
            {upvoter.handle.startsWith("@") ? upvoter.handle : `@${upvoter.handle}`}
          </p>
        )}

        {upvoter.bio && (
          <p
            style={{
              fontSize: 14,
              color: "#374151",
              margin: "6px 0 0",
              lineHeight: 1.55,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {upvoter.bio}
          </p>
        )}
      </div>

      {/* Follow button */}
      <button
        onClick={() => setFollowing((v) => !v)}
        style={{
          flexShrink: 0,
          padding: "8px 20px",
          borderRadius: 8,
          border: "none",
          background: following ? "#f3f4f6" : "#f97316",
          color: following ? "#374151" : "#fff",
          fontSize: 14,
          fontWeight: 600,
          cursor: "pointer",
          transition: "background .15s, color .15s",
          whiteSpace: "nowrap",
          alignSelf: "flex-start",
          marginTop: 2,
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLButtonElement;
          el.style.background = following ? "#e5e7eb" : "#ea6c0a";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLButtonElement;
          el.style.background = following ? "#f3f4f6" : "#f97316";
        }}
      >
        {following ? "Following" : "Follow"}
      </button>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function Upvoters({ upvoters }: UpvotersProps) {
  const [showAll, setShowAll] = useState(false);

  const INITIAL_COUNT = 5;
  const visible = showAll ? upvoters : upvoters.slice(0, INITIAL_COUNT);
  const hidden = upvoters.length - INITIAL_COUNT;

  if (upvoters.length === 0) {
    return (
      <p style={{ fontSize: 13, color: "#9ca3af", padding: "16px 0" }}>
        No upvoters yet.
      </p>
    );
  }

  return (
    <div>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 4,
        }}
      >
        <h3 style={{ fontSize: 15, fontWeight: 700, color: "#111827", margin: 0 }}>
          Upvoters
        </h3>
        <span style={{ fontSize: 13, color: "#9ca3af" }}>
          {upvoters.length} total
        </span>
      </div>

      {/* List */}
      <div>
        {visible.map((upvoter, i) => (
          <UpvoterRow key={upvoter.id} upvoter={upvoter} index={i} />
        ))}
      </div>

      {/* Show more / less */}
      {upvoters.length > INITIAL_COUNT && (
        <button
          onClick={() => setShowAll((v) => !v)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            marginTop: 12,
            fontSize: 13,
            fontWeight: 500,
            color: "#6b7280",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px 0",
            transition: "color .15s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.color = "#111827")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.color = "#6b7280")
          }
        >
          <span
            style={{
              display: "inline-flex",
              transition: "transform .25s cubic-bezier(.34,1.56,.64,1)",
              transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 4L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          {showAll ? "Show less" : `Show ${hidden} more`}
        </button>
      )}
    </div>
  );
}