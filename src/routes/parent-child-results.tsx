import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { Award } from "lucide-react";

export const Route = createFileRoute("/parent-child-results")({
  head: () => ({
    meta: [
      { title: "Child Results" },
      { name: "description", content: "View your child's exam results by subject." },
    ],
  }),
  component: ParentChildResultsPage,
});

const examResults = [
  { exam: "Term 1 Exam", subject: "Mathematics", marks: 88, total: 100, grade: "A" },
  { exam: "Term 1 Exam", subject: "Physics", marks: 79, total: 100, grade: "B+" },
  { exam: "Term 1 Exam", subject: "Chemistry", marks: 91, total: 100, grade: "A+" },
  { exam: "Term 1 Exam", subject: "English", marks: 84, total: 100, grade: "A" },
  { exam: "Term 1 Exam", subject: "Biology", marks: 87, total: 100, grade: "A" },
];

function ParentChildResultsPage() {
  const totalMarks = examResults.reduce((sum, r) => sum + r.marks, 0);
  const totalMax = examResults.reduce((sum, r) => sum + r.total, 0);
  const avgPercent = Math.round((totalMarks / totalMax) * 100);

  return (
    <AppShell title="Child Results" subtitle="Arjun K. · Grade 10-A">
      <PageHeader title="Exam Results" subtitle="Term 1 Exam · subject-wise marks" />

      <div className="p-5 rounded-3xl bg-primary-soft mb-5 flex items-center gap-4">
        <div className="h-14 w-14 rounded-2xl bg-primary/15 text-primary grid place-items-center shrink-0">
          <Award className="h-7 w-7" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Overall average</p>
          <p className="text-xl font-semibold text-foreground">{avgPercent}% · {totalMarks}/{totalMax} marks</p>
        </div>
      </div>

      <div className="space-y-2">
        {examResults.map((r) => {
          const pct = Math.round((r.marks / r.total) * 100);
          return (
            <div key={r.subject} className="flex items-center gap-3 p-3.5 rounded-2xl bg-surface border border-border">
              <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center shrink-0">
                <span className="text-sm font-bold">{r.grade}</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground truncate">{r.subject}</p>
                <p className="text-xs text-muted-foreground truncate">{r.exam}</p>
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
