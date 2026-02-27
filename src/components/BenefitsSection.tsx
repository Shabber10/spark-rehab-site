// Real ecosystem icons from ropods.com
const benefits = [
  {
    img: "https://www.ropods.com/home/ecosystem/Frame%2048095566.svg",
    title: "Boost Patient Engagement",
    desc: "Interactive SPOT and score-based challenges turn therapy into an enjoyable, rewarding experience.",
  },
  {
    img: "https://www.ropods.com/home/ecosystem/Frame%2048095564.svg",
    title: "Reduce Patient Drop-Off",
    desc: "Gamified sessions, real-time feedback, and progress tracking keep patients motivated and consistent.",
  },
  {
    img: "https://www.ropods.com/home/ecosystem/Group%20237639.svg",
    title: "Ensure Continuity of Care",
    desc: "App-based protocols extend therapy beyond the clinic, enabling structured home programs.",
  },
  {
    img: "https://www.ropods.com/home/ecosystem/Frame%2048095565.svg",
    title: "Deliver Measurable Outcomes",
    desc: "Objective data and analytics replace guesswork with clear, quantifiable progress reports.",
  },
  {
    img: "https://www.ropods.com/home/ecosystem/Vector.svg",
    title: "Unified Patient Records",
    desc: "Digital platform centralizes rehab history, exercise logs, and performance trends.",
  },
  {
    img: "https://www.ropods.com/home/ecosystem/Frame%2048095567.svg",
    title: "Seamless Tech Integration",
    desc: "Automated record-keeping and AI-driven insights replace paper notes and manual tracking.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-neon text-xs font-bold tracking-widest uppercase">An Ecosystem Built for Rehab Professionals & Patients</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-3 mb-4">
            Everything You Need. All in One Place.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={b.title}
              className="bg-gradient-card rounded-2xl border border-neon/10 p-7 group hover:border-neon/40 hover:shadow-neon transition-all duration-400"
              style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-neon/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:shadow-neon-sm transition-all duration-300">
                <img src={b.img} alt={b.title} className="w-7 h-7 object-contain brightness-200"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 relative rounded-2xl overflow-hidden bg-gradient-neon p-12 md:p-16 text-center shadow-neon">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "linear-gradient(hsl(0 0% 0% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 0% / 0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-extrabold text-background mb-3">
              500+ Physiotherapists are already using SPOT.
            </h3>
            <p className="text-background/80 text-lg mb-8">Let's Get You Started!</p>
            <a href="#contact"
              className="inline-flex items-center gap-2 bg-background text-primary font-bold px-8 py-3 rounded-full hover:bg-background/90 transition-colors shadow-card text-base">
              Join Us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
