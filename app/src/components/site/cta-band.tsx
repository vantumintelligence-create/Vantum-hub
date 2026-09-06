import { IconArrowRight } from "./icons";
import { VMark } from "./v-mark";
import { useSectionReveal } from "../../hooks/use-section-reveal";

const POINTS = ["More Customers", "Better Systems", "A Stronger Business"];

export function CtaBand() {
  const containerRef = useSectionReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-[#0a120d] py-28 lg:py-36">
      <div
        aria-hidden="true"
        className="vt-drift-bg pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(45% 55% at 78% 30%, rgba(201,162,75,0.22), transparent 60%), radial-gradient(35% 45% at 15% 80%, rgba(201,162,75,0.12), transparent 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[560px] w-[560px] opacity-[0.07] lg:-right-10 lg:top-1/2 lg:-translate-y-1/2"
      >
        <VMark animate={false} className="h-full w-full" />
      </div>
      <div
        ref={containerRef}
        className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10"
      >
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
