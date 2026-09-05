import { IconArrowRight, IconPlay, IconBarChart, IconBolt, IconPeople } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-10 lg:px-10">
        <div>
          <p className="vt-reveal vt-reveal-1 font-mono-vt text-xs uppercase tracking-[0.28em] text-[#c9a24b]">
            Growth systems for modern businesses
          </p>
          <h1 className="vt-reveal vt-reveal-2 mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-[#f5f1e8] md:text-6xl">
            More Customers.
            <br />
            Less Manual Work.
            <br />
            <span className="text-[#c9a24b]">A Smarter Business.</span>
          </h1>
          <p className="vt-reveal vt-reveal-3 mt-6 max-w-[46ch] text-base leading-relaxed text-[#f5f1e8]/65">
            Vantum Intelligence helps businesses attract more customers and operate smarter
            through high-performing ads and AI automation, all in one place.
          </p>
          <div className="vt-reveal vt-reveal-4 mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-[#c9a24b] px-6 py-3.5 text-sm font-medium text-[#0b0906] transition-colors hover:bg-[#e3bd6c]"
            >
              Book a Strategy Call
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#process"
              className="group inline-flex items-center gap-2.5 rounded-md border border-[#f5f1e8]/25 px-5 py-3.5 text-sm font-medium text-[#f5f1e8] transition-colors hover:border-[#c9a24b]"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full border border-current transition-colors duration-300 group-hover:bg-[#c9a24b] group-hover:text-[#0b0906]">
                <IconPlay className="h-3.5 w-3.5" />
              </span>
              See How It Works
            </a>
          </div>
          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-[#f5f1e8]/10 pt-8">
            {[
              { icon: IconBarChart, label: "More Leads", eyebrow: "Attract" },
              { icon: IconBolt, label: "Smarter Systems", eyebrow: "Automate" },
              { icon: IconPeople, label: "Real Growth", eyebrow: "Scale" },
            ].map(({ icon: Icon, label, eyebrow }) => (
              <div key={label}>
                <Icon className="h-5 w-5 text-[#c9a24b]" />
                <dt className="mt-2.5 text-sm font-medium text-[#f5f1e8]">{label}</dt>
                <dd className="font-mono-vt text-[10px] uppercase tracking-[0.2em] text-[#f5f1e8]/45">
                  {eyebrow}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="vt-reveal vt-reveal-2 relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#f5f1e8]/10 lg:aspect-[5/6]">
            <img
              src="/assets/hero-monolith.jpg"
              alt="A gold-lit monolithic V landmark rising from dark mountain terrain"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0906]/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -right-3 top-8 hidden font-mono-vt text-[10px] uppercase leading-loose tracking-[0.3em] text-[#f5f1e8]/40 [writing-mode:vertical-rl] lg:block">
            People · Technology · Growth · Without Limits.
          </div>
        </div>
      </div>
    </section>
  );
}
