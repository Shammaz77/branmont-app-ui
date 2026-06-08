import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import {
  Mail, Phone, MapPin, GraduationCap, LogOut,
  ChevronRight, IdCard, BarChart2, CalendarDays, Camera,
  BookOpen, Bell,
} from "lucide-react";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile" }] }),
  component: Profile,
});

const profileStats = [
  { label: "Attendance", value: "84%", sub: "This term" },
  { label: "GPA", value: "8.9", sub: "Top 10%" },
  { label: "Rank", value: "#4", sub: "In class" },
];

const contactRows = [
  { icon: Mail, label: "arjun.r@montessori.edu", hint: "School email" },
  { icon: Phone, label: "+91 98765 43210", hint: "Mobile" },
  { icon: MapPin, label: "Jubilee Hills, Hyderabad", hint: "Address" },
  { icon: GraduationCap, label: "STU20240234", hint: "Admission ID" },
];

const quickLinks = [
  { icon: IdCard, label: "My ID Card", sub: "View digital ID", to: "/idcard" },
  { icon: BarChart2, label: "Academic Report", sub: "Grades & results", to: "/results" },
  { icon: CalendarDays, label: "Leave Requests", sub: "Apply & track", to: "/leave" },
  { icon: BookOpen, label: "Academics", sub: "Subjects & syllabus", to: "/academics" },
  { icon: Bell, label: "Notifications", sub: "Alerts & updates", to: "/notifications" },
];

function Profile() {
  return (
    <AppShell title="Profile">

      {/* Avatar hero */}
      <div className="relative mb-6">
        {/* Gold accent bar */}
        <div className="h-24 rounded-3xl bg-gradient-to-r from-[#D19C2A]/15 via-[#D19C2A]/8 to-transparent border border-[#D19C2A]/20" />

        {/* Avatar overlapping */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
          <div className="relative">
            <div className="h-20 w-20 rounded-2xl overflow-hidden shadow-lg shadow-[#D19C2A]/35 ring-4 ring-background">
              <img
                src="https://www.shutterstock.com/image-photo/attractive-young-asian-female-college-600nw-2557619503.jpg"
                alt="Arjun Reddy"
                className="h-full w-full object-cover"
              />
            </div>
            <button className="absolute -bottom-2 -right-2 h-7 w-7 rounded-full bg-primary grid place-items-center shadow-md">
              <Camera className="h-3.5 w-3.5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Name + details */}
      <div className="text-center mb-5 mt-10">
        <h2 className="text-xl font-black text-foreground">Arjun Reddy</h2>
        <p className="text-[13px] text-muted-foreground mt-0.5">Class 10 — Section B</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="text-[10px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
            Roll No 23
          </span>
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            Active
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2.5 mb-6">
        {profileStats.map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-2xl p-3 text-center shadow-sm">
            <p className="text-xl font-black text-foreground leading-none">{s.value}</p>
            <p className="text-[9px] text-muted-foreground font-medium mt-1.5 uppercase tracking-wide">{s.label}</p>
            <p className="text-[9px] text-primary font-semibold mt-0.5">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Contact info */}
      <div className="mb-4">
        <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2.5 px-0.5">
          Contact Info
        </p>
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
          {contactRows.map((row, i) => {
            const Icon = row.icon;
            return (
              <div
                key={i}
                className={`flex items-center gap-3.5 px-4 py-3.5 ${
                  i < contactRows.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="h-9 w-9 rounded-xl bg-primary/10 grid place-items-center shrink-0">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground font-medium">{row.hint}</p>
                  <p className="text-sm font-semibold text-foreground truncate">{row.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick links */}
      <div className="mb-6">
        <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2.5 px-0.5">
          Quick Links
        </p>
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
          {quickLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3.5 px-4 py-3.5 active:bg-muted transition-colors ${
                  i < quickLinks.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="h-9 w-9 rounded-xl bg-primary/10 grid place-items-center shrink-0">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-[11px] text-muted-foreground">{item.sub}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Sign out */}
      <Link
        to="/login"
        className="flex items-center justify-center gap-2 w-full h-12 rounded-2xl border border-destructive/25 text-destructive font-semibold text-sm active:bg-destructive/5 transition-colors"
      >
        <LogOut className="h-4 w-4" />
        Sign out
      </Link>

    </AppShell>
  );
}
