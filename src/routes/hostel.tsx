import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { Building2, Bed, Users } from "lucide-react";

export const Route = createFileRoute("/hostel")({
  head: () => ({ meta: [{ title: "Hostel" }] }),
  component: () => (
    <AppShell title="Hostel">
      <PageHeader title="Hostel Room" subtitle="Your accommodation details" />
      <div className="p-5 rounded-3xl bg-primary-soft mb-4">
        <Building2 className="h-7 w-7 mb-2 text-primary" />
        <p className="text-sm text-muted-foreground">Block A • Floor 2</p>
        <p className="text-3xl font-semibold mt-1 text-foreground">Room 204</p>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="p-4 rounded-2xl bg-surface border border-border">
          <Bed className="h-5 w-5 text-primary mb-2" />
          <p className="text-xs text-muted-foreground">Bed</p>
          <p className="text-sm font-medium">B2 — Window side</p>
        </div>
        <div className="p-4 rounded-2xl bg-surface border border-border">
          <Users className="h-5 w-5 text-primary mb-2" />
          <p className="text-xs text-muted-foreground">Occupancy</p>
          <p className="text-sm font-medium">Triple sharing</p>
        </div>
      </div>
      <PageHeader title="Roommates" />
      <div className="space-y-2">
        {["Karthik V.", "Rohan S."].map((n) => (
          <div key={n} className="flex items-center gap-3 p-3 rounded-2xl bg-surface border border-border">
            <div className="h-9 w-9 rounded-full bg-primary-soft text-primary grid place-items-center text-xs font-semibold">{n[0]}</div>
            <p className="text-sm font-medium">{n}</p>
          </div>
        ))}
      </div>
    </AppShell>
  ),
});
