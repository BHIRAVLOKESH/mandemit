"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Briefcase, Users, Target, BarChart3, Globe, TrendingUp, Megaphone, Search } from "lucide-react";

const serviceData = {
  title: "LinkedIn Ads",
  tagline: "Reach C-suite executives, decision-makers, and professionals with B2B ad campaigns that drive serious business results.",
  image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=900&q=80",
  description: [
    "LinkedIn is the world's premier B2B marketing platform with over 900 million professionals. MandemIT's LinkedIn Ads service helps you precision-target decision-makers — CEOs, CTOs, HR Directors, and procurement heads — by company, role, industry, and seniority.",
    "Whether you're selling enterprise software, professional services, educational programs, or recruiting top talent, LinkedIn Ads consistently deliver the highest-quality B2B leads of any social platform.",
    "Our LinkedIn-certified specialists manage Sponsored Content, Message Ads, Dynamic Ads, and Lead Gen Forms — crafting compelling campaigns that generate pipeline, not just clicks."
  ],
  icon: Briefcase,
  features: [
    { title: "Job Title & Seniority Targeting", desc: "Target exactly by job title, department, seniority level, and company — reaching only true decision-makers.", icon: Target },
    { title: "Sponsored Content", desc: "Native ads in the LinkedIn feed that blend seamlessly with organic content for high engagement.", icon: Globe },
    { title: "LinkedIn Lead Gen Forms", desc: "Pre-filled forms that capture high-quality leads without requiring users to leave LinkedIn.", icon: Users },
    { title: "Message Ads (InMail)", desc: "Personalized direct messages delivered to your prospects' LinkedIn inbox for maximum attention.", icon: Megaphone },
    { title: "Account-Based Marketing", desc: "Target specific companies from your prospect list — ideal for enterprise sales and ABM strategies.", icon: Briefcase },
    { title: "Campaign Analytics & ROI", desc: "LinkedIn's conversion tracking and our custom reporting give you full visibility on pipeline impact.", icon: BarChart3 },
  ],
  process: [
    { step: "01", title: "B2B Audience Definition", desc: "We identify your ideal customer profile (ICP) by role, seniority, company size, industry, and location for pinpoint targeting." },
    { step: "02", title: "Ad Format Selection", desc: "We choose the right mix of Sponsored Content, Lead Gen Forms, Message Ads, and Dynamic Ads for your objectives." },
    { step: "03", title: "Creative & Copy Development", desc: "Professional ad copy and visuals crafted to speak to business professionals — authoritative, benefit-driven, and concise." },
    { step: "04", title: "Launch, Optimize & Report", desc: "Campaigns go live with continuous bid optimization, A/B testing, and detailed monthly performance reporting." },
  ],
  benefits: [
    { title: "Highest-Quality B2B Leads", desc: "LinkedIn leads are pre-qualified by professional context — they're far more valuable than leads from any other platform.", stat: "2× Better Lead Quality" },
    { title: "2× Buying Power", desc: "LinkedIn audiences have 2× the buying power of average web audiences — making conversions more impactful.", stat: "2× Higher Intent" },
    { title: "Direct Inbox Access", desc: "Message Ads (InMail) land directly in your prospect's LinkedIn inbox — achieving 3× higher open rates than email.", stat: "3× vs. Cold Email" },
  ],
  results: [
    { val: "4×", label: "More Qualified Leads" },
    { val: "2×", label: "Average Buying Power" },
    { val: "65%", label: "Higher B2B Conversion Rate" },
  ],
  faqs: [
    { q: "Is LinkedIn Ads only for B2B businesses?", a: "Primarily yes — LinkedIn excels at B2B marketing. However, premium B2C brands targeting high-income professionals (luxury goods, executive education, financial planning) also see strong results." },
    { q: "What is the minimum budget for LinkedIn Ads?", a: "LinkedIn recommends a minimum of $10/day, but practically, ₹50,000-75,000/month is needed to gather meaningful data and achieve noticeable results given higher CPCs." },
    { q: "How do LinkedIn Lead Gen Forms work?", a: "When a user clicks your ad, a pre-filled form appears (using their LinkedIn profile data) that they can submit in seconds — dramatically reducing friction and increasing conversion rates." },
    { q: "Can I target employees of specific companies?", a: "Yes! LinkedIn's Company Targeting allows you to serve ads specifically to employees of named companies — perfect for account-based marketing (ABM) strategies." },
    { q: "How do you measure LinkedIn Ads success?", a: "We track Click-Through Rate (CTR), Cost Per Lead (CPL), Lead Form completion rates, and most importantly — how many LinkedIn leads become actual pipeline and revenue for your business." },
  ],
  related: [
    { title: "Lead Generation", icon: Users, href: "/services/lead-generation" },
    { title: "Twitter Ads", icon: TrendingUp, href: "/services/twitter-ads" },
    { title: "Google Ads", icon: Search, href: "/services/google-ads" },
  ],
};

export default function Page() {
  return <ServicePageTemplate {...serviceData} />;
}
