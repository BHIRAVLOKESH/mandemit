import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Web Banners & Display Advertising Design | MandemIT",
    description: "Eye-catching web banner design and display advertising by MandemIT. Static, animated & HTML5 banners for Google Display Network and social media. Drive clicks and brand awareness.",
    alternates: { canonical: "https://mandemit.com/services/web-banners" },
    keywords: ["web banner design India", "display advertising agency", "Google Display Network banners", "HTML5 banner design", "MandemIT web banners"],
    openGraph: { title: "Web Banner Design & Display Ads | MandemIT", description: "Premium banner design for Google Display, social media & beyond. Drive clicks with eye-catching creative.", url: "https://mandemit.com/services/web-banners", siteName: "MandemIT", images: [{ url: "/mandemit.png", width: 1200, height: 630, alt: "MandemIT Web Banners" }], type: "website", locale: "en_IN" },
    twitter: { card: "summary_large_image", title: "Web Banner Design | MandemIT", description: "Eye-catching display banners that drive brand awareness and clicks. Expert design by MandemIT.", images: ["/mandemit.png"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
