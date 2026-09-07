import { useMagnetic } from "../../hooks/use-magnetic";

export function FinalCta() {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.15);

  return (
    <section className="border-t border-[#f5f1e8]/8 py-24 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-14">
        <h2 className="vt-display-mega max-w-[14ch] text-[#f5f1e8]">
          Have a business worth improving?
        </h2>
        <p className="mt-6 max-w-[38ch] text-base leading-relaxed text-[#f5f1e8]/60 lg:text-lg">
          Let&apos;s see what&apos;s being left on the table.
        </p>
        <a ref={ctaRef} href="#contact" className="vt-cta group mt-10">
          Book a Strategy Call
          <span className="vt-cta-rule" />
          <svg
            className="vt-cta-arrow h-3.5 w-3.5"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="M2 8h11M8 3l5 5-5 5" />
          </svg>
        </a>
        <p className="mt-3 font-mono-vt text-[10px] uppercase tracking-[0.2em] text-[#f5f1e8]/35">
          100% Free
        </p>
      </div>
    </section>
  );
}
