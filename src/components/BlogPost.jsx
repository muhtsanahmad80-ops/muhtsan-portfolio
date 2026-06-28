import { personalInfo } from "@/data/portfolioData";

export default function BlogPost({ post, navigate }) {
  const kws = post.keywords?.split(",").map((k) => k.trim()).filter(Boolean) || [];

  return (
    <div style={{ padding: "88px 24px", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Back button */}
        <button onClick={() => navigate("blog")} className="btn-secondary mb-8" style={{ fontSize: ".8rem", padding: "8px 16px" }}>
          ← Back to Blog
        </button>

        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          {/* Category */}
          <div style={{ color: "var(--purple)", fontSize: ".72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".12em", marginBottom: "10px" }}>
            {post.category}
          </div>

          {/* Title */}
          <h1 className="font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.7rem,4vw,2.5rem)", lineHeight: 1.15 }}>
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-8" style={{ fontSize: ".78rem", color: "var(--dim)" }}>
            <span>📅 {post.date}</span>
            <span>⏱ {post.readTime}</span>
            <span>✍️ Muhtsan Ahmad</span>
          </div>

          {/* Featured image */}
          {post.image && (
            <img src={post.image} alt={post.title} className="w-full rounded-2xl mb-8" style={{ maxHeight: "360px", objectFit: "cover" }} />
          )}

          {/* Content */}
          <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* SEO Info Box */}
          {(post.metaDescription || post.keywords) && (
            <div className="mt-10 p-5 rounded-xl" style={{ background: "rgba(139,92,246,.06)", border: "1px solid rgba(139,92,246,.18)" }}>
              <h4 style={{ color: "#a78bfa", fontSize: ".73rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: "12px" }}>🔍 SEO Information</h4>
              {post.metaDescription && (
                <div className="flex gap-2 mb-2" style={{ fontSize: ".78rem" }}>
                  <span style={{ color: "var(--dim)", minWidth: "130px", flexShrink: 0 }}>Meta Description:</span>
                  <span style={{ color: "var(--muted)" }}>{post.metaDescription}</span>
                </div>
              )}
              {kws.length > 0 && (
                <div className="flex gap-2 items-start" style={{ fontSize: ".78rem" }}>
                  <span style={{ color: "var(--dim)", minWidth: "130px", flexShrink: 0 }}>Focus Keywords:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {kws.map((k) => <span key={k} className="tag">{k}</span>)}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* CTA */}
          <div className="mt-10 p-6 rounded-2xl text-center" style={{ background: "linear-gradient(135deg,rgba(139,92,246,.09),rgba(59,130,246,.09))", border: "1px solid rgba(139,92,246,.2)" }}>
            <p className="text-white mb-4" style={{ fontSize: ".95rem" }}>Need help with your SEO? Let's talk!</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={`mailto:${personalInfo.email}`} className="btn-primary" style={{ fontSize: ".85rem" }}>✉ Email Me</a>
              <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-green" style={{ fontSize: ".85rem" }}>💬 WhatsApp</a>
              <a href="tel:+92370016092" className="btn-secondary" style={{ fontSize: ".85rem", color: "#4ade80", borderColor: "rgba(34,197,94,.35)" }}>📞 Call</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
