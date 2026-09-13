"use client";

import { useEffect, useState } from "react";

import { openCalendlyPopup } from "../../lib/calendly";

const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
];

const SECTION_IDS = ["top", "services", "work", "about"];

function useActiveSection() {
  const [activeId, setActiveId] = useState("top");

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    // Track intersection state per section rather than relying on a single
    // callback batch: a short section (e.g. Services collapsed) can enter and
    // leave a narrow detection band between two scroll frames, so we keep a
    // running record and always resolve to the lowest (most recently
    // entered) section that is still intersecting, in document order.
    const intersecting = new Set<string>();

    const resolveActive = () => {
      for (let i = SECTION_IDS.length - 1; i >= 0; i -= 1) {
        if (intersecting.has(SECTION_IDS[i])) {
          setActiveId(SECTION_IDS[i]);
          return;
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) intersecting.add(entry.target.id);
          else intersecting.delete(entry.target.id);
        }
        resolveActive();
      },
      // Treat the top third of the viewport as the "current section" band —
      // wide enough that short sections still register as they pass through.
      { rootMargin: "0px 0px -66% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeId;
}

function Wordmark({ titleClassName, subClassName }: { titleClassName: string; subClassName: string }) {
  return (
    <a href="#top" className="inline-block leading-none">
      <span className={`block font-display font-semibold text-[#f5f1e8] ${titleClassName}`}>VANTUM</span>
      <span className={`mt-1 block font-mono-vt text-[#f5f1e8]/55 ${subClassName}`}>INTELLIGENCE</span>
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

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection();

  // Close the menu with Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // Lock background scroll while the menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Mobile / tablet top bar */}
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-[#f5f1e8]/8 bg-[#0b0906]/85 px-6 py-5 backdrop-blur-md lg:hidden">
        <Wordmark titleClassName="text-lg tracking-[0.06em]" subClassName="text-[8px] tracking-[0.4em]" />

        <div className="flex items-center gap-3">
          {!menuOpen && (
            <a
              href="#"
              onClick={openCalendlyPopup}
              className="inline-flex items-center gap-2 rounded-md border border-[#f5f1e8]/25 px-4 py-2 font-mono-vt text-[10px] uppercase tracking-[0.16em] text-[#f5f1e8] transition-colors hover:border-[#c9a24b] hover:text-[#c9a24b]"
            >
              Get In Touch
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

        {/* Mobile menu panel */}
        <div
          id="mobile-nav-menu"
          aria-hidden={!menuOpen}
          className={`absolute inset-x-0 top-full flex flex-col border-b border-[#f5f1e8]/8 bg-[#0b0906]/97 backdrop-blur-md transition-all duration-300 ease-out ${
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "pointer-events-none invisible -translate-y-2 opacity-0"
          }`}
        >
          <nav className="px-6 pb-4 pt-8">
            <ul className="space-y-6">
              {LINKS.map((l) => {
                const isActive = l.href === `#${activeId}`;
                return (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      onClick={closeMenu}
                      className={`group flex items-center gap-3 font-mono-vt text-xs uppercase tracking-[0.2em] transition-colors ${
                        isActive ? "text-[#f5f1e8]" : "text-[#f5f1e8]/55 hover:text-[#f5f1e8]"
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
              })}
            </ul>
          </nav>

          <div className="border-t border-[#f5f1e8]/8 px-6 py-6">
            <a
              href="#"
              onClick={(event) => {
                closeMenu();
                openCalendlyPopup(event);
              }}
              className="inline-flex items-center gap-2 rounded-md border border-[#c9a24b]/50 px-5 py-3 font-mono-vt text-[11px] uppercase tracking-[0.18em] text-[#c9a24b] transition-colors hover:bg-[#c9a24b] hover:text-[#0b0906]"
            >
              Get In Touch
              <svg className="h-3 w-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M2 8h11M8 3l5 5-5 5" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Desktop fixed sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-60 flex-col justify-between px-9 py-10 lg:flex">
        <div>
          <Wordmark titleClassName="text-2xl tracking-[0.06em]" subClassName="text-[10px] tracking-[0.42em]" />
          <nav className="mt-20">
            <ul className="space-y-7">
              {LINKS.map((l) => {
                const isActive = l.href === `#${activeId}`;
                return (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className={`group flex items-center gap-3 font-mono-vt text-xs uppercase tracking-[0.2em] transition-colors ${
                        isActive ? "text-[#f5f1e8]" : "text-[#f5f1e8]/40 hover:text-[#f5f1e8]/75"
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
              })}
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