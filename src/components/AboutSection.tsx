import physioImg from "@/assets/physio-session.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img
              src={physioImg}
              alt="Physiotherapy session"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div className="bg-secondary rounded-2xl p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">Who We Are?</h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              ROPODS is a rehab tech company specialising in redefining recovery and performance in clinical practice through a comprehensive hardware and software ecosystem. By integrating intelligent sensors, adaptive protocols, and therapist-first workflows, it offers a smarter way for rehab professionals to improve compliance, access real-time data, and achieve stronger patient recoveries.
            </p>
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
