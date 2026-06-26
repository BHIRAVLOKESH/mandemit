"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, LayoutDashboard, Calendar, Search, Filter } from "lucide-react";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

import { initialCaseStudies } from "@/lib/case-studies-data";


export default function CaseStudies() {
    const [dbStudies, setDbStudies] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchStudies = async () => {
            try {
                const q = query(collection(db, "case_studies"), orderBy("createdAt", "desc"));
                const querySnapshot = await getDocs(q);
                setDbStudies(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            } catch (error) {
                console.error("Error fetching case studies:", error);
            }
        };
        fetchStudies();
    }, []);

    const allStudies = useMemo(() => {
        const combined = [...dbStudies];
        initialCaseStudies.forEach(ip => {
            if (!combined.find(p => p.slug === ip.slug)) {
                combined.push(ip);
            }
        });
        return combined;
    }, [dbStudies]);

    const filteredStudies = useMemo(() => {
        return allStudies.filter(cs =>
            cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            cs.about.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [allStudies, searchQuery]);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-24 bg-navy overflow-hidden">
                <div className="absolute inset-0 diagonal-lines opacity-10" />
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <span className="bg-golden/20 text-golden px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest">Our Success Stories</span>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">Proven Results</h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Explore how we help ambitious brands achieve extraordinary growth through strategic digital marketing.
                        </p>
                    </motion.div>

                    <div className="max-w-lg mx-auto relative mt-12">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-8 py-5 bg-white/10 text-white rounded-2xl border border-white/20 focus:border-golden focus:bg-white focus:text-navy outline-none transition-all placeholder:text-white/40"
                            placeholder="Search case studies..."
                        />
                        <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-navy transition-colors pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* Grid Section */}
            <section className="py-24 px-6 bg-gray-50 min-h-[60vh]">
                <div className="max-w-7xl mx-auto">
                    {filteredStudies.length === 0 ? (
                        <div className="text-center py-20 grayscale opacity-50">
                            <LayoutDashboard className="w-20 h-20 mx-auto mb-6 text-gray-300" />
                            <h3 className="text-2xl font-bold text-gray-400">No results found</h3>
                            <button onClick={() => setSearchQuery("")} className="mt-4 text-golden font-bold underline">Reset search</button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {filteredStudies.map((cs, idx) => (
                                <motion.article
                                    key={cs.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative bg-white rounded-[40px] overflow-hidden shadow-xl border border-navy/5 flex flex-col"
                                >
                                    <div className="aspect-[16/10] overflow-hidden relative">
                                        <img
                                            src={cs.image}
                                            alt={cs.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/10 transition-colors" />
                                        <div className="absolute top-8 left-8 bg-golden text-navy px-6 py-2 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg">
                                            {cs.category}
                                        </div>
                                    </div>
                                    <div className="p-10 space-y-4 flex-grow">
                                        <div className="flex items-center space-x-2 text-sm text-gray-400 font-bold mb-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{cs.date}</span>
                                        </div>
                                        <h3 className="text-3xl font-black text-navy group-hover:text-golden transition-colors leading-tight">
                                            <Link href={`/case-studies/${cs.slug.split('/').filter(Boolean).pop()}`}>{cs.title}</Link>
                                        </h3>
                                        <p className="text-lg text-gray-600 line-clamp-3">{cs.about}</p>
                                        <Link
                                            href={`/case-studies/${cs.slug.split('/').filter(Boolean).pop()}`}
                                            className="inline-flex items-center space-x-3 text-navy font-black pt-6 group/btn"
                                        >
                                            <span className="border-b-4 border-golden">View Case Study</span>
                                            <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
                                        </Link>

                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
