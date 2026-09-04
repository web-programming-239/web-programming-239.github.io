import React from "react";
import { ENROLL_URL } from "../constants.js";

export default function Footer() {
    return (
        <footer className="w-full py-16 transition-colors duration-500 sm:py-20" style={{ backgroundColor: "var(--theme-light)" }}>
            <div className="page-shell">
                <nav className="flex flex-wrap justify-center gap-8" aria-label="Навигация в подвале">
                    <a className="type-caption font-ibm font-semibold text-[#010604] hover:opacity-60" href="#teachers">Преподаватели</a>
                    <a className="type-caption font-ibm font-semibold text-[#010604] hover:opacity-60" href="#clubs">Кружки</a>
                    <a className="type-caption font-ibm font-semibold text-[#010604] hover:opacity-60" href={ENROLL_URL} target="_blank" rel="noreferrer">Telegram</a>
                </nav>
                <div className="type-caption mt-16 border-t border-[#010604]/20 pt-8 text-center font-ibm text-[#010604]">
                    © 2026–2027 ФМЛ №239. Все права защищены.
                </div>
            </div>
        </footer>
    );
}
