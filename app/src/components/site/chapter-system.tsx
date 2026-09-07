import { useSectionReveal } from "../../hooks/use-section-reveal";
import { useParallax } from "../../hooks/use-parallax";

const JOURNEY = ["Attention", "Click", "Experience", "Lead", "Response", "Follow-Up", "Booking"];

export function ChapterSystem() {
  const containerRef = useSectionReveal<HTMLDivElement>();
  const bgRef = useParallax<HTMLImageElement>(-12);

  return (
    <section
      id="conversion"
      className="relative overflow-hidden border-t border-[#f5f1e8]/8 bg-[#0a0908] py-20 lg:py-28"
    >
      <img
        ref={bgRef}
        src="/assets/system-v.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-1/4 top-0 h-full w-full max-w-none object-cover opacity-[0.28] lg:right-0 lg:w-2/3"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0908] via-[#0a0908]/70 to-transparent" />

      <div ref={containerRef} className="relative mx-auto max-w-[1600px] px-6 lg:px-14">
        <p data-reveal className="vt-chapter-num">
          04 / The System
        </p>

        <div
          data-reveal
          className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono-vt text-xs uppercase tracking-[0.18em] text-[#f5f1e8]/45 lg:text-sm"
        >
          {JOURNEY.map((step, i) => (
            <span key={step} className="flex items-center gap-3">
              {step}
              {i < JOURNEY.length - 1 && <span className="text-[#c9a24b]/50">&rarr;</span>}
            </span>
          ))}
        </div>

        <h2 data-reveal className="vt-display-mega mt-10 text-[#f5f1e8]">
          One system, start to finish.
        </h2>

        <p data-reveal className="mt-8 max-w-[36ch] text-base leading-relaxed text-[#f5f1e8]/60 lg:text-lg">
          Every stage feeds the next.
        </p>
      </div>
    </section>
  );
}
