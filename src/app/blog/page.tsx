"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Calendar, User, Clock, ArrowRight, Share2, Filter } from "lucide-react";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useEffect, useState, useMemo } from "react";

import { initialPosts } from "@/lib/blog-data";


export default function Blog() {
    const [dbPosts, setDbPosts] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
                const querySnapshot = await getDocs(q);
                const fetchedBlogs = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                })) as any[];
                setDbPosts(fetchedBlogs);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlogs();
    }, []);

    const allPosts = useMemo(() => {
        // Remove duplicates if same slug exists in both
        const combined = [...dbPosts];
        initialPosts.forEach(ip => {
            if (!combined.find(p => p.slug === ip.slug)) {
                combined.push(ip);
            }
        });
        return combined;
    }, [dbPosts]);

    const filteredPosts = useMemo(() => {
        return allPosts.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [allPosts, searchQuery, selectedCategory]);

    const categories = ["All", "SEO", "Social Media", "Content", "Paid Ads", "Development", "Marketing"];

    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="relative pt-40 pb-24 bg-navy overflow-hidden">
                <div className="absolute inset-0 diagonal-lines opacity-10" />
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">MandemIT Blog</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                        Expert Tips, Trends & Digital Marketing Insights to Fuel Your Growth.
                    </p>
                    <div className="max-w-lg mx-auto relative group">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-8 py-5 bg-white/10 text-white rounded-2xl border border-white/20 focus:border-golden focus:bg-white focus:text-navy outline-none transition-all placeholder:text-white/40"
                            placeholder="Search articles..."
                        />
                        <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-navy transition-colors pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-6 px-4 bg-white border-b sticky top-20 z-20 shadow-sm">
                <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`flex-shrink-0 px-4 py-2 text-sm font-black rounded-xl transition-all ${selectedCategory === cat
                                    ? "bg-golden text-navy shadow-lg"
                                    : "border-2 border-navy/10 text-navy hover:border-golden hover:text-golden"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-24 px-6 bg-gray-50 min-h-[60vh]">
                <div className="max-w-7xl mx-auto">
                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-20">
                            <Filter className="w-16 h-16 text-gray-200 mx-auto mb-6" />
                            <h3 className="text-2xl font-bold text-gray-400">No articles match your search</h3>
                            <button onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }} className="mt-4 text-golden font-bold underline">Clear all filters</button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                            {filteredPosts.map((post) => (
                                <article key={post.slug} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-navy/5 group flex flex-col">
                                    <div className="aspect-video bg-navy/5 relative overflow-hidden">
                                        {post.image ? (
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center text-navy/5">
                                                <Share2 className="w-32 h-32" />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors" />
                                        <div className="absolute top-6 left-6 bg-golden text-navy px-4 py-1.5 rounded-lg font-black text-xs uppercase tracking-widest">{post.category}</div>
                                    </div>
                                    <div className="p-5 md:p-7 flex-grow space-y-3 flex flex-col">
                                        <h3 className="text-lg md:text-xl font-black text-navy group-hover:text-golden transition-colors leading-tight line-clamp-2">
                                            <Link href={`/blog/${post.slug.split('/').filter(Boolean).pop()}`}>{post.title}</Link>
                                        </h3>
                                        <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                                        <div className="mt-auto pt-4 flex items-center justify-between border-t border-navy/5 text-xs text-gray-400 font-medium">
                                            <div className="flex items-center space-x-1"><Calendar className="w-3 h-3" /> <span>{post.date}</span></div>
                                            <div className="flex items-center space-x-1"><Clock className="w-3 h-3" /> <span>{post.readTime}</span></div>
                                        </div>
                                        <Link href={`/blog/${post.slug.split('/').filter(Boolean).pop()}`} className="text-navy font-black flex items-center group-hover:text-golden transition-colors text-sm">
                                            <span>Read More</span>
                                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}

                    <div className="mt-20 text-center">
                        <button className="px-10 py-5 border-2 border-navy text-navy font-black rounded-2xl hover:bg-navy hover:text-white transition-all active:scale-95 shadow-lg shadow-navy/5">Load More Articles</button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
