import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { Clock } from "lucide-react";

export const Route = createFileRoute("/timetable")({
  head: () => ({ meta: [{ title: "Time Table" }] }),
  component: () => (
    <AppShell title="Time Table">
      <PageHeader title="Weekly Schedule" subtitle="Class 10 - B" />
      <div className="space-y-2">
        {[
          { day: "Monday", periods: ["Maths", "Physics", "English", "Break", "Chem", "Bio"] },
          { day: "Tuesday", periods: ["English", "Maths", "CS", "Break", "Phys", "Hindi"] },
          { day: "Wednesday", periods: ["Bio", "Chem", "Maths", "Break", "Eng", "PE"] },
          { day: "Thursday", periods: ["Phys", "Maths", "Hindi", "Break", "CS", "Art"] },
          { day: "Friday", periods: ["Maths", "Bio", "Chem", "Break", "Eng", "Library"] },
        ].map((d) => (
          <div key={d.day} className="p-4 rounded-2xl bg-surface border border-border">
            <p className="text-sm font-semibold mb-2">{d.day}</p>
            <div className="flex gap-2 overflow-x-auto -mx-1 px-1">
              {d.periods.map((p, i) => (
                <div key={i} className="shrink-0 px-3 py-1.5 rounded-xl bg-secondary text-xs flex items-center gap-1.5">
                  <Clock className="h-3 w-3 text-primary" /> {p}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  ),
});
