import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { CircleDot } from "lucide-react";

export const Route = createFileRoute("/dhikr")({
  head: () => ({
    meta: [
      { title: "Dhikr" },
      { name: "description", content: "Track your daily Dhikr counts." },
    ],
  }),
  component: DhikrPage,
});

const dhikrList = [
  { name: "Subhanallah", meta: "Glory be to Allah", count: 33 },
  { name: "Alhamdulillah", meta: "All praise is due to Allah", count: 33 },
  { name: "Allahu Akbar", meta: "Allah is the Greatest", count: 34 },
  { name: "La ilaha illallah", meta: "There is no god but Allah", count: 100 },
];

function DhikrPage() {
  const totalCount = dhikrList.reduce((sum, d) => sum + d.count, 0);

  return (
    <AppShell title="Dhikr" subtitle="Daily remembrance counter">
      <PageHeader title="Dhikr" subtitle="Your daily tasbeeh record" />

      <div className="p-5 rounded-3xl bg-primary-soft mb-5 flex items-center gap-4">
        <div className="h-14 w-14 rounded-2xl bg-primary/15 text-primary grid place-items-center shrink-0">
          <CircleDot className="h-7 w-7" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Today's tasbeeh</p>
          <p className="text-xl font-semibold text-foreground">{totalCount} total recitations</p>
        </div>
      </div>

      <div className="space-y-2">
        {dhikrList.map((d) => (
          <div
            key={d.name}
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-surface border border-border"
          >
            <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center shrink-0">
              <CircleDot className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-foreground truncate">{d.name}</p>
              <p className="text-xs text-muted-foreground truncate">{d.meta}</p>
            </div>
            <span className="text-[10px] font-semibold text-primary bg-primary/10 rounded-full px-2.5 py-1 shrink-0">
              {d.count}×
            </span>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
