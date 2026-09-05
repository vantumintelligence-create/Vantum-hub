import { IconChat, IconTarget, IconPlay, IconBarChart } from "./icons";

const STEPS = [
  { n: "01", icon: IconChat, title: "Discover", body: "We learn about your business, goals, and opportunities." },
  { n: "02", icon: IconTarget, title: "Strategize", body: "We build a custom plan for ads, automation, and growth." },
  { n: "03", icon: IconPlay, title: "Execute", body: "We launch, optimize, and manage everything for you." },
  { n: "04", icon: IconBarChart, title: "Scale", body: "You get more leads, more customers, and more freedom." },
];

export function Process() {
  return (
    <section id="process" className="border-t border-[#f5f1e8]/8 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="vt-reveal font-mono-vt text-xs uppercase tracking-[0.28em] text-[#c9a24b]">
              Our Process
            </p>
            <h2 className="vt-reveal vt-reveal-1 mt-4 max-w-lg font-display text-3xl font-semibold tracking-tight text-[#f5f1e8] md:text-4xl">
              A Simple Process. Real Results.
            </h2>
          </div>
          <p className="vt-reveal vt-reveal-1 max-w-sm text-sm leading-relaxed text-[#f5f1e8]/55">
            From strategy to execution, we make growth simple, with full support at every step.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ n, icon: Icon, title, body }, i) => (
            <div
              key={n}
              className={`vt-reveal vt-reveal-${Math.min(i + 1, 4)} relative rounded-2xl border border-[#f5f1e8]/10 bg-[#12100d] p-6`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono-vt text-xs text-[#f5f1e8]/35">{n}</span>
                <Icon className="h-5 w-5 text-[#c9a24b]" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-[#f5f1e8]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#f5f1e8]/55">{body}</p>
              {i < STEPS.length - 1 && (
                <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-[#f5f1e8]/20 lg:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
