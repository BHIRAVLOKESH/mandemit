"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Calendar, User, Clock, ArrowRight, Share2 } from "lucide-react";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy, addDoc, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";

const initialPosts = [
    {
        slug: "seo-trends-2025",
        title: "Top 10 SEO Trends to Watch in 2025",
        excerpt: "Search engine optimization is constantly evolving. Discover the key trends that will define search rankings in the coming years.",
        category: "SEO",
        date: "May 15, 2025",
        author: "Ananya Sharma",
        readTime: "8 min read",
    },
    {
        slug: "social-media-engagement",
        title: "How to Double Your Social Media Engagement",
        excerpt: "Engagement is more than just likes. Learn the secrets to building a community that actually interacts with your brand.",
        category: "Social Media",
        date: "May 12, 2025",
        author: "Priya Das",
        readTime: "5 min read",
    },
    {
        slug: "content-strategy-growth",
        title: "Building a Content Strategy for 10x Growth",
        excerpt: "Content is king, but only if you have a strategy. Here's how to build a roadmap that drives real business results.",
        category: "Content",
        date: "May 10, 2025",
        author: "Vikram Reddy",
        readTime: "12 min read",
    },
    {
        slug: "google-ads-optimization",
        title: "Google Ads Optimization: A Beginner's Guide",
        excerpt: "New to Google Ads? This guide will show you how to optimize your campaigns for the best possible ROI.",
        category: "Paid Ads",
        date: "May 08, 2025",
        author: "Suresh Mandem",
        readTime: "10 min read",
    },
    {
        slug: "web-dev-conversion",
        title: "Web Development Tips for Higher Conversion",
        excerpt: "Slow websites kill conversions. Learn how to optimize your site's performance and design for maximum sales.",
        category: "Development",
        date: "May 05, 2025",
        author: "Tech Team",
        readTime: "7 min read",
    },
    {
        slug: "influencer-marketing-roi",
        title: "Measuring the ROI of Influencer Marketing",
        excerpt: "Is influencer marketing worth it? We dive into the metrics that actually matter for your brand's bottom line.",
        category: "Marketing",
        date: "May 02, 2025",
        author: "Marketing Dept",
        readTime: "6 min read",
    },
];

export default function Blog() {
    const [posts, setPosts] = useState(initialPosts);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
                const querySnapshot = await getDocs(q);
                const fetchedBlogs = querySnapshot.docs.map(doc => ({
                    ...doc.data()
                })) as any[];

                if (fetchedBlogs.length > 0) {
                    setPosts([...fetchedBlogs, ...initialPosts]);
                }
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="relative pt-40 pb-24 bg-navy overflow-hidden">
                <div className="absolute inset-0 diagonal-lines opacity-10" />
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6">MandemIT Blog</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                        Expert Tips, Trends & Digital Marketing Insights to Fuel Your Growth.
                    </p>
                    <div className="max-w-lg mx-auto relative group">
                        <input type="text" className="w-full px-8 py-5 bg-white/10 text-white rounded-2xl border border-white/20 focus:border-golden focus:bg-white focus:text-navy outline-none transition-all placeholder:text-white/40" placeholder="Search articles..." />
                        <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-navy transition-colors pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-12 px-6 bg-white border-b">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
                    {["All", "SEO", "Social Media", "Content", "Paid Ads", "Development"].map((cat, i) => (
                        <button key={cat} className={i === 0 ? "px-6 py-3 bg-golden text-navy font-black rounded-xl shadow-lg" : "px-6 py-3 border-2 border-navy/5 text-navy font-bold rounded-xl hover:border-golden hover:text-golden transition-all"}>
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="group relative bg-navy rounded-[40px] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-2xl">
                        <div className="lg:w-1/2 aspect-video lg:aspect-auto bg-gray-800 relative overflow-hidden">
                            <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors duration-500" />
                            {/* Image Placeholder */}
                            <div className="w-full h-full flex items-center justify-center text-golden/10">
                                <Share2 className="w-48 h-48 animate-pulse" />
                            </div>
                            <div className="absolute top-8 left-8 bg-golden text-navy px-6 py-2 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg">
                                Featured Post
                            </div>
                        </div>
                        <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center space-y-6">
                            <div className="text-golden font-bold uppercase tracking-widest text-sm underline decoration-navy-light underline-offset-8">SEO STRATEGY</div>
                            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">Mastering The Future Of Search In 2025</h2>
                            <p className="text-xl text-gray-400">Discover the advanced SEO techniques that are driving 10x more traffic to our top-tier clients this year.</p>
                            <div className="flex items-center space-x-6 text-sm text-gray-400 pt-4">
                                <div className="flex items-center space-x-2"><User className="w-4 h-4 text-golden" /> <span>Ananya Sharma</span></div>
                                <div className="flex items-center space-x-2"><Calendar className="w-4 h-4 text-golden" /> <span>May 20, 2025</span></div>
                                <div className="flex items-center space-x-2"><Clock className="w-4 h-4 text-golden" /> <span>15 min read</span></div>
                            </div>
                            <Link href="/blog/seo-trends-2025" className="inline-flex items-center space-x-3 px-8 py-4 bg-golden text-navy font-black rounded-2xl hover:bg-white transition-all duration-300 w-fit">
                                <span>Read Full Article</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {posts.map((post) => (
                            <article key={post.slug} className="bg-white rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-navy/5 group flex flex-col">
                                <div className="aspect-video bg-navy/5 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors" />
                                    <div className="absolute top-6 left-6 bg-golden text-navy px-4 py-1.5 rounded-lg font-black text-xs uppercase tracking-widest">{post.category}</div>
                                </div>
                                <div className="p-8 flex-grow space-y-4 flex flex-col">
                                    <h3 className="text-2xl font-black text-navy group-hover:text-golden transition-colors leading-tight">
                                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                    </h3>
                                    <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-navy/5 text-sm text-gray-400 font-medium">
                                        <div className="flex items-center space-x-2"><Calendar className="w-4 h-4" /> <span>{post.date}</span></div>
                                        <div className="flex items-center space-x-2"><Clock className="w-4 h-4" /> <span>{post.readTime}</span></div>
                                    </div>
                                    <Link href={`/blog/${post.slug}`} className="text-navy font-black flex items-center group-hover:text-golden transition-colors pt-4">
                                        <span>Read More</span>
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <button className="px-10 py-5 border-2 border-navy text-navy font-black rounded-2xl hover:bg-navy hover:text-white transition-all active:scale-95 shadow-lg shadow-navy/5">Load More Articles</button>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-24 px-6 bg-navy text-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                    <div className="w-20 h-20 bg-golden/20 rounded-3xl mx-auto flex items-center justify-center text-golden mb-8 animate-float">
                        <Calendar className="w-10 h-10" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black">Stay Updated with Digital Marketing Trends</h2>
                    <p className="text-xl text-gray-400">Join 10,000+ marketers receiving our weekly insights directly in their inbox.</p>
                    <form
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
                        className="flex flex-col sm:row gap-4 max-w-2xl mx-auto pt-8"
                    >
                        <input type="email" name="email" required className="flex-grow px-8 py-5 bg-white text-navy font-bold rounded-2xl border-4 border-transparent focus:border-golden outline-none transition-all placeholder:text-navy/40" placeholder="Your Email Address" />
                        <button type="submit" className="px-10 py-5 bg-golden text-navy font-black rounded-2xl hover:bg-white hover:scale-105 transition-all shadow-xl shadow-golden/10 active:scale-95 text-lg">Subscribe Now</button>
                    </form>
                    <p className="text-xs text-gray-500 italic">No spam, just pure strategy. Unsubscribe at any time.</p>
                </div>
                <div className="absolute top-0 left-0 w-1/3 h-full bg-golden/5 -skew-x-12 -translate-x-1/2" />
            </section>

            <Footer />
        </main>
    );
}
