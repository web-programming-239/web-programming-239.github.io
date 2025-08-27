import React from "react";

export default function Button({
                                   children,
                                   variant = "secondary",
                                   onClick,
                                   className = "",
                               }) {
    const base =
        "cursor-pointer px-6 py-2.5 rounded-xl flex justify-center items-center gap-2 font-ibm text-base font-medium transition-all duration-200 ease-in-out";

    const variants = {
        secondary:
            "bg-[#010604]/5 text-[#010604] hover:bg-[#010604]/10 active:bg-[#010604]/20 focus:ring-2 focus:ring-[#010604]/30",
        primary:
            "bg-[#235F69] text-white hover:bg-[#169CB2]/90 active:bg-[#169CB2]/80 focus:ring-2 focus:ring-[#0b4e59]/50",
    };

    return (
        <button
            type="button"
            onClick={onClick}
            className={`${base} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}
