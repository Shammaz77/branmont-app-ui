import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { Switch } from "@/components/ui/switch";
import {
  Users, Layers, AlertCircle, FileBarChart, Boxes,
  BookOpen, Calendar, ClipboardCheck, Clock, GraduationCap,
  Award, IdCard, Building2, Sparkles, BookMarked, FileQuestion,
  Video, Timer, Heart, MessageSquare, Bell, User, ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/superadmin/")({
  head: () => ({
    meta: [
      { title: "Super Admin" },
      { name: "description", content: "Manage every feature, module and user role across the app." },
    ],
  }),
  component: SuperAdminPage,
});

const stats = [
  { label: "Total Users", value: "1,284", sub: "across roles", icon: Users },
  { label: "Active Modules", value: "21", sub: "live now", icon: Layers },
  { label: "Open Reports", value: "5", sub: "needs review", icon: FileBarChart },
];

const roles = [
  { to: "/superadmin/students", label: "Students", icon: User, count: "980" },
  { to: "/superadmin/teachers", label: "Teachers", icon: Users, count: "64" },
  { to: "/superadmin/parents", label: "Parents", icon: Heart, count: "240" },
  { to: "/superadmin/batches", label: "Batches", icon: Boxes, count: "32" },
];

type ModuleItem = { to: string; label: string; icon: typeof BookOpen };

const moduleGroups: { group: string; items: ModuleItem[] }[] = [
  {
    group: "Academics",
    items: [
      { to: "/academics", label: "Academics", icon: BookOpen },
      { to: "/exams", label: "Exams", icon: GraduationCap },
      { to: "/results", label: "Results", icon: Award },
      { to: "/textbook", label: "Textbook", icon: BookMarked },
      { to: "/pyq", label: "Previous Questions", icon: FileQuestion },
      { to: "/mocktest", label: "Mock Test", icon: Timer },
    ],
  },
  {
    group: "Operations",
    items: [
      { to: "/attendance", label: "Attendance", icon: ClipboardCheck },
      { to: "/timetable", label: "Time Table", icon: Clock },
      { to: "/calendar", label: "Calendar", icon: Calendar },
      { to: "/leave", label: "Leave Requests", icon: Calendar },
      { to: "/hostel", label: "Hostel", icon: Building2 },
      { to: "/idcard", label: "ID Card", icon: IdCard },
    ],
  },
  {
    group: "Engagement",
    items: [
      { to: "/notifications", label: "Notifications", icon: Bell },
      { to: "/feedback", label: "Class Feedback", icon: MessageSquare },
      { to: "/monttalk", label: "Mont Talk", icon: Video },
      { to: "/moral", label: "Moral", icon: Heart },
      { to: "/ai", label: "AI Tools", icon: Sparkles },
    ],
  },
  {
    group: "Portals",
    items: [
      { to: "/parents", label: "Parent Portal", icon: Heart },
      { to: "/teachers", label: "Teacher Portal", icon: Users },
      { to: "/profile", label: "Student Profile", icon: User },
    ],
  },
];

const allModules = moduleGroups.flatMap((g) => g.items.map((it) => it.to));

function SuperAdminPage() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>(
    Object.fromEntries(allModules.map((to) => [to, true])),
  );

  const toggle = (to: string) =>
    setEnabled((prev) => ({ ...prev, [to]: !prev[to] }));

  return (
    <AppShell title="Super Admin" subtitle="Manage every feature across the app">
      <PageHeader title="Admin Dashboard" subtitle="Control modules, roles and access in one place" />

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2.5 mb-6">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-card border border-border rounded-2xl p-3.5 shadow-sm">
              <div className="h-9 w-9 rounded-xl bg-primary-soft text-primary grid place-items-center mb-2.5">
                <Icon className="h-4 w-4" />
              </div>
              <p className="text-lg font-black text-foreground leading-none">{s.value}</p>
              <p className="text-[9px] text-muted-foreground font-semibold mt-1.5 uppercase tracking-wider">{s.label}</p>
              <p className="text-[9px] text-primary font-semibold mt-0.5">{s.sub}</p>
            </div>
          );
        })}
      </div>

      {/* Manage roles */}
      <section className="mb-6">
        <h3 className="text-[15px] font-bold mb-3">Manage Roles</h3>
        <div className="grid grid-cols-4 gap-2.5">
          {roles.map((r) => {
            const Icon = r.icon;
            return (
              <Link
                key={r.to}
                to={r.to}
                className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-surface border border-border active:scale-95 transition-transform"
              >
                <div className="h-10 w-10 rounded-xl bg-primary-soft text-primary grid place-items-center">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <span className="text-sm font-semibold">{r.count}</span>
                <span className="text-[10px] text-muted-foreground text-center leading-tight">{r.label}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Pending review banner */}
      <div className="flex items-center gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-200 mb-6">
        <AlertCircle className="h-5 w-5 text-amber-600 shrink-0" />
        <p className="text-xs text-amber-700">
          <span className="font-semibold">5 reports</span> are awaiting your review across feedback and moral modules.
        </p>
      </div>

      {/* Module management, grouped */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-primary" />
          <h3 className="text-[15px] font-bold">Manage Features</h3>
        </div>
        {moduleGroups.map((g) => (
          <div key={g.group}>
            <p className="px-1 mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              {g.group}
            </p>
            <div className="space-y-2.5">
              {g.items.map((it) => {
                const Icon = it.icon;
                const isOn = enabled[it.to];
                return (
                  <div
                    key={`${g.group}-${it.to}`}
                    className="w-full flex items-center gap-3 p-4 rounded-2xl bg-surface border border-border"
                  >
                    <div className={`h-11 w-11 rounded-xl grid place-items-center shrink-0 ${isOn ? "bg-primary-soft text-primary" : "bg-muted text-muted-foreground"}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-foreground">{it.label}</p>
                      <p className="text-xs text-muted-foreground">{isOn ? "Enabled for all roles" : "Disabled"}</p>
                    </div>
                    <Switch checked={isOn} onCheckedChange={() => toggle(it.to)} />
                    <Link
                      to={it.to}
                      className="h-9 w-9 grid place-items-center rounded-xl bg-muted text-muted-foreground shrink-0"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </AppShell>
  );
}
