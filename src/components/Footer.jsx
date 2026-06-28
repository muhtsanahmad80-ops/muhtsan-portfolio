import { personalInfo } from "@/data/portfolioData";

const DRIVES = [
  { label: "Google & Meta Ads", href: "https://drive.google.com/drive/folders/1-InFgAg3yPPpo-6zDr5UuQVzqOO-5-K0" },
  { label: "Complete SEO",      href: "https://drive.google.com/drive/folders/185eFMMOAnw7vqdLxHb45hWQc60NcGvqO" },
  { label: "Technical SEO",     href: "https://drive.google.com/drive/folders/1zRrsq5leStsS4u-rSw_rcO35fDOqwYe8" },
  { label: "Content Strategy",  href: "https://drive.google.com/drive/folders/1DsIQd4xppx9c0aOs0aRQ6eohm2R6--4E" },
  { label: "WordPress Dev",     href: "https://drive.google.com/drive/folders/1Cf5mEIfWPQ8llUXSfHjuQhdPuBub6r-g" },
  { label: "E-Commerce",        href: "https://drive.google.com/drive/folders/13pAMJlI0QbnK79Mc8PapBlPsAOMdlIgj" },
  { label: "GMB Profiles",      href: "https://drive.google.com/drive/folders/1roVUxvspgo0rtWW713blGjubt4luodMX" },
];

const SERVICES = ["SEO Optimization","Local SEO","Technical SEO","E-commerce SEO","Google Ads","Meta Ads","WordPress Dev","Shopify Dev"];
const NAV = ["Home","About","Services","Portfolio","Blog","Contact"];

const linkStyle = { color: "var(--dim)", textDecoration: "none", fontSize: ".8rem", display: "inline-flex", alignItems: "center", gap: "3px", transition: "color .2s" };

export default function Footer({ navigate }) {
  const scrollTo = (id) => {
    if (id === "Blog") { navigate("blog"); return; }
    navigate("main");
    setTimeout(() => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <footer className="relative" style={{ padding: "52px 24px 24px", borderTop: "1px solid rgba(139,92,246,.1)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs" style={{ background: "linear-gradient(135deg,#8b5cf6,#3b82f6)", fontFamily: "var(--font-heading)" }}>MA</div>
              <span className="font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>Muhtsan<span className="gradient-text"> Ahmad</span></span>
            </div>
            <p className="mb-4" style={{ color: "var(--dim)", fontSize: ".79rem", lineHeight: 1.65 }}>
              SEO Specialist & Digital Marketing Expert with 6+ years driving measurable organic growth for 100+ businesses worldwide.
            </p>
            {/* Contact info */}
            <div className="flex flex-col gap-2">
              <a href={`mailto:${personalInfo.email}`} style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = "#a78bfa"} onMouseOut={(e) => e.currentTarget.style.color = "var(--dim)"}>
                📧 {personalInfo.email}
              </a>
              <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = "#4ade80"} onMouseOut={(e) => e.currentTarget.style.color = "var(--dim)"}>
                💬 {personalInfo.phone} (WhatsApp)
              </a>
              <a href="tel:+92370016092" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = "#4ade80"} onMouseOut={(e) => e.currentTarget.style.color = "var(--dim)"}>
                📞 {personalInfo.phone} (Call)
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white mb-3" style={{ fontSize: ".68rem", textTransform: "uppercase", letterSpacing: ".12em" }}>Navigation</h4>
            <ul className="space-y-2">
              {NAV.map((n) => (
                <li key={n}>
                  <button onClick={() => scrollTo(n)} style={{ ...linkStyle, background: "none", border: "none", cursor: "pointer", padding: 0 }}
                    onMouseOver={(e) => e.currentTarget.style.color = "#a78bfa"} onMouseOut={(e) => e.currentTarget.style.color = "var(--dim)"}>
                    {n}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-3" style={{ fontSize: ".68rem", textTransform: "uppercase", letterSpacing: ".12em" }}>Services</h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s}><button onClick={() => scrollTo("Services")} style={{ ...linkStyle, background: "none", border: "none", cursor: "pointer", padding: 0 }}
                  onMouseOver={(e) => e.currentTarget.style.color = "#a78bfa"} onMouseOut={(e) => e.currentTarget.style.color = "var(--dim)"}>{s}</button></li>
              ))}
            </ul>
          </div>

          {/* Portfolio Drives */}
          <div>
            <h4 className="font-bold text-white mb-3" style={{ fontSize: ".68rem", textTransform: "uppercase", letterSpacing: ".12em" }}>Portfolio Drives</h4>
            <ul className="space-y-2">
              {DRIVES.map((d) => (
                <li key={d.label}>
                  <a href={d.href} target="_blank" rel="noopener noreferrer" style={linkStyle}
                    onMouseOver={(e) => e.currentTarget.style.color = "#a78bfa"} onMouseOut={(e) => e.currentTarget.style.color = "var(--dim)"}>
                    {d.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,.04)" }}>
          <p style={{ color: "var(--dim)", fontSize: ".77rem" }}>© {new Date().getFullYear()} Muhtsan Ahmad. All rights reserved.</p>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background: "rgba(139,92,246,.08)", border: "1px solid rgba(139,92,246,.2)", color: "#a78bfa" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
            Available for new projects
          </div>
        </div>
      </div>
    </footer>
  );
}
