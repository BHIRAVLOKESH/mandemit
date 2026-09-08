import { MetadataRoute } from "next";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

const BASE_URL = "https://mandemit.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date().toISOString();

    const staticPages = [
        { url: `${BASE_URL}`, priority: 1.0, changeFrequency: "weekly" as const },
        { url: `${BASE_URL}/about`, priority: 0.9, changeFrequency: "monthly" as const },
        { url: `${BASE_URL}/services`, priority: 0.9, changeFrequency: "weekly" as const },
        { url: `${BASE_URL}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
        { url: `${BASE_URL}/blog`, priority: 0.8, changeFrequency: "daily" as const },
        { url: `${BASE_URL}/case-studies`, priority: 0.8, changeFrequency: "weekly" as const },
    ];

    const servicePages = [
        "seo-sem",
        "google-ads",
        "facebook-instagram-ads",
        "youtube-ads",
        "linkedin-ads",
        "lead-generation",
        "content-creation",
        "bulk-sms",
        "bulk-email",
        "bulk-voice-calls",
        "web-banners",
        "influencer-marketing",
        "blog-maintenance",
        "web-app-development",
    ].map((slug) => ({
        url: `${BASE_URL}/services/${slug}`,
        priority: 0.8,
        changeFrequency: "monthly" as const,
    }));

    const dynamicBlogPages: { url: string; priority: number; changeFrequency: "weekly" }[] = [];
    try {
        const blogSnapshot = await getDocs(collection(db, "blogs"));
        blogSnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.slug) {
                const cleanSlug = data.slug.split('/').filter(Boolean).pop()?.replace(/^\/+|\/+$/g, '');
                if (cleanSlug) {
                    dynamicBlogPages.push({
                        url: `${BASE_URL}/blog/${cleanSlug}`,
                        priority: 0.7,
                        changeFrequency: "weekly",
                    });
                }
            }
        });
    } catch (err) {
        console.error("Error generating sitemap blogs:", err);
    }

    const dynamicCaseStudyPages: { url: string; priority: number; changeFrequency: "weekly" }[] = [];
    try {
        const csSnapshot = await getDocs(collection(db, "case_studies"));
        csSnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.slug) {
                const cleanSlug = data.slug.split('/').filter(Boolean).pop()?.replace(/^\/+|\/+$/g, '');
                if (cleanSlug) {
                    dynamicCaseStudyPages.push({
                        url: `${BASE_URL}/case-studies/${cleanSlug}`,
                        priority: 0.7,
                        changeFrequency: "weekly",
                    });
                }
            }
        });
    } catch (err) {
        console.error("Error generating sitemap case studies:", err);
    }

    return [...staticPages, ...servicePages, ...dynamicBlogPages, ...dynamicCaseStudyPages].map((page) => ({
        ...page,
        lastModified: now,
    }));
}
