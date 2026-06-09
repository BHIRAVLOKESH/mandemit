"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        text: "MandemIT transformed our online presence. Our leads doubled in just 3 months! Their team is professional and highly skilled.",
        author: "Rajesh Kumar",
        role: "MD, TechVentures",
        rating: 5,
    },
    {
        text: "Best investment we made. Their Google Ads campaigns gave us 400% ROI. They really understand how to target the right audience.",
        author: "Priya Sharma",
        role: "CEO, StyleBoutique",
        rating: 5,
    },
    {
        text: "Professional team, excellent results. Our website traffic grew by 250% and our brand visibility is hit an all-time high.",
        author: "Suresh Reddy",
        role: "Owner, FoodDelight",
        rating: 5,
    },
];

export default function TestimonialSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="bg-navy py-24 px-6 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-golden/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-golden/5 rounded-full blur-3xl -ml-32 -mb-32" />

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <span className="text-golden font-bold tracking-widest uppercase text-sm">Success Stories</span>
                <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-16">What Our Clients Say</h2>

                <div className="relative min-h-[350px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl relative"
                        >
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-golden rounded-xl flex items-center justify-center text-navy shadow-lg">
                                <Quote className="w-6 h-6" />
                            </div>

                            <div className="flex justify-center space-x-1 mb-8">
                                {[...Array(testimonials[current].rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-golden text-golden" />
                                ))}
                            </div>

                            <p className="text-xl md:text-2xl text-navy italic leading-relaxed mb-8">
                                "{testimonials[current].text}"
                            </p>

                            <div>
                                <h4 className="text-xl font-bold text-navy">{testimonials[current].author}</h4>
                                <p className="text-golden font-medium">{testimonials[current].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-20">
                        <button onClick={prev} className="p-3 bg-white/10 text-white rounded-full hover:bg-golden hover:text-navy transition-all">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-20">
                        <button onClick={next} className="p-3 bg-white/10 text-white rounded-full hover:bg-golden hover:text-navy transition-all">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center space-x-2 mt-12">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={cn(
                                "w-3 h-3 rounded-full transition-all duration-300",
                                current === i ? "bg-golden w-8" : "bg-white/20"
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
