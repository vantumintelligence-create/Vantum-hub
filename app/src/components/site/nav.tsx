import { openCalendlyPopup } from "../../lib/calendly";

const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#", label: "Contact" },
];

function Wordmark({ titleClassName, subClassName }: { titleClassName: string; subClassName: string }) {
  return (
    <a href="#top" className="inline-block leading-none">
      <span className={`block font-display font-semibold text-[#f5f1e8] ${titleClassName}`}>VANTUM</span>
      <span className={`mt-1 block font-mono-vt text-[#f5f1e8]/55 ${subClassName}`}>INTELLIGENCE</span>
    </a>
  );
}

export function SiteNav() {
  return (
    <>
      {/* Mobile / tablet top bar */}
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-[#f5f1e8]/8 bg-[#0b0906]/85 px-6 py-5 backdrop-blur-md lg:hidden">
        <Wordmark titleClassName="text-lg tracking-[0.06em]" subClassName="text-[8px] tracking-[0.4em]" />
        <a
          href="#"
          onClick={openCalendlyPopup}
          className="inline-flex items-center gap-2 rounded-md border border-[#f5f1e8]/25 px-4 py-2 font-mono-vt text-[10px] uppercase tracking-[0.16em] text-[#f5f1e8] transition-colors hover:border-[#c9a24b] hover:text-[#c9a24b]"
        >
          Get In Touch
        </a>
      </header>

      {/* Desktop fixed sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-60 flex-col justify-between px-9 py-10 lg:flex">
        <div>
          <Wordmark titleClassName="text-2xl tracking-[0.06em]" subClassName="text-[10px] tracking-[0.42em]" />
          <nav className="mt-20">
            <ul className="space-y-7">
              {LINKS.map((l, i) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className={`group flex items-center gap-3 font-mono-vt text-xs uppercase tracking-[0.2em] transition-colors ${
                      i === 0 ? "text-[#f5f1e8]" : "text-[#f5f1e8]/40 hover:text-[#f5f1e8]/75"
                    }`}
                  >
                    <span
                      className={`h-px bg-current transition-all duration-300 ${
                        i === 0 ? "w-4" : "w-0 group-hover:w-4"
                      }`}
                    />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Desktop corner CTA */}
      <a
        href="#"
        onClick={openCalendlyPopup}
        className="fixed right-8 top-8 z-40 hidden items-center gap-2.5 rounded-md border border-[#f5f1e8]/25 px-5 py-3 font-mono-vt text-[11px] uppercase tracking-[0.18em] text-[#f5f1e8] transition-colors hover:border-[#c9a24b] hover:text-[#c9a24b] lg:inline-flex"
      >
        Get In Touch
        <svg className="h-3 w-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M2 8h11M8 3l5 5-5 5" />
        </svg>
      </a>
    </>
  );
}
