import { ClipboardList, Gamepad2, Search } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "PLAN",
    desc: "Create personalized therapy protocols directly through the app",
    bg: "bg-secondary",
  },
  {
    icon: Gamepad2,
    title: "GUIDE",
    desc: "Use SPOT, our sensor device, to deliver gamified engagement",
    bg: "bg-primary/10",
  },
  {
    icon: Search,
    title: "TRACK",
    desc: "Capture biofeedback and digital records to monitor and refine care",
    bg: "bg-secondary",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple. Powerful. Effective.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            It integrates portable movement-sensing hardware with an advanced rehabilitation software, giving you everything you need to manage patients seamlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className={`${step.bg} rounded-2xl p-8 border border-border hover:shadow-card transition-all duration-300 group`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-xs font-black tracking-widest uppercase text-primary mb-2">
                  {step.title}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                <div className="mt-4 w-8 h-1 bg-primary rounded-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
