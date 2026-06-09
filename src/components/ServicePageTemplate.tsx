"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ServicePageProps {
    title: string;
    tagline: string;
    description: string[];
    icon: any;
    image: string;
    features: { title: string; desc: string; icon: any }[];
    process: { title: string; desc: string; step: string }[];
    benefits: { title: string; desc: string; stat: string }[];
    results: { val: string; label: string }[];
    faqs: { q: string; a: string }[];
    related: { title: string; icon: any; href: string }[];
}

export default function ServicePageTemplate({
    title, tagline, description, icon: Icon, image, features, process, benefits, results, faqs, related
}: ServicePageProps) {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* ── Hero ─────────────────────────────────────────── */}
            <section className="relative pt-40 pb-28 bg-navy overflow-hidden">
                <div className="absolute inset-0 diagonal-lines opacity-10" />
                {/* subtle radial glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-golden/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <nav className="flex justify-center items-center gap-2 text-golden/80 text-sm font-semibold uppercase tracking-widest mb-10">
                        <Link href="/" className="hover:text-golden transition-colors">Home</Link>
                        <span className="opacity-40">/</span>
                        <Link href="/services" className="hover:text-golden transition-colors">Services</Link>
                        <span className="opacity-40">/</span>
                        <span className="text-golden">{title}</span>
                    </nav>

                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.85 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-24 h-24 bg-gradient-to-br from-golden to-yellow-400 rounded-3xl mx-auto mb-8 flex items-center justify-center text-navy shadow-2xl shadow-golden/30"
                    >
                        <Icon className="w-12 h-12" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
                    >
                        {title}
                        <span className="block text-golden">Services</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        {tagline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            href="/contact"
                            className="px-10 py-5 bg-golden text-navy font-black rounded-2xl hover:bg-white hover:shadow-2xl hover:shadow-golden/20 transition-all duration-300 text-lg"
                        >
                            Get Free Consultation
                        </Link>
                        <Link
                            href="/services"
                            className="px-10 py-5 border-2 border-white/20 text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300 text-lg"
                        >
                            All Services
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ── Service Overview ─────────────────────────────── */}
            <section className="py-28 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Real image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-golden/10 aspect-[4/3]">
                            <Image
                                src={image}
                                alt={`${title} service at MandemIT`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-navy/50 via-transparent to-transparent" />
                            {/* Floating badge */}
                            <div className="absolute bottom-6 left-6 bg-golden text-navy px-5 py-3 rounded-2xl shadow-2xl">
                                <p className="font-black text-lg leading-none">{results[0]?.val ?? "200%"}</p>
                                <p className="text-xs font-bold uppercase tracking-wider">{results[0]?.label ?? "Average ROI"}</p>
                            </div>
                        </div>
                        {/* Decorative border */}
                        <div className="absolute inset-0 border-2 border-golden/20 rounded-[40px] translate-x-5 translate-y-5 -z-10" />
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-7"
                    >
                        <div className="inline-flex items-center gap-2 bg-golden/10 text-golden px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest">
                            <Icon className="w-4 h-4" /> {title}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight">
                            What is <span className="text-golden">{title}?</span>
                        </h2>
                        <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                            {description.map((p, i) => <p key={i}>{p}</p>)}
                        </div>
                        <div className="space-y-3">
                            {["Data-driven strategies", "Transparent reporting", "Dedicated account manager"].map((item) => (
                                <div key={item} className="flex items-center gap-3 text-navy font-semibold">
                                    <CheckCircle2 className="w-5 h-5 text-golden flex-shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div className="p-6 bg-gradient-to-r from-golden/10 to-golden/5 border-l-4 border-golden rounded-r-2xl">
                            <p className="text-navy font-bold italic text-lg">
                                &ldquo;Businesses using our {title} strategies see an average of {results[1]?.val ?? "300%"} ROI within 6 months.&rdquo;
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── What We Offer ────────────────────────────────── */}
            <section className="py-28 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black text-navy mb-4">
                            What&apos;s Included in Our<br />
                            <span className="text-golden">{title} Package</span>
                        </h2>
                        <p className="text-gray-500 text-lg">Everything you need to dominate your market, under one roof.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all border border-navy/5 group hover:-translate-y-1"
                            >
                                <div className="w-14 h-14 bg-navy rounded-2xl flex items-center justify-center text-golden mb-6 group-hover:bg-golden group-hover:text-navy transition-all duration-300">
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h4 className="text-xl font-bold text-navy mb-3">{feature.title}</h4>
                                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Our Process ──────────────────────────────────── */}
            <section className="py-28 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-navy mb-4">
                            How We Deliver <span className="text-golden">{title} Excellence</span>
                        </h2>
                        <p className="text-gray-500 text-lg max-w-xl mx-auto">A proven, transparent process that delivers results every time.</p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-10">
                        {process.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-8 items-start relative"
                            >
                                {i < process.length - 1 && (
                                    <div className="absolute top-20 left-8 bottom-0 w-0.5 bg-gradient-to-b from-golden/40 to-transparent -ml-px" />
                                )}
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-navy to-navy/80 rounded-2xl flex items-center justify-center text-golden font-black text-lg z-10 shadow-lg shadow-navy/20">
                                    {p.step}
                                </div>
                                <div className="pt-2 flex-grow bg-gray-50 rounded-2xl p-6 border border-navy/5">
                                    <h4 className="text-2xl font-bold text-navy mb-2">{p.title}</h4>
                                    <p className="text-gray-500 text-lg leading-relaxed">{p.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Key Benefits ─────────────────────────────────── */}
            <section className="py-28 px-6 bg-navy relative overflow-hidden">
                <div className="absolute inset-0 diagonal-lines opacity-5" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-golden/10 rounded-full blur-3xl" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                            Why Choose Our <span className="text-golden">{title}</span>?
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {benefits.map((b, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-golden/30 transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-golden/10 border border-golden/30 rounded-2xl flex items-center justify-center text-golden group-hover:bg-golden group-hover:text-navy transition-all mb-6">
                                    <Star className="w-8 h-8" />
                                </div>
                                <div className="text-3xl font-black text-golden mb-2">{b.stat}</div>
                                <h5 className="text-xl font-bold text-white mb-3">{b.title}</h5>
                                <p className="text-gray-400 leading-relaxed">{b.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Results ──────────────────────────────────────── */}
            <section className="py-28 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-navy mb-4">
                            Results We&apos;ve <span className="text-golden">Achieved</span>
                        </h2>
                        <p className="text-gray-500 text-lg max-w-xl mx-auto">Real numbers from real businesses we&apos;ve helped grow.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {results.map((r, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-14 rounded-[40px] text-center shadow-xl border border-navy/5 hover:border-golden/30 hover:shadow-2xl transition-all group"
                            >
                                <div className="text-6xl font-black text-golden mb-4 group-hover:scale-110 transition-transform">{r.val}</div>
                                <div className="text-navy font-bold uppercase tracking-widest text-sm">{r.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQAccordion items={faqs} />

            {/* ── Related Services ─────────────────────────────── */}
            <section className="py-28 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-navy font-heading">
                            You May Also <span className="text-golden">Need</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {related.map((r, i) => (
                            <Link
                                key={i}
                                href={r.href}
                                className="p-8 bg-gray-50 rounded-3xl flex items-center gap-6 hover:bg-navy hover:text-white transition-all group border border-navy/5 hover:border-navy hover:shadow-2xl hover:shadow-navy/20 hover:-translate-y-1"
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-navy group-hover:bg-golden group-hover:text-navy transition-all flex-shrink-0">
                                    <r.icon className="w-7 h-7" />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="font-bold text-xl mb-1">{r.title}</h4>
                                    <p className="text-sm opacity-60 group-hover:opacity-80">Learn More &rarr;</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner />
            <Footer />
        </main>
    );
}
