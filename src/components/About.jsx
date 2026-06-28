import { personalInfo } from "@/data/portfolioData";

const timeline = [
  { year: "2019", event: "Started SEO career — launched first client campaigns in local SEO and content marketing." },
  { year: "2020", event: "Expanded into technical SEO audits and e-commerce SEO for Shopify and WooCommerce stores." },
  { year: "2021", event: "Added Google Ads and Meta Ads — managing 6-figure ad budgets across multiple industries." },
  { year: "2022", event: "Delivered 50+ healthcare and legal SEO case studies with top-3 ranking results." },
  { year: "2023", event: "Expanded into WordPress & Shopify development + HubSpot marketing automation." },
  { year: "2024–25", event: "Pioneering GEO (Generative Engine Optimization) for AI-powered search visibility." },
];

const highlights = [
  { icon: "🎯", label: "Specialization", value: "Technical & Local SEO" },
  { icon: "🌍", label: "Industries",     value: "50+ Industries Served" },
  { icon: "📊", label: "Clients",        value: "100+ Satisfied Clients" },
  { icon: "⚡", label: "Focus",          value: "ROI-Driven Results" },
];

export default function About() {
  return (
    <section id="about" className="relative" style={{ padding: "88px 24px" }}>
      <div className="max-w-7xl mx-auto">
        <div className="section-head reveal">
          <span className="section-label">About Me</span>
          <h2 className="section-title">The SEO Expert Behind <span className="gradient-text">100+ Success Stories</span></h2>
          <p className="section-sub">Passionate about organic growth, data-driven strategy, and turning search rankings into real business revenue.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="space-y-5 reveal">
            <div className="glass-card p-7">
              <h3 className="text-white font-bold mb-4 flex items-center gap-3" style={{ fontFamily: "var(--font-heading)", fontSize: "1rem" }}>
                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs text-white" style={{ background: "linear-gradient(135deg,#8b5cf6,#3b82f6)" }}>👤</span>
                Who I Am
              </h3>
              <div className="space-y-3" style={{ color: "var(--muted)", fontSize: ".86rem", lineHeight: "1.78" }}>
                <p>I'm <strong style={{ color: "#fff" }}>Muhtsan Ahmad</strong>, an SEO Specialist and Digital Marketing Expert with <strong style={{ color: "#a78bfa" }}>6+ years of hands-on experience</strong> helping businesses achieve sustainable organic growth.</p>
                <p>My expertise spans the full digital marketing spectrum — from deep technical SEO audits and local search dominance to e-commerce SEO, paid advertising, and development across <strong style={{ color: "#fff" }}>50+ industries</strong>.</p>
                <p>My approach is always <strong style={{ color: "#fff" }}>data-first</strong>: every strategy backed by research, every decision measured by ROI, and every campaign optimized for long-term, compounding results.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div key={h.label} className="glass-card p-4 flex items-center gap-3">
                  <span className="text-2xl">{h.icon}</span>
                  <div>
                    <div style={{ color: "var(--dim)", fontSize: ".68rem", fontWeight: 500 }}>{h.label}</div>
                    <div className="font-semibold text-white" style={{ fontSize: ".86rem" }}>{h.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2.5 text-xs uppercase tracking-wider">Core Skills</h4>
              <div className="flex flex-wrap gap-2">
                {personalInfo.expertise.map((s) => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
          </div>

          {/* Right — Timeline */}
          <div className="reveal reveal-d2 space-y-4">
            <div className="glass-card p-7">
              <h3 className="text-white font-bold mb-5 flex items-center gap-3" style={{ fontFamily: "var(--font-heading)", fontSize: "1rem" }}>
                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs text-white" style={{ background: "linear-gradient(135deg,#06b6d4,#8b5cf6)" }}>📅</span>
                My Journey
              </h3>
              <div>
                {timeline.map((t, i) => (
                  <div key={i} className="relative flex gap-4 pb-5 last:pb-0">
                    {i < timeline.length - 1 && <div className="absolute left-6 top-8 bottom-0 w-px" style={{ background: "rgba(139,92,246,.18)" }} />}
                    <div className="flex-shrink-0 w-12 h-7 rounded-md flex items-center justify-center text-xs font-bold z-10"
                      style={i === timeline.length - 1
                        ? { background: "linear-gradient(135deg,#8b5cf6,#3b82f6)", color: "#fff" }
                        : { background: "rgba(139,92,246,.1)", border: "1px solid rgba(139,92,246,.22)", color: "#a78bfa" }}>
                      {t.year}
                    </div>
                    <p style={{ color: "var(--muted)", fontSize: ".83rem", lineHeight: 1.6, paddingTop: "3px" }}>{t.event}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* GEO card */}
            <div className="p-5 rounded-2xl flex gap-4 items-start" style={{ background: "linear-gradient(135deg,rgba(139,92,246,.09),rgba(59,130,246,.09))", border: "1px solid rgba(139,92,246,.22)" }}>
              <span className="text-3xl">🤖</span>
              <div>
                <h4 className="text-white font-bold mb-1.5" style={{ fontFamily: "var(--font-heading)", fontSize: ".92rem" }}>GEO Optimized Strategies</h4>
                <p style={{ color: "var(--muted)", fontSize: ".8rem", lineHeight: 1.62 }}>
                  Beyond traditional SEO, I implement <strong style={{ color: "#a78bfa" }}>Generative Engine Optimization (GEO)</strong> — ensuring your brand appears in ChatGPT, Gemini & Perplexity search results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
