import Box from "@/components/ui/box";

// src/components/landing/Features.tsx
const features = [
  { title: "AI-Powered Matching", desc: "Get personalized recommendations based on your skills & location." },
  { title: "In-Platform Applications", desc: "Apply directly — upload CV, cover letter, no redirects." },
  { title: "Deadline Alerts", desc: "Never miss out — get notified before opportunities close." },
  { title: "Nigeria / Africa Focus", desc: "Start local, go global — curated for African talent." },
];

export default function Features() {
  return (
    <Box as="section" className="py-20">
      <Box as="div" className="container mx-auto px-6 lg:px-8">
        <Box as="h2" className="mb-16 text-center text-4xl font-bold tracking-tight sm:text-5xl">
          Why Opp?
        </Box>

        <Box as="div" className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Box as="div" key={i} className="rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800">
              <Box as="h3" className="mb-4 text-2xl font-semibold">{f.title}</Box>
              <Box as="p" className="text-gray-600 dark:text-gray-300">{f.desc}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}