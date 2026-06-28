import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL("https://muhtsanahmad.com"),
  title: { default: "Muhtsan Ahmad | SEO Specialist & Digital Marketing Expert", template: "%s | Muhtsan Ahmad" },
  description: "Muhtsan Ahmad — SEO Specialist with 6+ years experience in technical SEO, local SEO, e-commerce SEO, Google Ads, Meta Ads, WordPress & Shopify development. 100+ clients, 50+ industries.",
  keywords: ["SEO specialist","SEO expert","Muhtsan Ahmad","technical SEO","local SEO","e-commerce SEO","Shopify SEO","WordPress development","Google Ads","Meta Ads","HubSpot","marketing automation","link building","digital marketing","GEO optimization"],
  authors: [{ name: "Muhtsan Ahmad", url: "https://muhtsanahmad.com" }],
  creator: "Muhtsan Ahmad",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: { type: "website", locale: "en_US", url: "https://muhtsanahmad.com", title: "Muhtsan Ahmad | SEO Specialist & Digital Marketing Expert", description: "Expert SEO strategies that drive measurable organic growth. 6+ years experience across 50+ industries.", siteName: "Muhtsan Ahmad Portfolio" },
  twitter: { card: "summary_large_image", title: "Muhtsan Ahmad | SEO Specialist", description: "Expert SEO strategies that drive measurable organic growth." },
  alternates: { canonical: "https://muhtsanahmad.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person", "@id": "https://muhtsanahmad.com/#person",
      name: "Muhtsan Ahmad", jobTitle: "SEO Specialist & Digital Marketing Expert",
      email: "muhtsana@gmail.com", telephone: "+923700160920",
      url: "https://muhtsanahmad.com",
      description: "SEO specialist with 6+ years experience delivering data-driven organic growth across 50+ industries.",
      knowsAbout: ["Search Engine Optimization","Technical SEO","Local SEO","E-commerce SEO","Content Marketing","Link Building","Google Ads","Meta Ads","WordPress Development","Shopify Development","Marketing Automation","HubSpot CRM","GEO Optimization"],
    },
    {
      "@type": "ProfessionalService", "@id": "https://muhtsanahmad.com/#service",
      name: "Muhtsan Ahmad — SEO & Digital Marketing Services",
      description: "Comprehensive SEO and digital marketing services: technical SEO, local SEO, e-commerce SEO, content strategy, Google Ads, Meta Ads, WordPress & Shopify development, HubSpot automation.",
      url: "https://muhtsanahmad.com", areaServed: "Worldwide",
      provider: { "@id": "https://muhtsanahmad.com/#person" },
      contactPoint: { "@type": "ContactPoint", telephone: "+923700160920", email: "muhtsana@gmail.com", contactType: "customer service", availableLanguage: ["English","Urdu"] },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What SEO services does Muhtsan Ahmad provide?", acceptedAnswer: { "@type": "Answer", text: "Muhtsan Ahmad provides technical SEO audits, local SEO, e-commerce SEO (Shopify, WooCommerce, Amazon), content strategy, link building, on-page optimization, Core Web Vitals improvement, and schema markup." } },
        { "@type": "Question", name: "How many years of SEO experience does Muhtsan Ahmad have?", acceptedAnswer: { "@type": "Answer", text: "Muhtsan Ahmad has 6+ years of professional SEO and digital marketing experience, working with 100+ clients across 50+ industries." } },
        { "@type": "Question", name: "How can I contact Muhtsan Ahmad?", acceptedAnswer: { "@type": "Answer", text: "You can reach Muhtsan Ahmad via email at muhtsana@gmail.com, WhatsApp at +92 370 016 092, or through the contact form on the website." } },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#070b14] text-slate-100 antialiased">{children}</body>
    </html>
  );
}
