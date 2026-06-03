import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import {
  Play, MessageCircle, ClipboardCheck, Clock, GraduationCap,
  Award, BookOpen, Calendar, IdCard, Building2, Sparkles, BookMarked,
  FileQuestion, Video, Timer, Heart, MessageSquare,
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

const days = [
  { d: "Sun", n: 1 },
  { d: "Mon", n: 2 },
  { d: "Tue", n: 3, active: true },
  { d: "Wed", n: 4 },
  { d: "Thu", n: 5 },
  { d: "Fri", n: 6 },
  { d: "Sat", n: 7 },
];

const quickActions = [
  { to: "/attendance", label: "Attendance", icon: ClipboardCheck, tint: "bg-emerald-50 text-emerald-600" },
  { to: "/timetable", label: "Time Table", icon: Clock, tint: "bg-blue-50 text-blue-600" },
  { to: "/exams", label: "Exams", icon: GraduationCap, tint: "bg-violet-50 text-violet-600" },
  { to: "/results", label: "Results", icon: Award, tint: "bg-amber-50 text-amber-600" },
];

const features = [
  { to: "/academics", label: "Academics", icon: BookOpen, tint: "bg-indigo-50 text-indigo-600" },
  { to: "/calendar", label: "Calendar", icon: Calendar, tint: "bg-pink-50 text-pink-600" },
  { to: "/leave", label: "Leave", icon: Calendar, tint: "bg-orange-50 text-orange-600" },
  { to: "/idcard", label: "ID Card", icon: IdCard, tint: "bg-teal-50 text-teal-600" },
  { to: "/hostel", label: "Hostel", icon: Building2, tint: "bg-rose-50 text-rose-600" },
  { to: "/ai", label: "AI Tools", icon: Sparkles, tint: "bg-fuchsia-50 text-fuchsia-600" },
  { to: "/textbook", label: "Textbook", icon: BookMarked, tint: "bg-cyan-50 text-cyan-600" },
  { to: "/pyq", label: "Prev. Qns", icon: FileQuestion, tint: "bg-lime-50 text-lime-600" },
  { to: "/monttalk", label: "Mont Talk", icon: Video, tint: "bg-red-50 text-red-600" },
  { to: "/mocktest", label: "Mock Test", icon: Timer, tint: "bg-sky-50 text-sky-600" },
  { to: "/moral", label: "Moral", icon: Heart, tint: "bg-pink-50 text-pink-600" },
  { to: "/feedback", label: "Feedback", icon: MessageSquare, tint: "bg-purple-50 text-purple-600" },
];

function Index() {
  return (
    <AppShell title="Home">
      {/* Lesson hero card */}
      <section className="rounded-[2rem] p-6 bg-primary-soft relative overflow-hidden mb-6">
        <div className="max-w-[60%]">
          <h2 className="text-2xl font-semibold leading-tight text-foreground">
            Lesson with<br />teacher
          </h2>
          <p className="text-xs text-muted-foreground mt-2">Intermediate (B1)</p>
          <p className="text-[11px] text-muted-foreground mt-0.5">step 12 of 20</p>
          <Link
            to="/timetable"
            className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-95 transition"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            Start lesson
          </Link>
        </div>
        <div className="absolute right-4 bottom-3 top-3 w-32 grid place-items-center">
          <div className="relative">
            <div className="absolute -top-2 -left-6 h-10 w-10 rounded-full bg-white grid place-items-center shadow-sm">
              <MessageCircle className="h-4 w-4 text-primary" />
            </div>
            <div className="absolute -top-2 -right-2 h-10 w-10 rounded-full bg-primary grid place-items-center shadow-sm">
              <Play className="h-4 w-4 text-white fill-current" />
            </div>
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 grid place-items-center text-5xl">
              👩🏻‍💻
            </div>
          </div>
        </div>
      </section>

      {/* Class schedule */}
      <section className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold">Class Schedule</h3>
          <span className="text-xs text-muted-foreground">Nov 2025</span>
        </div>
        <div className="grid grid-cols-7 gap-1.5">
          {days.map((day) => (
            <button
              key={day.d}
              className={`flex flex-col items-center gap-1 py-2.5 rounded-2xl border transition ${
                day.active
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-surface border-border text-foreground/70"
              }`}
            >
              <span className="text-[10px] font-medium opacity-80">{day.d}</span>
              <span className="text-sm font-semibold">{day.n}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Upcoming events */}
      <section className="mb-6">
        <h3 className="text-base font-semibold mb-3">Upcoming events</h3>
        <div className="rounded-[1.75rem] p-5 bg-[oklch(0.95_0.08_150)] relative">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="inline-block text-[10px] font-medium text-foreground/60 mb-1.5">Online</span>
              <h4 className="text-xl font-semibold leading-tight">Speaking club</h4>
              <p className="text-xs text-muted-foreground mt-1">25 November 18:00</p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-foreground/60 mb-1">Friendly mentors</span>
              <div className="flex -space-x-2">
                {["🧑🏻", "👩🏽", "🧑🏽"].map((e, i) => (
                  <div key={i} className="h-7 w-7 rounded-full bg-white border-2 border-[oklch(0.95_0.08_150)] grid place-items-center text-xs">
                    {e}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button className="mt-4 w-full py-3 rounded-full bg-white text-foreground text-sm font-medium border border-foreground/10">
            Book place
          </button>
        </div>
      </section>

      {/* Quick actions */}
      <section className="mb-6">
        <h3 className="text-base font-semibold mb-3">Quick Access</h3>
        <div className="grid grid-cols-4 gap-3">
          {quickActions.map((a) => {
            const Icon = a.icon;
            return (
              <Link key={a.to} to={a.to} className="flex flex-col items-center gap-2">
                <div className={`h-14 w-14 rounded-2xl grid place-items-center ${a.tint}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-[11px] text-center text-foreground/80 leading-tight">{a.label}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* All features */}
      <section className="mb-2">
        <h3 className="text-base font-semibold mb-3">Explore</h3>
        <div className="grid grid-cols-4 gap-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <Link key={f.to} to={f.to} className="flex flex-col items-center gap-2 p-2 rounded-2xl hover:bg-surface-2 transition">
                <div className={`h-12 w-12 rounded-2xl grid place-items-center ${f.tint}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-[11px] text-center text-foreground/80 leading-tight">{f.label}</span>
              </Link>
            );
          })}
        </div>
      </section>
    </AppShell>
  );
}
