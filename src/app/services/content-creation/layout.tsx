import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Content Creation Services | Video, Graphics & Copywriting | MandemIT",
    description: "MandemIT's professional content creation services include video production, graphic design, photography, and copywriting. High-quality brand content that engages and converts across all platforms.",
    alternates: { canonical: "https://mandemit.com/services/content-creation" },
    keywords: ["content creation agency India", "video production Visakhapatnam", "graphic design agency Andhra Pradesh", "brand content services India", "MandemIT content creation"],
    openGraph: { title: "Content Creation Services | MandemIT", description: "Professional video, graphics & copywriting for your brand. Expert content creation that drives engagement.", url: "https://mandemit.com/services/content-creation", siteName: "MandemIT", images: [{ url: "/mandemit.png", width: 1200, height: 630, alt: "MandemIT Content Creation" }], type: "website", locale: "en_IN" },
    twitter: { card: "summary_large_image", title: "Content Creation Services | MandemIT", description: "High-quality video, graphics & copywriting for brands. Professional content creation from MandemIT.", images: ["/mandemit.png"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
