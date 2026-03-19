
"use client";

import Box from "@/components/ui/box";
import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
};

const stats: Stat[] = [
  {
    value: 12500,
    suffix: "+",
    label: "Active Users",
    description: "Students, developers & young professionals",
  },
  {
    value: 340,
    suffix: "+",
    label: "Organizations & Partners",
    description: "Universities, startups, tech companies",
  },
  {
    value: 1.2,
    prefix: "$",
    suffix: "M+",
    label: "Total Value Unlocked",
    description: "Prizes, stipends, salaries & grants facilitated",
  },
  {
    value: 4800,
    suffix: "+",
    label: "Applications Submitted",
    description: "Directly through the platform",
  },
];

function CountUp({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 900;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [target]);

  return <>{count.toLocaleString()}</>;
}

export default function Statistics() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.35 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Box as="section"
      ref={ref}
      className="py-24 bg-white dark:bg-gray-900"
    >
      <Box as="div" className="container mx-auto px-6 lg:px-8">



        {/* Grid */}
        <Box as="div" className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Box as="div"
              key={i}
              className={`
              group text-center
              rounded-xl
              p-8
              transition-all duration-700
              cursor-pointer
              hover:-translate-y-2
              hover:shadow-lg
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }
              `}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Number */}
              <Box as="div" className="mb-4 text-5xl font-extrabold text-indigo-600 dark:text-indigo-400">
                {stat.prefix}
                {visible && <CountUp target={stat.value} />}
                {stat.suffix}
              </Box>

              {/* Label */}
              <Box as="h3" className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                {stat.label}
              </Box>

              {/* Description */}
              <Box as="p" className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {stat.description}
              </Box>
            </Box>
          ))}
        </Box>

      </Box>
    </Box>
  );
}