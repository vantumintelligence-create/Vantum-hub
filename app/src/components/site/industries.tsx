import { useSectionReveal } from "../../hooks/use-section-reveal";

const INDUSTRIES = [
  "Home Services",
  "Medical & Dental",
  "Real Estate",
  "Automotive",
  "Law Firms",
  "E-Commerce",
  "and More",
];

export function Industries() {
  const containerRef = useSectionReveal<HTMLDivElement>();

  return (
    <section className="border-t border-[#f5f1e8]/8 py-12">
      <div ref={containerRef} className="mx-auto max-w-[1600px] px-6 lg:px-14">
        <p data-reveal className="vt-meta-row text-center lg:text-left">
          We work with: {INDUSTRIES.join(" / ")}
        </p>
      </div>
    </section>
  );
}
