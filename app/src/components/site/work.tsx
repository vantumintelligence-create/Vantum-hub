"use client";

import { useRef, useState } from "react";

const REEL = [
  { key: "lamar-crowd-ad", title: "Lamar — Crowd Energy", tag: "Event Activation", media: "video" },
  { key: "soundboard-ad", title: "Soundboard Activation", tag: "Ad Creative", media: "video" },
  { key: "rotating-ad-concept", title: "Rotating Ad Concept", tag: "Ad Creative", media: "video" },
  { key: "receipt-concept", title: "Receipt Concept", tag: "Ad Creative", media: "video" },
  { key: "transition-concept", title: "Transition Concept", tag: "Ad Creative", media: "video" },
  { key: "dinner-ad", title: "Dinner Ad", tag: "Facebook Ads", media: "video" },
  { key: "pizza-ad", title: "Pizza Ad", tag: "Facebook Ads", media: "video" },
  { key: "frqncy-tap-ad", title: "FRQNCY — Tap Ad", tag: "App Marketing", media: "video" },
  { key: "frqncy-ad-1", title: "FRQNCY — App Ad", tag: "App Marketing", media: "image" },
  { key: "lamar-before-after", title: "Lamar — Before & After", tag: "Web Design", media: "video" },
] as const;

function SoundIcon({ muted }: { muted: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 9.5v5h3.5L13 19V5L7.5 9.5H4Z" strokeLinejoin="round" />
      {muted ? (
        <path d="M16.5 9.5l4 4M20.5 9.5l-4 4" strokeLinecap="round" />
      ) : (
        <path d="M16.3 8.3a5 5 0 0 1 0 7.4M18.8 6a8.5 8.5 0 0 1 0 12" strokeLinecap="round" />
      )}
    </svg>
  );
}

function ReelTile({ item }: { item: (typeof REEL)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const isImage = item.media === "image";

  return (
    <div className="group relative aspect-[3/4] overflow-hidden bg-[#141210]">
      {isImage ? (
        <img
          src={`/assets/work/${item.key}.jpg`}
          alt={item.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <video
          ref={videoRef}
          src={`/assets/work/${item.key}.mp4`}
          poster={`/assets/work/${item.key}.jpg`}
          className="h-full w-full object-cover"
          muted={muted}
          loop
          autoPlay
          playsInline
          preload="metadata"
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 px-5 py-5">
        <div>
          <span className="font-mono-vt text-[10px] uppercase tracking-[0.2em] text-[#c9a24b]">{item.tag}</span>
          <p className="mt-1 font-display text-base font-semibold leading-tight text-[#f5f1e8]">{item.title}</p>
        </div>
        {!isImage && (
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? `Unmute ${item.title}` : `Mute ${item.title}`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#f5f1e8]/30 bg-[#0b0906]/60 text-[#f5f1e8] backdrop-blur-sm transition-colors hover:border-[#c9a24b] hover:text-[#c9a24b]"
          >
            <SoundIcon muted={muted} />
          </button>
        )}
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="border-t border-[#f5f1e8]/10 py-24 lg:py-32">
      <div className="px-6 lg:pl-72 lg:pr-16">
        <p className="vt-chapter-num">02 · Work</p>
        <h2 className="vt-display-xl mt-8 max-w-4xl text-[#f5f1e8]">Selected Work</h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#f5f1e8]/65">
          A sample of ad creative and campaign work built for clients — sound on for the full effect.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-px bg-[#f5f1e8]/10 sm:grid-cols-2 lg:grid-cols-4 lg:pl-60">
        {REEL.map((item) => (
          <ReelTile key={item.key} item={item} />
        ))}
      </div>
    </section>
  );
}
