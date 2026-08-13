import { MetadataRoute } from "next";

const BASE_URL = "https://mandemit.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date().toISOString();

    const staticPages = [
        { url: `${BASE_URL}/`, priority: 1.0, changeFrequency: "weekly" as const },
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

    return [...staticPages, ...servicePages].map((page) => ({
        ...page,
        lastModified: now,
    }));
}
