import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import {
  Wallet, Users, Bus, MessageSquare, ClipboardCheck,
  Award, Calendar, Bell, ChevronRight, User, CalendarDays,
} from "lucide-react";

export const Route = createFileRoute("/parents")({
  head: () => ({
    meta: [
      { title: "Parent Portal" },
      { name: "description", content: "Everything parents need to stay connected with their child's school journey." },
    ],
  }),
  component: ParentsPage,
});

const quickLinks = [
  { to: "/parent-child-attendance", label: "Attendance", icon: ClipboardCheck, tint: "bg-primary-soft text-primary" },
  { to: "/parent-child-results", label: "Results", icon: Award, tint: "bg-primary-soft text-primary" },
  { to: "/calendar", label: "Calendar", icon: Calendar, tint: "bg-primary-soft text-primary" },
  { to: "/parent-child-leave", label: "Leave Request", icon: CalendarDays, tint: "bg-primary-soft text-primary" },
  { to: "/feedback", label: "Feedback", icon: MessageSquare, tint: "bg-primary-soft text-primary" },
  { to: "/notifications", label: "Notifications", icon: Bell, tint: "bg-primary-soft text-primary" },
];

const services = [
  {
    icon: Wallet,
    title: "Fee Payments",
    desc: "View dues, payment history and pay fees online",
    badge: "₹12,500 due",
  },
  {
    icon: Users,
    title: "Parent-Teacher Meetings",
    desc: "Book a slot and meet your child's teachers",
    badge: "1 upcoming",
  },
  {
    icon: Bus,
    title: "Transport Tracking",
    desc: "Track the school bus in real time",
    badge: "On route",
  },
  {
    icon: MessageSquare,
    title: "Message Teachers",
    desc: "Chat directly with subject teachers and class mentors",
    badge: "2 unread",
  },
];

function ParentsPage() {
  return (
    <AppShell title="Parent Portal" subtitle="Stay connected with your child's journey">
      <PageHeader title="Welcome, Parent!" subtitle="Track progress, stay informed, and connect with school" />

      {/* Hero summary card */}
      <div className="p-5 rounded-3xl bg-primary-soft mb-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 rounded-2xl bg-primary/15 text-primary grid place-items-center shrink-0">
            <User className="h-6 w-6" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Your child</p>
            <p className="text-lg font-semibold text-foreground truncate">Arjun K. · Grade 10-A</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { label: "Attendance", value: "92%", icon: ClipboardCheck },
            { label: "Pending Fees", value: "₹12,500", icon: Wallet },
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

      {/* Parent services list */}
      <section>
        <h3 className="text-[15px] font-bold mb-3">Parent Services</h3>
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
