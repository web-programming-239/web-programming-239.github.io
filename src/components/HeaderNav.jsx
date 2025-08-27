import React from "react";

export default function HeaderNav() {
    const handleClick = (e, href) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
                block: "center", // центрируем секцию по экрану
            });
        }
    };

    return (
        <header className="w-full h-[72px] px-16 bg-[#d1f3f8] flex flex-col justify-center items-center">
            <nav className="self-stretch inline-flex justify-center items-center gap-8">
                <div className="flex justify-start items-center gap-8">
                    {[
                        { label: "Записаться", href: "#enroll" },
                        { label: "Кружки", href: "#clubs" },
                        { label: "Преподаватели", href: "#teachers" },
                    ].map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => handleClick(e, item.href)}
                            className="flex justify-center items-center gap-1 cursor-pointer"
                        >
              <span className="text-[#010604] text-base font-normal leading-normal font-ibm">
                {item.label}
              </span>
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}
