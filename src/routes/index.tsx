import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import {
  Search, SlidersHorizontal, Heart, Calendar,
  ClipboardCheck, Clock, GraduationCap,
  Award, BookOpen, IdCard, Building2, Sparkles, BookMarked,
  FileQuestion, Video, Timer, MessageSquare,
  HandHeart, Book, CircleDot, PencilLine, ClipboardList,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Montessori — School App" },
      { name: "description", content: "All-in-one school app for students, parents and teachers." },
    ],
  }),
  component: Index,
});

const stats = [
  { label: "Attendance", value: "92%", sub: "this week", icon: ClipboardCheck },
  { label: "Exams", value: "3", sub: "this month", icon: GraduationCap },
];

const upcomingPeriods = [
  { subject: "Mathematics", time: "10:00 AM · Room 201", teacher: "Mrs. Johnson" },
  { subject: "Physics", time: "11:00 AM · Lab 3", teacher: "Mr. Singh" },
  { subject: "English Literature", time: "12:30 PM · Room 105", teacher: "Ms. Rivera" },
  { subject: "Chemistry", time: "2:00 PM · Lab 1", teacher: "Mr. Kumar" },
];

const quickActions = [
  { to: "/attendance", label: "Attendance", icon: ClipboardCheck, tint: "bg-primary-soft text-primary" },
  { to: "/timetable", label: "Time Table", icon: Clock, tint: "bg-primary-soft text-primary" },
  { to: "/exams", label: "Exams", icon: GraduationCap, tint: "bg-primary-soft text-primary" },
  { to: "/results", label: "Results", icon: Award, tint: "bg-primary-soft text-primary" },
];

const features = [
  { to: "/academics", label: "Academics", icon: BookOpen, tint: "bg-primary-soft text-primary" },
  { to: "/calendar", label: "Calendar", icon: Calendar, tint: "bg-primary-soft text-primary" },
  { to: "/idcard", label: "ID Card", icon: IdCard, tint: "bg-primary-soft text-primary" },
  { to: "/hostel", label: "Hostel", icon: Building2, tint: "bg-primary-soft text-primary" },
  { to: "/ai", label: "AI Tools", icon: Sparkles, tint: "bg-primary-soft text-primary" },
  { to: "/textbook", label: "Textbook", icon: BookMarked, tint: "bg-primary-soft text-primary" },
  { to: "/pyq", label: "Prev. Qns", icon: FileQuestion, tint: "bg-primary-soft text-primary" },
  { to: "/monttalk", label: "Mont Talk", icon: Video, tint: "bg-primary-soft text-primary" },
  { to: "/mocktest", label: "Mock Test", icon: Timer, tint: "bg-primary-soft text-primary" },
  { to: "/det", label: "DET", icon: PencilLine, tint: "bg-primary-soft text-primary" },
  { to: "/wet", label: "WET", icon: ClipboardList, tint: "bg-primary-soft text-primary" },
  { to: "/moral", label: "Moral", icon: Heart, tint: "bg-primary-soft text-primary" },
  { to: "/feedback", label: "Feedback", icon: MessageSquare, tint: "bg-primary-soft text-primary" },
];

const moralFeatures = [
  { to: "/prayer-attendance", label: "Prayer Attendance", icon: HandHeart, tint: "bg-primary-soft text-primary" },
  { to: "/quran", label: "Quran", icon: Book, tint: "bg-primary-soft text-primary" },
  { to: "/dhikr", label: "Dhikr", icon: CircleDot, tint: "bg-primary-soft text-primary" },
];

function Index() {
  return (
    <AppShell subtitle="Welcome back!">

      {/* Welcome — no background, clean text + stat cards */}
      <div className="mb-5">
        <p className="text-xs text-muted-foreground mb-0.5">Thursday, June 5, 2026</p>
        <h2 className="text-xl font-black text-foreground mb-4">Good Morning, Arjun!</h2>
        <div className="grid grid-cols-2 gap-2.5">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="flex items-center gap-3 bg-card border border-border rounded-2xl p-3.5 shadow-sm">
                <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-lg font-black text-foreground leading-none">{s.value}</p>
                  <p className="text-[10px] text-muted-foreground font-semibold mt-1 truncate">{s.label} · {s.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Search bar */}
      <div className="flex gap-2.5 mb-5">
        <div className="flex-1 flex items-center gap-2.5 bg-card border border-border rounded-2xl px-4 h-12 shadow-sm">
          <Search className="h-4 w-4 text-muted-foreground shrink-0" />
          <span className="text-sm text-muted-foreground">Search here...</span>
        </div>
        <button className="h-12 w-12 rounded-2xl bg-[#D19C2A] grid place-items-center shrink-0 shadow-md shadow-[#D19C2A]/30">
          <SlidersHorizontal className="h-5 w-5 text-white" />
        </button>
      </div>

      {/* Quick Access */}
      <section className="mb-5">
        <h3 className="text-[15px] font-bold mb-3">Quick Access</h3>
        <div className="grid grid-cols-4 gap-3">
          {quickActions.map((a) => {
            const Icon = a.icon;
            return (
              <Link
                key={a.to}
                to={a.to}
                className="flex flex-col items-center gap-2 active:scale-95 transition-transform"
              >
                <div className={`h-14 w-14 rounded-2xl grid place-items-center shadow-sm ${a.tint}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-[11px] text-center text-foreground/80 font-medium leading-tight">
                  {a.label}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Explore — same UI as Quick Access */}
      <section className="mb-5">
        <h3 className="text-[15px] font-bold mb-3">Explore</h3>
        <div className="grid grid-cols-4 gap-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <Link
                key={f.to}
                to={f.to}
                className="flex flex-col items-center gap-2 active:scale-95 transition-transform"
              >
                <div className={`h-14 w-14 rounded-2xl grid place-items-center shadow-sm ${f.tint}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-[11px] text-center text-foreground/80 font-medium leading-tight">
                  {f.label}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Moral */}
      <section className="mb-5">
        <h3 className="text-[15px] font-bold mb-3">Moral</h3>
        <div className="grid grid-cols-4 gap-3">
          {moralFeatures.map((f) => {
            const Icon = f.icon;
            return (
              <Link
                key={f.label}
                to={f.to}
                className="flex flex-col items-center gap-2 active:scale-95 transition-transform"
              >
                <div className={`h-14 w-14 rounded-2xl grid place-items-center shadow-sm ${f.tint}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-[11px] text-center text-foreground/80 font-medium leading-tight">
                  {f.label}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Next Schedule */}
      <section className="mb-5">
        <h3 className="text-[15px] font-bold mb-3">Next Schedule</h3>
        <div className="space-y-2.5">
          {upcomingPeriods.map((p) => (
            <div key={p.subject} className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl bg-card border border-border shadow-sm">
              <div className="h-10 w-10 rounded-full bg-primary/10 grid place-items-center shrink-0">
                <Clock className="h-[18px] w-[18px] text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-foreground truncate">{p.subject}</p>
                <p className="text-[11px] text-muted-foreground truncate mt-0.5">{p.time}</p>
              </div>
              <span className="text-[11px] font-semibold text-primary bg-primary/10 rounded-full px-3 py-1.5 shrink-0">
                {p.teacher}
              </span>
            </div>
          ))}
        </div>
      </section>

    </AppShell>
  );
}
