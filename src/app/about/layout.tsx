import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About MandemIT | Digital Marketing Agency Est. 2015",
    description:
        "Learn about MandemIT – founded in 2015 by Mandem Reddy Sekhar. We are India's trusted digital marketing agency with offices in Visakhapatnam, Bengaluru, and San Antonio (USA). 500+ clients served.",
    alternates: { canonical: "https://mandemit.com/about" },
    keywords: [
        "about MandemIT",
        "digital marketing agency Visakhapatnam",
        "Mandem Reddy Sekhar",
        "digital agency Andhra Pradesh",
        "marketing agency history",
        "MandemIT offices India USA",
    ],
    openGraph: {
        title: "About MandemIT | Your Trusted Digital Growth Partner Since 2015",
        description:
            "500+ clients. 10+ years of digital excellence. Offices in Visakhapatnam, Bengaluru & San Antonio. Meet the team behind India's leading digital marketing agency.",
        url: "https://mandemit.com/about",
        siteName: "MandemIT",
        images: [{ url: "/mandemit.png", width: 1200, height: 630, alt: "About MandemIT Agency" }],
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "About MandemIT | Digital Marketing Agency Est. 2015",
        description: "10+ years empowering 500+ brands. Offices in Visakhapatnam, Bengaluru & USA.",
        images: ["/mandemit.png"],
    },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
