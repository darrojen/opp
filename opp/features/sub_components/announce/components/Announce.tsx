

// // Announce.tsx — Main Announcements Component (Responsive)

// "use client";

// import React, { useEffect, useState } from "react";


// import OutlineSidebar from "./OutlineSidebar";
// import MobileOutlineTabs from "./MobileOutlineTabs";
// import { Announcement, AnnounceProps, fetchAnnouncements } from "@/features/sub_components/announce/types/announce";
// import AnnouncementCard from "@/features/sub_components/announce/components/AnnouncementCard";

// export default function Announce({
//   announcements: announcementsProp,
//   onSelect,
// }: AnnounceProps) {
//   const [announcements, setAnnouncements] = useState<Announcement[]>(
//     announcementsProp ?? []
//   );
//   const [activeId, setActiveId] = useState("");
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 768);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   useEffect(() => {
//     if (!announcementsProp || announcementsProp.length === 0) {
//       fetchAnnouncements().then((data) => {
//         setAnnouncements(data);
//         if (data.length > 0) setActiveId(data[0].id);
//       });
//     } else if (announcementsProp.length > 0) {
//       setActiveId(announcementsProp[0].id);
//     }
//   }, [announcementsProp]);

//   const handleOutlineSelect = (id: string) => {
//     setActiveId(id);
//     const el = document.getElementById(`ann-${id}`);
//     if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   const handleCardClick = (item: Announcement) => {
//     setActiveId(item.id);
//     onSelect?.(item);
//   };

//   return (
//     <div
//       style={{
//         fontFamily: "'DM Sans', system-ui, sans-serif",
//         maxWidth: 1620,
//         width: "100%",
//         margin: "0 auto",
//         padding: "24px 16px",
//       }}
//     >
//       {/* Mobile Outline Tabs */}
//       {isMobile && announcements.length > 0 && (
//         <MobileOutlineTabs
//           items={announcements}
//           activeId={activeId}
//           onSelect={handleOutlineSelect}
//         />
//       )}

//       <div
//         style={{
//           display: "grid",
//           gap: isMobile ? 40 : 72,
//           gridTemplateColumns: isMobile ? "1fr" : "280px 1fr",
//           alignItems: "flex-start",
//         }}
//       >
//         {/* Desktop Sidebar */}
//         {!isMobile && announcements.length > 0 && (
//           <OutlineSidebar
//             items={announcements}
//             activeId={activeId}
//             onSelect={handleOutlineSelect}
//           />
//         )}

//         {/* Cards Container */}
//         <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 32 }}>
//           {announcements.length === 0 ? (
//             <p style={{ 
//               color: "#9ca3af", 
//               fontSize: 16, 
//               textAlign: "center", 
//               padding: "100px 20px" 
//             }}>
//               No announcements yet.
//             </p>
//           ) : (
//             announcements.map((item) => (
//               <AnnouncementCard
//                 key={item.id}
//                 item={item}
//                 isActive={activeId === item.id}
//                 onClick={() => handleCardClick(item)}
//               />
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }









"use client";

import React, { useEffect, useState } from "react";

import { 
  AnnounceProps,
  Announcement,
  ANNOUNCEMENT_TYPE_CONFIG, 
  fetchAnnouncements 
} from "@/features/sub_components/announce/types/announce";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// TypeBadge
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// AnnouncementCard - Modern & Mobile Optimized
// ---------------------------------------------------------------------------

function AnnouncementCard({
  item,
  isActive,
  onClick,
}: {
  item: Announcement;
  isActive: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      id={`ann-${item.id}`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 16,
        border: `1px solid ${isActive ? "#e07b3940" : hovered ? "#e07b3922" : "#e5e7eb"}`,
        padding: "28px 32px",
        background: "#fff",
        cursor: "pointer",
        boxShadow: hovered
          ? "0 12px 40px rgba(224,123,57,0.10), 0 2px 8px rgba(0,0,0,0.06)"
          : "0 4px 20px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.25s ease",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 20,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          {item.pinned && (
            <span style={{ 
              fontSize: 11, 
              color: "#e07b39", 
              fontWeight: 700, 
              letterSpacing: "0.05em" 
            }}>
              📌 PINNED
            </span>
          )}
          <TypeBadge type={item.type} />
        </div>
        <span style={{ 
          fontSize: 13, 
          color: "#9ca3af", 
          whiteSpace: "nowrap", 
          flexShrink: 0 
        }}>
          {formatDate(item.publishedAt)}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: 21,
          fontWeight: 700,
          color: "#111827",
          margin: "0 0 14px 0",
          lineHeight: 1.35,
        }}
      >
        {item.title}
      </h3>

      {/* Body */}
      <p
        style={{
          fontSize: 15.5,
          color: "#374151",
          margin: "0 0 22px",
          lineHeight: 1.75,
        }}
      >
        {item.body}
      </p>

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {item.author.avatarUrl ? (
          <img
            src={item.author.avatarUrl}
            alt={item.author.name}
            style={{ width: 28, height: 28, borderRadius: "50%", objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "#fff4ee",
              color: "#e07b39",
              fontSize: 11,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {initials(item.author.name)}
          </div>
        )}
        <span style={{ fontSize: 13.5, color: "#6b7280" }}>
          {item.author.name}
          {item.author.role && (
            <span
              style={{
                marginLeft: 8,
                fontSize: 11,
                fontWeight: 600,
                color: "#e07b39",
                background: "#fff4ee",
                borderRadius: 6,
                padding: "2px 8px",
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

// ---------------------------------------------------------------------------
// Mobile Outline Tabs (Horizontal Scroll)
// ---------------------------------------------------------------------------

function MobileOutlineTabs({
  items,
  activeId,
  onSelect,
}: {
  items: Announcement[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div style={{
      marginBottom: 32,
      overflowX: "auto",
      WebkitOverflowScrolling: "touch",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    }}>
      <div style={{
        display: "flex",
        gap: 12,
        paddingBottom: 8,
      }}>
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            style={{
              padding: "10px 20px",
              borderRadius: 9999,
              border: "none",
              background: activeId === item.id ? "#e07b39" : "#f3f4f6",
              color: activeId === item.id ? "#ffffff" : "#4b5563",
              fontSize: 14,
              fontWeight: activeId === item.id ? 600 : 500,
              whiteSpace: "nowrap",
              cursor: "pointer",
              transition: "all 0.2s ease",
              flexShrink: 0,
            }}
          >
            {item.title.length > 45 
              ? item.title.substring(0, 42) + "..." 
              : item.title}
          </button>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Desktop Outline Sidebar - No Left Border
// ---------------------------------------------------------------------------

function OutlineSidebar({
  items,
  activeId,
  onSelect,
}: {
  items: Announcement[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div style={{ position: "sticky", top: 80, width: 260, flexShrink: 0 }}>
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#9ca3af",
          margin: "0 0 16px",
        }}
      >
        OUTLINE
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            style={{
              background: "none",
              border: "none",
              textAlign: "left",
              padding: "10px 16px",
              borderRadius: 8,
              fontSize: 14.5,
              color: activeId === item.id ? "#e07b39" : "#6b7280",
              fontWeight: activeId === item.id ? 600 : 500,
              cursor: "pointer",
              lineHeight: 1.5,
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

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export default function Announce({
  announcements: announcementsProp,
  eventTitle,
  onSelect,
}: AnnounceProps) {
  const [announcements, setAnnouncements] = useState<Announcement[]>(
    announcementsProp ?? []
  );
  const [activeId, setActiveId] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!announcementsProp || announcementsProp.length === 0) {
      fetchAnnouncements().then((data) => {
        setAnnouncements(data);
        if (data.length > 0) setActiveId(data[0].id);
      });
    } else if (announcementsProp.length > 0) {
      setActiveId(announcementsProp[0].id);
    }
  }, [announcementsProp]);

  const handleOutlineSelect = (id: string) => {
    setActiveId(id);
    const el = document.getElementById(`ann-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCardClick = (item: Announcement) => {
    setActiveId(item.id);
    onSelect?.(item);
  };

  return (
    <div
      style={{
        fontFamily: "'DM Sans', system-ui, sans-serif",
        maxWidth: 1600,
        width: "100%",
        margin: "0 auto",
        padding: "20px 16px",
      }}
    >
      {/* Mobile Tabs */}
      {isMobile && announcements.length > 0 && (
        <MobileOutlineTabs
          items={announcements}
          activeId={activeId}
          onSelect={handleOutlineSelect}
        />
      )}

      <div
        style={{
          display: "grid",
          gap: isMobile ? 32 : 60,
          gridTemplateColumns: isMobile ? "1fr" : "260px 1fr",
          alignItems: "flex-start",
        }}
      >
        {/* Desktop Sidebar */}
        {!isMobile && announcements.length > 0 && (
          <OutlineSidebar
            items={announcements}
            activeId={activeId}
            onSelect={handleOutlineSelect}
          />
        )}

        {/* Main Content */}
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 24 }}>
          {announcements.length === 0 ? (
            <p style={{ 
              color: "#9ca3af", 
              fontSize: 15, 
              textAlign: "center", 
              padding: "80px 20px" 
            }}>
              No announcements yet.
            </p>
          ) : (
            announcements.map((item) => (
              <AnnouncementCard
                key={item.id}
                item={item}
                isActive={activeId === item.id}
                onClick={() => handleCardClick(item)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}


