import { useSectionReveal } from "../../hooks/use-section-reveal";

const CAPABILITIES = ["Websites", "Landing Pages", "Mobile", "Lead Capture", "Tracking", "Deployment"];

export function ChapterClick() {
  const containerRef = useSectionReveal<HTMLDivElement>();

  return (
    <section id="experience" className="border-t border-[#f5f1e8]/8 bg-[#121d17] py-24 lg:py-40">
      <div ref={containerRef} className="mx-auto max-w-[1600px] px-6 lg:px-14">
        <p data-reveal className="vt-chapter-num">
          02 / The Click
        </p>
        <div
          data-reveal
          className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1 font-mono-vt text-xs uppercase tracking-[0.2em] text-[#f5f1e8]/40"
        >
          <span>They saw you.</span>
          <span className="text-[#c9a24b]">They clicked.</span>
        </div>
        <h2 data-reveal className="vt-display-xl mt-6 max-w-[16ch] text-[#f5f1e8]">
          Where you send them matters.
        </h2>
        <p data-reveal className="mt-8 max-w-[46ch] text-base leading-relaxed text-[#f5f1e8]/60 lg:text-lg">
          If someone clicks an ad and lands somewhere that makes them hesitate, the campaign is
          already working harder than it should.
        </p>

        <div
          data-reveal
          className="relative mt-16 overflow-hidden rounded-lg border border-[#f5f1e8]/10 lg:mt-24"
        >
          <div className="flex h-8 items-center gap-1.5 bg-[#0d1712] px-4">
            <span className="h-2 w-2 rounded-full bg-[#f5f1e8]/20" />
            <span className="h-2 w-2 rounded-full bg-[#f5f1e8]/20" />
            <span className="h-2 w-2 rounded-full bg-[#f5f1e8]/20" />
          </div>
          <div className="relative aspect-[16/9]">
            <img
              src="/assets/interior.jpg"
              alt="A fast-loading landing page built for a home services client"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <p data-reveal className="vt-meta-row mt-10">
          {CAPABILITIES.join(" / ")}
        </p>
      </div>
    </section>
  );
}
