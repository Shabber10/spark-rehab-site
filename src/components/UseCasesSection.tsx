import { useState } from "react";
import { Brain, Dumbbell, Activity, Zap } from "lucide-react";

const categories = [
  {
    id: "neuro",
    label: "Neurological",
    icon: Brain,
    color: "text-chart-1",
    bg: "bg-chart-1/10",
    border: "border-chart-1/30",
    cases: [
      { title: "Stroke Rehabilitation", desc: "Track limb movement recovery and restore motor function post-stroke with guided exercises and real-time feedback." },
      { title: "Multiple Sclerosis", desc: "Monitor gait patterns, balance, and coordination changes over time for MS patients." },
      { title: "Parkinson's Disease", desc: "Quantify tremor severity, gait freezing episodes, and postural stability." },
    ],
  },
  {
    id: "cognitive",
    label: "Cognitive",
    icon: Zap,
    color: "text-chart-4",
    bg: "bg-chart-4/10",
    border: "border-chart-4/30",
    cases: [
      { title: "Dual-Task Training", desc: "Combine physical exercises with cognitive challenges to enhance neuroplasticity." },
      { title: "Attention & Focus", desc: "Gamified protocols that require sustained attention while performing physical tasks." },
      { title: "Memory & Coordination", desc: "Sequence-based movement exercises that target working memory and motor planning." },
    ],
  },
  {
    id: "sports",
    label: "Sports Rehab",
    icon: Dumbbell,
    color: "text-chart-3",
    bg: "bg-chart-3/10",
    border: "border-chart-3/30",
    cases: [
      { title: "ACL Reconstruction", desc: "Progressive return-to-sport protocols with symmetry testing and hop tests." },
      { title: "Shoulder Injuries", desc: "Rotator cuff rehabilitation with full range-of-motion tracking." },
      { title: "Hamstring Strains", desc: "Eccentric loading protocols and return-to-running criteria measurement." },
    ],
  },
  {
    id: "msk",
    label: "MSK",
    icon: Activity,
    color: "text-chart-2",
    bg: "bg-chart-2/10",
    border: "border-chart-2/30",
    cases: [
      { title: "Chronic Back Pain", desc: "Core stability training with movement quality assessment and pain correlation." },
      { title: "Hip & Knee OA", desc: "Strength and mobility programs for osteoarthritis management." },
      { title: "Post-Surgery Recovery", desc: "Evidence-based joint replacement rehab with objective outcome measures." },
    ],
  },
];

export default function UseCasesSection() {
  const [active, setActive] = useState("neuro");
  const selected = categories.find((c) => c.id === active)!;
  const Icon = selected.icon;

  return (
    <section id="use-cases" className="bg-dark-bg py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-neon text-sm font-semibold tracking-widest uppercase">Use Cases</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-3 mb-4">
            Built for Every Rehab Specialty
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tailored protocols for every clinical area — from neurology to elite sports medicine.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => {
            const CatIcon = cat.icon;
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                  isActive
                    ? `${cat.bg} ${cat.border} ${cat.color} shadow-neon-sm`
                    : "border-border bg-dark-surface text-muted-foreground hover:border-neon/30 hover:text-foreground"
                }`}
              >
                <CatIcon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Cases grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {selected.cases.map((item, i) => (
            <div
              key={item.title}
              className={`bg-gradient-card rounded-2xl border ${selected.border} p-6 hover:shadow-neon transition-all duration-400 group`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-10 h-10 rounded-xl ${selected.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-5 h-5 ${selected.color}`} />
              </div>
              <h4 className="text-base font-bold text-foreground mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
