import { useSectionReveal } from "../../hooks/use-section-reveal";

const MAYBES = [
  "Maybe the advertising is weak.",
  "Maybe leads are already coming in and nobody is following up.",
  "Maybe the website is making the sale harder.",
  "Maybe everything works individually and nothing works together.",
];

export function Process() {
  const containerRef = useSectionReveal<HTMLDivElement>();

  return (
    <section id="process" className="border-t border-[#f5f1e8]/8 bg-[#121d17] py-24 lg:py-40">
      <div ref={containerRef} className="mx-auto max-w-[1600px] px-6 lg:px-14">
        <h2 data-reveal className="vt-display-xl max-w-[18ch] text-[#f5f1e8]">
          Before we touch anything, we figure out what&apos;s actually wrong.
        </h2>
        <div
          data-reveal
          className="mt-8 max-w-[46ch] space-y-1.5 text-base leading-relaxed text-[#f5f1e8]/55 lg:text-lg"
        >
          {MAYBES.map((m) => (
            <p key={m}>{m}</p>
          ))}
        </div>

        <h2 data-reveal className="vt-display-xl mt-20 max-w-[20ch] text-[#f5f1e8] lg:mt-28">
          Not everything needs fixing. We decide what&apos;s worth building.
        </h2>

        <p data-reveal className="mt-8 max-w-[52ch] text-base leading-relaxed text-[#f5f1e8]/55 lg:text-lg">
          That might be new ads, a new website, better follow-up, or automation stitched
          underneath all three.
        </p>

        <h2 data-reveal className="vt-display-xl mt-20 max-w-[18ch] text-[#f5f1e8] lg:mt-28">
          After that, we watch what actually happens.
        </h2>
        <div data-reveal className="mt-6 space-y-1.5 text-base leading-relaxed text-[#f5f1e8]/55 lg:text-lg">
          <p>What works stays.</p>
          <p>What wastes money changes.</p>
        </div>
      </div>
    </section>
  );
}
