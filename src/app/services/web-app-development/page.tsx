"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Code, Globe, Zap, BarChart3, Smartphone, Shield, Database, Layout, Search } from "lucide-react";

const serviceData = {
  title: "Web & App Development",
  tagline: "From stunning websites to powerful web apps — we engineer digital experiences that drive growth and delight users.",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80",
  description: [
    "At MandemIT, we build high-performance websites and web applications that are not just visually stunning but strategically designed to convert visitors into customers. Our development team combines modern design thinking with cutting-edge technology.",
    "From responsive landing pages to complex SaaS platforms, we handle the full development lifecycle — UI/UX design, frontend development, backend engineering, database architecture, and deployment.",
    "We are trusted by businesses in Visakhapatnam, Bengaluru, and globally to deliver scalable, secure, and fast digital products that stand out in a crowded market.",
  ],
  icon: Code,
  features: [
    { title: "Responsive Design", desc: "Pixel-perfect layouts that work beautifully on desktop, tablet, and mobile devices.", icon: Layout },
    { title: "Custom Web Apps", desc: "Full-stack web applications tailored to your unique business workflows and requirements.", icon: Globe },
    { title: "Performance Optimization", desc: "Blazing-fast load times with Core Web Vitals optimization and CDN integration.", icon: Zap },
    { title: "Mobile-First Development", desc: "Progressive web apps and mobile-responsive sites that users love on any device.", icon: Smartphone },
    { title: "Secure Architecture", desc: "Enterprise-grade security with SSL, data encryption, and OWASP best practices.", icon: Shield },
    { title: "Analytics Integration", desc: "Built-in tracking with Google Analytics, heatmaps, and conversion funnels.", icon: BarChart3 },
  ],
  process: [
    { step: "01", title: "Discovery & Planning", desc: "We map your business goals, target audience, and competitors to define a precise scope and tech stack." },
    { step: "02", title: "UX Design & Prototyping", desc: "Our designers create wireframes and interactive prototypes for your approval before writing a single line of code." },
    { step: "03", title: "Development & Testing", desc: "Our engineers build the frontend and backend using modern frameworks, with rigorous QA testing at every stage." },
    { step: "04", title: "Launch & Optimization", desc: "We deploy to production, monitor performance, and continuously optimize based on real user data." },
  ],
  benefits: [
    { title: "Higher Conversion Rates", desc: "Professionally designed sites convert up to 3x more visitors into paying customers.", stat: "3× Conversions" },
    { title: "Faster Load Speed", desc: "Our optimized builds achieve sub-2s load times, reducing bounce rates dramatically.", stat: "< 2s Load Time" },
    { title: "Increased Credibility", desc: "A modern, premium website builds immediate trust and positions you above competitors.", stat: "85% More Trust" },
  ],
  results: [
    { val: "300%", label: "Avg. Conversion Lift" },
    { val: "2×", label: "Faster Page Speed" },
    { val: "500+", label: "Projects Delivered" },
  ],
  faqs: [
    { q: "How long does it take to build a website?", a: "A standard business website typically takes 2-4 weeks. Complex web applications may take 6-12 weeks depending on scope and features." },
    { q: "Do you build e-commerce websites?", a: "Yes! We build full-featured e-commerce solutions with payment gateways, inventory management, and order tracking — on custom platforms or Shopify." },
    { q: "Will my website be mobile-friendly?", a: "Absolutely. Every project we deliver is built mobile-first and fully responsive across all screen sizes and devices." },
    { q: "Do you provide website maintenance after launch?", a: "Yes, we offer ongoing maintenance packages that include security updates, content edits, performance monitoring, and feature additions." },
    { q: "What technologies do you use?", a: "We work with Next.js, React, Node.js, Python, and modern CMS platforms, choosing the best stack for your specific requirements." },
  ],
  related: [
    { title: "SEO & SEM", icon: Search, href: "/services/seo-sem" },
    { title: "Google Ads", icon: Globe, href: "/services/google-ads" },
    { title: "Content Creation", icon: Database, href: "/services/content-creation" },
  ],
};

export default function Page() {
  return <ServicePageTemplate {...serviceData} />;
}
