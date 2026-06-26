"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Rocket, BarChart, Megaphone, Smartphone, Star, Code, MessageCircle, Mail, PhoneCall, Search, Globe, Users, PenTool, Layout } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const services = [
    { name: "SEO & SEM", href: "/services/seo-sem", icon: Search },
    { name: "Social Media Ads", href: "/services/facebook-instagram-ads", icon: Megaphone },
    { name: "Web & App Dev", href: "/services/web-app-development", icon: Code },
    { name: "Content Creation", href: "/services/content-creation", icon: PenTool },
    { name: "Google Ads", href: "/services/google-ads", icon: Globe },
    { name: "Lead Generation", href: "/services/lead-generation", icon: Users },
    { name: "Bulk SMS/Email", href: "/services/bulk-sms", icon: MessageCircle },
    { name: "Influencer Marketing", href: "/services/influencer-marketing", icon: Star },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                scrolled ? "bg-navy-dark/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <Logo />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-8">
                    <Link href="/" className="text-white hover:text-golden transition-colors font-medium">Home</Link>
                    <Link href="/about" className="text-white hover:text-golden transition-colors font-medium">About Us</Link>

                    {/* Services Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center space-x-1 text-white group-hover:text-golden transition-colors font-medium">
                            <span>Services</span>
                            <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                        </button>

                        <div className="absolute top-full -left-1/2 mt-4 w-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <div className="grid grid-cols-2 p-6 gap-4">
                                {services.map((service) => (
                                    <Link
                                        key={service.name}
                                        href={service.href}
                                        className="flex items-start space-x-4 p-4 rounded-xl hover:bg-navy/5 transition-colors"
                                    >
                                        <div className="p-2 bg-navy/10 rounded-lg text-navy">
                                            <service.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-navy font-bold">{service.name}</h4>
                                            <p className="text-navy/60 text-xs mt-1">Growth-driven digital solutions.</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="bg-navy p-4 text-center">
                                <Link href="/services" className="text-golden text-sm font-bold hover:underline">View All 15 Services →</Link>
                            </div>
                        </div>
                    </div>

                    <Link href="/case-studies" className="text-white hover:text-golden transition-colors font-medium">Case Studies</Link>
                    <Link href="/blog" className="text-white hover:text-golden transition-colors font-medium">Blog</Link>
                    <Link href="/contact" className="text-white hover:text-golden transition-colors font-medium">Contact</Link>

                    <Link
                        href="/contact"
                        className="bg-golden text-navy font-bold px-6 py-2.5 rounded-full hover:bg-navy hover:text-golden transition-all duration-300 border-2 border-golden hover:border-navy"
                    >
                        Get a Quote
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-navy-dark flex flex-col pt-24 px-8 lg:hidden"
                    >
                        <div className="flex flex-col space-y-6 text-2xl font-heading">
                            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-golden">Home</Link>
                            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-golden">About Us</Link>
                            <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-golden">Services</Link>
                            <Link href="/case-studies" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-golden">Case Studies</Link>
                            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-golden">Blog</Link>
                            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-golden">Contact</Link>
                            <Link
                                href="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="bg-golden text-navy text-center font-bold px-6 py-4 rounded-xl mt-4"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
