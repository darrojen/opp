
'use client'


import Box from "@/components/ui/box";
import { CTA_PRIMARY, CTA_SECONDARY } from "@/features/hackathons/hack.config";
import type { HackathonDetailProps } from "@/features/hackathons/props/HackathonDetailProps";

type Props = Pick<HackathonDetailProps, "title">;

export default function HackTitleCTA({ title }: Props) {
  return (
    <Box as="div" className="w-full mx-auto px-6 pt-5 pb-3 flex flex-col sm:flex-row sm:items-center justify-between lg:max-w-[1570px]">
      <Box as="h1" className="text-2xl font-bold text-gray-900">{title}</Box>

      <Box as="div" className="flex items-center gap-3 ">
        <button className="px-5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm font-semibold text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors shadow-sm">
          {CTA_SECONDARY}
        </button>
        <button className="px-5 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors shadow-sm">
          {CTA_PRIMARY}
        </button>
      </Box>
    </Box>
  );
}