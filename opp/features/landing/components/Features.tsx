// import Box from "@/components/ui/box";

// // src/components/landing/Features.tsx
// const features = [
//   { title: "AI-Powered Matching", desc: "Get personalized recommendations based on your skills & location." },
//   { title: "In-Platform Applications", desc: "Apply directly — upload CV, cover letter, no redirects." },
//   { title: "Deadline Alerts", desc: "Never miss out — get notified before opportunities close." },
//   { title: "Nigeria / Africa Focus", desc: "Start local, go global — curated for African talent." },
// ];

// export default function Features() {
//   return (
//     <Box as="section" className="py-20">
//       <Box as="div" className="container mx-auto px-6 lg:px-8">
//         <Box as="h2" className="mb-16 text-center text-4xl font-bold tracking-tight sm:text-5xl">
//           Why Opp?
//         </Box>

//         <Box as="div" className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
//           {features.map((f, i) => (
//             <Box as="div" key={i} className="rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800">
//               <Box as="h3" className="mb-4 text-2xl font-semibold">{f.title}</Box>
//               <Box as="p" className="text-gray-600 dark:text-gray-300">{f.desc}</Box>
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// }






"use client";

import { useEffect, useRef, useState } from "react";
import Box from "@/components/ui/box";
import { Sparkles, Network, HeartHandshake } from "lucide-react";

const features = [
  {
    title: "Experienced",
    desc: "With over 10 years of experience in the real estate industry, we know what it takes to find the perfect home for you.",
    icon: Sparkles,
    bg: "#E6F1EC",
  },
  {
    title: "Extensive Network",
    desc: "We have a wide network that includes the best properties across the city and surrounding areas.",
    icon: Network,
    bg: "#ECEEF6",
  },
  {
    title: "Top-Notch Customer Service",
    desc: "Our team is available 24/7 to assist you with friendly and professional service.",
    icon: HeartHandshake,
    bg: "#F2EBDD",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");

  const finalText = "Why choose Opp?";

  /* ── Detect section visibility ───────────────────────── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  /* ── Scramble header animation ───────────────────────── */
  useEffect(() => {
    if (!visible) return;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let iteration = 0;

    const interval = setInterval(() => {
      setTitle(
        finalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return finalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iteration += 1 / 3;

      if (iteration >= finalText.length) {
        clearInterval(interval);
        setTitle(finalText);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [visible]);

  return (
    <Box as="section" ref={sectionRef} className="py-28 bg-[#F7F9FA]">
      <Box as="div" className="container mx-auto px-6 lg:px-8">

        {/* Animated header */}
        <Box
          as="h2"
          className="mb-20 text-center text-4xl font-bold tracking-tight sm:text-5xl text-[#0F172A]"
        >
          {title || "\u00A0"}
        </Box>

        {/* Feature grid */}
        <Box as="div" className="grid gap-10 md:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;

            const animation =
              i === 0
                ? visible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
                : i === 1
                ? visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
                : visible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0";

            return (
              <Box
                key={i}
                as="div"
                className={`
                  rounded-xl
                  p-10
                  shadow-sm
                  transition-all duration-[900ms] ease-out
                  cursor-pointer
                  hover:-translate-y-2
                  hover:shadow-lg
                  ${animation}
                `}
                style={{
                  backgroundColor: f.bg,
                }}
              >
                {/* Icon */}
                <Box
                  as="div"
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white/80"
                >
                  <Icon size={32} className="text-[#6B7280]" />
                </Box>

                {/* Title */}
                <Box
                  as="h3"
                  className="mb-4 text-xl font-semibold text-[#1F2937]"
                >
                  {f.title}
                </Box>

                {/* Description */}
                <Box
                  as="p"
                  className="text-sm leading-relaxed text-[#4B5563]"
                >
                  {f.desc}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}