"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Megaphone, Users, Target, BarChart3, TrendingUp, Image as ImageIcon, Globe, Search } from "lucide-react";

const serviceData = {
  title: "Facebook & Instagram Ads",
  tagline: "Reach millions of high-intent buyers on Meta's platforms with laser-targeted social ad campaigns that convert.",
  image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=80",
  description: [
    "Facebook and Instagram together hold over 3 billion active users — and MandemIT helps you reach exactly the right ones. Our certified Meta Ads specialists craft campaigns that blend compelling creative with precision audience targeting.",
    "From awareness to retargeting, we manage the full funnel. We use advanced strategies like Lookalike Audiences, Custom Audiences from your CRM, and dynamic product ads to squeeze maximum ROI from every rupee spent.",
    "Every campaign is backed by data. We test creatives relentlessly, optimize bids in real-time, and deliver clear, jargon-free reports so you always know your money is working hard for you."
  ],
  icon: Megaphone,
  features: [
    { title: "Audience Research", desc: "Deep demographic, interest-based, and behavioral targeting to reach your perfect customer.", icon: Users },
    { title: "Creative Ad Design", desc: "Scroll-stopping images, videos, carousels, and Reels ads designed in-house by our creative team.", icon: ImageIcon },
    { title: "Campaign Strategy", desc: "Full-funnel campaigns from awareness (TOF) to conversion (BOF) and re-engagement.", icon: Target },
    { title: "A/B Split Testing", desc: "Systematic testing of headlines, visuals, and CTAs to find and scale winning combinations.", icon: BarChart3 },
    { title: "Retargeting Funnels", desc: "Bringing back warm audiences who visited your site or engaged with your content.", icon: TrendingUp },
    { title: "Performance Reporting", desc: "Weekly and monthly clear dashboards showing ROAS, CPA, CPL, and revenue impact.", icon: BarChart3 },
  ],
  process: [
    { step: "01", title: "Audience & Competitor Research", desc: "We analyze your ideal customer profile, competitor ads (using Meta Ad Library), and market gaps." },
    { step: "02", title: "Campaign Architecture", desc: "We build a structured funnel with dedicated ad sets for cold, warm, and hot audiences." },
    { step: "03", title: "Creative Production", desc: "Our team produces high-converting ad graphics and videos aligned with your brand identity." },
    { step: "04", title: "Launch, Optimize & Scale", desc: "We go live, monitor daily, kill underperformers, and scale winning ad sets for maximum returns." },
  ],
  benefits: [
    { title: "Precision Targeting", desc: "Reach users by age, income, interests, behaviors, and life events — no wasted impressions.", stat: "5× Better Targeting" },
    { title: "High ROAS", desc: "Our managed campaigns consistently deliver multi-fold returns on advertising spend.", stat: "4× Average ROAS" },
    { title: "Fast Results", desc: "Social ads deliver measurable results within days of launch — unlike SEO which takes months.", stat: "Results in Days" },
  ],
  results: [
    { val: "400%", label: "Average ROAS" },
    { val: "60%", label: "Lower Cost-Per-Lead" },
    { val: "5M+", label: "Ad Impressions Delivered" },
  ],
  faqs: [
    { q: "What budget do I need for Facebook Ads?", a: "We recommend a minimum ad spend of ₹15,000/month for meaningful results, with our management fee separate. Higher budgets scale results proportionally." },
    { q: "How long before I see results?", a: "Most campaigns enter their learning phase in the first 7-14 days. Consistent results and optimization kick in from weeks 3-4 onward." },
    { q: "Do you create the ad creatives?", a: "Yes! Our in-house creative team designs all ad graphics, videos, and copy. You just approve before we go live." },
    { q: "Can you run both Facebook and Instagram ads?", a: "Absolutely — Meta's ad platform covers both. We strategically place ads across Facebook Feed, Instagram Feed, Stories, Reels, and more based on where your audience is most active." },
    { q: "How do you prevent ad fatigue?", a: "We continuously rotate creatives, refresh ad copy, and restructure audiences every 2-3 weeks to keep engagement high and costs low." },
  ],
  related: [
    { title: "Google Ads", icon: Globe, href: "/services/google-ads" },
    { title: "Lead Generation", icon: Users, href: "/services/lead-generation" },
    { title: "SEO & SEM", icon: Search, href: "/services/seo-sem" },
  ],
};

export default function Page() {
  return <ServicePageTemplate {...serviceData} />;
}
