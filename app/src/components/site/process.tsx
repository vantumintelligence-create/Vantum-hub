import { useSectionReveal } from "../../hooks/use-section-reveal";

const STEPS = [
  { n: "01", label: "Find what's not working." },
  { n: "02", label: "Build only what's needed." },
  { n: "03", label: "Watch it, then adjust." },
];

export function Process() {
  const containerRef = useSectionReveal<HTMLDivElement>();

  return (
    <section id="process" className="border-t border-[#f5f1e8]/8 bg-[#171513] py-20 lg:py-24">
      <div ref={containerRef} className="mx-auto max-w-[1600px] px-6 lg:px-14">
        <p data-reveal className="vt-chapter-num">
          How We Work
        </p>
        <div className="mt-10">
          {STEPS.map((s) => (
            <div
              key={s.n}
              data-reveal
              className="flex items-baseline gap-6 border-t border-[#f5f1e8]/12 py-6 lg:gap-10 lg:py-8"
            >
              <span className="font-mono-vt text-xs text-[#c9a24b]">{s.n}</span>
              <h3 className="font-display text-xl font-semibold text-[#f5f1e8] lg:text-2xl">
                {s.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
