

// "use client";

// import Box from "@/components/ui/box";
// import { useEffect, useState, useRef } from "react";

// const CustomScrollbar = () => {
//   const numDots = 9;

//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [visible, setVisible] = useState(false);
//   const [hoveredDot, setHoveredDot] = useState<number | null>(null);

//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   // Track scrolling
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight = document.body.scrollHeight - window.innerHeight;

//       const scrolled = (scrollTop / docHeight) * 100;
//       setScrollProgress(scrolled);

//       setVisible(true);

//       if (timeoutRef.current) clearTimeout(timeoutRef.current);

//       timeoutRef.current = setTimeout(() => {
//         if (!hoveredDot) setVisible(false);
//       }, 2000);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);

//       if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     };
//   }, [hoveredDot]);

//   // Scroll to section
//   const handleClick = (idx: number) => {
//     const docHeight = document.body.scrollHeight - window.innerHeight;
//     const targetScroll = (idx / (numDots - 1)) * docHeight;

//     window.scrollTo({
//       top: targetScroll,
//       behavior: "smooth",
//     });
//   };

//   // Mac Dock-like wavelike scale
//   const calculateScale = (idx: number) => {
//     const dotPercentage = (idx / (numDots - 1)) * 100;
//     const distance = Math.abs(scrollProgress - dotPercentage);

//     let scale = 1 + Math.exp(-(distance * distance) / 50);

//     if (scale > 2) scale = 2;

//     if (hoveredDot === idx) scale = 2.4;

//     return scale;
//   };

//   // Gradient color
//   const calculateGradient = (idx: number) => {
//     if (hoveredDot === idx) {
//       return "linear-gradient(180deg, #FFE08A, #FFC095)";
//     }

//     return "linear-gradient(180deg, #FFD166, #FFAF7A)";
//   };

//   return (
//     <Box
//       as="div"
//       className={`fixed top-1/2 right-4 -translate-y-1/2 flex flex-col gap-2 z-50 cursor-pointer transition-opacity duration-500 ${
//         visible ? "opacity-100" : "opacity-0"
//       }`}
//       onMouseEnter={() => setVisible(true)}
//       onMouseLeave={() => {
//         if (!hoveredDot) {
//           timeoutRef.current = setTimeout(() => setVisible(false), 2000);
//         }
//       }}
//     >
//       {Array.from({ length: numDots }).map((_, idx) => {
//         const scale = calculateScale(idx);
//         const dotPercentage = (idx / (numDots - 1)) * 100;
//         const gradient = calculateGradient(idx);

//         return (
//           <Box
//             as="span"
//             key={idx}
//             onClick={() => handleClick(idx)}
//             onMouseEnter={() => setHoveredDot(idx)}
//             onMouseLeave={() => setHoveredDot(null)}
//             className="w-3 h-3 rounded-full"
//             style={{
//               opacity: scrollProgress >= dotPercentage ? 1 : 0.35,
//               transform: `scale(${scale})`,
//               background: gradient,
//               transition:
//                 "transform 150ms ease-out, background 150ms ease-out, opacity 200ms ease-out",
//             }}
//           />
//         );
//       })}
//     </Box>
//   );
// };

// export default CustomScrollbar;


"use client";

import Box from "@/components/ui/box";
import { useEffect, useState, useRef } from "react";

const CustomScrollbar = () => {
  const numDots = 9;

  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Track scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;

      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);

      setVisible(true);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        if (!hoveredDot) setVisible(false);
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [hoveredDot]);

  // Scroll to section
  const handleClick = (idx: number) => {
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const targetScroll = (idx / (numDots - 1)) * docHeight;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  // Mac Dock-like wavelike scale
  const calculateScale = (idx: number) => {
    const dotPercentage = (idx / (numDots - 1)) * 100;
    const distance = Math.abs(scrollProgress - dotPercentage);

    let scale = 1 + Math.exp(-(distance * distance) / 50);

    if (scale > 2) scale = 2;

    if (hoveredDot === idx) scale = 2.4;

    return scale;
  };

  // Gradient color
  const calculateGradient = (idx: number) => {
    if (hoveredDot === idx) {
      return "linear-gradient(180deg, #FFE08A, #FFC095)";
    }

    return "linear-gradient(180deg, #FFD166, #FFAF7A)";
  };

  return (
    <Box
      as="div"
      className={`fixed top-1/2 right-1 sm:right-2 md:right-4 -translate-y-1/2 flex flex-col gap-1 sm:gap-2 z-50 cursor-pointer transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => {
        if (!hoveredDot) {
          timeoutRef.current = setTimeout(() => setVisible(false), 2000);
        }
      }}
    >
      {Array.from({ length: numDots }).map((_, idx) => {
        const scale = calculateScale(idx);
        const dotPercentage = (idx / (numDots - 1)) * 100;
        const gradient = calculateGradient(idx);

        return (
          <Box
            as="span"
            key={idx}
            onClick={() => handleClick(idx)}
            onMouseEnter={() => setHoveredDot(idx)}
            onMouseLeave={() => setHoveredDot(null)}
            className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full touch-manipulation"
            style={{
              opacity: scrollProgress >= dotPercentage ? 1 : 0.35,
              transform: `scale(${scale})`,
              background: gradient,
              transition:
                "transform 150ms ease-out, background 150ms ease-out, opacity 200ms ease-out",
            }}
          />
        );
      })}
    </Box>
  );
};

export default CustomScrollbar;