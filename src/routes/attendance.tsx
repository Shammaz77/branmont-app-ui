import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/attendance")({
  head: () => ({ meta: [{ title: "Attendance" }] }),
  component: () => {
    const days = Array.from({ length: 30 }, (_, i) => i + 1);
    const present = new Set([1,2,3,5,6,8,9,10,12,13,15,16,17,19,20,22,23,24,26,27,29,30]);
    const absent = new Set([4, 11, 18, 25]);
    return (
      <AppShell title="Attendance">
        <PageHeader title="June 2026" subtitle="Your attendance for this month" />
        <div className="grid grid-cols-3 gap-3 mb-5">
          <Stat label="Present" value="22" tone="bg-emerald-50 text-emerald-600" />
          <Stat label="Absent" value="4" tone="bg-rose-50 text-rose-600" />
          <Stat label="Percent" value="84%" tone="bg-violet-50 text-violet-600" />
        </div>
        <div className="p-4 rounded-2xl bg-surface border border-border">
          <div className="grid grid-cols-7 gap-2">
            {["S","M","T","W","T","F","S"].map((d, i) => (
              <div key={i} className="text-center text-[10px] font-semibold text-muted-foreground">{d}</div>
            ))}
            {days.map((d) => {
              const cls = present.has(d) ? "bg-emerald-100 text-emerald-700" : absent.has(d) ? "bg-rose-100 text-rose-700" : "bg-secondary text-muted-foreground";
              return (
                <div key={d} className={`aspect-square rounded-lg text-xs font-medium grid place-items-center ${cls}`}>{d}</div>
              );
            })}
          </div>
        </div>
      </AppShell>
    );
  },
});

function Stat({ label, value, tone }: { label: string; value: string; tone: string }) {
  return (
    <div className={`p-4 rounded-2xl ${tone}`}>
      <p className="text-xs/none opacity-80">{label}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
}
