import { useSectionReveal } from "../../hooks/use-section-reveal";

const OS_TAGS = ["Internal Platform", "Campaign Ops", "Automation", "Reporting"];
const EDFP_TAGS = ["Segmentation", "Re-Engagement", "Requalifying", "Booking"];

const OS_NAV = ["Overview", "Campaigns", "Leads", "Automations", "Reporting"];
const OS_LEADS = [
  { name: "J. Alvarez", stage: "Booked", tone: "text-[#c9a24b]" },
  { name: "M. Okafor", stage: "Follow-Up", tone: "text-[#f5f1e8]/60" },
  { name: "R. Chen", stage: "Qualifying", tone: "text-[#f5f1e8]/60" },
  { name: "S. Patel", stage: "New", tone: "text-[#f5f1e8]/40" },
];

const EDFP_STAGES = [
  { stage: "Segment", detail: "Grouped by status." },
  { stage: "Re-Engage", detail: "Personal, not a blast." },
  { stage: "Requalify", detail: "Confirm interest first." },
  { stage: "Route", detail: "Back to a person." },
  { stage: "Book", detail: "Set on the calendar." },
];

export function SelectedWork() {
  const containerRef = useSectionReveal<HTMLDivElement>();

  return (
    <section id="work" className="border-t border-[#f5f1e8]/8 py-20 lg:py-24">
      <div ref={containerRef} className="mx-auto max-w-[1600px] px-6 lg:px-14">
        <p data-reveal className="vt-chapter-num">
          Selected Work
        </p>

        <div data-reveal className="mt-10 lg:mt-14">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="font-mono-vt text-xs text-[#c9a24b]">001</span>
              <h3 className="mt-2 font-display text-3xl font-semibold text-[#f5f1e8] lg:text-5xl">
                Vantum OS
              </h3>
            </div>
            <p className="max-w-[30ch] text-sm leading-relaxed text-[#f5f1e8]/55 lg:text-base">
              Where we run campaigns, automations, and follow-up.
            </p>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-lg border border-[#f5f1e8]/10 lg:mt-14">
            <div className="flex h-9 items-center gap-1.5 bg-[#0a0908] px-4">
              <span className="h-2 w-2 rounded-full bg-[#f5f1e8]/20" />
              <span className="h-2 w-2 rounded-full bg-[#f5f1e8]/20" />
              <span className="h-2 w-2 rounded-full bg-[#f5f1e8]/20" />
              <span className="ml-3 font-mono-vt text-[9px] tracking-[0.1em] text-[#f5f1e8]/25">
                os.vantumintelligence.com
              </span>
            </div>
            <div className="grid grid-cols-1 bg-[#0e0d0c] sm:grid-cols-[220px_1fr]">
              <div className="hidden flex-col gap-1 border-r border-[#f5f1e8]/8 p-5 sm:flex">
                {OS_NAV.map((item, i) => (
                  <span
                    key={item}
                    className={`rounded-md px-3 py-2 text-xs ${
                      i === 2 ? "bg-[#f5f1e8]/8 text-[#f5f1e8]" : "text-[#f5f1e8]/45"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <p className="font-mono-vt text-[10px] uppercase tracking-[0.2em] text-[#f5f1e8]/35">
                  Leads / This Week
                </p>
                <div className="mt-4 space-y-2.5">
                  {OS_LEADS.map((row) => (
                    <div
                      key={row.name}
                      className="flex items-center justify-between border-b border-[#f5f1e8]/8 pb-2.5 text-sm"
                    >
                      <span className="text-[#f5f1e8]/80">{row.name}</span>
                      <span className={`font-mono-vt text-[10px] uppercase tracking-[0.14em] ${row.tone}`}>
                        {row.stage}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p data-reveal className="vt-meta-row mt-6">
            {OS_TAGS.join(" / ")}
          </p>
        </div>

        <div data-reveal className="mt-20 grid grid-cols-1 gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <span className="font-mono-vt text-xs text-[#c9a24b]">002</span>
            <h3 className="mt-2 max-w-[12ch] font-display text-3xl font-semibold leading-[0.98] text-[#f5f1e8] lg:text-4xl">
              EDFP Conversion System
            </h3>
            <p className="mt-5 max-w-[28ch] text-sm leading-relaxed text-[#f5f1e8]/55 lg:text-base">
              Follow-up for leads that don&apos;t convert right away.
            </p>
            <p className="vt-meta-row mt-8">{EDFP_TAGS.join(" / ")}</p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <div className="divide-y divide-[#f5f1e8]/10 border-t border-[#f5f1e8]/10">
              {EDFP_STAGES.map((row, i) => (
                <div key={row.stage} className="flex items-center gap-6 py-4 sm:gap-10">
                  <span className="font-mono-vt text-[10px] text-[#c9a24b]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="w-32 shrink-0 font-display text-base font-semibold text-[#f5f1e8] sm:w-40 sm:text-lg">
                    {row.stage}
                  </span>
                  <span className="text-sm text-[#f5f1e8]/50">{row.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
