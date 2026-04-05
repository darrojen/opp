
import Box from "@/components/ui/box";
import { useState, useRef, useEffect, useCallback, ReactNode } from "react";
import { createPortal } from "react-dom";

interface TitleProps {
  title: string;
  children: ReactNode;
}

interface TooltipPosition {
  top: number;
  left: number;
  placement: "top" | "bottom";
}

function Tooltip({ title, position }: { title: string; position: TooltipPosition }) {
  return createPortal(
    <>
      <style>{`
        @keyframes tooltipIn {
          from { opacity: 0; transform: translateX(-50%) translateY(4px) scale(0.95); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0)    scale(1);   }
        }
      `}</style>
      <Box as="span"
        style={{
          position: "fixed",
          top: position.top,
          left: position.left,
          zIndex: 99999,
          transform: "translateX(-50%)",
          animation: "tooltipIn 0.15s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
        className="inline-flex items-center bg-gray-800 text-white text-xs font-medium rounded-md py-1 px-2 shadow-lg"
      >
        {title}
        {/* Arrow */}
        <Box as="span"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%) rotate(45deg)",
            width: "8px",
            height: "8px",
            background: "#1f2937",
            ...(position.placement === "top"
              ? { bottom: "-4px" }
              : { top: "-4px" }),
          }}
        />
      </Box>
    </>,
    document.body
  );
}

export default function Title({ title, children }: TitleProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [position, setPosition] = useState<TooltipPosition>({ top: 0, left: 0, placement: "top" });
  const triggerRef = useRef<HTMLSpanElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const handleMouseEnter = useCallback(() => {
    clearTimer();
    timerRef.current = setTimeout(() => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        const GAP = 8;
        const TOOLTIP_HEIGHT = 28;

        const spaceAbove = rect.top;
        const placement = spaceAbove >= TOOLTIP_HEIGHT + GAP ? "top" : "bottom";

        const top =
          placement === "top"
            ? rect.top - TOOLTIP_HEIGHT - GAP
            : rect.bottom + GAP;

        setPosition({ top, left: rect.left + rect.width / 2, placement });
      }
      setShowTooltip(true);
    }, 1000);
  }, [clearTimer]);

  const handleMouseLeave = useCallback(() => {
    clearTimer();
    setShowTooltip(false);
  }, [clearTimer]);

  useEffect(() => () => clearTimer(), [clearTimer]);

  return (
    <Box
      as="span"
      ref={triggerRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && <Tooltip title={title} position={position} />}
    </Box>
  );
}