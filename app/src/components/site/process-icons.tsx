type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Audit: a winding revenue path examined by a magnifying glass. */
export function IconAuditPath({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M2.5 16.5c1.8-1 2.8-3 4.6-3s2.6 2 4.4 1 2.6-3 4.3-2.3" />
      <circle cx="17.6" cy="8.4" r="3.1" />
      <path d="M19.8 10.6 22 12.8" />
    </svg>
  );
}

/** Engineer: a hub node connected to three system nodes (architecture). */
export function IconEngineerSystem({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="4.8" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="4.8" cy="18" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="12" cy="18" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="19.2" cy="18" r="1.7" fill="currentColor" stroke="none" />
      <path d="M12 6.5V16M12 16 4.8 16M12 16v0M12 16l7.2 0" />
      <path d="M4.8 16.3V16M19.2 16.3V16" />
    </svg>
  );
}

/** Deploy: multiple channels converging into one connected system. */
export function IconDeployConnect({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M2.5 6.5h4.2M2.5 12h5.6M2.5 17.5h4.2" />
      <path d="M6.7 6.5 13 12M8.1 12h4.4M6.7 17.5 13 12" />
      <circle cx="13" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <path d="M14.8 12H21.5" />
    </svg>
  );
}

/** Improve: a performance dial with the needle reading high. */
export function IconMeasureImprove({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 16.5a8 8 0 0 1 16 0" />
      <path d="M4 16.5h1.4M18.6 16.5H20M6.6 10.6l1 1M17.4 10.6l-1 1" />
      <path d="M12 16.5 16.2 8.8" />
      <circle cx="12" cy="16.5" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}
