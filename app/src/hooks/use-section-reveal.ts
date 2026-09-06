import { useEffect, useRef } from "react";

/**
 * Scroll-triggered stagger reveal for a section's direct children marked
 * with [data-reveal]. Animates transform only (never opacity-to-zero): the
 * server-rendered markup is fully visible with no inline styles, so a
 * pre-hydration or reduced-motion view shows the complete section.
 */
export function useSectionReveal<T extends HTMLElement>(itemSelector = "[data-reveal]") {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
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
        const items = gsap.utils.toArray(itemSelector, container) as HTMLElement[];
        if (!items.length) return;
        gsap.from(items, {
          y: 28,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 82%",
          },
        });
      }, container);
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [itemSelector]);

  return ref;
}
