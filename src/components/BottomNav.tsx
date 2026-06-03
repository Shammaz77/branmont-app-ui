import { Link, useRouterState } from "@tanstack/react-router";
import { Home, BookOpen, ClipboardCheck, User } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/academics", label: "Courses", icon: BookOpen },
  { to: "/exams", label: "Tests", icon: ClipboardCheck },
];

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 md:hidden">
      <div className="mx-auto max-w-md px-4 pb-4 flex items-center gap-3">
        <div className="flex-1 rounded-full bg-surface border border-border shadow-[0_10px_30px_-12px_rgba(60,40,120,0.18)] py-2.5 px-2">
          <ul className="grid grid-cols-3">
            {items.map((it) => {
              const active = pathname === it.to;
              const Icon = it.icon;
              return (
                <li key={it.to} className="flex justify-center">
                  <Link
                    to={it.to}
                    className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-full transition-all ${
                      active ? "text-primary" : "text-muted-foreground"
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
        <Link
          to="/profile"
          className={`h-14 w-14 shrink-0 rounded-full bg-surface border border-border grid place-items-center shadow-[0_10px_30px_-12px_rgba(60,40,120,0.18)] ${
            pathname === "/profile" ? "text-primary" : "text-muted-foreground"
          }`}
          aria-label="Profile"
        >
          <User className="h-5 w-5" />
        </Link>
      </div>
    </nav>
  );
}
