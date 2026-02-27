import spotSensor from "@/assets/spot-sensor.jpg";
import appImg from "@/assets/synapmove-app.jpg";
import { Check } from "lucide-react";

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
    <section id="spot" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* Hardware */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Hardware</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet SPOT – The Future of Smarter Recovery
            </h2>
            <ul className="space-y-3 mb-8">
              {hardwareFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <span className="mt-1 w-5 h-5 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#spot" className="text-primary font-semibold hover:underline text-sm">
              Learn More...
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img src={spotSensor} alt="SPOT sensor device" className="w-full object-cover" />
          </div>
        </div>

        {/* Software */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-card">
            <img src={appImg} alt="SynapMove app" className="w-full object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Software</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The SynapMove App
            </h2>
            <ul className="space-y-3 mb-8">
              {softwareFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <span className="mt-1 w-5 h-5 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.ropods.spotpt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-sm font-semibold rounded-lg hover:bg-foreground/85 transition-colors"
              >
                Get on Google Play
              </a>
              <a
                href="https://apps.apple.com/in/app/synapmove/id6752775216"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-sm font-semibold rounded-lg hover:bg-foreground/85 transition-colors"
              >
                Download on App Store
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
