"use client";
import { useState, useEffect } from "react";
import blogPosts from "@/data/blogPosts";

const BLOG_KEY = "muhtsan_blogs";
const ICONS = { "Local SEO":"📍","Technical SEO":"⚙️","E-commerce SEO":"🛒","Content Strategy":"✍️","Link Building":"🔗","Google Ads":"📊","Meta Ads":"📱","WordPress":"🌐","Shopify":"🏪","GEO Optimization":"🤖","General SEO":"🔍" };
const getIcon = (cat) => { for (const k in ICONS) if (cat?.includes(k)) return ICONS[k]; return "📝"; };

export default function Blog({ onSelectPost }) {
  const [allPosts, setAllPosts] = useState([]);
  const [cat, setCat] = useState("All");

  useEffect(() => {
    // Merge static posts with localStorage posts (admin-added)
    let local = [];
    try { local = JSON.parse(localStorage.getItem(BLOG_KEY) || "[]"); } catch {}
    // Merge: localStorage posts override static posts with same id; new local posts added on top
    const staticIds = new Set(blogPosts.map((p) => p.id));
    const localOnly = local.filter((p) => !staticIds.has(p.id));
    const merged = [...localOnly, ...blogPosts];
    setAllPosts(merged.sort((a, b) => new Date(b.date) - new Date(a.date)));
  }, []);

  const cats = ["All", ...Array.from(new Set(allPosts.map((p) => p.category)))];
  const filtered = cat === "All" ? allPosts : allPosts.filter((p) => p.category === cat);

  return (
    <div style={{ padding: "88px 24px", minHeight: "100vh" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-5 mb-10">
          <div>
            <span className="section-label">Blog</span>
            <h2 className="section-title mb-2">SEO <span className="gradient-text">Insights & Guides</span></h2>
            <p style={{ color: "var(--muted)", fontSize: ".9rem" }}>Expert tips, case studies, and actionable SEO strategies</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button key={c} onClick={() => setCat(c)} className="tab-btn" style={cat === c ? { background: "rgba(139,92,246,.15)", borderColor: "rgba(139,92,246,.36)", color: "#c4b5fd" } : {}}>
                {c}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-5xl mb-4">📝</div>
            <h3 className="font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>No posts yet</h3>
            <p style={{ color: "var(--muted)", fontSize: ".88rem" }}>Blog posts will appear here. Use the Admin Panel (🔐 bottom-left) to add posts.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <div key={post.id} className="glass-card blog-card overflow-hidden rounded-2xl" onClick={() => onSelectPost(post)}>
                {post.image ? (
                  <img src={post.image} alt={post.title} style={{ width: "100%", height: "160px", objectFit: "cover" }} />
                ) : (
                  <div style={{ height: "160px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.8rem", background: "linear-gradient(135deg,rgba(139,92,246,.2),rgba(59,130,246,.2))", borderBottom: "1px solid var(--border)" }}>
                    {getIcon(post.category)}
                  </div>
                )}
                <div style={{ padding: "18px" }}>
                  <div style={{ color: "var(--purple)", fontSize: ".68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: "7px" }}>{post.category}</div>
                  <h3 className="font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: ".95rem", lineHeight: 1.4 }}>{post.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: ".79rem", lineHeight: 1.65, marginBottom: "12px" }}>
                    {post.excerpt.length > 130 ? post.excerpt.slice(0, 130) + "..." : post.excerpt}
                  </p>
                  <div className="flex items-center gap-3" style={{ fontSize: ".7rem", color: "var(--dim)" }}>
                    <span>📅 {post.date}</span>
                    <span>⏱ {post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-3 font-semibold" style={{ color: "var(--purple)", fontSize: ".73rem" }}>
                    Read Article ↗
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
