"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Users, Target, BarChart3, Zap, Globe, TrendingUp, Megaphone, Search } from "lucide-react";

const serviceData = {
  title: "Lead Generation",
  tagline: "Fill your sales pipeline with a consistent stream of qualified, ready-to-buy leads so your team can focus on closing.",
  image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=900&q=80",
  description: [
    "Lead generation is the lifeblood of any growing business. MandemIT's multi-channel lead generation system combines paid advertising, SEO, landing page optimization, and CRM integration to deliver warm, qualified prospects directly into your sales funnel.",
    "We don't just generate volume — we focus on lead quality. Our campaigns are calibrated to attract buyers who are genuinely interested in your product or service, resulting in higher conversion rates and shorter sales cycles.",
    "Whether you're a B2B company targeting enterprise clients or a local business growing in Visakhapatnam, we build lead machines that deliver consistent, measurable results month after month."
  ],
  icon: Users,
  features: [
    { title: "Landing Page Design", desc: "Conversion-optimized landing pages with clear CTAs, trust signals, and A/B tested layouts.", icon: Globe },
    { title: "Multi-Channel Campaigns", desc: "Coordinated campaigns across Google, Meta, LinkedIn, and email to maximize lead flow.", icon: Megaphone },
    { title: "Lead Qualification", desc: "Automated lead scoring and qualification workflows to filter high-intent prospects.", icon: Target },
    { title: "CRM Integration", desc: "Seamless integration with your CRM (Zoho, HubSpot, Salesforce) so no lead falls through the cracks.", icon: Zap },
    { title: "Lead Nurturing", desc: "Automated email and WhatsApp sequences that warm up leads until they're ready to buy.", icon: TrendingUp },
    { title: "Analytics Dashboard", desc: "Real-time dashboard showing CPL, lead volume, quality scores, and channel-wise attribution.", icon: BarChart3 },
  ],
  process: [
    { step: "01", title: "Ideal Customer Profiling", desc: "We define your perfect customer — their demographics, pain points, objections, and buying triggers." },
    { step: "02", title: "Funnel Architecture", desc: "We design the complete lead funnel: ad → landing page → lead magnet → nurture sequence → sales handoff." },
    { step: "03", title: "Campaign Launch", desc: "Multi-channel campaigns go live with continuous monitoring, bid optimization, and creative testing." },
    { step: "04", title: "Qualify & Deliver", desc: "Leads are scored, verified, and delivered to your team in real-time via CRM, email, or WhatsApp." },
  ],
  benefits: [
    { title: "Predictable Pipeline", desc: "Know exactly how many leads are coming each month so your sales team can plan and execute efficiently.", stat: "Steady Lead Flow" },
    { title: "Higher Close Rates", desc: "Qualified leads from targeted campaigns convert at 3-5× higher rates than cold outreach.", stat: "4× Close Rate" },
    { title: "Lower Cost Per Lead", desc: "Our optimized multi-channel approach consistently reduces CPL while increasing lead volume.", stat: "50% Lower CPL" },
  ],
  results: [
    { val: "250%", label: "Average Lead Growth" },
    { val: "5,000+", label: "Leads Generated Monthly" },
    { val: "60%", label: "Lower Cost Per Lead" },
  ],
  faqs: [
    { q: "What industries do you generate leads for?", a: "We generate leads for real estate, education, healthcare, financial services, SaaS, e-commerce, and local service businesses." },
    { q: "How do you verify lead quality?", a: "We use phone verification, email validation, and custom qualification questions in our lead capture forms to ensure every lead is genuine." },
    { q: "Do you provide exclusive or shared leads?", a: "We provide exclusive leads — every lead we generate belongs only to you and is never shared with competitors." },
    { q: "What is a typical cost per lead?", a: "CPL varies by industry and competition. Real estate leads typically cost ₹200-800, education ₹150-500, and B2B leads ₹500-2000. We optimize to achieve the lowest possible CPL." },
    { q: "Can you integrate leads into my existing CRM?", a: "Yes! We integrate with all major CRMs including Zoho, HubSpot, Salesforce, Freshsales, and custom systems via webhooks." },
  ],
  related: [
    { title: "Google Ads", icon: Globe, href: "/services/google-ads" },
    { title: "Social Media Ads", icon: Megaphone, href: "/services/facebook-instagram-ads" },
    { title: "SEO & SEM", icon: Search, href: "/services/seo-sem" },
  ],
};

export default function Page() {
  return <ServicePageTemplate {...serviceData} />;
}
