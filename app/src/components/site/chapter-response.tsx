import { useSectionReveal } from "../../hooks/use-section-reveal";
import { useSequenceReveal } from "../../hooks/use-sequence-reveal";

const CAPABILITIES = [
  "Lead Response",
  "Missed-Call Text-Back",
  "SMS",
  "Email",
  "Booking",
  "CRM",
  "Reviews",
  "Reactivation",
];

const FLOW = ["Missed Call", "Automatic Response", "Customer Reply", "Qualification", "Booking"];

export function ChapterResponse() {
  const containerRef = useSectionReveal<HTMLDivElement>();
  const { ref: seqRef, visible } = useSequenceReveal<HTMLDivElement>();

  return (
    <section id="response" className="border-t border-[#f5f1e8]/8 py-20 lg:py-28">
      <div ref={containerRef} className="mx-auto max-w-[1600px] px-6 lg:px-14">
        <p data-reveal className="vt-chapter-num">
          03 / The Response
        </p>

        <div ref={seqRef} className={`vt-seq mt-8 space-y-2 ${visible ? "is-visible" : ""}`}>
          <p className="vt-display-xl text-[#f5f1e8]/35">A customer called at 9:40pm.</p>
          <p className="vt-display-xl text-[#f5f1e8]/55">No one picked up.</p>
          <p className="vt-display-xl text-[#c9a24b]">A text went out anyway.</p>
        </div>

        <p className="mt-10 max-w-[36ch] text-base leading-relaxed text-[#f5f1e8]/60 lg:text-lg">
          The system answers when nobody else does.
        </p>

        <div data-reveal className="mt-12 lg:mt-16">
          <div className="flex flex-col gap-0 lg:flex-row lg:items-stretch">
            {FLOW.map((step, i) => (
              <div
                key={step}
                className="relative flex-1 border-t border-[#f5f1e8]/12 py-5 lg:border-l lg:border-t-0 lg:px-6 lg:py-0 lg:first:border-l-0"
              >
                <span className="font-mono-vt text-[10px] uppercase tracking-[0.2em] text-[#c9a24b]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm font-medium text-[#f5f1e8] lg:text-base">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <p data-reveal className="vt-meta-row mt-14">
          {CAPABILITIES.join(" / ")}
        </p>
      </div>
    </section>
  );
}
