import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { Sparkles, BookOpen, FileText, Brain, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/ai")({
  head: () => ({ meta: [{ title: "AI Features" }] }),
  component: () => (
    <AppShell title="AI Features">
      <div className="rounded-3xl p-5 bg-gradient-to-br from-fuchsia-500 to-primary text-primary-foreground mb-5">
        <Sparkles className="h-7 w-7 mb-2" />
        <h2 className="text-xl font-semibold">Your AI Study Buddy</h2>
        <p className="text-sm opacity-90 mt-1">Smart help for homework, doubts & revision.</p>
      </div>
      <PageHeader title="Tools" />
      <div className="grid grid-cols-2 gap-3">
        {[
          { i: Brain, t: "Doubt Solver", d: "Snap & solve any problem" },
          { i: FileText, t: "Summarizer", d: "Chapter to 1-page notes" },
          { i: BookOpen, t: "Quiz Generator", d: "Practice MCQs instantly" },
          { i: MessageCircle, t: "AI Tutor Chat", d: "Ask anything 24/7" },
        ].map((x) => {
          const Icon = x.i;
          return (
            <div key={x.t} className="p-4 rounded-2xl bg-surface border border-border">
              <div className="h-10 w-10 rounded-xl bg-fuchsia-50 text-fuchsia-600 grid place-items-center mb-3"><Icon className="h-5 w-5" /></div>
              <p className="text-sm font-semibold">{x.t}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{x.d}</p>
            </div>
          );
        })}
      </div>
    </AppShell>
  ),
});
