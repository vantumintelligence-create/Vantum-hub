import { useEffect, useRef } from "react";

/** Scroll-scrubbed horizontal "draw in" via scaleX. Transform only. */
export function useDrawLine<T extends HTMLElement>() {
  const sectionRef = useRef<T>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left center",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 65%",
              end: "bottom 55%",
              scrub: true,
            },
          },
        );
      });
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return { sectionRef, lineRef };
}
