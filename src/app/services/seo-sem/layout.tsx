import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best SEO Company in Vizag | SEO Services Visakhapatnam | MandemIT",
    description:
        "MandemIT is the best SEO company in Vizag offering expert SEO services in Visakhapatnam & Andhra Pradesh. Technical SEO, keyword research, link building & PPC management. 250% average traffic increase.",
    alternates: { canonical: "https://mandemit.com/services/seo-sem" },
    keywords: [
        "best SEO company in Vizag",
        "best SEO services in Vizag",
        "best SEO agency in Visakhapatnam",
        "SEO company in Vizag",
        "SEO services in Visakhapatnam",
        "SEO agency in Vizag",
        "local SEO services in Vizag",
        "best PPC agency in Vizag",
        "best PPC agency in Visakhapatnam",
        "PPC services in Visakhapatnam",
        "Google Ads services in Vizag",
        "SEO services Andhra Pradesh",
        "search engine optimization Visakhapatnam",
        "MandemIT SEO",
    ],
    openGraph: {
        title: "Best SEO Company in Vizag | MandemIT",
        description:
            "Top-ranked SEO services in Visakhapatnam. Technical SEO, local SEO, link building & PPC. 250% average traffic lift.",
        url: "https://mandemit.com/services/seo-sem",
        siteName: "MandemIT",
        images: [{ url: "/mandemit.png", width: 1200, height: 630, alt: "MandemIT SEO & SEM Services" }],
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Best SEO Company in Vizag | MandemIT",
        description: "250% traffic lift. Best SEO services in Visakhapatnam from MandemIT.",
        images: ["/mandemit.png"],
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
