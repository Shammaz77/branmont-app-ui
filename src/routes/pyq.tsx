import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { FileQuestion, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/pyq")({
  head: () => ({ meta: [{ title: "Previous Year Questions" }] }),
  component: () => (
    <AppShell title="Previous Year Questions">
      <PageHeader title="Question Bank" subtitle="Past 5 years • Subject-wise" />
      <div className="space-y-2">
        {[
          { s: "Mathematics", c: 42 },
          { s: "Physics", c: 38 },
          { s: "Chemistry", c: 35 },
          { s: "Biology", c: 40 },
          { s: "English", c: 28 },
        ].map((p) => (
          <div key={p.s} className="flex items-center gap-3 p-3 rounded-2xl bg-surface border border-border">
            <div className="h-10 w-10 rounded-xl bg-lime-50 text-lime-600 grid place-items-center"><FileQuestion className="h-5 w-5" /></div>
            <div className="flex-1">
              <p className="text-sm font-medium">{p.s}</p>
              <p className="text-xs text-muted-foreground">{p.c} papers available</p>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </div>
        ))}
      </div>
    </AppShell>
  ),
});
