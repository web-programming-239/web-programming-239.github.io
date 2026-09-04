import React from "react";
import { ENROLL_URL } from "../constants.js";

const directions = [
    { key: "frontend", title: "Frontend и дизайн", note: "Интерфейсы и визуальный язык", color: "#3c4195" },
    { key: "algorithms", title: "Алгоритмы", note: "Python, логика и игровые проекты", color: "#0b4e59" },
    { key: "python", title: "Продуктовая разработка", note: "Frontend, backend и AI-инструменты", color: "#b94718" },
];

export default function Hero({ program, onProgramChange }) {
    return (
        <section
            id="top"
            className="flex min-h-[calc(100vh-72px)] w-full items-center overflow-hidden py-16 transition-colors duration-500 sm:py-20 lg:py-24"
            style={{ backgroundColor: "var(--theme-light)" }}
        >
            <div className="page-shell grid w-full items-center gap-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.75fr)] lg:gap-20">
                <div className="max-w-[780px] text-left">
                    <h1 className="type-display font-source font-bold text-[#010604]">
                        Попробуй себя в&nbsp;роли разработчика
                    </h1>
                    <p className="type-lead mt-7 max-w-[680px] font-ibm font-normal text-[#010604]/75">
                        Три направления для школьников разных уровней: frontend и дизайн, алгоритмическое программирование и продуктовая разработка. На занятиях много практики, живое общение и проекты, которыми можно гордиться.
                    </p>
                    <a
                        href={ENROLL_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="type-lead mt-9 inline-flex min-h-14 w-full cursor-pointer items-center justify-center rounded-xl px-9 py-3.5 font-ibm font-semibold transition hover:opacity-85 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/20 sm:w-auto"
                        style={{ backgroundColor: "var(--theme-dark)", color: "var(--theme-on-dark)" }}
                    >
                        Записаться
                    </a>
                </div>

                <aside className="hidden md:block" aria-label="Направления обучения">
                    <ol>
                        {directions.map((direction) => (
                            <li key={direction.key} className="border-b border-[#010604]/15 last:border-b-0">
                                <button
                                    type="button"
                                    aria-pressed={program === direction.key}
                                    onClick={() => onProgramChange(direction.key)}
                                    className="grid w-full grid-cols-[6px_minmax(0,1fr)] items-center gap-5 py-5 text-left transition-opacity hover:opacity-65 focus-visible:rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                                >
                                    <span
                                        className={`w-1.5 rounded-full transition-all duration-300 ${program === direction.key ? "h-12" : "h-10"}`}
                                        style={{ backgroundColor: direction.color }}
                                        aria-hidden="true"
                                    />
                                    <span>
                                        <span className="type-title block font-source font-semibold text-[#010604]">{direction.title}</span>
                                        <span className="type-caption mt-1 block font-ibm text-[#010604]/55">{direction.note}</span>
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ol>
                </aside>
            </div>
        </section>
    );
}
