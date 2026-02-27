import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    title: "Head of Physiotherapy",
    clinic: "St. Thomas Rehabilitation Centre",
    quote:
      "ROPODS has completely transformed how we deliver home exercise programs. Patient adherence has doubled and we get objective data we can actually use in our clinical decisions.",
    stars: 5,
    initial: "SM",
  },
  {
    name: "Marco Ferrara, PT",
    title: "Sports Physiotherapist",
    clinic: "FC Barcelona Medical Department",
    quote:
      "The SPOT sensor gives us biomechanical data that used to require a full motion capture lab. It's incredibly accurate and the athletes actually enjoy using the SynapMove app.",
    stars: 5,
    initial: "MF",
  },
  {
    name: "Prof. Anya Kovacs",
    title: "Neurological Rehabilitation Specialist",
    clinic: "University Hospital Vienna",
    quote:
      "For our stroke patients, the gamified approach is revolutionary. We're seeing engagement levels we've never achieved with traditional programs, and the outcomes data speaks for itself.",
    stars: 5,
    initial: "AK",
  },
  {
    name: "James O'Brien, MSc",
    title: "Clinic Director",
    clinic: "Dublin Sports Medicine Clinic",
    quote:
      "Setup was incredibly easy — we were live with our first patient within the same day. The software integrates with our existing workflow and support has been excellent.",
    stars: 5,
    initial: "JO",
  },
];

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const t = testimonials[idx];

  return (
    <section className="bg-dark-bg py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-neon text-sm font-semibold tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-3 mb-4">
            Trusted by Clinicians Worldwide
          </h2>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-6 mb-14">
          {[
            { value: "500+", label: "Physiotherapists" },
            { value: "50k+", label: "Patient Sessions" },
            { value: "4.9/5", label: "Average Rating" },
          ].map((s) => (
            <div
              key={s.label}
              className="text-center bg-gradient-card rounded-2xl border border-neon/10 py-6 hover:border-neon/30 transition-all duration-300"
            >
              <div className="text-3xl font-extrabold text-neon glow-text">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative bg-gradient-card rounded-3xl border border-neon/10 p-10 md:p-14">
          <Quote className="w-10 h-10 text-neon/20 absolute top-8 left-8" />

          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-chart-4 fill-chart-4" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-foreground font-light leading-relaxed mb-8">
              "{t.quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-neon flex items-center justify-center text-background font-bold text-sm shadow-neon-sm">
                {t.initial}
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.title} · {t.clinic}</div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-neon/30 flex items-center justify-center text-neon hover:bg-primary/10 hover:border-neon transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === idx ? "w-8 bg-neon shadow-neon-sm" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-neon/30 flex items-center justify-center text-neon hover:bg-primary/10 hover:border-neon transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
