import { useEffect, useRef } from "react";

/** Cursor-following "magnetic pull" on hover, pure transform, spring-eased. */
export function useMagnetic<T extends HTMLElement>(strength = 0.25) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;

    function tick() {
      curX += (targetX - curX) * 0.18;
      curY += (targetY - curY) * 0.18;
      if (el) el.style.transform = `translate(${curX.toFixed(2)}px, ${curY.toFixed(2)}px)`;
      raf = requestAnimationFrame(tick);
    }

    function onMove(e: PointerEvent) {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      targetX = relX * strength;
      targetY = relY * strength;
    }

    function onLeave() {
      targetX = 0;
      targetY = 0;
    }

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      el.style.transform = "";
    };
  }, [strength]);

  return ref;
}
