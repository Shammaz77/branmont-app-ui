import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/leave")({
  head: () => ({ meta: [{ title: "Leave Request" }] }),
  component: () => (
    <AppShell title="Leave Request">
      <PageHeader title="Apply for Leave" />
      <form className="space-y-3 p-4 rounded-2xl bg-surface border border-border mb-5" onSubmit={(e) => e.preventDefault()}>
        <Field label="Leave Type">
          <select className="input"><option>Sick Leave</option><option>Casual Leave</option><option>Other</option></select>
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="From"><input type="date" className="input" /></Field>
          <Field label="To"><input type="date" className="input" /></Field>
        </div>
        <Field label="Reason"><textarea rows={3} className="input" placeholder="Brief reason..." /></Field>
        <button className="w-full h-11 rounded-2xl bg-primary text-primary-foreground font-medium">Submit Request</button>
      </form>
      <PageHeader title="Recent Requests" />
      <div className="space-y-2">
        {[
          { date: "28 May", reason: "Fever", status: "Approved", tone: "bg-emerald-50 text-emerald-600" },
          { date: "15 May", reason: "Family function", status: "Approved", tone: "bg-emerald-50 text-emerald-600" },
          { date: "02 May", reason: "Medical", status: "Pending", tone: "bg-amber-50 text-amber-600" },
        ].map((r, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-surface border border-border">
            <div>
              <p className="text-sm font-medium">{r.reason}</p>
              <p className="text-xs text-muted-foreground">{r.date}</p>
            </div>
            <span className={`text-[10px] font-medium px-2 py-1 rounded-full ${r.tone}`}>{r.status}</span>
          </div>
        ))}
      </div>
      <style>{`.input{width:100%;height:42px;padding:0 14px;border-radius:14px;background:var(--surface-2);border:1px solid var(--border);font-size:14px;outline:none} textarea.input{height:auto;padding:10px 14px}`}</style>
    </AppShell>
  ),
});

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-foreground/70">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
