"use client";

import { useEffect, useState } from "react";

import { openCalendlyPopup } from "../../lib/calendly";
import { CALENDLY_PUBLIC_URL } from "../../lib/site";

// Real pages, not homepage anchors: each entry is a crawlable URL with its own
// title, canonical and schema.
const LINKS = [
  { href: "/", label: "Home" },
  { href: "/remodeler-marketing", label: "Remodelers" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function useActivePath() {
  const [active, setActive] = useState("/");
  useEffect(() => {
    setActive(window.location.pathname.replace(/\/+$/, "") || "/");
  }, []);
  return active;
}

function Wordmark({
  titleClassName,
  subClassName,
}: {
  titleClassName: string;
  subClassName: string;
}) {
  return (
    <a href="/" className="inline-block leading-none" aria-label="Vantum Intelligence home">
      <span className={`block font-display font-semibold text-[#f5f1e8] ${titleClassName}`}>
        VANTUM
      </span>
      <span className={`mt-1 block font-mono-vt text-[#f5f1e8]/55 ${subClassName}`}>
        INTELLIGENCE
      </span>
    </a>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3.5 8h17M3.5 16h17" />}
    </svg>
  );
}

function Arrow() {
  return (
    <svg
      className="h-3 w-3"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M2 8h11M8 3l5 5-5 5" />
    </svg>
  );
}

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActivePath();

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const renderLinks = (dim: string) =>
    LINKS.map((l) => {
      const isActive = l.href === active;
      return (
        <li key={l.href}>
          <a
            href={l.href}
            onClick={closeMenu}
            aria-current={isActive ? "page" : undefined}
            className={`group flex items-center gap-3 font-mono-vt text-xs uppercase tracking-[0.2em] transition-colors ${
              isActive ? "text-[#f5f1e8]" : dim
            }`}
          >
            <span
              className={`h-px bg-current transition-all duration-300 ${
                isActive ? "w-4" : "w-0 group-hover:w-4"
              }`}
            />
            {l.label}
          </a>
        </li>
      );
    });

  return (
    <>
      {/* Mobile / tablet top bar */}
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-[#f5f1e8]/8 bg-[#0b0906]/85 px-6 py-5 backdrop-blur-md lg:hidden">
        <Wordmark
          titleClassName="text-lg tracking-[0.06em]"
          subClassName="text-[8px] tracking-[0.4em]"
        />

        <div className="flex items-center gap-3">
          {!menuOpen && (
            <a
              href={CALENDLY_PUBLIC_URL}
              onClick={openCalendlyPopup}
              className="inline-flex items-center gap-2 rounded-md border border-[#f5f1e8]/25 px-4 py-2 font-mono-vt text-[10px] uppercase tracking-[0.16em] text-[#f5f1e8] transition-colors hover:border-[#c9a24b] hover:text-[#c9a24b]"
            >
              Book a call
            </a>
          )}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md text-[#f5f1e8] transition-colors hover:text-[#c9a24b]"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        <div
          id="mobile-nav-menu"
          aria-hidden={!menuOpen}
          className={`absolute inset-x-0 top-full flex flex-col border-b border-[#f5f1e8]/8 bg-[#0b0906]/97 backdrop-blur-md transition-all duration-300 ease-out ${
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "pointer-events-none invisible -translate-y-2 opacity-0"
          }`}
        >
          <nav aria-label="Primary" className="px-6 pb-4 pt-8">
            <ul className="space-y-6">{renderLinks("text-[#f5f1e8]/55 hover:text-[#f5f1e8]")}</ul>
          </nav>

          <div className="border-t border-[#f5f1e8]/8 px-6 py-6">
            <a
              href={CALENDLY_PUBLIC_URL}
              onClick={(event) => {
                closeMenu();
                openCalendlyPopup(event);
              }}
              className="inline-flex items-center gap-2 rounded-md border border-[#c9a24b]/50 px-5 py-3 font-mono-vt text-[11px] uppercase tracking-[0.18em] text-[#c9a24b] transition-colors hover:bg-[#c9a24b] hover:text-[#0b0906]"
            >
              Book a 30-minute call
              <Arrow />
            </a>
          </div>
        </div>
      </header>

      {/* Desktop fixed sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-60 flex-col justify-between px-9 py-10 lg:flex">
        <div>
          <Wordmark
            titleClassName="text-2xl tracking-[0.06em]"
            subClassName="text-[10px] tracking-[0.42em]"
          />
          <nav aria-label="Primary" className="mt-20">
            <ul className="space-y-7">
              {renderLinks("text-[#f5f1e8]/40 hover:text-[#f5f1e8]/75")}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Desktop corner CTA */}
      <a
        href={CALENDLY_PUBLIC_URL}
        onClick={openCalendlyPopup}
        className="fixed right-8 top-8 z-40 hidden items-center gap-2.5 rounded-md border border-[#f5f1e8]/25 px-5 py-3 font-mono-vt text-[11px] uppercase tracking-[0.18em] text-[#f5f1e8] transition-colors hover:border-[#c9a24b] hover:text-[#c9a24b] lg:inline-flex"
      >
        Book a call
        <Arrow />
      </a>
    </>
  );
}
