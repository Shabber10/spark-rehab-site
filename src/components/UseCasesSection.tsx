import { useState } from "react";
import { Brain, Zap, Activity, Dumbbell } from "lucide-react";

// Real icons from ropods.com
const ICONS: Record<string, string> = {
  "neuro-motor": "https://www.ropods.com/home/oneplatform/Neuro-Motor.svg",
  "neuro-cognition": "https://www.ropods.com/home/oneplatform/Neuro-Cognition.svg",
  "musculoskeletal": "https://www.ropods.com/home/oneplatform/Musculoskeletal.svg",
  "sports": "https://www.ropods.com/home/oneplatform/sports.svg",
};

const categories = [
  {
    id: "neuro-motor", label: "Neuro-Motor Rehab", icon: Brain,
    conditions: [
      "Stroke (hemiplegia, post-stroke weakness, balance deficits)",
      "Parkinson's Disease (bradykinesia, rigidity, freezing of gait)",
      "Cerebral Palsy (spasticity, motor delays)",
    ],
  },
  {
    id: "neuro-cognition", label: "Neuro-Cognition Rehab", icon: Zap,
    conditions: [
      "Developmental Disorders (ADHD, learning difficulties in each rehab)",
      "Traumatic Brain Injury (TBI) (attention, executive function impairments)",
      "Dementia / Alzheimer's Disease (memory loss, reduced processing speed)",
    ],
  },
  {
    id: "musculoskeletal", label: "Musculoskeletal (MSK) Rehab", icon: Activity,
    conditions: [
      "Rotator Cuff Injury / Shoulder Impingement",
      "Total Knee Replacement (TKR) / Total Hip Replacement (THR)",
      "Lower Back Pain / Lumbar Spondylosis",
    ],
  },
  {
    id: "sports", label: "Sports Rehab", icon: Dumbbell,
    conditions: [
      "ACL Tear / Post-ACL Surgery (reaction, agility drills)",
      "Concussion Rehab (neuro-motor + cognitive drills combined)",
      "Return-to-Sport Agility & Reaction Training (football, basketball, cricket, etc.)",
    ],
  },
];

export default function UseCasesSection() {
  const [active, setActive] = useState("neuro-motor");
  const selected = categories.find((c) => c.id === active)!;

  return (
    <section id="use-cases" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-neon text-xs font-bold tracking-widest uppercase">One Platform, Numerous Possibilities</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-3 mb-4">
            Designed for Every Rehab Specialty
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our solution is designed to adapt to diverse rehabilitation pathways across specialties, whether it's recovery from injury, managing chronic conditions, or enhancing athletic performance.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => setActive(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                cat.id === active
                  ? "bg-primary/20 border-neon/60 text-neon shadow-neon-sm"
                  : "border-border bg-dark-surface text-muted-foreground hover:border-neon/30 hover:text-foreground"
              }`}>
              <img src={ICONS[cat.id]} alt={cat.label} className="w-4 h-4 object-contain brightness-200"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-gradient-card rounded-2xl border border-neon/15 p-10 md:p-12">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-neon/20 flex items-center justify-center shrink-0 shadow-neon-sm">
              <img src={ICONS[selected.id]} alt={selected.label}
                className="w-9 h-9 object-contain brightness-200"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-5">{selected.label}</h3>
              <ul className="space-y-3">
                {selected.conditions.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-neon shrink-0 shadow-neon-sm" />
                    {c}
                  </li>
                ))}
              </ul>
              <a href={`https://www.ropods.com/usecases?tab=${selected.id}`} target="_blank" rel="noopener noreferrer"
                className="inline-block mt-6 text-neon font-semibold hover:glow-text transition-all text-sm">
                Know More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
