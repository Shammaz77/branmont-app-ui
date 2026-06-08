import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/superadmin/parents")({
  head: () => ({ meta: [{ title: "All Parents — Super Admin" }] }),
  component: ParentsListPage,
});

const parentsList = [
  { name: "Mr. Krishnan K.", meta: "Parent of Arjun K. · Grade 10-A", status: "Fees pending" },
  { name: "Mrs. Lakshmi R.", meta: "Parent of Sneha R. · Grade 10-A", status: "Fees cleared" },
  { name: "Mr. Vinod V.", meta: "Parent of Karthik V. · Grade 9-B", status: "PTM scheduled" },
  { name: "Mrs. Anita S.", meta: "Parent of Meera S. · Grade 9-B", status: "Fees cleared" },
  { name: "Mr. Deepak D.", meta: "Parent of Rohan D. · Grade 8-C", status: "Fees pending" },
  { name: "Mrs. Geetha G.", meta: "Parent of Anjali P. · Grade 8-C", status: "Fees cleared" },
  { name: "Mr. Suresh S.", meta: "Parent of Vikram T. · Grade 11-A", status: "PTM scheduled" },
  { name: "Mrs. Radha P.", meta: "Parent of Divya M. · Grade 11-A", status: "Fees cleared" },
];

function ParentsListPage() {
  return (
    <AppShell title="All Parents" subtitle="Super Admin · Guardian directory">
      <PageHeader title="All Parents" subtitle={`${parentsList.length} guardians registered`} />
      <div className="space-y-2">
        {parentsList.map((p) => (
          <div key={p.name} className="flex items-center gap-3 p-3 rounded-2xl bg-surface border border-border">
            <div className="h-10 w-10 rounded-full bg-primary-soft text-primary grid place-items-center text-sm font-semibold shrink-0">
              {p.name[0]}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium truncate">{p.name}</p>
              <p className="text-xs text-muted-foreground truncate">{p.meta}</p>
            </div>
            <span className="text-[10px] font-semibold text-primary bg-primary/10 rounded-full px-2.5 py-1 shrink-0">
              {p.status}
            </span>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
