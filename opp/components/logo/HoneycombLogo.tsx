

// // components/ui/Honeycomb.tsx

// interface HoneycombProps {
//   size?: number;
//   color?: string;
// }

// export default function Honeycomb({
//   size = 24,
//   color = "#f97316",
// }: HoneycombProps) {

//   // scale factor (based on original 24px design)
//   const scale = size / 24;

//   const hexes = [
//     { left: -28, top: 0 },
//     { left: -14, top: 22 },
//     { left: 14, top: 22 },
//     { left: 28, top: 0 },
//     { left: 14, top: -22 },
//     { left: -14, top: -22 },
//   ];

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: size * 3,
//         height: size * 3,
//         display: "inline-block",
//       }}
//     >
//       {hexes.map((hex, i) => {
//         const bgColor = i === 4 ? "#000000" : color;

//         return (
//           <div
//             key={i}
//             style={{
//               position: "absolute",
//               left: hex.left * scale,
//               top: hex.top * scale,
//               width: 24 * scale,
//               height: 12 * scale,
//               background: bgColor,
//               marginTop: 6 * scale,
//             }}
//           >
//             {/* top */}
//             <div
//               style={{
//                 position: "absolute",
//                 top: -6 * scale,
//                 left: 0,
//                 right: 0,
//                 borderLeft: `${12 * scale}px solid transparent`,
//                 borderRight: `${12 * scale}px solid transparent`,
//                 borderBottom: `${6 * scale}px solid ${bgColor}`,
//               }}
//             />
//             {/* bottom */}
//             <div
//               style={{
//                 position: "absolute",
//                 bottom: -6 * scale,
//                 left: 0,
//                 right: 0,
//                 borderLeft: `${12 * scale}px solid transparent`,
//                 borderRight: `${12 * scale}px solid transparent`,
//                 borderTop: `${6 * scale}px solid ${bgColor}`,
//               }}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// }

interface HoneycombProps {
  size?: number;
  color?: string;
}

export default function Honeycomb({
  size = 12, // default now 12
  color = "#f97316",
}: HoneycombProps) {
  const scale = size / 24;

  const hexes = [
    { left: -28, top: 0 },
    { left: -14, top: 22 },
    { left: 14, top: 22 },
    { left: 28, top: 0 },
    { left: 14, top: -22 },
    { left: -14, top: -22 },
  ];

  return (
    <div
      style={{
        position: "relative",
        width: 60 * scale,   // tighter fit
        height: 60 * scale,  // tighter fit
        display: "inline-block",
      }}
    >
      {hexes.map((hex, i) => {
        const bgColor = i === 4 ? "#000000" : color;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: hex.left * scale,
              top: hex.top * scale,
              width: 24 * scale,
              height: 12 * scale,
              background: bgColor,
              marginTop: 6 * scale,
            }}
          >
            {/* top */}
            <div
              style={{
                position: "absolute",
                top: -6 * scale,
                borderLeft: `${12 * scale}px solid transparent`,
                borderRight: `${12 * scale}px solid transparent`,
                borderBottom: `${6 * scale}px solid ${bgColor}`,
              }}
            />
            {/* bottom */}
            <div
              style={{
                position: "absolute",
                bottom: -6 * scale,
                borderLeft: `${12 * scale}px solid transparent`,
                borderRight: `${12 * scale}px solid transparent`,
                borderTop: `${6 * scale}px solid ${bgColor}`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}