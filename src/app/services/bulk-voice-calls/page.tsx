"use client";

import ServicePageTemplate from "@/components/ServicePageTemplate";
import { PhoneCall, Zap, Target, BarChart3, Users, MessageSquare, Mail, Smartphone } from "lucide-react";

const serviceData = {
  title: "Bulk Voice Calls",
  tagline: "Scale your customer outreach with automated voice broadcasts — reaching thousands with a personal touch, simultaneously.",
  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
  description: [
    "Bulk Voice Calls (also known as Robocalls or Voice Broadcasts) allow you to deliver a pre-recorded audio message to thousands of customers at once, creating a personal connection at scale. MandemIT's platform ensures reliable delivery across all networks.",
    "This service is widely used for appointment reminders, payment alerts, event announcements, election campaigns, emergency notifications, and promotional offers — any scenario where a human voice creates stronger impact than text.",
    "Our end-to-end service handles script recording, IVR (Interactive Voice Response) setup, campaign scheduling, and performance reporting so you can focus on what matters — your business."
  ],
  icon: PhoneCall,
  features: [
    { title: "Voice Broadcasting", desc: "Deliver custom pre-recorded messages to thousands of numbers simultaneously.", icon: PhoneCall },
    { title: "IVR Integration", desc: "Interactive voice menus that let recipients respond by pressing keys — enabling automated surveys and lead qualification.", icon: MessageSquare },
    { title: "Multi-Language Support", desc: "Campaigns in English, Hindi, Telugu, Tamil, and other regional languages for hyper-local reach.", icon: Users },
    { title: "Smart Retry Logic", desc: "Automatic retries for unanswered calls at intelligent intervals to maximize reach.", icon: Zap },
    { title: "Call Scheduling", desc: "Schedule campaigns for specific times and days to maximize answer rates.", icon: Target },
    { title: "Detailed Call Reports", desc: "Analytics on call delivery rates, duration, answered calls, and IVR response data.", icon: BarChart3 },
  ],
  process: [
    { step: "01", title: "Script Creation", desc: "We help craft a concise, professional script optimized for voice delivery and maximum listener engagement." },
    { step: "02", title: "Professional Recording", desc: "Studio-quality voice recording in your chosen language and gender, with your brand's tone and personality." },
    { step: "03", title: "Contact Upload & Scheduling", desc: "Upload your verified contact list, set your preferred calling window, and schedule the campaign." },
    { step: "04", title: "Broadcast & Report", desc: "Calls go out at scale, and you receive a live and post-campaign report detailing delivery and response metrics." },
  ],
  benefits: [
    { title: "Higher Engagement vs. SMS", desc: "A human voice creates 3× more emotional connection and recall than plain text messages.", stat: "3× More Recall" },
    { title: "Massive Simultaneous Reach", desc: "Reach 10,000+ contacts in minutes — impossible with manual calling teams.", stat: "10K+ Calls/Min" },
    { title: "Cost-Effective at Scale", desc: "Per-call costs drop dramatically at volume, making it one of the most affordable outreach channels.", stat: "₹0.25 Per Call" },
  ],
  results: [
    { val: "85%", label: "Answer Rate" },
    { val: "1M+", label: "Calls Per Campaign" },
    { val: "40%", label: "Higher Conversion vs. SMS" },
  ],
  faqs: [
    { q: "Is Bulk Voice Calling legal in India?", a: "Yes, when done properly. Promotional calls must only be made to numbers on the national DND (Do Not Disturb) whitelist. Transactional calls (reminders, alerts) have fewer restrictions. We handle all compliance." },
    { q: "What languages can you record in?", a: "We support English, Hindi, Telugu, Tamil, Kannada, Malayalam, Marathi, Bengali, Gujarati, and other major Indian languages." },
    { q: "Can recipients respond to the call?", a: "Yes, with our IVR (Interactive Voice Response) system, recipients can press 1 to speak to your team, press 2 to opt-out, press 3 for more information, etc." },
    { q: "How long should my voice message be?", a: "We recommend 30-45 seconds for maximum retention. Shorter messages have higher completion rates and better recall." },
    { q: "Do you provide the voice recording service?", a: "Yes, we have professional voice artists who can record your message in any language with your specified tone — formal, friendly, or urgent." },
  ],
  related: [
    { title: "Bulk SMS", icon: Smartphone, href: "/services/bulk-sms" },
    { title: "Bulk Email", icon: Mail, href: "/services/bulk-email" },
    { title: "Lead Generation", icon: Users, href: "/services/lead-generation" },
  ],
};

export default function Page() {
  return <ServicePageTemplate {...serviceData} />;
}
