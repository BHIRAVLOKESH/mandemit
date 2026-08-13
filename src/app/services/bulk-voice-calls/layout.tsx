import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Bulk Voice Call Services | Automated Voice Marketing | MandemIT",
    description: "Scale your outreach with MandemIT's automated bulk voice call services. High-volume voice broadcast campaigns with personalised messages for customer engagement and lead nurturing.",
    alternates: { canonical: "https://mandemit.com/services/bulk-voice-calls" },
    keywords: ["bulk voice calls India", "automated voice calls service", "voice broadcasting India", "IVR marketing service", "MandemIT voice calls"],
    openGraph: { title: "Bulk Voice Calls | MandemIT", description: "Automated voice broadcast campaigns at scale. Personalised voice messages for customer engagement.", url: "https://mandemit.com/services/bulk-voice-calls", siteName: "MandemIT", images: [{ url: "/mandemit.png", width: 1200, height: 630, alt: "MandemIT Bulk Voice Calls" }], type: "website", locale: "en_IN" },
    twitter: { card: "summary_large_image", title: "Bulk Voice Calls | MandemIT", description: "Automated voice call campaigns for customer engagement. Scale your outreach with MandemIT.", images: ["/mandemit.png"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
