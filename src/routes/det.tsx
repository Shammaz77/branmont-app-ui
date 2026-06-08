import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { PencilLine } from "lucide-react";

export const Route = createFileRoute("/det")({
  head: () => ({
    meta: [
      { title: "DET — Daily Entrance Test" },
      { name: "description", content: "Your Daily Entrance Test scores by subject." },
    ],
  }),
  component: DetPage,
});

const detResults = [
  { subject: "Mathematics", date: "2 Jun 2026", marks: 42, total: 50 },
  { subject: "Physics", date: "3 Jun 2026", marks: 38, total: 50 },
  { subject: "Chemistry", date: "4 Jun 2026", marks: 45, total: 50 },
  { subject: "English", date: "5 Jun 2026", marks: 40, total: 50 },
  { subject: "Biology", date: "6 Jun 2026", marks: 47, total: 50 },
];

function DetPage() {
  const totalMarks = detResults.reduce((sum, r) => sum + r.marks, 0);
  const totalMax = detResults.reduce((sum, r) => sum + r.total, 0);
  const avgPercent = Math.round((totalMarks / totalMax) * 100);

  return (
    <AppShell title="DET" subtitle="Daily Entrance Test">
      <PageHeader title="Daily Entrance Test" subtitle="Your latest DET scores by subject" />

      <div className="p-5 rounded-3xl bg-primary-soft mb-5 flex items-center gap-4">
        <div className="h-14 w-14 rounded-2xl bg-primary/15 text-primary grid place-items-center shrink-0">
          <PencilLine className="h-7 w-7" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Overall average</p>
          <p className="text-xl font-semibold text-foreground">{avgPercent}% · {totalMarks}/{totalMax} marks</p>
        </div>
      </div>

      <div className="space-y-2">
        {detResults.map((r) => {
          const pct = Math.round((r.marks / r.total) * 100);
          return (
            <div key={r.subject} className="flex items-center gap-3 p-3.5 rounded-2xl bg-surface border border-border">
              <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center shrink-0">
                <PencilLine className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground truncate">{r.subject}</p>
                <p className="text-xs text-muted-foreground truncate">{r.date}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-semibold text-foreground">{r.marks}/{r.total}</p>
                <p className="text-[11px] text-primary font-medium mt-0.5">{pct}%</p>
              </div>
            </div>
          );
        })}
      </div>
    </AppShell>
  );
}
