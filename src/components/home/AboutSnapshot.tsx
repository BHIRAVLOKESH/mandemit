"use client";

import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutSnapshot() {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="aspect-square bg-navy rounded-[60px] overflow-hidden relative group shadow-2xl">
                        <Image
                            src="/images/mandemit_office_team.png"
                            alt="MandemIT Office Team"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-8 left-8 bg-golden text-navy p-6 rounded-3xl shadow-2xl transform -rotate-3 group-hover:rotate-0 transition-transform">
                            <span className="text-4xl font-black block leading-none">10+</span>
                            <span className="text-sm font-bold uppercase tracking-wider">Years of Excellence</span>
                        </div>
                    </div>
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-golden/20 rounded-full blur-3xl animate-pulse" />
                </div>

                <div className="space-y-8">
                    <div className="space-y-4">
                        <span className="text-golden font-bold tracking-widest uppercase text-sm border-b-2 border-golden pb-1">Who We Are</span>
                        <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight">
                            Global Strategy, <br />
                            <span className="text-golden">Local Excellence</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Under the leadership of <span className="font-bold text-navy">Mandem Reddy Sekhar</span>, MandemIT has evolved into a global digital powerhouse. With strategic hubs in <span className="font-bold text-navy">Bengaluru</span>, <span className="font-bold text-navy">Visakhapatnam</span>, and <span className="font-bold text-navy">San Antonio (USA)</span>, we bridge the gap between innovation and market dominance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "Data-Driven Global Strategies",
                            "Creative Digital Excellence",
                            "Multi-Branch Support",
                            "ROI-Focused Solutions"
                        ].map((point) => (
                            <div key={point} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-2xl border border-navy/5 hover:border-golden/30 transition-colors">
                                <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-golden/20 flex items-center justify-center text-golden">
                                    <CheckCircle className="w-5 h-5" />
                                </div>
                                <span className="font-bold text-navy text-sm">{point}</span>
                            </div>
                        ))}
                    </div>

                    <Link
                        href="/about"
                        className="inline-flex items-center space-x-3 px-8 py-4 bg-navy text-white font-bold rounded-xl hover:bg-navy-light transition-all duration-300"
                    >
                        <span>Learn More About Us</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
