import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { AlarmClock, Shirt, NotebookPen, Moon, CheckCircle2, XCircle } from "lucide-react";

export const Route = createFileRoute("/my-tutors-diary")({
  head: () => ({
    meta: [
      { title: "Tutors Diary" },
      { name: "description", content: "Your conduct remarks recorded by your tutors." },
    ],
  }),
  component: MyTutorsDiaryPage,
});

const remarks = [
  { label: "Late wake up", icon: AlarmClock, flagged: false },
  { label: "Improper uniform", icon: Shirt, flagged: true },
  { label: "Home work", icon: NotebookPen, flagged: false },
  { label: "Sleeping in class room", icon: Moon, flagged: false },
];

function MyTutorsDiaryPage() {
  const flaggedCount = remarks.filter((r) => r.flagged).length;

  return (
    <AppShell title="Tutors Diary" subtitle="Conduct remarks from your tutors">
      <PageHeader title="Tutors Diary" subtitle={`${flaggedCount} remark(s) noted this week`} />

      <div className="space-y-2">
        {remarks.map((r) => {
          const Icon = r.icon;
          return (
            <div
              key={r.label}
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-surface border border-border"
            >
              <div className={`h-11 w-11 rounded-xl grid place-items-center shrink-0 ${r.flagged ? "bg-rose-50 text-rose-500" : "bg-primary-soft text-primary"}`}>
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium flex-1 min-w-0 truncate">{r.label}</span>
              {r.flagged ? (
                <span className="flex items-center gap-1.5 text-xs font-semibold text-rose-500 shrink-0">
                  <XCircle className="h-4 w-4" /> Noted
                </span>
              ) : (
                <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 shrink-0">
                  <CheckCircle2 className="h-4 w-4" /> Clear
                </span>
              )}
            </div>
          );
        })}
      </div>
    </AppShell>
  );
}
