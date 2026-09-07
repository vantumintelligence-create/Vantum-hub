import { useSectionReveal } from "../../hooks/use-section-reveal";

export function About() {
  const containerRef = useSectionReveal<HTMLDivElement>();

  return (
    <section id="about" className="border-t border-[#f5f1e8]/8 py-20 lg:py-24">
      <div
        ref={containerRef}
        className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-14"
      >
        <h2 data-reveal className="vt-display-xl max-w-[16ch] text-[#f5f1e8]">
          Built for businesses that are done doing growth manually.
        </h2>
        <p data-reveal className="max-w-[40ch] text-base leading-relaxed text-[#f5f1e8]/60">
          One team runs your advertising and your operations, so nothing falls through the
          cracks between them.
        </p>
      </div>
    </section>
  );
}
