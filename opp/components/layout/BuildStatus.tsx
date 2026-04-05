
// 'use client';

// import { useState } from "react";

// import type { LucideProps } from "lucide-react";
// import Box from "@/components/ui/box";
// import { TbProgress } from "react-icons/tb";
// import { FaCircleCheck } from "react-icons/fa6";
// import { ImSleepy2 } from "react-icons/im";
// import { GiReceiveMoney } from "react-icons/gi";
// import { VscVmActive } from "react-icons/vsc";
// import { HiMiniRocketLaunch } from "react-icons/hi2";

// export type StatusType =
//   | "in_progress"
//   | "completed"
//   | "none"
//   | "launched"
//   | "fund_raising"
//   | "live"


// interface StatusProps {
//   status: StatusType;
// }

// type StatusConfig = {
//   label: string;
//   color: string;
//   icon: React.ComponentType<LucideProps>;
// };

// const STATUS_CONFIG: Record<StatusType, StatusConfig> = {
//   in_progress: {
//     label: "In Progress",
//     color: "#22C55E",
//     icon: TbProgress,
//   },
//   completed: {
//     label: "Comleted",
//     color: "#6B7280",
//     icon: FaCircleCheck,
//   },
//   none: {
//     label: "Unactive",
//     color: "#EF4444",
//     icon: ImSleepy2,
//   },
//   fund_raising: {
//     label: "Fund Raising",
//     color: "#8B5CF6",
//     icon: GiReceiveMoney,
//   },
//   launched: {
//     label: "Launched",
//     color: "#f0f0f0",
//     icon: HiMiniRocketLaunch,
//   },
//   live: {
//     label: "Online",
//     color: "#f0f0f0",
//     icon: VscVmActive,
//   },

// };

// export function BuildStatus({ status }: StatusProps) {
//   const [hovered, setHovered] = useState(false);

//   const config = STATUS_CONFIG[status];
//   const Icon = config.icon;

//   return (
//     <Box
//       as="div"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         position: "relative",
//         display: "inline-flex",
//         alignItems: "center",
//         width: 32, 
//         height: 32,
//         borderRadius: 9999,
//         background: "rgba(193, 190, 190, 0.6)",
//         backdropFilter: "blur(8px)",
//         border: `1px solid rgba(255,255,255,0.08)`,
//         cursor: "pointer",
//         transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//         boxShadow: hovered ? `0 0 12px ${config.color}40` : "none",
//         overflow: "visible", 
//       }}
//     >
//       {/* Icon - fixed */}
//       <div
//         style={{
//           width: 30,
//           height: 30,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexShrink: 0,
//         }}
//       >
//         <Icon size={18} color={config.color} strokeWidth={2.5} />
//       </div>

//       {/* Label - absolutely positioned to the right */}
//       <span
//         style={{
//           position: "absolute",
//           left: 44, 
//           top: "50%",
//           transform: hovered
//             ? "translateY(-50%) translateX(0)"
//             : "translateY(-50%) translateX(-10px)",
//           opacity: hovered ? 1 : 0,
//           padding: "0 8px",
//           fontSize: 13,
//           fontWeight: 600,
//           color: "#E5E7EB",
//           whiteSpace: "nowrap",
//           background: "rgba(0,0,0,0.4)",
//           borderRadius: 6,
//           pointerEvents: "none",
//           transition: "all 0.25s ease",
//         }}
//       >
//         {config.label}
//       </span>
//     </Box>
//   );
// }



'use client';

import { useState } from "react";
import Box from "@/components/ui/box";

import { TbProgress } from "react-icons/tb";
import { FaCircleCheck } from "react-icons/fa6";
import { ImSleepy2 } from "react-icons/im";
import { GiReceiveMoney } from "react-icons/gi";
import { VscVmActive } from "react-icons/vsc";
import { HiMiniRocketLaunch } from "react-icons/hi2";

export type StatusType =
  | "in_progress"
  | "completed"
  | "none"
  | "launched"
  | "fund_raising"
  | "live";

interface StatusProps {
  status: StatusType;
}

type StatusConfig = {
  label: string;
  color: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
};

const STATUS_CONFIG: Record<StatusType, StatusConfig> = {
  in_progress: {
    label: "In Progress",
    color: "#22C55E",
    icon: TbProgress,
  },
  completed: {
    label: "Completed",
    color: "#6B7280",
    icon: FaCircleCheck,
  },
  none: {
    label: "Inactive",
    color: "#EF4444",
    icon: ImSleepy2,
  },
  fund_raising: {
    label: "Fund Raising",
    color: "#8B5CF6",
    icon: GiReceiveMoney,
  },
  launched: {
    label: "Launched",
    color: "#F97316",
    icon: HiMiniRocketLaunch,
  },
  live: {
    label: "Live",
    color: "#06B6D4",
    icon: VscVmActive,
  },
};

export function BuildStatus({ status }: StatusProps) {
  const [hovered, setHovered] = useState(false);

  const config = STATUS_CONFIG[status];
  const Icon = config.icon;

  return (
    <Box
      as="div"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative inline-flex items-center
        h-8 w-8
        rounded-full
        border border-black/5
        bg-white/80 backdrop-blur
        shadow-sm
        cursor-pointer
        transition-all duration-300
        ${hovered ? "shadow-md" : ""}
      `}
      style={{
        boxShadow: hovered ? `0 0 10px ${config.color}30` : undefined,
      }}
    >
      {/* Icon */}
      <div className="w-8 h-8 flex items-center justify-center">
        <Icon size={16} color={config.color} />
      </div>

      {/* Label */}
      <span
        className={`
          absolute left-10 top-1/2
          -translate-y-1/2
          whitespace-nowrap
          text-xs font-semibold
          text-gray-700
          px-2 py-1
          rounded-md
          bg-white border border-gray-200 shadow-sm
          pointer-events-none
          transition-all duration-200
          ${hovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}
        `}
      >
        {config.label}
      </span>
    </Box>
  );
}