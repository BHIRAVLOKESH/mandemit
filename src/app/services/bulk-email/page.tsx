"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Mail, Target, BarChart3, Zap, Users, TrendingUp, Smartphone, Globe } from "lucide-react";

const serviceData = {
  title: "Bulk Email",
  tagline: "Build lasting customer relationships and drive repeat revenue with beautifully crafted, high-deliverability email campaigns.",
  image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=900&q=80",
  description: [
    "Email marketing delivers an average ROI of ₹4,200 for every ₹100 spent — making it the highest-returning digital marketing channel. MandemIT's Bulk Email service combines stunning design, smart segmentation, and deliverability expertise to maximize your results.",
    "We manage everything from HTML email design and copywriting to list hygiene, A/B testing, and performance analysis. Our campaigns consistently achieve above-industry open and click-through rates.",
    "From welcome sequences to promotional blasts to abandoned cart recovery, we engineer email campaigns that keep your brand top-of-mind and your revenue growing."
  ],
  icon: Mail,
  features: [
    { title: "Custom HTML Templates", desc: "Beautiful, mobile-responsive email designs that reflect your brand and render perfectly across all email clients.", icon: Mail },
    { title: "List Segmentation", desc: "Divide your audience into targeted segments based on behavior, purchase history, and demographics.", icon: Users },
    { title: "A/B Subject Line Testing", desc: "Test subject lines, sender names, and content to find combinations that maximize your open rates.", icon: Target },
    { title: "Automation Sequences", desc: "Set-and-forget drip campaigns: welcome series, onboarding, nurture sequences, and re-engagement flows.", icon: Zap },
    { title: "Deliverability Optimization", desc: "SPF, DKIM, and DMARC setup, list cleaning, and sender reputation management for inbox delivery.", icon: TrendingUp },
    { title: "Performance Analytics", desc: "Deep insights into open rates, CTR, bounce rates, unsubscribes, and revenue per email.", icon: BarChart3 },
  ],
  process: [
    { step: "01", title: "Strategy & Segmentation", desc: "We audit your existing list, segment your audience, and plan a campaign calendar aligned with your business goals." },
    { step: "02", title: "Design & Copywriting", desc: "Our designers create stunning HTML templates and our copywriters craft subject lines and body copy built to convert." },
    { step: "03", title: "Testing & Approval", desc: "We test across all major email clients (Gmail, Outlook, Apple Mail) and get your approval before sending." },
    { step: "04", title: "Send, Analyze & Optimize", desc: "Your campaign goes out, and within 48 hours we analyze performance to improve the next send." },
  ],
  benefits: [
    { title: "Highest Marketing ROI", desc: "Email consistently delivers the highest ROI of any digital channel — often exceeding 4,200% returns.", stat: "42× Average ROI" },
    { title: "Direct Audience Ownership", desc: "Unlike social media, you own your email list — no algorithm changes can cut off your access to your audience.", stat: "100% Owned Channel" },
    { title: "Automation That Scales", desc: "Email automation works for you 24/7 — nurturing leads and driving purchases while you sleep.", stat: "Revenue on Autopilot" },
  ],
  results: [
    { val: "45%", label: "Avg. Open Rate" },
    { val: "4200%", label: "Email Marketing ROI" },
    { val: "50M+", label: "Emails Sent" },
  ],
  faqs: [
    { q: "What email platform do you use?", a: "We work with industry-leading platforms like Mailchimp, Klaviyo, SendGrid, and Brevo — or your existing ESP if you have one." },
    { q: "How do I grow my email list?", a: "We help you build your list through opt-in forms, lead magnets, social media campaigns, and website pop-ups designed to convert visitors into subscribers." },
    { q: "How do you improve email deliverability?", a: "We set up proper email authentication (SPF, DKIM, DMARC), warm up sending IPs, clean your list regularly, and follow sending best practices to maintain a healthy sender reputation." },
    { q: "What is a good open rate?", a: "Industry averages vary, but 25-35% is generally considered good. Our managed campaigns consistently achieve 35-50% open rates through smart segmentation and compelling subject lines." },
    { q: "Can you set up automated email sequences?", a: "Absolutely! We specialize in building automated flows including welcome series, abandoned cart recovery, post-purchase sequences, and re-engagement campaigns." },
  ],
  related: [
    { title: "Bulk SMS", icon: Smartphone, href: "/services/bulk-sms" },
    { title: "Lead Generation", icon: Users, href: "/services/lead-generation" },
    { title: "Google Ads", icon: Globe, href: "/services/google-ads" },
  ],
};

export default function Page() {
  return <ServicePageTemplate {...serviceData} />;
}
