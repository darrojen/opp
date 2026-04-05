"use client";

import React from "react";

interface BuildLogoProps {
  color?: string;
  icon?: string;
  name: string;
  size?: number;
  className?: string;
}

export function BuildLogo({ color = "#22c55e", name, size = 64, className = "" }: BuildLogoProps) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`flex items-center justify-center rounded-xl font-bold text-white select-none ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        fontSize: size * 0.28,
        flexShrink: 0,
      }}
    >
      <svg
        width={size * 0.55}
        height={size * 0.55}
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      </svg>
    </div>
  );
}