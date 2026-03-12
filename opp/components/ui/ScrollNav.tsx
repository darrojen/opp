// "use client";

// import Box from "@/components/ui/box";
// import { useEffect, useState, useRef } from "react";

// const CustomScrollbar = () => {
//   const numDots = 7;
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

//   const handleClick = (idx: number) => {
//     const docHeight = document.body.scrollHeight - window.innerHeight;
//     const targetScroll = (idx / numDots) * docHeight;
//     window.scrollTo({ top: targetScroll, behavior: "smooth" });
//   };

//   // Mac Dock-like wavelike scale
//   const calculateScale = (idx: number) => {
//     const dotPercentage = ((idx + 1) / numDots) * 100;
//     const distance = Math.abs(scrollProgress - dotPercentage);

//     let scale = 1 + Math.exp(-(distance * distance) / 50);
//     if (scale > 2) scale = 2;

//     if (hoveredDot === idx) scale = 2.4;
//     return scale;
//   };

//   // Brighten color on hover
//   const calculateColor = (idx: number) => {
//     const baseColor = [6, 231, 70]; // #06e746
//     if (hoveredDot === idx) {
//       // brighten by 30%
//       const brightened = baseColor.map((c) =>
//         Math.min(Math.floor(c * 1.3), 255)
//       );
//       return `rgb(${brightened.join(",")})`;
//     }
//     return `rgb(${baseColor.join(",")})`;
//   };

//   return (
//     <Box as="div"
//       className={`fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-2 z-50 cursor-pointer transition-opacity duration-500 ${
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
//         const dotPercentage = ((idx + 1) / numDots) * 100;
//         const color = calculateColor(idx);

//         return (
//           <Box as="span"
//             key={idx}
//             onClick={() => handleClick(idx + 1)}
//             onMouseEnter={() => setHoveredDot(idx)}
//             onMouseLeave={() => setHoveredDot(null)}
//             className="w-3 h-3 rounded-full transition-transform duration-150 ease-out"
//             style={{
//               opacity: scrollProgress >= dotPercentage ? 1 : 0.3,
//               transform: `scale(${scale})`,
//               backgroundColor: color,
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

  const handleClick = (idx: number) => {
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const targetScroll = (idx / numDots) * docHeight;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  // Mac Dock-like wavelike scale
  const calculateScale = (idx: number) => {
    const dotPercentage = ((idx + 1) / numDots) * 100;
    const distance = Math.abs(scrollProgress - dotPercentage);

    let scale = 1 + Math.exp(-(distance * distance) / 50);
    if (scale > 2) scale = 2;

    if (hoveredDot === idx) scale = 2.4;
    return scale;
  };

  // Set color based on hover
  const calculateColor = (idx: number) => {
    // return hoveredDot === idx ? "#6a7a86" : "#32404b";
    return hoveredDot === idx ? "#a4a8ab" : "#7d858b";
  };

  return (
    <Box
      as="div"
      className={`fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-2 z-50 cursor-pointer transition-opacity duration-500 ${
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
        const dotPercentage = ((idx + 1) / numDots) * 100;
        const color = calculateColor(idx);

        return (
          <Box
            as="span"
            key={idx}
            onClick={() => handleClick(idx + 1)}
            onMouseEnter={() => setHoveredDot(idx)}
            onMouseLeave={() => setHoveredDot(null)}
            className="w-3 h-3 rounded-full transition-transform duration-150 ease-out"
            style={{
              opacity: scrollProgress >= dotPercentage ? 1 : 0.3,
              transform: `scale(${scale})`,
              backgroundColor: color,
              transition: "transform 150ms ease-out, background-color 150ms ease-out",
            }}
          />
        );
      })}
    </Box>
  );
};

export default CustomScrollbar;