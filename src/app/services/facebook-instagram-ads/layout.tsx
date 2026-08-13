import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Social Media Marketing Agency in Vizag | Facebook & Instagram Ads | MandemIT",
    description:
        "MandemIT is the best social media marketing agency in Vizag offering Facebook Ads and Instagram marketing services in Visakhapatnam. High-converting Meta ad campaigns with 3× average lead growth.",
    alternates: { canonical: "https://mandemit.com/services/facebook-instagram-ads" },
    keywords: [
        "best social media marketing agency in Vizag",
        "social media marketing agency in Visakhapatnam",
        "best social media marketing company in Vizag",
        "social media marketing services in Vizag",
        "Facebook Ads agency in Vizag",
        "Instagram marketing agency in Visakhapatnam",
        "Facebook ads Visakhapatnam",
        "Instagram ads agency Vizag",
        "Meta ads agency India",
        "social media advertising Andhra Pradesh",
        "MandemIT social media ads",
    ],
    openGraph: {
        title: "Best Social Media Marketing Agency in Vizag | MandemIT",
        description:
            "Top Facebook & Instagram Ads agency in Visakhapatnam. High-converting campaigns with 3× lead growth.",
        url: "https://mandemit.com/services/facebook-instagram-ads",
        siteName: "MandemIT",
        images: [{ url: "/mandemit.png", width: 1200, height: 630, alt: "MandemIT Social Media Marketing Vizag" }],
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Social Media Marketing Agency in Vizag | MandemIT",
        description: "Facebook & Instagram Ads that convert. Best social media agency in Visakhapatnam.",
        images: ["/mandemit.png"],
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
