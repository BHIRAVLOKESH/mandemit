import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact MandemIT | Get a Free Digital Marketing Consultation",
    description:
        "Contact MandemIT – India's top digital marketing agency. Reach us in Visakhapatnam (+91 83413 69904), Bengaluru, or San Antonio, USA. Free 30-minute strategy consultation available.",
    alternates: { canonical: "https://mandemit.com/contact" },
    keywords: [
        "contact MandemIT",
        "digital marketing agency contact",
        "marketing agency Visakhapatnam phone",
        "free consultation digital marketing",
        "MandemIT email",
        "Madhurawada marketing agency",
    ],
    openGraph: {
        title: "Contact MandemIT | Free Digital Strategy Consultation",
        description:
            "Ready to grow your brand? Reach our experts across Visakhapatnam, Bengaluru & USA. Free 30-min consultation. Call +91 83413 69904.",
        url: "https://mandemit.com/contact",
        siteName: "MandemIT",
        images: [{ url: "/mandemit.png", width: 1200, height: 630, alt: "Contact MandemIT" }],
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact MandemIT | Free Digital Marketing Consultation",
        description: "Get a free 30-min digital strategy consultation. Offices in Vizag, Bengaluru & USA.",
        images: ["/mandemit.png"],
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
