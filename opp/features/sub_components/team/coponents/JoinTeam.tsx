
// // JoinTeam.tsx — "Find Your Teammates" section component

// import React, { useEffect, useRef, useState } from "react";
// import {
//   JoinTeamProps,
//   TeamRole,
//   RoleStatus,
//   fetchOpenRoles,
//   contactRole,
//   requestRole,
// } from "@/features/sub_components/team/types/join-team";
// import { IoMail } from "react-icons/io5";
// import {  HiPlus } from "react-icons/hi";
// import { LuUsers } from "react-icons/lu";
// import Title from "@/components/ui/title";
// import Box from "@/components/ui/box";

// // ---------------------------------------------------------------------------
// // Status badge config
// // ---------------------------------------------------------------------------

// const STATUS_CONFIG: Record<
//   RoleStatus,
//   { label: string; color: string; bg: string; dot: string }
// > = {
//   approved: {
//     label: "Approved",
//     color: "#16a34a",
//     bg: "#f0fdf4",
//     dot: "#22c55e",
//   },
//   pending: {
//     label: "Pending",
//     color: "#b45309",
//     bg: "#fffbeb",
//     dot: "#f59e0b",
//   },
//   rejected: {
//     label: "Rejected",
//     color: "#dc2626",
//     bg: "#fef2f2",
//     dot: "#ef4444",
//   },
// };

// // ---------------------------------------------------------------------------
// // Sub-components
// // ---------------------------------------------------------------------------

// function StatusBadge({ status }: { status: RoleStatus }) {
//   const cfg = STATUS_CONFIG[status];
//   return (
//     <Box as="span"
//       style={{
//         display: "inline-flex",
//         alignItems: "center",
//         gap: 5,
//         fontSize: 11,
//         fontWeight: 600,
//         letterSpacing: "0.04em",
//         textTransform: "uppercase",
//         color: cfg.color,
//         background: cfg.bg,
//         border: `1px solid ${cfg.color}22`,
//         borderRadius: 20,
//         padding: "2px 8px 2px 6px",
//       }}
//     >
//       <span
//         style={{
//           width: 6,
//           height: 6,
//           borderRadius: "50%",
//           background: cfg.dot,
//           display: "inline-block",
//           flexShrink: 0,
//         }}
//       />
//       {cfg.label}
//     </Box>
//   );
// }

// function RoleCard({
//   role,
//   onContact,
//   onRequest,
// }: {
//   role: TeamRole;
//   onContact: (role: TeamRole) => void;
//   onRequest: (role: TeamRole) => void;
// }) {
//   const [hovered, setHovered] = useState(false);
//   const [mailHovered, setMailHovered] = useState(false);
//   const [reqHovered, setReqHovered] = useState(false);
//   const [reqLoading, setReqLoading] = useState(false);

//   const handleRequest = async (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setReqLoading(true);
//     await onRequest(role);
//     setReqLoading(false);
//   };

//   const handleMail = (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
//     onContact(role);
//   };

//   const CardWrapper = role.href ? "a" : "div";
//   const wrapperProps = role.href
//     ? { href: role.href, style: { textDecoration: "none" } }
//     : {};

//   return (
//     <CardWrapper {...(wrapperProps as any)}>
//       <div
//         style={{
//           ...styles.card,
//           boxShadow: hovered
//             ? "0 8px 32px rgba(224,123,57,0.10), 0 2px 8px rgba(0,0,0,0.07)"
//             : "0 1px 4px rgba(0,0,0,0.05)",
//           transform: hovered ? "translateY(-2px)" : "translateY(0)",
//           borderColor: hovered ? "#e07b3940" : "#e8e8e8",
//           transition:
//             "transform 0.22s cubic-bezier(.34,1.56,.64,1), box-shadow 0.22s ease, border-color 0.18s ease",
//         }}
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         {/* Logo */}
//         {role.projectLogo ? (
//           <img
//             src={role.projectLogo}
//             alt={role.projectName}
//             style={styles.logo}
//           />
//         ) : (
//           <div style={styles.logoFallback}>
//             {role.projectName.charAt(0).toUpperCase()}
//           </div>
//         )}

//         {/* Body */}
//         <div style={styles.cardBody}>
//           {/* Top row: open badge + status */}
//           <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
//             <span style={styles.openBadge}>
//               {role.openCount} Open Role{role.openCount !== 1 ? "s" : ""}
//             </span>
//             {role.status && <StatusBadge status={role.status} />}
//           </div>

//           <p style={styles.roleTitle}>{role.title}</p>

//           <p style={styles.projectName}>
//             <span style={styles.docIcon}>📄</span>
//             {role.projectName}
//           </p>
//         </div>

//         {/* Actions */}
//         <div style={styles.actions}>
//           {/* Request button */}
//           <Title title="Request to join">

//           <button
//             style={{
//               ...styles.requestBtn,
//               background: reqHovered ? "#e07b39" : "transparent",
//               color: reqHovered ? "#fff" : "#e07b39",
//               transform: reqHovered ? "scale(1.03)" : "scale(1)",
//               transition:
//                 "background 0.18s ease, color 0.18s ease, transform 0.15s ease, box-shadow 0.18s ease",
//               boxShadow: reqHovered
//                 ? "0 4px 12px rgba(224,123,57,0.28)"
//                 : "none",
//               opacity: reqLoading ? 0.6 : 1,
//             }}
//             aria-label={`Request to join ${role.title}`}
//             onClick={handleRequest}
//             onMouseEnter={() => setReqHovered(true)}
//             onMouseLeave={() => setReqHovered(false)}
//             disabled={reqLoading}
//           >
//             <HiPlus size={14} style={{ flexShrink: 0 }} />
//             {reqLoading ? "Sending…" : "Request"}
//           </button>
//     </Title>  

// <Title title="Message">
//             <button
//             style={{
//               ...styles.mailBtn,
//               background: mailHovered ? "#fff4ee" : "transparent",
//               borderColor: mailHovered ? "#e07b3955" : "#e8e8e8",
//               transform: mailHovered ? "scale(1.08)" : "scale(1)",
//               transition:
//                 "background 0.16s ease, border-color 0.16s ease, transform 0.15s ease",
//             }}
//             aria-label={`Contact team for ${role.title}`}
//             onClick={handleMail}
//             onMouseEnter={() => setMailHovered(true)}
//             onMouseLeave={() => setMailHovered(false)}
//           >
//             <IoMail
//               size={18}
//               style={{ color: mailHovered ? "#e07b39" : "#999" }}
//             />
//           </button>
//     </Title>  
//         </div>
//       </div>
//     </CardWrapper>
//   );
// }

// // ---------------------------------------------------------------------------
// // Main component
// // ---------------------------------------------------------------------------

// export default function JoinTeam({
//   roles: rolesProp,
//   onJoinBuidl,
//   onContactRole,
//   onRequestRole,
// }: JoinTeamProps) {
//   const [roles, setRoles] = useState<TeamRole[]>(rolesProp ?? []);

//   useEffect(() => {
//     if (!rolesProp || rolesProp.length === 0) {
//       fetchOpenRoles().then(setRoles);
//     }
//   }, [rolesProp]);

//   const handleContact = async (role: TeamRole) => {
//     if (onContactRole) {
//       onContactRole(role);
//     } else {
//       await contactRole(role.id);
//     }
//   };

//   const handleRequest = async (role: TeamRole) => {
//     if (onRequestRole) {
//       onRequestRole(role);
//     } else {
//       await requestRole(role.id);
//     }
//   };

//   return (
//     <Box as="section" style={styles.section}>
    
//       <Box as="div"  style={styles.left}>
//   <Box as="div" style={styles.iconWrap}>
//     <LuUsers size={22} color="amber-500" />
//   </Box>

//   <Box as="h2" style={styles.heading}>Build Your Dream Team</Box>

//   <Box as="p" style={styles.subtitle}>
//     Discover open roles and team up with builders working on exciting ideas.
//   </Box>

//   <Box as="ul" style={styles.tipList}>
//     <Box as="li" style={styles.tipItem}>
//       <Box as="span" style={styles.highlight}>Already working on a project?</Box>{" "}
//       Turn on "Looking for Teammates" when submitting your Build or update it anytime from "Manage Submission".
//     </Box>

//     <Box as="li" style={styles.tipItem}>
//       <Box as="span" style={styles.highlight}>Just getting started?</Box>{" "}
//       Enable "Looking for Teammates" while registering as a hacker to find collaborators early.
//     </Box>
//   </Box>
// </Box>

//       {/* ── Right column ──────────────────────────────────── */}
//       <Box as="div" style={styles.right}>
//         <Box as="div" style={styles.cardList}>
//           {roles.length === 0 ? (
//             <p style={styles.emptyState}>No open roles at the moment.</p>
//           ) : (
//             roles.map((role) => (
//               <RoleCard
//                 key={role.id}
//                 role={role}
//                 onContact={handleContact}
//                 onRequest={handleRequest}
//               />
//             ))
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// }


// const ORANGE = "#e07b39";
// const ORANGE_BG = "#fff4ee";
// const BORDER = "#e8e8e8";
// const GRAY_TEXT = "#666";
// const DARK = "#111";

// const styles: Record<string, React.CSSProperties> = {
//   section: {
//     display: "grid",
//     gap: 48,
//     gridTemplateColumns: "1fr 1.7fr",
//     padding: "24px 0",
//     fontFamily: "'Geist', 'DM Sans', system-ui, sans-serif",
//     maxWidth: 1500,
//   },

//   // ── Left ──
//   left: {
//     display: "flex",
//     flexDirection: "column",
//     gap: 0,
//   },
//   iconWrap: {
//     display: "inline-flex",
//     alignItems: "center",
//     justifyContent: "center",
//     width: 40,
//     height: 40,
//     background: ORANGE_BG,
//     borderRadius: 10,
//     marginBottom: 14,
//   },
//   heading: {
//     fontSize: 26,
//     fontWeight: 700,
//     color: DARK,
//     margin: "0 0 6px",
//     letterSpacing: "-0.3px",
//   },
//   subtitle: {
//     color: GRAY_TEXT,
//     margin: "0 0 20px",
//     fontSize: 14,
//     lineHeight: 1.6,
//   },
//   tipList: {
//     listStyle: "none",
//     padding: 0,
//     margin: "0 0 24px",
//     display: "flex",
//     flexDirection: "column",
//     gap: 10,
//   },
//   tipItem: {
//     fontSize: 13.5,
//     color: "#444",
//     lineHeight: 1.6,
//     paddingLeft: 14,
//     borderLeft: `2px solid ${ORANGE}33`,
//   },
//   highlight: {
//     color: ORANGE,
//     fontWeight: 600,
//   },
//   joinBtn: {
//     display: "inline-flex",
//     alignItems: "center",
//     gap: 6,
//     border: `1.5px solid ${ORANGE}`,
//     borderRadius: 8,
//     fontWeight: 600,
//     fontSize: 13.5,
//     padding: "9px 16px",
//     cursor: "pointer",
//     alignSelf: "flex-start",
//   },

//   // ── Right ──
//   right: {
//     display: "flex",
//     flexDirection: "column",
//     gap: 16,
//   },
//   cardList: {
//      display: "grid",
//     // flexDirection: "column",
//     gridTemplateColumns:"1fr 1fr",
//     gap: 10,
//   },
//   emptyState: {
//     color: GRAY_TEXT,
//     fontSize: 14,
//     textAlign: "center",
//     padding: "40px 0",
//   },

//   // ── Card ──
//   card: {
//     display: "flex",
//     alignItems: "center",
//     gap: 14,
//     border: `1px solid ${BORDER}`,
//     borderRadius: 12,
//     padding: "14px 16px",
//     background: "#fff",
//     cursor: "pointer",
//   },
//   logo: {
//     width: 44,
//     height: 44,
//     borderRadius: 10,
//     objectFit: "cover",
//     flexShrink: 0,
//   },
//   logoFallback: {
//     width: 44,
//     height: 44,
//     borderRadius: 10,
//     background: ORANGE_BG,
//     color: ORANGE,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontWeight: 700,
//     fontSize: 18,
//     flexShrink: 0,
//   },
//   cardBody: {
//     flex: 1,
//     display: "flex",
//     flexDirection: "column",
//     gap: 3,
//     minWidth: 0,
//   },
//   openBadge: {
//     fontSize: 11,
//     fontWeight: 700,
//     color: ORANGE,
//     letterSpacing: "0.04em",
//     textTransform: "uppercase" as const,
//   },
//   roleTitle: {
//     fontSize: 15,
//     fontWeight: 700,
//     color: DARK,
//     margin: 0,
//     whiteSpace: "nowrap",
//     overflow: "hidden",
//     textOverflow: "ellipsis",
//   },
//   projectName: {
//     fontSize: 12.5,
//     color: GRAY_TEXT,
//     margin: 0,
//     display: "flex",
//     alignItems: "center",
//     gap: 4,
//     whiteSpace: "nowrap",
//     overflow: "hidden",
//     textOverflow: "ellipsis",
//   },
//   docIcon: {
//     fontSize: 12,
//     flexShrink: 0,
//   },
//   actions: {
//     display: "flex",
//     alignItems: "center",
//     gap: 8,
//     flexShrink: 0,
//   },
//   requestBtn: {
//     display: "inline-flex",
//     alignItems: "center",
//     gap: 5,
//     border: `1.5px solid ${ORANGE}`,
//     borderRadius: 7,
//     color: ORANGE,
//     fontWeight: 600,
//     fontSize: 13,
//     padding: "6px 13px",
//     cursor: "pointer",
//     whiteSpace: "nowrap" as const,
//   },
//   mailBtn: {
//     background: "transparent",
//     border: `1px solid ${BORDER}`,
//     borderRadius: 7,
//     width: 34,
//     height: 34,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     cursor: "pointer",
//     flexShrink: 0,
//   },
// };



// JoinTeam.tsx — "Find Your Teammates" section component

import React, { useEffect, useState } from "react";
import {
  JoinTeamProps,
  TeamRole,
  RoleStatus,
  fetchOpenRoles,
  contactRole,
  requestRole,
} from "@/features/sub_components/team/types/join-team";
import { IoMail } from "react-icons/io5";
import { HiPlus } from "react-icons/hi";
import { LuUsers } from "react-icons/lu";
import Title from "@/components/ui/title";
import Box from "@/components/ui/box";

// ---------------------------------------------------------------------------
// Responsive hook
// ---------------------------------------------------------------------------

function useBreakpoint() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return {
    isMobile: width < 640,
    isTablet: width >= 640 && width < 1024,
    isDesktop: width >= 1024,
    width,
  };
}

// ---------------------------------------------------------------------------
// Status badge
// ---------------------------------------------------------------------------

const STATUS_CONFIG: Record<
  RoleStatus,
  { label: string; color: string; bg: string; dot: string }
> = {
  approved: { label: "Approved", color: "#16a34a", bg: "#f0fdf4", dot: "#22c55e" },
  pending:  { label: "Pending",  color: "#b45309", bg: "#fffbeb", dot: "#f59e0b" },
  rejected: { label: "Rejected", color: "#dc2626", bg: "#fef2f2", dot: "#ef4444" },
};

function StatusBadge({ status }: { status: RoleStatus }) {
  const cfg = STATUS_CONFIG[status];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: cfg.color,
        background: cfg.bg,
        border: `1px solid ${cfg.color}30`,
        borderRadius: 20,
        padding: "2px 8px 2px 6px",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: cfg.dot,
          display: "inline-block",
          flexShrink: 0,
        }}
      />
      {cfg.label}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Role card
// ---------------------------------------------------------------------------

function RoleCard({
  role,
  onContact,
  onRequest,
  isMobile,
}: {
  role: TeamRole;
  onContact: (role: TeamRole) => void;
  onRequest: (role: TeamRole) => void;
  isMobile: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [mailHovered, setMailHovered] = useState(false);
  const [reqHovered, setReqHovered] = useState(false);
  const [reqLoading, setReqLoading] = useState(false);

  const handleRequest = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setReqLoading(true);
    await onRequest(role);
    setReqLoading(false);
  };

  const handleMail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onContact(role);
  };

  const CardWrapper = role.href ? "a" : "div";
  const wrapperProps = role.href
    ? { href: role.href, style: { textDecoration: "none", display: "block" } }
    : {};

  return (
    <CardWrapper {...(wrapperProps as any)}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          border: `1px solid ${hovered ? "#e07b3940" : "#e8e8e8"}`,
          borderRadius: 14,
          padding: isMobile ? "14px" : "16px 18px",
          background: "#fff",
          cursor: "pointer",
          boxShadow: hovered
            ? "0 8px 28px rgba(224,123,57,0.10), 0 2px 8px rgba(0,0,0,0.06)"
            : "0 1px 4px rgba(0,0,0,0.04)",
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
          transition:
            "transform 0.22s cubic-bezier(.34,1.56,.64,1), box-shadow 0.22s ease, border-color 0.18s ease",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Top row: logo + info */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          {/* Logo */}
          {role.projectLogo ? (
            <img
              src={role.projectLogo}
              alt={role.projectName}
              style={{
                width: isMobile ? 40 : 44,
                height: isMobile ? 40 : 44,
                borderRadius: 10,
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
          ) : (
            <div
              style={{
                width: isMobile ? 40 : 44,
                height: isMobile ? 40 : 44,
                borderRadius: 10,
                background: "#fff4ee",
                color: "#e07b39",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: isMobile ? 16 : 18,
                flexShrink: 0,
              }}
            >
              {role.projectName.charAt(0).toUpperCase()}
            </div>
          )}

          {/* Text body */}
          <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 3 }}>
            {/* Badges row */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#e07b39",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {role.openCount} Open Role{role.openCount !== 1 ? "s" : ""}
              </span>
              {role.status && <StatusBadge status={role.status} />}
            </div>

            <p
              style={{
                fontSize: isMobile ? 14 : 15,
                fontWeight: 700,
                color: "#111",
                margin: 0,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {role.title}
            </p>

            <p
              style={{
                fontSize: 12,
                color: "#666",
                margin: 0,
                display: "flex",
                alignItems: "center",
                gap: 4,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ fontSize: 11, flexShrink: 0 }}>📄</span>
              {role.projectName}
            </p>
          </div>
        </div>

        {/* Bottom row: actions */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            borderTop: "1px solid #f0f0f0",
            paddingTop: 10,
          }}
        >
          {/* Request button — stretches full width on mobile */}
          <Title title="Request to join">
            <button
              style={{
                flex: isMobile ? 1 : undefined,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
                border: "1.5px solid #e07b39",
                borderRadius: 8,
                color: reqHovered ? "#fff" : "#e07b39",
                background: reqHovered ? "#e07b39" : "transparent",
                fontWeight: 600,
                fontSize: 13,
                padding: isMobile ? "8px 6px" : "7px 14px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                opacity: reqLoading ? 0.6 : 1,
                transform: reqHovered ? "scale(1.02)" : "scale(1)",
                boxShadow: reqHovered ? "0 4px 12px rgba(224,123,57,0.25)" : "none",
                transition: "background 0.18s, color 0.18s, transform 0.15s, box-shadow 0.18s",
              }}
              aria-label={`Request to join ${role.title}`}
              onClick={handleRequest}
              onMouseEnter={() => setReqHovered(true)}
              onMouseLeave={() => setReqHovered(false)}
              disabled={reqLoading}
            >
              <HiPlus size={14} style={{ flexShrink: 0 }} />
              {reqLoading ? "Sending…" : "Request"}
            </button>
          </Title>

          {/* Mail button */}
          <Title title="Message">
            <button
              style={{
                background: mailHovered ? "#fff4ee" : "transparent",
                border: `1px solid ${mailHovered ? "#e07b3955" : "#e8e8e8"}`,
                borderRadius: 8,
                width: isMobile ? 38 : 34,
                height: isMobile ? 38 : 34,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                flexShrink: 0,
                transform: mailHovered ? "scale(1.08)" : "scale(1)",
                transition: "background 0.16s, border-color 0.16s, transform 0.15s",
              }}
              aria-label={`Contact team for ${role.title}`}
              onClick={handleMail}
              onMouseEnter={() => setMailHovered(true)}
              onMouseLeave={() => setMailHovered(false)}
            >
              <IoMail size={17} style={{ color: mailHovered ? "#e07b39" : "#999" }} />
            </button>
          </Title>
        </div>
      </div>
    </CardWrapper>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function JoinTeam({
  roles: rolesProp,
  onJoinBuidl,
  onContactRole,
  onRequestRole,
}: JoinTeamProps) {
  const [roles, setRoles] = useState<TeamRole[]>(rolesProp ?? []);
  const { isMobile, isTablet, isDesktop } = useBreakpoint();

  useEffect(() => {
    if (!rolesProp || rolesProp.length === 0) {
      fetchOpenRoles().then(setRoles);
    }
  }, [rolesProp]);

  const handleContact = async (role: TeamRole) => {
    if (onContactRole) onContactRole(role);
    else await contactRole(role.id);
  };

  const handleRequest = async (role: TeamRole) => {
    if (onRequestRole) onRequestRole(role);
    else await requestRole(role.id);
  };

  // Layout: stacked on mobile+tablet, side-by-side on desktop
  const sectionLayout: React.CSSProperties = isDesktop
    ? { display: "grid", gridTemplateColumns: "1fr 1.7fr", gap: 48, alignItems: "start" }
    : { display: "flex", flexDirection: "column", gap: isMobile ? 24 : 32 };

  // Card grid: 1 col mobile, 2 col tablet+
  const cardGridCols = isMobile ? "1fr" : "1fr 1fr";

  return (
    <Box
      as="section"
      style={{
        ...sectionLayout,
        padding: isMobile ? "16px 0" : "24px 0",
        fontFamily: "'Geist', 'DM Sans', system-ui, sans-serif",
        maxWidth: 1500,
        width: "100%",
      }}
    >
      {/* ── Left ─────────────────────────────────────────── */}
      <Box as="div" style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        <Box
          as="div"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            background: "#fff4ee",
            borderRadius: 10,
            marginBottom: 14,
          }}
        >
          <LuUsers size={20} color="#e07b39" />
        </Box>

        <Box
          as="h2"
          style={{
            fontSize: isMobile ? 20 : 26,
            fontWeight: 700,
            color: "#111",
            margin: "0 0 6px",
            letterSpacing: "-0.3px",
          }}
        >
          Find Your Teammates
        </Box>

        <Box
          as="p"
          style={{
            color: "#666",
            margin: "0 0 18px",
            fontSize: isMobile ? 13.5 : 14,
            lineHeight: 1.6,
          }}
        >
          Discover open roles and team up with builders working on exciting ideas.
        </Box>

        <Box
          as="ul"
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {[
            {
              label: "Already working on a project?",
              body: `Turn on "Looking for Teammates" when submitting your Build or update via "Manage Submission".`,
            },
            {
              label: "Just getting started?",
              body: `Enable "Looking for Teammates" while registering as a hacker to find collaborators early.`,
            },
          ].map(({ label, body }) => (
            <Box
              key={label}
              as="li"
              style={{
                fontSize: isMobile ? 13 : 13.5,
                color: "#444",
                lineHeight: 1.6,
                paddingLeft: 14,
                borderLeft: "2px solid #e07b3933",
              }}
            >
              <Box as="span" style={{ color: "#e07b39", fontWeight: 600 }}>
                {label}
              </Box>{" "}
              {body}
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── Right ────────────────────────────────────────── */}
      <Box as="div" style={{ width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: cardGridCols,
            gap: isMobile ? 8 : 10,
          }}
        >
          {roles.length === 0 ? (
            <p
              style={{
                color: "#666",
                fontSize: 14,
                textAlign: "center",
                padding: "40px 0",
                gridColumn: "1 / -1",
              }}
            >
              No open roles at the moment.
            </p>
          ) : (
            roles.map((role) => (
              <RoleCard
                key={role.id}
                role={role}
                onContact={handleContact}
                onRequest={handleRequest}
                isMobile={isMobile}
              />
            ))
          )}
        </div>
      </Box>
    </Box>
  );
}