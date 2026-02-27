import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, MapPin, Phone, Twitter, Linkedin, Youtube } from "lucide-react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-neon p-12 md:p-16 text-center shadow-neon mb-20">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "linear-gradient(hsl(0 0% 0% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 0% / 0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-extrabold text-background mb-4">
              Ready to Transform Your Clinic?
            </h2>
            <p className="text-background/80 text-lg max-w-xl mx-auto mb-8">
              Join 500+ physiotherapists delivering smarter, data-driven rehabilitation with ROPODS.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-background text-primary font-bold hover:bg-background/90 hover:scale-105 transition-all duration-300">
                Book A Demo <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg"
                className="border-background/40 text-background hover:bg-background/10 font-semibold">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Get in Touch</h3>
            <p className="text-muted-foreground mb-8">Have a question or want a personalised demo? We'd love to hear from you.</p>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First name" className="bg-dark-surface border-border focus:border-neon" />
                <Input placeholder="Last name" className="bg-dark-surface border-border focus:border-neon" />
              </div>
              <Input type="email" placeholder="Email address" className="bg-dark-surface border-border focus:border-neon" />
              <Input placeholder="Clinic / Organisation" className="bg-dark-surface border-border focus:border-neon" />
              <Textarea placeholder="How can we help you?" rows={4} className="bg-dark-surface border-border focus:border-neon resize-none" />
              <Button type="submit" className="w-full bg-gradient-neon text-background font-semibold shadow-neon-sm hover:shadow-neon transition-all">
                {sent ? "Message Sent ✓" : "Book A Demo"}
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-gradient-card rounded-2xl border border-neon/10 p-6">
              <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
              {[
                { icon: Mail, text: "hello@ropods.com" },
                { icon: Phone, text: "+44 (0) 20 1234 5678" },
                { icon: MapPin, text: "London, United Kingdom" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-muted-foreground mb-3 last:mb-0">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-neon/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-neon" />
                  </div>
                  {text}
                </div>
              ))}
            </div>

            <div className="bg-gradient-card rounded-2xl border border-neon/10 p-6">
              <h4 className="font-semibold text-foreground mb-1">Stay Updated</h4>
              <p className="text-sm text-muted-foreground mb-4">Clinical insights, product updates, and rehab tech news.</p>
              <div className="flex gap-2">
                <Input type="email" placeholder="your@email.com" className="bg-dark-bg border-border focus:border-neon" />
                <Button className="bg-gradient-neon text-background font-semibold shrink-0 shadow-neon-sm hover:shadow-neon">Subscribe</Button>
              </div>
            </div>

            <div className="bg-gradient-card rounded-2xl border border-neon/10 p-6">
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {[{ icon: Twitter, label: "Twitter" }, { icon: Linkedin, label: "LinkedIn" }, { icon: Youtube, label: "YouTube" }].map(({ icon: Icon, label }) => (
                  <button key={label} title={label}
                    className="w-10 h-10 rounded-lg border border-neon/20 bg-dark-bg flex items-center justify-center text-muted-foreground hover:text-neon hover:border-neon/50 hover:shadow-neon-sm transition-all duration-200">
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
