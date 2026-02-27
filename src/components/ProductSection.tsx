import spotSensor from "@/assets/spot-sensor.jpg";
import appDashboard from "@/assets/app-dashboard.jpg";
import { Check, Wifi, Battery, Shield, Smartphone, LineChart, Users } from "lucide-react";

const hardwareFeatures = [
  "Wireless IMU sensor — 9-axis motion capture",
  "Clinical-grade accuracy ±0.5°",
  "8-hour battery life",
  "Lightweight & water-resistant",
  "Instant Bluetooth pairing",
];

const softwareFeatures = [
  "Real-time movement analysis",
  "200+ exercise protocol library",
  "Automated progress reports",
  "Multi-patient dashboard",
  "EHR / EMR integration ready",
];

export default function ProductSection() {
  return (
    <section id="product" className="bg-dark-surface py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-neon text-sm font-semibold tracking-widest uppercase">
            Hardware & Software
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-3 mb-4">
            One Ecosystem. Total Control.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            The SPOT sensor and SynapMove app work seamlessly together, giving clinicians and patients everything they need.
          </p>
        </div>

        {/* Split panels */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* SPOT Hardware */}
          <div className="bg-gradient-card rounded-3xl border border-neon/10 overflow-hidden group hover:border-neon/30 transition-all duration-500">
            <div className="relative h-64 overflow-hidden">
              <img
                src={spotSensor}
                alt="SPOT sensor device"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/20 border border-neon/30 text-neon text-xs font-bold tracking-wider">
                HARDWARE
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">SPOT Sensor</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Precision wearable motion sensor designed for clinical rehab environments.
              </p>
              <ul className="space-y-3">
                {hardwareFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-neon mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-4">
                {[
                  { icon: Wifi, label: "Wireless" },
                  { icon: Battery, label: "8h Battery" },
                  { icon: Shield, label: "Medical Grade" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
                    <div className="w-9 h-9 rounded-lg border border-neon/20 bg-primary/5 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-neon" />
                    </div>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SynapMove Software */}
          <div className="bg-gradient-card rounded-3xl border border-neon/10 overflow-hidden group hover:border-neon/30 transition-all duration-500">
            <div className="relative h-64 overflow-hidden">
              <img
                src={appDashboard}
                alt="SynapMove dashboard"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-chart-3/20 border border-chart-3/30 text-chart-3 text-xs font-bold tracking-wider">
                SOFTWARE
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">SynapMove App</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Intelligent companion platform that turns data into actionable clinical insights.
              </p>
              <ul className="space-y-3">
                {softwareFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-neon mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-4">
                {[
                  { icon: Smartphone, label: "iOS & Android" },
                  { icon: LineChart, label: "Analytics" },
                  { icon: Users, label: "Multi-Patient" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
                    <div className="w-9 h-9 rounded-lg border border-neon/20 bg-primary/5 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-neon" />
                    </div>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
