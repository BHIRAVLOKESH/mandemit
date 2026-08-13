import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Bulk Email Marketing Services | MandemIT",
    description: "Professional bulk email marketing by MandemIT. Build relationships, drive repeat business, and generate leads with beautifully designed email campaigns and advanced segmentation.",
    alternates: { canonical: "https://mandemit.com/services/bulk-email" },
    keywords: ["bulk email marketing India", "email marketing agency Visakhapatnam", "email campaigns India", "email marketing services Andhra Pradesh", "MandemIT bulk email"],
    openGraph: { title: "Bulk Email Marketing | MandemIT", description: "Professional email campaigns that convert. Build customer relationships and drive repeat business.", url: "https://mandemit.com/services/bulk-email", siteName: "MandemIT", images: [{ url: "/mandemit.png", width: 1200, height: 630, alt: "MandemIT Bulk Email" }], type: "website", locale: "en_IN" },
    twitter: { card: "summary_large_image", title: "Bulk Email Marketing | MandemIT", description: "Professional email marketing that builds relationships and drives conversions. By MandemIT.", images: ["/mandemit.png"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
