import Link from "next/link";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "./Logo";

const mainServices = [
    { name: "SEO & SEM", href: "/services/seo-sem" },
    { name: "Social Media Ads", href: "/services/facebook-instagram-ads" },
    { name: "Web & App Development", href: "/services/web-app-development" },
    { name: "Content Creation", href: "/services/content-creation" },
    { name: "Google Ads", href: "/services/google-ads" },
    { name: "Lead Generation", href: "/services/lead-generation" },
    { name: "Bulk SMS & Email", href: "/services/bulk-sms" },
    { name: "Influencer Marketing", href: "/services/influencer-marketing" },
];

export default function Footer() {
    return (
        <footer className="bg-navy-dark text-white pt-20 pb-10 px-6 relative border-t-2 border-golden font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Column 1: Brand */}
                <div className="space-y-6">
                    <Link href="/">
                        <Logo />
                    </Link>
                    <p className="text-gray-400 max-w-xs">
                        The Future of Business is Social Media. We empower brands to dominate the digital landscape through data-driven strategies.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="https://facebook.com/ascentdigital" target="_blank" rel="noopener noreferrer" className="p-2 bg-navy rounded-lg text-golden hover:bg-golden hover:text-navy transition-all duration-300">
                            <FaFacebookF className="w-5 h-5" />
                        </Link>
                        <Link href="https://www.instagram.com/ascentdigital_ad/" target="_blank" rel="noopener noreferrer" className="p-2 bg-navy rounded-lg text-golden hover:bg-golden hover:text-navy transition-all duration-300">
                            <FaInstagram className="w-5 h-5" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/ascent-digital-ad/" target="_blank" rel="noopener noreferrer" className="p-2 bg-navy rounded-lg text-golden hover:bg-golden hover:text-navy transition-all duration-300">
                            <FaLinkedinIn className="w-5 h-5" />
                        </Link>
                        <Link href="https://www.youtube.com/@AscentDigital_AD" target="_blank" rel="noopener noreferrer" className="p-2 bg-navy rounded-lg text-golden hover:bg-golden hover:text-navy transition-all duration-300">
                            <FaYoutube className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h3 className="text-xl font-bold mb-8 text-golden uppercase tracking-tighter">Quick Links</h3>
                    <ul className="space-y-4">
                        <li><Link href="/" className="text-gray-400 hover:text-golden flex items-center group transition-colors"><ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" /> Home</Link></li>
                        <li><Link href="/about" className="text-gray-400 hover:text-golden flex items-center group transition-colors"><ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" /> About Us</Link></li>
                        <li><Link href="/services" className="text-gray-400 hover:text-golden flex items-center group transition-colors"><ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" /> Services</Link></li>
                        <li><Link href="/blog" className="text-gray-400 hover:text-golden flex items-center group transition-colors"><ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" /> Blog</Link></li>
                        <li><Link href="/contact" className="text-gray-400 hover:text-golden flex items-center group transition-colors"><ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" /> Contact</Link></li>
                    </ul>
                </div>

                {/* Column 3: Services */}
                <div>
                    <h3 className="text-xl font-bold mb-8 text-golden uppercase tracking-tighter">Our Services</h3>
                    <ul className="space-y-4">
                        {mainServices.map((service) => (
                            <li key={service.name}>
                                <Link href={service.href} className="text-gray-400 hover:text-golden flex items-center group transition-colors">
                                    <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                                    {service.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4: Contact Info */}
                <div>
                    <h3 className="text-xl font-bold mb-8 text-golden uppercase tracking-tighter">Contact Info</h3>
                    <ul className="space-y-6">
                        <li className="flex items-start space-x-4">
                            <div className="p-2 bg-navy rounded-lg text-golden shrink-0">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div className="text-gray-400 text-xs space-y-3">
                                <div>
                                    <p className="font-bold text-golden uppercase text-[9px] mb-1 tracking-widest">Visakhapatnam (HQ)</p>
                                    <p>2-161/8, HIG 662, Mithilapuri Colony, Madhurawada, Visakhapatnam – 530041</p>
                                </div>
                                <div className="pt-2 border-t border-white/5">
                                    <p className="font-bold text-golden uppercase text-[9px] mb-1 tracking-widest">Bengaluru</p>
                                    <p>No. 53, Harika Nilaya, 2nd A Cross Road, Priyadarshini Layout, Bengaluru – 560036</p>
                                </div>
                                <div className="pt-2 border-t border-white/5">
                                    <p className="font-bold text-golden uppercase text-[9px] mb-1 tracking-widest">USA Address</p>
                                    <p>5907 Eckhert Rd, Apt 206, San Antonio, TX 78240, USA</p>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center space-x-4">
                            <div className="p-2 bg-navy rounded-lg text-golden shrink-0">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div className="text-gray-400 text-sm font-bold">
                                <p>+918341369904</p>
                            </div>
                        </li>
                        <li className="flex items-center space-x-4">
                            <div className="p-2 bg-navy rounded-lg text-golden shrink-0">
                                <Mail className="w-5 h-5" />
                            </div>
                            <span className="text-gray-400 text-sm font-bold">info@mandemit.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                <p>© 2026 Ascent Digital. All Rights Reserved | Mandem Reddy Sekhar, Managing Director</p>
                <div className="flex space-x-6">
                    <Link href="/privacy-policy" className="hover:text-golden">Privacy Policy</Link>
                    <Link href="/terms-of-service" className="hover:text-golden">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
