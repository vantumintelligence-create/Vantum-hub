import {
  CONTACT_EMAIL,
  FUNNEL_URL,
  POSITIONING,
  PRIVACY_URL,
  SITE_NAME,
  SOCIAL_LINKS,
  TERMS_URL,
} from "../../lib/site";

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

const ICONS = { LinkedIn: LinkedInIcon, Instagram: InstagramIcon, YouTube: YouTubeIcon };

const LINK_CLASS =
  "font-mono-vt text-[11px] uppercase tracking-[0.16em] text-[#f5f1e8]/55 transition-colors hover:text-[#c9a24b]";

const PAGES = [
  { href: "/remodeler-marketing", label: "Remodelers" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  // Only real profile URLs render. Empty entries stay hidden.
  const socials = SOCIAL_LINKS.filter((s) => s.href);

  return (
    <footer className="border-t border-[#f5f1e8]/8 py-10">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-6 lg:px-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <span className="block font-display text-base font-semibold tracking-[0.06em] text-[#f5f1e8]">
              VANTUM INTELLIGENCE
            </span>
            <span className="mt-2 block text-[13px] leading-relaxed text-[#f5f1e8]/55">
              {POSITIONING}
            </span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-3 inline-block text-[13px] text-[#f5f1e8]/70 transition-colors hover:text-[#c9a24b]"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-5 gap-y-3">
            {PAGES.map((p) => (
              <a key={p.href} href={p.href} className={LINK_CLASS}>
                {p.label}
              </a>
            ))}
            <a href={FUNNEL_URL} className={LINK_CLASS}>
              Free path review
            </a>
          </nav>

          {socials.length > 0 && (
            <div className="flex items-center gap-4 text-[#f5f1e8]/70">
              {socials.map((s) => {
                const Icon = ICONS[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={`Vantum Intelligence on ${s.label}`}
                    rel="me noopener"
                    className="transition-colors hover:text-[#c9a24b]"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3 border-t border-[#f5f1e8]/8 pt-6 font-mono-vt text-[11px] uppercase tracking-[0.16em] text-[#f5f1e8]/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {SITE_NAME}</span>
          <span className="flex items-center gap-5">
            <a href={PRIVACY_URL} className="transition-colors hover:text-[#c9a24b]">
              Privacy
            </a>
            <a href={TERMS_URL} className="transition-colors hover:text-[#c9a24b]">
              Terms
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
