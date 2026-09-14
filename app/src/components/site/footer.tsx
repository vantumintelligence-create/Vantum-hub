function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4.5 w-4.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
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
    <svg
      viewBox="0 0 24 24"
      className="h-4.5 w-4.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
      <path d="M10.5 9.5v5l4.3-2.5-4.3-2.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#f5f1e8]/8 py-8">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-4 px-6 lg:flex-row lg:justify-between lg:px-16">
        <span className="font-mono-vt text-[11px] uppercase tracking-[0.16em] text-[#f5f1e8]/55">
          © 2026 Vantum Intelligence
        </span>
        <nav aria-label="Footer" className="flex items-center gap-5">
          <a
            href="/services"
            className="font-mono-vt text-[11px] uppercase tracking-[0.16em] text-[#f5f1e8]/55 transition-colors hover:text-[#c9a24b]"
          >
            Services
          </a>
          <a
            href="/work"
            className="font-mono-vt text-[11px] uppercase tracking-[0.16em] text-[#f5f1e8]/55 transition-colors hover:text-[#c9a24b]"
          >
            Work
          </a>
          <a
            href="/about"
            className="font-mono-vt text-[11px] uppercase tracking-[0.16em] text-[#f5f1e8]/55 transition-colors hover:text-[#c9a24b]"
          >
            About
          </a>
        </nav>
        <div className="flex items-center gap-6">
          <span className="font-mono-vt text-[11px] uppercase tracking-[0.2em] text-[#f5f1e8]/55">
            ATL / MIA / LDN
          </span>
          <div className="flex items-center gap-4 text-[#f5f1e8]/70">
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="transition-colors hover:text-[#c9a24b]"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="transition-colors hover:text-[#c9a24b]"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              className="transition-colors hover:text-[#c9a24b]"
            >
              <YouTubeIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
