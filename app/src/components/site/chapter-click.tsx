import { useSectionReveal } from "../../hooks/use-section-reveal";

const CAPABILITIES = ["Websites", "Landing Pages", "Mobile", "Lead Capture", "Tracking", "Deployment"];

export function ChapterClick() {
  const containerRef = useSectionReveal<HTMLDivElement>();

  return (
    <section id="experience" className="border-t border-[#f5f1e8]/8 bg-[#171513] py-20 lg:py-28">
      <div ref={containerRef} className="mx-auto max-w-[1600px] px-6 lg:px-14">
        <p data-reveal className="vt-chapter-num">
          02 / The Click
        </p>
        <h2 data-reveal className="vt-display-xl mt-6 max-w-[16ch] text-[#f5f1e8]">
          Where you send them matters.
        </h2>
        <p data-reveal className="mt-8 max-w-[36ch] text-base leading-relaxed text-[#f5f1e8]/60 lg:text-lg">
          A bad landing page wastes a good ad.
        </p>

        {/* Real interface, not a photo: the actual landing-page pattern, not a generic laptop mockup. */}
        <div
          data-reveal
          className="relative mt-12 overflow-hidden rounded-lg border border-[#f5f1e8]/10 lg:mt-16"
        >
          <div className="flex h-8 items-center gap-1.5 bg-[#0a0908] px-4">
            <span className="h-2 w-2 rounded-full bg-[#f5f1e8]/20" />
            <span className="h-2 w-2 rounded-full bg-[#f5f1e8]/20" />
            <span className="h-2 w-2 rounded-full bg-[#f5f1e8]/20" />
            <span className="ml-3 font-mono-vt text-[9px] tracking-[0.1em] text-[#f5f1e8]/25">
              yourcompany.com
            </span>
          </div>
          <div className="relative flex aspect-[16/9] flex-col justify-center bg-[#0e0d0c] p-8 sm:p-12 lg:p-16">
            <p className="font-mono-vt text-[10px] uppercase tracking-[0.2em] text-[#c9a24b]">
              Home Services
            </p>
            <h3 className="mt-3 max-w-md font-display text-xl font-semibold leading-tight text-[#f5f1e8] sm:text-2xl lg:text-3xl">
              Same-Day Repairs. No Surprise Charges.
            </h3>
            <p className="mt-2 max-w-sm text-sm text-[#f5f1e8]/55">
              Licensed, insured, and in your neighborhood.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="vt-cta">
                Get a Free Quote
                <span className="vt-cta-rule" />
              </span>
              <span className="text-sm text-[#f5f1e8]/35">or call (555) 019-2044</span>
            </div>
          </div>
        </div>

        <p data-reveal className="vt-meta-row mt-10">
          {CAPABILITIES.join(" / ")}
        </p>
      </div>
    </section>
  );
}
