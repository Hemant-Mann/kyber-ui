import { cn } from "../lib/cn";

type Point = {
  label: string;
  value: number;
};

const DEFAULT_POINTS: Point[] = [
  { label: "Nov", value: 168 },
  { label: "Dec", value: 184 },
  { label: "Jan", value: 196 },
  { label: "Feb", value: 212 },
  { label: "Mar", value: 206 },
  { label: "Apr", value: 214 },
];

export function SpendingTrendChart({
  points = DEFAULT_POINTS,
  max = 260,
  min = 0,
  className,
}: {
  points?: Point[];
  max?: number;
  min?: number;
  className?: string;
}) {
  const width = 100;
  const height = 40;
  const span = Math.max(max - min, 1);

  const toX = (index: number) => (index / Math.max(points.length - 1, 1)) * width;
  const toY = (value: number) => height - ((value - min) / span) * height;

  const line = points.map((point, index) => `${index === 0 ? "M" : "L"}${toX(index)},${toY(point.value)}`).join(" ");
  const area = `${line} L${width},${height} L0,${height} Z`;

  return (
    <div className={cn("kyb-chart", className)}>
      <svg className="kyb-chart__svg" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="kyb-chart-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#kyb-chart-fill)" opacity="0.4" />
        <path d={line} fill="none" stroke="hsl(var(--primary))" strokeWidth="0.8" />
      </svg>

      <div className="kyb-chart__axis">
        {points.map((point) => (
          <span key={point.label}>{point.label}</span>
        ))}
      </div>
    </div>
  );
}
