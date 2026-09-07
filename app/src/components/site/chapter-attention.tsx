import { useSectionReveal } from "../../hooks/use-section-reveal";

const CAPABILITIES = ["Creative", "Copy", "Campaigns", "Testing", "Management"];

function AdMockup() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-x-0 top-0 overflow-hidden rounded-lg border border-[#f5f1e8]/15 bg-[#161310] shadow-2xl">
        <div className="flex h-7 items-center gap-1.5 bg-[#1d1a15] px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#f5f1e8]/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#f5f1e8]/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#f5f1e8]/25" />
        </div>
        <div className="relative aspect-[16/10]">
          <img
            src="/assets/interior.jpg"
            alt="Advertising creative built for a home services client"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0c]/85 via-[#0e0d0c]/10 to-transparent" />
          <div className="absolute inset-x-5 bottom-4">
            <p className="font-display text-lg font-semibold leading-tight text-[#f5f1e8] lg:text-xl">
              Transform Your Space
            </p>
            <p className="mt-0.5 text-xs text-[#f5f1e8]/70">Custom. Reliable. Local.</p>
            <span className="mt-2 inline-block rounded bg-[#c9a24b] px-2.5 py-1 text-[10px] font-semibold text-[#0e0d0c]">
              Get A Quote
            </span>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 left-4 w-32 overflow-hidden rounded-2xl border-4 border-[#1d1a15] bg-[#161310] shadow-2xl lg:w-36">
        <div className="relative aspect-[9/16]">
          <img src="/assets/interior.jpg" alt="" aria-hidden className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0c]/90 via-[#0e0d0c]/25 to-transparent" />
          <div className="absolute inset-x-2.5 bottom-2.5">
            <p className="text-[10px] font-semibold leading-tight text-[#f5f1e8]">Quality Work.</p>
            <p className="text-[10px] font-semibold leading-tight text-[#f5f1e8]">Lasting Results.</p>
            <span className="mt-1 inline-block rounded bg-[#c9a24b] px-1.5 py-0.5 text-[8px] font-semibold text-[#0e0d0c]">
              Get A Quote
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ChapterAttention() {
  const containerRef = useSectionReveal<HTMLDivElement>();

  return (
    <section id="attention" className="border-t border-[#f5f1e8]/8 py-20 lg:py-28">
      <div ref={containerRef} className="mx-auto max-w-[1600px] px-6 lg:px-14">
        <p data-reveal className="vt-chapter-num">
          01 / Attention
        </p>

        <div className="mt-6 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-6">
            <h2 data-reveal className="vt-display-xl max-w-[16ch] text-[#f5f1e8]">
              Nobody buys from a business they&apos;ve never heard of.
            </h2>
            <p data-reveal className="mt-8 max-w-[36ch] text-base leading-relaxed text-[#f5f1e8]/60 lg:text-lg">
              We build and run the advertising.
            </p>
            <p data-reveal className="vt-meta-row mt-10">
              {CAPABILITIES.join(" / ")}
            </p>
          </div>

          <div data-reveal className="relative mt-6 aspect-[4/3] lg:col-span-6 lg:col-start-7 lg:mt-0">
            <AdMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
