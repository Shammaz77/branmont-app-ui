import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { Book, CheckCircle2, XCircle } from "lucide-react";

export const Route = createFileRoute("/quran")({
  head: () => ({
    meta: [
      { title: "Quran" },
      { name: "description", content: "Track your daily Quran recitation progress." },
    ],
  }),
  component: QuranPage,
});

const surahs = [
  { name: "Surah Al-Mulk", meta: "Chapter 67 · 30 verses", read: true },
  { name: "Surah Al-Waqiah", meta: "Chapter 56 · 96 verses", read: true },
  { name: "Surah Yaseen", meta: "Chapter 36 · 83 verses", read: false },
  { name: "Surah Al-Kahf", meta: "Chapter 18 · 110 verses", read: false },
];

function QuranPage() {
  const completedCount = surahs.filter((s) => s.read).length;

  return (
    <AppShell title="Quran" subtitle="Daily recitation tracker">
      <PageHeader title="Quran" subtitle="Mark your daily Surah recitation" />

      <div className="p-5 rounded-3xl bg-primary-soft mb-5 flex items-center gap-4">
        <div className="h-14 w-14 rounded-2xl bg-primary/15 text-primary grid place-items-center shrink-0">
          <Book className="h-7 w-7" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Today's progress</p>
          <p className="text-xl font-semibold text-foreground">{completedCount} of {surahs.length} Surahs read</p>
        </div>
      </div>

      <div className="space-y-2">
        {surahs.map((s) => (
          <div
            key={s.name}
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-surface border border-border"
          >
            <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center shrink-0">
              <Book className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-foreground truncate">{s.name}</p>
              <p className="text-xs text-muted-foreground truncate">{s.meta}</p>
            </div>
            {s.read ? (
              <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 shrink-0">
                <CheckCircle2 className="h-4 w-4" /> Read
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-xs font-semibold text-rose-500 shrink-0">
                <XCircle className="h-4 w-4" /> Pending
              </span>
            )}
          </div>
        ))}
      </div>
    </AppShell>
  );
}
