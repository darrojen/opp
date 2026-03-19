

"use client";


import { useState } from "react";
import Box from "@/components/ui/box";
import { HACK_TABS } from "@/features/hackathons/hack.config";
import type { HackathonDetailProps } from "@/features/hackathons/props/HackathonDetailProps";

interface Props {
  hackersCount?: HackathonDetailProps["hackersCount"];
  onTabChange?: (label: string) => void;
}

export default function HackTabs({ hackersCount, onTabChange }: Props) {
  const [active, setActive] = useState("Details");

  function handleClick(label: string) {
    setActive(label);
    onTabChange?.(label);
  }

  return (
    <Box as="div" className="bg-white border-b border-gray-200 px-6">
      <Box as="nav" className="max-w-[1200px] mx-auto flex gap-0 overflow-x-auto">
        {HACK_TABS.map(tab => {
          const isActive = tab.label === active;

          let badge: React.ReactNode = null;
          if (tab.badge === "New") {
            badge = (
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-orange-500 text-white leading-none">
                New
              </span>
            );
          } else if (tab.badge === "count" && hackersCount) {
            badge = (
              <span className="text-[11px] font-semibold px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-600 leading-none">
                {hackersCount}
              </span>
            );
          }

          return (
            <button
              key={tab.label}
              onClick={() => handleClick(tab.label)}
              className={`flex items-center gap-1.5 px-4 py-3.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                isActive
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
              }`}
            >
              {tab.label}
              {badge}
            </button>
          );
        })}
      </Box>
    </Box>
  );
}