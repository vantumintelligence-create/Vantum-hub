type Props = { className?: string; animate?: boolean };

export function VMark({ className, animate = true }: Props) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <defs>
        <linearGradient id="vGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e3bd6c" />
          <stop offset="100%" stopColor="#c9a24b" />
        </linearGradient>
      </defs>
      <path
        d="M18 14 L100 176 L182 14"
        fill="none"
        stroke="#c9a24b"
        strokeOpacity="0.18"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(0 -8) scale(1.06)"
        style={{ transformOrigin: "100px 100px" }}
      />
      <path
        d="M18 14 L100 176 L182 14"
        fill="none"
        stroke="url(#vGrad)"
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animate ? "vt-draw" : undefined}
        pathLength={100}
      />
      <path
        d="M100 176 L100 76"
        fill="none"
        stroke="url(#vGrad)"
        strokeOpacity="0.55"
        strokeWidth="5"
        strokeLinecap="round"
        className={animate ? "vt-draw vt-draw-delay" : undefined}
        pathLength={100}
      />
    </svg>
  );
}
