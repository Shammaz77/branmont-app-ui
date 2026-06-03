import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { Star } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/feedback")({
  head: () => ({ meta: [{ title: "Class Feedback" }] }),
  component: FeedbackPage,
});

function FeedbackPage() {
  const [rating, setRating] = useState(4);
  return (
    <AppShell title="Class Feedback">
      <PageHeader title="Teacher Feedback" subtitle="Share how today's class went" />
      <div className="p-4 rounded-2xl bg-surface border border-border space-y-4">
        <div>
          <p className="text-xs font-medium text-foreground/70 mb-2">Subject & Teacher</p>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-primary-soft text-primary grid place-items-center font-semibold">P</div>
            <div>
              <p className="text-sm font-medium">Mathematics</p>
              <p className="text-xs text-muted-foreground">Ms. Priya • 09:00 AM</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs font-medium text-foreground/70 mb-2">Rate the class</p>
          <div className="flex gap-1">
            {[1,2,3,4,5].map((n) => (
              <button key={n} onClick={() => setRating(n)}>
                <Star className={`h-7 w-7 ${n <= rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`} />
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-medium text-foreground/70 mb-2">Your comments</p>
          <textarea rows={4} placeholder="What went well? What can improve?" className="w-full p-3 rounded-2xl bg-surface-2 border border-border outline-none text-sm focus:border-primary" />
        </div>
        <button className="w-full h-11 rounded-2xl bg-primary text-primary-foreground font-medium">Submit Feedback</button>
      </div>
    </AppShell>
  );
}
