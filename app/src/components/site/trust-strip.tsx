import { MetaMark, GoogleMark, TikTokMark, GoHighLevelMark, ZapierMark, OpenAIMark } from "./brand-icons";

const TOOLS = [
  { Icon: MetaMark, name: "Meta", wide: true },
  { Icon: GoogleMark, name: "Google", wide: false },
  { Icon: TikTokMark, name: "TikTok", wide: false },
  { Icon: GoHighLevelMark, name: "GoHighLevel", wide: false },
  { Icon: ZapierMark, name: "Zapier", wide: false },
  { Icon: OpenAIMark, name: "OpenAI", wide: false },
];

export function TrustStrip() {
  return (
    <section className="border-y border-[#f5f1e8]/8 bg-[#0b0906] py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-center font-mono-vt text-[11px] uppercase tracking-[0.28em] text-[#f5f1e8]/40">
          Built on the tools your business already runs on.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {TOOLS.map(({ Icon, name, wide }) => (
            <div key={name} className="flex items-center gap-2.5 text-[#f5f1e8]/75">
              <Icon className={wide ? "h-5 w-9" : "h-5 w-5"} />
              <span className="text-base font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
