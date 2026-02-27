import spotHero from "@/assets/spot-hero.jpg";
import { Button } from "@/components/ui/button";
import { BarChart2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen pt-20 bg-background flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-foreground mb-6">
              Built for Rehab Professionals for Smarter &amp; Enhanced Patient Outcomes
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Ensuring patients adhere to protocols and keeping them motivated is challenging. Our solution leverages sensor AI synergy, gamified rehab protocols, and digital records to engage patients and drive meaningful outcomes.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground font-bold text-base px-8 py-6 shadow-green hover:bg-primary/90 hover:shadow-none transition-all duration-300"
            >
              Book A Demo
            </Button>
          </div>

          {/* Right — hero image with floating UI cards */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={spotHero}
                alt="SPOT sensor in rehabilitation session"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute top-4 right-4 bg-background rounded-xl shadow-card p-4 border border-border min-w-[160px]">
              <p className="text-xs text-muted-foreground mb-2 font-medium">Weekdays</p>
              <div className="flex items-end gap-1 h-12">
                {[71, 84, 56, 37, 82, 60].map((h, i) => (
                  <div
                    key={i}
                    className="bg-primary rounded-sm flex-1 transition-all"
                    style={{ height: `${(h / 84) * 100}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1">
                {["M", "T", "W", "T", "F", "S"].map((d) => (
                  <span key={d} className="text-[10px] text-muted-foreground">{d}</span>
                ))}
              </div>
            </div>

            {/* Floating session card */}
            <div className="absolute bottom-6 left-4 bg-background rounded-xl shadow-card p-4 border border-border flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-green-light flex items-center justify-center">
                <BarChart2 className="w-5 h-5 text-brand-green" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Session Progress</div>
                <div className="flex items-center gap-1 mt-0.5">
                  <div className="h-2 w-24 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "60%" }} />
                  </div>
                  <span className="text-xs text-muted-foreground">6/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
