import { useMagnetic } from "../../hooks/use-magnetic";
import { openCalendlyPopup } from "../../lib/calendly";

export function Opening() {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.15);

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <picture>
          <source media="(min-width: 1600px)" srcSet="/assets/hero-v-2560.webp" />
          <source media="(min-width: 1024px)" srcSet="/assets/hero-v-1920.webp" />
          <source media="(min-width: 640px)" srcSet="/assets/hero-v-1280.webp" />
          <img
            src="/assets/hero-v-800.webp"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-right"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0d0c] via-[#0e0d0c]/55 to-transparent" />
      </div>

      <div className="relative flex min-h-[92svh] items-end pb-20 pt-32 lg:min-h-screen lg:items-center lg:pb-0">
        <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-14">
          <div className="max-w-[15ch]">
            <h1 className="vt-display-mega text-[#f5f1e8]">
              Advertising, automation, web.
            </h1>
            <p className="mt-6 max-w-[30ch] text-base leading-relaxed text-[#f5f1e8]/65 lg:text-lg">
              Built together, not sold separately.
            </p>
            <a ref={ctaRef} href="#" onClick={openCalendlyPopup} className="vt-cta group mt-10">
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
        </div>
      </div>
    </section>
  );
}
