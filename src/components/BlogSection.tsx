const blogs = [
  {
    title: "Measuring Engagement in Rehab Programs: Why Participation Matters as Much as Prescription",
    date: "January 19, 2026",
    excerpt: "Discover why patient engagement is critical in physiotherapy and how modern rehab tools help measure, improve, and sustain participation.",
    img: "https://cdn.sanity.io/images/u19lik37/production/541b0e589683c4be045198402c2ef9eb22cca6e3-900x512.png?rect=66,0,768,512&w=600&h=400&fit=crop",
    href: "https://www.ropods.com/blog/a154e1e6-ad6a-4c6c-8be4-c544ead5fa39",
  },
  {
    title: "Wearables in Physiotherapy: What Clinicians Should Know",
    date: "January 19, 2026",
    excerpt: "Explore how wearable technology is transforming physiotherapy through objective movement tracking, real-time feedback, and data-driven care.",
    img: "https://cdn.sanity.io/images/u19lik37/production/6397e929e951d79173035fcf6fb361a377dad626-908x508.png?rect=73,0,762,508&w=600&h=400&fit=crop",
    href: "https://www.ropods.com/blog/3685da82-2962-470e-a064-f544c391ab4f",
  },
  {
    title: "Gamification in Rehab: Does It Improve Adherence?",
    date: "January 19, 2026",
    excerpt: "Discover how gamification improves rehab adherence, motivation, and outcomes through interactive, measurable physiotherapy programs.",
    img: "https://cdn.sanity.io/images/u19lik37/production/4305e8a8720e7c926059ea842d8628e7ef9603fd-2242x1598.png?rect=0,52,2242,1495&w=600&h=400&fit=crop",
    href: "https://www.ropods.com/blog/8cca438d-97de-4b6c-8a4f-67a8903a3f80",
  },
];

export default function BlogSection() {
  return (
    <section id="resources" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3">
            Blogs & Articles
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Latest from ROPODS
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((post) => (
            <a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background rounded-2xl overflow-hidden border border-border hover:shadow-card hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x400?text=ROPODS+Blog";
                  }}
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
                <h3 className="text-sm font-bold text-foreground mb-2 leading-snug line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                <span className="text-primary text-xs font-semibold group-hover:underline">
                  View Post →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
