"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, User, Clock, Share2, MessageCircle, ArrowLeft, Bookmark, AlertCircle } from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
import { motion } from "framer-motion";
import { initialPosts } from "@/lib/blog-data";

type Blog = {
    title: string;
    content: string;
    excerpt: string;
    category: string;
    date: string;
    author: string;
    readTime: string;
    image?: string;
};

export default function BlogClient({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const q = query(collection(db, "blogs"), where("slug", "==", slug));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    setBlog(querySnapshot.docs[0].data() as Blog);
                } else {
                    // Fallback to initialPosts if it's one of them
                    const fallback = initialPosts.find(p => p.slug === slug);
                    if (fallback) setBlog(fallback as any);
                }

            } catch (error) {
                console.error("Error fetching blog:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-golden border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
                <AlertCircle className="w-20 h-20 text-red-500 mb-6" />
                <h1 className="text-4xl font-black text-navy mb-4">Article Not Found</h1>
                <p className="text-gray-500 mb-8 max-w-md">We couldn't find the article you're looking for. It might have been moved or deleted.</p>
                <Link href="/blog" className="px-8 py-4 bg-navy text-golden font-black rounded-2xl hover:bg-golden hover:text-navy transition-all">
                    Back to Blog
                </Link>
            </div>
        );
    }

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
                            <span className="bg-golden text-navy px-4 py-1.5 rounded-lg font-black text-xs uppercase tracking-widest">{blog.category}</span>
                            <span className="text-gray-400 text-sm font-medium">Published {blog.date}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                            {blog.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-8 text-gray-400 pt-8 border-t border-white/10">
                            <div className="flex items-center space-x-3 text-white">
                                <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center text-navy font-black text-xl">
                                    {blog.author.substring(0, 2).toUpperCase()}
                                </div>
                                <div>
                                    <p className="font-bold">{blog.author}</p>
                                    <p className="text-xs text-golden tracking-widest uppercase">Expert Contributor</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2"><Clock className="w-5 h-5 text-golden" /> <span className="font-medium">{blog.readTime}</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main Content */}
                    <article className="lg:col-span-8 space-y-12">
                        {blog.image ? (
                            <div className="aspect-video bg-navy/5 rounded-[40px] relative overflow-hidden ring-4 ring-navy/5 shadow-2xl">
                                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                            </div>
                        ) : (
                            <div className="aspect-video bg-navy/5 rounded-[40px] relative overflow-hidden ring-4 ring-navy/5 shadow-2xl flex items-center justify-center text-navy/5">
                                <Share2 className="w-48 h-48" />
                            </div>
                        )}

                        <div className="prose prose-xl prose-navy max-w-none space-y-8 text-gray-700 leading-relaxed font-body whitespace-pre-wrap">
                            {blog.content || blog.excerpt}
                        </div>

                        {/* Tags & Sharing */}
                        <div className="pt-12 border-t flex flex-col md:row items-center justify-between gap-8">
                            <div className="flex flex-wrap gap-2">
                                {[blog.category, "Marketing", "Growth"].map(tag => (
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
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-12">
                        <div className="sticky top-32 space-y-12">
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
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <Footer />
        </main>
    );
}
