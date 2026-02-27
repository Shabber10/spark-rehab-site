import { Button } from "@/components/ui/button";
import { Play, ArrowRight, BarChart2 } from "lucide-react";

// Real hero image from ropods.com
const HERO_IMG = "https://www.ropods.com/_next/image?url=%2Fhome%2Fhero%2Fhero.png&w=1920&q=75";

const stats = [
  { value: "500+", label: "Physiotherapists" },
  { value: "98%", label: "Patient Satisfaction" },
  { value: "3×", label: "Faster Recovery" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg">
      {/* Animated grid bg */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "linear-gradient(hsl(142 100% 45% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(142 100% 45% / 0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/6 w-64 h-64 rounded-full bg-primary/5 blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/30 bg-primary/10 text-neon text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse-neon" />
              AI-Powered Rehabilitation Technology
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-foreground mb-6">
              Built for Rehab Professionals for{" "}
              <span className="text-neon glow-text">Smarter & Enhanced</span>{" "}
              Patient Outcomes
            </h1>

            <p className="text-lg text-muted-foreground mb-10 max-w-lg">
              Ensuring patients adhere to protocols and keeping them motivated is challenging. Our solution leverages sensor AI synergy, gamified rehab protocols, and digital records to engage patients and drive meaningful outcomes.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg"
                className="bg-gradient-neon text-background font-bold text-base px-8 py-6 shadow-neon hover:shadow-neon transition-all duration-300 hover:scale-105">
                Book A Demo <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg"
                className="border-neon/40 text-foreground hover:border-neon hover:bg-primary/10 font-semibold text-base px-8 py-6 transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-gradient-neon flex items-center justify-center mr-3 shadow-neon-sm">
                  <Play className="w-3 h-3 text-background ml-0.5" />
                </div>
                Watch Video
              </Button>
            </div>

            <div className="flex flex-wrap gap-10">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-3xl font-extrabold text-neon glow-text">{s.value}</span>
                  <span className="text-sm text-muted-foreground mt-0.5">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — real hero image */}
          <div className="relative" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-neon">
              <img src={HERO_IMG} alt="SPOT sensor in rehabilitation session"
                className="w-full h-auto object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/30 to-transparent" />
            </div>

            {/* Floating weekday chart card */}
            <div className="absolute top-4 right-4 bg-dark-surface/95 backdrop-blur-sm rounded-xl shadow-card p-4 border border-neon/20 min-w-[160px]">
              <p className="text-xs text-muted-foreground mb-2 font-medium">Weekdays</p>
              <div className="flex items-end gap-1 h-12">
                {[71, 84, 56, 37, 82, 60].map((h, i) => (
                  <div key={i} className="bg-gradient-neon rounded-sm flex-1 transition-all"
                    style={{ height: `${(h / 84) * 100}%` }} />
                ))}
              </div>
              <div className="flex justify-between mt-1">
                {["M","T","W","T","F","S"].map((d, i) => (
                  <span key={i} className="text-[10px] text-muted-foreground">{d}</span>
                ))}
              </div>
            </div>

            {/* Floating session progress card */}
            <div className="absolute bottom-6 left-4 bg-dark-surface/95 backdrop-blur-sm rounded-xl shadow-card p-4 border border-neon/20 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/20 border border-neon/30 flex items-center justify-center">
                <BarChart2 className="w-5 h-5 text-neon" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Session Progress</div>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="h-2 w-24 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-neon rounded-full" style={{ width: "60%" }} />
                  </div>
                  <span className="text-xs text-neon font-bold">6/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
