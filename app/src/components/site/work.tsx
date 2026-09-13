"use client";

import { useEffect, useRef, useState } from "react";

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

// Ordered best-first by production value and impact.
const REEL = [
  { key: "dinner-ad", media: "video" },
  { key: "lamar-before-after", media: "video" },
  { key: "frqncy-tap-ad", media: "video" },
  { key: "lamar-crowd-ad", media: "video" },
  { key: "pizza-ad", media: "video" },
  { key: "frqncy-ad-1", media: "image" },
  { key: "receipt-concept", media: "video" },
  { key: "soundboard-ad", media: "video" },
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

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path
        d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
          alt="Ad creative"
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
        <span className="font-mono-vt text-[10px] uppercase tracking-[0.2em] text-[#c9a24b]">Ad Creative</span>
        {!isImage && (
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? "Unmute" : "Mute"}
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
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) return;

    const update = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    update();
    api.on("select", update);
    api.on("reInit", update);

    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <section id="work" className="border-t border-[#f5f1e8]/10 py-24 lg:py-32">
      <div className="flex flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between lg:pl-72 lg:pr-16">
        <div>
          <p className="vt-chapter-num">02 · Work</p>
          <h2 className="vt-display-xl mt-8 max-w-4xl text-[#f5f1e8]">Selected Work</h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#f5f1e8]/65">
            A sample of ad creative and campaign work built for clients — sound on for the full effect.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f5f1e8]/30 text-[#f5f1e8] transition-colors hover:border-[#c9a24b] hover:text-[#c9a24b] disabled:opacity-30 disabled:hover:border-[#f5f1e8]/30 disabled:hover:text-[#f5f1e8]"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f5f1e8]/30 text-[#f5f1e8] transition-colors hover:border-[#c9a24b] hover:text-[#c9a24b] disabled:opacity-30 disabled:hover:border-[#f5f1e8]/30 disabled:hover:text-[#f5f1e8]"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>

      <Carousel setApi={setApi} opts={{ align: "start", loop: false }} className="mt-14">
        <CarouselContent className="ml-0 gap-4 pl-6 pr-6 lg:pl-60 lg:pr-16">
          {REEL.map((item) => (
            <CarouselItem key={item.key} className="basis-[78%] pl-0 sm:basis-1/2 lg:basis-1/4">
              <ReelTile item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
