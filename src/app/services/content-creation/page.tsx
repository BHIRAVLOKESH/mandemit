"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import { PenTool, Camera, Video, Palette, FileText, BarChart3, Megaphone, Search } from "lucide-react";

const serviceData = {
  title: "Content Creation",
  tagline: "Captivating content that tells your brand's story, engages your audience, and converts scrollers into loyal customers.",
  image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=900&q=80",
  description: [
    "Content is the currency of the digital world. At MandemIT, our creative team produces scroll-stopping, brand-aligned content that works across every platform — from Instagram to YouTube to your website.",
    "We handle everything: professional photography, videography, motion graphics, infographics, social media posts, blog articles, and ad creatives. Every piece is built with strategy behind it — not just aesthetics.",
    "Great content doesn't just look good; it drives action. Our content consistently drives engagement, shares, and conversions for brands across industries in India and abroad."
  ],
  icon: PenTool,
  features: [
    { title: "Professional Photography", desc: "Studio and on-location product, team, and lifestyle photography that makes your brand shine.", icon: Camera },
    { title: "Video Production", desc: "Brand films, product demos, testimonials, and short-form social videos that tell powerful stories.", icon: Video },
    { title: "Graphic Design", desc: "Eye-catching social media posts, banners, infographics, and brand collateral for every platform.", icon: Palette },
    { title: "Copywriting", desc: "Persuasive website copy, ad scripts, and product descriptions written to convert readers.", icon: FileText },
    { title: "Blog & Article Writing", desc: "SEO-optimized, authoritative long-form content that ranks on Google and educates your audience.", icon: PenTool },
    { title: "Performance Analytics", desc: "Tracking engagement, reach, and content ROI to refine and improve every future piece.", icon: BarChart3 },
  ],
  process: [
    { step: "01", title: "Brand & Audience Deep Dive", desc: "We study your brand personality, target audience, competitors, and content gaps to build a winning strategy." },
    { step: "02", title: "Content Calendar Planning", desc: "A structured monthly calendar is created with themes, formats, and publishing dates for consistent output." },
    { step: "03", title: "Production & Creation", desc: "Our writers, designers, and video team produce all assets to brand guidelines and platform best practices." },
    { step: "04", title: "Publish, Engage & Analyze", desc: "Content goes live, we actively engage with your community, track performance, and optimize for the next cycle." },
  ],
  benefits: [
    { title: "Higher Organic Reach", desc: "Quality content earns shares, saves, and comments — giving you free reach beyond your followers.", stat: "3× Organic Reach" },
    { title: "Stronger Brand Identity", desc: "Consistent, professional content builds a recognizable brand that audiences trust and remember.", stat: "80% Brand Recall" },
    { title: "More Qualified Leads", desc: "Educational and entertaining content attracts the right audience — turning cold viewers into warm leads.", stat: "2× Lead Quality" },
  ],
  results: [
    { val: "5M+", label: "Content Views Generated" },
    { val: "70%", label: "Higher Engagement Rates" },
    { val: "200+", label: "Brands Served" },
  ],
  faqs: [
    { q: "How many posts do you create per month?", a: "Our packages start from 12 posts/month (3/week) and scale up based on your needs. Video content is priced separately." },
    { q: "Do you handle content for multiple platforms?", a: "Yes! We create platform-specific content for Instagram, Facebook, LinkedIn, YouTube, and your website blog." },
    { q: "What industries do you create content for?", a: "We work across real estate, fashion, food, healthcare, education, finance, tech, and more — adapting our style to each sector." },
    { q: "Who owns the content you create?", a: "You do! All content created for your brand is fully owned by you once payment is processed." },
    { q: "Can I request revisions?", a: "Absolutely. Each content piece includes up to 2 rounds of revisions to ensure it perfectly matches your vision." },
  ],
  related: [
    { title: "SEO & SEM", icon: Search, href: "/services/seo-sem" },
    { title: "Social Media Ads", icon: Megaphone, href: "/services/facebook-instagram-ads" },
    { title: "Blog Maintenance", icon: PenTool, href: "/services/blog-maintenance" },
  ],
};

export default function Page() {
  return <ServicePageTemplate {...serviceData} />;
}
