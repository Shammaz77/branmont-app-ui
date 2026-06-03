import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { Play, Clock } from "lucide-react";

export const Route = createFileRoute("/monttalk")({
  head: () => ({ meta: [{ title: "Mont Talk" }] }),
  component: () => (
    <AppShell title="Mont Talk">
      <PageHeader title="Video Lessons" subtitle="Curated talks & explainers" />
      <div className="space-y-3">
        {[
          { t: "Photosynthesis Explained", d: "Dr. Mehta", dur: "12:30", c: "from-emerald-400 to-teal-600" },
          { t: "Algebra: Quadratics", d: "Ms. Priya", dur: "18:05", c: "from-blue-400 to-indigo-600" },
          { t: "Newton's Laws", d: "Mr. Kumar", dur: "22:14", c: "from-violet-400 to-purple-600" },
          { t: "Writing Essays Better", d: "Ms. Anjali", dur: "09:48", c: "from-pink-400 to-rose-600" },
        ].map((v, i) => (
          <div key={i} className="rounded-2xl overflow-hidden bg-surface border border-border">
            <div className={`relative h-36 bg-gradient-to-br ${v.c} grid place-items-center`}>
              <div className="h-12 w-12 rounded-full bg-white/90 text-foreground grid place-items-center"><Play className="h-5 w-5 ml-0.5" /></div>
              <span className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-md flex items-center gap-1"><Clock className="h-3 w-3" />{v.dur}</span>
            </div>
            <div className="p-3">
              <p className="text-sm font-medium">{v.t}</p>
              <p className="text-xs text-muted-foreground">{v.d}</p>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  ),
});
