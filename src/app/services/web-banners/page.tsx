"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Layout, Palette, Target, Zap, BarChart3, Globe, PenTool, Users } from "lucide-react";

const serviceData = {
  title: "Web Banners",
  tagline: "Stop the scroll with stunning web banner ads that build brand awareness and drive clicks across millions of websites.",
  image: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=900&q=80",
  description: [
    "Web banner advertising is one of the most powerful tools for brand awareness and retargeting. MandemIT creates professional, conversion-optimized banner ads in all standard IAB sizes — designed to grab attention and drive action across the Google Display Network and beyond.",
    "Our creative team doesn't just make banners look good — we engineer them to perform. Every banner is built with clear hierarchy, compelling copy, and a strong call-to-action that drives clicks and conversions.",
    "From static banners to animated HTML5 ads and responsive display ads, we produce high-quality assets that integrate seamlessly with your broader digital advertising strategy."
  ],
  icon: Layout,
  features: [
    { title: "All Standard Sizes", desc: "We produce banners in all IAB standard sizes: Leaderboard, Rectangle, Skyscraper, Half Page, and more.", icon: Layout },
    { title: "Animated HTML5 Ads", desc: "Eye-catching animated banners with smooth transitions that outperform static ads by up to 267%.", icon: Zap },
    { title: "Responsive Display Ads", desc: "Google-optimized responsive assets that adapt to any ad slot size automatically.", icon: Globe },
    { title: "Brand Consistency", desc: "Every banner is crafted using your exact brand colors, fonts, and imagery for a coherent visual identity.", icon: Palette },
    { title: "A/B Variant Creation", desc: "Multiple creative variants to test and find the best-performing design for your audience.", icon: Target },
    { title: "Campaign Performance Tracking", desc: "Integration with campaign analytics to track impressions, CTR, and conversion performance.", icon: BarChart3 },
  ],
  process: [
    { step: "01", title: "Brief & Strategy", desc: "We define the campaign objective, target audience, key message, and CTA before any design work begins." },
    { step: "02", title: "Design Concepting", desc: "Our team creates 2-3 initial concepts in thumbnail form for your review and feedback." },
    { step: "03", title: "Full Production", desc: "Approved concepts are produced in all required sizes and formats, with animation where needed." },
    { step: "04", title: "Delivery & Campaign Launch", desc: "Files are delivered in all required formats, and we assist with upload and campaign setup if needed." },
  ],
  benefits: [
    { title: "Massive Reach", desc: "Display ads reach over 90% of global internet users across 2 million+ websites via the Google Display Network.", stat: "2M+ Websites" },
    { title: "Low Cost Per Impression", desc: "Banner advertising delivers brand impressions at a tiny fraction of the cost of TV or print advertising.", stat: "₹1 Per 1000 Views" },
    { title: "Powerful Retargeting", desc: "Show your banners to people who visited your website, creating a persistent reminder that drives return visits.", stat: "70% More Conversions" },
  ],
  results: [
    { val: "10M+", label: "Banner Impressions Monthly" },
    { val: "267%", label: "Better CTR vs Static" },
    { val: "500+", label: "Banners Designed" },
  ],
  faqs: [
    { q: "What banner sizes do you design?", a: "We design all standard IAB sizes including: 728×90 (Leaderboard), 300×250 (Medium Rectangle), 160×600 (Wide Skyscraper), 300×600 (Half Page), 320×50 (Mobile Banner), and more." },
    { q: "Do you create animated banners?", a: "Yes! We create animated HTML5 banners with smooth CSS animations and GIF formats. Animated banners typically achieve 267% higher click-through rates than static banners." },
    { q: "How many revisions are included?", a: "Each banner set includes 2 rounds of revisions. Additional revisions can be requested at a nominal charge." },
    { q: "What file formats do you deliver?", a: "We deliver in all required formats: JPG, PNG, GIF (animated), HTML5 (.zip), and SVG. We also provide Google-optimized responsive display ad assets." },
    { q: "Can you match our existing brand guidelines?", a: "Absolutely. We'll work with your existing brand kit (colors, fonts, logo, imagery) to ensure every banner is perfectly on-brand." },
  ],
  related: [
    { title: "Google Ads", icon: Globe, href: "/services/google-ads" },
    { title: "Content Creation", icon: PenTool, href: "/services/content-creation" },
    { title: "Lead Generation", icon: Users, href: "/services/lead-generation" },
  ],
};

export default function Page() {
  return <ServicePageTemplate {...serviceData} />;
}
