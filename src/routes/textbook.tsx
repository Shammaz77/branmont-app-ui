import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { BookMarked, Download } from "lucide-react";

export const Route = createFileRoute("/textbook")({
  head: () => ({ meta: [{ title: "Textbooks" }] }),
  component: () => (
    <AppShell title="Textbooks">
      <PageHeader title="Your Books" subtitle="Tap to read offline" />
      <div className="grid grid-cols-2 gap-3">
        {["Mathematics", "Physics", "Chemistry", "Biology", "English", "Hindi"].map((b, i) => (
          <div key={b} className="p-4 rounded-2xl bg-surface border border-border">
            <div className={`h-24 rounded-xl bg-gradient-to-br ${["from-blue-400 to-blue-600","from-violet-400 to-violet-600","from-emerald-400 to-emerald-600","from-amber-400 to-amber-600","from-pink-400 to-pink-600","from-cyan-400 to-cyan-600"][i]} grid place-items-center text-white mb-3`}>
              <BookMarked className="h-8 w-8" />
            </div>
            <p className="text-sm font-medium">{b}</p>
            <p className="text-[11px] text-muted-foreground">Class 10 • NCERT</p>
            <button className="mt-2 text-xs text-primary flex items-center gap-1"><Download className="h-3 w-3" /> Download</button>
          </div>
        ))}
      </div>
    </AppShell>
  ),
});
