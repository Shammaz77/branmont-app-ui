import { Link, useRouterState } from "@tanstack/react-router";
import { Home, BookOpen, ClipboardCheck, GraduationCap, User } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/academics", label: "Courses", icon: BookOpen },
  { to: "/attendance", label: "Attend", icon: ClipboardCheck },
  { to: "/exams", label: "Exams", icon: GraduationCap },
  { to: "/profile", label: "Profile", icon: User },
];

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 md:hidden">
      <div className="bg-surface/95 backdrop-blur-xl border-t border-border/50 px-2 pt-2 pb-3">
        <ul className="flex items-center justify-around">
          {items.map((it) => {
            const active = pathname === it.to;
            const Icon = it.icon;
            return (
              <li key={it.to} className="flex-1">
                <Link to={it.to} className="flex flex-col items-center gap-1">
                  <span
                    className={`h-9 w-9 rounded-xl grid place-items-center transition-all duration-200 ${
                      active
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                        : "text-muted-foreground"
                    }`}
                  >
                    <Icon className="h-[18px] w-[18px]" strokeWidth={active ? 2.5 : 1.8} />
                  </span>
                  <span
                    className={`text-[10px] font-medium leading-none transition-colors ${
                      active ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {it.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
