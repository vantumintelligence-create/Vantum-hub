import { LogoMark } from "./logo-mark";

const LINKS = [
  { href: "#attention", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor">
      <path d="M4.5 3.5A1.75 1.75 0 1 0 4.5 7a1.75 1.75 0 0 0 0-3.5ZM3 8.7h3v11.8H3zM9.5 8.7h2.9v1.6h.04c.4-.76 1.4-1.6 2.9-1.6 3.1 0 3.66 2 3.66 4.6v7.2h-3v-6.4c0-1.5 0-3.5-2.1-3.5-2.1 0-2.4 1.66-2.4 3.4v6.5h-3V8.7Z" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
      <path d="M10.5 9.5v5l4.3-2.5-4.3-2.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#f5f1e8]/8 py-12">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-14">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          <a href="#top">
            <LogoMark />
          </a>
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-[#f5f1e8]/60 transition-colors hover:text-[#f5f1e8]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 text-[#f5f1e8]/60">
            <a href="https://instagram.com" aria-label="Instagram" className="transition-colors hover:text-[#c9a24b]">
              <InstagramIcon />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="transition-colors hover:text-[#c9a24b]">
              <LinkedInIcon />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className="transition-colors hover:text-[#c9a24b]">
              <YouTubeIcon />
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center gap-2 border-t border-[#f5f1e8]/8 pt-6 text-center lg:flex-row lg:justify-between lg:text-left">
          <span className="font-mono-vt text-[10px] uppercase tracking-[0.24em] text-[#f5f1e8]/35">
            A Smarter Tomorrow.
          </span>
          <span className="font-mono-vt text-[10px] uppercase tracking-[0.2em] text-[#f5f1e8]/25">
            Built with OpenAI, Anthropic, Google, and Meta.
          </span>
        </div>
      </div>
    </footer>
  );
}
