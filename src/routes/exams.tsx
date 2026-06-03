import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/exams")({
  head: () => ({ meta: [{ title: "Exams" }] }),
  component: () => (
    <AppShell title="Exams">
      <PageHeader title="Upcoming Exams" subtitle="Schedule & syllabus" />
      <div className="space-y-2">
        {[
          { d: "12", m: "JUN", s: "Mathematics", t: "09:00 — 12:00", room: "Hall A" },
          { d: "14", m: "JUN", s: "Physics", t: "09:00 — 12:00", room: "Hall A" },
          { d: "16", m: "JUN", s: "Chemistry", t: "09:00 — 12:00", room: "Hall B" },
          { d: "18", m: "JUN", s: "English", t: "09:00 — 11:00", room: "Hall A" },
          { d: "20", m: "JUN", s: "Biology", t: "09:00 — 12:00", room: "Hall C" },
        ].map((e, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-surface border border-border">
            <div className="h-14 w-14 rounded-2xl bg-primary-soft text-primary grid place-items-center">
              <div className="text-center">
                <p className="text-lg font-bold leading-none">{e.d}</p>
                <p className="text-[10px] font-semibold">{e.m}</p>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{e.s}</p>
              <p className="text-xs text-muted-foreground">{e.t} • {e.room}</p>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  ),
});
