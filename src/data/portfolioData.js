// ── Personal Info ────────────────────────────────────────────────
export const personalInfo = {
  name: "Muhtsan Ahmad",
  title: "SEO Specialist & Digital Marketing Expert",
  tagline: "Driving Organic Growth with Data-Driven SEO Strategies",
  experience: 6,
  email: "muhtsana@gmail.com",
  phone: "+92 370 016 092",
  whatsapp: "https://wa.me/92370016092",
  description:
    "With over 6 years of hands-on experience, I craft ROI-focused SEO strategies that deliver measurable results. From healthcare to e-commerce, I have helped 100+ businesses achieve top rankings, drive qualified traffic, and maximize revenue through search.",
  expertise: [
    "Technical SEO","Local SEO","E-commerce SEO","Content Strategy",
    "Link Building","Google Ads","Meta Ads","WordPress Development",
    "Shopify Development","Marketing Automation","HubSpot CRM",
    "Core Web Vitals","Schema Markup","GEO Optimization",
  ],
};

export const stats = [
  { value: 100, suffix: "+", label: "Clients Served" },
  { value: 6,   suffix: "+", label: "Years Experience" },
  { value: 50,  suffix: "+", label: "Industries Covered" },
  { value: 200, suffix: "+", label: "Case Studies" },
];

// ── Services ─────────────────────────────────────────────────────
export const services = [
  { id:"seo",      icon:"🔍", title:"SEO Optimization",       color:"from-purple-600 to-blue-600",   description:"Full-spectrum SEO covering on-page optimization, keyword research, content strategy, and authority building to dominate search rankings.", features:["Keyword Research & Gap Analysis","On-Page SEO Optimization","Link Building","Content Marketing"] },
  { id:"local",    icon:"📍", title:"Local SEO",              color:"from-blue-600 to-cyan-500",     description:"Hyper-targeted local search strategies including Google Business Profile optimization, local citations, and map pack domination.",         features:["Google Business Profile","Local Citation Building","Review Management","Map Pack Rankings"] },
  { id:"tech",     icon:"⚙️", title:"Technical SEO",          color:"from-cyan-500 to-teal-500",     description:"Deep technical audits and implementation to fix crawlability, indexing, Core Web Vitals, site speed, and schema markup issues.",            features:["Core Web Vitals Optimization","Site Speed Improvement","Schema Markup","Crawl & Index Fixes"] },
  { id:"ecom",     icon:"🛒", title:"E-commerce SEO",         color:"from-teal-500 to-green-500",    description:"Specialized SEO for Shopify, WooCommerce, and Amazon stores — product page optimization, category architecture, and conversion content.",  features:["Shopify SEO","WooCommerce SEO","Amazon SEO & PPC","Product Page Optimization"] },
  { id:"gads",     icon:"📊", title:"Google Ads",             color:"from-yellow-500 to-orange-500", description:"Performance-driven Google Ads campaigns — search, display, and shopping — engineered for maximum ROI and lead generation.",                 features:["Search Campaigns","Display Advertising","Shopping Ads","Keyword Strategy & Bidding"] },
  { id:"mads",     icon:"📱", title:"Meta Ads",               color:"from-orange-500 to-pink-500",   description:"Targeted Facebook and Instagram ad campaigns with compelling creatives and audience strategies that convert browsers into buyers.",          features:["Facebook Ads","Instagram Ads","Audience Targeting","Retargeting & Lookalikes"] },
  { id:"wp",       icon:"🌐", title:"WordPress Development",  color:"from-pink-500 to-purple-600",   description:"Custom WordPress websites built for speed, SEO, and conversions — from theme customization to full PHP/CSS/HTML development.",               features:["Custom Theme Development","WooCommerce Integration","PHP & CSS Customization","SEO-Ready Architecture"] },
  { id:"shopify",  icon:"🏪", title:"Shopify Development",    color:"from-purple-600 to-indigo-600", description:"End-to-end Shopify store development and optimization — store setup, conversion rate optimization, and app integration.",                    features:["Store Setup & Design","App Integration","Conversion Optimization","Speed & Performance Tuning"] },
  { id:"auto",     icon:"🤖", title:"Marketing Automation",  color:"from-indigo-600 to-blue-600",   description:"HubSpot CRM implementation, workflow automation, and Webflow development to streamline your marketing and supercharge efficiency.",           features:["HubSpot CRM Setup","Automated Workflows","Lead Nurturing","Webflow Design & Development"] },
  { id:"content",  icon:"✍️", title:"Content Strategy",       color:"from-blue-600 to-cyan-500",     description:"Data-driven content marketing strategies powered by deep keyword research, competitive analysis, and SEO-first content planning.",           features:["Keyword Research","Content Roadmaps","Blog Strategy","Content Optimization"] },
];

// ── Testimonials ──────────────────────────────────────────────────
export const testimonials = [
  { name:"James Laporte",   company:"Laporte Law Firm",          text:"Muhtsan transformed our online presence. We went from page 3 to ranking #1 for our most competitive keywords in under 6 months.", rating:5 },
  { name:"Sarah Mitchell",  company:"Skin Wellness Dermatology",  text:"Our organic traffic increased by 340% in just 8 months. Muhtsan's content strategy and technical SEO expertise is unmatched.", rating:5 },
  { name:"David Cheng",     company:"Property Management Inc",    text:"From GMB optimization to full SEO campaigns, Muhtsan delivered consistent results. Our lead generation doubled within the first quarter.", rating:5 },
];

// ── SEO Case Studies by Industry ─────────────────────────────────
export const industrySeoCaseStudies = {
  "Healthcare & Medical": [
    { title:"Doctor & Clinics SEO",           client:"North Toronto Eye Care",    services:["SEO Optimization","Content Marketing","Link Building"],  badge:"Healthcare", link:"https://drive.google.com/file/d/1-jz02cIni0DNs0EsIrLVOPC4SYUlPr1p/view" },
    { title:"Hospitals & Healthcare Centers", client:"Health Care On Collins",    services:["SEO","Content Marketing","Technical SEO"],                badge:"Healthcare", link:"https://drive.google.com/file/d/1dE6fV1UO1CHd_aX-NJhv_2g-Gny69FBT/view" },
    { title:"Chiropractor SEO",               client:"Borchardt Medical Centre",  services:["Local SEO","Link Building","Technical SEO"],              badge:"Healthcare", link:"https://drive.google.com/file/d/1NcX8qjutwqT-p5IwOUFDg0t65QO-Pdlz/view" },
    { title:"Plastic Surgeon SEO",            client:"Ghosh Medical Group",       services:["SEO Optimization","Local SEO","Technical Audit"],         badge:"Healthcare", link:"https://drive.google.com/file/d/1q5rlWM3okPVxna4SsbCnli9Rf5KPnKpm/view" },
    { title:"Plastic Surgeon SEO",            client:"Dr Kourosh Tavakoli",       services:["SEO Optimization","Content Marketing","Link Building"],  badge:"Healthcare", link:"https://drive.google.com/file/d/1S54qk0v0Mzrej6Ldi0z_sFIGu8wzcxjN/view" },
    { title:"Dermatologist SEO",              client:"Skin Wellness Dermatology", services:["SEO Optimization","Content Marketing","Audit"],           badge:"Healthcare", link:"https://drive.google.com/file/d/15DMKhNvwHQFnc-8A6-8dt9Rds7FX-5j-/view" },
  ],
  "Legal Services": [
    { title:"Law Firm SEO",                  client:"Laporte Law Firm",      services:["Local SEO","Content Marketing","On-Page SEO"],           badge:"Legal", link:"https://drive.google.com/file/d/1bIbZNthrfyNFeEak3XiX3cV212piYB9F/view" },
    { title:"Personal Injury Lawyer SEO",    client:"Simmons and Fletchers", services:["Local SEO","Content Marketing","Technical Audit"],       badge:"Legal", link:"https://drive.google.com/file/d/1Rll3tnL7wWOifGb8uLpcNUtw8hazj2g-/view" },
    { title:"Immigration Lawyer SEO",        client:"Tsang and Associate",   services:["Local SEO","Content Marketing","On-Page SEO"],           badge:"Legal", link:"https://drive.google.com/file/d/1PXeX2zG3_YOsU0Z_AmBegXH_0ntWjKND/view" },
    { title:"Criminal Defense Attorney SEO", client:"The Madlin Law Firm",   services:["Local SEO","Content Marketing","Technical SEO"],         badge:"Legal", link:"https://drive.google.com/file/d/1vA9JDtE7MKrXsCR8MMkwDzzeFd7Rxx7b/view" },
  ],
  "Home Services": [
    { title:"Plumber SEO",            client:"Benjamin Franklin Plumbing",    services:["Local SEO","Link Building","Technical SEO"],         badge:"Home Services", link:"https://drive.google.com/file/d/1C7hBbGuRRkr-dRUhAxocNCcJru_nXQmJ/view" },
    { title:"Electrician SEO",        client:"Mister Sparky Electrician",     services:["Local SEO","Link Building","Technical SEO"],         badge:"Home Services", link:"https://drive.google.com/file/d/10NSqgR6J1GeBvBf0AWLneCkLCNrJzfUZ/view" },
    { title:"HVAC & Roofing SEO",     client:"Archer Roofing",                services:["Local SEO","Content Marketing","Technical Audit"],  badge:"Home Services", link:"https://drive.google.com/file/d/1hOF383HD3BJRjOV-lCAjhnJF-IaWsQAX/view" },
    { title:"Carpet Cleaning SEO",    client:"Brilliance Carpet Cleaning",    services:["Local SEO","Website Redesign","Technical SEO"],     badge:"Home Services", link:"https://drive.google.com/file/d/1XxxC0FV3ACiPKy3OADLP6kMGz9sBkBSX/view" },
    { title:"Pest Control SEO",       client:"Pest Shield Inc.",              services:["Local SEO","Content Marketing","Technical SEO"],    badge:"Home Services", link:"https://drive.google.com/file/d/1ZOpy643hxkCErM_IfzpzvGqZDl-2WQhT/view" },
  ],
  "Automotive": [
    { title:"Car Rental Services SEO", client:"Go Car Rental",       services:["Local SEO","Content Marketing","Technical SEO"], badge:"Automotive", link:"https://drive.google.com/file/d/1FQioRmqpIpB3JVsX5L0HI0B0MjW5bAbu/view" },
    { title:"Auto Repair Shop SEO",    client:"Precision Auto Repair",services:["Local SEO","Content Marketing","Technical SEO"], badge:"Automotive", link:"https://drive.google.com/file/d/1pRu-F4URLDI00Lh0M76GFJh9Wb4jWEOJ/view" },
  ],
  "Real Estate": [
    { title:"Real Estate Agent SEO",    client:"The Boutique Real Estate",    services:["Local SEO","Blogging"],                    badge:"Real Estate", link:"https://drive.google.com/file/d/12FyrYT3w3rKy9ewi8_lh2wkJfs01O3M1/view" },
    { title:"Property Management SEO",  client:"Property Management Inc",     services:["Local SEO","Video SEO","Blogging"],        badge:"Real Estate", link:"https://drive.google.com/file/d/1Q1qgCJiJNXuqeF8cs1Gticv6GGlffRiw/view" },
    { title:"Commercial Real Estate",   client:"Millennium Tower SF",         services:["Local SEO","Video SEO","Blogging"],        badge:"Real Estate", link:"https://drive.google.com/file/d/1tC8kUNf3dXI2YNdvSCbAISiSjbeKKobe/view" },
    { title:"Mortgage Broker SEO",      client:"Building Loans Australia",    services:["Local SEO","Blogging"],                    badge:"Real Estate", link:"https://drive.google.com/file/d/1A2UknegCS37k7FDEHjH6DPrfP7SK9Z9p/view" },
  ],
  "E-commerce & Retail": [
    { title:"Shopify SEO",      client:"The Grub Club",      services:["Shopify SEO","Product Page Optimization","Content Strategy"], badge:"E-commerce", link:"https://drive.google.com/file/d/1XXcdyHfwYYwUffM3hjrElob84kgyMA62/view" },
    { title:"Shopify SEO",      client:"New Smile Life",     services:["Shopify SEO","Product Page Optimization"],                   badge:"E-commerce", link:"https://drive.google.com/file/d/1D28b5jzE0zyP34lgWKLj4bZTd_pM7cNP/view" },
    { title:"Shopify SEO",      client:"Noah's Box",         services:["Product Page Optimization","Blogging","Shopify SEO"],        badge:"E-commerce", link:"https://drive.google.com/file/d/1a_l2spGSLDB3xZZXwQwdy4E60M7xPvLh/view" },
    { title:"WooCommerce SEO",  client:"Greenleaf Organics", services:["E-Commerce SEO","On-Page SEO","Technical SEO"],              badge:"E-commerce", link:"https://drive.google.com/file/d/1jEE0hL8puOY0If2wbPLxV8fo-m25-kq9/view" },
    { title:"Amazon SEO & PPC", client:"Instant Pot Duo",    services:["Amazon SEO","Product Listing","PPC Advertising"],           badge:"E-commerce", link:"https://drive.google.com/file/d/1Z4rZwJwyo9Iwg4Fn4yYIWOxYd0YcCtUy/view" },
  ],
};

export const completeSEOCaseStudies = [
  { client:"Tourism Calgary",       services:["SEO Optimization","Technical SEO","Link Building","Local SEO"],  badge:"Tourism",     link:"https://drive.google.com/file/d/1RUoeIy-OBnBHehCrNjbHGf29x3h37MPP/view" },
  { client:"Solis Optics",          services:["SEO Optimization","Content Marketing","Link Building"],           badge:"Optical",     link:"https://drive.google.com/file/d/1Z_R5gjkm1HgArwe2Zpo7V36fl5ZzgOBj/view" },
  { client:"North Toronto Eye Care",services:["SEO","Content Strategy","Link Building"],                         badge:"Healthcare",  link:"https://drive.google.com/file/d/1P2l5RSrU86iHaWai2HmPoy0wQAZy9IJc/view" },
  { client:"Harzig Eye",            services:["Content Marketing","Local SEO"],                                  badge:"Healthcare",  link:"https://drive.google.com/file/d/1WKPRwirSqZmpi0kW29y6zSdqSDRhB9J5/view" },
  { client:"Crown Hotels",          services:["SEO","Technical Enhancement","Link Building"],                    badge:"Hospitality", link:"https://drive.google.com/file/d/1aOaqKiMhMEnFJG692BaHArhBjApKViCk/view" },
  { client:"Chelsea Hotel Toronto", services:["Technical Enhancement & Performance","Off-Page SEO"],             badge:"Hospitality", link:"https://drive.google.com/file/d/1Tzy94BcjXbdq2MH_zSbV2V1qPJymNBYz/view" },
];

export const technicalSEOCaseStudies = [
  { client:"Wage Tap",       services:["On-Page SEO","Technical SEO","Authority Boost"], badge:"FinTech",    link:"https://drive.google.com/file/d/1y5H0q7UQEfsItAlUubtx3cVB6SrE3e61/view" },
  { client:"Stable Money",   services:["On-Page SEO","Technical SEO","Authority Boost"], badge:"Finance",    link:"https://drive.google.com/file/d/1mpUso4HwJ0827fmcpHzSEfLYBuZBV9H8/view" },
  { client:"Plooto",         services:["On-Page SEO","Technical SEO","Authority Boost"], badge:"SaaS",       link:"https://drive.google.com/file/d/1h9_o8_A6tpdlKA6lXPp0zDEmqxbZrINe/view" },
  { client:"Northside Rental",services:["On-Page SEO","Technical SEO","Authority Boost"],badge:"Rental",     link:"https://drive.google.com/file/d/1QaCS9wZYC-srR3dQN_OehhEJ4607Ew9m/view" },
  { client:"Mati Pay",       services:["On-Page SEO","Technical SEO","Authority Boost"], badge:"FinTech",    link:"https://drive.google.com/file/d/1iAMua_seEEPxchIhGFpGd1G3c4FwuUF8/view" },
  { client:"Edition Hotel",  services:["On-Page SEO","Technical SEO","Authority Boost"], badge:"Hospitality",link:"https://drive.google.com/file/d/1lAouCvHD90lDu2yMKecQrhETAqcb_ycA/view" },
];

export const contentStrategyCaseStudies = [
  { client:"Nomadic Matt",       services:["Content Optimization","Growth","Technical SEO"],           badge:"Travel",    link:"https://drive.google.com/file/d/1UDfopAILrdPUnxkQ3nx1fvleP_CJJoNE/view" },
  { client:"No Gap Dentist",     services:["Content Optimization","Growth","Technical SEO"],           badge:"Dental",    link:"https://drive.google.com/file/d/1CM9Ug1MxyAxY6sW0jEpbMvCp_r00sn-W/view" },
  { client:"Fairly Curated",     services:["Content Optimization","Website Performance","Keywords"],   badge:"Lifestyle", link:"https://drive.google.com/file/d/1J5kDpcnhJQJutsiy5PLrk77WNKNWZAt2/view" },
  { client:"CupCake and Cashmere",services:["On-Page SEO","Content Strategy"],                        badge:"Lifestyle", link:"https://drive.google.com/file/d/1WgjF50nFnZT6cSZjbxmhJUFHbMTRKqH8/view" },
];

export const paidAdsCaseStudies = [
  { client:"Snap Trade",      services:["Google Ads","Meta Ads","SEO Strategy"],          badge:"FinTech",    link:"https://drive.google.com/file/d/1NXX9Z9VgwNRX6U5pexHsZWOtsehQ1DVp/view" },
  { client:"Meininger Hotels",services:["Google Ads","Meta Ads","Content Creation"],      badge:"Hospitality",link:"https://drive.google.com/file/d/1s51HpCPsOeZ9bLOtQefG9d9-EfKksHmv/view" },
  { client:"Maya Mobiles",    services:["Google Ads","SEO Campaigns"],                   badge:"Retail",     link:"https://drive.google.com/file/d/1nf-7vP3SjhOUoZSFSf937RK-GVTAYvLU/view" },
  { client:"Macquarie Dental",services:["Google Ads","Meta Ads","Content Writing"],       badge:"Dental",     link:"https://drive.google.com/file/d/1A_444jt09joAXj9leCQxlpc3_H4eNLqH/view" },
  { client:"Intui Travel",    services:["Google Ads","Content Creation","Backlinking"],   badge:"Travel",     link:"https://drive.google.com/file/d/1bNpfGIkgELDmXkvwR3LUeSBeDWXYn_UY/view" },
  { client:"Eurostars Hotels",services:["Google Ads","Meta Ads"],                         badge:"Hospitality",link:"https://drive.google.com/file/d/190VXzgILZxegng8vxOHW7biuHnXI-wze/view" },
  { client:"Dental One",      services:["Google Ads","Keyword Analysis"],                 badge:"Dental",     link:"https://drive.google.com/file/d/1zX2L0yzGXsM4iqS6eM2jsou4N2CYo0vl/view" },
  { client:"Day Trip",        services:["Google Ads","Meta Ads","Content & UX"],          badge:"Travel",     link:"https://drive.google.com/file/d/18IYpm9fDsWUzFYKRnJspBBbvrLwikujr/view" },
];

export const automationCaseStudies = [
  { client:"Top Echelon",   services:["CRM Integration","Automated Workflow","Data Insights"], badge:"HubSpot", link:"https://drive.google.com/file/d/1XTcHpvTkqRgRwdWZportwuPvhG19EZDT/view" },
  { client:"Knight Frank",  services:["CRM Implementation","Process Optimization"],           badge:"HubSpot", link:"https://drive.google.com/file/d/1zP9l2Ztzi5Nc-VF_AFaMiGxqmI9IkuEQ/view" },
  { client:"Avison Young",  services:["CRM Consolidation","Process Optimization"],             badge:"HubSpot", link:"https://drive.google.com/file/d/1h8OMZRHXuO5BZ6wjUddsw1WWK0ahe810/view" },
  { client:"Credentially",  services:["Design and Development","Content Strategy"],            badge:"Webflow", link:"https://drive.google.com/file/d/1HxRUWZMrWiu2XGqPhLagiqbhyt9DZEv6/view" },
  { client:"Walker & Dunlop",services:["Website Redesign","CMS Implementation","UX"],         badge:"Webflow", link:"https://drive.google.com/file/d/1S-FK5HhWWOY8skYTy3xGLjxDmiC2Vcvm/view" },
  { client:"Mural",         services:["Strategy & Planning","Design & Development"],           badge:"Webflow", link:"https://drive.google.com/file/d/1WtRLZ_1B3PTaa7ocDNM0v9u7ADSyyuh0/view" },
];

export const developmentProjects = {
  wordpress: [
    { name:"Abundant Catering",      url:"https://abundantcatering.com" },
    { name:"Software Documentation", url:"https://softwaredocumentation.tech" },
    { name:"Top Shelf Tours",        url:"https://topshelftours.ca" },
    { name:"Epazz Inc.",             url:"https://epazz.com" },
    { name:"Avrio RX",               url:"https://avriorx.com" },
    { name:"Dario.pt",               url:"https://dario.pt" },
    { name:"Nour Villas Belize",     url:"https://nourvillasbelize.com" },
    { name:"Provify",                url:"https://provify.io" },
    { name:"Cards for Conversation", url:"https://cardsforconversation.com" },
  ],
  shopify: [
    { name:"Home Blooms",     url:"https://homeblooms.ae" },
    { name:"BF Outdoor Gear", url:"https://bfoutdoorgear.com" },
    { name:"Rothy's",         url:"https://rothys.com" },
    { name:"Death Wish Coffee",url:"https://deathwishcoffee.com" },
    { name:"Endy Sleep",      url:"https://endy.com" },
    { name:"PopSockets",      url:"https://popsockets.com" },
    { name:"DockATot",        url:"https://dockatot.com" },
    { name:"Guava Family",    url:"https://guavafamily.com" },
    { name:"FitTea",          url:"https://fittea.com" },
  ],
};
