import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Blog Maintenance Services | Content Management | MandemIT",
    description: "MandemIT's blog maintenance services keep your website fresh, SEO-friendly, and engaging. Regular content updates, SEO optimization, and performance tracking for consistent online growth.",
    alternates: { canonical: "https://mandemit.com/services/blog-maintenance" },
    keywords: ["blog maintenance services India", "content management agency", "SEO blog writing India", "website content updates", "MandemIT blog maintenance"],
    openGraph: { title: "Blog Maintenance Services | MandemIT", description: "Keep your blog fresh & SEO-optimised with MandemIT's content management. Regular updates, quality content.", url: "https://mandemit.com/services/blog-maintenance", siteName: "MandemIT", images: [{ url: "/mandemit.png", width: 1200, height: 630, alt: "MandemIT Blog Maintenance" }], type: "website", locale: "en_IN" },
    twitter: { card: "summary_large_image", title: "Blog Maintenance | MandemIT", description: "Regular, SEO-friendly blog content that keeps your site fresh and ranking. By MandemIT.", images: ["/mandemit.png"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
