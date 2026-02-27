// Real image from ropods.com about section
const ABOUT_VIDEO_THUMB = "https://www.ropods.com/_next/image?url=%2Fhome%2Fhero%2Fhero.png&w=1200&q=75";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-neon">
            <img
              src={ABOUT_VIDEO_THUMB}
              alt="ROPODS rehabilitation technology"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/60 to-transparent" />
            <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-primary/20 border border-neon/30 text-neon text-xs font-bold tracking-wider">
              ROPODS TECHNOLOGY
            </div>
          </div>

          {/* Text */}
          <div className="bg-gradient-card rounded-2xl border border-neon/10 p-10">
            <span className="text-neon text-xs font-bold tracking-widest uppercase">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Redefining Recovery in Clinical Practice
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              ROPODS is a rehab tech company specialising in redefining recovery and performance in clinical practice through a comprehensive hardware and software ecosystem. By integrating intelligent sensors, adaptive protocols, and therapist-first workflows, it offers a smarter way for rehab professionals to improve compliance, access real-time data, and achieve stronger patient recoveries.
            </p>
            <a href="https://www.ropods.com/aboutus" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neon font-semibold hover:glow-text transition-all">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
