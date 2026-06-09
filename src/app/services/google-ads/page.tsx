"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Globe, Target, BarChart3, Search, TrendingUp, Zap, Megaphone, Users } from "lucide-react";

const serviceData = {
  title: "Google Ads",
  tagline: "Appear at the very top of Google the moment your customers are searching — and only pay when they click.",
  image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=900&q=80",
  description: [
    "Google Ads is the world's most powerful advertising platform — and MandemIT's certified Google Ads specialists know exactly how to make it work for your business. We create, manage, and optimize campaigns across Search, Display, Shopping, and YouTube.",
    "Our data-driven approach means every campaign is laser-focused on your goals: whether that's generating calls, form submissions, online sales, or foot traffic to your store. We eliminate wasted spend and allocate your budget where it performs best.",
    "From small businesses in Visakhapatnam to enterprises targeting global markets, our Google Ads management delivers transparent results and consistent growth."
  ],
  icon: Globe,
  features: [
    { title: "Search Campaigns", desc: "Text ads that appear when users search your exact services on Google — capturing high-intent buyers.", icon: Search },
    { title: "Display Advertising", desc: "Visual banner ads across 2M+ websites to build brand awareness and retarget visitors.", icon: Megaphone },
    { title: "Shopping Ads", desc: "Product listing ads that show your inventory with price and image directly in search results.", icon: TrendingUp },
    { title: "Negative Keywords", desc: "Blocking irrelevant searches to prevent wasted clicks and dramatically lower your CPC.", icon: Target },
    { title: "Bid Optimization", desc: "Smart bidding strategies that maximize conversions within your specified target CPA or ROAS.", icon: Zap },
    { title: "Quality Score Improvement", desc: "Optimizing ad relevance and landing page experience to lower costs and improve ad rank.", icon: BarChart3 },
  ],
  process: [
    { step: "01", title: "Account Audit & Setup", desc: "We audit your existing account (or build from scratch), setting up proper conversion tracking and campaign structure." },
    { step: "02", title: "Keyword & Competitor Research", desc: "Identifying the exact keywords your buyers use, plus analysing competitor strategies using tools like SEMrush." },
    { step: "03", title: "Ad Creation & Landing Pages", desc: "Writing compelling RSAs, creating ad extensions, and ensuring your landing page is optimized for conversion." },
    { step: "04", title: "Optimize & Scale", desc: "Weekly bid adjustments, A/B ad testing, Quality Score optimization, and monthly scaled budget allocation." },
  ],
  benefits: [
    { title: "Instant Visibility", desc: "Unlike SEO, Google Ads put you at the top of search results the moment your campaign goes live.", stat: "Day-1 Results" },
    { title: "Pay Only for Clicks", desc: "You only pay when a real user clicks your ad — no charges for impressions or views.", stat: "Zero Wasted Spend" },
    { title: "Highly Measurable", desc: "Full transparency on every rupee spent, every click, and every conversion — down to revenue generated.", stat: "100% Trackable" },
  ],
  results: [
    { val: "450%", label: "Average ROAS" },
    { val: "35%", label: "Lower Cost-Per-Click" },
    { val: "1000+", label: "Campaigns Managed" },
  ],
  faqs: [
    { q: "What budget do I need for Google Ads?", a: "We recommend a minimum ad spend of ₹20,000/month to gather sufficient data for optimization. Higher budgets generally deliver results faster." },
    { q: "How quickly will I see results?", a: "Most campaigns see initial traffic within 24-48 hours of launch. Significant optimization and results typically occur within the first 30-60 days." },
    { q: "Do you manage Shopping ads for e-commerce?", a: "Yes! We specialize in Google Shopping campaigns, including Google Merchant Center setup, product feed optimization, and Performance Max campaigns." },
    { q: "What is Quality Score and why does it matter?", a: "Quality Score is Google's rating of your ad's relevance. A higher score means lower CPCs and better ad placement — saving you money while improving results." },
    { q: "How do you report on campaign performance?", a: "You receive a detailed monthly report covering impressions, clicks, CTR, CPC, conversion rate, CPA, and attributed revenue. We also offer a live dashboard." },
  ],
  related: [
    { title: "SEO & SEM", icon: Search, href: "/services/seo-sem" },
    { title: "Social Media Ads", icon: Megaphone, href: "/services/facebook-instagram-ads" },
    { title: "Lead Generation", icon: Users, href: "/services/lead-generation" },
  ],
};

export default function Page() {
  return <ServicePageTemplate {...serviceData} />;
}
