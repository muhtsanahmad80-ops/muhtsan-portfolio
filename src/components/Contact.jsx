"use client";
import { useState } from "react";
import { personalInfo } from "@/data/portfolioData";

const SERVICES = ["SEO Optimization","Local SEO","Technical SEO","E-commerce SEO","Google Ads","Meta Ads","WordPress Development","Shopify Development","Marketing Automation","Content Strategy","Other"];

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", company:"", service:"", budget:"", message:"" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name:"", email:"", company:"", service:"", budget:"", message:"" });
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please email me directly.");
    }
  };

  return (
    <section id="contact" className="relative" style={{ padding: "88px 24px" }}>
      <div className="max-w-7xl mx-auto">
        <div className="section-head reveal">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Ready to <span className="gradient-text">Grow Your Business?</span></h2>
          <p className="section-sub">Tell me about your project and goals. I'll get back to you within 24 hours with a tailored strategy.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 reveal">
          {/* Left — contact info */}
          <div className="lg:col-span-2 space-y-4">
            {/* Email */}
            <a href={`mailto:${personalInfo.email}`} className="glass-card p-4 flex items-center gap-4 block" style={{ textDecoration: "none" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{ background: "rgba(139,92,246,.12)", border: "1px solid rgba(139,92,246,.22)" }}>📧</div>
              <div>
                <div style={{ color: "var(--dim)", fontSize: ".68rem", fontWeight: 500 }}>Email</div>
                <div className="font-medium text-white" style={{ fontSize: ".86rem" }}>{personalInfo.email}</div>
              </div>
            </a>

            {/* Phone */}
            <a href={`tel:+92370016092`} className="glass-card p-4 flex items-center gap-4 block" style={{ textDecoration: "none" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{ background: "rgba(139,92,246,.12)", border: "1px solid rgba(139,92,246,.22)" }}>📞</div>
              <div>
                <div style={{ color: "var(--dim)", fontSize: ".68rem", fontWeight: 500 }}>Phone / Call</div>
                <div className="font-medium text-white" style={{ fontSize: ".86rem" }}>{personalInfo.phone}</div>
              </div>
            </a>

            {/* WhatsApp */}
            <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="glass-card p-4 flex items-center gap-4 block" style={{ textDecoration: "none" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{ background: "rgba(34,197,94,.12)", border: "1px solid rgba(34,197,94,.25)" }}>💬</div>
              <div>
                <div style={{ color: "var(--dim)", fontSize: ".68rem", fontWeight: 500 }}>WhatsApp</div>
                <div className="font-medium text-white" style={{ fontSize: ".86rem" }}>{personalInfo.phone}</div>
              </div>
            </a>

            {/* Response time */}
            <div className="glass-card p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{ background: "rgba(139,92,246,.12)", border: "1px solid rgba(139,92,246,.22)" }}>⏱️</div>
              <div>
                <div style={{ color: "var(--dim)", fontSize: ".68rem", fontWeight: 500 }}>Response Time</div>
                <div className="font-medium text-white" style={{ fontSize: ".86rem" }}>Within 24 hours</div>
              </div>
            </div>

            {/* Quick contact buttons */}
            <div className="glass-card p-4">
              <h4 className="text-white font-semibold mb-3" style={{ fontSize: ".8rem" }}>Reach Me Directly</h4>
              <div className="flex flex-wrap gap-2">
                <a href={`mailto:${personalInfo.email}`} className="btn-secondary" style={{ padding: "8px 14px", fontSize: ".78rem" }}>✉ Email Me</a>
                <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-green" style={{ padding: "8px 14px", fontSize: ".78rem" }}>💬 WhatsApp</a>
                <a href="tel:+92370016092" className="btn-secondary" style={{ padding: "8px 14px", fontSize: ".78rem", color: "#4ade80", borderColor: "rgba(34,197,94,.35)" }}>📞 Call</a>
              </div>
            </div>

            {/* Drive link */}
            <div className="p-4 rounded-xl" style={{ background: "linear-gradient(135deg,rgba(139,92,246,.09),rgba(6,182,212,.09))", border: "1px solid rgba(139,92,246,.22)" }}>
              <p style={{ fontSize: ".79rem", color: "#cbd5e1" }}>🗂️ Browse all case studies:</p>
              <a href="https://drive.google.com/drive/folders/1-InFgAg3yPPpo-6zDr5UuQVzqOO-5-K0" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold mt-1" style={{ color: "var(--purple)", fontSize: ".79rem", textDecoration: "none" }}>
                View Full Portfolio Drive →
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem" }}>Message Sent!</h3>
                  <p style={{ color: "var(--muted)" }}>Thank you! I'll get back to you within 24 hours with a personalized strategy.</p>
                  <div className="flex gap-3 mt-5">
                    <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-green" style={{ fontSize: ".82rem" }}>💬 WhatsApp Me</a>
                    <button onClick={() => setStatus("idle")} className="btn-secondary" style={{ fontSize: ".82rem" }}>Send Another</button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className="block mb-1.5 font-medium" style={{ color: "var(--muted)", fontSize: ".72rem" }}>Full Name *</label><input className="form-input" type="text" name="name" placeholder="Your name" value={form.name} onChange={onChange} required /></div>
                    <div><label className="block mb-1.5 font-medium" style={{ color: "var(--muted)", fontSize: ".72rem" }}>Email Address *</label><input className="form-input" type="email" name="email" placeholder={personalInfo.email} value={form.email} onChange={onChange} required /></div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className="block mb-1.5 font-medium" style={{ color: "var(--muted)", fontSize: ".72rem" }}>Company / Website</label><input className="form-input" type="text" name="company" placeholder="yoursite.com" value={form.company} onChange={onChange} /></div>
                    <div><label className="block mb-1.5 font-medium" style={{ color: "var(--muted)", fontSize: ".72rem" }}>Service Needed *</label>
                      <select className="form-input" name="service" value={form.service} onChange={onChange} required>
                        <option value="">Select a service</option>
                        {SERVICES.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div><label className="block mb-1.5 font-medium" style={{ color: "var(--muted)", fontSize: ".72rem" }}>Monthly Budget</label>
                    <select className="form-input" name="budget" value={form.budget} onChange={onChange}>
                      <option value="">Select budget range</option>
                      <option>Under $500</option><option>$500–$1,000</option><option>$1,000–$2,500</option><option>$2,500–$5,000</option><option>$5,000+</option>
                    </select>
                  </div>
                  <div><label className="block mb-1.5 font-medium" style={{ color: "var(--muted)", fontSize: ".72rem" }}>Tell Me About Your Project *</label>
                    <textarea className="form-input" name="message" rows={4} placeholder="Describe your goals, challenges, and what you want to achieve..." value={form.message} onChange={onChange} required style={{ resize: "none" }} />
                  </div>
                  {status === "error" && <div className="p-3 rounded-lg text-sm" style={{ background: "rgba(239,68,68,.1)", border: "1px solid rgba(239,68,68,.2)", color: "#f87171" }}>{errorMsg}</div>}
                  <button type="submit" className="btn-primary w-full justify-center py-3.5 text-base" disabled={status === "loading"} style={{ opacity: status === "loading" ? .7 : 1 }}>
                    {status === "loading" ? "Sending..." : "Send Message →"}
                  </button>
                  <p className="text-center" style={{ color: "var(--dim)", fontSize: ".7rem" }}>
                    Or contact directly: <a href={`mailto:${personalInfo.email}`} style={{ color: "var(--purple)" }}>{personalInfo.email}</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
