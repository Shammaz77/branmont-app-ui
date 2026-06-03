import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { Heart, Quote } from "lucide-react";

export const Route = createFileRoute("/moral")({
  head: () => ({ meta: [{ title: "Moral" }] }),
  component: () => (
    <AppShell title="Moral">
      <div className="p-5 rounded-3xl bg-gradient-to-br from-pink-400 to-rose-500 text-white mb-5">
        <Heart className="h-7 w-7 mb-2" />
        <p className="text-xs opacity-85">Today's value</p>
        <p className="text-2xl font-semibold mt-1">Kindness</p>
        <p className="text-sm opacity-90 mt-2">"No act of kindness, however small, is ever wasted." — Aesop</p>
      </div>
      <PageHeader title="Weekly Stories" />
      <div className="space-y-2">
        {["The Thirsty Crow — Wisdom", "Tortoise & Hare — Perseverance", "The Honest Woodcutter — Honesty"].map((s) => (
          <div key={s} className="flex items-start gap-3 p-3 rounded-2xl bg-surface border border-border">
            <div className="h-9 w-9 rounded-xl bg-pink-50 text-pink-600 grid place-items-center"><Quote className="h-4 w-4" /></div>
            <p className="text-sm font-medium flex-1">{s}</p>
          </div>
        ))}
      </div>
    </AppShell>
  ),
});
