import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "SPOT is being used once a week, primarily in orthopedic and sports rehab cases, especially for balance and agility training. In ACL rehabilitation, therapists noted that while recovery timelines were comparable to traditional methods, SPOT made the process more engaging and simpler to teach. Patients showed higher motivation with engagement rated 8/10, describing sessions as playful, competitive, and more sport-like.",
    name: "Dr. Nandlal Pathak (PT)",
    clinic: "Synchrony",
  },
  {
    quote:
      "Since integrating SPOT into daily therapy sessions, the clinic has applied it across neuro, ortho, sports rehab, post-op, geriatric, and pediatric cases. In ACL rehabilitation, SPOT drills significantly improved proprioception, balance, and agility, resulting in 30–40% faster functional recovery compared to traditional methods. Patient engagement has been exceptionally high, consistently rated at 10/10.",
    name: "Dr. David Arun Kumar J (PT)",
    clinic: "Advanced Physio",
  },
  {
    quote:
      "Since adopting SPOT, we have been integrating it once a week, with 2–3 sessions per day, primarily in pediatric cases including ASD, ADHD, and GDD. Compared to traditional rehab, we have observed 40–50% improvement in patient outcomes, with children showing better flexibility, stability, strengthening, and cognitive response.",
    name: "Dr. P. Sumitha Hemavathy",
    clinic: "Capaar",
  },
  {
    quote:
      "SPOT has been used once a week across a wide range of patients — neuro, ortho, sports rehab, post-op, and pediatric — and found to be effective across all. Therapists reported 40–60% improvement in patient outcomes compared to traditional rehab, with engagement levels rated 8/10 and recovery timelines accelerated by 30–40%.",
    name: "Dr. Kiran S Murthy (PT)",
    clinic: "Rayarakirana",
  },
];

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3">
            Voices of Recovery
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Clinicians Are Saying
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-secondary rounded-2xl p-10 border border-border relative">
            <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />
            <blockquote className="text-foreground text-lg leading-relaxed mb-8 pt-4">
              "{t.quote}"
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </div>
              <div>
                <div className="font-semibold text-foreground text-sm">{t.name}</div>
                <div className="text-muted-foreground text-xs">{t.clinic}</div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === idx ? "w-8 bg-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
