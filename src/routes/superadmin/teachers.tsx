import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/superadmin/teachers")({
  head: () => ({ meta: [{ title: "All Teachers — Super Admin" }] }),
  component: TeachersListPage,
});

const teachersList = [
  { name: "Mrs. Priya N.", meta: "Mathematics · Grade 9-10", status: "5 classes today" },
  { name: "Mr. Singh A.", meta: "Physics · Grade 11-12", status: "4 classes today" },
  { name: "Ms. Rivera L.", meta: "English Literature · Grade 9-10", status: "3 classes today" },
  { name: "Mr. Kumar S.", meta: "Chemistry · Grade 11-12", status: "6 classes today" },
  { name: "Mrs. Iyer R.", meta: "Biology · Grade 9-10", status: "2 classes today" },
  { name: "Mr. Das T.", meta: "History · Grade 8-9", status: "4 classes today" },
  { name: "Ms. Fernandes C.", meta: "Geography · Grade 8-9", status: "3 classes today" },
];

function TeachersListPage() {
  return (
    <AppShell title="All Teachers" subtitle="Super Admin · Faculty directory">
      <PageHeader title="All Teachers" subtitle={`${teachersList.length} faculty members`} />
      <div className="space-y-2">
        {teachersList.map((t) => (
          <div key={t.name} className="flex items-center gap-3 p-3 rounded-2xl bg-surface border border-border">
            <div className="h-10 w-10 rounded-full bg-primary-soft text-primary grid place-items-center text-sm font-semibold shrink-0">
              {t.name[0]}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium truncate">{t.name}</p>
              <p className="text-xs text-muted-foreground truncate">{t.meta}</p>
            </div>
            <span className="text-[10px] font-semibold text-primary bg-primary/10 rounded-full px-2.5 py-1 shrink-0">
              {t.status}
            </span>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
