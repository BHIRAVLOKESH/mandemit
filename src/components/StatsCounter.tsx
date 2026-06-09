"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
    { value: 500, label: "Clients Served", suffix: "+" },
    { value: 10, label: "Years Experience", suffix: "+" },
    { value: 98, label: "Satisfaction Rate", suffix: "%" },
    { value: 15, label: "Services Offered", suffix: "+" },
    { value: 3, label: "Global Offices", suffix: "" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2000;
            let startTime: number | null = null;

            const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / duration, 1);
                setCount(Math.floor(progress * (end - start) + start));
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        }
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
}

export default function StatsCounter() {
    return (
        <section className="bg-navy py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <p className="text-center text-golden font-bold uppercase tracking-widest text-xs mb-10">Bengaluru · Visakhapatnam · San Antonio, TX — Serving clients globally</p>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center space-y-2 border-r last:border-r-0 border-white/10"
                        >
                            <div className="text-4xl md:text-5xl font-black text-golden font-heading">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-white/70 font-medium uppercase tracking-wider text-sm">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
