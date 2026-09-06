import { IconArrowRight } from "./icons";
import { useParallax } from "../../hooks/use-parallax";
import { useSectionReveal } from "../../hooks/use-section-reveal";

const POINTS = ["More Customers", "Better Systems", "A Stronger Business"];

export function CtaBand() {
  const bgRef = useParallax<HTMLImageElement>(14);
  const containerRef = useSectionReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <img
        ref={bgRef}
        src="/assets/cta-mountains.jpg"
        alt="Golden dawn light breaking over a dark emerald pine forest"
        className="absolute inset-0 h-[130%] w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1712] via-[#0d1712]/70 to-[#0d1712]/30" />
      <div ref={containerRef} className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10">
        <div data-reveal>
          <p className="font-mono-vt text-xs uppercase tracking-[0.28em] text-[#c9a24b]">
            Ready to grow?
          </p>
          <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold tracking-tight text-[#f5f1e8] md:text-4xl">
            Let&apos;s Build What&apos;s Next.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#f5f1e8]/60">
            Get a custom strategy tailored to your business goals.
          </p>
          <a
            href="#contact"
            className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#c9a24b] px-6 py-3.5 text-sm font-medium text-[#0d1712] transition-[transform,box-shadow] duration-150 hover:shadow-[0_0_0_1px_#e3bd6c,0_0_28px_rgba(201,162,75,0.45)] active:translate-y-px active:skew-x-[0.5deg] active:scale-[0.98]"
          >
            Get Your Free Audit
            <IconArrowRight className="h-4 w-4" />
          </a>
        </div>
        <ul data-reveal className="space-y-2 font-mono-vt text-xs uppercase tracking-[0.24em] text-[#c9a24b]/80">
          {POINTS.map((p) => (
            <li key={p} className="border-t border-[#c9a24b]/25 pt-2 first:border-0 first:pt-0">
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
