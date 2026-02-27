import { ClipboardList, Gamepad2, Search } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "PLAN",
    subtitle: "Create Therapy Protocols",
    desc: "Create personalized therapy protocols directly through the app",
    img: "https://www.ropods.com/home/howitworks/plan.svg",
    num: "01",
  },
  {
    icon: Gamepad2,
    title: "GUIDE",
    subtitle: "Gamified Sensor Experience",
    desc: "Use SPOT, our sensor device, to deliver gamified engagement",
    img: "https://www.ropods.com/home/howitworks/guide.svg",
    num: "02",
  },
  {
    icon: Search,
    title: "TRACK",
    subtitle: "Real-Time Data & Analytics",
    desc: "Capture biofeedback and digital records to monitor and refine care",
    img: "https://www.ropods.com/home/howitworks/search.svg",
    num: "03",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-neon text-xs font-bold tracking-widest uppercase">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-3 mb-4">
            Simple. Powerful. Effective.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            It integrates portable movement-sensing hardware with an advanced rehabilitation software, giving you everything you need to manage patients seamlessly.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connector */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-px neon-line opacity-20" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title}
                className="relative bg-gradient-card rounded-2xl border border-neon/10 p-8 group hover:border-neon/40 hover:shadow-neon transition-all duration-500"
                style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="text-6xl font-black text-neon/8 absolute top-4 right-6 select-none group-hover:text-neon/15 transition-colors">
                  {step.num}
                </div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-neon/20 flex items-center justify-center mb-6 group-hover:shadow-neon-sm transition-all duration-300">
                  <Icon className="w-7 h-7 text-neon" />
                </div>
                <div className="text-xs font-black tracking-widest text-neon uppercase mb-1">{step.title}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.subtitle}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
