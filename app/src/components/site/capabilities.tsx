import { useSectionReveal } from "../../hooks/use-section-reveal";

const GROUPS = [
  {
    n: "01",
    title: "Customer Acquisition",
    items: [
      "Campaign Strategy",
      "Static Creative",
      "Video Creative",
      "Copy",
      "Testing",
      "Campaign Management",
      "Reporting",
    ],
  },
  {
    n: "02",
    title: "Automation",
    items: ["Lead Response", "Missed-Call Response", "SMS & Email", "CRM Workflows", "Reviews", "Reactivation"],
  },
  {
    n: "03",
    title: "Web",
    items: ["Website Design", "Landing Pages", "Lead Capture", "Analytics", "Deployment", "Website Management"],
  },
];

export function Capabilities() {
  const containerRef = useSectionReveal<HTMLDivElement>();

  return (
    <section className="border-t border-[#f5f1e8]/8 py-24 lg:py-32">
      <div ref={containerRef} className="mx-auto max-w-[1600px] px-6 lg:px-14">
        <p data-reveal className="vt-chapter-num">
          Capabilities
        </p>
        <div className="mt-10">
          {GROUPS.map((g) => (
            <div
              key={g.n}
              data-reveal
              className="group border-t border-[#f5f1e8]/12 py-8 transition-colors hover:border-[#c9a24b]/40 lg:py-10"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-baseline lg:gap-10">
                <div className="flex items-baseline gap-4 lg:w-72 lg:shrink-0">
                  <span className="font-mono-vt text-xs text-[#c9a24b]">{g.n}</span>
                  <h3 className="font-display text-xl font-semibold text-[#f5f1e8] transition-colors group-hover:text-[#e3bd6c] lg:text-2xl">
                    {g.title}
                  </h3>
                </div>
                <p className="vt-meta-row lg:text-[0.72rem]">{g.items.join(" / ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
