// OutlineSidebar.tsx
"use client";

import { Announcement } from "@/features/sub_components/announce/types/announce";
import React from "react";

interface OutlineSidebarProps {
  items: Announcement[];
  activeId: string;
  onSelect: (id: string) => void;
}

export default function OutlineSidebar({ items, activeId, onSelect }: OutlineSidebarProps) {
  return (
    <div style={{ position: "sticky", top: 80, width: 280, flexShrink: 0 }}>
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#9ca3af",
          marginBottom: 18,
        }}
      >
        OUTLINE
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            style={{
              background: "none",
              border: "none",
              textAlign: "left",
              padding: "11px 18px",
              borderRadius: 10,
              fontSize: 15,
              color: activeId === item.id ? "#e07b39" : "#64748b",
              fontWeight: activeId === item.id ? 600 : 500,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}