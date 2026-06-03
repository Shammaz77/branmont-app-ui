import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import {
  BookOpen, Calendar, ClipboardCheck, Clock, IdCard, Building2,
  Sparkles, BookMarked, FileQuestion, GraduationCap, Video, Award,
  Timer, Bell, Heart, MessageSquare, User, ChevronRight
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
      {/* Hero greeting */}
      <section className="rounded-3xl p-5 bg-gradient-to-br from-primary to-[oklch(0.5_0.2_290)] text-primary-foreground relative overflow-hidden mb-5">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        <p className="text-xs/none opacity-80">Wednesday, June 3</p>
        <h2 className="text-2xl font-semibold mt-1">Hi, Arjun 👋</h2>
        <p className="text-sm opacity-90 mt-1">You have 3 classes today and 1 pending assignment.</p>
        <div className="flex gap-2 mt-4">
          <Link to="/timetable" className="text-xs font-medium bg-white/15 hover:bg-white/25 transition px-3 py-1.5 rounded-full">View timetable</Link>
          <Link to="/attendance" className="text-xs font-medium bg-white text-primary px-3 py-1.5 rounded-full">Mark attendance</Link>
        </div>
      </section>

      {/* Quick actions */}
      <section className="mb-6">
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

      {/* Role chips */}
      <section className="mb-6">
        <SectionTitle title="Switch Role" />
        <div className="flex gap-2 overflow-x-auto -mx-4 px-4 pb-1">
          {["Student", "Teacher", "Parent", "Accounts", "Reception"].map((r, i) => (
            <button key={r} className={`shrink-0 text-sm px-4 py-2 rounded-full border ${i === 0 ? "bg-primary text-primary-foreground border-primary" : "bg-surface border-border text-foreground/70"}`}>
              {r}
            </button>
          ))}
        </div>
      </section>

      {/* All features */}
      <section className="mb-6">
        <SectionTitle title="Explore" />
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

      {/* Today's classes preview */}
      <section className="mb-2">
        <SectionTitle title="Today's Classes" linkTo="/timetable" />
        <div className="space-y-2">
          {[
            { time: "09:00", subject: "Mathematics", teacher: "Ms. Priya", color: "bg-blue-500" },
            { time: "10:30", subject: "Physics", teacher: "Mr. Kumar", color: "bg-violet-500" },
            { time: "12:00", subject: "English Lit.", teacher: "Ms. Anjali", color: "bg-emerald-500" },
          ].map((c) => (
            <div key={c.time} className="flex items-center gap-3 p-3 rounded-2xl bg-surface border border-border">
              <div className={`w-1.5 h-10 rounded-full ${c.color}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{c.subject}</p>
                <p className="text-xs text-muted-foreground">{c.teacher}</p>
              </div>
              <span className="text-xs font-medium text-muted-foreground">{c.time}</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  );
}

function SectionTitle({ title, linkTo }: { title: string; linkTo?: string }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-sm font-semibold">{title}</h3>
      {linkTo && <Link to={linkTo} className="text-xs text-primary">See all</Link>}
    </div>
  );
}
