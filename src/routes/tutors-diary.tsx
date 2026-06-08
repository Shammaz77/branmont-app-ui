import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { AlarmClock, Shirt, NotebookPen, Moon, Check, X } from "lucide-react";

export const Route = createFileRoute("/tutors-diary")({
  head: () => ({
    meta: [
      { title: "Tutors Diary" },
      { name: "description", content: "Record daily conduct remarks for your students." },
    ],
  }),
  component: TutorsDiaryPage,
});

const remarks = [
  { key: "late", label: "Late wake up", icon: AlarmClock },
  { key: "uniform", label: "Improper uniform", icon: Shirt },
  { key: "homework", label: "Home work", icon: NotebookPen },
  { key: "sleeping", label: "Sleeping in class room", icon: Moon },
];

const students = [
  "Arjun K.", "Sneha R.", "Karthik V.", "Meera S.", "Rohan D.",
  "Anjali P.", "Vikram T.", "Divya M.",
];

type Status = "done" | "not-done";

function TutorsDiaryPage() {
  const [activeRemark, setActiveRemark] = useState(remarks[0].key);
  const [statuses, setStatuses] = useState<Record<string, Record<string, Status>>>(() =>
    Object.fromEntries(
      remarks.map((r) => [r.key, Object.fromEntries(students.map((s) => [s, "not-done" as Status]))]),
    ),
  );

  const setStatus = (remarkKey: string, name: string, status: Status) =>
    setStatuses((prev) => ({
      ...prev,
      [remarkKey]: { ...prev[remarkKey], [name]: status },
    }));

  const current = remarks.find((r) => r.key === activeRemark)!;
  const currentStatuses = statuses[activeRemark];
  const doneCount = Object.values(currentStatuses).filter((s) => s === "done").length;

  return (
    <AppShell title="Tutors Diary" subtitle="Daily conduct remarks for your class">
      <PageHeader title="Tutors Diary" subtitle="Select a remark to mark students" />

      {/* Remark categories */}
      <div className="grid grid-cols-2 gap-2.5 mb-5">
        {remarks.map((r) => {
          const Icon = r.icon;
          const isActive = activeRemark === r.key;
          return (
            <button
              key={r.key}
              onClick={() => setActiveRemark(r.key)}
              className={`flex items-center gap-2.5 p-3.5 rounded-2xl border text-left transition-colors ${
                isActive
                  ? "bg-primary-soft border-primary/30"
                  : "bg-surface border-border"
              }`}
            >
              <div className={`h-10 w-10 rounded-xl grid place-items-center shrink-0 ${isActive ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"}`}>
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-semibold text-foreground leading-tight">{r.label}</span>
            </button>
          );
        })}
      </div>

      {/* Student list for selected remark */}
      <PageHeader title={current.label} subtitle={`${doneCount} of ${students.length} marked`} />
      <div className="space-y-2">
        {students.map((name) => {
          const status = currentStatuses[name];
          return (
            <div
              key={name}
              className="flex items-center gap-3 p-3 rounded-2xl bg-surface border border-border"
            >
              <div className="h-10 w-10 rounded-full bg-primary-soft text-primary grid place-items-center text-sm font-semibold shrink-0">
                {name[0]}
              </div>
              <p className="text-sm font-medium flex-1 min-w-0 truncate">{name}</p>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => setStatus(activeRemark, name, "done")}
                  className={`flex items-center gap-1 text-xs font-semibold rounded-full px-3 py-1.5 transition-colors ${
                    status === "done"
                      ? "bg-rose-500 text-white"
                      : "bg-rose-50 text-rose-500"
                  }`}
                >
                  <Check className="h-3.5 w-3.5" /> Yes
                </button>
                <button
                  onClick={() => setStatus(activeRemark, name, "not-done")}
                  className={`flex items-center gap-1 text-xs font-semibold rounded-full px-3 py-1.5 transition-colors ${
                    status === "not-done"
                      ? "bg-emerald-500 text-white"
                      : "bg-emerald-50 text-emerald-600"
                  }`}
                >
                  <X className="h-3.5 w-3.5" /> No
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-5 h-12 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm shadow-sm shadow-primary/25">
        Save Diary Entry
      </button>
    </AppShell>
  );
}
