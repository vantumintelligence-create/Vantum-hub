import { useEffect, useState } from "react";

const STAGES = [
  { id: "attention", label: "Attention" },
  { id: "experience", label: "Experience" },
  { id: "response", label: "Response" },
  { id: "conversion", label: "Conversion" },
];

export function useJourneyStage() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = STAGES.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = sections.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActive(idx);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return { stages: STAGES, active };
}
