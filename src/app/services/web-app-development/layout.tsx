import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Web & App Development Services | MandemIT",
    description: "MandemIT builds high-performance websites and web applications that convert. React, Next.js, and full-stack development for businesses across India. Custom solutions, fast delivery, SEO-ready.",
    alternates: { canonical: "https://mandemit.com/services/web-app-development" },
    keywords: ["web development India", "app development Visakhapatnam", "Next.js development agency", "React developer India", "website development Andhra Pradesh", "MandemIT web development"],
    openGraph: { title: "Web & App Development | MandemIT", description: "High-performance websites & web apps that convert visitors into customers. React, Next.js & full-stack solutions.", url: "https://mandemit.com/services/web-app-development", siteName: "MandemIT", images: [{ url: "/mandemit.png", width: 1200, height: 630, alt: "MandemIT Web & App Development" }], type: "website", locale: "en_IN" },
    twitter: { card: "summary_large_image", title: "Web & App Development | MandemIT", description: "Custom high-performance websites & apps. React, Next.js & full-stack development by MandemIT.", images: ["/mandemit.png"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
