"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import Link from "next/link";
import { ArrowRight, Calendar, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";

export default function CaseStudiesTeaser() {
    const [studies, setStudies] = useState<any[]>([]);

    useEffect(() => {
        const fetchStudies = async () => {
            try {
                const q = query(collection(db, "case_studies"), orderBy("createdAt", "desc"), limit(2));
                const querySnapshot = await getDocs(q);
                setStudies(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            } catch (error) {
                console.error("Error fetching teaser studies:", error);
            }
        };
        fetchStudies();
    }, []);

    if (studies.length === 0) return null;

    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-4">
                        <span className="text-golden font-bold tracking-widest uppercase text-sm">Success Stories</span>
                        <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tighter">Case Studies</h2>
                        <p className="text-lg text-gray-600 max-w-xl">
                            Real results for real businesses. See how our strategic approach drives massive ROI.
                        </p>
                    </div>
                    <Link
                        href="/case-studies"
                        className="group flex items-center space-x-3 text-navy font-black text-lg bg-gray-50 px-8 py-4 rounded-2xl hover:bg-golden hover:text-navy transition-all"
                    >
                        <span>View All Projects</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {studies.map((study, idx) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl"
                        >
                            <img
                                src={study.image}
                                alt={study.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                            <div className="absolute bottom-0 left-0 w-full p-10 space-y-4">
                                <div className="flex items-center space-x-4">
                                    <span className="bg-golden text-navy px-4 py-1.5 rounded-lg font-black text-xs uppercase tracking-widest leading-none">
                                        {study.category}
                                    </span>
                                    <div className="flex items-center space-x-2 text-white/60 text-xs font-bold uppercase tracking-widest">
                                        <Calendar className="w-4 h-4" />
                                        <span>{study.date}</span>
                                    </div>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                                    {study.title}
                                </h3>
                                <p className="text-gray-300 line-clamp-2 max-w-md">
                                    {study.about}
                                </p>
                                <Link
                                    href={`/case-studies/${study.slug}`}
                                    className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-navy font-black rounded-2xl hover:bg-golden transition-all mt-4"
                                >
                                    <span>Read Story</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
