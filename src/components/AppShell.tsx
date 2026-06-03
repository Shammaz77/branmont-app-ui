import type { ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { SideNav } from "./SideNav";
import { Bell, Search } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function AppShell({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <div className="min-h-screen flex w-full bg-background">
      <SideNav />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 bg-background/85 backdrop-blur border-b border-border">
          <div className="flex items-center justify-between px-4 md:px-8 h-14">
            <div className="flex items-center gap-3">
              <div className="md:hidden h-8 w-8 rounded-xl bg-primary grid place-items-center text-primary-foreground font-bold text-sm">M</div>
              <h1 className="font-semibold text-[15px] md:text-base">{title ?? "Dashboard"}</h1>
            </div>
            <div className="flex items-center gap-2">
              <button className="h-9 w-9 grid place-items-center rounded-full hover:bg-secondary text-muted-foreground">
                <Search className="h-4.5 w-4.5" />
              </button>
              <Link to="/notifications" className="h-9 w-9 grid place-items-center rounded-full hover:bg-secondary text-muted-foreground relative">
                <Bell className="h-4.5 w-4.5" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive" />
              </Link>
              <Link to="/profile" className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground grid place-items-center text-xs font-semibold">
                AR
              </Link>
            </div>
          </div>
        </header>
        <main className="flex-1 px-4 md:px-8 py-4 pb-28 md:pb-8 max-w-5xl w-full mx-auto">
          {children}
        </main>
        <BottomNav />
      </div>
    </div>
  );
}
