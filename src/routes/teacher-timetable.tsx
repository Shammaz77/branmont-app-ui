import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { format, isToday } from "date-fns";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Clock, Coffee, CalendarDays } from "lucide-react";

export const Route = createFileRoute("/teacher-timetable")({
  head: () => ({
    meta: [
      { title: "Teacher Time Table" },
      { name: "description", content: "View your daily periods, free slots and class schedule." },
    ],
  }),
  component: TeacherTimetablePage,
});

const baseSlots = [
  { period: "Period 1", time: "8:00 – 8:45 AM", subject: "Mathematics", className: "Grade 10-A" },
  { period: "Period 2", time: "8:50 – 9:35 AM", subject: "Mathematics", className: "Grade 10-B" },
  { period: "Period 3", time: "9:40 – 10:25 AM", subject: "Mathematics", className: "Grade 9-A" },
  { period: "Period 4", time: "10:40 – 11:25 AM", subject: "Mathematics", className: "Grade 9-B" },
  { period: "Period 5", time: "11:30 – 12:15 PM", subject: "Mathematics", className: "Grade 11-A" },
  { period: "Period 6", time: "1:00 – 1:45 PM", subject: "Mathematics", className: "Grade 11-B" },
  { period: "Period 7", time: "1:50 – 2:35 PM", subject: "Mathematics", className: "Grade 8-A" },
  { period: "Period 8", time: "2:40 – 3:25 PM", subject: "Mathematics", className: "Grade 8-B" },
];

function scheduleForDate(date: Date) {
  const seed = date.getFullYear() * 372 + date.getMonth() * 31 + date.getDate();
  return baseSlots.map((slot, i) => ({
    ...slot,
    free: (seed + i * 5) % 4 === 0,
  }));
}

function TeacherTimetablePage() {
  const [selected, setSelected] = useState<Date>(new Date());
  const [pickerOpen, setPickerOpen] = useState(false);

  const periods = useMemo(() => scheduleForDate(selected), [selected]);
  const classCount = periods.filter((p) => !p.free).length;
  const freeCount = periods.filter((p) => p.free).length;

  return (
    <AppShell title="Time Table" subtitle="Your daily period schedule">
      <PageHeader
        title={isToday(selected) ? "Today's Schedule" : format(selected, "EEEE, d MMMM")}
        subtitle={`${classCount} classes · ${freeCount} free periods`}
      />

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

      <div className="space-y-2.5">
        {periods.map((p) => (
          <div
            key={p.period}
            className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl bg-card border border-border shadow-sm"
          >
            <div
              className={`h-11 w-11 rounded-xl grid place-items-center shrink-0 ${
                p.free ? "bg-muted text-muted-foreground" : "bg-primary-soft text-primary"
              }`}
            >
              {p.free ? <Coffee className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-foreground">{p.period}</p>
              <p className="text-[11px] text-muted-foreground truncate mt-0.5">{p.time}</p>
            </div>
            <div className="text-right shrink-0">
              {p.free ? (
                <span className="text-[11px] font-semibold text-muted-foreground bg-muted rounded-full px-3 py-1.5">
                  Free Period
                </span>
              ) : (
                <>
                  <p className="text-sm font-semibold text-foreground">{p.subject}</p>
                  <p className="text-[11px] text-primary font-medium mt-0.5">{p.className}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
