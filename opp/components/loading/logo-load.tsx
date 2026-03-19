// components/ui/HoneycombLoader.tsx
import './load.css';

interface HoneycombLoaderProps {
  size?: number;
  color?: string;
  speed?: number;
}

type HexStyle = React.CSSProperties & {
  '--hex-color': string;
};

export default function HoneycombLoader({
  size = 24,
  color = '#f97316',
  speed = 2.1,
}: HoneycombLoaderProps) {
  const hexes = [
    { left: -28, top: 0, delay: 0 },
    { left: -14, top: 22, delay: 0.1 },
    { left: 14, top: 22, delay: 0.2 },
    { left: 28, top: 0, delay: 0.3 },
    { left: 14, top: -22, delay: 0.4 }, // 👈 black
    { left: -14, top: -22, delay: 0.5 },
  ];

  return (
    <div
      className="honeycomb"
      style={{
        height: `${size}px`,
        width: `${size}px`,
      }}
    >
      {hexes.map((hex, i) => {
        const bgColor = i === 4 ? '#000000' : color;

        const style: HexStyle = {
          left: `${hex.left}px`,
          top: `${hex.top}px`,
          animationDelay: `${hex.delay}s`,
          background: bgColor,
          '--hex-color': bgColor,
        };

        return <div key={i} style={style} />;
      })}
    </div>
  );
}