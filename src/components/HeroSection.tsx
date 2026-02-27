import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Activity } from "lucide-react";

const stats = [
  { value: "500+", label: "Clinics Worldwide" },
  { value: "98%", label: "User Satisfaction" },
  { value: "3×", label: "Faster Recovery" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Motion capture visualization"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/60 via-dark-bg/40 to-dark-bg" />
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(hsl(158 100% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(158 100% 50% / 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/6 w-64 h-64 rounded-full bg-primary/5 blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/30 bg-primary/10 text-neon text-sm font-medium mb-8 animate-fade-up">
            <Activity className="w-4 h-4" />
            AI-Powered Rehabilitation Technology
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl font-extrabold leading-tight text-foreground mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Motion Intelligence
            <br />
            for{" "}
            <span className="text-neon glow-text">Faster Recovery</span>
          </h1>

          {/* Tagline */}
          <p
            className="text-xl md:text-2xl text-muted-foreground font-light mb-4 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Train • Track • Transform
          </p>
          <p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mb-10 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            ROPODS combines the SPOT sensor with the SynapMove platform to deliver
            clinically proven, gamified rehabilitation that physiotherapists and patients love.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap items-center gap-4 mb-16 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-neon text-background font-bold text-base px-8 py-6 shadow-neon hover:shadow-neon transition-all duration-300 hover:scale-105"
            >
              Book a Live Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-neon/40 text-foreground hover:border-neon hover:bg-primary/10 font-semibold text-base px-8 py-6 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-neon flex items-center justify-center mr-3 shadow-neon-sm">
                <Play className="w-3 h-3 text-background ml-0.5" />
              </div>
              Watch Product Video
            </Button>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-10 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl font-extrabold text-neon glow-text">{stat.value}</span>
                <span className="text-sm text-muted-foreground mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 neon-line" />
      </div>
    </section>
  );
}
