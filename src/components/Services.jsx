import { services } from "@/data/portfolioData";

const COLORS = {
  "from-purple-600 to-blue-600": "rgba(124,58,237,.8),rgba(37,99,235,.8)",
  "from-blue-600 to-cyan-500":   "rgba(37,99,235,.8),rgba(6,182,212,.8)",
  "from-cyan-500 to-teal-500":   "rgba(6,182,212,.8),rgba(20,184,166,.8)",
  "from-teal-500 to-green-500":  "rgba(20,184,166,.8),rgba(34,197,94,.8)",
  "from-yellow-500 to-orange-500":"rgba(234,179,8,.8),rgba(249,115,22,.8)",
  "from-orange-500 to-pink-500": "rgba(249,115,22,.8),rgba(236,72,153,.8)",
  "from-pink-500 to-purple-600": "rgba(236,72,153,.8),rgba(124,58,237,.8)",
  "from-purple-600 to-indigo-600":"rgba(124,58,237,.8),rgba(79,70,229,.8)",
  "from-indigo-600 to-blue-600": "rgba(79,70,229,.8),rgba(37,99,235,.8)",
};

export default function Services() {
  return (
    <section id="services" className="relative" style={{ padding: "88px 24px" }}>
      <div className="gradient-divider" />
      <div className="max-w-7xl mx-auto">
        <div className="section-head reveal">
          <span className="section-label">What I Offer</span>
          <h2 className="section-title">Full-Stack Digital Marketing <span className="gradient-text">Services</span></h2>
          <p className="section-sub">From SEO to paid advertising, web development, and marketing automation — complete digital growth solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => {
            const clr = COLORS[svc.color] || "rgba(139,92,246,.8),rgba(59,130,246,.8)";
            const delay = (i % 6) * 0.09;
            return (
              <div key={svc.id} className="glass-card p-6 reveal" style={{ transitionDelay: `${delay}s` }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: `linear-gradient(135deg,${clr.split(",").map(c => c + "22").join(",")})`, border: `1px solid ${clr.split(",")[0]}44` }}>
                    {svc.icon}
                  </div>
                  <div className="w-1 h-10 rounded-full opacity-35" style={{ background: `linear-gradient(180deg,${clr})` }} />
                </div>
                <h3 className="font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: ".97rem" }}>{svc.title}</h3>
                <p className="mb-4" style={{ color: "var(--muted)", fontSize: ".8rem", lineHeight: 1.65 }}>{svc.description}</p>
                <ul className="space-y-1.5">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2" style={{ color: "#e2e8f0", fontSize: ".74rem" }}>
                      <span className="w-4 h-4 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ background: `linear-gradient(135deg,${clr})`, fontSize: "8px" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="gradient-divider" style={{ marginTop: "88px" }} />
    </section>
  );
}
