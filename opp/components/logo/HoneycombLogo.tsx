// components/ui/HoneycombLogo.tsx
interface HoneycombLogoProps {
  size?: number
  color?: string
  speed?: number
  text?: string
}

export default function HoneycombLogo({
  size = 36,
  color = "#f97316",
  speed = 2.1,
  text = "opp",
}: HoneycombLogoProps) {
  const hexes = [
    { x: -18, y: 0, delay: 0 },
    { x: -9, y: 15, delay: 0.1 },
    { x: 9, y: 15, delay: 0.2 },
    { x: 18, y: 0, delay: 0.3 },
    { x: 9, y: -15, delay: 0.4 }, // 👈 black
    { x: -9, y: -15, delay: 0.5 },
  ]

  const hexPath = "M12 2 L22 8 L22 20 L12 26 L2 20 L2 8 Z"

  return (
    <div className="flex items-center gap-2">
      {/* SVG ICON */}
      <svg
        width={size}
        height={size}
        viewBox="-35 -35 70 70"
        fill="none"
      >
        {hexes.map((hex, i) => {
          const fill = i === 4 ? "#000000" : color

          return (
            <g key={i} transform={`translate(${hex.x}, ${hex.y})`}>
              <path
                d={hexPath}
                fill={fill}
                style={{
                  transformOrigin: "center",
                  animation: `honeycomb ${speed}s infinite`,
                  animationDelay: `${hex.delay}s`,
                }}
              />
            </g>
          )
        })}

        <style>
          {`
          @keyframes honeycomb {
            0%,20%,80%,100% {
              opacity: 0;
              transform: scale(0);
            }
            30%,70% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
        </style>
      </svg>

      {/* TEXT */}
      <span className="text-lg font-semibold tracking-tight text-black">
        {text}
      </span>
    </div>
  )
}