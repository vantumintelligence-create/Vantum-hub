import { useJourneyStage } from "../../hooks/use-journey-stage";

export function JourneyIndicator() {
  const { stages, active } = useJourneyStage();

  return (
    <div className="pointer-events-none fixed right-7 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex">
      {stages.map((stage, i) => (
        <div key={stage.id} className="flex items-center gap-2.5">
          <span
            className={`font-mono-vt text-[9px] uppercase tracking-[0.2em] transition-colors duration-300 ${
              i === active ? "text-[#c9a24b]" : "text-[#f5f1e8]/25"
            }`}
          >
            {String(i + 1).padStart(2, "0")} {stage.label}
          </span>
          <span
            className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
              i === active ? "bg-[#c9a24b]" : "bg-[#f5f1e8]/20"
            }`}
          />
        </div>
      ))}
    </div>
  );
}
