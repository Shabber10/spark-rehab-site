import { TrendingUp, UserMinus, ArrowRightLeft, Target, Database, Cpu } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Boost Patient Engagement",
    desc: "Interactive SPOT and score-based challenges turn therapy into an enjoyable, rewarding experience.",
  },
  {
    icon: UserMinus,
    title: "Reduce Patient Drop-Off",
    desc: "Gamified sessions, real-time feedback, and progress tracking keep patients motivated and consistent.",
  },
  {
    icon: ArrowRightLeft,
    title: "Ensure Continuity of Care",
    desc: "App-based protocols extend therapy beyond the clinic, enabling structured home programs.",
  },
  {
    icon: Target,
    title: "Deliver Measurable Outcomes",
    desc: "Objective data and analytics replace guesswork with clear, quantifiable progress reports.",
  },
  {
    icon: Database,
    title: "Unified Patient Records",
    desc: "Digital platform centralizes rehab history, exercise logs, and performance trends.",
  },
  {
    icon: Cpu,
    title: "Seamless Tech Integration",
    desc: "Automated record-keeping and AI-driven insights replace paper notes and manual tracking.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3">
            An Ecosystem Built for Rehab Professionals and Patients
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Everything you need. All in one place.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="bg-background rounded-2xl p-7 border border-border hover:shadow-card hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA banner */}
        <div className="mt-16 rounded-2xl bg-primary px-8 py-12 text-center shadow-green">
          <h3 className="text-3xl font-bold text-primary-foreground mb-2">
            500+ Physiotherapists are already using SPOT.
          </h3>
          <p className="text-primary-foreground/80 mb-6 text-lg">Let's Get You Started!</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-background text-primary font-bold px-8 py-3 rounded-full hover:bg-background/90 transition-colors shadow-card"
          >
            Join Us
          </a>
        </div>
      </div>
    </section>
  );
}
