const fs = require('fs');
const path = require('path');

const services = [
  { slug: "content-creation", name: "Content Creation" },
  { slug: "web-banners", name: "Web Banners" },
  { slug: "lead-generation", name: "Lead Generation" },
  { slug: "influencer-marketing", name: "Influencer Marketing" },
  { slug: "bulk-sms", name: "Bulk SMS" },
  { slug: "bulk-email", name: "Bulk Email" },
  { slug: "bulk-voice-calls", name: "Bulk Voice Calls" },
  { slug: "google-ads", name: "Google Ads" },
  { slug: "facebook-instagram-ads", name: "Facebook & Instagram Ads" },
  { slug: "twitter-ads", name: "Twitter Ads" },
  { slug: "youtube-ads", name: "YouTube Ads" },
  { slug: "linkedin-ads", name: "LinkedIn Ads" },
  { slug: "blog-maintenance", name: "Blog Maintenance" },
  { slug: "web-app-development", name: "Web & App Development" },
];

const template = (name, slug) => `import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Star, Zap, Target, BarChart3, Rocket, Layout, Search, Globe, Smartphone, Mail, PhoneCall, Code, Megaphone, PenTool, Settings } from "lucide-react";

export const metadata = {
  title: "${name} Services | MandemIT Digital Marketing",
  description: "Professional ${name} services by MandemIT. Grow your business with data-driven social media strategies. Get a free consultation today.",
};

const serviceData = {
  title: "${name}",
  tagline: "Empowering Your Brand with Professional ${name} Solutions",
  description: [
    "At MandemIT, we specialize in delivering high-impact ${name} services that resonate with your target audience. Our data-driven approach ensures that every campaign is optimized for maximum reach and engagement.",
    "Whether you are a startup looking for initial traction or an established brand aiming to reach new heights, our team of experts provides the strategic oversight and creative execution needed to succeed in today's competitive landscape.",
    "We combine industry insights with cutting-edge technology to deliver ${name} solutions that not only look great but also drive measurable business results."
  ],
  icon: Star,
  features: [
    { title: "Strategic Planning", desc: "Custom roadmap built around your specific business goals and audience segments.", icon: Target },
    { title: "Creative Execution", desc: "High-quality production and design that captures your brand's unique voice.", icon: Zap },
    { title: "Performance Tracking", desc: "Real-time analytics and reporting to monitor your campaign's success.", icon: BarChart3 },
    { title: "Targeted Outreach", desc: "Precision targeting to ensure your message reaches the right people at the right time.", icon: Search },
    { title: "Optimization", desc: "Continuous refinement of strategies based on performance data and feedback.", icon: Settings },
    { title: "Support", desc: "Dedicated support team to help you navigate every step of your digital journey.", icon: Globe },
  ],
  process: [
    { step: "01", title: "Discovery", desc: "Understanding your brand, goals, and target audience." },
    { step: "02", title: "Strategy", desc: "Crafting a tailored plan for your ${name} campaign." },
    { step: "03", title: "Execution", desc: "Implementing the strategy with creative excellence." },
    { step: "04", title: "Results", desc: "Tracking performance and optimizing for growth." },
  ],
  benefits: [
    { title: "Increased ROI", desc: "Our strategies are built to deliver high returns on your investment.", stat: "400% ROI" },
    { title: "Brand Authority", desc: "Position your brand as a leader in your industry.", stat: "Page 1 Rank" },
    { title: "Customer Loyalty", desc: "Build lasting relationships with your target audience.", stat: "98% Retenion" },
  ],
  results: [
    { val: "250%", label: "Lead Growth" },
    { val: "400%", label: "Average ROI" },
    { val: "3X", label: "Brand Reach" },
  ],
  faqs: [
    { q: "What is ${name}?", a: "${name} is a core digital marketing strategy that focuses on driving engagement and conversions for your brand." },
    { q: "How long does it take to see results?", a: "While some results are immediate, a full strategic rollout typically takes 3-6 months for maximum impact." },
    { q: "Is ${name} right for my business?", a: "Yes, ${name} is essential for any business looking to expand their presence in the digital age." },
  ],
  related: [
    { title: "SEO & SEM", icon: Search, href: "/services/seo-sem" },
    { title: "Google Ads", icon: Target, href: "/services/google-ads" },
    { title: "Lead Generation", icon: Search, href: "/services/lead-generation" },
  ]
};

export default function ${name.replace(/[^a-zA-Z]/g, '')}Page() {
  return <ServicePageTemplate {...serviceData} />;
}
`;

services.forEach(service => {
  const dir = path.join('c:/Users/hp/Desktop/madem it/src/app/services', service.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), template(service.name, service.slug));
  console.log(`Generated page for ${service.name}`);
});
