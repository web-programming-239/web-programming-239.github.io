import React from "react";

const teachers = [
    { name: "Эля Минько", role: "Препод фронтенда", bio: "Frontend-разработчик, выпускница КТ ИТМО, преподаватель дополнительного образования в ФМЛ №239", link: "elvmin" },
    { name: "Саша Крестьянинов", role: "Препод алгоритмов", bio: "Full-stack разработчик, преподаватель информатики в ФМЛ №239", link: "sashakrestik" },
    { name: "Матвей Гуров", role: "Препод веба", bio: "Backend-разработчик, преподаватель информатики в ФМЛ №239", link: "obomba" },
    { name: "Вика Кондратьева", role: "Препод алгоритмов", bio: "Backend-разработчик, преподаватель дополнительного образования в ФМЛ №239", link: "vickkct" },
];

function initials(name) {
    return name.split(" ").map((part) => part[0]).join("");
}

function TeacherCard({ teacher }) {
    return (
        <article className="flex min-h-[270px] flex-col rounded-3xl p-6 transition-colors duration-500" style={{ backgroundColor: "var(--theme-light)" }}>
            <div className="type-lead flex h-14 w-14 items-center justify-center rounded-full font-source font-bold" style={{ backgroundColor: "var(--theme-dark)", color: "var(--theme-on-dark)" }}>
                {initials(teacher.name)}
            </div>
            <h3 className="type-title mt-8 font-ibm font-semibold text-[#010604]">{teacher.name}</h3>
            <p className="type-body mt-1 font-ibm font-medium" style={{ color: "var(--theme-dark)" }}>{teacher.role}</p>
            <p className="type-body mt-4 flex-1 font-ibm text-[#010604]/70">{teacher.bio}</p>
            <a
                href={`https://t.me/${teacher.link}`}
                target="_blank"
                rel="noreferrer"
                className="type-caption mt-6 w-fit font-ibm font-semibold underline decoration-1 underline-offset-4 hover:opacity-65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                style={{ color: "var(--theme-dark)" }}
            >
                Написать в Telegram
            </a>
        </article>
    );
}

export default function Teachers() {
    return (
        <section id="teachers" className="w-full bg-white py-20 sm:py-28">
            <div className="page-shell">
                <h2 className="type-section font-source font-normal text-[#010604]">Преподаватели</h2>
                <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {teachers.map((teacher) => <TeacherCard key={teacher.name} teacher={teacher} />)}
                </div>
            </div>
        </section>
    );
}
