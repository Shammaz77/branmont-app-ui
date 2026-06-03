import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { Timer, Play } from "lucide-react";

export const Route = createFileRoute("/mocktest")({
  head: () => ({ meta: [{ title: "Mock Test" }] }),
  component: () => (
    <AppShell title="Mock Test">
      <PageHeader title="Mock Tests" subtitle="Timed practice exams" />
      <div className="space-y-3">
        {[
          { t: "Maths Full Mock 1", q: 30, m: 60 },
          { t: "Physics Quick Test", q: 20, m: 30 },
          { t: "Chemistry Drill", q: 25, m: 40 },
          { t: "Biology Mock 2", q: 30, m: 50 },
        ].map((m, i) => (
          <div key={i} className="p-4 rounded-2xl bg-surface border border-border flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-sky-50 text-sky-600 grid place-items-center"><Timer className="h-5 w-5" /></div>
            <div className="flex-1">
              <p className="text-sm font-semibold">{m.t}</p>
              <p className="text-xs text-muted-foreground">{m.q} questions • {m.m} min</p>
            </div>
            <button className="h-9 px-3 rounded-xl bg-primary text-primary-foreground text-xs font-medium flex items-center gap-1"><Play className="h-3.5 w-3.5" /> Start</button>
          </div>
        ))}
      </div>
    </AppShell>
  ),
});
