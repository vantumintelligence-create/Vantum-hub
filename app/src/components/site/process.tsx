import { IconArrowRight } from "./icons";
import {
  IconAuditPath,
  IconEngineerSystem,
  IconDeployConnect,
  IconMeasureImprove,
} from "./process-icons";
import { useDrawLine } from "../../hooks/use-draw-line";
import { useSectionReveal } from "../../hooks/use-section-reveal";

const STAGES = [
  {
    n: "01",
    icon: IconAuditPath,
    title: "Audit The Revenue Path",
    body: "We map how prospects find you, contact you, get followed up with, and become customers. Then we identify where attention, leads, and revenue are being lost.",
  },
  {
    n: "02",
    icon: IconEngineerSystem,
    title: "Engineer The System",
    body: "We design the right combination of advertising, creative, CRM workflows, AI, follow-up, and automation around how your business actually operates.",
  },
  {
    n: "03",
    icon: IconDeployConnect,
    title: "Deploy & Connect",
    body: "We launch the campaigns and connect the systems behind them: lead capture, routing, SMS, email, missed-call response, reviews, reactivation, and reporting.",
  },
  {
    n: "04",
    icon: IconMeasureImprove,
    title: "Measure & Improve",
    body: "We use real performance data to improve creative, campaigns, follow-up, and workflows, eliminating weak points and expanding what produces results.",
  },
];

export function Process() {
  const { sectionRef, lineRef } = useDrawLine<HTMLDivElement>();
  const containerRef = useSectionReveal<HTMLDivElement>();
  const mobileRef = useSectionReveal<HTMLOListElement>("li");

  return (
    <section id="process" className="border-t border-[#292A29] bg-[#080909] py-14 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-8">
          <div>
            <p className="vt-reveal font-mono-vt text-xs uppercase tracking-[0.28em] text-[#D6A83E]">
              Our Approach
            </p>
            <h2 className="vt-reveal vt-reveal-1 mt-4 max-w-lg font-display text-3xl font-semibold tracking-tight text-[#F1F0EC] md:text-4xl">
              We Don&apos;t Sell Random Services. We Build The System.
            </h2>
          </div>
          <p className="vt-reveal vt-reveal-1 max-w-sm text-sm leading-relaxed text-[#A7A6A1]">
            From the first click to the final follow-up, we identify where growth is being
            lost, connect the right systems, and continuously improve what drives results.
          </p>
        </div>

        {/* Desktop: one connected horizontal system flow. */}
        <div ref={sectionRef} className="relative mt-14 hidden lg:block">
          <div className="pointer-events-none absolute inset-x-0 top-8 h-px bg-[#D6A83E]/15" />
          <div ref={lineRef} className="pointer-events-none absolute inset-x-0 top-8 h-px bg-[#D6A83E]/60" />
          {[25, 50, 75].map((pos) => (
            <span
              key={pos}
              style={{ left: `${pos}%` }}
              className="pointer-events-none absolute top-8 -translate-x-1/2 -translate-y-1/2 text-[#D6A83E]/70"
            >
              <IconArrowRight className="h-3 w-3" />
            </span>
          ))}
          <div ref={containerRef} className="grid grid-cols-4 gap-6">
            {STAGES.map(({ n, icon: Icon, title, body }) => (
              <div
                key={n}
                data-reveal
                className="relative overflow-hidden px-1 pt-2 text-center"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 -top-3 select-none font-display text-[6.5rem] font-semibold leading-none text-[#D6A83E]/[0.06]"
                >
                  {n}
                </span>
                <div className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-full border border-[#292A29] bg-[#121313]">
                  <Icon className="h-6 w-6 text-[#D6A83E]" />
                </div>
                <h3 className="relative z-10 mt-4 font-display text-sm font-semibold uppercase tracking-wide text-[#F1F0EC]">
                  {title}
                </h3>
                <p className="relative z-10 mt-2.5 text-sm leading-relaxed text-[#A7A6A1]">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: compact vertical timeline. */}
        <ol ref={mobileRef} className="relative mt-10 space-y-8 border-l border-[#D6A83E]/35 pl-8 lg:hidden">
          {STAGES.map(({ n, icon: Icon, title, body }) => (
            <li
              key={n}
              data-reveal
              className="relative overflow-hidden"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-2 -top-4 select-none font-display text-6xl font-semibold leading-none text-[#D6A83E]/[0.08]"
              >
                {n}
              </span>
              <span className="absolute -left-12 top-0.5 h-2 w-2 rounded-full bg-[#D6A83E]" />
              <div className="relative z-10 flex items-center gap-2">
                <Icon className="h-4 w-4 shrink-0 text-[#D6A83E]" />
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-[#F1F0EC]">
                  {title}
                </h3>
              </div>
              <p className="relative z-10 mt-1.5 text-sm leading-relaxed text-[#A7A6A1]">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
