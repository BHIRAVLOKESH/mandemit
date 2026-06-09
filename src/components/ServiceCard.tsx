"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
    delay?: number;
}

export default function ServiceCard({ title, description, icon: Icon, href, delay = 0 }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-golden hover:shadow-2xl transition-all duration-300 group"
        >
            <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center text-golden mb-6 group-hover:bg-golden group-hover:text-navy transition-colors duration-300">
                <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">{title}</h3>
            <p className="text-gray-600 mb-6 line-clamp-2">
                {description}
            </p>
            <Link
                href={href}
                className="text-navy font-bold flex items-center group-hover:text-golden transition-colors"
            >
                Learn More <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
            </Link>
        </motion.div>
    );
}
