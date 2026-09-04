import React from "react";
import { ENROLL_URL } from "../constants.js";

const steps = [
    {
        icon: "calendar",
        title: "Ярмарка кружков",
        date: "6 сентября",
        text: "в лицее 239 (младший корпус) пройдет ярмарка кружков. Здесь вы сможете встретиться с преподавателями лично, задать вопросы и узнать всё о наших программах"
    },
    {
        icon: "clipboard",
        title: "Вступительный тест",
        date: "До 12 сентября",
        text: "необходимо пройти онлайн-тестирование. Это поможет сформировать группы и подобрать уровень занятий для каждого"
    },
    {
        icon: "list",
        title: "Результаты отбора",
        date: "13 сентября",
        text: "мы опубликуем итоги вступительного испытания и списки групп. Следите за обновлениями — совсем скоро вы узнаете свой формат обучения"
    },
    {
        icon: "check",
        title: "Старт занятий",
        date: "С 15 сентября",
        text: "начинаются первые уроки по расписанию. Ждём всех и желаем успехов на старте вашего пути в программировании"
    }
];

function TimelineGlyph({ type }) {
    const common = {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": true,
    };

    if (type === "calendar") {
        return (
            <svg {...common}>
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M16 3v4M8 3v4M3 10h18" />
                <path d="m8.5 15 2 2 4-4" />
            </svg>
        );
    }

    if (type === "clipboard") {
        return (
            <svg {...common}>
                <path d="M9 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3" />
                <rect x="9" y="3" width="6" height="4" rx="1" />
                <path d="m9 14 2 2 4-4" />
            </svg>
        );
    }

    if (type === "list") {
        return (
            <svg {...common}>
                <path d="m4 6 1.4 1.4L8 4.8M11 6h9" />
                <path d="m4 12 1.4 1.4L8 10.8M11 12h9" />
                <path d="m4 18 1.4 1.4L8 16.8M11 18h9" />
            </svg>
        );
    }

    return (
        <svg {...common}>
            <circle cx="12" cy="12" r="9" />
            <path d="m8.5 12 2.2 2.2 4.8-4.8" />
        </svg>
    );
}

function StepIcon({ type, withDivider }) {
    return (
        <div className="flex h-full flex-col items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                <TimelineGlyph type={type} />
            </div>
            {withDivider && <div className="mt-3 min-h-16 w-px flex-1 bg-current opacity-20" />}
        </div>
    );
}

export default function TimeLine() {
    return (
        <section
            id="enroll"
            className="flex w-full flex-col items-center overflow-hidden py-20 transition-colors duration-500 sm:py-28"
            style={{ backgroundColor: "var(--theme-dark)", color: "var(--theme-on-dark)" }}
        >
            <div className="page-shell">
                <div className="grid gap-14 lg:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
                    <div>
                        <h2 className="type-section font-source font-normal">Как к нам попасть?</h2>
                        <a
                            href={ENROLL_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="type-lead mt-7 inline-flex min-h-14 w-full items-center justify-center rounded-xl px-8 py-3.5 font-ibm font-semibold transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/35 sm:w-auto"
                            style={{ backgroundColor: "var(--theme-on-dark)", color: "var(--theme-dark)" }}
                        >
                            Вступить в группу
                        </a>
                    </div>

                    <div>
                        {steps.map((step, index) => (
                            <div key={step.title} className="grid grid-cols-[48px_minmax(0,1fr)] gap-6 sm:gap-8">
                                <StepIcon type={step.icon} withDivider={index < steps.length - 1} />
                                <div className={index < steps.length - 1 ? "pb-10" : ""}>
                                    <h3 className="type-title font-source font-normal">{step.title}</h3>
                                    <p className="type-body mt-2 font-ibm font-normal">
                                        <strong className="font-bold text-white">{step.date}</strong>{" "}
                                        <span className="opacity-75">{step.text}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
