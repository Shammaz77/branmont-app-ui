import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/results")({
  head: () => ({ meta: [{ title: "Results" }] }),
  component: () => (
    <AppShell title="Results">
      <div className="rounded-3xl p-5 bg-gradient-to-br from-amber-400 to-orange-500 text-white mb-5">
        <p className="text-xs opacity-85">Overall Grade</p>
        <p className="text-5xl font-bold mt-1">A+</p>
        <p className="text-sm mt-1 opacity-90">GPA 8.9 / 10 • Rank #4</p>
      </div>
      <PageHeader title="Subject Marks" subtitle="Mid Term — May 2026" />
      <div className="space-y-2">
        {[
          { s: "Mathematics", m: 92, t: 100 },
          { s: "Physics", m: 88, t: 100 },
          { s: "Chemistry", m: 85, t: 100 },
          { s: "Biology", m: 90, t: 100 },
          { s: "English", m: 94, t: 100 },
        ].map((r) => (
          <div key={r.s} className="p-3 rounded-2xl bg-surface border border-border">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium">{r.s}</p>
              <p className="text-sm font-semibold">{r.m}/{r.t}</p>
            </div>
            <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
              <div className="h-full bg-primary" style={{ width: `${r.m}%` }} />
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  ),
});
