import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Users, Baby, Wallet, Headset } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — Montessori" }] }),
  component: LoginPage,
});

const roles = [
  { id: "student", label: "Student", icon: Baby },
  { id: "teacher", label: "Teacher", icon: GraduationCap },
  { id: "parent", label: "Parent", icon: Users },
  { id: "accounts", label: "Accounts", icon: Wallet },
  { id: "reception", label: "Reception (CRM)", icon: Headset },
];

function LoginPage() {
  const [role, setRole] = useState("student");
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="relative pt-12 pb-10 px-6 bg-gradient-to-br from-primary to-[oklch(0.5_0.2_290)] text-primary-foreground rounded-b-[2.5rem]">
        <div className="h-12 w-12 rounded-2xl bg-white/15 grid place-items-center font-bold text-xl mb-4">M</div>
        <h1 className="text-2xl font-semibold">Welcome back</h1>
        <p className="text-sm opacity-85 mt-1">Sign in to continue to your school portal.</p>
      </div>

      <div className="flex-1 px-6 -mt-6">
        <div className="bg-surface rounded-3xl shadow-[0_10px_40px_-15px_rgba(60,60,120,0.15)] p-5 border border-border">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Login as</p>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {roles.map((r) => {
              const Icon = r.icon;
              const active = role === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => setRole(r.id)}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl border text-[11px] font-medium transition ${
                    active
                      ? "border-primary bg-primary-soft text-primary"
                      : "border-border bg-surface text-foreground/70"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {r.label}
                </button>
              );
            })}
          </div>

          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <Field label="User ID" placeholder="e.g. STU2025001" />
            <Field label="Password" type="password" placeholder="••••••••" />
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-muted-foreground">
                <input type="checkbox" className="rounded border-border" /> Remember me
              </label>
              <a className="text-primary font-medium">Forgot?</a>
            </div>
            <Link
              to="/"
              className="w-full inline-flex justify-center items-center h-11 rounded-2xl bg-primary text-primary-foreground font-medium hover:opacity-95 transition"
            >
              Sign In
            </Link>
          </form>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6">
          Need help? Contact <a className="text-primary font-medium">school admin</a>
        </p>
      </div>
    </div>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-foreground/70">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full h-11 px-4 rounded-2xl bg-surface-2 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm"
      />
    </label>
  );
}
