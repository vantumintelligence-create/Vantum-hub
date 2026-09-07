import { useSectionReveal } from "../../hooks/use-section-reveal";

const CAPABILITIES = ["Creative", "Copy", "Campaigns", "Testing", "Management"];

export function ChapterAttention() {
  const containerRef = useSectionReveal<HTMLDivElement>();

  return (
    <section id="attention" className="border-t border-[#f5f1e8]/8 py-20 lg:py-28">
      <div ref={containerRef} className="mx-auto max-w-[1600px] px-6 lg:px-14">
        <p data-reveal className="vt-chapter-num">
          01 / Attention
        </p>
        <h2 data-reveal className="vt-display-xl mt-6 max-w-[16ch] text-[#f5f1e8]">
          Nobody buys from a business they&apos;ve never heard of.
        </h2>
        <p data-reveal className="mt-10 max-w-[36ch] text-base leading-relaxed text-[#f5f1e8]/60 lg:text-lg">
          We build and run the advertising.
        </p>

        <div
          data-reveal
          className="relative mt-12 aspect-[16/9] overflow-hidden lg:mt-16 lg:aspect-[21/9]"
        >
          <img
            src="/assets/interior.jpg"
            alt="Advertising creative built for a home services client"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0c] via-[#0e0d0c]/10 to-transparent" />
          <div className="absolute inset-x-6 bottom-6 lg:inset-x-14 lg:bottom-10">
            <p className="font-display text-xl font-semibold text-[#f5f1e8] lg:text-3xl">
              Transform Your Space
            </p>
            <p className="mt-1 text-sm text-[#f5f1e8]/70 lg:text-base">Custom. Reliable. Local.</p>
          </div>
        </div>

        <p data-reveal className="vt-meta-row mt-10">
          {CAPABILITIES.join(" / ")}
        </p>
      </div>
    </section>
  );
}
