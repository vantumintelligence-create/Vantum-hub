import { useSectionReveal } from "../../hooks/use-section-reveal";

export function About() {
  const containerRef = useSectionReveal<HTMLDivElement>();

  return (
    <section id="about" className="border-t border-[#f5f1e8]/8 py-24 lg:py-32">
      <div
        ref={containerRef}
        className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-14"
      >
        <h2 data-reveal className="vt-display-xl max-w-[16ch] text-[#f5f1e8]">
          Built for businesses that are done doing growth manually.
        </h2>
        <div data-reveal className="space-y-5 text-base leading-relaxed text-[#f5f1e8]/60">
          <p>
            Vantum Intelligence exists because most local and regional businesses are stuck
            juggling ad platforms, missed calls, and follow-up that never happens. We run the
            marketing and the operations side by side, so leads don&apos;t fall through the
            cracks between the two.
          </p>
          <p>
            We work as an extension of your team: one point of contact, one system of record,
            and a plan built around your goals instead of a generic package. What we build for
            you, you own.
          </p>
        </div>
      </div>
    </section>
  );
}
