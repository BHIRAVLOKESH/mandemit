"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Search, Globe, TrendingUp, BarChart3, Target, Layout, Settings, PenTool, Code } from "lucide-react";

const serviceData = {
    title: "SEO & SEM",
    tagline: "Dominate search results and drive sustainable organic growth with data-driven SEO and precision paid search strategies.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
    description: [
        "Search Engine Optimization (SEO) and Search Engine Marketing (SEM) are the twin pillars of digital visibility. At MandemIT, we deliver comprehensive strategies that ensure your business appears at the top exactly when your customers are searching.",
        "Our approach combines deep technical audits, semantic keyword research, and high-authority link building to achieve lasting results. Whether it's organic growth or targeted paid search, our certified specialists have you covered.",
        "With MandemIT, you don't just get traffic — you get qualified visitors ready to buy. We serve businesses in Visakhapatnam, Bengaluru, San Antonio, and beyond, helping them outrank competitors and grow sustainably.",
    ],
    icon: Search,
    features: [
        { title: "Technical SEO Audit", desc: "Complete analysis of your site's structure, speed, Core Web Vitals, and indexability.", icon: Settings },
        { title: "Keyword Research", desc: "Identifying high-value, intent-driven keywords that your ideal customers are searching for.", icon: Search },
        { title: "On-Page Optimization", desc: "Fine-tuning content, meta tags, schema markup, and internal linking for maximum SEO impact.", icon: Layout },
        { title: "Authority Link Building", desc: "Earning powerful backlinks from high-DA sites to boost your domain authority and rankings.", icon: Globe },
        { title: "PPC Campaign Management", desc: "Optimized paid search campaigns on Google and Bing for instant, measurable results.", icon: Target },
        { title: "Analytics & Reporting", desc: "Detailed monthly insights into rankings, traffic, conversions, and ROI.", icon: BarChart3 },
    ],
    process: [
        { step: "01", title: "Research & Audit", desc: "We begin with a deep dive into your current performance, technical health, and competitor keyword landscape." },
        { step: "02", title: "Strategy Planning", desc: "A custom roadmap is built focusing on quick wins, long-term authority building, and targeted ad spend." },
        { step: "03", title: "Implementation", desc: "Our technical and creative teams execute on-page, off-page, and paid optimizations simultaneously." },
        { step: "04", title: "Monitor & Optimize", desc: "Continuous A/B testing, rank tracking, and campaign refinement ensure sustained growth and maximum ROI." },
    ],
    benefits: [
        { title: "Sustained Organic Traffic", desc: "Organic growth that continues to deliver long after the initial investment, compounding over time.", stat: "250% Traffic Lift" },
        { title: "Lower Acquisition Cost", desc: "Reduce dependency on paid ads by dominating organic search and earning free, high-intent clicks.", stat: "40% Lower CAC" },
        { title: "Brand Authority", desc: "Ranking on page 1 of Google builds immediate trust and positions you as the industry leader.", stat: "90% More Trust" },
    ],
    results: [
        { val: "250%", label: "Traffic Increase" },
        { val: "400%", label: "Average ROI" },
        { val: "3×", label: "Lead Generation" },
    ],
    faqs: [
        { q: "How long does SEO take to show results?", a: "You'll typically see early improvements in 3-4 months, with significant, compounding growth after 6-12 months of consistent effort." },
        { q: "Do you guarantee #1 rankings?", a: "No ethical agency can guarantee a #1 ranking. We guarantee improved visibility, higher-quality traffic, and measurable business growth." },
        { q: "Is SEM better than SEO?", a: "SEM provides instant results while SEO builds long-term equity. The most successful businesses use a powerful blend of both." },
        { q: "Do you provide local SEO services?", a: "Yes! We specialize in local SEO for businesses in Madhurawada, Visakhapatnam, and surrounding areas, helping you dominate local search." },
        { q: "How do you measure SEO success?", a: "We track keyword rankings, organic traffic, conversion rates, page load times, and most importantly — revenue growth attributable to organic search." },
    ],
    related: [
        { title: "Google Ads", icon: Globe, href: "/services/google-ads" },
        { title: "Content Creation", icon: PenTool, href: "/services/content-creation" },
        { title: "Web & App Dev", icon: Code, href: "/services/web-app-development" },
    ],
};

export default function SEOServicePage() {
    return <ServicePageTemplate {...serviceData} />;
}
