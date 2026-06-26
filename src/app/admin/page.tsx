"use client";

import { useState, useEffect } from "react";
import { db, storage } from "@/lib/firebase";
import { collection, getDocs, addDoc, deleteDoc, doc, query, orderBy, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
    LayoutDashboard,
    FileText,
    MessageSquare,
    LogOut,
    Plus,
    Trash2,
    Send,
    CheckCircle,
    User,
    Calendar,
    Clock,
    Phone,
    Upload,
    X,
    Image as ImageIcon,
    Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Types
type Submission = {
    id: string;
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    date: string;
};

type Blog = {
    id?: string;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    author: string;
    readTime: string;
    image?: string;
    content?: string;
};

type CaseStudy = {
    id?: string;
    slug: string;
    title: string;
    about: string;
    content: string;
    image: string;
    category: string;
    date: string;
};

export default function AdminPortal() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [id, setId] = useState("");
    const [psd, setPsd] = useState("");
    const [activeTab, setActiveTab] = useState<"submissions" | "blogs" | "newsletter" | "case-studies">("submissions");

    // Submissions state
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [newsletterSubs, setNewsletterSubs] = useState<{ id: string, email: string, date: string }[]>([]);

    // Case Studies state
    const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
    const [newCaseStudy, setNewCaseStudy] = useState({
        title: "",
        about: "",
        content: "",
        image: "",
        category: "Growth"
    });
    const [csUploading, setCsUploading] = useState(false);

    // Blogs state
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [newBlog, setNewBlog] = useState({
        title: "",
        excerpt: "",
        category: "General",
        author: "Admin",
        readTime: "5 min read",
        image: "",
        content: ""
    });

    const [uploading, setUploading] = useState(false);
    const [dragActive, setDragActive] = useState(false);

    // Image Compression Logic from D2D Logic
    // Image Compression Logic from D2D Logic (Optimized for immediate preview)
    const compressImage = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            if (!file.type.startsWith("image/")) {
                reject(new Error("File is not an image"));
                return;
            }
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.src = e.target?.result as string;
                img.onload = () => {
                    const canvas = document.createElement("canvas");
                    let width = img.width;
                    let height = img.height;
                    const MAX_WIDTH = 1200;
                    const MAX_HEIGHT = 1200;

                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height *= MAX_WIDTH / width;
                            width = MAX_WIDTH;
                        }
                    } else {
                        if (height > MAX_HEIGHT) {
                            width *= MAX_HEIGHT / height;
                            height = MAX_HEIGHT;
                        }
                    }

                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext("2d");
                    ctx?.drawImage(img, 0, 0, width, height);

                    resolve(canvas.toDataURL("image/jpeg", 0.7));
                };
                img.onerror = () => reject(new Error("Failed to load image"));
            };
            reader.onerror = () => reject(new Error("Failed to read file"));
            reader.readAsDataURL(file);
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch Submissions
                const subSnapshot = await getDocs(query(collection(db, "form_submissions"), orderBy("createdAt", "desc")));
                setSubmissions(subSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Submission)));

                // Fetch Blogs
                const blogSnapshot = await getDocs(query(collection(db, "blogs"), orderBy("createdAt", "desc")));
                setBlogs(blogSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Blog)));

                // Fetch Newsletter
                const newsSnapshot = await getDocs(query(collection(db, "newsletter_subscribers"), orderBy("createdAt", "desc")));
                setNewsletterSubs(newsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as any)));

                // Fetch Case Studies
                const csSnapshot = await getDocs(query(collection(db, "case_studies"), orderBy("createdAt", "desc")));
                setCaseStudies(csSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as CaseStudy)));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (isLoggedIn) {
            fetchData();
        }
    }, [isLoggedIn]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (id === "hello" && psd === "1234") {
            setIsLoggedIn(true);
        } else {
            alert("Invalid Credentials");
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setId("");
        setPsd("");
    };

    const handleAddBlog = (e: React.FormEvent) => {
        e.preventDefault();

        // D2D Logic: Store base64 directly in Firestore for immediate performance
        const imageUrl = newBlog.image;
        const slug = newBlog.title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
        const blogToAdd = {
            ...newBlog,
            image: imageUrl,
            slug,
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            createdAt: serverTimestamp()
        };

        // Optimistic Update: Update UI immediately
        setBlogs([{ id: "temp-" + Date.now(), ...blogToAdd } as Blog, ...blogs]);
        setNewBlog({
            title: "",
            excerpt: "",
            category: "General",
            author: "Admin",
            readTime: "5 min read",
            image: "",
            content: ""
        });

        // Background save
        addDoc(collection(db, "blogs"), blogToAdd).then((docRef) => {
            // Update the temp ID with real ID if needed, or just let the next refresh handle it
            console.log("Blog saved to cloud:", docRef.id);
        }).catch(err => {
            console.error("Cloud save failed:", err);
            alert("Warning: Blog saved locally but failed to sync to cloud.");
        });
    };

    const handleAddCaseStudy = (e: React.FormEvent) => {
        e.preventDefault();

        // D2D Logic: Store base64 directly in Firestore for immediate performance
        const imageUrl = newCaseStudy.image;
        const slug = newCaseStudy.title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
        const csToAdd = {
            ...newCaseStudy,
            image: imageUrl,
            slug,
            date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
            createdAt: serverTimestamp()
        };

        // Optimistic Update: Update UI immediately
        setCaseStudies([{ id: "temp-" + Date.now(), ...csToAdd } as CaseStudy, ...caseStudies]);
        setNewCaseStudy({
            title: "",
            about: "",
            content: "",
            image: "",
            category: "Growth"
        });

        // Background save
        addDoc(collection(db, "case_studies"), csToAdd).then((docRef) => {
            console.log("Case study saved to cloud:", docRef.id);
        }).catch(err => {
            console.error("Cloud save failed:", err);
            alert("Warning: Case study saved locally but failed to sync to cloud.");
        });
    };

    const handleDeleteCaseStudy = async (csId: string) => {
        if (confirm("Are you sure you want to delete this case study?")) {
            try {
                await deleteDoc(doc(db, "case_studies", csId));
                setCaseStudies(caseStudies.filter(cs => cs.id !== csId));
            } catch (e) {
                console.error("Error deleting case study:", e);
            }
        }
    };

    const handleCsFileUpload = async (file: File) => {
        if (!file) return;

        if (file.size > 10 * 1024 * 1024) {
            alert("File is too large. Please select an image under 10MB.");
            return;
        }

        try {
            const compressedUrl = await compressImage(file);
            setNewCaseStudy(prev => ({ ...prev, image: compressedUrl }));
        } catch (error) {
            console.error("Error processing image:", error);
            alert("Failed to process image.");
        }
    };

    const handleDeleteBlog = async (blogId: string) => {
        if (confirm("Are you sure you want to delete this blog?")) {
            try {
                await deleteDoc(doc(db, "blogs", blogId));
                setBlogs(blogs.filter(b => b.id !== blogId));
            } catch (e) {
                console.error("Error deleting blog:", e);
            }
        }
    };

    const handleFileUpload = async (file: File) => {
        if (!file) return;

        if (file.size > 10 * 1024 * 1024) {
            alert("File is too large. Please select an image under 10MB.");
            return;
        }

        try {
            const compressedUrl = await compressImage(file);
            setNewBlog(prev => ({ ...prev, image: compressedUrl }));
        } catch (error) {
            console.error("Error processing image:", error);
            alert("Failed to process image.");
        }
    };

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileUpload(e.dataTransfer.files[0]);
        }
    };

    const shareOnWhatsApp = (sub: Submission) => {
        const text = `*New Form Submission*\n\n*Name:* ${sub.name}\n*Email:* ${sub.email}\n*Phone:* ${sub.phone}\n*Service:* ${sub.service}\n*Message:* ${sub.message}\n*Date:* ${sub.date}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
    };

    if (!isLoggedIn) {
        return (
            <main className="min-h-screen bg-navy flex flex-col items-center justify-center p-6 relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-golden/10 rounded-full blur-3xl -mr-48 -mt-48" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-golden/5 rounded-full blur-3xl -ml-48 -mb-48" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md bg-white rounded-[32px] p-10 shadow-2xl relative z-10 border border-white/20"
                >
                    <div className="text-center mb-10">
                        <div className="w-20 h-20 bg-navy rounded-3xl mx-auto flex items-center justify-center text-golden mb-6 shadow-xl">
                            <LayoutDashboard className="w-10 h-10" />
                        </div>
                        <h1 className="text-3xl font-black text-navy uppercase tracking-tighter">Admin Portal</h1>
                        <p className="text-gray-500 font-medium">Please sign in to continue</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-black text-navy uppercase tracking-widest ml-1">Admin ID</label>
                            <input
                                type="text"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                required
                                className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-golden focus:bg-white outline-none transition-all placeholder:text-gray-300 font-bold text-navy"
                                placeholder="Enter ID"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black text-navy uppercase tracking-widest ml-1">Password</label>
                            <input
                                type="password"
                                value={psd}
                                onChange={(e) => setPsd(e.target.value)}
                                required
                                className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-golden focus:bg-white outline-none transition-all placeholder:text-gray-300 font-bold text-navy"
                                placeholder="••••••••"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-5 bg-navy text-golden font-black rounded-2xl hover:bg-golden hover:text-navy transition-all duration-300 shadow-xl shadow-navy/20 active:scale-95 text-lg flex items-center justify-center space-x-2"
                        >
                            <span>Authenticate</span>
                            <CheckCircle className="w-5 h-5" />
                        </button>
                    </form>
                </motion.div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6 bg-white p-8 rounded-[32px] shadow-sm border border-navy/5">
                    <div className="flex items-center space-x-6">
                        <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center text-golden shadow-lg">
                            <LayoutDashboard className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-black text-navy uppercase tracking-tighter">Control Center</h1>
                            <p className="text-gray-500 font-medium">Manage your application effortlessly</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleLogout}
                            className="flex items-center space-x-2 px-6 py-3 bg-red-50 text-red-600 font-bold rounded-xl hover:bg-red-600 hover:text-white transition-all group"
                        >
                            <LogOut className="w-5 h-5" />
                            <span>Sign Out</span>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar / Tabs */}
                    <div className="lg:w-1/4 space-y-4">
                        {[
                            { id: "submissions", label: "Form Submissions", icon: MessageSquare },
                            { id: "blogs", label: "Manage Blogs", icon: FileText },
                            { id: "case-studies", label: "Case Studies", icon: LayoutDashboard },
                            { id: "newsletter", label: "Subscribers", icon: Send }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`w-full flex items-center space-x-4 p-5 rounded-2xl font-black text-left transition-all ${activeTab === tab.id
                                    ? "bg-navy text-golden shadow-xl scale-[1.02]"
                                    : "bg-white text-navy hover:bg-gray-100 shadow-sm"
                                    }`}
                            >
                                <tab.icon className="w-6 h-6" />
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="lg:w-3/4">
                        <AnimatePresence mode="wait">
                            {activeTab === "submissions" && (
                                <motion.div
                                    key="submissions"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-2xl font-black text-navy">Recent Inquiries ({submissions.length})</h2>
                                        <button
                                            onClick={async () => {
                                                if (confirm("Clear all submissions? (This will NOT clear Firestore, only a local backup if any existed)")) {
                                                    // In Firestore, we generally shouldn't allow 'Clear All' without a batch delete
                                                    // For now, let's just alert the user or implement a batch if needed.
                                                    alert("Batch delete is not implemented for safety. Please delete items individually.");
                                                }
                                            }}
                                            className="text-gray-400 hover:text-red-500 transition-colors text-sm font-bold flex items-center space-x-1"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                            <span>Clear All</span>
                                        </button>
                                    </div>

                                    {submissions.length === 0 ? (
                                        <div className="bg-white p-20 rounded-[40px] text-center border-4 border-dashed border-gray-100">
                                            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <MessageSquare className="w-10 h-10 text-gray-200" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-400">No submissions found yet</h3>
                                            <p className="text-gray-300">New inquiries from your contact forms will appear here.</p>
                                        </div>
                                    ) : (
                                        <div className="grid gap-6">
                                            {submissions.map((sub) => (
                                                <div key={sub.id} className="bg-white p-8 rounded-[32px] shadow-sm border border-navy/5 hover:shadow-xl transition-all group relative overflow-hidden">
                                                    <div className="absolute top-0 right-0 w-2 h-full bg-golden translate-x-full group-hover:translate-x-0 transition-transform" />

                                                    <div className="flex flex-col md:row md:items-start justify-between gap-6">
                                                        <div className="space-y-4 flex-grow">
                                                            <div className="flex flex-wrap items-center gap-3">
                                                                <span className="bg-golden text-navy px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">{sub.service}</span>
                                                                <span className="flex items-center text-xs text-gray-400 font-bold"><Clock className="w-3 h-3 mr-1" /> {sub.date}</span>
                                                            </div>
                                                            <h3 className="text-2xl font-black text-navy">{sub.name}</h3>

                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                <div className="flex items-center space-x-3 text-navy-light font-bold">
                                                                    <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center"><User className="w-4 h-4" /></div>
                                                                    <span>{sub.email}</span>
                                                                </div>
                                                                <div className="flex items-center space-x-3 text-navy-light font-bold">
                                                                    <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center"><Phone className="w-4 h-4" /></div>
                                                                    <span>{sub.phone}</span>
                                                                </div>
                                                            </div>

                                                            <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-navy/10 mt-4">
                                                                <p className="text-gray-700 italic">"{sub.message}"</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex md:flex-col gap-3">
                                                            <button
                                                                onClick={() => shareOnWhatsApp(sub)}
                                                                className="flex items-center justify-center space-x-2 px-6 py-4 bg-[#25D366] text-white font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg"
                                                            >
                                                                <Send className="w-5 h-5" />
                                                                <span>WhatsApp</span>
                                                            </button>
                                                            <button
                                                                onClick={async () => {
                                                                    try {
                                                                        await deleteDoc(doc(db, "form_submissions", sub.id));
                                                                        setSubmissions(submissions.filter(s => s.id !== sub.id));
                                                                    } catch (e) {
                                                                        console.error("Error deleting submission:", e);
                                                                    }
                                                                }}
                                                                className="flex items-center justify-center p-4 bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
                                                            >
                                                                <Trash2 className="w-6 h-6" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            )}

                            {activeTab === "blogs" && (
                                <motion.div
                                    key="blogs"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-12"
                                >
                                    {/* Add Blog Form */}
                                    <div className="bg-white p-10 rounded-[40px] shadow-sm border border-navy/5">
                                        <h2 className="text-2xl font-black text-navy mb-8 flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-golden rounded-xl flex items-center justify-center text-navy"><Plus className="w-6 h-6" /></div>
                                            <span>Publish New Blog</span>
                                        </h2>

                                        <form onSubmit={handleAddBlog} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black text-navy uppercase tracking-widest ml-1">Blog Title</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={newBlog.title}
                                                        onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                                                        className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-golden focus:bg-white outline-none transition-all font-bold text-navy"
                                                        placeholder="The Future of Digital Marketing"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black text-navy uppercase tracking-widest ml-1">Category</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={newBlog.category}
                                                        onChange={(e) => setNewBlog({ ...newBlog, category: e.target.value })}
                                                        className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-golden focus:bg-white outline-none transition-all font-bold text-navy"
                                                        placeholder="SEO, Marketing, AI..."
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-black text-navy uppercase tracking-widest ml-1">Excerpt</label>
                                                <textarea
                                                    rows={3}
                                                    required
                                                    value={newBlog.excerpt}
                                                    onChange={(e) => setNewBlog({ ...newBlog, excerpt: e.target.value })}
                                                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-golden focus:bg-white outline-none transition-all font-bold text-navy resize-none"
                                                    placeholder="A brief summary..."
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-black text-navy uppercase tracking-widest ml-1">Full Content</label>
                                                <textarea
                                                    rows={10}
                                                    required
                                                    value={newBlog.content}
                                                    onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                                                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-golden focus:bg-white outline-none transition-all font-bold text-navy resize-none"
                                                    placeholder="Write your full article here (Markdown supported)..."
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-black text-navy uppercase tracking-widest ml-1">Featured Image (Optional)</label>

                                                {newBlog.image ? (
                                                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden group border-2 border-golden/20">
                                                        <img src={newBlog.image} alt="Preview" className="w-full h-full object-cover" />

                                                        <button
                                                            type="button"
                                                            onClick={() => setNewBlog({ ...newBlog, image: "" })}
                                                            className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                                        >
                                                            <X className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div
                                                        onDragEnter={handleDrag}
                                                        onDragLeave={handleDrag}
                                                        onDragOver={handleDrag}
                                                        onDrop={handleDrop}
                                                        className={`relative w-full aspect-video rounded-3xl border-4 border-dashed transition-all flex flex-col items-center justify-center space-y-4 ${dragActive
                                                            ? "border-golden bg-golden/5"
                                                            : "border-gray-100 bg-gray-50 hover:bg-gray-100 hover:border-gray-200"
                                                            }`}
                                                    >
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={(e) => e.target.files && handleFileUpload(e.target.files[0])}
                                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                        />

                                                        <div className="text-center">
                                                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4 text-gray-400">
                                                                <Upload className="w-8 h-8" />
                                                            </div>
                                                            <p className="text-navy font-black">Drag and drop or click</p>
                                                            <p className="text-gray-400 text-sm font-medium">PNG, JPG or WebP (max. 5MB)</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={!newBlog.image}
                                                className="w-full py-5 bg-navy text-golden font-black rounded-2xl hover:bg-golden hover:text-navy transition-all duration-300 shadow-xl active:scale-95 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                                            >
                                                <span>Publish Article</span>
                                            </button>
                                        </form>
                                    </div>

                                    {/* Blog List */}
                                    <div className="grid grid-cols-1 gap-4">
                                        {blogs.map((blog) => (
                                            <div key={blog.slug} className="bg-white p-6 rounded-3xl shadow-sm border border-navy/5 flex items-center justify-between group">
                                                <div className="flex items-center space-x-6">
                                                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-navy-light group-hover:bg-golden/20 group-hover:text-golden transition-colors">
                                                        <FileText className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-navy truncate max-w-md">{blog.title}</h4>
                                                        <p className="text-xs text-gray-400 font-bold">{blog.category} • {blog.date}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <button
                                                        onClick={() => handleDeleteBlog(blog.id!)}
                                                        className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all font-bold"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "case-studies" && (
                                <motion.div
                                    key="case-studies"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-12"
                                >
                                    <div className="bg-white p-10 rounded-[40px] shadow-sm border border-navy/5">
                                        <h2 className="text-2xl font-black text-navy mb-8 flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-golden rounded-xl flex items-center justify-center text-navy"><Plus className="w-6 h-6" /></div>
                                            <span>New Case Study</span>
                                        </h2>

                                        <form onSubmit={handleAddCaseStudy} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black text-navy uppercase tracking-widest ml-1">Project Title</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={newCaseStudy.title}
                                                        onChange={(e) => setNewCaseStudy({ ...newCaseStudy, title: e.target.value })}
                                                        className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-golden focus:bg-white outline-none transition-all font-bold text-navy"
                                                        placeholder="E-commerce Sales Boost"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black text-navy uppercase tracking-widest ml-1">Category</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={newCaseStudy.category}
                                                        onChange={(e) => setNewCaseStudy({ ...newCaseStudy, category: e.target.value })}
                                                        className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-golden focus:bg-white outline-none transition-all font-bold text-navy"
                                                        placeholder="SEO, E-commerce, Branding..."
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-black text-navy uppercase tracking-widest ml-1">About (Short Summary)</label>
                                                <textarea
                                                    rows={3}
                                                    required
                                                    value={newCaseStudy.about}
                                                    onChange={(e) => setNewCaseStudy({ ...newCaseStudy, about: e.target.value })}
                                                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-golden focus:bg-white outline-none transition-all font-bold text-navy resize-none"
                                                    placeholder="A brief overview of the results achieved..."
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-black text-navy uppercase tracking-widest ml-1">Full Detailed Content</label>
                                                <textarea
                                                    rows={10}
                                                    required
                                                    value={newCaseStudy.content}
                                                    onChange={(e) => setNewCaseStudy({ ...newCaseStudy, content: e.target.value })}
                                                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-golden focus:bg-white outline-none transition-all font-bold text-navy resize-none"
                                                    placeholder="Describe the challenge, solution, and final results in detail..."
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-black text-navy uppercase tracking-widest ml-1">Result Image</label>
                                                {newCaseStudy.image ? (
                                                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden group border-2 border-golden/20">
                                                        <img src={newCaseStudy.image} alt="Preview" className="w-full h-full object-cover" />

                                                        <button
                                                            type="button"
                                                            onClick={() => setNewCaseStudy({ ...newCaseStudy, image: "" })}
                                                            className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                                        >
                                                            <X className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div className="relative w-full h-48 rounded-3xl border-4 border-dashed border-gray-100 bg-gray-50 hover:bg-gray-100 hover:border-gray-200 transition-all flex flex-col items-center justify-center space-y-2">
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={(e) => e.target.files && handleCsFileUpload(e.target.files[0])}
                                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                        />
                                                        {csUploading ? (
                                                            <Loader2 className="w-8 h-8 text-golden animate-spin" />
                                                        ) : (
                                                            <>
                                                                <Upload className="w-8 h-8 text-gray-400" />
                                                                <p className="text-navy font-black">Upload Result Image</p>
                                                            </>
                                                        )}
                                                    </div>
                                                )}
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={!newCaseStudy.image}
                                                className="w-full py-5 bg-navy text-golden font-black rounded-2xl hover:bg-golden hover:text-navy transition-all duration-300 shadow-xl active:scale-95 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
                                            >
                                                <span>Publish Case Study</span>
                                            </button>
                                        </form>
                                    </div>

                                    {/* Case Study List */}
                                    <div className="grid grid-cols-1 gap-4">
                                        {caseStudies.map((cs) => (
                                            <div key={cs.id} className="bg-white p-6 rounded-3xl shadow-sm border border-navy/5 flex items-center justify-between group">
                                                <div className="flex items-center space-x-6">
                                                    {cs.image ? (
                                                        <img src={cs.image} className="w-16 h-16 rounded-xl object-cover" alt="" />
                                                    ) : (
                                                        <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center text-navy-light">
                                                            <LayoutDashboard className="w-6 h-6" />
                                                        </div>
                                                    )}
                                                    <div>
                                                        <h4 className="font-bold text-navy">{cs.title}</h4>
                                                        <p className="text-xs text-gray-400 font-bold">{cs.category} • {cs.date}</p>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => handleDeleteCaseStudy(cs.id!)}
                                                    className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all font-bold"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "newsletter" && (
                                <motion.div
                                    key="newsletter"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h2 className="text-2xl font-black text-navy">Newsletter Subscribers ({newsletterSubs.length})</h2>
                                    <div className="bg-white rounded-3xl shadow-sm border border-navy/5 overflow-hidden">
                                        <table className="w-full text-left">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-8 py-4 text-xs font-black text-navy uppercase tracking-widest">Email Address</th>
                                                    <th className="px-8 py-4 text-xs font-black text-navy uppercase tracking-widest">Date Joined</th>
                                                    <th className="px-8 py-4 text-xs font-black text-navy uppercase tracking-widest text-right">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                {newsletterSubs.map((sub, i) => (
                                                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                                        <td className="px-8 py-4 font-bold text-navy">{sub.email}</td>
                                                        <td className="px-8 py-4 text-sm text-gray-500 font-medium">{sub.date}</td>
                                                        <td className="px-8 py-4 text-right">
                                                            <button
                                                                onClick={async () => {
                                                                    try {
                                                                        await deleteDoc(doc(db, "newsletter_subscribers", sub.id));
                                                                        setNewsletterSubs(newsletterSubs.filter(n => n.id !== sub.id));
                                                                    } catch (e) {
                                                                        console.error("Error removing subscriber:", e);
                                                                    }
                                                                }}
                                                                className="text-red-500 hover:text-red-700 font-bold text-sm"
                                                            >
                                                                Remove
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {newsletterSubs.length === 0 && (
                                                    <tr>
                                                        <td colSpan={3} className="px-8 py-20 text-center text-gray-400 font-bold italic">No subscribers yet.</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
