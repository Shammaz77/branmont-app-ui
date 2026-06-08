import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/superadmin/students")({
  head: () => ({ meta: [{ title: "All Students — Super Admin" }] }),
  component: StudentsListPage,
});

const studentsList = [
  { name: "Arjun K.", meta: "Grade 10-A · Roll No. 12", status: "92% Attendance" },
  { name: "Sneha R.", meta: "Grade 10-A · Roll No. 18", status: "88% Attendance" },
  { name: "Karthik V.", meta: "Grade 9-B · Roll No. 04", status: "95% Attendance" },
  { name: "Meera S.", meta: "Grade 9-B · Roll No. 21", status: "79% Attendance" },
  { name: "Rohan D.", meta: "Grade 8-C · Roll No. 09", status: "90% Attendance" },
  { name: "Anjali P.", meta: "Grade 8-C · Roll No. 15", status: "97% Attendance" },
  { name: "Vikram T.", meta: "Grade 11-A · Roll No. 07", status: "84% Attendance" },
  { name: "Divya M.", meta: "Grade 11-A · Roll No. 22", status: "91% Attendance" },
];

function StudentsListPage() {
  return (
    <AppShell title="All Students" subtitle="Super Admin · Student directory">
      <PageHeader title="All Students" subtitle={`${studentsList.length} students enrolled`} />
      <div className="space-y-2">
        {studentsList.map((s) => (
          <div key={s.name} className="flex items-center gap-3 p-3 rounded-2xl bg-surface border border-border">
            <div className="h-10 w-10 rounded-full bg-primary-soft text-primary grid place-items-center text-sm font-semibold shrink-0">
              {s.name[0]}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium truncate">{s.name}</p>
              <p className="text-xs text-muted-foreground truncate">{s.meta}</p>
            </div>
            <span className="text-[10px] font-semibold text-primary bg-primary/10 rounded-full px-2.5 py-1 shrink-0">
              {s.status}
            </span>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
