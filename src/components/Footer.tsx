import { Zap } from "lucide-react";

const links = {
  Product: ["Features", "SPOT Sensor", "SynapMove App", "Pricing", "Changelog"],
  Solutions: ["Neurological Rehab", "Sports Medicine", "MSK", "Cognitive Rehab"],
  Company: ["About Us", "Blog", "Careers", "Press Kit", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
};

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-neon/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-neon flex items-center justify-center shadow-neon-sm">
                <Zap className="w-4 h-4 text-background" />
              </div>
              <span className="text-xl font-bold text-foreground">RO<span className="text-neon">PODS</span></span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered motion intelligence for faster, smarter rehabilitation.
            </p>
          </div>
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <h5 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">{cat}</h5>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-neon transition-colors duration-200">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-neon/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} ROPODS Ltd. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Built with <span className="text-neon">♥</span> for clinicians worldwide</p>
        </div>
      </div>
    </footer>
  );
}
