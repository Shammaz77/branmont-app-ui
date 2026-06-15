import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { UserPlus, BookOpen, GraduationCap, Phone, ArrowLeft, Check } from "lucide-react";

export const Route = createFileRoute("/superadmin/add-teacher")({
  head: () => ({ meta: [{ title: "Add Teacher — Super Admin" }] }),
  component: AddTeacherPage,
});

const grades = ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"];

function AddTeacherPage() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = name.trim() && subject.trim() && grade;

  const handleSubmit = () => {
    if (!canSubmit) return;
    setSubmitted(true);
    setName("");
    setSubject("");
    setPhone("");
    setGrade(null);
  };

  return (
    <AppShell title="Add Teacher" subtitle="Super Admin · Faculty directory">
      <Link
        to="/superadmin/teachers"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground mb-3"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Back to teachers
      </Link>

      <PageHeader title="Add Teacher" subtitle="Create a new faculty profile" />

      {submitted && (
        <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 mb-5">
          <Check className="h-4 w-4 text-emerald-600 shrink-0" />
          <p className="text-xs text-emerald-700 font-medium">Teacher added successfully.</p>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mb-1.5">
            <UserPlus className="h-3.5 w-3.5" /> Full name
          </label>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Mrs. Priya N." />
        </div>

        <div>
          <label className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mb-1.5">
            <BookOpen className="h-3.5 w-3.5" /> Subject
          </label>
          <Input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="e.g. Mathematics" />
        </div>

        <div>
          <label className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mb-1.5">
            <Phone className="h-3.5 w-3.5" /> Phone number
          </label>
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g. +91 98765 43210" />
        </div>

        <div>
          <label className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mb-2">
            <GraduationCap className="h-3.5 w-3.5" /> Assigned grade
          </label>
          <div className="flex flex-wrap gap-2">
            {grades.map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGrade(g)}
                className={`text-xs font-semibold rounded-full px-3.5 py-2 transition-colors ${
                  grade === g
                    ? "bg-primary text-primary-foreground"
                    : "bg-surface border border-border text-muted-foreground"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="w-full flex items-center justify-center gap-2 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm h-12 mt-2 active:scale-[0.99] transition-transform disabled:opacity-40 disabled:active:scale-100"
        >
          <UserPlus className="h-4 w-4" /> Add Teacher
        </button>
      </div>
    </AppShell>
  );
}
