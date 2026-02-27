const partners = [
  "Atra Sports Science Centre",
  "Prakash Padukone Badminton Academy",
  "Sports Authority of India",
  "Advanced Physiotherapy",
  "CAPAAR",
  "Physio at Flow",
  "JK Physio and Rehab",
  "Maximus",
  "Synchrony Chiropractic",
  "The Rehab House",
  "Aster Hospitals",
  "Manipal Hospitals",
  "Mission Walk",
  "NIMHANS",
  "Sakra World Hospital",
  "RV College of Physiotherapy",
];

// Use logo images from the real site where available
const logoUrls: Record<string, string> = {
  "Aster Hospitals": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Aster_DM_Healthcare_Logo.svg/250px-Aster_DM_Healthcare_Logo.svg.png",
  "Sports Authority of India": "https://cdn.sanity.io/images/u19lik37/production/533f28fa5f2f8f499eb5bf476455659ddcdb2b5b-361x277.svg",
  "NIMHANS": "https://upload.wikimedia.org/wikipedia/en/0/0c/Nimhans_logo.png",
};

export default function PartnersSection() {
  const doubled = [...partners, ...partners];

  return (
    <section className="py-14 bg-surface overflow-hidden border-y border-border">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
          Trusted by Rehab Professionals Who Care
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="animate-marquee">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-8 min-w-[160px]"
            >
              {logoUrls[name] ? (
                <img
                  src={logoUrls[name]}
                  alt={name}
                  className="h-8 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              ) : (
                <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap hover:text-foreground transition-colors">
                  {name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
