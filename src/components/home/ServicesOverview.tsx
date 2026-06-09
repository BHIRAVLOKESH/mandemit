"use client";

import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import { Search, Megaphone, Code, PenTool, Globe, MessageSquare, ArrowRight } from "lucide-react";

const topServices = [
    { title: "SEO & SEM", description: "Rank higher on search engines and attract organic traffic that converts.", icon: Search, href: "/services/seo-sem" },
    { title: "Social Media Ads", description: "Targeted advertising that reaches your ideal customers where they hang out.", icon: Megaphone, href: "/services/facebook-instagram-ads" },
    { title: "Web & App Dev", description: "Custom, high-performing websites and apps built for business growth.", icon: Code, href: "/services/web-app-development" },
    { title: "Content Creation", description: "Stunning visuals and compelling copy that tell your brand's unique story.", icon: PenTool, href: "/services/content-creation" },
    { title: "Google Ads", description: "Instant visibility and high-quality leads through optimized search campaigns.", icon: Globe, href: "/services/google-ads" },
    { title: "Bulk SMS & Email", description: "Direct communication channels to engage and retain your customer base.", icon: MessageSquare, href: "/services/bulk-sms" },
];

export default function ServicesOverview() {
    return (
        <section className="py-24 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center space-y-4 mb-16">
                    <span className="text-golden font-bold tracking-widest uppercase text-sm">What We Offer</span>
                    <h2 className="text-4xl md:text-5xl font-black text-navy">Our Digital Marketing Services</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Everything your business needs to dominate online, from strategy to execution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topServices.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            {...service}
                            delay={index * 0.1}
                        />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center space-x-3 px-10 py-5 bg-golden text-navy font-bold rounded-2xl hover:bg-navy hover:text-golden transition-all duration-300 shadow-xl"
                    >
                        <span>View All 15 Services</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
