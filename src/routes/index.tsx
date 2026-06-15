import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { GraduationCap, Briefcase, Heart, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Montessori — School App" },
      { name: "description", content: "Quick navigation to every portal." },
    ],
  }),
  component: HomePage,
});

const portals = [
  { to: "/students", label: "Student Portal", icon: GraduationCap, tint: "bg-primary-soft text-primary" },
  { to: "/teachers", label: "Teacher Portal", icon: Briefcase, tint: "bg-primary-soft text-primary" },
  { to: "/parents", label: "Parent Portal", icon: Heart, tint: "bg-primary-soft text-primary" },
  { to: "/superadmin", label: "Super Admin", icon: ShieldCheck, tint: "bg-primary-soft text-primary" },
] as const;

function HomePage() {
  return (
    <AppShell title="Pages" subtitle="Jump to any portal">
      <PageHeader title="All Pages" subtitle="Quick links to every portal" />

      <section>
        <h3 className="text-[15px] font-bold mb-3">Portals</h3>
        <div className="grid grid-cols-4 gap-3">
          {portals.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.to}
                to={p.to}
                className="flex flex-col items-center gap-2 active:scale-95 transition-transform"
              >
                <div className={`h-14 w-14 rounded-2xl grid place-items-center shadow-sm ${p.tint}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-[11px] text-center text-foreground/80 font-medium leading-tight">
                  {p.label}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </AppShell>
  );
}
