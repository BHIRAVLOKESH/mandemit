"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Video, Play, Target, BarChart3, Globe, TrendingUp, Megaphone, Users } from "lucide-react";

const serviceData = {
  title: "YouTube Ads",
  tagline: "Engage your audience with compelling video ads on the world's largest video platform and turn views into real business results.",
  image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=900&q=80",
  description: [
    "YouTube reaches over 2 billion logged-in users monthly, and video advertising is proven to be the most powerful format for brand recall and conversion. MandemIT's YouTube Ads service helps you create and run high-impact video campaigns that drive awareness, traffic, and sales.",
    "We handle everything — from crafting your video script and managing production to setting up precise audience targeting, bidding strategies, and ongoing campaign optimization on Google's powerful ad platform.",
    "Whether you want to run 6-second bumper ads for quick awareness, 15-30 second skippable ads for storytelling, or non-skippable ads for maximum message delivery, we find the right format for your goals and budget."
  ],
  icon: Video,
  features: [
    { title: "Skippable In-Stream Ads", desc: "Pay only when viewers choose to watch past 30 seconds — ideal for storytelling and conversion campaigns.", icon: Play },
    { title: "Non-Skippable Ads", desc: "15-20 second ads that deliver your full message without interruption — perfect for brand awareness.", icon: Video },
    { title: "Bumper Ads", desc: "6-second unskippable ads designed for quick, memorable brand impressions at scale.", icon: Zap },
    { title: "Audience Targeting", desc: "Targeting by demographics, interests, YouTube channel topics, custom intent audiences, and remarketing.", icon: Target },
    { title: "Video Production Support", desc: "Scriptwriting, storyboarding, and direction advice to ensure your video ad is built to convert.", icon: Globe },
    { title: "View & Conversion Tracking", desc: "Linking YouTube Ads to Google Analytics for full-funnel visibility on brand lift and revenue impact.", icon: BarChart3 },
  ],
  process: [
    { step: "01", title: "Creative Strategy", desc: "We identify your core message, emotional hook, and CTA — the foundation of a successful video ad." },
    { step: "02", title: "Audience & Placement Targeting", desc: "We configure precise targeting by interest, keyword, topic, channel placement, and custom intent audience." },
    { step: "03", title: "Campaign Setup & Tracking", desc: "Full campaign structure is built with proper conversion tracking linked to your website and CRM." },
    { step: "04", title: "Monitor, Optimize & Scale", desc: "Daily performance reviews, view-through rate analysis, and scaling of winning creatives and audiences." },
  ],
  benefits: [
    { title: "Massive Video Audience", desc: "YouTube is the world's 2nd largest search engine — your ads can reach billions of potential customers.", stat: "2B+ Monthly Users" },
    { title: "High Brand Recall", desc: "Video advertising drives 80% higher brand recall and 97% higher purchase intent than display ads.", stat: "80% Brand Recall" },
    { title: "Cost-Effective Views", desc: "With CPVs often as low as ₹0.25-0.50, YouTube is one of the most cost-effective channels for reach.", stat: "₹0.25 Per View" },
  ],
  results: [
    { val: "80%", label: "Brand Recall Lift" },
    { val: "5M+", label: "Monthly Video Views" },
    { val: "65%", label: "Higher Purchase Intent" },
  ],
  faqs: [
    { q: "Do I need a professionally produced video?", a: "Professional production is ideal, but not always necessary. High-quality smartphone videos with good lighting and sound can perform well. We advise on the right production level for your budget." },
    { q: "How does YouTube ad targeting work?", a: "You can target by demographic, interest, topic, YouTube channel (placement), keyword search, and custom intent audiences — people who've searched for terms related to your product on Google." },
    { q: "What video length works best?", a: "For awareness: 6-15 seconds. For consideration and conversions: 30-90 seconds with a strong hook in the first 5 seconds before the skip button appears." },
    { q: "What is the minimum budget for YouTube Ads?", a: "You can start with ₹500/day, but ₹1,500-2,000/day is recommended to gather data quickly and optimize effectively. There's no minimum commitment period." },
    { q: "Can you manage both video creation and ad management?", a: "Yes! We offer a complete package covering video script, direction brief, ad setup, targeting, ongoing management, and detailed monthly reporting." },
  ],
  related: [
    { title: "Social Media Ads", icon: Megaphone, href: "/services/facebook-instagram-ads" },
    { title: "Google Ads", icon: Globe, href: "/services/google-ads" },
    { title: "Influencer Marketing", icon: Users, href: "/services/influencer-marketing" },
  ],
};

function Zap(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>; }

export default function Page() {
  return <ServicePageTemplate {...serviceData} />;
}
