# Muhtsan Ahmad — SEO Portfolio Website

A high-performance, SEO & GEO optimized portfolio website built with **Next.js 14**, **Tailwind CSS**, and a fully functional contact form API.

---

## 🚀 Features

- ✅ **Next.js 14** App Router — production-ready
- ✅ **Tailwind CSS** — utility-first styling with custom design tokens
- ✅ **GEO Optimized** — JSON-LD schema for AI search engines (ChatGPT, Gemini, Perplexity)
- ✅ **SEO Meta Tags** — Open Graph, Twitter Cards, canonical URLs
- ✅ **Contact API** — `/api/contact` route (plug in Resend or Nodemailer)
- ✅ **Scroll Animations** — Intersection Observer reveal effects
- ✅ **Animated Stats** — Counter animation with easing
- ✅ **Case Study Filter** — Tabs for all 200+ case studies
- ✅ **Mobile Responsive** — Mobile-first at every breakpoint
- ✅ **Glassmorphism** — Modern card design with backdrop blur
- ✅ **High Performance** — Optimized for Core Web Vitals

---

## 📦 Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout — SEO meta + JSON-LD schema
│   ├── page.js            # Main page — assembles all sections
│   ├── globals.css        # Design tokens + global styles
│   └── api/contact/
│       └── route.js       # Contact form API endpoint
├── components/
│   ├── Navbar.jsx         # Sticky nav with scroll detection
│   ├── Hero.jsx           # Full-screen hero with animated orbs
│   ├── About.jsx          # Bio, highlights, career timeline
│   ├── Services.jsx       # 10 service cards in bento grid
│   ├── CaseStudies.jsx    # Tabbed portfolio with 200+ case studies
│   ├── Stats.jsx          # Animated counters + testimonials
│   ├── Contact.jsx        # Contact form with API integration
│   └── Footer.jsx         # Links, social, portfolio drives
└── data/
    └── portfolioData.js   # All case study data, services, stats
```

---

## ⚡ Getting Started Locally

```bash
# 1. Install dependencies
npm install

# 2. Create environment file
cp .env.local.example .env.local

# 3. Run development server
npm run dev

# Open http://localhost:3000
```

---

## 🌐 Deploy to Vercel (Recommended)

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option B — GitHub + Vercel Dashboard
1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live in ~60 seconds!

---

## 📧 Setting Up Email (Contact Form)

Currently the API logs submissions to the console. To receive emails:

### Using Resend (Recommended — free tier available)

1. Sign up at [resend.com](https://resend.com)
2. Install: `npm install resend`
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   ```
4. Uncomment the Resend code block in `src/app/api/contact/route.js`

---

## 🛠️ Customization

### Update Personal Info
Edit `src/data/portfolioData.js`:
- `personalInfo` — name, email, description
- `stats` — your real numbers
- Case studies — already populated from your files

### Update Colors
Edit `src/app/globals.css`:
```css
:root {
  --accent-purple: #8b5cf6;   /* Primary color */
  --accent-blue: #3b82f6;     /* Secondary color */
  --accent-cyan: #06b6d4;     /* Accent color */
}
```

### Update Domain
Replace `muhtsanahmad.com` with your actual domain in:
- `src/app/layout.js` (metadataBase, all canonical/OG URLs)
- `public/robots.txt` (Sitemap URL)

---

## 🤖 GEO Optimization

This site includes structured data for Generative Engine Optimization:

- **Person schema** — AI engines can identify Muhtsan Ahmad as an SEO expert
- **ProfessionalService schema** — Services are machine-readable
- **FAQPage schema** — Direct answers for AI to extract and cite
- **Comprehensive keyword coverage** — Natural language content AI can understand

---

## 📊 Performance

Built for **Core Web Vitals** excellence on Vercel:
- Static page generation
- Font optimization (next/font)
- Image optimization
- Compression enabled
- No unnecessary JavaScript

---

## 📄 License

© 2024–2025 Muhtsan Ahmad. All rights reserved.
