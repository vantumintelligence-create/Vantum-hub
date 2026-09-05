import {
  OpenAIMark,
  AnthropicMark,
  GoogleMark,
  MetaMark,
  GoHighLevelMark,
  TwilioMark,
  N8nMark,
} from "./brand-icons";

const TOOLS = [
  { Icon: OpenAIMark, name: "OpenAI" },
  { Icon: AnthropicMark, name: "Anthropic" },
  { Icon: GoogleMark, name: "Google" },
  { Icon: MetaMark, name: "Meta" },
  { Icon: GoHighLevelMark, name: "GoHighLevel" },
  { Icon: TwilioMark, name: "Twilio" },
  { Icon: N8nMark, name: "n8n" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-[#f5f1e8]/8 bg-[#0b0906] py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-center font-mono-vt text-[11px] uppercase tracking-[0.28em] text-[#f5f1e8]/40">
          Powered by the platforms behind modern business.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 lg:mt-7 lg:gap-x-11 lg:gap-y-6">
          {TOOLS.map(({ Icon, name }) => (
            <div key={name} className="flex items-center gap-2 text-[#f5f1e8]/70">
              <span className="grid h-5 w-5 shrink-0 place-items-center">
                <Icon className="h-full w-full" />
              </span>
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
