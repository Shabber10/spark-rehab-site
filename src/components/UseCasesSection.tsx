import { useState } from "react";
import { Brain, Zap, Activity, Dumbbell } from "lucide-react";

const categories = [
  {
    id: "neuro-motor",
    label: "Neuro-Motor Rehab",
    icon: Brain,
    conditions: [
      "Stroke (hemiplegia, post-stroke weakness, balance deficits)",
      "Parkinson's Disease (bradykinesia, rigidity, freezing of gait)",
      "Cerebral Palsy (spasticity, motor delays)",
    ],
  },
  {
    id: "neuro-cognition",
    label: "Neuro-Cognition Rehab",
    icon: Zap,
    conditions: [
      "Developmental Disorders (ADHD, learning difficulties in each rehab)",
      "Traumatic Brain Injury (TBI) (attention, executive function impairments)",
      "Dementia / Alzheimer's Disease (memory loss, reduced processing speed)",
    ],
  },
  {
    id: "musculoskeletal",
    label: "Musculoskeletal (MSK) Rehab",
    icon: Activity,
    conditions: [
      "Rotator Cuff Injury / Shoulder Impingement",
      "Total Knee Replacement (TKR) / Total Hip Replacement (THR)",
      "Lower Back Pain / Lumbar Spondylosis",
    ],
  },
  {
    id: "sports",
    label: "Sports Rehab",
    icon: Dumbbell,
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
  const Icon = selected.icon;

  return (
    <section id="use-cases" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3">
            One Platform, Numerous Possibilities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Designed for Every Rehab Specialty
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our solution is designed to adapt to diverse rehabilitation pathways across specialties, whether it's recovery from injury, managing chronic conditions, or enhancing athletic performance.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                cat.id === active
                  ? "bg-primary text-primary-foreground border-primary shadow-green"
                  : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12 border border-border">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center shrink-0">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{selected.label}</h3>
              <ul className="space-y-3">
                {selected.conditions.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
              <a
                href="#use-cases"
                className="inline-block mt-6 text-primary font-semibold hover:underline text-sm"
              >
                Know More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
