"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Rocket, BarChart, Megaphone, Smartphone, Star, Wifi, ChevronDown, MapPin } from "lucide-react";

const floatingIcons = [
    { Icon: Megaphone, top: "20%", left: "10%", delay: 0 },
    { Icon: Rocket, top: "15%", left: "85%", delay: 1 },
    { Icon: BarChart, top: "70%", left: "15%", delay: 0.5 },
    { Icon: Smartphone, top: "65%", left: "80%", delay: 1.5 },
    { Icon: Star, top: "40%", left: "5%", delay: 2 },
    { Icon: Wifi, top: "45%", left: "90%", delay: 0.8 },
];

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden gradient-mesh">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 diagonal-lines opacity-20" />

            {/* Floating Icons */}
            {floatingIcons.map((item, index) => (
                <motion.div
                    key={index}
                    className="absolute text-golden/20 hidden md:block"
                    style={{ top: item.top, left: item.left }}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: item.delay,
                        ease: "easeInOut",
                    }}
                >
                    <item.Icon className="w-16 h-16" />
                </motion.div>
            ))}

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Side Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center space-x-2 bg-golden/10 border border-golden/20 px-4 py-2 rounded-full">
                        <span className="text-sm font-bold text-golden">🚀 #1 Digital Marketing Agency</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-tight">
                        Grow Your Business With <span className="text-golden">Smarter</span> Digital Marketing
                    </h1>

                    <p className="text-xl text-gray-300 max-w-xl">
                        MandemIT helps brands dominate online with data-driven strategies, creative content, and cutting-edge digital solutions that deliver real results.
                    </p>

                    <div className="flex flex-col sm:row items-start sm:items-center gap-4">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-golden text-navy font-bold rounded-xl hover:bg-white transition-all duration-300 transform hover:scale-105"
                        >
                            Get Started Today
                        </Link>
                        <Link
                            href="/services"
                            className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-navy transition-all duration-300 transform hover:scale-105"
                        >
                            View Our Services
                        </Link>
                    </div>

                    <div className="pt-8 border-t border-white/10 space-y-4">
                        <p className="text-gray-400 font-medium">Trusted by 500+ businesses across India & USA</p>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { flag: "🇮🇳", city: "Bengaluru" },
                                { flag: "🇮🇳", city: "Visakhapatnam" },
                                { flag: "🇺🇸", city: "San Antonio, TX" },
                            ].map((b) => (
                                <div key={b.city} className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                                    <MapPin className="w-3 h-3 text-golden" />
                                    <span className="text-sm text-gray-300 font-bold">{b.flag} {b.city}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Side – Digital Marketing Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative hidden lg:block"
                >
                    <div className="relative w-full aspect-square">
                        <div className="w-full h-full rounded-[60px] overflow-hidden border-4 border-golden/30 shadow-2xl">
                            <Image
                                src="/images/mandemit_office_team.png"
                                alt="MandemIT Office Team"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-navy/50 via-transparent to-transparent" />
                        </div>
                        {/* Floating badge */}
                        <motion.div
                            animate={{ y: [-8, 8, -8] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 bg-golden text-navy p-5 rounded-3xl shadow-2xl"
                        >
                            <p className="text-3xl font-black leading-none">10+</p>
                            <p className="text-xs font-bold uppercase tracking-wider">Years of Excellence</p>
                        </motion.div>
                        <motion.div
                            animate={{ y: [8, -8, 8] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white p-4 rounded-2xl shadow-xl"
                        >
                            <p className="text-xs font-bold text-golden uppercase tracking-widest">Offices in</p>
                            <p className="font-black text-sm">🇮🇳 India &amp; 🇺🇸 USA</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Arrow */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <ChevronDown className="w-10 h-10" />
            </motion.div>
        </section>
    );
}
