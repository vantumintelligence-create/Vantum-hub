type IconProps = { className?: string };

/** Higgsfield-generated gold 3D icon set (public/assets/icons). */
function ImgIcon({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} aria-hidden={alt === ""} className={`inline-block object-contain ${className ?? ""}`} />;
}

export function IconBarChart({ className }: IconProps) {
  return <ImgIcon src="/assets/icons/bar-chart.png" alt="" className={className} />;
}

export function IconBolt({ className }: IconProps) {
  return <ImgIcon src="/assets/icons/bolt.png" alt="" className={className} />;
}

export function IconPeople({ className }: IconProps) {
  return <ImgIcon src="/assets/icons/people.png" alt="" className={className} />;
}

export function IconMegaphone({ className }: IconProps) {
  return <ImgIcon src="/assets/icons/megaphone.png" alt="" className={className} />;
}

export function IconGear({ className }: IconProps) {
  return <ImgIcon src="/assets/icons/gear.png" alt="" className={className} />;
}

export function IconChat({ className }: IconProps) {
  return <ImgIcon src="/assets/icons/chat.png" alt="" className={className} />;
}

export function IconTarget({ className }: IconProps) {
  return <ImgIcon src="/assets/icons/target.png" alt="" className={className} />;
}

export function IconPlay({ className }: IconProps) {
  return <ImgIcon src="/assets/icons/play.png" alt="" className={className} />;
}

const arrowBase = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...arrowBase}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
