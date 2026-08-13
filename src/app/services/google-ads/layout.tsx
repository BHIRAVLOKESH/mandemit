import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Google Ads Agency in Vizag | PPC Services Visakhapatnam | MandemIT",
    description:
        "MandemIT is the best Google Ads agency in Vizag offering expert PPC services in Visakhapatnam. Search, Display, Shopping & YouTube campaigns with 400% average ROI for Indian businesses.",
    alternates: { canonical: "https://mandemit.com/services/google-ads" },
    keywords: [
        "best Google Ads agency in Vizag",
        "Google Ads agency in Visakhapatnam",
        "best PPC agency in Vizag",
        "best PPC agency in Visakhapatnam",
        "Google Ads services in Vizag",
        "PPC services in Visakhapatnam",
        "Google Ads management Visakhapatnam",
        "PPC management Vizag",
        "search ads agency Andhra Pradesh",
        "MandemIT Google Ads",
    ],
    openGraph: {
        title: "Best Google Ads Agency in Vizag | MandemIT",
        description:
            "Top Google Ads & PPC agency in Visakhapatnam. 400% average ROI. Expert Search, Display & Video campaigns.",
        url: "https://mandemit.com/services/google-ads",
        siteName: "MandemIT",
        images: [{ url: "/mandemit.png", width: 1200, height: 630, alt: "MandemIT Google Ads" }],
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Google Ads Agency in Vizag | MandemIT",
        description: "400% average ROI with expert Google Ads & PPC services in Visakhapatnam.",
        images: ["/mandemit.png"],
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
