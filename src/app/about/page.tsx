"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { CheckCircle, Target, Eye, Users, Zap, Briefcase, MapPin, Phone, Mail, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const coreValues = [
    { icon: Zap, title: "Innovation", desc: "Staying ahead of digital trends to provide cutting-edge solutions." },
    { icon: CheckCircle, title: "Integrity", desc: "Transparent communication and ethical practices in everything we do." },
    { icon: Target, title: "Results-Focus", desc: "Data-driven approach to ensure measurable ROI for our clients." },
    { icon: Users, title: "Collaboration", desc: "Working as an extension of your team to achieve shared goals." },
];

const approachSteps = [
    { title: "Discovery", desc: "We deep-dive into your business, competitors, and target audience to find the best growth opportunities.", icon: Target },
    { title: "Strategy", desc: "A customized roadmap is crafted using data-driven insights and creative innovation.", icon: Zap },
    { title: "Execution", desc: "Our experts implement the plan with precision, ensuring every detail aligns with your goals.", icon: Briefcase },
    { title: "Optimization", desc: "Continuous monitoring and refining to ensure maximum ROI and sustainable growth.", icon: CheckCircle },
];

export default function About() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Page Hero */}
            <section className="relative pt-40 pb-24 bg-navy overflow-hidden">
                <div className="absolute inset-0 diagonal-lines opacity-10" />
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <nav className="flex justify-center space-x-2 text-golden text-sm font-bold uppercase tracking-wider mb-6">
                        <Link href="/" className="hover:underline">Home</Link>
                        <span>/</span>
                        <span>About Us</span>
                    </nav>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6">About MandemIT</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Your Trusted Digital Growth Partner Since 2015. We help brands navigate the complex digital landscape.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-video bg-navy rounded-[48px] relative overflow-hidden group shadow-2xl">
                            <Image
                                src="/images/mandemit_about_office.png"
                                alt="MandemIT Agency Office - Our Story"
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                            <div className="absolute top-6 left-6 bg-golden text-navy px-5 py-3 rounded-2xl shadow-xl font-black text-sm backdrop-blur-sm">
                                🏆 10+ Years of Success
                            </div>
                            <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-3 rounded-2xl">
                                <p className="text-xs font-bold text-golden uppercase tracking-widest">Led by</p>
                                <p className="font-black">Mandem Reddy Sekhar</p>
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-golden/20 rounded-full blur-3xl" />
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-golden font-bold tracking-widest uppercase text-sm border-b-2 border-golden pb-1">Our Story</span>
                            <h2 className="text-4xl font-black text-navy leading-tight">From a Bold Vision to a <span className="text-golden">Global Digital Agency</span></h2>
                            <div className="space-y-4 text-gray-600 text-lg">
                                <p>
                                    MandemIT started in 2015 under the visionary leadership of <strong className="text-navy">Mandem Reddy Sekhar, Managing Director</strong>, with a mission to bridge the gap between businesses and their digital potential.
                                </p>
                                <p>
                                    Today, we operate from <strong className="text-navy">Bengaluru</strong>, <strong className="text-navy">Visakhapatnam</strong>, and <strong className="text-navy">San Antonio (USA)</strong>, serving 500+ clients globally with full-stack digital marketing solutions.
                                </p>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="space-y-4">
                            {[
                                { year: "2015", event: "Founded in Visakhapatnam, Andhra Pradesh" },
                                { year: "2017", event: "Reached 100+ Happy Clients" },
                                { year: "2021", event: "Expanded to Pan-India & Bengaluru" },
                                { year: "2024", event: "Opened USA Office – San Antonio, TX" },
                                { year: "2025", event: "Industry Leader in Digital Marketing" },
                            ].map((item) => (
                                <div key={item.year} className="flex items-center space-x-6 group">
                                    <span className="text-xl font-black text-golden w-16 shrink-0">{item.year}</span>
                                    <div className="h-0.5 flex-grow bg-gradient-to-r from-golden/40 to-gray-100 group-hover:from-golden transition-all" />
                                    <span className="text-base font-bold text-navy text-right">{item.event}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-navy p-12 rounded-[40px] text-white space-y-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 text-white/5 group-hover:text-golden/10 transition-colors">
                            <Target className="w-48 h-48" />
                        </div>
                        <div className="w-16 h-16 bg-golden rounded-2xl flex items-center justify-center text-navy">
                            <Target className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-black">Our Mission</h3>
                        <p className="text-lg text-gray-300 relative z-10">
                            To empower businesses of all sizes with cutting-edge digital marketing strategies that drive measurable growth and lasting success in an ever-evolving digital world.
                        </p>
                    </div>

                    <div className="bg-golden p-12 rounded-[40px] text-navy space-y-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 text-navy/5 group-hover:text-navy/10 transition-colors">
                            <Eye className="w-48 h-48" />
                        </div>
                        <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center text-golden">
                            <Eye className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-black">Our Vision</h3>
                        <p className="text-lg text-navy/80 relative z-10">
                            To be India&apos;s most trusted and results-driven digital marketing agency, transforming brands through innovation, creativity, and technological excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-navy">Our Core Values</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value) => (
                            <div key={value.title} className="p-8 rounded-3xl bg-white border border-navy/5 shadow-lg hover:shadow-2xl hover:border-golden transition-all group">
                                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-golden mb-6 group-hover:bg-golden group-hover:text-navy transition-colors">
                                    <value.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-navy mb-4">{value.title}</h4>
                                <p className="text-gray-600">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Approach Section */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-golden font-bold tracking-widest uppercase text-sm">How We Work</span>
                        <h2 className="text-4xl font-black text-navy">Our Strategic Approach</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We follow a proven methodology to ensure your business achieves its full digital potential.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {approachSteps.map((step, idx) => (
                            <div key={step.title} className="bg-white p-10 rounded-[32px] shadow-xl hover:shadow-2xl transition-all group border border-navy/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-golden/5 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:bg-golden/10" />
                                <div className="text-4xl font-black text-navy/5 mb-6">0{idx + 1}</div>
                                <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center text-golden mb-6 group-hover:bg-golden group-hover:text-navy transition-colors">
                                    <step.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-bold text-navy mb-4">{step.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="py-24 px-6 bg-navy text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {[
                        { label: "Clients Served", val: "500+" },
                        { label: "Years Experience", val: "10+" },
                        { label: "Success Rate", val: "98%" },
                        { label: "Services Offered", val: "15+" },
                    ].map((stat) => (
                        <div key={stat.label}>
                            <div className="text-5xl font-black text-golden mb-2">{stat.val}</div>
                            <div className="text-sm font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Global Presence Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-golden font-bold tracking-widest uppercase text-sm">Our Reach</span>
                        <h2 className="text-4xl md:text-5xl font-black text-navy">Global Presence, Local Expertise</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Three strategic offices connecting India&apos;s digital powerhouses with global markets.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                flag: "🇮🇳",
                                city: "Bengaluru",
                                label: "Karnataka, India",
                                address: "No. 53, 2nd Floor, Harika Nilaya, 2nd A Cross Road, Near Krishnarajapura, Priyadarshini Layout, Krishnarajapura – 560036",
                                color: "bg-navy",
                                textColor: "text-white",
                            },
                            {
                                flag: "🇮🇳",
                                city: "Visakhapatnam",
                                label: "Andhra Pradesh, India",
                                address: "2-161/8, HIG 662, Mithilapuri Colony, Midhilapuri VUDA Colony, Madhurawada – 530041",
                                color: "bg-golden",
                                textColor: "text-navy",
                            },
                            {
                                flag: "🇺🇸",
                                city: "San Antonio",
                                label: "Texas, USA",
                                address: "5907 Eckhert Rd, Apt 206, San Antonio, TX 78240",
                                color: "bg-navy",
                                textColor: "text-white",
                            },
                        ].map((branch) => (
                            <div key={branch.city} className={`${branch.color} ${branch.textColor} p-8 rounded-[40px] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group`}>
                                <div className="text-5xl mb-4">{branch.flag}</div>
                                <h3 className="text-2xl font-black mb-1">{branch.city}</h3>
                                <p className={`text-sm font-bold uppercase tracking-widest mb-4 ${branch.color === 'bg-golden' ? 'text-navy/60' : 'text-golden'}`}>{branch.label}</p>
                                <div className={`flex items-start space-x-3 ${branch.color === 'bg-golden' ? 'text-navy/80' : 'text-gray-300'}`}>
                                    <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                                    <p className="text-sm leading-relaxed">{branch.address}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* MD Contact Card */}
                    <div className="bg-gradient-to-r from-navy via-navy-dark to-navy p-10 rounded-[40px] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="space-y-2 text-center md:text-left">
                            <p className="text-golden font-bold uppercase tracking-widest text-sm">Connect Directly With</p>
                            <h3 className="text-3xl font-black text-white">Mandem Reddy Sekhar</h3>
                            <p className="text-gray-400 font-bold">Managing Director, MandemIT</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="tel:+918341369904" className="flex items-center space-x-3 bg-white/10 hover:bg-golden hover:text-navy text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 border border-white/20">
                                <Phone className="w-5 h-5" />
                                <span>+918341369904</span>
                            </a>
                            <a href="mailto:sekhar@mandemit.com" className="flex items-center space-x-3 bg-golden text-navy hover:bg-white px-6 py-4 rounded-2xl font-bold transition-all duration-300">
                                <Mail className="w-5 h-5" />
                                <span>sekhar@mandemit.com</span>
                            </a>
                            <a href="https://www.mandemit.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 bg-white/10 hover:bg-golden hover:text-navy text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 border border-white/20">
                                <Globe className="w-5 h-5" />
                                <span>mandemit.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner />

            <Footer />
        </main>
    );
}
