"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import ServiceCard from "@/components/ServiceCard";
import { Search, Megaphone, Code, PenTool, Globe, Users, MessageSquare, Mail, PhoneCall, Layout, TrendingUp, BarChart3, Star, Smartphone, Settings, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const allServices = [
    { title: "SEO & SEM", description: "Improve your search visibility and drive organic growth through technical SEO and strategic keyword targeting.", icon: Search, href: "/services/seo-sem" },
    { title: "Social Media Ads", description: "Connect with your audience on Facebook, Instagram, and more with high-converting ad campaigns.", icon: Megaphone, href: "/services/facebook-instagram-ads" },
    { title: "Web & App Dev", description: "From responsive websites to complex web applications, we build digital experiences that perform.", icon: Code, href: "/services/web-app-development" },
    { title: "Content Creation", description: "Engage your audience with professional video, photography, and graphic design tailored to your brand.", icon: PenTool, href: "/services/content-creation" },
    { title: "Google Ads", description: "Reach ready-to-buy customers instantly with data-driven Search, Display, and Video campaigns.", icon: Globe, href: "/services/google-ads" },
    { title: "Lead Generation", description: "A steady stream of qualified leads to fuel your sales pipeline and business expansion.", icon: Users, href: "/services/lead-generation" },
    { title: "Bulk SMS", description: "Reach thousands of customers instantly with high-open-rate SMS marketing campaigns.", icon: Smartphone, href: "/services/bulk-sms" },
    { title: "Bulk Email", description: "Professional email marketing that builds relationships and drives repeat business.", icon: Mail, href: "/services/bulk-email" },
    { title: "Bulk Voice Calls", description: "Automated voice communication to scale your outreach and customer engagement.", icon: PhoneCall, href: "/services/bulk-voice-calls" },
    { title: "Web Banners", description: "Eye-catching display banners that grab attention and drive clicks across the web.", icon: Layout, href: "/services/web-banners" },
    { title: "Influencer Marketing", description: "Leverage the power of trusted voices to expand your brand's reach and authority.", icon: Star, href: "/services/influencer-marketing" },
    { title: "YouTube Ads", description: "Engage users with compelling video content on the world's largest video platform.", icon: Megaphone, href: "/services/youtube-ads" },
    { title: "LinkedIn Ads", description: "B2B marketing excellence to reach decision-makers and professional leads.", icon: Layout, href: "/services/linkedin-ads" },
    { title: "Blog Maintenance", description: "Regular, high-quality content updates to keep your site fresh and SEO-friendly.", icon: Settings, href: "/services/blog-maintenance" },
];

export default function Services() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="relative pt-40 pb-24 bg-navy overflow-hidden">
                <div className="absolute inset-0 diagonal-lines opacity-10" />
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <nav className="flex justify-center space-x-2 text-golden text-sm font-bold uppercase tracking-wider mb-6">
                        <Link href="/" className="hover:underline">Home</Link>
                        <span>/</span>
                        <span>Our Services</span>
                    </nav>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Our Services</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        15+ Premium Services to Grow Your Business Online. We provide end-to-end digital solutions tailored to your unique goals.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allServices.map((service, index) => (
                            <ServiceCard
                                key={service.title}
                                {...service}
                                delay={index * 0.05}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Our Services? */}
            <section className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black text-navy">Why Choose Our Digital Solutions?</h2>
                        <div className="space-y-6">
                            {[
                                { title: "Tailored Approach", desc: "No cookie-cutter strategies. We build solutions around your specific business needs." },
                                { title: "Full-Funnel Expertise", desc: "From awareness to conversion, we handle every stage of the customer journey." },
                                { title: "Real-Time Optimization", desc: "We don't just set it and forget it. We monitor and tweak for maximum performance." },
                            ].map((reason) => (
                                <div key={reason.title} className="flex space-x-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-golden flex items-center justify-center text-navy shadow-lg">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-navy mb-1">{reason.title}</h4>
                                        <p className="text-gray-600">{reason.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl border-4 border-golden/20 relative">
                            <Image
                                src="/images/digital_marketing_office.png"
                                alt="MandemIT Digital Marketing Office"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-navy/40 to-transparent" />
                            <div className="absolute bottom-6 left-6 bg-golden text-navy px-5 py-3 rounded-2xl shadow-xl">
                                <p className="font-black text-lg leading-none">500+</p>
                                <p className="text-xs font-bold uppercase tracking-wider">Brands Empowered</p>
                            </div>
                        </div>
                        <div className="absolute inset-0 border-2 border-golden/20 rounded-[40px] translate-x-4 translate-y-4 -z-10" />
                    </div>
                </div>
            </section>

            <CTABanner />

            <Footer />
        </main>
    );
}
