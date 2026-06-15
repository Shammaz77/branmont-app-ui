import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { CalendarDays, Clock, CheckCircle2, XCircle, Hourglass } from "lucide-react";

export const Route = createFileRoute("/parent-child-leave")({
  head: () => ({
    meta: [
      { title: "Child Leave Requests" },
      { name: "description", content: "Track leave requests submitted for your child." },
    ],
  }),
  component: ParentChildLeavePage,
});

const leaveRequests = [
  { reason: "Family function", dates: "10 – 11 Jun 2026", status: "Approved" },
  { reason: "Fever & rest", dates: "2 Jun 2026", status: "Approved" },
  { reason: "Dental appointment", dates: "20 Jun 2026", status: "Pending" },
  { reason: "Out of town trip", dates: "5 – 7 May 2026", status: "Rejected" },
];

const statusStyles: Record<string, { cls: string; icon: typeof CheckCircle2 }> = {
  Approved: { cls: "text-emerald-600 bg-emerald-50", icon: CheckCircle2 },
  Pending: { cls: "text-amber-600 bg-amber-50", icon: Hourglass },
  Rejected: { cls: "text-rose-500 bg-rose-50", icon: XCircle },
};

function ParentChildLeavePage() {
  return (
    <AppShell title="Leave Requests" subtitle="Arjun K. · Grade 10-A">
      <PageHeader title="Leave Requests" subtitle={`${leaveRequests.length} requests submitted`} />

      <div className="space-y-2.5">
        {leaveRequests.map((l, i) => {
          const style = statusStyles[l.status];
          const StatusIcon = style.icon;
          return (
            <div key={i} className="flex items-center gap-3 p-3.5 rounded-2xl bg-surface border border-border">
              <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center shrink-0">
                <CalendarDays className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground truncate">{l.reason}</p>
                <p className="text-xs text-muted-foreground truncate flex items-center gap-1 mt-0.5">
                  <Clock className="h-3 w-3" /> {l.dates}
                </p>
              </div>
              <span className={`flex items-center gap-1.5 text-[11px] font-semibold rounded-full px-3 py-1.5 shrink-0 ${style.cls}`}>
                <StatusIcon className="h-3.5 w-3.5" /> {l.status}
              </span>
            </div>
          );
        })}
      </div>
    </AppShell>
  );
}
