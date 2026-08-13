"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Globe } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";

const contactFaqs = [
    { q: "How quickly do you respond to inquiries?", a: "We typically respond to all inquiries within 24 hours during business days." },
    { q: "Do you offer free consultations?", a: "Yes, we offer a free 30-minute digital strategy consultation to all new prospective clients." },
    { q: "Where is your office located?", a: "Our main office is located in Madhurawada, Visakhapatnam, Andhra Pradesh, serving clients pan-India." },
    { q: "What is your pricing model?", a: "We offer both project-based and retainer-based pricing depending on your specific needs and goals." },
];

export default function Contact() {
    const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">("idle");
    const [formLoadTime] = useState<number>(Date.now());

    const isLikelySpam = (name: string, email: string, phone: string, message: string): boolean => {
        // Block random-character names (no vowels or too random)
        const hasVowel = /[aeiouAEIOU]/.test(name);
        if (!hasVowel && name.length > 4) return true;

        // Block names that are just random uppercase/lowercase mix (like hWqDXOo...)
        const randomCharPattern = /^[A-Za-z]{15,}$/.test(name) && !/\s/.test(name);
        if (randomCharPattern && name.length > 12) return true;

        // Block messages that are only numbers
        if (/^["\s\d]+$/.test(message.trim())) return true;

        // Block obviously fake emails
        if (/\d{2,}\.[a-z]+\d/.test(email)) return true;

        return false;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const timeTaken = (Date.now() - formLoadTime) / 1000;

        const formData = new FormData(e.target as HTMLFormElement);

        // Honeypot check — bots fill hidden fields, humans don't
        const honeypot = formData.get("website") as string;
        if (honeypot && honeypot.trim() !== "") return;

        // Time gate — bots submit instantly, humans take at least 3 seconds
        if (timeTaken < 3) {
            alert("Please take a moment to fill the form properly.");
            return;
        }

        const name = (formData.get("name") as string).trim();
        const email = (formData.get("email") as string).trim();
        const phone = (formData.get("phone") as string).trim();
        const message = (formData.get("message") as string).trim();

        // Spam content check
        if (isLikelySpam(name, email, phone, message)) {
            alert("Invalid submission detected. Please fill the form correctly.");
            return;
        }

        setFormStatus("sending");
        try {
            const data = {
                name,
                email,
                phone,
                service: formData.get("service"),
                message,
                createdAt: serverTimestamp(),
                date: new Date().toLocaleString(),
            };

            await addDoc(collection(db, "form_submissions"), data);
            setFormStatus("success");
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Something went wrong. Please try again.");
            setFormStatus("idle");
        }
    };

    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="relative pt-20 pb-8 bg-navy overflow-hidden">
                <div className="absolute inset-0 diagonal-lines opacity-10" />
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-2 uppercase tracking-tighter">Get In Touch</h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Ready to dominate the digital landscape? Contact our experts today.
                    </p>
                </div>
            </section>

            <section className="py-12 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 md:p-10 rounded-[32px] shadow-xl border border-navy/5"
                        >
                            <h2 className="text-3xl font-black text-navy mb-8">Send Us a Message</h2>

                            {formStatus === "success" ? (
                                <div className="bg-golden/20 p-8 rounded-3xl text-center space-y-4">
                                    <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center text-navy mx-auto">
                                        <Send className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-navy">Message Sent!</h3>
                                    <p className="text-navy/70">Thank you for reaching out. We'll be in touch soon.</p>
                                    <button onClick={() => setFormStatus("idle")} className="text-navy font-bold underline">Send another message</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Honeypot field — hidden from humans, bots fill it */}
                                    <div style={{ display: 'none' }} aria-hidden="true">
                                        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-navy uppercase tracking-widest ml-1">Full Name</label>
                                            <input type="text" name="name" required className="w-full px-5 py-4 rounded-xl border border-navy/10 focus:border-golden focus:ring-4 focus:ring-golden/5 outline-none transition-all font-bold text-navy" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-navy uppercase tracking-widest ml-1">Email Address</label>
                                            <input type="email" name="email" required className="w-full px-5 py-4 rounded-xl border border-navy/10 focus:border-golden focus:ring-4 focus:ring-golden/5 outline-none transition-all font-bold text-navy" placeholder="john@example.com" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-navy uppercase tracking-widest ml-1">Phone Number</label>
                                            <input type="tel" name="phone" className="w-full px-5 py-4 rounded-xl border border-navy/10 focus:border-golden focus:ring-4 focus:ring-golden/5 outline-none transition-all font-bold text-navy" placeholder="+91 83413 69904" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-navy uppercase tracking-widest ml-1">Service</label>
                                            <select name="service" className="w-full px-5 py-4 rounded-xl border border-navy/10 focus:border-golden focus:ring-4 focus:ring-golden/5 outline-none transition-all bg-white font-bold text-navy">
                                                <option>SEO & SEM</option>
                                                <option>Social Media Ads</option>
                                                <option>Web & App Development</option>
                                                <option>Content Creation</option>
                                                <option>Google Ads</option>
                                                <option>Other Services</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-navy uppercase tracking-widest ml-1">Message</label>
                                        <textarea name="message" rows={4} required className="w-full px-5 py-4 rounded-xl border border-navy/10 focus:border-golden focus:ring-4 focus:ring-golden/5 outline-none transition-all resize-none font-bold text-navy" placeholder="Tell us about your project..."></textarea>
                                    </div>

                                    <button
                                        disabled={formStatus === "sending"}
                                        type="submit"
                                        className="w-full py-5 bg-navy text-golden font-black rounded-2xl hover:bg-golden hover:text-navy transition-all duration-300 shadow-xl active:scale-95 disabled:opacity-50 flex items-center justify-center space-x-3 text-lg"
                                    >
                                        {formStatus === "sending" ? <span>Sending...</span> : (
                                            <>
                                                <span>Send Message</span>
                                                <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>

                        {/* Contact Info Sidebar */}
                        <div className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-navy p-8 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all border border-navy/5 group">
                                    <div className="w-12 h-12 bg-golden rounded-2xl flex items-center justify-center text-navy mb-4 group-hover:scale-110 transition-transform">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <p className="text-xs font-bold text-golden uppercase tracking-widest mb-2">Call Us</p>
                                    <p className="text-xl font-black">+918341369904</p>
                                </div>
                                <div className="bg-white p-8 rounded-3xl text-navy shadow-lg hover:shadow-xl transition-all border border-navy/5 group">
                                    <div className="w-12 h-12 bg-navy rounded-2xl flex items-center justify-center text-golden mb-4 group-hover:scale-110 transition-transform">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <p className="text-xs font-bold text-navy-light uppercase tracking-widest mb-2">Email Us</p>
                                    <p className="text-lg font-black">info@mandemit.com</p>
                                    <p className="text-sm font-bold text-gray-500">sekhar@mandemit.com</p>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-[32px] border border-navy/5">
                                <h3 className="text-xl font-black text-navy mb-6 flex items-center space-x-3">
                                    <div className="w-2 h-8 bg-golden rounded-full" />
                                    <span>Follow Our Journey</span>
                                </h3>
                                <div className="flex space-x-4">
                                    {[
                                        { icon: FaFacebookF, href: "https://facebook.com/ascentdigital" },
                                        { icon: FaInstagram, href: "https://www.instagram.com/ascentdigital_ad/" },
                                        { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/ascent-digital-ad/" },
                                        { icon: FaYoutube, href: "https://www.youtube.com/@AscentDigital_AD" },
                                    ].map((social, i) => (
                                        <Link
                                            key={i}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 bg-white text-navy rounded-xl flex items-center justify-center hover:bg-golden hover:text-navy transition-all shadow-md hover:-translate-y-1"
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="aspect-[16/6] bg-navy rounded-3xl p-10 text-white relative overflow-hidden group">
                                <div className="relative z-10 flex flex-col justify-center h-full">
                                    <p className="text-golden font-black text-3xl md:text-4xl leading-tight">Mandem Reddy Sekhar</p>
                                    <p className="text-sm font-bold uppercase tracking-[0.4em] text-gray-400 mt-2">Managing Director</p>
                                </div>
                                <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-golden/5 rounded-full blur-3xl group-hover:bg-golden/10 transition-all" />
                            </div>
                        </div>
                    </div>

                    {/* Branch Locations with Maps */}
                    <div className="mt-12 md:mt-20 space-y-12">
                        <div className="text-center">
                            <h2 className="text-3xl md:text-4xl font-black text-navy uppercase tracking-tighter">Our Global Presence</h2>
                            <p className="text-gray-500 font-bold mt-2">Connecting you to global digital excellence</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {[
                                {
                                    city: "Visakhapatnam",
                                    address: "2-161/8, HIG 662, Mithilapuri Colony, Madhurawada, Visakhapatnam, AP – 530041",
                                    phone: "+918341369904",
                                    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.536671439401!2d83.35166417517454!3d17.81344448314168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b002ed99879%3A0xe54d3cd3798533d!2sMandemIT!5e0!3m2!1sen!2sin!4v1717920000000!5m2!1sen!2sin"
                                },
                                {
                                    city: "Bengaluru",
                                    address: "No. 53, 2nd Floor, Harika Nilaya, 2nd A Cross Road, Priyadarshini Layout, Bengaluru – 560036",
                                    phone: "+918341369904",
                                    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.7!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11!2sBengaluru!5e0!3m2!1sen!2sin!4v1717920000000!5m2!1sen!2sin"
                                },
                                {
                                    city: "USA Office",
                                    address: "5907 Eckhert Rd, Apt 206, San Antonio, TX 78240, USA",
                                    phone: "+918341369904",
                                    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.0!2d-98.6!3d29.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c6!2sSan%20Antonio%2C%20TX!5e0!3m2!1sen!2sin!4v1717920000000!5m2!1sen!2sin"
                                }
                            ].map((branch) => (
                                <div key={branch.city} className="bg-white rounded-[24px] md:rounded-[32px] overflow-hidden border border-navy/5 shadow-lg group hover:shadow-2xl transition-all">
                                    <div className="h-48 md:h-64 relative">
                                        <iframe
                                            src={branch.map}
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="grayscale group-hover:grayscale-0 transition-all duration-500"
                                        ></iframe>
                                    </div>
                                    <div className="p-6 md:p-8 space-y-4">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-6 bg-golden rounded-full" />
                                            <h3 className="text-lg md:text-xl font-black text-navy">{branch.city} {branch.city === "Visakhapatnam" ? "Office" : ""}</h3>
                                        </div>
                                        <div className="flex items-start space-x-3 text-gray-600">
                                            <MapPin className="w-5 h-5 text-golden shrink-0 mt-1" />
                                            <p className="text-xs md:text-sm font-bold leading-relaxed">{branch.address}</p>
                                        </div>
                                        <div className="flex items-center space-x-3 text-navy font-black">
                                            <Phone className="w-5 h-5 text-golden" />
                                            <span className="text-sm md:text-base">{branch.phone}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <FAQAccordion items={contactFaqs} />

            <Footer />
        </main>
    );
}
