import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import {
  ClipboardCheck, BookOpen, Megaphone, MessageSquare,
  NotebookPen, Clock, Award, Bell, ChevronRight, BookText,
  CalendarCheck, Users, GraduationCap,
} from "lucide-react";

export const Route = createFileRoute("/teachers")({
  head: () => ({
    meta: [
      { title: "Teacher Portal" },
      { name: "description", content: "Everything teachers need to manage classes, attendance and communication." },
    ],
  }),
  component: TeachersPage,
});

const quickLinks = [
  { to: "/teacher-timetable", label: "Time Table", icon: Clock, tint: "bg-primary-soft text-primary" },
  { to: "/teacher-attendance", label: "Attendance", icon: ClipboardCheck, tint: "bg-primary-soft text-primary" },
  { to: "/teacher-exams", label: "Exams", icon: BookOpen, tint: "bg-primary-soft text-primary" },
  { to: "/results", label: "Results", icon: Award, tint: "bg-primary-soft text-primary" },
  { to: "/teacher-feedback", label: "Feedback", icon: MessageSquare, tint: "bg-primary-soft text-primary" },
  { to: "/tutors-diary", label: "Tutors Diary", icon: BookText, tint: "bg-primary-soft text-primary" },
  { to: "/notifications", label: "Notifications", icon: Bell, tint: "bg-primary-soft text-primary" },
];

const services = [
  {
    icon: ClipboardCheck,
    title: "Mark Attendance",
    desc: "Take attendance for today's classes",
    badge: "2 pending",
  },
  {
    icon: NotebookPen,
    title: "Gradebook & Assignments",
    desc: "Review submissions and update grades",
    badge: "8 to grade",
  },
  {
    icon: Megaphone,
    title: "Class Announcements",
    desc: "Share updates and notices with your classes",
    badge: "Post new",
  },
];

function TeachersPage() {
  return (
    <AppShell title="Teacher Portal" subtitle="Manage your classes with ease">
      <PageHeader title="Welcome, Teacher!" subtitle="Plan lessons, track progress and stay connected" />

      {/* Hero summary card */}
      <div className="p-5 rounded-3xl bg-primary-soft mb-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 rounded-2xl bg-primary/15 text-primary grid place-items-center shrink-0">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Today's classes</p>
            <p className="text-lg font-semibold text-foreground truncate">Mrs. Priya · Mathematics</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { label: "Classes Today", value: "5", icon: CalendarCheck },
            { label: "Students", value: "142", icon: Users },
            { label: "To Grade", value: "8", icon: NotebookPen },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-2.5 bg-card border border-border rounded-2xl p-3">
                <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-foreground leading-none">{stat.value}</p>
                  <p className="text-[9px] text-muted-foreground font-medium mt-1 truncate">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick links grid */}
      <section className="mb-6">
        <h3 className="text-[15px] font-bold mb-3">Quick Links</h3>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {quickLinks.map((l) => {
            const Icon = l.icon;
            return (
              <Link
                key={l.to}
                to={l.to}
                className="flex flex-col items-center gap-2 active:scale-95 transition-transform"
              >
                <div className={`h-14 w-14 rounded-2xl grid place-items-center shadow-sm ${l.tint}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-[11px] text-center text-foreground/80 font-medium leading-tight">
                  {l.label}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Teacher services list */}
      <section>
        <h3 className="text-[15px] font-bold mb-3">Teacher Tools</h3>
        <div className="space-y-2.5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <button
                key={s.title}
                className="w-full flex items-center gap-3 p-4 rounded-2xl bg-surface border border-border text-left active:scale-[0.99] transition-transform"
              >
                <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-foreground">{s.title}</p>
                  <p className="text-xs text-muted-foreground truncate">{s.desc}</p>
                </div>
                <span className="text-[10px] font-semibold text-primary bg-primary/10 rounded-full px-2.5 py-1 shrink-0">
                  {s.badge}
                </span>
                <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
              </button>
            );
          })}
        </div>
      </section>
    </AppShell>
  );
}
