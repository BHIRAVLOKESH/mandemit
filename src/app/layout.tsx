import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mandemit.com"),
  title: {
    default: "MandemIT | No. 1 Digital Marketing Agency in Andhra Pradesh",
    template: "%s | MandemIT",
  },
  description:
    "MandemIT is India's leading digital marketing agency specialising in SEO, Google Ads, Social Media Marketing, Lead Generation, Web Development & more. 500+ brands. 10+ years. Based in Visakhapatnam & Bengaluru.",
  keywords: [
    // Agency / Company — Vizag & Visakhapatnam
    "best digital marketing agency in Vizag",
    "best digital marketing company in Vizag",
    "best digital marketing agency in Visakhapatnam",
    "best digital marketing company in Visakhapatnam",
    "digital marketing agency in Vizag",
    "digital marketing company in Vizag",
    "digital marketing agency in Visakhapatnam",
    "digital marketing company in Visakhapatnam",
    // Services
    "best digital marketing services in Vizag",
    "best digital marketing services in Visakhapatnam",
    "digital marketing services in Vizag",
    "digital marketing services in Visakhapatnam",
    "best online marketing agency in Vizag",
    "best online marketing agency in Visakhapatnam",
    "best online marketing company in Vizag",
    "best digital marketing experts in Vizag",
    "best digital marketing experts in Visakhapatnam",
    // SEO
    "best SEO company in Vizag",
    "best SEO services in Vizag",
    "best SEO agency in Visakhapatnam",
    "SEO company in Vizag",
    "SEO services in Visakhapatnam",
    "SEO agency in Vizag",
    "local SEO services in Vizag",
    // Paid Advertising
    "best Google Ads agency in Vizag",
    "Google Ads agency in Visakhapatnam",
    "best PPC agency in Vizag",
    "best PPC agency in Visakhapatnam",
    "Google Ads services in Vizag",
    "PPC services in Visakhapatnam",
    // Social Media
    "best social media marketing agency in Vizag",
    "social media marketing agency in Visakhapatnam",
    "best social media marketing company in Vizag",
    "social media marketing services in Vizag",
    "Facebook Ads agency in Vizag",
    "Instagram marketing agency in Visakhapatnam",
    // Brand
    "MandemIT",
    "Madhurawada digital marketing",
  ],
  authors: [{ name: "MandemIT", url: "https://mandemit.com" }],
  creator: "MandemIT",
  publisher: "MandemIT",
  alternates: {
    canonical: "https://mandemit.com",
  },
  openGraph: {
    title: "No. 1 Digital Marketing Agency in Andhra Pradesh | MandemIT",
    description:
      "500+ brands powered. Expert SEO, Google Ads, Social Media, Web Development & Lead Generation services from Visakhapatnam, Bengaluru & USA.",
    url: "https://mandemit.com",
    siteName: "MandemIT",
    images: [
      {
        url: "/mandemit.png",
        width: 1200,
        height: 630,
        alt: "MandemIT – Digital Marketing Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "No. 1 Digital Marketing Agency in Andhra Pradesh | MandemIT",
    description:
      "Expert SEO, Google Ads, Social Media & Web Development. 500+ brands. 10+ years of proven results.",
    images: ["/mandemit.png"],
    site: "@mandemit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/mandemit.png",
    apple: "/mandemit.png",
  },
  verification: {
    google: "Mef1fX1aTLN3FElxDKys6rI0EDIRaKLYgwSJaH8tWNE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
