import type { ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { SideNav } from "./SideNav";
import { Bell } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function AppShell({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <div className="min-h-screen flex w-full bg-background">
      <SideNav />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 bg-background/85 backdrop-blur">
          <div className="flex items-center justify-between px-5 md:px-8 h-16">
            <div className="flex items-center gap-3 min-w-0">
              <div className="md:hidden h-9 w-9 rounded-2xl bg-primary grid place-items-center text-primary-foreground font-bold text-sm">M</div>
              <h1 className="font-semibold text-xl md:text-base truncate">{title ?? "Hello, Arjun!"}</h1>
            </div>
            <div className="flex items-center gap-2">
              <Link to="/notifications" className="h-10 w-10 grid place-items-center rounded-full bg-surface border border-border text-foreground/70 relative">
                <Bell className="h-4.5 w-4.5" />
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive" />
              </Link>
            </div>
          </div>
        </header>
        <main className="flex-1 px-5 md:px-8 py-2 pb-32 md:pb-8 max-w-5xl w-full mx-auto">
          {children}
        </main>
        <BottomNav />
      </div>
    </div>
  );
}
