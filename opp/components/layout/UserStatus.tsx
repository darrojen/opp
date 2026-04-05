
'use client';

import { useState } from "react";
import {
  CheckCircle,
  Clock,
  LogOut,
  Trophy,
  Zap,
  CalendarX,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import Box from "@/components/ui/box";

type StatusType =
  | "active"
  | "offline"
  | "logged_out"
  | "in_hackathon"
  | "busy"
  | "grinding";

interface StatusProps {
  status: StatusType;
}

type StatusConfig = {
  label: string;
  color: string;
  icon: React.ComponentType<LucideProps>;
};

const STATUS_CONFIG: Record<StatusType, StatusConfig> = {
  active: {
    label: "Active",
    color: "#22C55E",
    icon: CheckCircle,
  },
  offline: {
    label: "Offline",
    color: "#6B7280",
    icon: Clock,
  },
  logged_out: {
    label: "Logged out",
    color: "#EF4444",
    icon: LogOut,
  },
  in_hackathon: {
    label: "In hackathon",
    color: "#8B5CF6",
    icon: Trophy,
  },
  busy: {
    label: "Busy",
    color: "#f0f0f0",
    icon: CalendarX,
  },
  grinding: {
    label: "Grinding",
    color: "#F97316",
    icon: Zap,
  },
};

export function Status({ status }: StatusProps) {
  const [hovered, setHovered] = useState(false);

  const config = STATUS_CONFIG[status];
  const Icon = config.icon;

  return (
    <Box
      as="div"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        width: 38,
        height: 38,
        borderRadius: 9999,
        background: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(8px)",
        border: `1px solid rgba(255,255,255,0.08)`,
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: hovered ? `0 0 12px ${config.color}40` : "none",
        overflow: "visible", // so label can overflow
      }}
    >
      {/* Icon - fixed */}
      <div
        style={{
          width: 38,
          height: 38,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={18} color={config.color} strokeWidth={2.5} />
      </div>

      {/* Label - absolutely positioned to the right */}
      <span
        style={{
          position: "absolute",
          left: 44, 
          top: "50%",
          transform: hovered
            ? "translateY(-50%) translateX(0)"
            : "translateY(-50%) translateX(-10px)",
          opacity: hovered ? 1 : 0,
          padding: "0 8px",
          fontSize: 13,
          fontWeight: 600,
          color: "#E5E7EB",
          whiteSpace: "nowrap",
          background: "rgba(0,0,0,0.4)",
          borderRadius: 6,
          pointerEvents: "none",
          transition: "all 0.25s ease",
        }}
      >
        {config.label}
      </span>
    </Box>
  );
}