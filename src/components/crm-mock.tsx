/** Illustrated stand-in for the private CRM dashboard (no real company data). */
export function CrmMock() {
  const bars = [38, 46, 41, 55, 52, 63, 58, 70, 66, 78, 74, 86];
  return (
    <div
      role="img"
      aria-label="Illustration of a sales dashboard with a monthly trend chart and a client contact list"
      className="absolute inset-0 flex flex-col gap-3 bg-[radial-gradient(circle_at_80%_0%,rgb(1_193_106/0.12),transparent_55%)] p-5 sm:p-7"
    >
      <div className="flex items-center justify-between">
        <div className="h-2.5 w-24 rounded-full bg-line" />
        <div className="flex gap-1.5">
          <div className="h-2.5 w-10 rounded-full bg-line" />
          <div className="h-2.5 w-10 rounded-full bg-accent/60" />
        </div>
      </div>
      <div className="grid flex-1 grid-cols-[1.6fr_1fr] gap-3">
        <div className="flex flex-col rounded-xl border border-line bg-bg/60 p-3 sm:p-4">
          <div className="flex items-baseline justify-between">
            <div className="h-2 w-16 rounded-full bg-line" />
            <span className="font-mono text-[10px] text-accent">▲ trend</span>
          </div>
          <div className="mt-3 flex flex-1 items-end gap-1 sm:gap-1.5">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-accent/70"
                style={{ height: `${h}%`, opacity: 0.35 + i * 0.055 }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-xl border border-line bg-bg/60 p-3 sm:p-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="size-4 shrink-0 rounded-full bg-line" />
              <div className="h-2 flex-1 rounded-full bg-line" />
              <div className={`h-2 w-6 rounded-full ${i < 2 ? "bg-accent/60" : "bg-line"}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
