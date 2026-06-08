import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { BookOpen, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/teacher-exams")({
  head: () => ({
    meta: [
      { title: "Exams" },
      { name: "description", content: "View term-wise exam schedules and subjects." },
    ],
  }),
  component: TeacherExamsPage,
});

const terms = [
  {
    name: "Term 1 Exam",
    meta: "12 – 20 June 2026",
    subjects: [
      { subject: "Mathematics", date: "12 Jun", time: "09:00 — 12:00", room: "Hall A" },
      { subject: "Physics", date: "14 Jun", time: "09:00 — 12:00", room: "Hall A" },
      { subject: "Chemistry", date: "16 Jun", time: "09:00 — 12:00", room: "Hall B" },
      { subject: "English", date: "18 Jun", time: "09:00 — 11:00", room: "Hall A" },
      { subject: "Biology", date: "20 Jun", time: "09:00 — 12:00", room: "Hall C" },
    ],
  },
  {
    name: "Term 2 Exam",
    meta: "10 – 18 November 2026",
    subjects: [
      { subject: "Mathematics", date: "10 Nov", time: "09:00 — 12:00", room: "Hall A" },
      { subject: "Physics", date: "12 Nov", time: "09:00 — 12:00", room: "Hall A" },
      { subject: "Chemistry", date: "14 Nov", time: "09:00 — 12:00", room: "Hall B" },
      { subject: "English", date: "16 Nov", time: "09:00 — 11:00", room: "Hall A" },
      { subject: "Biology", date: "18 Nov", time: "09:00 — 12:00", room: "Hall C" },
    ],
  },
];

function TeacherExamsPage() {
  const [openTerm, setOpenTerm] = useState<string | null>(terms[0].name);

  return (
    <AppShell title="Exams" subtitle="Term-wise exam schedule">
      <PageHeader title="Exams" subtitle="Tap a term to view its subjects" />

      <div className="space-y-3">
        {terms.map((term) => {
          const isOpen = openTerm === term.name;
          return (
            <div key={term.name} className="rounded-2xl bg-surface border border-border overflow-hidden">
              <button
                onClick={() => setOpenTerm(isOpen ? null : term.name)}
                className="w-full flex items-center gap-3 p-4 text-left"
              >
                <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center shrink-0">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-foreground">{term.name}</p>
                  <p className="text-xs text-muted-foreground">{term.meta}</p>
                </div>
                <ChevronDown className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 space-y-2">
                  {term.subjects.map((s) => (
                    <div key={s.subject} className="flex items-center gap-3 p-3 rounded-2xl bg-card border border-border">
                      <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
                        <div className="text-center leading-none">
                          <p className="text-xs font-bold">{s.date.split(" ")[0]}</p>
                          <p className="text-[9px] font-semibold uppercase">{s.date.split(" ")[1]}</p>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-foreground">{s.subject}</p>
                        <p className="text-xs text-muted-foreground">{s.time} • {s.room}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </AppShell>
  );
}
