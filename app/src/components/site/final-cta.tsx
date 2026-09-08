import { useMagnetic } from "../../hooks/use-magnetic";
import { openCalendlyPopup } from "../../lib/calendly";

export function FinalCta() {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.12);

  return (
    <section className="border-t border-[#f5f1e8]/8 py-28 lg:py-40">
      <div className="mx-auto flex max-w-[1600px] justify-center px-6 lg:px-14">
        <a ref={ctaRef} href="#" onClick={openCalendlyPopup} className="vt-cta group">
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
      </div>
    </section>
  );
}
