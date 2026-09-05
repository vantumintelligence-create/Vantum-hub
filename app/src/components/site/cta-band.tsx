import { IconArrowRight } from "./icons";

const POINTS = ["More Customers", "Better Systems", "A Stronger Business"];

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <img
        src="/assets/cta-mountains.jpg"
        alt="Golden sunrise breaking over a dark mountain range"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0906] via-[#0b0906]/70 to-[#0b0906]/30" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10">
        <div>
          <p className="vt-reveal font-mono-vt text-xs uppercase tracking-[0.28em] text-[#c9a24b]">
            Ready to grow?
          </p>
          <h2 className="vt-reveal vt-reveal-1 mt-4 max-w-lg font-display text-3xl font-semibold tracking-tight text-[#f5f1e8] md:text-4xl">
            Let&apos;s Build What&apos;s Next.
          </h2>
          <p className="vt-reveal vt-reveal-2 mt-4 max-w-md text-sm leading-relaxed text-[#f5f1e8]/60">
            Get a custom strategy tailored to your business goals.
          </p>
          <a
            href="#contact"
            className="vt-reveal vt-reveal-3 group mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-[#c9a24b] px-6 py-3.5 text-sm font-medium text-[#0b0906] transition-[transform,box-shadow] duration-150 hover:shadow-[0_0_0_1px_#e3bd6c,0_0_28px_rgba(201,162,75,0.45)] active:translate-y-px active:skew-x-[0.5deg] active:scale-[0.98]"
          >
            Get Your Free Audit
            <IconArrowRight className="h-4 w-4" />
          </a>
        </div>
        <ul className="vt-reveal vt-reveal-2 space-y-2 font-mono-vt text-xs uppercase tracking-[0.24em] text-[#c9a24b]/80">
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
