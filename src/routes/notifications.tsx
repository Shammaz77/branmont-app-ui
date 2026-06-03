import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { Bell, CheckCircle2, AlertCircle, Info } from "lucide-react";

export const Route = createFileRoute("/notifications")({
  head: () => ({ meta: [{ title: "Notifications" }] }),
  component: () => (
    <AppShell title="Notifications">
      <PageHeader title="Notifications" subtitle="Updates from your school" />
      <div className="space-y-2">
        {[
          { icon: CheckCircle2, tone: "bg-emerald-50 text-emerald-600", title: "Maths assignment submitted", time: "2h ago" },
          { icon: AlertCircle, tone: "bg-rose-50 text-rose-600", title: "Fee due on June 10", time: "5h ago" },
          { icon: Info, tone: "bg-blue-50 text-blue-600", title: "PTM scheduled for Saturday", time: "1d ago" },
          { icon: Bell, tone: "bg-violet-50 text-violet-600", title: "New textbook chapter added", time: "2d ago" },
        ].map((n, i) => {
          const Icon = n.icon;
          return (
            <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-surface border border-border">
              <div className={`h-9 w-9 rounded-xl grid place-items-center ${n.tone}`}><Icon className="h-4.5 w-4.5" /></div>
              <div className="flex-1">
                <p className="text-sm font-medium">{n.title}</p>
                <p className="text-xs text-muted-foreground">{n.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </AppShell>
  ),
});
