"use client";

import { openCalendlyPopup } from "../../lib/calendly";
import { CALENDLY_PUBLIC_URL } from "../../lib/site";

const HERO_IMAGE = "/assets/hero-quiet.webp";

export function Opening() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0906]/80 via-[#0b0906]/25 to-transparent" />
      </div>

      <div className="relative flex min-h-[92svh] items-end pb-14 pt-32 lg:min-h-screen lg:pb-20">
        <div className="flex w-full justify-end px-6 lg:px-16">
          <div className="max-w-sm text-left lg:max-w-md">
            <h1 className="font-display text-2xl font-semibold leading-tight tracking-tight text-[#f5f1e8] sm:text-3xl lg:text-4xl">
              Business strategy, marketing, and implementation.
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-[#f5f1e8]/75">
              Vantum Intelligence helps businesses identify what needs attention and carry out the work—from
              positioning and advertising to websites, search visibility, and customer follow-up.
            </p>
            <a
              href={CALENDLY_PUBLIC_URL}
              onClick={openCalendlyPopup}
              className="mt-7 inline-flex items-center gap-2.5 rounded-md border border-[#c9a24b]/60 px-6 py-3.5 font-mono-vt text-[11px] uppercase tracking-[0.18em] text-[#c9a24b] transition-colors hover:bg-[#c9a24b] hover:text-[#0b0906]"
            >
              Discuss your project
              <svg className="h-3 w-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M2 8h11M8 3l5 5-5 5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
