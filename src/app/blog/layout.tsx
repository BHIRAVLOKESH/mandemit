import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Digital Marketing Blog | MandemIT Intel",
    description:
        "Expert tips, trends & digital marketing insights from MandemIT. Read articles on SEO, Google Ads, Social Media, Content Strategy, and Web Development to fuel your brand's growth.",
    alternates: { canonical: "https://mandemit.com/blog" },
    keywords: [
        "digital marketing blog India",
        "SEO tips 2025",
        "Google Ads guide",
        "social media marketing tips",
        "content marketing strategy",
        "MandemIT blog",
        "digital marketing trends Andhra Pradesh",
    ],
    openGraph: {
        title: "Digital Marketing Blog | MandemIT Intel",
        description:
            "Expert digital marketing insights from India's top agency. SEO trends, Google Ads tips, Social Media strategies and more.",
        url: "https://mandemit.com/blog",
        siteName: "MandemIT",
        images: [{ url: "/mandemit.png", width: 1200, height: 630, alt: "MandemIT Blog" }],
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Digital Marketing Blog | MandemIT Intel",
        description: "SEO, Google Ads, Social Media & more. Expert insights from India's top digital marketing agency.",
        images: ["/mandemit.png"],
    },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
