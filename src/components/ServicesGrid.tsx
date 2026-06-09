"use client";

import { Search, Megaphone, Code, PenTool, Globe, MessageSquare } from "lucide-react";
import ServiceCard from "./ServiceCard";

const topServices = [
    { title: "SEO & SEM", description: "Rank higher on search engines and attract organic traffic that converts.", icon: Search, href: "/services/seo-sem" },
    { title: "Social Media Ads", description: "Targeted advertising that reaches your ideal customers where they hang out.", icon: Megaphone, href: "/services/facebook-instagram-ads" },
    { title: "Web & App Dev", description: "Custom, high-performing websites and apps built for business growth.", icon: Code, href: "/services/web-app-development" },
    { title: "Content Creation", description: "Stunning visuals and compelling copy that tell your brand's unique story.", icon: PenTool, href: "/services/content-creation" },
    { title: "Google Ads", description: "Instant visibility and high-quality leads through optimized search campaigns.", icon: Globe, href: "/services/google-ads" },
    { title: "Bulk SMS & Email", description: "Direct communication channels to engage and retain your customer base.", icon: MessageSquare, href: "/services/bulk-sms" },
];

export default function ServicesGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topServices.map((service, index) => (
                <ServiceCard
                    key={service.title}
                    {...service}
                    delay={index * 0.1}
                />
            ))}
        </div>
    );
}
