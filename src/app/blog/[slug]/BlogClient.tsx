"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, User, Clock, Share2, MessageCircle, ArrowLeft, Bookmark } from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function BlogClient({ params }: { params: { slug: string } }) {
    // For now, using params to avoid lint error
    const { slug } = params;
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Post Hero */}
            <section className="relative pt-48 pb-24 bg-navy-dark overflow-hidden">
                <div className="absolute inset-0 diagonal-lines opacity-10" />
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <Link href="/blog" className="inline-flex items-center space-x-2 text-golden font-bold mb-8 hover:translate-x-1 transition-transform">
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back to Blog</span>
                    </Link>
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <span className="bg-golden text-navy px-4 py-1.5 rounded-lg font-black text-xs uppercase tracking-widest">SEO STRATEGY</span>
                            <span className="text-gray-400 text-sm font-medium">Published May 15, 2025</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                            Top 10 SEO Trends that will define the Digital Landscape in 2025
                        </h1>
                        <div className="flex flex-wrap items-center gap-8 text-gray-400 pt-8 border-t border-white/10">
                            <div className="flex items-center space-x-3 text-white">
                                <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center text-navy font-black text-xl">AS</div>
                                <div>
                                    <p className="font-bold">Ananya Sharma</p>
                                    <p className="text-xs text-golden tracking-widest uppercase">Head of SEO</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2"><Clock className="w-5 h-5 text-golden" /> <span className="font-medium">15 min read</span></div>
                            <div className="flex items-center space-x-2"><Bookmark className="w-5 h-5 text-golden" /> <span className="font-medium">Saved 1.2k times</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main Content */}
                    <article className="lg:col-span-8 space-y-12">
                        <div className="aspect-video bg-navy/5 rounded-[40px] relative overflow-hidden ring-4 ring-navy/5 shadow-2xl">
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-navy/5">
                                <Share2 className="w-48 h-48" />
                            </div>
                        </div>

                        <div className="prose prose-xl prose-navy max-w-none space-y-8 text-gray-700 leading-relaxed font-body">
                            <p className="text-2xl font-medium text-navy leading-relaxed border-l-8 border-golden pl-8 italic">
                                As we approach 2025, the SEO world is undergoing a seismic shift. Search is no longer just about keywords and backlinks; it's about AI, user intent, and high-value experience.
                            </p>

                            <h2 className="text-3xl font-black text-navy pt-8">1. AI-Powered Search Generative Experience</h2>
                            <p>
                                Google's SGE is fundamentally changing how users interact with search results. Instead of just a list of links, users are now getting conversational answers. To stay ahead, your content needs to be structured for direct answers and high-quality context.
                            </p>

                            <h2 className="text-3xl font-black text-navy pt-8">2. Voice Search and Natural Language</h2>
                            <p>
                                With the rise of sophisticated AI assistants, more people are using natural language for search. Long-tail keywords and conversational phrases are becoming more critical than ever before.
                            </p>

                            <div className="bg-navy p-12 rounded-[40px] text-white my-12 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-golden transition-all duration-700">
                                    <Bookmark className="w-32 h-32" />
                                </div>
                                <h3 className="text-2xl font-bold mb-6 text-golden underline decoration-golden/30 underline-offset-8">Pro Tip for 2025:</h3>
                                <p className="text-xl text-gray-300 relative z-10 leading-relaxed">
                                    Focus on "E-E-A-T" (Experience, Expertise, Authoritativeness, and Trustworthiness). Google is prioritizing content that demonstrates real-world experience and deep expertise over generic AI-written articles.
                                </p>
                            </div>

                            <h2 className="text-3xl font-black text-navy pt-8">3. Visual Search Optimization</h2>
                            <p>
                                Users are searching with images more than ever. Optimizing your visual assets—from high-res photos to detailed infographics—is now a core pillar of technical SEO.
                            </p>

                            <p>
                                In conclusion, the future of search is complex but exciting. Brands that prioritize user experience and authentic storytelling will continue to dominate the SERPs.
                            </p>
                        </div>

                        {/* Tags & Sharing */}
                        <div className="pt-12 border-t flex flex-col md:row items-center justify-between gap-8">
                            <div className="flex flex-wrap gap-2">
                                {["SEO", "Marketing", "2025", "Growth"].map(tag => (
                                    <span key={tag} className="px-4 py-1.5 bg-gray-100 rounded-lg text-sm font-bold text-navy hover:bg-golden hover:text-navy transition-colors cursor-pointer">#{tag}</span>
                                ))}
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="font-bold text-navy">Share this article:</span>
                                <div className="flex space-x-2">
                                    <button className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-all"><FaFacebookF className="w-4 h-4" /></button>
                                    <button className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all"><FaLinkedinIn className="w-4 h-4" /></button>
                                    <button className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center hover:bg-green-500 transition-all"><MessageCircle className="w-4 h-4" /></button>
                                </div>
                            </div>
                        </div>

                        {/* Author Bio */}
                        <div className="bg-gray-50 p-8 rounded-[40px] flex flex-col md:row items-center gap-8 mt-12 border border-navy/5 shadow-lg">
                            <div className="w-32 h-32 bg-golden rounded-full flex-shrink-0 flex items-center justify-center text-navy text-4xl font-black ring-4 ring-white shadow-xl">AS</div>
                            <div className="text-center md:text-left space-y-3">
                                <h4 className="text-2xl font-black text-navy underline decoration-golden/30 underline-offset-4">Ananya Sharma</h4>
                                <p className="text-gray-600 leading-relaxed font-medium">As the Head of SEO at MandemIT, Ananya has helped over 200 brands achieve massive organic growth. She is a frequent speaker at digital marketing conferences across Asia.</p>
                                <div className="flex justify-center md:justify-start space-x-4 pt-2">
                                    <Link href="#" className="text-navy hover:text-golden font-bold uppercase tracking-widest text-xs">View Profile</Link>
                                    <Link href="#" className="text-navy hover:text-golden font-bold uppercase tracking-widest text-xs">Follow on LinkedIn</Link>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-12">
                        <div className="sticky top-32 space-y-12">
                            {/* Widget: TOC */}
                            <div className="p-10 bg-navy text-white rounded-[40px] shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-golden/5 group-hover:bg-golden/10 transition-colors" />
                                <h3 className="text-xl font-bold mb-8 text-golden border-b-2 border-golden/20 pb-4">In this Article</h3>
                                <ul className="space-y-6 relative z-10">
                                    {["AI-Powered Search Experience", "Voice Search & NLP", "Pro Tip for E-E-A-T", "Visual Search Optimization", "Conclusion"].map((item, i) => (
                                        <li key={i}>
                                            <Link href="#" className="flex items-start group/li">
                                                <span className="text-golden font-black mr-4 opacity-40 group-hover/li:opacity-100 transition-opacity">0{i + 1}</span>
                                                <span className="text-gray-300 hover:text-golden transition-colors font-medium border-b border-transparent hover:border-golden inline-block">{item}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Widget: Newsletter */}
                            <div className="p-10 bg-golden rounded-[40px] text-navy shadow-xl relative overflow-hidden group">
                                <h3 className="text-2xl font-black mb-4">Never Miss an Insight</h3>
                                <p className="text-navy/70 mb-8 font-medium">Get the latest digital marketing news and strategic guides delivered weekly.</p>
                                <form
                                    className="space-y-4 relative z-10"
                                    onSubmit={async (e) => {
                                        e.preventDefault();
                                        const email = (e.target as any).email.value;
                                        try {
                                            await addDoc(collection(db, "newsletter_subscribers"), {
                                                email,
                                                date: new Date().toLocaleString(),
                                                createdAt: serverTimestamp()
                                            });
                                            alert("Thank you for subscribing!");
                                            (e.target as any).reset();
                                        } catch (err) {
                                            console.error("Error subscribing:", err);
                                            alert("Something went wrong. Please try again.");
                                        }
                                    }}
                                >
                                    <input type="email" name="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-transparent focus:border-navy outline-none font-bold" />
                                    <button className="w-full py-4 bg-navy text-white font-black rounded-2xl hover:bg-white hover:text-navy transition-all shadow-xl active:scale-95">Subscribe Now</button>
                                </form>
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-navy/5 rounded-full blur-2xl group-hover:bg-navy/10 transition-all underline decoration-navy underline-offset-8" />
                            </div>

                            {/* Widget: Related Posts Teaser */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-black text-navy flex items-center">
                                    <div className="w-8 h-1 bg-golden mr-4 rounded-full" />
                                    <span>Related Articles</span>
                                </h3>
                                <div className="space-y-6">
                                    {["Double your Social Engagement", "Content Strategy for 10x Growth"].map((p, i) => (
                                        <Link key={i} href="#" className="flex gap-4 group">
                                            <div className="w-24 h-24 bg-gray-100 rounded-3xl flex-shrink-0 group-hover:ring-4 group-hover:ring-golden/20 transition-all overflow-hidden relative">
                                                <div className="absolute inset-0 bg-navy opacity-0 group-hover:opacity-10 transition-opacity" />
                                            </div>
                                            <div className="py-2">
                                                <h4 className="font-black text-navy group-hover:text-golden transition-colors line-clamp-2 leading-tight">{p}</h4>
                                                <p className="text-xs text-gray-400 mt-2 font-bold uppercase tracking-widest">May {10 - i}, 2025</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <Footer />
        </main>
    );
}
