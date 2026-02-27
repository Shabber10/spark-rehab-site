import { TrendingUp, UserCheck, RefreshCw, Target, Database, Plug } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Boost Engagement",
    desc: "Gamified sessions increase daily exercise adherence by up to 73% compared to paper-based home programs.",
  },
  {
    icon: UserCheck,
    title: "Reduce Drop-Off",
    desc: "Automated check-ins, reminders, and progress milestones keep patients motivated throughout their journey.",
  },
  {
    icon: RefreshCw,
    title: "Continuity of Care",
    desc: "Seamless clinic-to-home transition ensures patients continue their program with proper guidance.",
  },
  {
    icon: Target,
    title: "Objective Outcomes",
    desc: "Replace subjective assessments with quantified motion data to make evidence-based clinical decisions.",
  },
  {
    icon: Database,
    title: "Unified Records",
    desc: "All session data, reports, and clinical notes stored securely and accessible from any device.",
  },
  {
    icon: Plug,
    title: "Seamless Integration",
    desc: "Connect with existing EHR/EMR systems, billing platforms, and telehealth tools via open API.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="bg-dark-surface py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-neon text-sm font-semibold tracking-widest uppercase">
            Why ROPODS
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-3 mb-4">
            Built to Deliver Results
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every feature is designed to improve patient outcomes and save clinicians time.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="bg-gradient-card rounded-2xl border border-neon/10 p-7 group hover:border-neon/40 hover:shadow-neon transition-all duration-400"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-neon/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:shadow-neon-sm transition-all duration-300">
                  <Icon className="w-6 h-6 text-neon" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
