import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { format, isToday } from "date-fns";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CheckCircle2, XCircle, HandHeart, CalendarDays } from "lucide-react";

export const Route = createFileRoute("/prayer-attendance")({
  head: () => ({
    meta: [
      { title: "Prayer Attendance" },
      { name: "description", content: "Track daily prayer attendance on a calendar." },
    ],
  }),
  component: PrayerAttendancePage,
});

const prayerNames = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

function attendanceForDate(date: Date) {
  const seed = date.getFullYear() * 372 + date.getMonth() * 31 + date.getDate();
  return prayerNames.map((name, i) => ({
    name,
    attended: (seed + i * 7) % 5 !== 0,
  }));
}

function PrayerAttendancePage() {
  const [selected, setSelected] = useState<Date>(new Date());
  const [pickerOpen, setPickerOpen] = useState(false);

  const dayDetails = useMemo(() => attendanceForDate(selected), [selected]);
  const attendedCount = dayDetails.filter((p) => p.attended).length;

  return (
    <AppShell title="Prayer Attendance" subtitle="Tap a date to view its record">
      {/* Selected date card */}
      <div className="p-5 rounded-3xl bg-primary-soft mb-5 flex items-center gap-4">
        <div className="h-14 w-14 rounded-2xl bg-primary/15 text-primary grid place-items-center shrink-0">
          <HandHeart className="h-7 w-7" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{isToday(selected) ? "Today" : format(selected, "EEEE")}</p>
          <p className="text-xl font-semibold text-foreground">{format(selected, "d MMMM yyyy")}</p>
          <p className="text-xs text-muted-foreground mt-1">{attendedCount} of {prayerNames.length} prayers attended</p>
        </div>
      </div>

      {/* Prayer list for selected date */}
      <div className="space-y-2 mb-6">
        {dayDetails.map((p) => (
          <div
            key={p.name}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-surface border border-border"
          >
            <span className="text-sm font-medium">{p.name}</span>
            {p.attended ? (
              <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                <CheckCircle2 className="h-4 w-4" /> Attended
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-xs font-semibold text-rose-500">
                <XCircle className="h-4 w-4" /> Missed
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Date selector */}
      <PageHeader title="Pick a date" subtitle="Select any date to view its prayer record above" />
      <Popover open={pickerOpen} onOpenChange={setPickerOpen}>
        <PopoverTrigger asChild>
          <button className="w-full flex items-center justify-between gap-3 rounded-2xl border border-border bg-card px-4 h-14 shadow-sm text-left">
            <span>
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                Date
              </span>
              <span className="block text-sm font-medium text-foreground">
                {format(selected, "MM/dd/yyyy")}
              </span>
            </span>
            <span className="h-9 w-9 rounded-xl bg-primary-soft text-primary grid place-items-center shrink-0">
              <CalendarDays className="h-4 w-4" />
            </span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-2" align="start">
          <Calendar
            mode="single"
            selected={selected}
            onSelect={(date) => {
              if (date) {
                setSelected(date);
                setPickerOpen(false);
              }
            }}
            className="rounded-2xl"
          />
        </PopoverContent>
      </Popover>
    </AppShell>
  );
}
