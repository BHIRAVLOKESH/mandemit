import type { Metadata } from "next";
import { initialPosts } from "@/lib/blog-data";
import BlogClient from "./BlogClient";

import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function generateMetadata(
    { params }: { params: { slug: string } }
): Promise<Metadata> {
    const post = initialPosts.find((p) => p.slug === params.slug);
    if (!post) {
        return { title: "Blog Post | MandemIT" };
    }
    return {
        title: post.title,
        description: post.excerpt,
        alternates: { canonical: `https://mandemit.com/blog/${post.slug}` },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://mandemit.com/blog/${post.slug}`,
            siteName: "MandemIT",
            images: [{ url: post.image || "/mandemit.png", width: 1200, height: 630, alt: post.title }],
            type: "article",
            locale: "en_IN",
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.image || "/mandemit.png"],
        },
    };
}

// Add generateStaticParams for static export support
export async function generateStaticParams() {
    // 1. Start with hardcoded posts
    const paths = initialPosts.map(post => ({
        slug: post.slug,
    }));

    // 2. Attempt to fetch dynamic posts from Firebase
    try {
        console.log("Generating static params for Blog...");
        const querySnapshot = await getDocs(collection(db, "blogs"));
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.slug) {
                // If the slug incorrectly contains the full path, extract only the last segment
                // e.g., "/blog/my-post" -> "my-post"
                let cleanSlug = data.slug.split('/').filter(Boolean).pop() || data.slug;

                // Final safety check to remove any leading/trailing slashes
                cleanSlug = cleanSlug.replace(/^\/+|\/+$/g, '');

                if (cleanSlug && !paths.find(p => p.slug === cleanSlug)) {
                    paths.push({ slug: cleanSlug });
                }
            }
        });
        console.log("Total Blog paths generated:", paths.length);
        console.log("Paths list:", paths.map(p => p.slug));
    } catch (error) {
        console.error("Error fetching blog slugs for static generation:", error);
    }


    return paths;
}




export default function BlogPostPage({ params }: { params: { slug: string } }) {
    return <BlogClient params={params} />;
}
