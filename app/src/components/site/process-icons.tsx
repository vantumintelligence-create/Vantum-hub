type IconProps = { className?: string };

/** Higgsfield-generated gold 3D icon set (public/assets/icons). */
function ImgIcon({ src, className }: { src: string; className?: string }) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`inline-block object-contain ${className ?? ""}`}
    />
  );
}

export function IconAuditPath({ className }: IconProps) {
  return <ImgIcon src="/assets/icons/audit.png" className={className} />;
}

export function IconEngineerSystem({ className }: IconProps) {
  return <ImgIcon src="/assets/icons/engineer.png" className={className} />;
}

export function IconDeployConnect({ className }: IconProps) {
  return <ImgIcon src="/assets/icons/deploy.png" className={className} />;
}

export function IconMeasureImprove({ className }: IconProps) {
  return <ImgIcon src="/assets/icons/improve.png" className={className} />;
}
