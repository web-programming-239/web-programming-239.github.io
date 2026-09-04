import React from "react";

export default function HeaderNav() {
    return (
        <header
            className="sticky top-0 z-40 flex h-[72px] w-full items-center border-b border-black/[0.06] transition-colors duration-500"
            style={{ backgroundColor: "var(--theme-light)" }}
        >
            <nav className="page-shell flex items-center justify-between gap-6" aria-label="Основная навигация">
                <a
                    href="#top"
                    className="type-lead cursor-pointer font-source font-semibold text-[#010604] transition hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                >
                    Кружки ФМЛ №239
                </a>

                <div className="flex items-center gap-6 sm:gap-8">
                    <a className="type-body hidden cursor-pointer font-ibm text-[#010604] transition hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 md:block" href="#clubs">
                        Направления
                    </a>
                    <a className="type-body hidden cursor-pointer font-ibm text-[#010604] transition hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 md:block" href="#teachers">
                        Преподаватели
                    </a>
                    <a className="type-body cursor-pointer font-ibm font-semibold text-[#010604] underline decoration-1 underline-offset-4 transition hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30" href="#enroll">
                        Как попасть
                    </a>
                </div>
            </nav>
        </header>
    );
}
