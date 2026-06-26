"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { ArrowLeft, Calendar, Share2, AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { initialCaseStudies } from "@/lib/case-studies-data";

export default function CaseStudyClient({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const [study, setStudy] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudy = async () => {
            try {
                const q = query(collection(db, "case_studies"), where("slug", "==", slug));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    setStudy(querySnapshot.docs[0].data());
                } else {
                    // Fallback to static data if not in DB
                    const staticMatch = initialCaseStudies.find(cs => cs.slug === slug);
                    if (staticMatch) setStudy(staticMatch);
                }
            } catch (error) {
                console.error("Error fetching study:", error);
            } finally {
                setLoading(false);
            }
        };

        if (slug) fetchStudy();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Loader2 className="w-12 h-12 text-golden animate-spin" />
            </div>
        );
    }

    if (!study) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
                <AlertCircle className="w-20 h-20 text-red-500 mb-6" />
                <h1 className="text-4xl font-black text-navy mb-4">Case Study Not Found</h1>
                <p className="text-gray-600 mb-8 max-w-md">The success story you're looking for might have moved or been updated.</p>
                <Link href="/case-studies" className="px-8 py-4 bg-golden text-navy font-black rounded-2xl flex items-center space-x-2">
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back to Case Studies</span>
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Banner */}
            <section className="relative h-[60vh] bg-navy overflow-hidden">
                <img src={study.image} className="w-full h-full object-cover opacity-40 shadow-2xl" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
                <div className="absolute bottom-24 left-0 w-full px-6">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="space-y-4"
                        >
                            <span className="bg-golden text-navy px-6 py-2 rounded-xl text-sm font-black uppercase tracking-widest">{study.category}</span>
                            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">{study.title}</h1>
                            <div className="flex items-center justify-center space-x-6 text-gray-300 font-bold">
                                <div className="flex items-center space-x-2"><Calendar className="w-4 h-4 text-golden" /> <span>{study.date}</span></div>
                                <div className="flex items-center space-x-2"><Share2 className="w-4 h-4 text-golden" /> <span>Share Success</span></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <article className="py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center space-x-4 mb-12">
                        <Link href="/case-studies" className="p-3 bg-gray-50 rounded-xl hover:bg-golden hover:text-navy transition-all">
                            <ArrowLeft className="w-6 h-6" />
                        </Link>
                        <span className="text-gray-400 font-bold">Back to success stories</span>
                    </div>

                    <div className="space-y-8">
                        <div className="p-10 bg-gray-50 rounded-[40px] border border-navy/5">
                            <h2 className="text-2xl font-black text-navy mb-4 italic">"About the Project"</h2>
                            <p className="text-xl text-gray-600 leading-relaxed font-medium">{study.about}</p>
                        </div>

                        <div className="prose prose-xl prose-navy max-w-none">
                            <div className="whitespace-pre-wrap text-lg text-gray-700 leading-relaxed font-medium">
                                {study.content}
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 p-12 bg-navy rounded-[40px] text-center space-y-8 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-3xl font-black text-white">Inspired by this result?</h3>
                            <p className="text-xl text-gray-400">Let's build your success story together.</p>
                            <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
                                <Link href="/contact" className="px-10 py-5 bg-golden text-navy font-black rounded-2xl hover:scale-105 transition-all shadow-xl shadow-golden/10">Get a Free Consultation</Link>
                                <Link href="/services" className="px-10 py-5 border-2 border-white/20 text-white font-black rounded-2xl hover:bg-white/10 transition-all">Explore Services</Link>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-golden/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
