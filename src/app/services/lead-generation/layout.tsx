import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Lead Generation Services | Qualified Leads for Your Business | MandemIT",
    description: "MandemIT's lead generation services deliver a steady pipeline of qualified, high-intent leads. Multi-channel campaigns across Google, Social Media, and Email for businesses across India.",
    alternates: { canonical: "https://mandemit.com/services/lead-generation" },
    keywords: ["lead generation services India", "lead generation agency Visakhapatnam", "B2B lead generation", "qualified leads India", "MandemIT lead generation"],
    openGraph: { title: "Lead Generation Services | MandemIT", description: "Steady pipeline of qualified leads. Multi-channel lead generation for Indian businesses. 3× average lead growth.", url: "https://mandemit.com/services/lead-generation", siteName: "MandemIT", images: [{ url: "/mandemit.png", width: 1200, height: 630, alt: "MandemIT Lead Generation" }], type: "website", locale: "en_IN" },
    twitter: { card: "summary_large_image", title: "Lead Generation Services | MandemIT", description: "Qualified leads on demand. Expert multi-channel lead generation from MandemIT.", images: ["/mandemit.png"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
