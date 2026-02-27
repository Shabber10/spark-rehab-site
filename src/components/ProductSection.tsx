import { Check, Wifi, Battery, Shield, Smartphone, LineChart, Users } from "lucide-react";

// Real images from ropods.com
const HARDWARE_IMG = "https://www.ropods.com/_next/image?url=%2Fhome%2Fhowitworks%2Fhardware.svg&w=1200&q=75";
const SOFTWARE_IMG = "https://www.ropods.com/_next/image?url=%2Fhome%2Fhowitworks%2Fsoftware.png&w=1920&q=75";

const hardwareFeatures = [
  "Sensor-based, wireless devices that track patient movement with precision.",
  "Real-time biofeedback to guide patients through correct motions.",
  "Gamified rehab protocols to make rehab and recovery both fun and engaging.",
  "Portable design for use in clinic or home-care settings.",
  "Data integration with the SynapMove app for seamless record-keeping.",
];

const softwareFeatures = [
  "Smart scheduling tools to improve your efficiency",
  "Comprehensive exercise library with customizable protocols",
  "Gamification to engage and motivate patients",
  "AI-powered analytics to track outcomes and adherence",
  "Comprehensive patient records with history and trend tracking",
];

export default function ProductSection() {
  return (
    <section id="spot" className="py-24 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* HARDWARE */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-neon text-xs font-bold tracking-widest uppercase">Hardware</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3 mb-6">
              Meet SPOT – The Future of Smarter Recovery
            </h2>
            <ul className="space-y-3 mb-8">
              {hardwareFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/15 border border-neon/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-neon" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 mb-8">
              {[{ icon: Wifi, label: "Wireless" }, { icon: Battery, label: "8h Battery" }, { icon: Shield, label: "Medical Grade" }].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
                  <div className="w-9 h-9 rounded-lg border border-neon/20 bg-primary/5 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-neon" />
                  </div>
                  {label}
                </div>
              ))}
            </div>
            <a href="https://www.ropods.com/spot" target="_blank" rel="noopener noreferrer"
              className="text-neon font-semibold hover:glow-text transition-all text-sm">
              Learn More... →
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-neon/10 shadow-neon bg-dark-bg flex items-center justify-center p-8">
            <img src={HARDWARE_IMG} alt="SPOT sensor device stack"
              className="w-full max-w-sm object-contain animate-float"
              onError={(e) => { (e.target as HTMLImageElement).src = "https://www.ropods.com/home/howitworks/hardware.svg"; }} />
          </div>
        </div>

        {/* SOFTWARE */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden border border-neon/10 shadow-neon">
            <img src={SOFTWARE_IMG} alt="SynapMove app on smartphone"
              className="w-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0.5"; }} />
          </div>
          <div>
            <span className="text-neon text-xs font-bold tracking-widest uppercase">Software</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3 mb-6">
              The SynapMove App
            </h2>
            <ul className="space-y-3 mb-8">
              {softwareFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/15 border border-neon/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-neon" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 mb-8">
              {[{ icon: Smartphone, label: "iOS & Android" }, { icon: LineChart, label: "Analytics" }, { icon: Users, label: "Multi-Patient" }].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
                  <div className="w-9 h-9 rounded-lg border border-neon/20 bg-primary/5 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-neon" />
                  </div>
                  {label}
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <a href="https://play.google.com/store/apps/details?id=com.ropods.spotpt" target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 bg-dark-bg border border-neon/30 text-foreground text-sm font-semibold rounded-lg hover:border-neon hover:shadow-neon-sm transition-all duration-200 flex items-center gap-2">
                <span>▶</span> Google Play
              </a>
              <a href="https://apps.apple.com/in/app/synapmove/id6752775216" target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 bg-dark-bg border border-neon/30 text-foreground text-sm font-semibold rounded-lg hover:border-neon hover:shadow-neon-sm transition-all duration-200 flex items-center gap-2">
                <span>🍎</span> App Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
