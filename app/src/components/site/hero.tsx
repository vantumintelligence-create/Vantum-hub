import { IconArrowRight, IconPlay, IconBarChart, IconBolt, IconPeople } from "./icons";
import { VMark } from "./v-mark";
import { useTilt } from "../../hooks/use-tilt";
import { useParallax } from "../../hooks/use-parallax";
import { useMagnetic } from "../../hooks/use-magnetic";

export function Hero() {
  const tiltRef = useTilt<HTMLDivElement>(7);
  const parallaxRef = useParallax<HTMLDivElement>(-8);
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.2);

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-8 lg:pt-40 lg:pb-28 lg:min-h-0"
    >
      <div className="pointer-events-none absolute right-2 top-14 h-[150px] w-[150px] opacity-90 lg:hidden">
        <VMark className="vt-glow h-full w-full" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-10 lg:px-10">
        <div className="relative z-10">
          <div className="pr-24 sm:pr-28 lg:pr-0">
            <p className="vt-reveal vt-reveal-1 font-mono-vt text-xs uppercase tracking-[0.28em] text-[#c9a24b]">
              Growth systems for modern businesses
            </p>
            <h1 className="vt-reveal vt-reveal-2 mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-[#f5f1e8] md:text-6xl lg:mt-5">
              More Customers.
              <br />
              Less Manual Work.
              <br />
              <span className="text-[#c9a24b]">A Smarter Business.</span>
            </h1>
          </div>
          <p className="vt-reveal vt-reveal-3 mt-4 max-w-[46ch] text-base leading-relaxed text-[#f5f1e8]/65 lg:mt-6">
            Vantum Intelligence helps businesses attract more customers and operate smarter
            through high-performing ads and AI automation, all in one place.
          </p>
          <div className="vt-reveal vt-reveal-4 mt-6 flex flex-wrap items-center gap-4 lg:mt-8">
            <a
              ref={ctaRef}
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#c9a24b] px-6 py-3.5 text-sm font-medium text-[#0d1712] transition-colors hover:bg-[#e3bd6c]"
            >
              Book a Strategy Call
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#process"
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#f5f1e8]/25 px-5 py-3.5 text-sm font-medium text-[#f5f1e8] transition-colors hover:border-[#c9a24b]"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full border border-current transition-colors duration-300 group-hover:bg-[#c9a24b] group-hover:text-[#0d1712]">
                <IconPlay className="h-3.5 w-3.5" />
              </span>
              See How It Works
            </a>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-[#f5f1e8]/10 pt-5 lg:mt-14 lg:gap-6 lg:pt-8">
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

        <div className="vt-reveal vt-reveal-2 relative hidden lg:block" style={{ perspective: "900px" }}>
          <div ref={parallaxRef} className="relative">
            <div
              ref={tiltRef}
              className="mx-auto aspect-square w-full max-w-md transition-transform duration-100 will-change-transform"
            >
              <VMark className="vt-glow h-full w-full" />
            </div>
          </div>
          <div className="absolute -right-2 top-1/2 hidden -translate-y-1/2 flex-col gap-2 lg:flex">
            {["People", "Technology", "Growth", "Without Limits"].map((word) => (
              <span
                key={word}
                className="rounded-full border border-[#f5f1e8]/15 px-3 py-1 text-right font-mono-vt text-[9px] uppercase tracking-[0.2em] text-[#f5f1e8]/45"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
