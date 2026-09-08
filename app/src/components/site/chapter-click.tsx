import { useSectionReveal } from "../../hooks/use-section-reveal";
import { CrackLines } from "./crack-lines";

const CAPABILITIES = ["Websites", "Landing Pages", "Mobile", "Lead Capture", "Tracking", "Deployment"];

function BrowserFrame({
  src,
  alt,
  label,
  tone,
}: {
  src: string;
  alt: string;
  label: string;
  tone: "bad" | "good";
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#f5f1e8]/10">
      <div className="flex h-8 items-center gap-1.5 bg-[#0a0908] px-4">
        <span className="h-2 w-2 rounded-full bg-[#f5f1e8]/20" />
        <span className="h-2 w-2 rounded-full bg-[#f5f1e8]/20" />
        <span className="h-2 w-2 rounded-full bg-[#f5f1e8]/20" />
        <span
          className={`ml-3 font-mono-vt text-[9px] uppercase tracking-[0.14em] ${
            tone === "good" ? "text-[#c9a24b]" : "text-[#f5f1e8]/35"
          }`}
        >
          {label}
        </span>
      </div>
      <img src={src} alt={alt} className="aspect-[16/9] w-full object-cover" />
    </div>
  );
}

export function ChapterClick() {
  const containerRef = useSectionReveal<HTMLDivElement>();

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-[#f5f1e8]/8 bg-[#171513] py-20 lg:py-28"
    >
      <CrackLines variant={1} />
      <div ref={containerRef} className="relative mx-auto max-w-[1600px] px-6 lg:px-14">
        <p data-reveal className="vt-chapter-num">
          02 / The Click
        </p>
        <h2 data-reveal className="vt-display-xl mt-6 max-w-[16ch] text-[#f5f1e8]">
          Where you send them matters.
        </h2>
        <p data-reveal className="mt-8 max-w-[36ch] text-base leading-relaxed text-[#f5f1e8]/60 lg:text-lg">
          A bad landing page wastes a good ad.
        </p>

        <div data-reveal className="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          <BrowserFrame
            src="/assets/landing-bad.webp"
            alt="A cluttered, confusing landing page with competing calls to action"
            label="Bad"
            tone="bad"
          />
          <BrowserFrame
            src="/assets/landing-good.webp"
            alt="A clean, focused landing page with one clear call to action"
            label="Good"
            tone="good"
          />
        </div>

        <p data-reveal className="vt-meta-row mt-10">
          {CAPABILITIES.join(" / ")}
        </p>
      </div>
    </section>
  );
}
