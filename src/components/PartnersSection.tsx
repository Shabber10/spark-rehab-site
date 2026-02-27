// Real partner logos from ropods.com
const partners = [
  { name: "Atra Sports Science Centre", logo: "https://cdn.sanity.io/images/u19lik37/production/12720c20b094ca3cfc52f09c5bd4d21c817f335c-200x200.jpg" },
  { name: "Sports Authority of India", logo: "https://cdn.sanity.io/images/u19lik37/production/533f28fa5f2f8f499eb5bf476455659ddcdb2b5b-361x277.svg" },
  { name: "Advanced Physiotherapy", logo: "https://advancedphysio.in/wp-content/uploads/2025/09/logo-1.png" },
  { name: "CAPAAR", logo: "https://capaar4autism.com/wp-content/uploads/2019/07/capaar-logo-2.jpg" },
  { name: "Physio at Flow", logo: "https://cdn.sanity.io/images/u19lik37/production/ad962cf96cc1216fb53556fb31c5ff1229979277-150x150.jpg" },
  { name: "JK Physio and Rehab", logo: "https://cdn.sanity.io/images/u19lik37/production/2bb3ecaf764945ed2b85ace7fc733b5ab123ad68-225x225.png" },
  { name: "Maximus", logo: "https://cdn.sanity.io/images/u19lik37/production/f79b6f79062c43b602328bab2358a6b3a90e4ab7-1080x1080.jpg" },
  { name: "The Rehab House", logo: "https://cdn.sanity.io/images/u19lik37/production/c13469b6b1eb08b290c2aaec92eb118506531313-150x150.jpg" },
  { name: "Aster Hospitals", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Aster_DM_Healthcare_Logo.svg/250px-Aster_DM_Healthcare_Logo.svg.png" },
  { name: "Manipal Hospitals", logo: "https://www.manipalhospitals.com/assets/images/homepage/logo.gif" },
  { name: "NIMHANS", logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Nimhans_logo.png" },
  { name: "Sakra World Hospital", logo: "https://yt3.googleusercontent.com/wtPktDpcD6GYNGT3IKgN3zuXB_T-NQhCEGgK31Q7ws7onId_UjwVjE8GSWptxdcS0da400wxog=s160-c-k-c0x00ffffff-no-rj" },
  { name: "RV College of Physiotherapy", logo: "https://www.rvcp.edu.in/wp-content/uploads/2024/05/cropped-Logo-2-2-2048x832.png" },
  { name: "Mission Walk", logo: "https://www.missionwalk.rehab/images/logo.png" },
];

export default function PartnersSection() {
  const doubled = [...partners, ...partners];
  return (
    <section className="py-14 bg-dark-bg overflow-hidden border-y border-neon/10">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-neon">
          Trusted by Rehab Professionals Who Care
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="animate-marquee">
          {doubled.map((p, i) => (
            <div key={i} className="flex items-center justify-center mx-8 min-w-[140px] h-14">
              <img
                src={p.logo}
                alt={p.name}
                title={p.name}
                className="max-h-10 max-w-[120px] object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = "none";
                  const span = document.createElement("span");
                  span.className = "text-xs text-muted-foreground font-semibold";
                  span.textContent = p.name;
                  el.parentNode?.appendChild(span);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
