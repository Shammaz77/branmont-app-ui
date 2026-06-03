import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { Mail, Phone, MapPin, GraduationCap, LogOut } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile" }] }),
  component: () => (
    <AppShell title="Profile">
      <div className="flex flex-col items-center text-center mb-6">
        <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-primary to-accent grid place-items-center text-primary-foreground text-3xl font-bold shadow-lg">AR</div>
        <h2 className="mt-3 text-lg font-semibold">Arjun Reddy</h2>
        <p className="text-sm text-muted-foreground">Class 10 — Section B • Roll No 23</p>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-5">
        <MiniStat label="Attendance" value="84%" />
        <MiniStat label="GPA" value="8.9" />
        <MiniStat label="Rank" value="#4" />
      </div>
      <div className="p-4 rounded-2xl bg-surface border border-border space-y-3 mb-4">
        <Row icon={Mail} label="arjun.r@montessori.edu" />
        <Row icon={Phone} label="+91 98765 43210" />
        <Row icon={MapPin} label="Jubilee Hills, Hyderabad" />
        <Row icon={GraduationCap} label="Admission ID • STU20240234" />
      </div>
      <Link to="/login" className="flex items-center justify-center gap-2 w-full h-11 rounded-2xl bg-destructive/10 text-destructive font-medium text-sm">
        <LogOut className="h-4 w-4" /> Sign out
      </Link>
    </AppShell>
  ),
});

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-3 rounded-2xl bg-surface border border-border text-center">
      <p className="text-lg font-semibold">{value}</p>
      <p className="text-[11px] text-muted-foreground">{label}</p>
    </div>
  );
}
function Row({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="h-8 w-8 rounded-lg bg-primary-soft text-primary grid place-items-center">
        <Icon className="h-4 w-4" />
      </div>
      {label}
    </div>
  );
}
