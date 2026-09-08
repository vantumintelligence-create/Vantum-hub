import { useSectionReveal } from "../../hooks/use-section-reveal";

export function Process() {
  const containerRef = useSectionReveal<HTMLDivElement>();

  return (
    <section id="process" className="border-t border-[#f5f1e8]/8 bg-[#171513] py-24 lg:py-40">
      <div ref={containerRef} className="mx-auto max-w-[1600px] px-6 lg:px-14">
        <p data-reveal className="vt-chapter-num">
          How We Work
        </p>

        <div data-reveal className="mt-10 lg:grid lg:grid-cols-12 lg:gap-8">
          <h2 className="font-display text-[2.25rem] font-semibold leading-[1.05] tracking-tight text-[#f5f1e8] lg:col-span-7 lg:text-[4rem]">
            We start with your business.
          </h2>
          <p className="mt-6 max-w-[36ch] text-base leading-relaxed text-[#f5f1e8]/55 lg:col-span-4 lg:col-start-9 lg:mt-9 lg:max-w-[30ch]">
            Before recommending anything, we look at what you&apos;re doing now — how
            you&apos;re getting customers, what happens when someone reaches out, what
            you&apos;re spending money on, and where things are falling short.
          </p>
        </div>

        <div data-reveal className="mt-16 pl-6 lg:mt-32 lg:grid lg:grid-cols-12 lg:gap-8 lg:pl-0">
          <h3 className="font-display text-2xl font-semibold text-[#f5f1e8] lg:col-span-5 lg:col-start-5 lg:text-[2.5rem]">
            Then we get to work.
          </h3>
          <p className="mt-4 max-w-[34ch] text-base leading-relaxed text-[#f5f1e8]/55 lg:col-span-4 lg:col-start-6 lg:mt-6 lg:max-w-[28ch]">
            What we build depends on what we find. It could mean new advertising, a better
            website, changes to your follow-up, new automation, or some combination of them.
          </p>
        </div>

        <div data-reveal className="mt-14 pl-3 lg:mt-28 lg:grid lg:grid-cols-12 lg:gap-8 lg:pl-0">
          <p className="text-lg text-[#f5f1e8]/80 lg:col-span-4 lg:col-start-8 lg:text-xl">
            We stay involved.
          </p>
          <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-[#f5f1e8]/50 lg:col-span-5 lg:col-start-8 lg:mt-4 lg:max-w-[36ch] lg:text-base">
            Once everything is running, we keep an eye on it. Advertising changes. Customers
            behave differently. Things that worked six months ago may stop working. We make
            changes when there&apos;s a reason to make them.
          </p>
        </div>
      </div>
    </section>
  );
}
