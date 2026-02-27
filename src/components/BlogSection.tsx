// Real blog images from ropods.com CDN
const blogs = [
  {
    title: "Measuring Engagement in Rehab Programs: Why Participation Matters as Much as Prescription",
    date: "January 19, 2026",
    excerpt: "Discover why patient engagement is critical in physiotherapy and how modern rehab tools help measure, improve, and sustain participation.",
    img: "https://cdn.sanity.io/images/u19lik37/production/541b0e589683c4be045198402c2ef9eb22cca6e3-900x512.png?rect=66,0,768,512&w=800&h=533&fit=crop",
    href: "https://www.ropods.com/blog/a154e1e6-ad6a-4c6c-8be4-c544ead5fa39",
  },
  {
    title: "Wearables in Physiotherapy: What Clinicians Should Know",
    date: "January 19, 2026",
    excerpt: "Explore how wearable technology is transforming physiotherapy through objective movement tracking, real-time feedback, and data-driven care.",
    img: "https://cdn.sanity.io/images/u19lik37/production/6397e929e951d79173035fcf6fb361a377dad626-908x508.png?rect=73,0,762,508&w=800&h=533&fit=crop",
    href: "https://www.ropods.com/blog/3685da82-2962-470e-a064-f544c391ab4f",
  },
  {
    title: "Gamification in Rehab: Does It Improve Adherence?",
    date: "January 19, 2026",
    excerpt: "Discover how gamification improves rehab adherence, motivation, and outcomes through interactive, measurable physiotherapy programs.",
    img: "https://cdn.sanity.io/images/u19lik37/production/4305e8a8720e7c926059ea842d8628e7ef9603fd-2242x1598.png?rect=0,52,2242,1495&w=800&h=533&fit=crop",
    href: "https://www.ropods.com/blog/8cca438d-97de-4b6c-8a4f-67a8903a3f80",
  },
  {
    title: "Rehab After COVID: Long-Term Functional Recovery",
    date: "January 19, 2026",
    excerpt: "Long-term COVID recovery often requires physiotherapy. Learn how rehab restores strength, breathing, balance, and confidence after COVID.",
    img: "https://cdn.sanity.io/images/u19lik37/production/edd4c20fe62abcc70521e0259784e336dfdfd3e6-772x516.png?rect=0,1,772,515&w=800&h=533&fit=crop",
    href: "https://www.ropods.com/blog/b980623c-f4db-4727-9a39-bceeda3528ec",
  },
];

export default function BlogSection() {
  return (
    <section id="resources" className="py-24 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-neon text-xs font-bold tracking-widest uppercase">Blogs & Articles</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-3">
            Latest from ROPODS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((post) => (
            <a key={post.title} href={post.href} target="_blank" rel="noopener noreferrer"
              className="bg-gradient-card rounded-2xl overflow-hidden border border-neon/10 hover:border-neon/40 hover:shadow-neon transition-all duration-300 group">
              <div className="h-44 overflow-hidden">
                <img src={post.img} alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <p className="text-xs text-neon mb-2 font-medium">{post.date}</p>
                <h3 className="text-sm font-bold text-foreground mb-2 leading-snug line-clamp-2">{post.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
                <span className="text-neon text-xs font-semibold group-hover:glow-text transition-all">View Post →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
