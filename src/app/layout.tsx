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
  title: "MandemIT | The Future of Business is Social Media",
  description: "MandemIT helps brands dominate online with data-driven strategies, creative content, and cutting-edge digital solutions.",
  keywords: ["digital marketing agency", "social media management", "SEO services", "web development", "brand growth", "Madurawada", "Andhra Pradesh"],
  authors: [{ name: "MandemIT" }],
  openGraph: {
    title: "No. 1 Digital Marketing Agency in Andhra Pradesh | MandemIT",
    description: "The No. 1 choice for brands to dominate the digital landscape with expert marketing and technology solutions.",
    url: "https://mandemit.com",
    siteName: "MandemIT",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/mandemit.png",
    apple: "/mandemit.png",
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
