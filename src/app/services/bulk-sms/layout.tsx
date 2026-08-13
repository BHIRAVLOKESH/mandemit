import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Bulk SMS Marketing Services | MandemIT",
    description: "Reach thousands of customers instantly with MandemIT's high-open-rate Bulk SMS marketing. Transactional & promotional SMS campaigns with 98% delivery rate for businesses across India.",
    alternates: { canonical: "https://mandemit.com/services/bulk-sms" },
    keywords: ["bulk SMS service India", "SMS marketing agency", "bulk SMS Visakhapatnam", "promotional SMS India", "transactional SMS service", "MandemIT bulk SMS"],
    openGraph: { title: "Bulk SMS Marketing | MandemIT", description: "98% delivery rate. Instant reach to thousands. Expert bulk SMS marketing for Indian businesses.", url: "https://mandemit.com/services/bulk-sms", siteName: "MandemIT", images: [{ url: "/mandemit.png", width: 1200, height: 630, alt: "MandemIT Bulk SMS" }], type: "website", locale: "en_IN" },
    twitter: { card: "summary_large_image", title: "Bulk SMS Marketing | MandemIT", description: "High-open-rate SMS campaigns. 98% delivery rate. Bulk SMS marketing by MandemIT.", images: ["/mandemit.png"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
