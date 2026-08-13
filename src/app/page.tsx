import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import StatsCounter from "@/components/StatsCounter";
import ProcessTimeline from "@/components/ProcessTimeline";
import TestimonialSlider from "@/components/TestimonialSlider";
import CTABanner from "@/components/CTABanner";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CaseStudiesTeaser from "@/components/home/CaseStudiesTeaser";
import Link from "next/link";

export const metadata = {
  title: "No. 1 Digital Marketing Agency in Andhra Pradesh | MandemIT",
  description: "MandemIT is the No. 1 digital marketing agency in Andhra Pradesh, specializing in SEO, Social Media Ads, Web Development, and Lead Generation. Boost your ROI today!",
  alternates: { canonical: "https://mandemit.com" },
  openGraph: {
    title: "No. 1 Digital Marketing Agency in Andhra Pradesh | MandemIT",
    description: "MandemIT is the No. 1 digital marketing agency in Andhra Pradesh — SEO, Google Ads, Social Media, Lead Generation, Web Development. 500+ brands powered.",
    url: "https://mandemit.com",
    siteName: "MandemIT",
    images: [{ url: "/mandemit.png", width: 1200, height: 630, alt: "MandemIT Digital Marketing Agency" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "No. 1 Digital Marketing Agency in Andhra Pradesh | MandemIT",
    description: "Expert SEO, Google Ads, Social Media & Web Dev from Visakhapatnam. 500+ brands. 10+ years.",
    images: ["/mandemit.png"],
  },
  keywords: [
    "best digital marketing agency in Vizag",
    "best digital marketing company in Vizag",
    "best digital marketing agency in Visakhapatnam",
    "best digital marketing company in Visakhapatnam",
    "digital marketing agency in Vizag",
    "digital marketing company in Vizag",
    "digital marketing agency in Visakhapatnam",
    "digital marketing company in Visakhapatnam",
    "best digital marketing services in Vizag",
    "best digital marketing services in Visakhapatnam",
    "digital marketing services in Vizag",
    "digital marketing services in Visakhapatnam",
    "best online marketing agency in Vizag",
    "best digital marketing experts in Vizag",
    "best digital marketing experts in Visakhapatnam",
    "MandemIT",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "MandemIT",
  "image": "https://mandemit.com/mandemit.png",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "No. 53, 2nd Floor, Harika Nilaya, 2nd A Cross Road, Near Krishnarajapura, Priyadarshini Layout",
      "addressLocality": "Krishnarajapura",
      "addressRegion": "Bengaluru, Karnataka",
      "postalCode": "560036",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "2-161/8, HIG 662, Mithilapuri Colony, Midhilapuri VUDA Colony, Madhurawada",
      "addressLocality": "Visakhapatnam",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "530041",
      "addressCountry": "IN"
    }
  ],
  "url": "https://mandemit.com",
  "telephone": "+91 83413 69904",
  "email": "sekhar@mandemit.com",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://facebook.com/mandemit",
    "https://instagram.com/mandemit",
    "https://linkedin.com/company/mandemit"
  ]
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <HeroSection />

      <StatsCounter />

      <AboutSnapshot />

      <ServicesOverview />

      <WhyChooseUs />

      <ProcessTimeline />

      <CaseStudiesTeaser />

      {/* Services Teaser Full List */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-navy uppercase tracking-tighter">Complete Suite of Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
            {[
              "Content Creation", "Web Banners", "Lead Generation",
              "SEO & SEM", "Influencer Marketing", "Bulk SMS",
              "Bulk Email", "Bulk Voice Calls", "Google Ads",
              "Facebook & Instagram Ads", "YouTube Ads",
              "LinkedIn Ads", "Blog Maintenance", "Web & App Development"
            ].map((s) => (
              <Link
                key={s}
                href={`/services/${s.toLowerCase().replace(/ /g, "-")}`}
                className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-navy/5 hover:border-golden hover:shadow-lg transition-all group"
              >
                <div className="w-2 h-2 bg-golden rounded-full group-hover:scale-150 transition-transform" />
                <span className="font-bold text-navy group-hover:text-golden transition-colors">{s}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSlider />

      <CTABanner />

      <Footer />
    </main>
  );
}
