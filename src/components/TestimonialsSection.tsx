import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Real quote icons from ropods.com
const QUOTE_GREEN = "https://www.ropods.com/home/testimonials/green.svg";
const QUOTE_BLACK = "https://www.ropods.com/home/testimonials/black.svg";

const testimonials = [
  {
    variant: "green",
    quote: "SPOT is being used once a week, primarily in orthopedic and sports rehab cases, especially for balance and agility training. In ACL rehabilitation, therapists noted that while recovery timelines were comparable to traditional methods, SPOT made the process more engaging and simpler to teach. Patients showed higher motivation with engagement rated 8/10, describing sessions as playful, competitive, and more sport-like.",
    name: "Dr. Nandlal Pathak (PT)",
    clinic: "Synchrony",
    initials: "NP",
  },
  {
    variant: "black",
    quote: "Since integrating SPOT into daily therapy sessions, the clinic has applied it across neuro, ortho, sports rehab, post-op, geriatric, and pediatric cases. In ACL rehabilitation, SPOT drills significantly improved proprioception, balance, and agility, resulting in 30–40% faster functional recovery compared to traditional methods. Patient engagement has been exceptionally high, consistently rated at 10/10.",
    name: "Dr. David Arun Kumar J (PT)",
    clinic: "Advanced Physio",
    initials: "DA",
  },
  {
    variant: "green",
    quote: "Since adopting SPOT, we have been integrating it once a week, with 2–3 sessions per day, primarily in pediatric cases including ASD, ADHD, and GDD. Compared to traditional rehab, we have observed 40–50% improvement in patient outcomes, with children showing better flexibility, stability, strengthening, and cognitive response.",
    name: "Dr. P. Sumitha Hemavathy",
    clinic: "Capaar",
    initials: "SH",
  },
  {
    variant: "green",
    quote: "SPOT has been used once a week across a wide range of patients — neuro, ortho, sports rehab, post-op, and pediatric — and found to be effective across all. Therapists reported 40–60% improvement in patient outcomes compared to traditional rehab, with engagement levels rated 8/10 and recovery timelines accelerated by 30–40%.",
    name: "Dr. Kiran S Murthy (PT)",
    clinic: "Rayarakirana",
    initials: "KM",
  },
];

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-neon text-xs font-bold tracking-widest uppercase">Voices of Recovery</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-3">
            What Clinicians Are Saying
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-14">
          {[
            { value: "500+", label: "Physiotherapists" },
            { value: "50k+", label: "Patient Sessions" },
            { value: "4.9/5", label: "Average Rating" },
          ].map((s) => (
            <div key={s.label} className="text-center bg-gradient-card rounded-2xl border border-neon/10 py-6 hover:border-neon/30 transition-all">
              <div className="text-3xl font-extrabold text-neon glow-text">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-card rounded-3xl border border-neon/10 p-10 relative">
            {/* Real quote icon */}
            <img src={t.variant === "green" ? QUOTE_GREEN : QUOTE_BLACK}
              alt="quote" className="w-10 h-10 absolute top-8 left-8 opacity-40"
              onError={() => {}} />
            <Quote className="w-10 h-10 text-neon/20 absolute top-8 left-8 hidden" />

            <blockquote className="text-lg text-foreground font-light leading-relaxed mb-8 pt-6">
              "{t.quote}"
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-neon flex items-center justify-center text-background font-bold text-sm shadow-neon-sm">
                {t.initials}
              </div>
              <div>
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.clinic}</div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={() => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-neon/30 flex items-center justify-center text-neon hover:bg-primary/10 hover:border-neon transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? "w-8 bg-neon shadow-neon-sm" : "w-2 bg-border"}`} />
              ))}
            </div>
            <button onClick={() => setIdx((i) => (i + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-neon/30 flex items-center justify-center text-neon hover:bg-primary/10 hover:border-neon transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
