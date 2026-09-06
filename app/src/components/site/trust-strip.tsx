import { OpenAIMark, AnthropicMark, GoogleMark, MetaMark } from "./brand-icons";
import { useSectionReveal } from "../../hooks/use-section-reveal";

const BRANDS = [
  { Icon: OpenAIMark, name: "OpenAI" },
  { Icon: AnthropicMark, name: "Anthropic" },
  { Icon: GoogleMark, name: "Google" },
  { Icon: MetaMark, name: "Meta" },
];

export function TrustStrip() {
  const containerRef = useSectionReveal<HTMLDivElement>();

  return (
    <section className="border-y border-[#f5f1e8]/8 bg-[#0d1712] py-12 lg:py-14">
      <div ref={containerRef} className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <p data-reveal className="font-mono-vt text-xs uppercase tracking-[0.28em] text-[#c9a24b]">
          Technology
        </p>
        <h2 data-reveal className="mt-3 font-display text-xl font-semibold tracking-tight text-[#f5f1e8] md:text-2xl">
          Built Across the Modern Business Stack.
        </h2>
        <p data-reveal className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#f5f1e8]/55">
          Advertising, AI, communications, CRM, and automation: engineered into one connected
          system.
        </p>

        <div data-reveal className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {BRANDS.map(({ Icon, name }) => (
            <div key={name} className="flex items-center gap-2 text-[#f5f1e8]/60">
              <span className="grid h-5 w-5 shrink-0 place-items-center">
                <Icon className="h-full w-full" />
              </span>
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>

        <div data-reveal className="mt-7 flex flex-wrap items-center justify-center gap-2">
          {["AI", "Advertising", "CRM", "Automation", "Communications", "Analytics"].map((cap) => (
            <span
              key={cap}
              className="rounded-full border border-[#f5f1e8]/10 px-3 py-1 font-mono-vt text-[9px] uppercase tracking-[0.18em] text-[#f5f1e8]/40"
            >
              {cap}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
