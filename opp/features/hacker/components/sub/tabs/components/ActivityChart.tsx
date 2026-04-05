
// 'use client';

// import { useState } from 'react';
// import { HackerProfile } from "@/features/hacker/types/hacker.types";

// export default function ActivityChart({
//   data,
//   maxVal,
// }: {
//   data: HackerProfile["activity"];
//   maxVal: number;
// }) {
//   const [hoverIndex, setHoverIndex] = useState<number | null>(null);

//   const chartH = 140;
//   const chartW = 600;

//   const padL = 36;
//   const padB = 28;
//   const padR = 16;
//   const padT = 16;

//   const innerW = chartW - padL - padR;
//   const innerH = chartH - padT - padB;

//   const max = Math.max(maxVal, ...data.map((d) => d.value));
//   const steps = 4;
//   const stepVal = Math.ceil(max / steps);

//   const yLabels = Array.from({ length: steps + 1 }, (_, i) => i * stepVal);

//   /* ───────────── POINTS ───────────── */

//   const points = data.map((d, i) => {
//     const x = padL + (i / (data.length - 1)) * innerW;
//     const y = padT + innerH - (d.value / max) * innerH;
//     return { x, y, ...d };
//   });

//   /* ───────────── SMOOTH LINE ───────────── */

//   const smoothPath = points.reduce((acc, point, i, arr) => {
//     if (i === 0) return `M ${point.x},${point.y}`;

//     const prev = arr[i - 1];
//     const midX = (prev.x + point.x) / 2;

//     return `${acc} Q ${midX},${prev.y} ${point.x},${point.y}`;
//   }, "");

//   const areaPath =
//     smoothPath +
//     ` L ${points[points.length - 1].x},${padT + innerH}
//       L ${points[0].x},${padT + innerH} Z`;

//   return (
//     <div className="w-full">
//       <svg viewBox={`0 0 ${chartW} ${chartH}`} className="w-full">
//         <defs>
//           <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
//             <stop offset="0%" stopColor="#6366F1" stopOpacity="0.25" />
//             <stop offset="100%" stopColor="#6366F1" stopOpacity="0.02" />
//           </linearGradient>
//         </defs>

//         {/* Grid */}
//         {yLabels.map((v) => {
//           const y = padT + innerH - (v / max) * innerH;
//           return (
//             <g key={v}>
//               <line
//                 x1={padL}
//                 y1={y}
//                 x2={chartW - padR}
//                 y2={y}
//                 stroke="#EEF2F7"
//               />
//               <text
//                 x={padL - 8}
//                 y={y + 4}
//                 textAnchor="end"
//                 fontSize="10"
//                 fill="#94A3B8"
//               >
//                 {v}
//               </text>
//             </g>
//           );
//         })}

//         {/* Area */}
//         <path d={areaPath} fill="url(#areaGrad)" />

//         {/* Line */}
//         <path
//           d={smoothPath}
//           fill="none"
//           stroke="#6366F1"
//           strokeWidth="2.5"
//         />

//         {/* Points */}
//         {points.map((p, i) => (
//           <g
//             key={p.month}
//             onMouseEnter={() => setHoverIndex(i)}
//             onMouseLeave={() => setHoverIndex(null)}
//           >
//             <circle
//               cx={p.x}
//               cy={p.y}
//               r={hoverIndex === i ? 5 : 3}
//               fill="#6366F1"
//               stroke="#fff"
//               strokeWidth="2"
//               style={{ transition: 'all 0.2s' }}
//             />

//             {/* Tooltip */}
//             {hoverIndex === i && (
//               <g>
//                 <rect
//                   x={p.x - 28}
//                   y={p.y - 38}
//                   width="56"
//                   height="22"
//                   rx="6"
//                   fill="#111827"
//                 />
//                 <text
//                   x={p.x}
//                   y={p.y - 23}
//                   textAnchor="middle"
//                   fontSize="10"
//                   fill="#fff"
//                 >
//                   {p.value}
//                 </text>
//               </g>
//             )}
//           </g>
//         ))}

//         {/* X Labels */}
//         {points.map((p) => (
//           <text
//             key={p.month}
//             x={p.x}
//             y={chartH - 6}
//             textAnchor="middle"
//             fontSize="10"
//             fill="#94A3B8"
//           >
//             {p.month}
//           </text>
//         ))}
//       </svg>
//     </div>
//   );
// }


// 'use client';

// import { useState, useEffect } from 'react';
// import { HackerProfile } from "@/features/hacker/types/hacker.types";

// export default function ActivityChart({
//   data,
//   maxVal,
// }: {
//   data: HackerProfile["activity"];
//   maxVal: number;
// }) {
//   const [hoverIndex, setHoverIndex] = useState<number | null>(null);
//   const [progress, setProgress] = useState(0);

//   /* ───────── Animation (line draw) ───────── */
//   useEffect(() => {
//     requestAnimationFrame(() => setProgress(1));
//   }, []);

//   const chartH = 160;
//   const chartW = 700;

//   const padL = 40;
//   const padB = 30;
//   const padR = 20;
//   const padT = 20;

//   const innerW = chartW - padL - padR;
//   const innerH = chartH - padT - padB;

//   const max = Math.max(maxVal, ...data.map((d) => d.value), 10);

//   /* ───────── Y grid ───────── */
//   const steps = 4;
//   const stepVal = Math.ceil(max / steps);
//   const yLabels = Array.from({ length: steps + 1 }, (_, i) => i * stepVal);

//   /* ───────── Points ───────── */
//   const points = data.map((d, i) => {
//     const x = padL + (i / (data.length - 1)) * innerW;
//     const y = padT + innerH - (d.value / max) * innerH;
//     return { x, y, ...d };
//   });

//   /* ───────── Smooth curve ───────── */
//   const path = points.reduce((acc, point, i, arr) => {
//     if (i === 0) return `M ${point.x},${point.y}`;
//     const prev = arr[i - 1];
//     const midX = (prev.x + point.x) / 2;
//     return `${acc} Q ${midX},${prev.y} ${point.x},${point.y}`;
//   }, "");

//   /* ───────── Line animation ───────── */
//   const pathLength = 1000;

//   return (
//     <div className="w-full relative">
//       <svg
//         viewBox={`0 0 ${chartW} ${chartH}`}
//         className="w-full"
//         onMouseLeave={() => setHoverIndex(null)}
//       >
//         {/* Grid */}
//         {yLabels.map((v) => {
//           const y = padT + innerH - (v / max) * innerH;
//           return (
//             <g key={v}>
//               <line
//                 x1={padL}
//                 y1={y}
//                 x2={chartW - padR}
//                 y2={y}
//                 stroke="#E5E7EB"
//                 strokeDasharray="3 4"
//               />
//               <text
//                 x={padL - 10}
//                 y={y + 4}
//                 textAnchor="end"
//                 fontSize="10"
//                 fill="#9CA3AF"
//               >
//                 {v}
//               </text>
//             </g>
//           );
//         })}

//         {/* Line */}
//         <path
//           d={path}
//           fill="none"
//           stroke="#3B82F6"
//           strokeWidth="2"
//           strokeLinecap="round"
//           style={{
//             strokeDasharray: pathLength,
//             strokeDashoffset: pathLength * (1 - progress),
//             transition: 'stroke-dashoffset 1s ease-out',
//           }}
//         />

//         {/* Hover interaction */}
//         {hoverIndex !== null && (
//           <>
//             {/* Vertical line */}
//             <line
//               x1={points[hoverIndex].x}
//               y1={padT}
//               x2={points[hoverIndex].x}
//               y2={padT + innerH}
//               stroke="#D1D5DB"
//               strokeDasharray="4 4"
//             />

//             {/* Active dot */}
//             <circle
//               cx={points[hoverIndex].x}
//               cy={points[hoverIndex].y}
//               r="5"
//               fill="#3B82F6"
//               stroke="#fff"
//               strokeWidth="2"
//             />
//           </>
//         )}

//         {/* Hover zones (invisible for UX) */}
//         {points.map((p, i) => (
//           <rect
//             key={i}
//             x={p.x - innerW / data.length / 2}
//             y={padT}
//             width={innerW / data.length}
//             height={innerH}
//             fill="transparent"
//             onMouseEnter={() => setHoverIndex(i)}
//           />
//         ))}

//         {/* X labels */}
//         {points.map((p) => (
//           <text
//             key={p.month}
//             x={p.x}
//             y={chartH - 6}
//             textAnchor="middle"
//             fontSize="10"
//             fill="#9CA3AF"
//           >
//             {p.month}
//           </text>
//         ))}
//       </svg>

//       {/* Floating tooltip (RIGHT SIDE like Polymarket) */}
//       {hoverIndex !== null && (
//         <div
//           className="absolute top-4 right-4 bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm text-sm"
//         >
//           <div className="font-semibold text-gray-900">
//             {data[hoverIndex].month}
//           </div>
//           <div className="text-blue-600 font-medium">
//             {data[hoverIndex].value}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


'use client';

import { useState, useEffect, useRef } from 'react';

export type SeriesKey = 'hackathon' | 'grant' | 'internship' | 'fellowship' | 'job';

export interface ActivityDataPoint {
  month: string;
  values: Record<SeriesKey, number>;
}

interface SeriesConfig {
  key: SeriesKey;
  label: string;
  color: string;
}

const SERIES: SeriesConfig[] = [
  { key: 'hackathon',  label: 'Hackathon',  color: '#3B82F6' },
  { key: 'grant',      label: 'Grant',      color: '#F59E0B' },
  { key: 'internship', label: 'Internship', color: '#10B981' },
  { key: 'fellowship', label: 'Fellowship', color: '#EF4444' },
  { key: 'job',        label: 'Job',        color: '#8B5CF6' },
];

const W = 800;
const H = 220;
const PAD = { l: 40, r: 20, t: 20, b: 28 };
const IW = W - PAD.l - PAD.r;
const IH = H - PAD.t - PAD.b;

function buildPath(points: [number, number][]): string {
  return points.reduce((acc, [x, y], i, arr) => {
    if (i === 0) return `M ${x},${y}`;
    const [px, py] = arr[i - 1];
    const mx = (px + x) / 2;
    return `${acc} C ${mx},${py} ${mx},${y} ${x},${y}`;
  }, '');
}

function toXY(
  data: ActivityDataPoint[],
  key: SeriesKey,
  max: number
): [number, number][] {
  return data.map((d, i) => [
    PAD.l + (i / (data.length - 1)) * IW,
    PAD.t + IH - (d.values[key] / max) * IH,
  ]);
}

export default function ActivityChart({
  data,
  maxVal = 100,
}: {
  data: ActivityDataPoint[];
  maxVal?: number;
}) {
  const [progress, setProgress] = useState<Record<SeriesKey, number>>(
    Object.fromEntries(SERIES.map((s) => [s.key, 0])) as Record<SeriesKey, number>
  );
  const [dimmed, setDimmed] = useState<Set<SeriesKey>>(new Set());
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const max = Math.max(maxVal, ...data.flatMap((d) => Object.values(d.values)));

  /* ── animate lines in, staggered ── */
  useEffect(() => {
    SERIES.forEach((s, i) => {
      setTimeout(() => {
        setProgress((prev) => ({ ...prev, [s.key]: 1 }));
      }, i * 130);
    });
  }, []);

  /* ── mouse → data index ── */
  function handleMouseMove(e: React.MouseEvent<SVGRectElement>) {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const scaleX = W / rect.width;
    const relX = (e.clientX - rect.left) * scaleX - PAD.l;
    const idx = Math.round(
      Math.max(0, Math.min(data.length - 1, (relX / IW) * (data.length - 1)))
    );
    setHoverIdx(idx);
  }

  function toggleSeries(key: SeriesKey) {
    setDimmed((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }

  const PATH_LENGTH = 2400;
  const Y_STEPS = [0, 20, 40, 60, 80, 100];

  const activeSeries = SERIES.filter((s) => !dimmed.has(s.key));
  const sortedTooltip =
    hoverIdx !== null
      ? [...activeSeries].sort(
          (a, b) => data[hoverIdx].values[b.key] - data[hoverIdx].values[a.key]
        )
      : [];

  return (
    <div className="w-full relative select-none">
      {/* ── Legend ── */}
      <div className="flex flex-wrap gap-5 mb-3 px-1">
        {SERIES.map((s) => {
          const last = data[data.length - 1]?.values[s.key] ?? 0;
          const isDimmed = dimmed.has(s.key);
          return (
            <button
              key={s.key}
              onClick={() => toggleSeries(s.key)}
              className="flex items-center gap-1.5 text-sm cursor-pointer transition-opacity"
              style={{ opacity: isDimmed ? 0.35 : 1 }}
            >
              <span
                className="inline-block w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: s.color }}
              />
              <span className="text-gray-600">{s.label}</span>
              <span className="font-medium" style={{ color: s.color }}>
                {last.toFixed(1)}%
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Chart ── */}
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        onMouseLeave={() => setHoverIdx(null)}
      >
        <defs>
          {SERIES.map((s) => (
            <linearGradient key={s.key} id={`grad-${s.key}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={s.color} stopOpacity={0.18} />
              <stop offset="100%" stopColor={s.color} stopOpacity={0} />
            </linearGradient>
          ))}
        </defs>

        {/* Y grid */}
        {Y_STEPS.map((v) => {
          const y = PAD.t + IH - (v / 100) * IH;
          return (
            <g key={v}>
              <line
                x1={PAD.l} y1={y} x2={W - PAD.r} y2={y}
                stroke="#E5E7EB" strokeWidth={0.5} strokeDasharray="3 5"
              />
              <text
                x={PAD.l - 5} y={y + 4}
                textAnchor="end" fontSize={9} fill="#9CA3AF"
              >
                {v}%
              </text>
            </g>
          );
        })}

        {/* X labels */}
        {data.map((d, i) => {
          const x = PAD.l + (i / (data.length - 1)) * IW;
          return (
            <text key={d.month} x={x} y={H - 6}
              textAnchor="middle" fontSize={10} fill="#9CA3AF">
              {d.month}
            </text>
          );
        })}

        {/* Area fills (behind lines) */}
        {SERIES.map((s) => {
          const pts = toXY(data, s.key, max);
          const linePath = buildPath(pts);
          const [lx, ly] = pts[pts.length - 1];
          const [fx] = pts[0];
          const areaPath = `${linePath} L ${lx},${PAD.t + IH} L ${fx},${PAD.t + IH} Z`;
          return (
            <path
              key={s.key}
              d={areaPath}
              fill={`url(#grad-${s.key})`}
              style={{ opacity: dimmed.has(s.key) ? 0.05 : 1, transition: 'opacity 0.2s' }}
            />
          );
        })}

        {/* Lines */}
        {SERIES.map((s) => {
          const pts = toXY(data, s.key, max);
          const d = buildPath(pts);
          return (
            <path
              key={s.key}
              d={d}
              fill="none"
              stroke={s.color}
              strokeWidth={2}
              strokeLinecap="round"
              style={{
                strokeDasharray: PATH_LENGTH,
                strokeDashoffset: PATH_LENGTH * (1 - progress[s.key]),
                opacity: dimmed.has(s.key) ? 0.08 : 1,
                transition: 'stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1), opacity 0.2s',
              }}
            />
          );
        })}

        {/* Crosshair */}
        {hoverIdx !== null && (
          <line
            x1={PAD.l + (hoverIdx / (data.length - 1)) * IW}
            y1={PAD.t}
            x2={PAD.l + (hoverIdx / (data.length - 1)) * IW}
            y2={PAD.t + IH}
            stroke="#D1D5DB"
            strokeWidth={1}
            strokeDasharray="4 4"
          />
        )}

        {/* Active dots */}
        {hoverIdx !== null &&
          activeSeries.map((s) => {
            const [cx, cy] = toXY(data, s.key, max)[hoverIdx];
            return (
              <circle
                key={s.key}
                cx={cx} cy={cy} r={4}
                fill={s.color}
                stroke="#fff"
                strokeWidth={2}
              />
            );
          })}

        {/* Invisible hit zone */}
        <rect
          x={PAD.l} y={PAD.t}
          width={IW} height={IH}
          fill="transparent"
          onMouseMove={handleMouseMove}
        />
      </svg>

      {/* Floating tooltip — top-right, Polymarket style */}
      {hoverIdx !== null && (
        <div className="absolute top-10 right-0 bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm text-xs pointer-events-none min-w-[130px]">
          <div className="text-gray-400 mb-1.5">{data[hoverIdx].month}</div>
          {sortedTooltip.map((s) => (
            <div key={s.key} className="flex items-center justify-between gap-3 my-0.5">
              <span className="flex items-center gap-1.5 text-gray-600">
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full"
                  style={{ background: s.color }}
                />
                {s.label}
              </span>
              <span className="font-medium" style={{ color: s.color }}>
                {data[hoverIdx].values[s.key].toFixed(1)}%
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}