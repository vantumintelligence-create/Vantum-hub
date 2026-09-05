import { IconBolt, IconChat, IconTarget } from "./icons";

const OUTCOMES = [
  {
    icon: IconTarget,
    title: "More booked calls",
    body: "Ad creative and landing experiences built to turn attention into a scheduled conversation, not just a click.",
  },
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
  return (
    <section id="results" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="vt-reveal max-w-lg font-display text-3xl font-semibold tracking-tight text-[#f5f1e8] md:text-4xl">
          Real Growth, Not Just Reports.
        </h2>
        <p className="vt-reveal vt-reveal-1 mt-4 max-w-xl text-sm leading-relaxed text-[#f5f1e8]/55">
          Every engagement is built around outcomes your team can feel: a busier calendar, a
          faster inbox, and a business that runs on systems instead of memory.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {OUTCOMES.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              className={`vt-reveal vt-reveal-${Math.min(i + 2, 4)} rounded-2xl border border-[#f5f1e8]/10 bg-[#12100d] p-7`}
            >
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
