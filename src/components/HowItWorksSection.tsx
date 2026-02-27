import { ClipboardList, Gamepad2, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "PLAN",
    subtitle: "Design Therapy Protocols",
    description:
      "Clinicians build personalized exercise programs using our library of 200+ validated protocols. Set goals, frequency, and progression rules in minutes.",
    color: "from-primary/20 to-primary/5",
  },
  {
    number: "02",
    icon: Gamepad2,
    title: "GUIDE",
    subtitle: "Gamified Sensor Experience",
    description:
      "Patients follow interactive, gamified sessions using the SPOT sensor. Real-time feedback keeps them engaged, corrects form, and motivates adherence.",
    color: "from-chart-3/20 to-chart-3/5",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "TRACK",
    subtitle: "Real-Time Data & Analytics",
    description:
      "Automated reports capture motion quality, range of movement, and progress over time. Share insights with patients and adjust protocols on the fly.",
    color: "from-chart-2/20 to-chart-2/5",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-dark-bg py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-neon text-sm font-semibold tracking-widest uppercase">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-3 mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Three simple steps from prescription to measurable outcomes.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connector line */}
          <div className="hidden md:block absolute top-20 left-1/6 right-1/6 h-px neon-line opacity-30" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-gradient-card rounded-2xl border border-neon/10 p-8 group hover:border-neon/40 hover:shadow-neon transition-all duration-500"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Number */}
                <div className="text-6xl font-black text-neon/10 absolute top-4 right-6 select-none group-hover:text-neon/20 transition-colors">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} border border-neon/20 flex items-center justify-center mb-6 group-hover:shadow-neon-sm transition-all duration-300`}>
                  <Icon className="w-7 h-7 text-neon" />
                </div>

                <div className="text-xs font-bold tracking-widest text-neon uppercase mb-1">
                  {step.title}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.subtitle}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>

                {/* Step dot connector */}
                {i < 2 && (
                  <div className="hidden md:block absolute -right-4 top-20 w-8 h-8 rounded-full border-2 border-neon/30 bg-dark-bg flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-neon animate-pulse-neon" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
