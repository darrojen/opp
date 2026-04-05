// AnnouncementCard.tsx
"use client";

import React, { useState } from "react";
import { Announcement,  ANNOUNCEMENT_TYPE_CONFIG } from "@/features/sub_components/announce/types/announce";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function TypeBadge({ type }: { type: Announcement["type"] }) {
  const cfg = ANNOUNCEMENT_TYPE_CONFIG[type];
  if (type === "general") return null;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: cfg.color,
        background: cfg.bg,
        border: `1px solid ${cfg.color}25`,
        borderRadius: 20,
        padding: "2px 8px",
      }}
    >
      {cfg.icon} {cfg.label}
    </span>
  );
}

interface AnnouncementCardProps {
  item: Announcement;
  isActive: boolean;
  onClick: () => void;
}

export default function AnnouncementCard({ item, isActive, onClick }: AnnouncementCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      id={`ann-${item.id}`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20,
        border: `1px solid ${isActive ? "#e07b3940" : hovered ? "#e07b3922" : "#e5e7eb"}`,
        padding: "32px 36px",
        background: "#fff",
        cursor: "pointer",
        boxShadow: hovered
          ? "0 20px 50px rgba(224,123,57,0.12), 0 4px 15px rgba(0,0,0,0.07)"
          : "0 8px 25px rgba(0,0,0,0.06), 0 1px 6px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Curved top accent (matching the screenshot style) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          background: "linear-gradient(90deg, #e07b39, #f5a06b)",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 24,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          {item.pinned && (
            <span style={{ fontSize: 11, color: "#e07b39", fontWeight: 700, letterSpacing: "0.05em" }}>
              📌 PINNED
            </span>
          )}
          <TypeBadge type={item.type} />
        </div>
        <span style={{ fontSize: 13, color: "#9ca3af", whiteSpace: "nowrap" }}>
          {formatDate(item.publishedAt)}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: "#111827",
          margin: "0 0 16px 0",
          lineHeight: 1.3,
          letterSpacing: "-0.015em",
        }}
      >
        {item.title}
      </h3>

      {/* Body */}
      <p
        style={{
          fontSize: 16,
          color: "#374151",
          margin: "0 0 24px",
          lineHeight: 1.78,
        }}
      >
        {item.body}
      </p>

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {item.author.avatarUrl ? (
          <img
            src={item.author.avatarUrl}
            alt={item.author.name}
            style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "#fff4ee",
              color: "#e07b39",
              fontSize: 12,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {initials(item.author.name)}
          </div>
        )}
        <span style={{ fontSize: 14, color: "#6b7280" }}>
          {item.author.name}
          {item.author.role && (
            <span
              style={{
                marginLeft: 8,
                fontSize: 12,
                fontWeight: 600,
                color: "#e07b39",
                background: "#fff4ee",
                borderRadius: 6,
                padding: "3px 9px",
              }}
            >
              {item.author.role}
            </span>
          )}
        </span>
      </div>
    </div>
  );
}

