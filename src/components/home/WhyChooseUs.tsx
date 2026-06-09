"use client";

import { BarChart3, Zap, TrendingUp, PieChart } from "lucide-react";

const features = [
    { icon: BarChart3, title: "Data-Driven Strategy", desc: "Every decision backed by real analytics and market research." },
    { icon: Zap, title: "Creative Experts", desc: "Award-winning creative team that makes your brand unforgettable." },
    { icon: TrendingUp, title: "Proven ROI", desc: "Consistent results that directly impact your bottom line." },
    { icon: PieChart, title: "End-to-End Solutions", desc: "From strategy to execution, we handle everything for you." },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 px-6 bg-navy-dark text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-navy/20 -skew-x-12 transform translate-x-20" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center space-y-4 mb-20">
                    <span className="text-golden font-bold tracking-widest uppercase text-sm">The MandemIT Advantage</span>
                    <h2 className="text-4xl md:text-5xl font-black">Why Businesses Choose MandemIT</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="space-y-6 group">
                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-golden group-hover:bg-golden group-hover:text-navy transition-all duration-300">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
