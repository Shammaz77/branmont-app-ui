import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { BookOpen, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/academics")({
  head: () => ({ meta: [{ title: "Academics — Montessori" }] }),
  component: () => (
    <AppShell title="Academics">
      <PageHeader title="Academic Framework" subtitle="Your subjects, syllabus & progress" />
      <div className="grid sm:grid-cols-2 gap-3">
        {[
          { name: "Mathematics", chapters: 12, progress: 68, color: "from-blue-400 to-blue-600" },
          { name: "Physics", chapters: 10, progress: 45, color: "from-violet-400 to-violet-600" },
          { name: "Chemistry", chapters: 11, progress: 52, color: "from-emerald-400 to-emerald-600" },
          { name: "English", chapters: 9, progress: 80, color: "from-pink-400 to-pink-600" },
          { name: "Biology", chapters: 14, progress: 33, color: "from-amber-400 to-amber-600" },
          { name: "Computer Sci.", chapters: 8, progress: 90, color: "from-cyan-400 to-cyan-600" },
        ].map((s) => (
          <div key={s.name} className="p-4 rounded-2xl bg-surface border border-border">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className={`h-9 w-9 rounded-xl bg-gradient-to-br ${s.color} text-white grid place-items-center`}>
                  <BookOpen className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">{s.name}</p>
                  <p className="text-[11px] text-muted-foreground">{s.chapters} chapters</p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
              <div className={`h-full bg-gradient-to-r ${s.color}`} style={{ width: `${s.progress}%` }} />
            </div>
            <p className="text-[11px] text-muted-foreground mt-1.5">{s.progress}% completed</p>
          </div>
        ))}
      </div>
    </AppShell>
  ),
});
