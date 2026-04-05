'use client';

import type { HackathonDetailProps } from "@/features/hackathons/props/HackathonDetailProps";

export default function DetailsTab({ description }: Partial<HackathonDetailProps>) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Overview</h2>
      <p className="text-gray-600 leading-relaxed">
        {description || "No description provided for this hackathon."}
      </p>
    </div>
  );
}