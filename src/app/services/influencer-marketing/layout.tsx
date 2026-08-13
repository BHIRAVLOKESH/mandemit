import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Influencer Marketing Services | MandemIT",
    description: "MandemIT's influencer marketing connects your brand with trusted creators to expand reach and drive authentic engagement. Instagram, YouTube & LinkedIn influencer campaigns across India.",
    alternates: { canonical: "https://mandemit.com/services/influencer-marketing" },
    keywords: ["influencer marketing India", "influencer agency Visakhapatnam", "Instagram influencer campaigns", "YouTuber collaborations India", "MandemIT influencer marketing"],
    openGraph: { title: "Influencer Marketing | MandemIT", description: "Authentic influencer campaigns that build brand trust and expand reach. Instagram, YouTube & LinkedIn creators.", url: "https://mandemit.com/services/influencer-marketing", siteName: "MandemIT", images: [{ url: "/mandemit.png", width: 1200, height: 630, alt: "MandemIT Influencer Marketing" }], type: "website", locale: "en_IN" },
    twitter: { card: "summary_large_image", title: "Influencer Marketing | MandemIT", description: "Authentic creator campaigns for brand growth. Expert influencer marketing by MandemIT.", images: ["/mandemit.png"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
