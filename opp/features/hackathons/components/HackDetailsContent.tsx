
'use client'



import Box from "@/components/ui/box";
import type { HackathonDetailProps } from "@/features/hackathons/props/HackathonDetailProps";

type Props = Pick<HackathonDetailProps, "description" | "bullets" | "outline">;

function DescriptionParagraph({ text }: { text: string }) {
  const PREFIX = "More info at ";
  if (text.startsWith(PREFIX)) {
    const url = text.slice(PREFIX.length).trim();
    return (
      <p className="text-sm text-gray-700">
        {PREFIX}
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline break-all">
          {url}
        </a>
      </p>
    );
  }
  return <p className="text-sm text-gray-700 leading-relaxed">{text}</p>;
}

export default function HackDetailsContent({ description, bullets, outline }: Props) {
  const paragraphs = description.split("\n\n").filter(Boolean);

  return (
    <Box as="div" className="max-w-300 mx-auto px-6 py-8 flex gap-10 items-start">

      {/* Outline sidebar */}
      <Box as="aside" className="hidden lg:block w-44 shrink-0 pt-1">
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-3">Outline</p>
        {outline.length === 0 ? (
          <p className="text-sm text-gray-400 italic">no chapters</p>
        ) : (
          <ul className="space-y-2">
            {outline.map(ch => (
              <li key={ch} className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer transition-colors">
                {ch}
              </li>
            ))}
          </ul>
        )}
      </Box>

      {/* Content card */}
      <Box as="div" className="flex-1 min-w-0 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
        {paragraphs.map((para, i) => (
          <DescriptionParagraph key={i} text={para} />
        ))}

        {bullets.length > 0 && (
          <ul className="space-y-2 pt-1">
            {bullets.map(b => (
              <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                {b}
              </li>
            ))}
          </ul>
        )}
      </Box>

    </Box>
  );
}