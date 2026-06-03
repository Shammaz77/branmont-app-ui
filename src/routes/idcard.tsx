import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/idcard")({
  head: () => ({ meta: [{ title: "ID Card" }] }),
  component: () => (
    <AppShell title="ID Card">
      <div className="mx-auto max-w-sm">
        <div className="rounded-3xl overflow-hidden shadow-xl border border-border">
          <div className="bg-gradient-to-br from-primary to-[oklch(0.5_0.2_290)] text-primary-foreground p-5 flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/15 grid place-items-center font-bold">M</div>
            <div>
              <p className="text-sm font-semibold leading-none">Montessori School</p>
              <p className="text-[11px] opacity-80 mt-1">Student Identity Card</p>
            </div>
          </div>
          <div className="bg-surface p-5 flex gap-4">
            <div className="h-24 w-20 rounded-xl bg-gradient-to-br from-primary to-accent grid place-items-center text-primary-foreground text-2xl font-bold">AR</div>
            <div className="flex-1 text-sm space-y-1.5">
              <div><p className="text-[10px] text-muted-foreground uppercase">Name</p><p className="font-medium">Arjun Reddy</p></div>
              <div><p className="text-[10px] text-muted-foreground uppercase">Class</p><p className="font-medium">10 - B</p></div>
              <div><p className="text-[10px] text-muted-foreground uppercase">ID</p><p className="font-medium">STU20240234</p></div>
            </div>
          </div>
          <div className="bg-surface-2 p-3 text-center text-[10px] text-muted-foreground border-t border-border">Valid for Academic Year 2025–26</div>
        </div>
      </div>
    </AppShell>
  ),
});
