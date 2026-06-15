import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { UserPlus, GraduationCap, IdCard, X, Check } from "lucide-react";

export const Route = createFileRoute("/superadmin/students")({
  head: () => ({ meta: [{ title: "All Students — Super Admin" }] }),
  component: StudentsListPage,
});

const studentsList = [
  { name: "Arjun K.", meta: "Grade 10-A · Roll No. 12 · Class teacher: Mrs. Priya N.", status: "92% Attendance" },
  { name: "Sneha R.", meta: "Grade 10-A · Roll No. 18 · Class teacher: Mrs. Priya N.", status: "88% Attendance" },
  { name: "Karthik V.", meta: "Grade 9-B · Roll No. 04 · Class teacher: Mr. Singh A.", status: "95% Attendance" },
  { name: "Meera S.", meta: "Grade 9-B · Roll No. 21 · Class teacher: Mr. Singh A.", status: "79% Attendance" },
  { name: "Rohan D.", meta: "Grade 8-C · Roll No. 09 · Class teacher: Mrs. Iyer R.", status: "90% Attendance" },
  { name: "Anjali P.", meta: "Grade 8-C · Roll No. 15 · Class teacher: Mrs. Iyer R.", status: "97% Attendance" },
  { name: "Vikram T.", meta: "Grade 11-A · Roll No. 07 · Class teacher: Mr. Kumar S.", status: "84% Attendance" },
  { name: "Divya M.", meta: "Grade 11-A · Roll No. 22 · Class teacher: Mr. Kumar S.", status: "91% Attendance" },
];

const classTeachers = [
  "Mrs. Priya N.",
  "Mr. Singh A.",
  "Mrs. Iyer R.",
  "Mr. Kumar S.",
  "Ms. Rivera L.",
];

function StudentsListPage() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [grade, setGrade] = useState("");
  const [teacher, setTeacher] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = name.trim() && roll.trim() && grade.trim() && teacher;

  const handleSubmit = () => {
    if (!canSubmit) return;
    setSubmitted(true);
    setName("");
    setRoll("");
    setGrade("");
    setTeacher(null);
    setShowForm(false);
  };

  return (
    <AppShell title="All Students" subtitle="Super Admin · Student directory">
      <PageHeader title="All Students" subtitle={`${studentsList.length} students enrolled`} />

      {submitted && (
        <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 mb-4">
          <Check className="h-4 w-4 text-emerald-600 shrink-0" />
          <p className="text-xs text-emerald-700 font-medium">Student added under their class teacher.</p>
        </div>
      )}

      <button
        type="button"
        onClick={() => setShowForm((v) => !v)}
        className="w-full flex items-center justify-center gap-2 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm h-12 mb-4 active:scale-[0.99] transition-transform"
      >
        {showForm ? <X className="h-4 w-4" /> : <UserPlus className="h-4 w-4" />}
        {showForm ? "Close" : "Add Student"}
      </button>

      {showForm && (
        <div className="p-4 rounded-2xl bg-surface border border-border mb-5 space-y-4">
          <p className="text-xs text-muted-foreground">
            Every student must be added under a <span className="font-semibold text-foreground">class teacher</span>.
          </p>

          <div>
            <label className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mb-1.5">
              <UserPlus className="h-3.5 w-3.5" /> Student name
            </label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Arjun K." />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mb-1.5">
                <IdCard className="h-3.5 w-3.5" /> Roll no.
              </label>
              <Input value={roll} onChange={(e) => setRoll(e.target.value)} placeholder="e.g. 12" />
            </div>
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mb-1.5">
                <GraduationCap className="h-3.5 w-3.5" /> Grade
              </label>
              <Input value={grade} onChange={(e) => setGrade(e.target.value)} placeholder="e.g. Grade 10-A" />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mb-2">
              <GraduationCap className="h-3.5 w-3.5" /> Class teacher
            </label>
            <div className="flex flex-wrap gap-2">
              {classTeachers.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTeacher(t)}
                  className={`text-xs font-semibold rounded-full px-3.5 py-2 transition-colors ${
                    teacher === t
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-muted-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm h-11 active:scale-[0.99] transition-transform disabled:opacity-40 disabled:active:scale-100"
          >
            <Check className="h-4 w-4" /> Save Student
          </button>
        </div>
      )}

      <div className="space-y-2">
        {studentsList.map((s) => (
          <div key={s.name} className="flex items-center gap-3 p-3 rounded-2xl bg-surface border border-border">
            <div className="h-10 w-10 rounded-full bg-primary-soft text-primary grid place-items-center text-sm font-semibold shrink-0">
              {s.name[0]}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium truncate">{s.name}</p>
              <p className="text-xs text-muted-foreground truncate">{s.meta}</p>
            </div>
            <span className="text-[10px] font-semibold text-primary bg-primary/10 rounded-full px-2.5 py-1 shrink-0">
              {s.status}
            </span>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
