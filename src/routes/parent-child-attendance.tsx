import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { format, isToday } from "date-fns";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { User, CalendarDays, CheckCircle2, XCircle } from "lucide-react";

export const Route = createFileRoute("/parent-child-attendance")({
  head: () => ({
    meta: [
      { title: "Child Attendance" },
      { name: "description", content: "View your child's attendance for any date." },
    ],
  }),
  component: ParentChildAttendancePage,
});

function attendanceForDate(date: Date) {
  const seed = date.getFullYear() * 372 + date.getMonth() * 31 + date.getDate();
  const present = seed % 6 !== 0;
  return {
    present,
    checkIn: present ? "8:02 AM" : "—",
    checkOut: present ? "3:18 PM" : "—",
  };
}

function ParentChildAttendancePage() {
  const [selected, setSelected] = useState<Date>(new Date());
  const [pickerOpen, setPickerOpen] = useState(false);

  const record = useMemo(() => attendanceForDate(selected), [selected]);

  return (
    <AppShell title="Child Attendance" subtitle="Arjun K. · Grade 10-A">
      <PageHeader title="Attendance" subtitle="Pick a date to view your child's record" />

      {/* Date selector */}
      <Popover open={pickerOpen} onOpenChange={setPickerOpen}>
        <PopoverTrigger asChild>
          <button className="w-full flex items-center justify-between gap-3 rounded-2xl border border-border bg-card px-4 h-14 shadow-sm text-left mb-5">
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

      {/* Selected date record */}
      <div className="p-5 rounded-3xl bg-primary-soft mb-5 flex items-center gap-4">
        <div className="h-14 w-14 rounded-2xl bg-primary/15 text-primary grid place-items-center shrink-0">
          <User className="h-7 w-7" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{isToday(selected) ? "Today" : format(selected, "EEEE")}</p>
          <p className="text-xl font-semibold text-foreground">{format(selected, "d MMMM yyyy")}</p>
          {record.present ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 mt-1">
              <CheckCircle2 className="h-4 w-4" /> Present
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-500 mt-1">
              <XCircle className="h-4 w-4" /> Absent
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <div className="bg-card border border-border rounded-2xl p-3.5">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Check-in</p>
          <p className="text-lg font-bold text-foreground">{record.checkIn}</p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-3.5">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Check-out</p>
          <p className="text-lg font-bold text-foreground">{record.checkOut}</p>
        </div>
      </div>
    </AppShell>
  );
}
