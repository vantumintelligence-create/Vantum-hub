import { IconBolt, IconChat, IconTarget } from "./icons";
import { useSectionReveal } from "../../hooks/use-section-reveal";

const FEATURED = {
  icon: IconTarget,
  title: "More booked calls",
  body: "Ad creative and landing experiences built to turn attention into a scheduled conversation, not just a click. This is the outcome every other system in the stack is built to protect.",
};

const OUTCOMES = [
  {
    icon: IconBolt,
    title: "Faster response times",
    body: "Automated speed-to-lead and missed-call text-back mean prospects hear back in minutes, not days.",
  },
  {
    icon: IconChat,
    title: "Higher review volume",
    body: "Automated review requests and reputation workflows turn happy customers into public proof.",
  },
];

export function Results() {
  const containerRef = useSectionReveal<HTMLDivElement>();

  return (
    <section id="results" className="py-24 lg:py-32">
      <div ref={containerRef} className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 data-reveal className="max-w-lg font-display text-3xl font-semibold tracking-tight text-[#f5f1e8] md:text-4xl">
          Real Growth, Not Just Reports.
        </h2>
        <p data-reveal className="mt-4 max-w-xl text-sm leading-relaxed text-[#f5f1e8]/55">
          Every engagement is built around outcomes your team can feel: a busier calendar, a
          faster inbox, and a business that runs on systems instead of memory.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr] lg:grid-rows-2">
          <div
            data-reveal
            className="flex flex-col justify-center rounded-2xl border border-[#c9a24b]/25 bg-[#142019] p-8 lg:row-span-2 lg:p-10"
          >
            <FEATURED.icon className="h-6 w-6 text-[#c9a24b]" />
            <h3 className="mt-5 font-display text-2xl font-semibold text-[#f5f1e8]">{FEATURED.title}</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#f5f1e8]/55">{FEATURED.body}</p>
          </div>
          {OUTCOMES.map(({ icon: Icon, title, body }) => (
            <div key={title} data-reveal className="rounded-2xl border border-[#f5f1e8]/10 bg-[#142019] p-7">
              <Icon className="h-5 w-5 text-[#c9a24b]" />
              <h3 className="mt-4 font-display text-lg font-semibold text-[#f5f1e8]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#f5f1e8]/55">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
