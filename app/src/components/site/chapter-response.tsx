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

function AutomationMockup() {
  return (
    <div className="mx-auto w-44 overflow-hidden rounded-[1.6rem] border-4 border-[#1d1a15] bg-[#12100d] shadow-2xl lg:w-48">
      <div className="flex items-center gap-2 border-b border-[#f5f1e8]/10 px-3.5 py-3">
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#c9a24b]/20 text-[10px] text-[#c9a24b]">
          !
        </span>
        <div className="leading-tight">
          <p className="text-[10px] font-semibold text-[#f5f1e8]">New Lead</p>
          <p className="text-[8px] text-[#f5f1e8]/50">Phone Call Missed</p>
        </div>
        <span className="ml-auto text-[7px] text-[#f5f1e8]/35">2m ago</span>
      </div>
      <div className="space-y-2 p-3">
        <p className="rounded-lg rounded-tl-sm bg-[#1d1a15] p-2.5 text-[8.5px] leading-snug text-[#f5f1e8]/80">
          Hi! Thanks for reaching out. We&apos;re currently unavailable, but we&apos;ll get back to
          you shortly. In the meantime, would you like to schedule a time that works for you?
        </p>
        <span className="block w-fit rounded bg-[#c9a24b] px-2.5 py-1.5 text-[8px] font-semibold text-[#0e0d0c]">
          Schedule Now
        </span>
      </div>
    </div>
  );
}

export function ChapterResponse() {
  const containerRef = useSectionReveal<HTMLDivElement>();
  const { ref: seqRef, visible } = useSequenceReveal<HTMLDivElement>();

  return (
    <section id="response" className="border-t border-[#f5f1e8]/8 py-20 lg:py-28">
      <div ref={containerRef} className="mx-auto max-w-[1600px] px-6 lg:px-14">
        <p data-reveal className="vt-chapter-num">
          03 / The Response
        </p>

        <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div ref={seqRef} className={`vt-seq space-y-2 ${visible ? "is-visible" : ""}`}>
              <p className="vt-display-xl text-[#f5f1e8]/35">A customer called at 9:40pm.</p>
              <p className="vt-display-xl text-[#f5f1e8]/55">No one picked up.</p>
              <p className="vt-display-xl text-[#c9a24b]">A text went out anyway.</p>
            </div>

            <p className="mt-10 max-w-[36ch] text-base leading-relaxed text-[#f5f1e8]/60 lg:text-lg">
              The system answers when nobody else does.
            </p>

            <p data-reveal className="vt-meta-row mt-10">
              {CAPABILITIES.join(" / ")}
            </p>
          </div>

          <div data-reveal className="flex justify-center lg:col-span-4 lg:col-start-9 lg:justify-end">
            <AutomationMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
