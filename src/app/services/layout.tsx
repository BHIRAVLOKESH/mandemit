import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Digital Marketing Services in Vizag | MandemIT",
    description:
        "MandemIT offers the best digital marketing services in Vizag & Visakhapatnam. 15+ expert services: SEO, Google Ads, Facebook Ads, Lead Generation, Web Development & more. 500+ brands served.",
    alternates: { canonical: "https://mandemit.com/services" },
    keywords: [
        "best digital marketing services in Vizag",
        "best digital marketing services in Visakhapatnam",
        "digital marketing services in Vizag",
        "digital marketing services in Visakhapatnam",
        "best online marketing agency in Vizag",
        "best online marketing agency in Visakhapatnam",
        "best online marketing company in Vizag",
        "best digital marketing experts in Vizag",
        "best digital marketing experts in Visakhapatnam",
        "SEO services Visakhapatnam",
        "Google Ads agency Vizag",
        "social media management Visakhapatnam",
        "lead generation services India",
        "web development Andhra Pradesh",
        "MandemIT services",
    ],
    openGraph: {
        title: "Best Digital Marketing Services in Vizag | MandemIT",
        description:
            "15+ expert digital marketing services in Visakhapatnam. SEO, Google Ads, Social Media, Lead Gen, Web Dev & more. 500+ brands powered.",
        url: "https://mandemit.com/services",
        siteName: "MandemIT",
        images: [{ url: "/mandemit.png", width: 1200, height: 630, alt: "MandemIT Digital Marketing Services Vizag" }],
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Digital Marketing Services in Vizag | MandemIT",
        description:
            "Expert SEO, Google Ads, Social Media & more in Visakhapatnam. 15+ services. 500+ brands.",
        images: ["/mandemit.png"],
    },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
