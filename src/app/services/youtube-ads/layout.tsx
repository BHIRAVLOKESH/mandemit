import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "YouTube Ads Services | Video Marketing | MandemIT",
    description: "Reach millions of viewers with MandemIT's YouTube advertising. Compelling video ad campaigns, precise audience targeting, and measurable brand growth for businesses across India.",
    alternates: { canonical: "https://mandemit.com/services/youtube-ads" },
    keywords: ["YouTube ads India", "video advertising agency", "YouTube marketing Visakhapatnam", "video ads management India", "MandemIT YouTube ads"],
    openGraph: { title: "YouTube Ads | Video Marketing Services | MandemIT", description: "Engage millions with expert YouTube ads. Brand awareness, lead gen & sales campaigns for Indian businesses.", url: "https://mandemit.com/services/youtube-ads", siteName: "MandemIT", images: [{ url: "/mandemit.png", width: 1200, height: 630, alt: "MandemIT YouTube Ads" }], type: "website", locale: "en_IN" },
    twitter: { card: "summary_large_image", title: "YouTube Ads | MandemIT", description: "Reach millions with expert YouTube video advertising. MandemIT delivers results.", images: ["/mandemit.png"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
