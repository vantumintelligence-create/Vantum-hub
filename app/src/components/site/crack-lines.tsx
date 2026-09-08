type Props = {
  className?: string;
  variant?: 1 | 2 | 3;
};

const PATHS: Record<1 | 2 | 3, { d: string; stroke: string; opacity: number }[]> = {
  1: [
    {
      d: "M-40 140 L260 190 L320 100 L600 250 L540 350 L880 430 L820 310 L1180 490 L1130 610 L1660 700",
      stroke: "#f5f1e8",
      opacity: 0.07,
    },
    {
      d: "M1660 90 L1400 210 L1460 310 L1150 250 L1200 390 L840 370",
      stroke: "#c9a24b",
      opacity: 0.09,
    },
  ],
  2: [
    {
      d: "M1660 60 L1340 40 L1290 150 L1000 100 L1040 220 L680 170",
      stroke: "#f5f1e8",
      opacity: 0.06,
    },
    {
      d: "M-40 780 L220 700 L180 600 L480 640 L440 520 L820 560 L780 450",
      stroke: "#c9a24b",
      opacity: 0.08,
    },
  ],
  3: [
    {
      d: "M-40 400 L200 380 L240 460 L520 420 L500 520 L820 480",
      stroke: "#f5f1e8",
      opacity: 0.06,
    },
    {
      d: "M1660 520 L1420 560 L1460 640 L1180 610 L1210 700",
      stroke: "#c9a24b",
      opacity: 0.08,
    },
  ],
};

export function CrackLines({ className = "", variant = 1 }: Props) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1600 900"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {PATHS[variant].map((p, i) => (
        <path
          key={i}
          d={p.d}
          stroke={p.stroke}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={p.opacity}
        />
      ))}
    </svg>
  );
}
