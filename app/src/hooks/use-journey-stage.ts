import { useEffect, useState } from "react";

const STAGES = [
  { id: "attention", label: "Advertising" },
  { id: "response", label: "Automation" },
  { id: "experience", label: "Web" },
];

export function useJourneyStage() {
  const [active, setActive] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const sections = STAGES.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    const hideBoundary = document.getElementById("process");
    if (sections.length === 0 && !hideBoundary) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (entry.target === hideBoundary) {
            setHidden(true);
            continue;
          }
          setHidden(false);
          const idx = sections.indexOf(entry.target as HTMLElement);
          if (idx !== -1) setActive(idx);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    if (hideBoundary) observer.observe(hideBoundary);
    return () => observer.disconnect();
  }, []);

  return { stages: STAGES, active, hidden };
}
