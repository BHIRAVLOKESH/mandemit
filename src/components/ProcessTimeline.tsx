"use client";

import { motion } from "framer-motion";
import { Search, ClipboardList, Rocket, BarChart } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "We learn about your business, goals, and competition to build a solid foundation.",
        icon: Search,
    },
    {
        number: "02",
        title: "Strategy",
        description: "We craft a customized digital marketing roadmap tailored to your specific needs.",
        icon: ClipboardList,
    },
    {
        number: "03",
        title: "Execution",
        description: "Our experts implement the plan with precision across all digital channels.",
        icon: Rocket,
    },
    {
        number: "04",
        title: "Results",
        description: "We track, optimize, and report real growth with transparent analytics.",
        icon: BarChart,
    },
];

export default function ProcessTimeline() {
    return (
        <section className="bg-white py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-golden font-bold tracking-widest uppercase text-sm">Our Workflow</span>
                    <h2 className="text-4xl md:text-5xl font-black text-navy mt-4">Our Proven 4-Step Process</h2>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 border-t-2 border-dashed border-golden/30 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="relative mb-8">
                                    <div className="w-20 h-20 bg-golden rounded-full flex items-center justify-center text-navy text-2xl font-black group-hover:scale-110 transition-transform duration-300">
                                        {step.number}
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-navy rounded-lg flex items-center justify-center text-golden border-2 border-white">
                                        <step.icon className="w-5 h-5" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-4">{step.title}</h3>
                                <p className="text-gray-600 px-4">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
