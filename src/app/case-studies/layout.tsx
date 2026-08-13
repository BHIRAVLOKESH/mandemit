import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies | Proven Digital Marketing Results | MandemIT",
    description:
        "Explore MandemIT's real-world success stories. See how we helped 500+ brands achieve extraordinary ROI through SEO, Google Ads, Social Media, and Lead Generation.",
    alternates: { canonical: "https://mandemit.com/case-studies" },
    keywords: [
        "digital marketing case studies India",
        "SEO success stories",
        "Google Ads results",
        "social media marketing ROI",
        "MandemIT case studies",
        "brand growth digital marketing",
    ],
    openGraph: {
        title: "Case Studies | Proven Digital Marketing Results | MandemIT",
        description:
            "Real results. Real brands. Explore how MandemIT delivers extraordinary growth through smart digital strategies.",
        url: "https://mandemit.com/case-studies",
        siteName: "MandemIT",
        images: [{ url: "/mandemit.png", width: 1200, height: 630, alt: "MandemIT Case Studies" }],
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Case Studies | MandemIT Proven Results",
        description: "Real brand growth stories. 500+ clients. See our digital marketing results.",
        images: ["/mandemit.png"],
    },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
