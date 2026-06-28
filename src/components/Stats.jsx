"use client";
import { useEffect, useRef, useState } from "react";
import { stats, testimonials } from "@/data/portfolioData";

function useCountUp(target, started) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    const s = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const tick = (n) => {
      const p = Math.min((n - s) / 2000, 1);
      setCount(Math.round(ease(p) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, started]);
  return count;
}

function StatCard({ stat, started }) {
  const count = useCountUp(stat.value, started);
  return (
    <div className="glass-card p-7 text-center">
      <div className="stat-number">{count}{stat.suffix}</div>
      <div className="mt-2 font-medium" style={{ color: "var(--muted)", fontSize: ".8rem" }}>{stat.label}</div>
    </div>
  );
}

const WHY = [
  { icon:"📈", title:"Data-Driven",   desc:"Every strategy backed by real analytics and KPI tracking." },
  { icon:"🏆", title:"Proven Results",desc:"200+ case studies across every major industry sector." },
  { icon:"🤖", title:"AI-Ready SEO",  desc:"GEO optimization for ChatGPT, Gemini & Perplexity." },
  { icon:"🔄", title:"Full-Funnel",   desc:"From organic SEO to paid ads, dev, and automation." },
];

export default function Stats() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stats" className="relative" style={{ padding: "88px 24px" }}>
      <div className="gradient-divider" />
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20 reveal">
          {stats.map((s, i) => <StatCard key={i} stat={s} started={started} />)}
        </div>

        {/* Testimonials */}
        <div className="section-head reveal">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What <span className="gradient-text">Clients Say</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 reveal">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-6 flex flex-col gap-4">
              <div style={{ color: "#f59e0b", fontSize: ".85rem" }}>{"★".repeat(t.rating)}</div>
              <p className="flex-1" style={{ color: "#cbd5e1", fontSize: ".83rem", lineHeight: 1.72 }}>"{t.text}"</p>
              <div className="flex items-center gap-3 pt-2.5" style={{ borderTop: "1px solid rgba(255,255,255,.05)" }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style={{ background: "linear-gradient(135deg,#8b5cf6,#3b82f6)", fontSize: ".78rem" }}>{t.name[0]}</div>
                <div>
                  <div className="font-semibold text-white" style={{ fontSize: ".83rem" }}>{t.name}</div>
                  <div style={{ color: "var(--dim)", fontSize: ".7rem" }}>{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why choose me */}
        <div className="p-8 rounded-2xl reveal" style={{ background: "linear-gradient(135deg,rgba(139,92,246,.08),rgba(59,130,246,.08))", border: "1px solid rgba(139,92,246,.2)" }}>
          <h3 className="font-bold text-center text-white mb-8" style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem" }}>
            Why Businesses Choose <span className="gradient-text">Muhtsan Ahmad</span>
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY.map((w) => (
              <div key={w.title} className="text-center">
                <div className="text-3xl mb-3">{w.icon}</div>
                <h4 className="font-bold text-white mb-1.5" style={{ fontFamily: "var(--font-heading)", fontSize: ".92rem" }}>{w.title}</h4>
                <p style={{ color: "var(--muted)", fontSize: ".78rem", lineHeight: 1.62 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="gradient-divider" style={{ marginTop: "88px" }} />
    </section>
  );
}
