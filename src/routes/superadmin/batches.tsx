import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { Boxes, Plus, GraduationCap, Users, X, Check, UserPlus } from "lucide-react";

export const Route = createFileRoute("/superadmin/batches")({
  head: () => ({ meta: [{ title: "Batches — Super Admin" }] }),
  component: BatchesPage,
});

const classTeachers = [
  "Mrs. Priya N.",
  "Mr. Singh A.",
  "Mrs. Iyer R.",
  "Mr. Kumar S.",
  "Ms. Rivera L.",
];

type Batch = {
  name: string;
  teacher: string;
  students: string[];
};

const initialBatches: Batch[] = [
  { name: "Grade 10-A", teacher: "Mrs. Priya N.", students: ["Arjun K.", "Sneha R.", "Divya M."] },
  { name: "Grade 9-B", teacher: "Mr. Singh A.", students: ["Karthik V.", "Meera S."] },
  { name: "Grade 8-C", teacher: "Mrs. Iyer R.", students: ["Rohan D.", "Anjali P.", "Vikram T."] },
];

function BatchesPage() {
  const [batches, setBatches] = useState<Batch[]>(initialBatches);
  const [showForm, setShowForm] = useState(false);

  const [batchName, setBatchName] = useState("");
  const [teacher, setTeacher] = useState<string | null>(null);
  const [studentInput, setStudentInput] = useState("");
  const [students, setStudents] = useState<string[]>([]);

  const addStudent = () => {
    const trimmed = studentInput.trim();
    if (!trimmed) return;
    setStudents((prev) => [...prev, trimmed]);
    setStudentInput("");
  };

  const removeStudent = (name: string) =>
    setStudents((prev) => prev.filter((s) => s !== name));

  const canSubmit = batchName.trim() && teacher && students.length > 0;

  const handleCreate = () => {
    if (!canSubmit) return;
    setBatches((prev) => [{ name: batchName.trim(), teacher: teacher!, students }, ...prev]);
    setBatchName("");
    setTeacher(null);
    setStudents([]);
    setStudentInput("");
    setShowForm(false);
  };

  return (
    <AppShell title="Batches" subtitle="Super Admin · Create batches and assign students">
      <PageHeader title="Batches" subtitle={`${batches.length} batches · students grouped under class teachers`} />

      <button
        type="button"
        onClick={() => setShowForm((v) => !v)}
        className="w-full flex items-center justify-center gap-2 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm h-12 mb-4 active:scale-[0.99] transition-transform"
      >
        {showForm ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        {showForm ? "Close" : "Create Batch"}
      </button>

      {showForm && (
        <div className="p-4 rounded-2xl bg-surface border border-border mb-5 space-y-4">
          <p className="text-xs text-muted-foreground">
            A batch is created under one <span className="font-semibold text-foreground">class teacher</span>; add students to enroll them in it.
          </p>

          <div>
            <label className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mb-1.5">
              <Boxes className="h-3.5 w-3.5" /> Batch name
            </label>
            <Input value={batchName} onChange={(e) => setBatchName(e.target.value)} placeholder="e.g. Grade 10-A" />
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

          <div>
            <label className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mb-1.5">
              <UserPlus className="h-3.5 w-3.5" /> Add students
            </label>
            <div className="flex gap-2">
              <Input
                value={studentInput}
                onChange={(e) => setStudentInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addStudent();
                  }
                }}
                placeholder="Student name, then press Add"
              />
              <button
                type="button"
                onClick={addStudent}
                className="shrink-0 h-9 px-4 rounded-md bg-primary text-primary-foreground text-sm font-semibold active:scale-95 transition-transform"
              >
                Add
              </button>
            </div>
            {students.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {students.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground bg-card border border-border rounded-full pl-3 pr-1.5 py-1"
                  >
                    {s}
                    <button type="button" onClick={() => removeStudent(s)} className="h-5 w-5 rounded-full grid place-items-center text-muted-foreground hover:text-foreground">
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={handleCreate}
            disabled={!canSubmit}
            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm h-11 active:scale-[0.99] transition-transform disabled:opacity-40 disabled:active:scale-100"
          >
            <Check className="h-4 w-4" /> Create Batch
          </button>
        </div>
      )}

      <div className="space-y-2.5">
        {batches.map((b) => (
          <div key={b.name} className="p-3.5 rounded-2xl bg-surface border border-border">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center shrink-0">
                <Boxes className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground truncate">{b.name}</p>
                <p className="text-xs text-muted-foreground truncate flex items-center gap-1 mt-0.5">
                  <GraduationCap className="h-3 w-3" /> Class teacher: {b.teacher}
                </p>
              </div>
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-primary bg-primary/10 rounded-full px-2.5 py-1 shrink-0">
                <Users className="h-3 w-3" /> {b.students.length}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-3 pl-[3.5rem]">
              {b.students.map((s) => (
                <span key={s} className="text-[11px] font-medium text-muted-foreground bg-card border border-border rounded-full px-2.5 py-1">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
