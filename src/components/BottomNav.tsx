import { Link, useRouterState } from "@tanstack/react-router";
import { Home, BookOpen, ClipboardCheck, Bell, User } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/academics", label: "Academics", icon: BookOpen },
  { to: "/exams", label: "Exams", icon: ClipboardCheck },
  { to: "/notifications", label: "Alerts", icon: Bell },
  { to: "/profile", label: "Profile", icon: User },
];

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 md:hidden">
      <div className="mx-auto max-w-md px-3 pb-3">
        <div className="rounded-3xl bg-surface border border-border shadow-[0_10px_30px_-12px_rgba(60,60,120,0.18)] backdrop-blur">
          <ul className="grid grid-cols-5 px-2 py-2">
            {items.map((it) => {
              const active = pathname === it.to;
              const Icon = it.icon;
              return (
                <li key={it.to} className="flex justify-center">
                  <Link
                    to={it.to}
                    className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-all ${
                      active
                        ? "text-primary bg-primary-soft"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={active ? 2.4 : 1.8} />
                    <span className="text-[10px] font-medium">{it.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
