"use client";
import { useState, useEffect } from "react";

const BLOG_KEY = "muhtsan_blogs";
const ADMIN_PW = "seo2025";  // ← Change this password

const CATS = ["Local SEO","Technical SEO","E-commerce SEO","Content Strategy","Link Building","Google Ads","Meta Ads","WordPress","Shopify","GEO Optimization","General SEO"];

const empty = { id: null, title: "", slug: "", category: "Local SEO", date: new Date().toISOString().split("T")[0], readTime: "5 min read", excerpt: "", content: "", metaDescription: "", keywords: "", image: "" };

export default function BlogAdmin({ open, onClose }) {
  const [unlocked, setUnlocked] = useState(false);
  const [pw, setPw]       = useState("");
  const [pwErr, setPwErr] = useState("");
  const [tab, setTab]     = useState("list");   // list | edit
  const [posts, setPosts] = useState([]);
  const [form, setForm]   = useState(empty);
  const [msg, setMsg]     = useState({ text: "", type: "" });

  // Load posts from localStorage
  useEffect(() => {
    if (!open) return;
    try { setPosts(JSON.parse(localStorage.getItem(BLOG_KEY) || "[]")); } catch { setPosts([]); }
  }, [open]);

  const save = () => {
    try { localStorage.setItem(BLOG_KEY, JSON.stringify(posts)); } catch {}
  };

  const checkPw = (e) => {
    e.preventDefault();
    if (pw === ADMIN_PW) { setUnlocked(true); setPwErr(""); }
    else { setPwErr("Wrong password. Try again."); }
  };

  const showMsg = (text, type = "ok") => {
    setMsg({ text, type });
    setTimeout(() => setMsg({ text: "", type: "" }), 3000);
  };

  const autoSlug = (title) =>
    title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").slice(0, 60);

  const onFormChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => {
      const next = { ...p, [name]: value };
      if (name === "title" && (!p.slug || p.slug === autoSlug(p.title))) next.slug = autoSlug(value);
      return next;
    });
  };

  const savePost = () => {
    if (!form.title.trim() || !form.slug.trim() || !form.excerpt.trim() || !form.content.trim()) {
      showMsg("Please fill: Title, Slug, Excerpt, and Content", "err"); return;
    }
    let updated;
    if (form.id) {
      updated = posts.map((p) => p.id === form.id ? { ...form } : p);
    } else {
      const newId = posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 100;
      updated = [{ ...form, id: newId }, ...posts];
    }
    setPosts(updated);
    localStorage.setItem(BLOG_KEY, JSON.stringify(updated));
    showMsg(form.id ? "Post updated!" : "Post published!");
    setForm(empty);
    setTab("list");
  };

  const editPost = (p) => { setForm({ ...p }); setTab("edit"); };

  const deletePost = (id) => {
    if (!confirm("Delete this post?")) return;
    const updated = posts.filter((p) => p.id !== id);
    setPosts(updated);
    localStorage.setItem(BLOG_KEY, JSON.stringify(updated));
    showMsg("Post deleted.", "ok");
  };

  const exportCode = () => {
    if (!form.title) { showMsg("Fill the form first", "err"); return; }
    const code = `  {
    id: ${Date.now()},
    title: "${form.title.replace(/"/g, '\\"')}",
    slug: "${form.slug}",
    category: "${form.category}",
    date: "${form.date}",
    readTime: "${form.readTime}",
    excerpt: "${form.excerpt.replace(/"/g, '\\"')}",
    content: \`${form.content}\`,
    metaDescription: "${form.metaDescription.replace(/"/g, '\\"')}",
    keywords: "${form.keywords}",
    image: "${form.image}",
  },`;
    navigator.clipboard?.writeText(code).then(() => showMsg("Code copied! Paste into src/data/blogPosts.js")).catch(() => showMsg("Select and copy the code manually", "err"));
  };

  if (!open) return null;

  return (
    <div className="admin-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="admin-box">
        {/* Close */}
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors" style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", color: "var(--muted)", cursor: "pointer" }}>✕</button>

        <div className="font-bold text-white mb-1" style={{ fontFamily: "var(--font-heading)", fontSize: "1.35rem" }}>📝 Blog Admin Panel</div>
        <div className="mb-5" style={{ color: "var(--muted)", fontSize: ".82rem" }}>Manage your SEO-optimized blog posts</div>

        {/* Message */}
        {msg.text && (
          <div className="mb-4 p-3 rounded-lg text-sm font-medium" style={msg.type === "err" ? { background: "rgba(239,68,68,.1)", border: "1px solid rgba(239,68,68,.22)", color: "#f87171" } : { background: "rgba(34,197,94,.1)", border: "1px solid rgba(34,197,94,.22)", color: "#4ade80" }}>
            {msg.text}
          </div>
        )}

        {/* Password gate */}
        {!unlocked ? (
          <div className="text-center py-6">
            <div className="text-4xl mb-3">🔒</div>
            <p className="mb-4" style={{ color: "var(--muted)", fontSize: ".85rem" }}>Enter password to access admin panel</p>
            <form onSubmit={checkPw} className="flex flex-col items-center gap-3">
              <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="Enter password" className="form-input" style={{ maxWidth: "240px", textAlign: "center" }} />
              {pwErr && <p style={{ color: "#f87171", fontSize: ".78rem" }}>{pwErr}</p>}
              <button type="submit" className="btn-primary">Unlock →</button>
            </form>
            <p className="mt-3" style={{ color: "var(--dim)", fontSize: ".72rem" }}>Default password: <code style={{ color: "#a78bfa" }}>seo2025</code> — Change in BlogAdmin.jsx</p>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="flex gap-2 mb-6 pb-4" style={{ borderBottom: "1px solid rgba(139,92,246,.15)" }}>
              <button onClick={() => { setTab("list"); setForm(empty); }} className={`admin-tab-btn${tab === "list" ? " active" : ""}`}>📋 All Posts ({posts.length})</button>
              <button onClick={() => { setTab("edit"); setForm(empty); }} className={`admin-tab-btn${tab === "edit" && !form.id ? " active" : ""}`}>✏️ New Post</button>
              {tab === "edit" && form.id && <button className="admin-tab-btn active">📝 Editing Post</button>}
            </div>

            {/* Post List */}
            {tab === "list" && (
              <div>
                {posts.length === 0 ? (
                  <div className="text-center py-10" style={{ color: "var(--muted)", fontSize: ".85rem" }}>
                    No posts yet. Click "New Post" to add your first blog post.
                  </div>
                ) : (
                  <div className="flex flex-col gap-2.5">
                    {posts.map((p) => (
                      <div key={p.id} className="flex items-center justify-between gap-3 p-3.5 rounded-xl" style={{ background: "rgba(139,92,246,.06)", border: "1px solid rgba(139,92,246,.14)" }}>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-white truncate" style={{ fontSize: ".88rem" }}>{p.title}</div>
                          <div style={{ color: "var(--dim)", fontSize: ".7rem", marginTop: "2px" }}>{p.category} · {p.date} · {p.readTime}</div>
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <button onClick={() => editPost(p)} className="px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer" style={{ background: "rgba(59,130,246,.14)", color: "#60a5fa", border: "1px solid rgba(59,130,246,.24)" }}>Edit</button>
                          <button onClick={() => deletePost(p.id)} className="px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer" style={{ background: "rgba(239,68,68,.12)", color: "#f87171", border: "1px solid rgba(239,68,68,.22)" }}>Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Edit/New Post form */}
            {tab === "edit" && (
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="block mb-1.5 font-medium" style={{ color: "var(--muted)", fontSize: ".72rem" }}>Post Title *</label>
                    <input className="form-input" name="title" value={form.title} onChange={onFormChange} placeholder="How to Rank #1 on Google in 2025" />
                  </div>
                  <div><label className="block mb-1.5 font-medium" style={{ color: "var(--muted)", fontSize: ".72rem" }}>URL Slug *</label>
                    <input className="form-input" name="slug" value={form.slug} onChange={onFormChange} placeholder="rank-number-1-google-2025" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div><label className="block mb-1.5 font-medium" style={{ color: "var(--muted)", fontSize: ".72rem" }}>Category *</label>
                    <select className="form-input" name="category" value={form.category} onChange={onFormChange}>
                      {CATS.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div><label className="block mb-1.5 font-medium" style={{ color: "var(--muted)", fontSize: ".72rem" }}>Publish Date</label>
                    <input className="form-input" name="date" type="date" value={form.date} onChange={onFormChange} />
                  </div>
                  <div><label className="block mb-1.5 font-medium" style={{ color: "var(--muted)", fontSize: ".72rem" }}>Read Time</label>
                    <input className="form-input" name="readTime" value={form.readTime} onChange={onFormChange} placeholder="5 min read" />
                  </div>
                </div>
                <div><label className="block mb-1.5 font-medium" style={{ color: "var(--muted)", fontSize: ".72rem" }}>Short Excerpt * (shown on blog listing)</label>
                  <textarea className="form-input" name="excerpt" rows={2} value={form.excerpt} onChange={onFormChange} placeholder="Brief description of this post (max 160 characters)..." style={{ resize: "none" }} />
                </div>
                <div><label className="block mb-1.5 font-medium" style={{ color: "var(--muted)", fontSize: ".72rem" }}>Full Blog Content * (HTML tags supported: &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;)</label>
                  <textarea className="form-input" name="content" rows={10} value={form.content} onChange={onFormChange} placeholder="<h2>Introduction</h2>&#10;<p>Write your full blog post here...</p>" style={{ resize: "vertical", fontFamily: "monospace", fontSize: ".82rem" }} />
                </div>

                {/* SEO Box */}
                <div className="p-4 rounded-xl space-y-3" style={{ background: "rgba(139,92,246,.06)", border: "1px solid rgba(139,92,246,.18)" }}>
                  <p style={{ color: "#a78bfa", fontSize: ".72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em" }}>🔍 SEO Settings</p>
                  <div><label className="block mb-1.5 font-medium" style={{ color: "var(--muted)", fontSize: ".72rem" }}>Meta Description (max 160 chars — shown in Google results)</label>
                    <textarea className="form-input" name="metaDescription" rows={2} value={form.metaDescription} onChange={onFormChange} placeholder="Include your main keyword naturally. This appears in Google search results." style={{ resize: "none" }} />
                    <div className="text-right mt-1" style={{ color: form.metaDescription.length > 160 ? "#f87171" : "var(--dim)", fontSize: ".68rem" }}>{form.metaDescription.length}/160</div>
                  </div>
                  <div><label className="block mb-1.5 font-medium" style={{ color: "var(--muted)", fontSize: ".72rem" }}>Focus Keywords (comma separated)</label>
                    <input className="form-input" name="keywords" value={form.keywords} onChange={onFormChange} placeholder="local SEO, Google Business Profile, local citations" />
                  </div>
                  <div><label className="block mb-1.5 font-medium" style={{ color: "var(--muted)", fontSize: ".72rem" }}>Featured Image URL (optional)</label>
                    <input className="form-input" name="image" value={form.image} onChange={onFormChange} placeholder="https://your-image-url.com/image.jpg" />
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3">
                  <button onClick={savePost} className="btn-primary">💾 {form.id ? "Update Post" : "Publish Post"}</button>
                  <button onClick={exportCode} className="btn-secondary" style={{ fontSize: ".85rem" }}>📋 Copy Code for blogPosts.js</button>
                  <button onClick={() => { setTab("list"); setForm(empty); }} className="btn-secondary" style={{ fontSize: ".85rem" }}>Cancel</button>
                </div>

                {/* Help text */}
                <div className="p-3 rounded-lg" style={{ background: "rgba(59,130,246,.07)", border: "1px solid rgba(59,130,246,.15)" }}>
                  <p style={{ color: "#60a5fa", fontSize: ".74rem", lineHeight: 1.6 }}>
                    💡 <strong>To permanently publish for all visitors:</strong> Click "Copy Code for blogPosts.js" → paste the code into <code style={{ background: "rgba(59,130,246,.15)", padding: "1px 5px", borderRadius: "3px" }}>src/data/blogPosts.js</code> → push to GitHub → Vercel auto-redeploys.
                  </p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
