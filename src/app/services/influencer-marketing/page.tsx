"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Star, Users, Target, BarChart3, Globe, TrendingUp, Megaphone, Search } from "lucide-react";

const serviceData = {
  title: "Influencer Marketing",
  tagline: "Leverage the trust and reach of influential content creators to authentically grow your brand and drive real conversions.",
  image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=900&q=80",
  description: [
    "Influencer marketing is one of the fastest-growing channels in digital advertising. Consumers trust recommendations from real people far more than traditional ads — and MandemIT connects you with the right influencers to turn that trust into sales.",
    "We manage the entire process: from identifying and vetting micro, macro, and mega influencers who genuinely align with your brand, to negotiating contracts, briefing creators, and tracking campaign performance.",
    "Our network spans Instagram, YouTube, Twitter, LinkedIn, and emerging platforms — covering Fashion, Food, Tech, Finance, Health, Education, Real Estate, and more."
  ],
  icon: Star,
  features: [
    { title: "Influencer Discovery & Vetting", desc: "AI-powered matching to find influencers with authentic audiences that match your target customer profile.", icon: Users },
    { title: "Niche-Specific Campaigns", desc: "Campaigns across Fashion, Beauty, Tech, Food, Fitness, Finance, Travel, and every major niche.", icon: Target },
    { title: "Content Brief Creation", desc: "Detailed creative briefs that guide influencers while allowing authentic, genuine storytelling.", icon: Star },
    { title: "Contract & Negotiation", desc: "We handle all negotiations, contracts, and payment logistics with influencers and talent agencies.", icon: Globe },
    { title: "Performance Tracking", desc: "Real-time tracking of reach, engagement, story views, swipe-ups, and conversion attribution.", icon: BarChart3 },
    { title: "UGC Rights Management", desc: "Securing usage rights for influencer-created content to repurpose across your paid and organic channels.", icon: TrendingUp },
  ],
  process: [
    { step: "01", title: "Campaign Brief & Goals", desc: "We define your campaign objectives, target audience, budget, and KPIs before identifying any influencers." },
    { step: "02", title: "Influencer Shortlisting", desc: "We present a vetted shortlist with follower counts, engagement rates, audience demographics, and pricing." },
    { step: "03", title: "Outreach & Contracting", desc: "Once approved, we handle outreach, negotiations, agreements, and brief delivery to all selected creators." },
    { step: "04", title: "Execute & Report", desc: "Content goes live, we monitor performance in real-time, and deliver a comprehensive post-campaign report." },
  ],
  benefits: [
    { title: "Authentic Brand Reach", desc: "Influencer endorsements feel natural and trustworthy — driving higher engagement than brand-produced content.", stat: "6× Higher Engagement" },
    { title: "Targeted Niche Audiences", desc: "Micro-influencers with 10K-100K followers often have highly loyal, conversion-ready audiences.", stat: "3× Better Conversion" },
    { title: "Cost-Effective Brand Building", desc: "Influencer marketing delivers earned media value at a fraction of traditional celebrity endorsement costs.", stat: "11× Higher ROI" },
  ],
  results: [
    { val: "500+", label: "Influencers in Network" },
    { val: "11×", label: "Average ROI" },
    { val: "50M+", label: "Total Audience Reach" },
  ],
  faqs: [
    { q: "What type of influencers do you work with?", a: "We work with Mega (1M+), Macro (100K-1M), Micro (10K-100K), and Nano (1K-10K) influencers. Micro and nano influencers often deliver the best ROI for focused campaigns." },
    { q: "Which platforms do you cover?", a: "Instagram, YouTube, LinkedIn, Facebook, and emerging platforms like Threads and Moj, based on where your target audience is most active." },
    { q: "How do you ensure influencers are authentic?", a: "We vet every influencer for fake follower ratios, engagement authenticity, audience demographics, and previous brand safety track record using professional analytics tools." },
    { q: "Do we own the content the influencer creates?", a: "Content rights depend on the agreement. We negotiate full usage rights wherever possible so you can repurpose influencer content for paid ads and your own channels." },
    { q: "How long does a campaign take to set up?", a: "Standard influencer campaigns take 7-14 days from brief to content going live. Rush campaigns can be executed in 3-5 days for an additional coordination fee." },
  ],
  related: [
    { title: "Social Media Ads", icon: Megaphone, href: "/services/facebook-instagram-ads" },
    { title: "Content Creation", icon: Search, href: "/services/content-creation" },
    { title: "YouTube Ads", icon: Globe, href: "/services/youtube-ads" },
  ],
};

export default function Page() {
  return <ServicePageTemplate {...serviceData} />;
}
