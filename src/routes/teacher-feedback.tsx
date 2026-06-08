import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { Star } from "lucide-react";

export const Route = createFileRoute("/teacher-feedback")({
  head: () => ({
    meta: [
      { title: "Class Feedback" },
      { name: "description", content: "Feedback submitted by students about your classes." },
    ],
  }),
  component: TeacherFeedbackPage,
});

const feedbackList = [
  { name: "Arjun K.", className: "Grade 10-A", rating: 5, comment: "Today's lesson on algebra was really clear and easy to follow." },
  { name: "Sneha R.", className: "Grade 10-A", rating: 4, comment: "Good pace, but could use more practice problems in class." },
  { name: "Karthik V.", className: "Grade 9-B", rating: 5, comment: "Loved the real-world examples used to explain the concepts." },
  { name: "Meera S.", className: "Grade 9-B", rating: 3, comment: "The class felt a bit rushed towards the end." },
  { name: "Rohan D.", className: "Grade 8-C", rating: 4, comment: "Explanations were helpful, would like more group activities." },
  { name: "Anjali P.", className: "Grade 8-C", rating: 5, comment: "Best class this week — the doubt session really helped." },
];

function TeacherFeedbackPage() {
  return (
    <AppShell title="Class Feedback" subtitle="What your students are saying">
      <PageHeader title="Student Feedback" subtitle={`${feedbackList.length} responses this week`} />

      <div className="space-y-2.5">
        {feedbackList.map((f, i) => (
          <div key={i} className="p-4 rounded-2xl bg-surface border border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-primary-soft text-primary grid place-items-center text-sm font-semibold shrink-0">
                {f.name[0]}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium truncate">{f.name}</p>
                <p className="text-xs text-muted-foreground truncate">{f.className}</p>
              </div>
              <div className="flex items-center gap-0.5 shrink-0">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    className={`h-3.5 w-3.5 ${n <= f.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{f.comment}</p>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
