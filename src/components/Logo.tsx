import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
    return (
        <div className={`flex items-center space-x-3 group ${className}`}>
            {/* The Icon Container */}
            <div className="relative w-12 h-12 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                {/* Clean White Background for the Icon to make it look Professional and Propped */}
                <div className="absolute inset-0 bg-white rounded-xl shadow-lg border border-white/20" />

                <svg viewBox="0 0 100 100" className="relative z-10 w-full h-full p-2">
                    {/* Recreating the exact 'M' shape from user image - Navy Blue */}
                    <path
                        d="M20 75 L20 25 L45 50 L70 25 L70 85"
                        fill="none"
                        stroke="#0D2167"
                        strokeWidth="10"
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                    />
                    {/* The Yellow/Golden Arrow Mark - Exact Slash Style */}
                    <path
                        d="M15 65 L85 20 M85 20 L78 22 M85 20 L83 27"
                        fill="none"
                        stroke="#FFB800"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 bg-golden/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
            </div>

            {/* Typography */}
            <div className="flex flex-col leading-none">
                <div className="flex items-center">
                    <span className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase">
                        Mandem
                    </span>
                    <span className="text-2xl md:text-3xl font-black tracking-tighter text-golden ml-1">
                        IT
                    </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-golden/80 mt-1">
                    Digital Excellence
                </span>
            </div>
        </div>
    );
}
