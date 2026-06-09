"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import { BookOpen, PenTool, Search, BarChart3, Globe, RefreshCw, Settings, TrendingUp } from "lucide-react";

const serviceData = {
  title: "Blog Maintenance",
  tagline: "Keep your website fresh, authoritative, and SEO-powerful with expertly managed blog content published on a consistent schedule.",
  image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=80",
  description: [
    "A stale website is invisible to search engines and unconvincing to visitors. MandemIT's Blog Maintenance service keeps your site alive with regular, high-quality, SEO-optimized articles that rank on Google, establish your authority, and nurture leads through the buying funnel.",
    "Our team of industry-specialized writers research your niche thoroughly, identify topical gaps your competitors haven't covered, and produce long-form content that earns organic backlinks and drives sustained search traffic.",
    "Beyond writing, we handle everything: on-page SEO, internal linking, image optimization, formatting, publishing, and monthly performance reporting — so your blog operates as a genuine revenue-generating machine."
  ],
  icon: BookOpen,
  features: [
    { title: "SEO-Optimized Article Writing", desc: "In-depth, keyword-rich articles with proper structure, meta descriptions, and schema markup for maximum ranking potential.", icon: PenTool },
    { title: "Keyword & Topic Research", desc: "Monthly research to identify high-value, low-competition topics your ideal customers are actively searching.", icon: Search },
    { title: "On-Page SEO Optimization", desc: "Perfect heading hierarchy, keyword density, internal links, alt tags, and page speed checks on every post.", icon: Settings },
    { title: "Content Calendar Management", desc: "A structured publishing schedule ensuring consistent content output aligned with seasonal trends and business goals.", icon: RefreshCw },
    { title: "Content Updates & Refreshes", desc: "Regularly updating and improving existing posts to maintain and improve their search rankings over time.", icon: Globe },
    { title: "Performance Analytics", desc: "Monthly ranking reports showing which articles drive the most traffic, leads, and organic keyword growth.", icon: BarChart3 },
  ],
  process: [
    { step: "01", title: "SEO Audit & Keyword Research", desc: "We audit your existing content, identify gaps, and research a bank of topics with strong ranking potential for your niche." },
    { step: "02", title: "Content Calendar Planning", desc: "A 30-day editorial calendar is built and shared for your review — balancing SEO opportunity, business goals, and audience interest." },
    { step: "03", title: "Writing, Editing & Optimization", desc: "Expert writers produce the articles, our editors review for quality, and our SEO team optimizes before every publish." },
    { step: "04", title: "Publish, Promote & Analyze", desc: "Articles go live, we promote via social snippets and email newsletters, then track performance to improve the next month's strategy." },
  ],
  benefits: [
    { title: "Compounding Organic Growth", desc: "Unlike ads that stop when budget runs out, quality blog content continues ranking and driving free traffic for years.", stat: "3× Traffic in 6 Months" },
    { title: "Established Thought Leadership", desc: "Consistent, expert content positions your brand as the go-to authority in your industry — building trust at scale.", stat: "Industry Authority" },
    { title: "Qualified Lead Generation", desc: "Educational content attracts buyers in the research phase, warming them up and making them ready to convert.", stat: "5× Qualified Traffic" },
  ],
  results: [
    { val: "300%", label: "Organic Traffic Growth" },
    { val: "8×", label: "More Inbound Links" },
    { val: "50K+", label: "Blog Readers Per Month" },
  ],
  faqs: [
    { q: "How many articles do you publish per month?", a: "Our standard packages include 4-8 articles/month (1-2 per week). Custom plans with higher frequencies are available based on your competitive landscape and budget." },
    { q: "Who writes the articles?", a: "Our team of industry-specialized human writers research and write all content. Every article is reviewed by an SEO specialist and editor before publishing." },
    { q: "What article length do you write?", a: "Most of our articles are 1,200-2,500 words. For highly competitive topics, we write in-depth pillar content of 3,000-5,000 words designed to rank and earn backlinks." },
    { q: "Do you publish directly to my website?", a: "Yes, if you grant us access, we publish directly to your WordPress, Webflow, or other CMS. Otherwise, we deliver formatted, ready-to-publish drafts." },
    { q: "How long before I see SEO results from blogging?", a: "New articles typically start ranking within 3-6 months. With consistent publishing and our internal linking strategy, you'll see compounding traffic growth from month 4 onward." },
  ],
  related: [
    { title: "SEO & SEM", icon: Search, href: "/services/seo-sem" },
    { title: "Content Creation", icon: PenTool, href: "/services/content-creation" },
    { title: "Web & App Dev", icon: Globe, href: "/services/web-app-development" },
  ],
};

export default function Page() {
  return <ServicePageTemplate {...serviceData} />;
}
