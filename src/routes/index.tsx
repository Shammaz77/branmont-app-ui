import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import {
  Search, SlidersHorizontal, Star, Heart,
  ChevronLeft, ChevronRight, Calendar, CheckCircle2,
  Play, ClipboardCheck, Clock, GraduationCap,
  Award, BookOpen, IdCard, Building2, Sparkles, BookMarked,
  FileQuestion, Video, Timer, MessageSquare,
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
  { label: "Attendance", value: "92%", sub: "this week" },
  { label: "GPA", value: "3.8", sub: "Top 15%" },
  { label: "Exams", value: "3", sub: "this month" },
];

const scheduleStatus = [
  { count: 3, label: "Live", dot: "bg-emerald-500" },
  { count: 4, label: "Upcoming", dot: "bg-primary" },
  { count: 2, label: "Done", dot: "bg-gray-400" },
];

const featuredClasses = [
  {
    rating: "4.2",
    subject: "Mathematics",
    teacher: "Mrs. Johnson",
    room: "Room 201",
    badges: ["Homework Due", "Quiz Today"],
  },
  {
    rating: "4.7",
    subject: "Physics",
    teacher: "Mr. Singh",
    room: "Lab 3",
    badges: ["Lab Report Due"],
  },
];

const scheduleItems = [
  {
    date: "Jun 5, 10:00AM",
    subject: "Physics · Mr. Singh",
    status: "32 Students",
    statusCls: "bg-blue-50 text-blue-600",
  },
  {
    date: "Jun 7, 10:00AM",
    subject: "English Lit · Ms. Rivera",
    status: "Upcoming",
    statusCls: "bg-amber-50 text-amber-600",
  },
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
  { to: "/moral", label: "Moral", icon: Heart, tint: "bg-primary-soft text-primary" },
  { to: "/feedback", label: "Feedback", icon: MessageSquare, tint: "bg-primary-soft text-primary" },
];

function Index() {
  const [tab, setTab] = useState<"current" | "previous">("current");
  const [cardIdx, setCardIdx] = useState(0);
  const card = featuredClasses[cardIdx];
  const total = featuredClasses.length;

  return (
    <AppShell subtitle="Welcome back!">

      {/* Welcome — no background, clean text + stat cards */}
      <div className="mb-5">
        <p className="text-xs text-muted-foreground mb-0.5">Thursday, June 5, 2026</p>
        <h2 className="text-xl font-black text-foreground mb-4">Good Morning, Arjun!</h2>
        <div className="grid grid-cols-3 gap-2.5">
          {stats.map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-2xl p-3 shadow-sm">
              <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider mb-1.5">
                {s.label}
              </p>
              <p className="text-lg font-black text-foreground leading-none">{s.value}</p>
              <p className="text-[9px] text-primary font-semibold mt-1.5">{s.sub}</p>
            </div>
          ))}
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

      {/* Next Schedule */}
      <section className="mb-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[15px] font-bold">Next Schedule</h3>
          <button className="flex items-center gap-0.5 text-xs font-semibold text-primary">
            See all <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Date + status row */}
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <div className="flex items-center gap-1.5 bg-muted px-3 py-1.5 rounded-full">
            <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-[11px] font-semibold text-foreground/70">Jun 5, 10:00 AM</span>
          </div>
          <div className="flex items-center gap-3">
            {scheduleStatus.map((s) => (
              <div key={s.label} className="flex items-center gap-1.5">
                <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                <span className="text-[11px] text-muted-foreground font-medium">{s.count} {s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tab switcher — white bg, no tinted background */}
        <div className="border border-border p-1 rounded-2xl flex gap-1 mb-4 bg-card">
          {(["current", "previous"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                tab === t
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              {t === "current" ? "Current" : "Previous"}
            </button>
          ))}
        </div>

        {/* Featured class card — clean white, no gradient background */}
        <div className="relative rounded-3xl bg-card border border-border shadow-sm mb-3 p-5 overflow-hidden">
          {/* Thin gold accent top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#D19C2A]" />

          {/* Rating + heart */}
          <div className="flex items-center justify-between mb-4 mt-1">
            <div className="flex items-center gap-1.5 bg-primary/10 px-3 py-1 rounded-full">
              <Star className="h-3 w-3 fill-primary text-primary" />
              <span className="text-xs font-bold text-primary">{card.rating}</span>
            </div>
            <button className="h-8 w-8 rounded-full bg-muted grid place-items-center">
              <Heart className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>

          <h2 className="text-2xl font-black text-foreground leading-tight mb-1">{card.subject}</h2>
          <p className="text-sm text-muted-foreground mb-4">{card.room} · {card.teacher}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {card.badges.map((b) => (
              <div key={b} className="flex items-center gap-1.5 bg-primary/10 rounded-full px-3 py-1.5">
                <CheckCircle2 className="h-3 w-3 text-primary" />
                <span className="text-[11px] font-semibold text-primary">{b}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <button className="flex items-center gap-2 bg-primary rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-primary/25">
              <Play className="h-3.5 w-3.5 fill-white" />
              Join Now
            </button>
            <div className="flex gap-2">
              <button
                onClick={() => setCardIdx((i) => (i - 1 + total) % total)}
                className="h-9 w-9 rounded-full bg-muted grid place-items-center active:scale-90 transition-transform"
              >
                <ChevronLeft className="h-4 w-4 text-foreground/60" />
              </button>
              <button
                onClick={() => setCardIdx((i) => (i + 1) % total)}
                className="h-9 w-9 rounded-full bg-primary/10 grid place-items-center active:scale-90 transition-transform"
              >
                <ChevronRight className="h-4 w-4 text-primary" />
              </button>
            </div>
          </div>
        </div>

        {/* Schedule list */}
        <div className="space-y-2.5">
          {scheduleItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl bg-card border border-border shadow-sm">
              <div className="h-10 w-10 rounded-full bg-primary/10 grid place-items-center shrink-0">
                <Calendar className="h-[18px] w-[18px] text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-foreground">{item.date}</p>
                <p className="text-[11px] text-muted-foreground truncate mt-0.5">{item.subject}</p>
              </div>
              <span className={`text-[11px] font-bold px-3 py-1.5 rounded-full shrink-0 ${item.statusCls}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </section>

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
      <section className="mb-2">
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

    </AppShell>
  );
}
