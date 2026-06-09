"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Smartphone, Zap, BarChart3, Target, Users, MessageSquare, Megaphone, Globe } from "lucide-react";

const serviceData = {
  title: "Bulk SMS",
  tagline: "Reach thousands of customers instantly with high open-rate SMS campaigns that deliver your message directly to their pocket.",
  image: "https://images.unsplash.com/photo-1526566762484-e05d2f5feff4?w=900&q=80",
  description: [
    "With a 98% open rate, SMS is the most direct and effective channel for customer communication. MandemIT's Bulk SMS service lets you reach your entire customer base in seconds with promotional offers, transactional alerts, reminders, and OTPs.",
    "Our platform supports DLT-compliant messaging across all major Indian telecom operators, ensuring your messages are delivered reliably and legally. We handle everything from content creation to compliance.",
    "Whether you're running flash sales, sending appointment reminders, or launching a product, Bulk SMS ensures your message is seen — not buried in a spam folder."
  ],
  icon: Smartphone,
  features: [
    { title: "Instant Delivery", desc: "Messages delivered to thousands of numbers within seconds, with real-time delivery tracking.", icon: Zap },
    { title: "DLT Compliance", desc: "Fully compliant with TRAI's Distributed Ledger Technology regulations for hassle-free sending.", icon: Target },
    { title: "Personalization", desc: "Dynamic fields to personalize each SMS with the recipient's name, order details, or custom data.", icon: Users },
    { title: "Smart Scheduling", desc: "Schedule campaigns in advance or trigger messages based on user actions and events.", icon: BarChart3 },
    { title: "Opt-Out Management", desc: "Automatic opt-out handling to remain compliant and maintain a clean, engaged list.", icon: MessageSquare },
    { title: "Detailed Analytics", desc: "Real-time reports on delivery rates, click rates (for URL-shortened links), and campaign ROI.", icon: BarChart3 },
  ],
  process: [
    { step: "01", title: "List Upload & Validation", desc: "Upload your contact list — we validate, clean, and segment it based on your targeting criteria." },
    { step: "02", title: "Content & Template Approval", desc: "We help craft the perfect SMS copy (within 160 characters) and get it DLT-approved for compliant delivery." },
    { step: "03", title: "Campaign Scheduling", desc: "Choose your send time for maximum impact — we recommend peak windows based on your industry and audience." },
    { step: "04", title: "Send & Report", desc: "Your SMS campaign goes out, and you get a real-time delivery report within minutes of sending." },
  ],
  benefits: [
    { title: "98% Open Rate", desc: "Unlike email (20% open rate), SMS messages are almost universally read within 3 minutes of delivery.", stat: "98% Open Rate" },
    { title: "Instant Results", desc: "Flash sales and time-limited offers via SMS generate immediate traffic spikes and conversions.", stat: "Instant Impact" },
    { title: "Low Cost Per Reach", desc: "At a fraction of a rupee per message, Bulk SMS is one of the most cost-efficient marketing channels available.", stat: "₹0.10 Per SMS" },
  ],
  results: [
    { val: "98%", label: "Delivery Rate" },
    { val: "10M+", label: "SMS Sent Monthly" },
    { val: "35%", label: "Avg. Response Rate" },
  ],
  faqs: [
    { q: "What is DLT registration and do I need it?", a: "DLT (Distributed Ledger Technology) registration is mandatory in India for all commercial SMS senders. We handle the entire registration process for you." },
    { q: "Can I send promotional SMS on Sundays?", a: "Per TRAI guidelines, promotional SMS can only be sent between 9 AM – 9 PM on working days. We ensure all campaigns are compliant." },
    { q: "What types of SMS can you send?", a: "We handle Promotional SMS (offers/discounts), Transactional SMS (OTPs, alerts, order updates), and Service SMS (informational messages)." },
    { q: "How many contacts can I send to?", a: "Our platform scales from hundreds to millions of contacts. There's no upper limit — the more you send, the lower your per-SMS cost." },
    { q: "Do you provide a free trial?", a: "Yes, we offer a trial of 100 SMS credits so you can test our delivery speed and platform before committing." },
  ],
  related: [
    { title: "Bulk Email", icon: Megaphone, href: "/services/bulk-email" },
    { title: "Bulk Voice Calls", icon: Globe, href: "/services/bulk-voice-calls" },
    { title: "Lead Generation", icon: Users, href: "/services/lead-generation" },
  ],
};

export default function Page() {
  return <ServicePageTemplate {...serviceData} />;
}
