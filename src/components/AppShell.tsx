import type { ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { SideNav } from "./SideNav";
import { Bell } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function AppShell({ children, title, subtitle }: { children: ReactNode; title?: string; subtitle?: string }) {
  return (
    <div className="min-h-screen flex w-full bg-background">
      <SideNav />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 bg-background/90 backdrop-blur-xl border-b border-border/40">
          <div className="flex items-center justify-between px-5 md:px-8 h-16">
            <div className="flex items-center gap-3 min-w-0">
              <Link
                to="/profile"
                className="md:hidden h-9 w-9 rounded-2xl overflow-hidden shrink-0 shadow-sm shadow-primary/20 ring-2 ring-primary/25"
              >
                <img
                  src="https://www.shutterstock.com/image-photo/attractive-young-asian-female-college-600nw-2557619503.jpg"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </Link>
              <div className="min-w-0">
                <h1 className="font-semibold text-[17px] md:text-base truncate leading-tight">
                  {title ?? "Hello, Arjun!"}
                </h1>
                {subtitle && (
                  <p className="text-xs text-muted-foreground leading-none mt-0.5">{subtitle}</p>
                )}
              </div>
            </div>
            <Link
              to="/notifications"
              className="h-10 w-10 grid place-items-center rounded-2xl bg-surface border border-border text-foreground/70 relative"
            >
              <Bell className="h-[18px] w-[18px]" />
              <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-destructive ring-2 ring-background" />
            </Link>
          </div>
        </header>
        <main className="flex-1 px-5 md:px-8 py-4 pb-24 md:pb-8 max-w-5xl w-full mx-auto">
          {children}
        </main>
        <BottomNav />
      </div>
    </div>
  );
}
