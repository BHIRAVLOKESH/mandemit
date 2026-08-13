import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "LinkedIn Ads | B2B Digital Marketing | MandemIT",
    description: "MandemIT's LinkedIn advertising services connect you with decision-makers, C-suite executives, and professional leads. Expert B2B marketing campaigns for India's growing businesses.",
    alternates: { canonical: "https://mandemit.com/services/linkedin-ads" },
    keywords: ["LinkedIn ads India", "B2B marketing agency", "LinkedIn advertising Visakhapatnam", "professional ads management India", "MandemIT LinkedIn ads"],
    openGraph: { title: "LinkedIn Ads | B2B Marketing | MandemIT", description: "Reach decision-makers with expert LinkedIn advertising. B2B lead generation that delivers measurable results.", url: "https://mandemit.com/services/linkedin-ads", siteName: "MandemIT", images: [{ url: "/mandemit.png", width: 1200, height: 630, alt: "MandemIT LinkedIn Ads" }], type: "website", locale: "en_IN" },
    twitter: { card: "summary_large_image", title: "LinkedIn Ads | B2B Marketing | MandemIT", description: "Expert LinkedIn advertising for B2B brands. Reach decision-makers across India.", images: ["/mandemit.png"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
