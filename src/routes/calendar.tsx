import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/calendar")({
  head: () => ({ meta: [{ title: "Calendar" }] }),
  component: () => (
    <AppShell title="Calendar">
      <PageHeader title="Academic Calendar" subtitle="Events, holidays & exams" />
      <div className="space-y-2">
        {[
          { d: "5 Jun", t: "Sports Day", tag: "Event", tone: "bg-emerald-50 text-emerald-600" },
          { d: "10 Jun", t: "Fee Due Date", tag: "Reminder", tone: "bg-amber-50 text-amber-600" },
          { d: "12 Jun", t: "Mid-term Exams Begin", tag: "Exam", tone: "bg-violet-50 text-violet-600" },
          { d: "21 Jun", t: "Yoga Day Celebration", tag: "Event", tone: "bg-blue-50 text-blue-600" },
          { d: "28 Jun", t: "Summer Break Starts", tag: "Holiday", tone: "bg-rose-50 text-rose-600" },
        ].map((e, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-surface border border-border">
            <div className="text-xs font-semibold w-16">{e.d}</div>
            <div className="flex-1 text-sm font-medium">{e.t}</div>
            <span className={`text-[10px] font-medium px-2 py-1 rounded-full ${e.tone}`}>{e.tag}</span>
          </div>
        ))}
      </div>
    </AppShell>
  ),
});
