"use client";
import { useState } from "react";
import { industrySeoCaseStudies, completeSEOCaseStudies, technicalSEOCaseStudies, contentStrategyCaseStudies, paidAdsCaseStudies, automationCaseStudies, developmentProjects } from "@/data/portfolioData";

const TABS = [
  { id:"industry", label:"🏥 SEO by Industry" },
  { id:"complete", label:"🔍 Complete SEO" },
  { id:"technical", label:"⚙️ Technical SEO" },
  { id:"content",  label:"✍️ Content Strategy" },
  { id:"ads",      label:"📊 Paid Ads" },
  { id:"auto",     label:"🤖 Automation" },
  { id:"dev",      label:"🛠️ Development" },
];
const BADGE_CLR = {
  Healthcare:"rgba(16,185,129,.13)",Legal:"rgba(59,130,246,.13)","Home Services":"rgba(245,158,11,.13)",Automotive:"rgba(239,68,68,.13)","Real Estate":"rgba(139,92,246,.13)","E-commerce":"rgba(6,182,212,.13)","E-commerce & Retail":"rgba(6,182,212,.13)",Tourism:"rgba(34,197,94,.13)",Optical:"rgba(99,102,241,.13)",Hospitality:"rgba(249,115,22,.13)",FinTech:"rgba(16,185,129,.13)",Finance:"rgba(59,130,246,.13)",SaaS:"rgba(139,92,246,.13)",Rental:"rgba(245,158,11,.13)",Travel:"rgba(6,182,212,.13)",Dental:"rgba(236,72,153,.13)",Lifestyle:"rgba(251,191,36,.13)",Retail:"rgba(239,68,68,.13)",HubSpot:"rgba(249,115,22,.13)",Webflow:"rgba(59,130,246,.13)",
};

function CsCard({ item }) {
  const bg = BADGE_CLR[item.badge] || "rgba(139,92,246,.13)";
  const br = bg.replace(".13", ".32");
  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer" className="glass-card cs-card p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <h4 className="font-bold text-white" style={{ fontFamily: "var(--font-heading)", fontSize: ".88rem", lineHeight: 1.3 }}>{item.client}</h4>
        {item.badge && <span className="badge" style={{ background: bg, border: `1px solid ${br}`, color: "#e2e8f0" }}>{item.badge}</span>}
      </div>
      {item.title && <p style={{ color: "var(--dim)", fontSize: ".7rem" }}>{item.title}</p>}
      <div className="flex flex-wrap gap-1.5">{item.services?.map((s) => <span key={s} className="tag">{s}</span>)}</div>
      <div className="flex items-center gap-1.5 mt-auto pt-0.5 font-medium" style={{ color: "var(--purple)", fontSize: ".72rem" }}>
        View Case Study
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
      </div>
    </a>
  );
}

function DevCard({ item, type }) {
  const wp = type === "wordpress";
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="glass-card cs-card p-3.5 flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0" style={{ fontSize: ".6rem", background: wp ? "linear-gradient(135deg,#60a5fa,#2563eb)" : "linear-gradient(135deg,#34d399,#059669)", fontFamily: "var(--font-heading)" }}>
        {wp ? "WP" : "SH"}
      </div>
      <div className="min-w-0 flex-1">
        <div className="font-semibold text-white truncate" style={{ fontSize: ".84rem" }}>{item.name}</div>
        <div style={{ color: "var(--dim)", fontSize: ".68rem" }}>{wp ? "WordPress + PHP" : "Shopify Store"}</div>
      </div>
      <svg className="w-3 h-3 flex-shrink-0" style={{ color: "var(--dim)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
    </a>
  );
}

export default function CaseStudies() {
  const [tab, setTab] = useState("industry");
  const [ind, setInd]   = useState("All");

  const industries = ["All", ...Object.keys(industrySeoCaseStudies)];
  const indItems = ind === "All" ? Object.values(industrySeoCaseStudies).flat() : industrySeoCaseStudies[ind] || [];

  const Grid = ({ items }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, i) => <CsCard key={i} item={item} />)}
    </div>
  );

  return (
    <section id="portfolio" className="relative" style={{ padding: "88px 24px" }}>
      <div className="max-w-7xl mx-auto">
        <div className="section-head reveal">
          <span className="section-label">Case Studies</span>
          <h2 className="section-title">Proven Results Across <span className="gradient-text">Every Industry</span></h2>
          <p className="section-sub">200+ real-world case studies, development projects, and marketing campaigns — each with a direct link to the full report.</p>
        </div>

        {/* Main tabs */}
        <div className="flex flex-wrap gap-2 mb-6 reveal">
          {TABS.map((t) => (
            <button key={t.id} className={`tab-btn${tab === t.id ? " active" : ""}`} onClick={() => { setTab(t.id); setInd("All"); }}>{t.label}</button>
          ))}
        </div>

        {/* Tab content */}
        {tab === "industry" && (
          <div>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {industries.map((i) => (
                <button key={i} onClick={() => setInd(i)} className="tab-btn" style={{ padding: "5px 12px", fontSize: ".72rem", ...(ind === i ? { background: "rgba(139,92,246,.14)", borderColor: "rgba(139,92,246,.34)", color: "#a78bfa" } : {}) }}>{i}</button>
              ))}
            </div>
            <Grid items={indItems} />
          </div>
        )}
        {tab === "complete" && <div><p className="text-sm mb-4" style={{ color: "var(--muted)" }}>Full-service SEO campaigns — strategy, technical, content & link building combined.</p><Grid items={completeSEOCaseStudies} /></div>}
        {tab === "technical" && <div><p className="text-sm mb-4" style={{ color: "var(--muted)" }}>Technical audits, Core Web Vitals, on-page optimization, and authority building.</p><Grid items={technicalSEOCaseStudies} /></div>}
        {tab === "content"  && <div><p className="text-sm mb-4" style={{ color: "var(--muted)" }}>Keyword research, content planning, and optimization for organic growth.</p><Grid items={contentStrategyCaseStudies} /></div>}
        {tab === "ads"      && <div><p className="text-sm mb-4" style={{ color: "var(--muted)" }}>Google Ads and Meta Ads campaigns with proven ROI across multiple industries.</p><Grid items={paidAdsCaseStudies} /></div>}
        {tab === "auto"     && <div><p className="text-sm mb-4" style={{ color: "var(--muted)" }}>HubSpot CRM integration, workflow automation, and Webflow development.</p><Grid items={automationCaseStudies} /></div>}
        {tab === "dev" && (
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs" style={{ background: "linear-gradient(135deg,#60a5fa,#2563eb)", fontFamily: "var(--font-heading)" }}>WP</div>
                <span className="font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>WordPress Development</span>
                <span className="tag">PHP · CSS · HTML · Custom Themes</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {developmentProjects.wordpress.map((p, i) => <DevCard key={i} item={p} type="wordpress" />)}
              </div>
            </div>
            <div className="gradient-divider" />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs" style={{ background: "linear-gradient(135deg,#34d399,#059669)", fontFamily: "var(--font-heading)" }}>SH</div>
                <span className="font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>Shopify Development</span>
                <span className="tag">Store Setup · SEO · Conversion</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {developmentProjects.shopify.map((p, i) => <DevCard key={i} item={p} type="shopify" />)}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
