import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home, BookOpen, ClipboardCheck, Bell, User, GraduationCap,
  Calendar, IdCard, Clock, Building2, Sparkles, BookMarked,
  FileQuestion, Video, Award, Timer, Heart, MessageSquare, LogIn
} from "lucide-react";

const groups = [
  {
    label: "Main",
    items: [
      { to: "/", label: "Home", icon: Home },
      { to: "/academics", label: "Academics", icon: BookOpen },
      { to: "/calendar", label: "Calendar", icon: Calendar },
      { to: "/attendance", label: "Attendance", icon: ClipboardCheck },
      { to: "/timetable", label: "Time Table", icon: Clock },
    ],
  },
  {
    label: "Student Life",
    items: [
      { to: "/profile", label: "Profile", icon: User },
      { to: "/idcard", label: "ID Card", icon: IdCard },
      { to: "/leave", label: "Leave Request", icon: Calendar },
      { to: "/hostel", label: "Hostel", icon: Building2 },
      { to: "/moral", label: "Moral", icon: Heart },
    ],
  },
  {
    label: "Learning",
    items: [
      { to: "/textbook", label: "Textbooks", icon: BookMarked },
      { to: "/pyq", label: "Previous Questions", icon: FileQuestion },
      { to: "/exams", label: "Exams", icon: GraduationCap },
      { to: "/mocktest", label: "Mock Test", icon: Timer },
      { to: "/results", label: "Results", icon: Award },
      { to: "/monttalk", label: "Mont Talk", icon: Video },
      { to: "/ai", label: "AI Features", icon: Sparkles },
    ],
  },
  {
    label: "More",
    items: [
      { to: "/notifications", label: "Notifications", icon: Bell },
      { to: "/feedback", label: "Class Feedback", icon: MessageSquare },
      { to: "/login", label: "Login", icon: LogIn },
    ],
  },
];

export function SideNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <aside className="hidden md:flex flex-col w-64 shrink-0 h-screen sticky top-0 border-r border-border bg-surface">
      <div className="px-5 py-5 flex items-center gap-2 border-b border-border">
        <div className="h-9 w-9 rounded-xl bg-primary grid place-items-center text-primary-foreground font-bold">M</div>
        <div>
          <p className="font-semibold leading-tight">Montessori</p>
          <p className="text-xs text-muted-foreground">School Suite</p>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
        {groups.map((g) => (
          <div key={g.label}>
            <p className="px-3 mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{g.label}</p>
            <ul className="space-y-0.5">
              {g.items.map((it) => {
                const active = pathname === it.to;
                const Icon = it.icon;
                return (
                  <li key={it.to}>
                    <Link
                      to={it.to}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                        active
                          ? "bg-primary-soft text-primary font-medium"
                          : "text-foreground/80 hover:bg-secondary"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {it.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
