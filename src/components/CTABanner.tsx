"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function CTABanner() {
    return (
        <section className="px-6 py-24 bg-white">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto bg-gradient-to-r from-golden to-golden-light rounded-[40px] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl"
            >
                {/* Background Accents */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32 blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-navy/10 rounded-full -mr-32 -mb-32 blur-3xl" />

                <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black text-navy leading-tight">
                        Ready to Grow Your Business Online?
                    </h2>
                    <p className="text-xl text-navy/80 font-medium">
                        Join 500+ businesses that trust MandemIT for their digital marketing and transformation needs.
                    </p>
                    <div className="flex flex-col sm:row items-center justify-center gap-6 pt-4">
                        <Link
                            href="/contact"
                            className="px-10 py-5 bg-navy text-white font-bold rounded-2xl hover:bg-navy-light transition-all duration-300 transform hover:scale-105 shadow-xl"
                        >
                            Start Your Journey
                        </Link>
                        <Link
                            href="tel:8341369904"
                            className="flex items-center space-x-3 px-10 py-5 border-2 border-navy text-navy font-bold rounded-2xl hover:bg-navy hover:text-white transition-all duration-300 transform hover:scale-105"
                        >
                            <PhoneCall className="w-5 h-5" />
                            <span>Call Us Now</span>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
