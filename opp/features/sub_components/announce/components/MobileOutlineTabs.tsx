// MobileOutlineTabs.tsx
"use client";

import { Announcement } from "@/features/sub_components/announce/types/announce";
import React from "react";

interface MobileOutlineTabsProps {
  items: Announcement[];
  activeId: string;
  onSelect: (id: string) => void;
}

export default function MobileOutlineTabs({ items, activeId, onSelect }: MobileOutlineTabsProps) {
  return (
    <div
      style={{
        marginBottom: 32,
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div style={{ display: "flex", gap: 10, paddingBottom: 12 }}>
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            style={{
              padding: "12px 24px",
              borderRadius: 9999,
              border: "none",
              background: activeId === item.id ? "#e07b39" : "#f8fafc",
              color: activeId === item.id ? "#ffffff" : "#475569",
              fontSize: 14.5,
              fontWeight: activeId === item.id ? 600 : 500,
              whiteSpace: "nowrap",
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: activeId === item.id ? "0 2px 8px rgba(224,123,57,0.2)" : "none",
            }}
          >
            {item.title.length > 50 ? item.title.substring(0, 47) + "..." : item.title}
          </button>
        ))}
      </div>
    </div>
  );
}