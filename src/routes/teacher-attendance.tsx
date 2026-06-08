import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { Check, X } from "lucide-react";

export const Route = createFileRoute("/teacher-attendance")({
  head: () => ({
    meta: [
      { title: "Mark Attendance" },
      { name: "description", content: "Mark today's attendance for your class roster." },
    ],
  }),
  component: TeacherAttendancePage,
});

const students = [
  "Arjun K.", "Sneha R.", "Karthik V.", "Meera S.", "Rohan D.",
  "Anjali P.", "Vikram T.", "Divya M.", "Aditya N.", "Priya L.",
  "Sanjay B.", "Nisha G.",
];

type Status = "present" | "absent";

function TeacherAttendancePage() {
  const [statuses, setStatuses] = useState<Record<string, Status>>(
    () => Object.fromEntries(students.map((s) => [s, "present" as Status])),
  );

  const setStatus = (name: string, status: Status) =>
    setStatuses((prev) => ({ ...prev, [name]: status }));

  const presentCount = useMemo(
    () => Object.values(statuses).filter((s) => s === "present").length,
    [statuses],
  );

  return (
    <AppShell title="Mark Attendance" subtitle="Grade 10-A · Mathematics">
      <PageHeader title="Class Roster" subtitle={`${presentCount} of ${students.length} marked present`} />

      <div className="space-y-2">
        {students.map((name) => {
          const status = statuses[name];
          return (
            <div
              key={name}
              className="flex items-center gap-3 p-3 rounded-2xl bg-surface border border-border"
            >
              <div className="h-10 w-10 rounded-full bg-primary-soft text-primary grid place-items-center text-sm font-semibold shrink-0">
                {name[0]}
              </div>
              <p className="text-sm font-medium flex-1 min-w-0 truncate">{name}</p>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => setStatus(name, "present")}
                  className={`flex items-center gap-1 text-xs font-semibold rounded-full px-3 py-1.5 transition-colors ${
                    status === "present"
                      ? "bg-emerald-500 text-white"
                      : "bg-emerald-50 text-emerald-600"
                  }`}
                >
                  <Check className="h-3.5 w-3.5" /> Present
                </button>
                <button
                  onClick={() => setStatus(name, "absent")}
                  className={`flex items-center gap-1 text-xs font-semibold rounded-full px-3 py-1.5 transition-colors ${
                    status === "absent"
                      ? "bg-rose-500 text-white"
                      : "bg-rose-50 text-rose-500"
                  }`}
                >
                  <X className="h-3.5 w-3.5" /> Absent
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-5 h-12 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm shadow-sm shadow-primary/25">
        Save Attendance
      </button>
    </AppShell>
  );
}
