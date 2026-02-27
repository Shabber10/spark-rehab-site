const footerLinks = {
  Product: ["SPOT Sensor", "SynapMove App", "How It Works", "Pricing"],
  Solutions: ["Neuro-Motor Rehab", "Neuro-Cognition", "MSK Rehab", "Sports Rehab"],
  Company: ["About Us", "Blog", "Contact Us", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="text-xl font-bold tracking-widest mb-3">ROPODS</div>
            <p className="text-sm text-background/60 leading-relaxed">
              Redefining recovery and performance through intelligent rehab technology.
            </p>
          </div>
          {Object.entries(footerLinks).map(([cat, items]) => (
            <div key={cat}>
              <h5 className="text-xs font-bold tracking-widest uppercase text-background/50 mb-4">{cat}</h5>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-background/50">© {new Date().getFullYear()} ROPODS. All rights reserved.</p>
          <p className="text-sm text-background/40">Built for rehab professionals worldwide</p>
        </div>
      </div>
    </footer>
  );
}
