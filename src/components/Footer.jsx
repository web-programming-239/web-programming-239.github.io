import React from "react";

export default function Footer() {
    const handleClick = (e, href) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
                block: "start", // центрируем секцию
            });
        }
    };

    return (
        <footer className="w-full px-16 py-20 bg-white flex flex-col justify-start items-center gap-20 overflow-hidden">
            <div className="w-full max-w-[1280px] flex flex-col justify-start items-start gap-20">
                <div className="self-stretch inline-flex justify-center items-center gap-8">
                    <div className="flex justify-center gap-8">
                        <a
                            href="#teachers"
                            onClick={(e) => handleClick(e, "#teachers")}
                            className="text-[#010604] text-sm font-semibold leading-[21px] font-ibm cursor-pointer"
                        >
                            Преподаватели
                        </a>
                        <a
                            href="#clubs"
                            onClick={(e) => handleClick(e, "#clubs")}
                            className="text-[#010604] text-sm font-semibold leading-[21px] font-ibm cursor-pointer"
                        >
                            Кружки
                        </a>
                        <a
                            href="#enroll"
                            onClick={(e) => handleClick(e, "#enroll")}
                            className="text-[#010604] text-sm font-semibold leading-[21px] font-ibm cursor-pointer"
                        >
                            Записаться
                        </a>
                    </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-center gap-8">
                    <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-[#010604]/20" />
                    <div className="inline-flex justify-start items-start gap-6">
                        <div className="text-[#010604] text-sm font-normal leading-[21px] font-ibm">
                            © 2025 ФМЛ №239. Все права защищены.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
