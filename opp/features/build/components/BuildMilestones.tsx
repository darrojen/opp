
// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { Build, Milestone } from "../types";

// interface BuildMilestonesProps {
//   build: Build;
// }

// // ─── Helpers ──────────────────────────────────────────────────────────────────

// function formatDate(dateStr: string) {
//   const d = new Date(dateStr);
//   return {
//     month: d.toLocaleDateString("en-US", { month: "short" }),
//     day: String(d.getDate()).padStart(2, "0"),
//     year: d.getFullYear(),
//     full: d.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//     }).replace(/\//g, "/"),
//   };
// }

// function formatLabel(dateStr: string, type?: string) {
//   const d = new Date(dateStr);
//   const dateLabel = d.toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//   }).replace(/(\d+)\/(\d+)\/(\d+)/, "$3/$1/$2");
//   return type ? `${dateLabel} · ${type}` : dateLabel;
// }

// // ─── Category type badge colours ─────────────────────────────────────────────

// const TYPE_COLORS: Record<string, { bg: string; color: string; dot: string }> = {
//   Onboarding:              { bg: "#E6F1FB", color: "#185FA5", dot: "#378ADD" },
//   "Hackathon participation": { bg: "#EEEDFE", color: "#534AB7", dot: "#7F77DD" },
//   Launch:                  { bg: "#E1F5EE", color: "#0F6E56", dot: "#1D9E75" },
//   Milestone:               { bg: "#FAEEDA", color: "#854F0B", dot: "#BA7517" },
//   Achievement:             { bg: "#EAF3DE", color: "#3B6D11", dot: "#639922" },
//   default:                 { bg: "#F1EFE8", color: "#5F5E5A", dot: "#888780" },
// };

// function getTypeColor(type?: string) {
//   return TYPE_COLORS[type ?? ""] ?? TYPE_COLORS.default;
// }

// // ─── Single milestone card ────────────────────────────────────────────────────

// function MilestoneCard({
//   milestone,
//   index,
// }: {
//   milestone: Milestone;
//   index: number;
// }) {
//   const isLeft = index % 2 === 0;
//   const tc = getTypeColor(milestone.type);
//   const date = milestone.date ? formatDate(milestone.date) : null;

//   const card = (
//     <div
//       style={{
//         background: "#fff",
//         border: "1px solid #f0f0f0",
//         borderRadius: 12,
//         padding: "16px 18px",
//         flex: 1,
//         minWidth: 0,
//         transition: "border-color .15s, box-shadow .15s",
//         cursor: "default",
//       }}
//       onMouseEnter={(e) => {
//         (e.currentTarget as HTMLDivElement).style.borderColor = "#e5e7eb";
//         (e.currentTarget as HTMLDivElement).style.boxShadow =
//           "0 2px 8px rgba(0,0,0,0.06)";
//       }}
//       onMouseLeave={(e) => {
//         (e.currentTarget as HTMLDivElement).style.borderColor = "#f0f0f0";
//         (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
//       }}
//     >
//       {/* Card top row: image (optional) + title */}
//       <div
//         style={{
//           display: "flex",
//           alignItems: "flex-start",
//           justifyContent: "space-between",
//           gap: 12,
//         }}
//       >
//         <div style={{ flex: 1, minWidth: 0 }}>
//           <p
//             style={{
//               fontSize: 15,
//               fontWeight: 700,
//               color: "#111827",
//               margin: 0,
//               lineHeight: 1.4,
//             }}
//           >
//             {milestone.title}
//           </p>
//           {milestone.description && (
//             <p
//               style={{
//                 fontSize: 13,
//                 color: "#6b7280",
//                 margin: "6px 0 0",
//                 lineHeight: 1.6,
//               }}
//             >
//               {milestone.description}
//             </p>
//           )}
//           {/* Due date for incomplete */}
//           {milestone.dueDate && !milestone.completed && (
//             <p
//               style={{
//                 fontSize: 11,
//                 color: "#9ca3af",
//                 margin: "8px 0 0",
//               }}
//             >
//               Due{" "}
//               {new Date(milestone.dueDate).toLocaleDateString("en-US", {
//                 month: "short",
//                 day: "numeric",
//                 year: "numeric",
//               })}
//             </p>
//           )}
//         </div>

//         {/* Cover image */}
//         {milestone.coverImage && (
//           <div
//             style={{
//               width: 88,
//               height: 64,
//               borderRadius: 8,
//               overflow: "hidden",
//               flexShrink: 0,
//               background: "#f3f4f6",
//             }}
//           >
//             <Image
//               src={milestone.coverImage}
//               alt={milestone.title}
//               width={88}
//               height={64}
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//           </div>
//         )}
//       </div>

//       {/* Photo strip */}
//       {milestone.photos && milestone.photos.length > 0 && (
//         <div
//           style={{
//             display: "flex",
//             gap: 6,
//             marginTop: 12,
//           }}
//         >
//           {milestone.photos.slice(0, 4).map((photo, pi) => (
//             <div
//               key={pi}
//               style={{
//                 width: 56,
//                 height: 42,
//                 borderRadius: 6,
//                 overflow: "hidden",
//                 background: "#f3f4f6",
//                 flexShrink: 0,
//               }}
//             >
//               <Image
//                 src={photo}
//                 alt=""
//                 width={56}
//                 height={42}
//                 style={{ width: "100%", height: "100%", objectFit: "cover" }}
//               />
//             </div>
//           ))}
//           {milestone.photos.length > 4 && (
//             <div
//               style={{
//                 width: 56,
//                 height: 42,
//                 borderRadius: 6,
//                 background: "#f3f4f6",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontSize: 12,
//                 color: "#6b7280",
//                 fontWeight: 500,
//                 flexShrink: 0,
//               }}
//             >
//               +{milestone.photos.length - 4}
//             </div>
//           )}
//         </div>
//       )}

//       {/* Completed badge */}
//       {milestone.completed && (
//         <div style={{ marginTop: 10 }}>
//           <span
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: 4,
//               fontSize: 11,
//               fontWeight: 500,
//               color: "#0F6E56",
//               background: "#E1F5EE",
//               padding: "2px 8px 2px 6px",
//               borderRadius: 20,
//             }}
//           >
//             <span
//               style={{
//                 width: 5,
//                 height: 5,
//                 borderRadius: "50%",
//                 background: "#1D9E75",
//                 display: "inline-block",
//               }}
//             />
//             Completed
//           </span>
//         </div>
//       )}
//     </div>
//   );

//   const dateBlock = date && (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: isLeft ? "flex-end" : "flex-start",
//         justifyContent: "flex-start",
//         paddingTop: 14,
//         width: 56,
//         flexShrink: 0,
//       }}
//     >
//       <span
//         style={{ fontSize: 12, color: "#9ca3af", fontWeight: 400, lineHeight: 1 }}
//       >
//         {date.month}
//       </span>
//       <span
//         style={{
//           fontSize: 26,
//           fontWeight: 700,
//           color: "#111827",
//           lineHeight: 1.1,
//           letterSpacing: "-0.5px",
//         }}
//       >
//         {date.day}
//       </span>
//       <span style={{ fontSize: 12, color: "#9ca3af", fontWeight: 400 }}>
//         {date.year}
//       </span>
//     </div>
//   );

//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "flex-start",
//         gap: 0,
//         width: "100%",
//         position: "relative",
//       }}
//     >
//       {isLeft ? (
//         <>
//           {/* Card left, date right of spine */}
//           <div style={{ flex: 1, paddingRight: 20 }}>{card}</div>

//           {/* Spine dot */}
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               width: 20,
//               flexShrink: 0,
//             }}
//           >
//             <div
//               style={{
//                 width: 12,
//                 height: 12,
//                 borderRadius: "50%",
//                 background: tc.dot,
//                 border: "2px solid #fff",
//                 outline: `2px solid ${tc.dot}`,
//                 outlineOffset: 1,
//                 marginTop: 18,
//                 flexShrink: 0,
//                 zIndex: 1,
//               }}
//             />
//           </div>

//           {/* Date block */}
//           <div style={{ width: 56, paddingLeft: 12 }}>{dateBlock}</div>
//         </>
//       ) : (
//         <>
//           {/* Date left of spine */}
//           <div style={{ width: 56, paddingRight: 12 }}>
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "flex-end",
//                 paddingTop: 14,
//               }}
//             >
//               {date && (
//                 <>
//                   <span style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1 }}>
//                     {date.month}
//                   </span>
//                   <span
//                     style={{
//                       fontSize: 26,
//                       fontWeight: 700,
//                       color: "#111827",
//                       lineHeight: 1.1,
//                       letterSpacing: "-0.5px",
//                     }}
//                   >
//                     {date.day}
//                   </span>
//                   <span style={{ fontSize: 12, color: "#9ca3af" }}>{date.year}</span>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Spine dot */}
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               width: 20,
//               flexShrink: 0,
//             }}
//           >
//             <div
//               style={{
//                 width: 12,
//                 height: 12,
//                 borderRadius: "50%",
//                 background: tc.dot,
//                 border: "2px solid #fff",
//                 outline: `2px solid ${tc.dot}`,
//                 outlineOffset: 1,
//                 marginTop: 18,
//                 flexShrink: 0,
//                 zIndex: 1,
//               }}
//             />
//           </div>

//           {/* Card right */}
//           <div style={{ flex: 1, paddingLeft: 20 }}>{card}</div>
//         </>
//       )}
//     </div>
//   );
// }

// // ─── Main component ───────────────────────────────────────────────────────────

// export function BuildMilestones({ build }: BuildMilestonesProps) {
//   const milestones = build.milestones ?? [];
//   const completed = milestones.filter((m) => m.completed).length;
//   const pct = milestones.length
//     ? Math.round((completed / milestones.length) * 100)
//     : 0;

//   return (
//     <div>
//       {/* ── Header ── */}
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           marginBottom: 16,
//         }}
//       >
//         <h3 style={{ fontSize: 15, fontWeight: 700, color: "#111827", margin: 0 }}>
//           Milestones
//         </h3>
//         <span style={{ fontSize: 13, color: "#9ca3af" }}>
//           {completed} / {milestones.length} completed
//         </span>
//       </div>

//       {/* ── Progress bar ── */}
//       <div
//         style={{
//           width: "100%",
//           background: "#f3f4f6",
//           borderRadius: 99,
//           height: 5,
//           marginBottom: 28,
//           overflow: "hidden",
//         }}
//       >
//         <div
//           style={{
//             width: `${pct}%`,
//             height: "100%",
//             background: "#1D9E75",
//             borderRadius: 99,
//             transition: "width .5s cubic-bezier(.22,1,.36,1)",
//           }}
//         />
//       </div>

//       {/* ── Timeline ── */}
//       {milestones.length === 0 ? (
//         <p style={{ fontSize: 13, color: "#9ca3af", textAlign: "center", padding: "24px 0" }}>
//           No milestones yet.
//         </p>
//       ) : (
//         <div style={{ position: "relative" }}>
//           {/* Vertical spine */}
//           <div
//             style={{
//               position: "absolute",
//               left: "calc(50% - 0.5px)",
//               top: 0,
//               bottom: 0,
//               width: 1,
//               background: "#e5e7eb",
//               zIndex: 0,
//             }}
//           />

//           <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
//             {milestones.map((milestone, i) => (
//               <MilestoneCard key={milestone.id} milestone={milestone} index={i} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




// "use client";

// import React from "react";
// import Image from "next/image";
// import { Build, Milestone } from "../types";

// interface BuildMilestonesProps {
//   build: Build;
// }

// // ─── Helpers ─────────────────────────────────────────────

// function formatDate(dateStr: string) {
//   const d = new Date(dateStr);
//   return {
//     month: d.toLocaleDateString("en-US", { month: "short" }),
//     day: String(d.getDate()).padStart(2, "0"),
//     year: d.getFullYear(),
//   };
// }

// function getRandomImage(seed: number) {
//   return `https://picsum.photos/seed/milestone-${seed}/100/80`;
// }

// // ─── Card ────────────────────────────────────────────────

// function MilestoneCard({
//   milestone,
//   index,
// }: {
//   milestone: Milestone;
//   index: number;
// }) {
//   const isLeft = index % 2 === 0;
//   const date = milestone.date ? formatDate(milestone.date) : null;

//   const images =
//     milestone.photos?.length
//       ? milestone.photos
//       : [getRandomImage(index), getRandomImage(index + 1)];

//   const CardContent = (
//     <div
//       style={{
//         display: "flex",
//         background: "#fff",
//         border: "1px solid #e5e7eb",
//         borderRadius: 12,
//         overflow: "hidden",
//         minWidth: 260,
//         maxWidth: 360,
//       }}
//     >
//       {/* Content */}
//       <div style={{ padding: 14, flex: 1 }}>
//         <p
//           style={{
//             fontWeight: 600,
//             fontSize: 14,
//             color: "#111827",
//             margin: 0,
//           }}
//         >
//           {milestone.title}
//         </p>

//         {milestone.description && (
//           <p
//             style={{
//               fontSize: 12,
//               color: "#6b7280",
//               marginTop: 6,
//               lineHeight: 1.5,
//             }}
//           >
//             {milestone.description}
//           </p>
//         )}

//         {/* Images row */}
//         <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
//           {images.slice(0, 3).map((img, i) => (
//             <div
//               key={i}
//               style={{
//                 width: 40,
//                 height: 32,
//                 borderRadius: 6,
//                 overflow: "hidden",
//                 background: "#f3f4f6",
//               }}
//             >
//               <Image
//                 src={img}
//                 alt=""
//                 width={40}
//                 height={32}
//                 style={{ objectFit: "cover" }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Date panel */}
//       {date && (
//         <div
//           style={{
//             width: 70,
//             borderLeft: "1px solid #f1f1f1",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             padding: 10,
//             background: "#fafafa",
//           }}
//         >
//           <span style={{ fontSize: 11, color: "#9ca3af" }}>
//             {date.month}
//           </span>
//           <span style={{ fontSize: 20, fontWeight: 700 }}>
//             {date.day}
//           </span>
//           <span style={{ fontSize: 11, color: "#9ca3af" }}>
//             {date.year}
//           </span>
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         width: "100%",
//         position: "relative",
//       }}
//     >
//       {isLeft ? (
//         <>
//           {/* Card */}
//           <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", paddingRight: 20 }}>
//             <div style={{ position: "relative" }}>
//               {CardContent}

//               {/* pointer */}
//               <div
//                 style={{
//                   position: "absolute",
//                   right: -6,
//                   top: 20,
//                   width: 12,
//                   height: 12,
//                   background: "#fff",
//                   borderRight: "1px solid #e5e7eb",
//                   borderBottom: "1px solid #e5e7eb",
//                   transform: "rotate(-45deg)",
//                 }}
//               />
//             </div>
//           </div>

//           {/* Dot */}
//           <div style={{ width: 20, display: "flex", justifyContent: "center" }}>
//             <div
//               style={{
//                 width: 10,
//                 height: 10,
//                 borderRadius: "50%",
//                 background: "#3b82f6",
//               }}
//             />
//           </div>

//           <div style={{ flex: 1 }} />
//         </>
//       ) : (
//         <>
//           <div style={{ flex: 1 }} />

//           {/* Dot */}
//           <div style={{ width: 20, display: "flex", justifyContent: "center" }}>
//             <div
//               style={{
//                 width: 10,
//                 height: 10,
//                 borderRadius: "50%",
//                 background: "#3b82f6",
//               }}
//             />
//           </div>

//           {/* Card */}
//           <div style={{ flex: 1, paddingLeft: 20 }}>
//             <div style={{ position: "relative" }}>
//               {CardContent}

//               {/* pointer */}
//               <div
//                 style={{
//                   position: "absolute",
//                   left: -6,
//                   top: 20,
//                   width: 12,
//                   height: 12,
//                   background: "#fff",
//                   borderLeft: "1px solid #e5e7eb",
//                   borderTop: "1px solid #e5e7eb",
//                   transform: "rotate(-45deg)",
//                 }}
//               />
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// // ─── Main ────────────────────────────────────────────────

// export function BuildMilestones({ build }: BuildMilestonesProps) {
//   const milestones = build.milestones ?? [];

//   return (
//     <div style={{ position: "relative" }}>
//       {/* Spine */}
//       <div
//         style={{
//           position: "absolute",
//           left: "50%",
//           top: 0,
//           bottom: 0,
//           width: 2,
//           background: "#e5e7eb",
//         }}
//       />

//       <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
//         {milestones.map((m, i) => (
//           <MilestoneCard key={m.id} milestone={m} index={i} />
//         ))}
//       </div>
//     </div>
//   );
// }



// "use client";

// import React from "react";
// import Image from "next/image";
// import { Build, Milestone } from "../types";

// interface BuildMilestonesProps {
//   build: Build;
// }

// // ─── Helpers ──────────────────────────────────────────────────────────────────

// function formatDate(dateStr: string) {
//   const d = new Date(dateStr);
//   return {
//     month: d.toLocaleDateString("en-US", { month: "short" }),
//     day: String(d.getDate()).padStart(2, "0"),
//     year: d.getFullYear(),
//   };
// }

// // ─── Type label colours ───────────────────────────────────────────────────────

// const TYPE_COLORS: Record<string, { dot: string; label: string }> = {
//   Onboarding:               { dot: "#378ADD", label: "#185FA5" },
//   "Hackathon participation": { dot: "#7F77DD", label: "#534AB7" },
//   Launch:                   { dot: "#1D9E75", label: "#0F6E56" },
//   Milestone:                { dot: "#BA7517", label: "#854F0B" },
//   Achievement:              { dot: "#639922", label: "#3B6D11" },
//   default:                  { dot: "#888780", label: "#5F5E5A" },
// };

// function getTypeColor(type?: string) {
//   return TYPE_COLORS[type ?? ""] ?? TYPE_COLORS.default;
// }

// // ─── Card ─────────────────────────────────────────────────────────────────────

// function MilestoneCard({
//   milestone,
//   index,
// }: {
//   milestone: Milestone;
//   index: number;
// }) {
//   const isLeft = index % 2 === 0;
//   const date = milestone.date ? formatDate(milestone.date) : null;
//   const tc = getTypeColor(milestone.type);

//   const photos = milestone.photos ?? [];
//   const hasCover = !!milestone.coverImage;

//   // ── inner card ──────────────────────────────────────────
//   const card = (
//     <div
//       style={{
//         background: "#fff",
//         border: "1px solid #e9eaec",
//         borderRadius: 12,
//         overflow: "hidden",
//         display: "flex",
//         minWidth: 0,
//         transition: "border-color .15s, box-shadow .15s",
//       }}
//       onMouseEnter={(e) => {
//         const el = e.currentTarget as HTMLDivElement;
//         el.style.borderColor = "#d1d5db";
//         el.style.boxShadow = "0 4px 16px rgba(0,0,0,0.07)";
//       }}
//       onMouseLeave={(e) => {
//         const el = e.currentTarget as HTMLDivElement;
//         el.style.borderColor = "#e9eaec";
//         el.style.boxShadow = "none";
//       }}
//     >
//       {/* ── main body ── */}
//       <div style={{ flex: 1, padding: "14px 16px", minWidth: 0 }}>
//         {/* type chip */}
//         {milestone.type && (
//           <span
//             style={{
//               display: "inline-block",
//               fontSize: 10,
//               fontWeight: 500,
//               color: tc.label,
//               background: `${tc.dot}18`,
//               padding: "2px 8px",
//               borderRadius: 20,
//               marginBottom: 7,
//               letterSpacing: "0.02em",
//             }}
//           >
//             {milestone.type}
//           </span>
//         )}

//         <p
//           style={{
//             fontWeight: 700,
//             fontSize: 14,
//             color: "#111827",
//             margin: 0,
//             lineHeight: 1.4,
//           }}
//         >
//           {milestone.title}
//         </p>

//         {milestone.description && (
//           <p
//             style={{
//               fontSize: 12,
//               color: "#6b7280",
//               marginTop: 5,
//               lineHeight: 1.6,
//               display: "-webkit-box",
//               WebkitLineClamp: 2,
//               WebkitBoxOrient: "vertical",
//               overflow: "hidden",
//             }}
//           >
//             {milestone.description}
//           </p>
//         )}

//         {/* photo strip */}
//         {photos.length > 0 && (
//           <div style={{ display: "flex", gap: 5, marginTop: 10 }}>
//             {photos.slice(0, 3).map((src, pi) => (
//               <div
//                 key={pi}
//                 style={{
//                   width: 44,
//                   height: 34,
//                   borderRadius: 6,
//                   overflow: "hidden",
//                   background: "#f3f4f6",
//                   flexShrink: 0,
//                 }}
//               >
//                 <Image
//                   src={src}
//                   alt=""
//                   width={44}
//                   height={34}
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//               </div>
//             ))}
//             {photos.length > 3 && (
//               <div
//                 style={{
//                   width: 44,
//                   height: 34,
//                   borderRadius: 6,
//                   background: "#f3f4f6",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: 11,
//                   color: "#6b7280",
//                   fontWeight: 500,
//                   flexShrink: 0,
//                 }}
//               >
//                 +{photos.length - 3}
//               </div>
//             )}
//           </div>
//         )}

//         {/* due date */}
//         {milestone.dueDate && !milestone.completed && (
//           <p style={{ fontSize: 11, color: "#9ca3af", marginTop: 8 }}>
//             Due{" "}
//             {new Date(milestone.dueDate).toLocaleDateString("en-US", {
//               month: "short",
//               day: "numeric",
//               year: "numeric",
//             })}
//           </p>
//         )}

//         {/* completed badge */}
//         {milestone.completed && (
//           <div style={{ marginTop: 9 }}>
//             <span
//               style={{
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: 4,
//                 fontSize: 10,
//                 fontWeight: 500,
//                 color: "#0F6E56",
//                 background: "#E1F5EE",
//                 padding: "2px 8px 2px 6px",
//                 borderRadius: 20,
//               }}
//             >
//               <span
//                 style={{
//                   width: 5,
//                   height: 5,
//                   borderRadius: "50%",
//                   background: "#1D9E75",
//                   display: "inline-block",
//                 }}
//               />
//               Completed
//             </span>
//           </div>
//         )}
//       </div>

//       {/* ── cover image / date panel ── */}
//       {hasCover ? (
//         <div
//           style={{
//             width: 96,
//             flexShrink: 0,
//             overflow: "hidden",
//             background: "#f3f4f6",
//             position: "relative",
//           }}
//         >
//           <Image
//             src={milestone.coverImage!}
//             alt={milestone.title}
//             fill
//             style={{ objectFit: "cover" }}
//           />
//         </div>
//       ) : date ? (
//         <div
//           style={{
//             width: 68,
//             flexShrink: 0,
//             borderLeft: "1px solid #f0f0f0",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             padding: "10px 6px",
//             background: "#fafafa",
//             gap: 0,
//           }}
//         >
//           <span style={{ fontSize: 11, color: "#9ca3af", fontWeight: 400 }}>
//             {date.month}
//           </span>
//           <span
//             style={{
//               fontSize: 22,
//               fontWeight: 700,
//               color: "#111827",
//               lineHeight: 1.1,
//               letterSpacing: "-0.5px",
//             }}
//           >
//             {date.day}
//           </span>
//           <span style={{ fontSize: 11, color: "#9ca3af", fontWeight: 400 }}>
//             {date.year}
//           </span>
//         </div>
//       ) : null}
//     </div>
//   );

//   // ── pointer arrow ─────────────────────────────────────
//   const pointer = (side: "left" | "right") => (
//     <div
//       style={{
//         position: "absolute",
//         [side]: -6,
//         top: 22,
//         width: 11,
//         height: 11,
//         background: "#fff",
//         border: "1px solid #e9eaec",
//         borderRight: side === "left" ? "none" : "1px solid #e9eaec",
//         borderBottom: side === "left" ? "none" : "1px solid #e9eaec",
//         borderLeft: side === "right" ? "none" : "1px solid #e9eaec",
//         borderTop: side === "right" ? "none" : "1px solid #e9eaec",
//         transform: side === "left" ? "rotate(45deg)" : "rotate(-135deg)",
//         zIndex: 1,
//       }}
//     />
//   );

//   // ── dot ───────────────────────────────────────────────
//   const dot = (
//     <div
//       style={{
//         width: 10,
//         height: 10,
//         borderRadius: "50%",
//         background: tc.dot,
//         border: "2px solid #fff",
//         outline: `2px solid ${tc.dot}`,
//         outlineOffset: 1,
//         flexShrink: 0,
//         zIndex: 1,
//       }}
//     />
//   );

//   // ── date label above card (Image 1 style) ────────────
//   const dateLabel = milestone.date && (
//     <div
//       style={{
//         fontSize: 12,
//         color: "#9ca3af",
//         fontWeight: 400,
//         marginBottom: 6,
//         paddingLeft: isLeft ? 0 : 2,
//       }}
//     >
//       {(() => {
//         const d = new Date(milestone.date);
//         const ymd = `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}`;
//         return milestone.type ? (
//           <>
//             <span style={{ color: "#6b7280", fontWeight: 500 }}>{ymd}</span>
//             <span style={{ margin: "0 4px" }}>·</span>
//             <span style={{ color: tc.label, fontWeight: 500 }}>{milestone.type}</span>
//           </>
//         ) : (
//           <span style={{ color: "#6b7280", fontWeight: 500 }}>{ymd}</span>
//         );
//       })()}
//     </div>
//   );

//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         width: "100%",
//         position: "relative",
//       }}
//     >
//       {isLeft ? (
//         <>
//           {/* Left side: label + card */}
//           <div
//             style={{
//               flex: 1,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "flex-end",
//               paddingRight: 24,
//             }}
//           >
//             {dateLabel}
//             <div style={{ position: "relative", width: "100%" }}>
//               {card}
//               {pointer("right")}
//             </div>
//           </div>

//           {/* Centre dot */}
//           <div
//             style={{
//               width: 20,
//               display: "flex",
//               justifyContent: "center",
//               flexShrink: 0,
//             }}
//           >
//             {dot}
//           </div>

//           {/* Right spacer */}
//           <div style={{ flex: 1 }} />
//         </>
//       ) : (
//         <>
//           {/* Left spacer */}
//           <div style={{ flex: 1 }} />

//           {/* Centre dot */}
//           <div
//             style={{
//               width: 20,
//               display: "flex",
//               justifyContent: "center",
//               flexShrink: 0,
//             }}
//           >
//             {dot}
//           </div>

//           {/* Right side: label + card */}
//           <div
//             style={{
//               flex: 1,
//               display: "flex",
//               flexDirection: "column",
//               paddingLeft: 24,
//             }}
//           >
//             {dateLabel}
//             <div style={{ position: "relative", width: "100%" }}>
//               {card}
//               {pointer("left")}
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// // ─── Main component ───────────────────────────────────────────────────────────

// export function BuildMilestones({ build }: BuildMilestonesProps) {
//   const milestones = build.milestones ?? [];
//   const completed = milestones.filter((m) => m.completed).length;
//   const pct = milestones.length
//     ? Math.round((completed / milestones.length) * 100)
//     : 0;

//   return (
//     <div>
//       {/* ── Header ── */}
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           marginBottom: 14,
//         }}
//       >
//         <h3
//           style={{ fontSize: 15, fontWeight: 700, color: "#111827", margin: 0 }}
//         >
//           Milestones
//         </h3>
//         <span style={{ fontSize: 13, color: "#9ca3af" }}>
//           {completed}&nbsp;/&nbsp;{milestones.length} completed
//         </span>
//       </div>

//       {/* ── Progress bar ── */}
//       <div
//         style={{
//           width: "100%",
//           background: "#f3f4f6",
//           borderRadius: 99,
//           height: 4,
//           marginBottom: 32,
//           overflow: "hidden",
//         }}
//       >
//         <div
//           style={{
//             width: `${pct}%`,
//             height: "100%",
//             background: "#1D9E75",
//             borderRadius: 99,
//             transition: "width .5s cubic-bezier(.22,1,.36,1)",
//           }}
//         />
//       </div>

//       {/* ── Timeline ── */}
//       {milestones.length === 0 ? (
//         <p
//           style={{
//             fontSize: 13,
//             color: "#9ca3af",
//             textAlign: "center",
//             padding: "32px 0",
//           }}
//         >
//           No milestones yet.
//         </p>
//       ) : (
//         <div style={{ position: "relative" }}>
//           {/* Spine */}
//           <div
//             style={{
//               position: "absolute",
//               left: "calc(50% - 1px)",
//               top: 0,
//               bottom: 0,
//               width: 2,
//               background: "#e9eaec",
//               zIndex: 0,
//             }}
//           />
//           <div
//             style={{ display: "flex", flexDirection: "column", gap: 28 }}
//           >
//             {milestones.map((m, i) => (
//               <MilestoneCard key={m.id} milestone={m} index={i} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



"use client";

import React from "react";
import Image from "next/image";
import { Build, Milestone } from "../types";

interface BuildMilestonesProps {
  build: Build;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return {
    month: d.toLocaleDateString("en-US", { month: "short" }),
    day: String(d.getDate()).padStart(2, "0"),
    year: d.getFullYear(),
  };
}

function fallbackImage(seed: number | string) {
  return `https://picsum.photos/seed/${seed}/80/64`;
}

// ─── Dot colours by type ──────────────────────────────────────────────────────

const TYPE_DOT: Record<string, string> = {
  Onboarding:               "#378ADD",
  "Hackathon participation": "#7F77DD",
  Launch:                   "#1D9E75",
  Milestone:                "#BA7517",
  Achievement:              "#639922",
  default:                  "#3b82f6",
};

function getDot(type?: string) {
  return TYPE_DOT[type ?? ""] ?? TYPE_DOT.default;
}

// ─── Date panel (outside the card, matches screenshot exactly) ────────────────

function DatePanel({
  date,
  align,
}: {
  date: ReturnType<typeof formatDate>;
  align: "left" | "right";
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: align === "right" ? "flex-end" : "flex-start",
        justifyContent: "center",
        width: 56,
        flexShrink: 0,
        padding: align === "right" ? "0 12px 0 0" : "0 0 0 12px",
      }}
    >
      <span
        style={{
          fontSize: 12,
          color: "#9ca3af",
          fontWeight: 400,
          lineHeight: 1,
        }}
      >
        {date.month}
      </span>
      <span
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: "#111827",
          lineHeight: 1.05,
          letterSpacing: "-1px",
        }}
      >
        {date.day}
      </span>
      <span
        style={{
          fontSize: 12,
          color: "#9ca3af",
          fontWeight: 400,
        }}
      >
        {date.year}
      </span>
    </div>
  );
}

// ─── Card body ────────────────────────────────────────────────────────────────

function CardBody({ milestone, index }: { milestone: Milestone; index: number }) {
  // Use cover image OR first photo OR fallback picsum images
  const hasRealPhotos = milestone.photos && milestone.photos.length > 0;
  const hasCover = !!milestone.coverImage;

  // Build photo list for strip — real photos first, then picsum fallbacks
  const photoStrip: string[] = hasRealPhotos
    ? milestone.photos!.slice(0, 3)
    : hasCover
    ? []
    : [fallbackImage(index * 3), fallbackImage(index * 3 + 1), fallbackImage(index * 3 + 2)];

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e9eaec",
        borderRadius: 12,
        overflow: "hidden",
        display: "flex",
        width: "100%",
        transition: "border-color .15s, box-shadow .15s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = "#d1d5db";
        el.style.boxShadow = "0 4px 14px rgba(0,0,0,0.07)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = "#e9eaec";
        el.style.boxShadow = "none";
      }}
    >
      {/* Cover image — left side of card (like "New People joined" in screenshot) */}
      {hasCover && (
        <div
          style={{
            width: 90,
            flexShrink: 0,
            overflow: "hidden",
            background: "#f3f4f6",
            position: "relative",
          }}
        >
          <Image
            src={milestone.coverImage!}
            alt={milestone.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      )}

      {/* Main content */}
      <div style={{ flex: 1, padding: "14px 16px", minWidth: 0 }}>
        <p
          style={{
            fontWeight: 700,
            fontSize: 14,
            color: "#111827",
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          {milestone.title}
        </p>

        {milestone.description && (
          <p
            style={{
              fontSize: 13,
              color: "#6b7280",
              marginTop: 5,
              lineHeight: 1.6,
              margin: "5px 0 0",
            }}
          >
            {milestone.description}
          </p>
        )}

        {/* Photo strip — exactly like screenshot (small thumbnails below text) */}
        {photoStrip.length > 0 && (
          <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
            {photoStrip.map((src, pi) => (
              <div
                key={pi}
                style={{
                  width: 52,
                  height: 40,
                  borderRadius: 7,
                  overflow: "hidden",
                  background: "#f3f4f6",
                  flexShrink: 0,
                  border: "1px solid #f0f0f0",
                }}
              >
                <Image
                  src={src}
                  alt=""
                  width={52}
                  height={40}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
            {(milestone.photos?.length ?? 0) > 3 && (
              <div
                style={{
                  width: 52,
                  height: 40,
                  borderRadius: 7,
                  background: "#f3f4f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#6b7280",
                  flexShrink: 0,
                }}
              >
                +{milestone.photos!.length - 3}
              </div>
            )}
          </div>
        )}

        {/* Due date */}
        {milestone.dueDate && !milestone.completed && (
          <p style={{ fontSize: 11, color: "#9ca3af", margin: "8px 0 0" }}>
            Due{" "}
            {new Date(milestone.dueDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        )}

        {/* Completed badge */}
        {milestone.completed && (
          <div style={{ marginTop: 10 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                fontSize: 10,
                fontWeight: 500,
                color: "#0F6E56",
                background: "#E1F5EE",
                padding: "2px 8px 2px 6px",
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
              Completed
            </span>
          </div>
        )}
      </div>

      {/* Date panel — right edge of card, separated by divider (screenshot left-side cards) */}
      {/* Only show inline date panel when there is NO separate external date panel */}
    </div>
  );
}

// ─── Single milestone row ─────────────────────────────────────────────────────

function MilestoneCard({
  milestone,
  index,
}: {
  milestone: Milestone;
  index: number;
}) {
  const isLeft = index % 2 === 0;
  const date = milestone.date ? formatDate(milestone.date) : null;
  const dotColor = getDot(milestone.type);

  // ── pointer nub connecting card edge to spine ──
  const pointer = (side: "left" | "right") => (
    <div
      style={{
        position: "absolute",
        [side]: -7,
        top: 24,
        width: 13,
        height: 13,
        background: "#fff",
        borderTop: "1px solid #e9eaec",
        borderRight: side === "left" ? "1px solid #e9eaec" : "none",
        borderLeft: side === "right" ? "1px solid #e9eaec" : "none",
        borderBottom: "none",
        transform: side === "left" ? "rotate(45deg)" : "rotate(-135deg)",
        zIndex: 2,
      }}
    />
  );

  const dot = (
    <div
      style={{
        width: 14,
        height: 14,
        borderRadius: "50%",
        background: dotColor,
        border: "3px solid #fff",
        outline: `2px solid ${dotColor}`,
        outlineOffset: 0,
        flexShrink: 0,
        zIndex: 2,
      }}
    />
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        position: "relative",
      }}
    >
      {isLeft ? (
        <>
          {/* ── LEFT card: [card + date-panel] | dot | spacer ── */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "stretch",
              paddingRight: 28,
              position: "relative",
            }}
          >
            {/* card */}
            <div style={{ flex: 1, position: "relative" }}>
              <CardBody milestone={milestone} index={index} />
              {pointer("right")}
            </div>

            {/* date panel — outside card, to the right of it, before the spine */}
            {date && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  width: 60,
                  flexShrink: 0,
                  paddingLeft: 10,
                  borderLeft: "1px solid #e9eaec",
                  marginLeft: 0,
                }}
              >
                <span style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1 }}>
                  {date.month}
                </span>
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: 700,
                    color: "#111827",
                    lineHeight: 1.05,
                    letterSpacing: "-1px",
                  }}
                >
                  {date.day}
                </span>
                <span style={{ fontSize: 12, color: "#9ca3af" }}>{date.year}</span>
              </div>
            )}
          </div>

          {/* dot */}
          <div
            style={{ width: 28, display: "flex", justifyContent: "center", flexShrink: 0 }}
          >
            {dot}
          </div>

          {/* right spacer */}
          <div style={{ flex: 1 }} />
        </>
      ) : (
        <>
          {/* left spacer */}
          <div style={{ flex: 1 }} />

          {/* dot */}
          <div
            style={{ width: 28, display: "flex", justifyContent: "center", flexShrink: 0 }}
          >
            {dot}
          </div>

          {/* ── RIGHT card: date-panel | [card] | ── */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "stretch",
              paddingLeft: 28,
              position: "relative",
            }}
          >
            {/* card */}
            <div style={{ flex: 1, position: "relative" }}>
              <CardBody milestone={milestone} index={index} />
              {pointer("left")}
            </div>

            {/* date panel — outside card on the far right */}
            {date && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  width: 60,
                  flexShrink: 0,
                  paddingLeft: 10,
                  borderLeft: "1px solid #e9eaec",
                }}
              >
                <span style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1 }}>
                  {date.month}
                </span>
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: 700,
                    color: "#111827",
                    lineHeight: 1.05,
                    letterSpacing: "-1px",
                  }}
                >
                  {date.day}
                </span>
                <span style={{ fontSize: 12, color: "#9ca3af" }}>{date.year}</span>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function BuildMilestones({ build }: BuildMilestonesProps) {
  const milestones = build.milestones ?? [];
  const completed = milestones.filter((m) => m.completed).length;
  const pct = milestones.length
    ? Math.round((completed / milestones.length) * 100)
    : 0;

  return (
    <div>
      {/* ── Header ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 14,
        }}
      >
        <h3 style={{ fontSize: 15, fontWeight: 700, color: "#111827", margin: 0 }}>
          Milestones
        </h3>
        <span style={{ fontSize: 13, color: "#9ca3af" }}>
          {completed}&nbsp;/&nbsp;{milestones.length} completed
        </span>
      </div>

      {/* ── Progress bar ── */}
      <div
        style={{
          width: "100%",
          background: "#f3f4f6",
          borderRadius: 99,
          height: 4,
          marginBottom: 36,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            background: "#1D9E75",
            borderRadius: 99,
            transition: "width .5s cubic-bezier(.22,1,.36,1)",
          }}
        />
      </div>

      {/* ── Timeline ── */}
      {milestones.length === 0 ? (
        <p style={{ fontSize: 13, color: "#9ca3af", textAlign: "center", padding: "32px 0" }}>
          No milestones yet.
        </p>
      ) : (
        <div style={{ position: "relative" }}>
          {/* Vertical spine */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 2,
              background: "#e9eaec",
              transform: "translateX(-50%)",
              zIndex: 0,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            {milestones.map((m, i) => (
              <MilestoneCard key={m.id} milestone={m} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}