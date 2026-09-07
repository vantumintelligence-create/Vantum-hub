import { useMagnetic } from "../../hooks/use-magnetic";

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
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1712] via-[#0d1712]/55 to-transparent" />
      </div>

      <div className="relative flex min-h-[92svh] items-end pb-20 pt-32 lg:min-h-screen lg:items-center lg:pb-0">
        <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-14">
          <div className="max-w-[15ch]">
            <h1 className="vt-display-mega text-[#f5f1e8]">
              Getting their attention is only half the job.
            </h1>
            <p className="mt-6 max-w-[38ch] text-base leading-relaxed text-[#f5f1e8]/65 lg:text-lg">
              We create the advertising that brings people in, and build what happens after
              they click.
            </p>
            <a ref={ctaRef} href="#contact" className="vt-cta group mt-10">
              Start a Project
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
        </div>
      </div>
    </section>
  );
}
