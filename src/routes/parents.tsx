import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import {
  Wallet, Users, Bus, MessageSquare, ClipboardCheck,
  Award, Calendar, Bell, ChevronRight,
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
  { to: "/attendance", label: "Attendance", icon: ClipboardCheck, tint: "bg-primary-soft text-primary" },
  { to: "/results", label: "Results", icon: Award, tint: "bg-primary-soft text-primary" },
  { to: "/calendar", label: "Calendar", icon: Calendar, tint: "bg-primary-soft text-primary" },
  { to: "/leave", label: "Leave Request", icon: Calendar, tint: "bg-primary-soft text-primary" },
  { to: "/feedback", label: "Feedback", icon: MessageSquare, tint: "bg-primary-soft text-primary" },
  { to: "/notifications", label: "Notifications", icon: Bell, tint: "bg-primary-soft text-primary" },
];

const parentsList = [
  { name: "Mr. Krishnan K.", meta: "Parent of Arjun K. · Grade 10-A", status: "Fees pending" },
  { name: "Mrs. Lakshmi R.", meta: "Parent of Sneha R. · Grade 10-A", status: "Fees cleared" },
  { name: "Mr. Vinod V.", meta: "Parent of Karthik V. · Grade 9-B", status: "PTM scheduled" },
  { name: "Mrs. Anita S.", meta: "Parent of Meera S. · Grade 9-B", status: "Fees cleared" },
  { name: "Mr. Deepak D.", meta: "Parent of Rohan D. · Grade 8-C", status: "Fees pending" },
  { name: "Mrs. Geetha G.", meta: "Parent of Anjali P. · Grade 8-C", status: "Fees cleared" },
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
        <p className="text-sm text-muted-foreground">Your child</p>
        <p className="text-2xl font-semibold mt-1 text-foreground">Arjun K. · Grade 10-A</p>
        <div className="flex gap-6 mt-4">
          <div>
            <p className="text-xs text-muted-foreground">Attendance</p>
            <p className="text-lg font-bold text-foreground">92%</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">GPA</p>
            <p className="text-lg font-bold text-foreground">3.8</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Pending Fees</p>
            <p className="text-lg font-bold text-foreground">₹12,500</p>
          </div>
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

      {/* All parents list */}
      <section className="mt-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[15px] font-bold">All Parents</h3>
          <span className="text-[11px] text-muted-foreground">{parentsList.length} guardians</span>
        </div>
        <div className="space-y-2">
          {parentsList.map((p) => (
            <div key={p.name} className="flex items-center gap-3 p-3 rounded-2xl bg-surface border border-border">
              <div className="h-9 w-9 rounded-full bg-primary-soft text-primary grid place-items-center text-xs font-semibold shrink-0">
                {p.name[0]}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium truncate">{p.name}</p>
                <p className="text-xs text-muted-foreground truncate">{p.meta}</p>
              </div>
              <span className="text-[10px] font-semibold text-primary bg-primary/10 rounded-full px-2.5 py-1 shrink-0">
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
