"use client";

import { openCalendlyPopup } from "../../lib/calendly";
import { CALENDLY_PUBLIC_URL, FOUNDING_YEAR } from "../../lib/site";

export function Opening() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/hero-quiet.webp"
          srcSet="/assets/hero-quiet-800.jpg 800w, /assets/hero-quiet-1280.jpg 1280w, /assets/hero-quiet.webp 2752w"
          sizes="100vw"
          width={2752}
          height={1536}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0906]/85 via-[#0b0906]/30 to-transparent" />
      </div>

      <div className="relative flex min-h-[92svh] items-end pb-14 pt-32 lg:min-h-screen lg:pb-20">
        <div className="flex w-full justify-end px-6 lg:px-16">
          <div className="max-w-md text-left lg:max-w-lg">
            <h1 className="font-display text-2xl font-semibold leading-tight tracking-tight text-[#f5f1e8] sm:text-3xl lg:text-4xl">
              Client acquisition systems for remodelers and home-service businesses.
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-[#f5f1e8]/78">
              Vantum Intelligence is a strategy, marketing, and implementation firm founded in{" "}
              {FOUNDING_YEAR}, working remotely with owner-operated remodeling and home-service
              companies across the United States. It diagnoses which part of a company&rsquo;s path
              from first click to signed contract is losing work, then builds the fix: the ads, the
              website, the search presence, and the follow-up system, one team from start to finish.
            </p>
            <a
              href={CALENDLY_PUBLIC_URL}
              onClick={openCalendlyPopup}
              className="mt-7 inline-flex items-center gap-2.5 rounded-md border border-[#c9a24b]/60 px-6 py-3.5 font-mono-vt text-[11px] uppercase tracking-[0.18em] text-[#c9a24b] transition-colors hover:bg-[#c9a24b] hover:text-[#0b0906]"
            >
              Book a 30-minute path review
              <svg
                className="h-3 w-3"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M2 8h11M8 3l5 5-5 5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
