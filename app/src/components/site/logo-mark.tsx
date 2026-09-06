import { VMark } from "./v-mark";

type Props = { className?: string; withWordmark?: boolean };

export function LogoMark({ className, withWordmark = true }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <VMark animate={false} className="h-7 w-7 shrink-0" />
      {withWordmark && (
        <span className="leading-none">
          <span className="block font-display text-[15px] font-semibold tracking-[0.14em] text-[#f5f1e8]">
            VANTUM
          </span>
          <span className="block font-mono-vt text-[9px] tracking-[0.32em] text-[#c9a24b]">
            INTELLIGENCE
          </span>
        </span>
      )}
    </span>
  );
}
