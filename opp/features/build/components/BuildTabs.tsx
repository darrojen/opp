// "use client";

// import React, { useRef, useEffect, useState } from "react";
// import { useRouter, usePathname, useSearchParams } from "next/navigation";
// import { BuildTab, Build } from "../types";
// import Box from "@/components/ui/box";

// interface BuildTabsProps {
//   activeTab: BuildTab;
//   onTabChange?: (tab: BuildTab) => void;
//   build: Build;
// }

// const TAB_CONFIG: { key: BuildTab; label: string; count?: (b: Build) => number }[] = [
//   { key: "details", label: "Details" },
//   { key: "team", label: "Team" },
//   { key: "milestones", label: "Milestones" },
//   { key: "followers", label: "Followers", count: (b) => b.followers },
//   { key: "upvoters", label: "Upvoters", count: (b) => b.upvotes },
// ];

// export function BuildTabs({ activeTab, onTabChange, build }: BuildTabsProps) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
//   const underlineRef = useRef<HTMLDivElement>(null);
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(false);

//   // 🔥 Animate underline
//   useEffect(() => {
//     const index = TAB_CONFIG.findIndex(t => t.key === activeTab);
//     const el = tabRefs.current[index];

//     if (el && underlineRef.current) {
//       underlineRef.current.style.width = `${el.offsetWidth}px`;
//       underlineRef.current.style.transform = `translateX(${el.offsetLeft}px)`;
//     }
//   }, [activeTab]);

//   // 🔥 Scroll state
//   const updateScrollState = () => {
//     const el = scrollRef.current;
//     if (!el) return;

//     setCanScrollLeft(el.scrollLeft > 4);
//     setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
//   };

//   useEffect(() => {
//     const el = scrollRef.current;
//     if (!el) return;

//     updateScrollState();
//     el.addEventListener("scroll", updateScrollState);
//     window.addEventListener("resize", updateScrollState);

//     return () => {
//       el.removeEventListener("scroll", updateScrollState);
//       window.removeEventListener("resize", updateScrollState);
//     };
//   }, []);

//   const scroll = (dir: "left" | "right") => {
//     const el = scrollRef.current;
//     if (!el) return;

//     el.scrollBy({
//       left: dir === "left" ? -160 : 160,
//       behavior: "smooth",
//     });
//   };

//   const handleTabChange = (tab: BuildTab) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("tab", tab);

//     router.push(`${pathname}?${params.toString()}`, { scroll: false });
//     onTabChange?.(tab);
//   };

//   return (
//     <div className="mb-8">
//       <Box className="relative flex items-end border-b border-gray-200">

//         {/* Left arrow */}
//         <button
//           onClick={() => scroll("left")}
//           style={{
//             opacity: canScrollLeft ? 1 : 0,
//             pointerEvents: canScrollLeft ? "auto" : "none",
//           }}
//           className="w-7 h-7 flex items-center justify-center bg-gray-900 text-white rounded-full mr-2"
//         >
//           ‹
//         </button>

//         {/* Scrollable tabs */}
//         <Box
//           ref={scrollRef}
//           className="relative flex gap-6 overflow-x-auto flex-1"
//           style={{
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//           }}
//         >
//           <style>{`.build-tabs::-webkit-scrollbar { display: none; }`}</style>

//           {TAB_CONFIG.map(({ key, label, count }, i) => {
//             const isActive = activeTab === key;

//             return (
//               <button
//                 key={key}
//                 ref={(el) => {
//                   tabRefs.current[i] = el;
//                 }}
//                 onClick={() => handleTabChange(key)}
//                 className={`
//                   relative pb-3 px-1 text-sm font-medium whitespace-nowrap transition-all duration-200
//                   ${isActive ? "text-orange-500" : "text-gray-500 hover:text-gray-900"}
//                 `}
//               >
//                 {label}
//                 {count && (
//                   <span className="ml-1 text-gray-400">
//                     {count(build)}
//                   </span>
//                 )}

//                 {/* glow */}
//                 {isActive && (
//                   <span className="absolute inset-x-0 bottom-1 h-1.5 bg-orange-100 rounded-full blur-sm opacity-60" />
//                 )}
//               </button>
//             );
//           })}

//           {/* Animated underline */}
//           <Box className="absolute bottom-0 left-0 right-0">
//             <Box
//               ref={underlineRef}
//               className="h-0.5 bg-orange-500 transition-all duration-300 ease-in-out rounded-full"
//               style={{ width: 0, transform: "translateX(0)" }}
//             />
//           </Box>
//         </Box>

//         {/* Right arrow */}
//         <button
//           onClick={() => scroll("right")}
//           style={{
//             opacity: canScrollRight ? 1 : 0,
//             pointerEvents: canScrollRight ? "auto" : "none",
//           }}
//           className="w-7 h-7 flex items-center justify-center bg-gray-900 text-white rounded-full ml-2"
//         >
//           ›
//         </button>
//       </Box>
//     </div>
//   );
// }




'use client';

import React, { useRef, useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { BuildTab, Build } from "../types";
import Box from "@/components/ui/box";

interface BuildTabsProps {
  activeTab: BuildTab;
  onTabChange?: (tab: BuildTab) => void;
  build: Build;
}

const TAB_CONFIG: { key: BuildTab; label: string; count?: (b: Build) => number }[] = [
  { key: "details", label: "Details" },
  { key: "team", label: "Team" },
  { key: "milestones", label: "Milestones" },
  { key: "upvoters", label: "Upvoters", count: (b) => b.upvotes },
];

export function BuildTabs({ activeTab, onTabChange, build }: BuildTabsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const underlineRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // ── Underline animation + auto scroll into view ──
  useEffect(() => {
    const index = TAB_CONFIG.findIndex(t => t.key === activeTab);
    const el = tabRefs.current[index];

    if (el && underlineRef.current) {
      underlineRef.current.style.width = `${el.offsetWidth}px`;
      underlineRef.current.style.transform = `translateX(${el.offsetLeft}px`;

      // 🔥 keep active tab visible on mobile
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeTab]);

  // ── Scroll state ──
  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: dir === "left" ? -160 : 160,
      behavior: "smooth",
    });
  };

  // ── Tab change (NO SCROLL RESET 🔥) ──
  const handleTabChange = (tab: BuildTab) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab);

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false, // 🔥 keeps scroll position
    });

    onTabChange?.(tab);
  };

  return (
    <div className="sticky top-0 z-30 bg-white/90 backdrop-blur mb-6">
      <Box className="relative flex items-end border-b border-gray-200">

        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          style={{
            opacity: canScrollLeft ? 1 : 0,
            pointerEvents: canScrollLeft ? "auto" : "none",
          }}
          className="w-7 h-7 flex items-center justify-center bg-gray-900 text-white rounded-full mr-2"
        >
          ‹
        </button>

        {/* Tabs */}
        <Box
          ref={scrollRef}
          className="relative flex gap-6 overflow-x-auto flex-1 build-tabs"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>{`.build-tabs::-webkit-scrollbar { display: none; }`}</style>

          {TAB_CONFIG.map(({ key, label, count }, i) => {
            const isActive = activeTab === key;

            return (
              <button
                key={key}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                onClick={() => handleTabChange(key)}
                className={`
                  relative pb-3 px-1 text-sm font-medium whitespace-nowrap transition-all duration-200
                  ${isActive ? "text-orange-500" : "text-gray-500 hover:text-gray-900"}
                `}
              >
                {label}
                {count && (
                  <span className="ml-1 text-gray-400">
                    {count(build)}
                  </span>
                )}

                {isActive && (
                  <span className="absolute inset-x-0 bottom-1 h-1.5 bg-orange-100 rounded-full blur-sm opacity-60" />
                )}
              </button>
            );
          })}

          {/* Underline */}
          <Box className="absolute bottom-0 left-0 right-0">
            <Box
              ref={underlineRef}
              className="h-0.5 bg-orange-500 transition-all duration-300 ease-in-out rounded-full"
              style={{ width: 0, transform: "translateX(0)" }}
            />
          </Box>
        </Box>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          style={{
            opacity: canScrollRight ? 1 : 0,
            pointerEvents: canScrollRight ? "auto" : "none",
          }}
          className="w-7 h-7 flex items-center justify-center bg-gray-900 text-white rounded-full ml-2"
        >
          ›
        </button>
      </Box>
    </div>
  );
}