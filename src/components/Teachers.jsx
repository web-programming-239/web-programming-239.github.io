import React from "react";

const teachers = [
    {
        name: "Эля Минько",
        role: "Препод фронтенда",
        bio: "Frontend-разработчик, выпускница КТ ИТМО",
        link: "elvmin"
    },
    {
        name: "Саша Крестьянинов",
        role: "Препод алгоритмов",
        bio: "Backend-разработчик, преподаватель информатики в 239",
        link: "AleksanderRefresher"
    },
    {
        name: "Матвей Гуров",
        role: "Препод веба",
        bio: "Full-stack разработчик, преподаватель информатики в 239",
        link: "obomba"
    },
    {
        name: "Вика Кондратьева",
        role: "Препод алгоритмов",
        bio: "Backend-разработчик, репетитор",
        link: "vickkct"
    }
];


function TeacherCard({t}) {
    return (
        <div className="min-w-[200px] flex-1 inline-flex flex-col justify-start items-start gap-6">
            <div className="self-stretch flex flex-col justify-start items-center gap-4">
                <div className="self-stretch flex flex-col justify-start items-center">
                    <div className="self-stretch text-[#010604] text-[22px] font-semibold leading-[33px] font-ibm">{t.name}</div>
                    <div className="self-stretch text-[#010604] text-lg font-normal leading-[27px] font-ibm">{t.role}</div>
                </div>
                <p className="self-stretch text-[#010604] text-base font-normal leading-normal font-ibm">{t.bio}</p>
            </div>
            <div className="inline-flex justify-start items-start gap-3.5">
                <a href={`https://t.me/${t.link}`}>
                    <div className="w-6 h-6 relative overflow-hidden">
                        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.9932 1.58221C15.0223 1.40736 14.9567 1.23016 14.8208 1.11645C14.6848 1.00274 14.4988 0.969519 14.3318 1.02914L0.331836 6.02914C0.143209 6.0965 0.0129867 6.26994 0.000913704 6.46987C-0.0111592 6.6698 0.0972469 6.85765 0.276398 6.94722L4.2764 8.94722C4.43688 9.02746 4.62806 9.01556 4.77735 8.91603L8.09775 6.70244L6.10957 9.18766C6.02203 9.29709 5.98442 9.43824 6.00592 9.57672C6.02742 9.7152 6.10605 9.8383 6.22265 9.91603L12.2227 13.916C12.3638 14.0101 12.5431 14.0262 12.6988 13.9588C12.8545 13.8914 12.9653 13.7496 12.9932 13.5822L14.9932 1.58221Z"
                                  fill="rgb(11, 78, 89)"/>
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    );
}


export default function Teachers() {
    return (
        <section id="teachers" className="w-full px-16 py-28 bg-white flex flex-col justify-start items-center gap-20 overflow-hidden">
            <div className="w-full max-w-[1280px] flex flex-col justify-start items-start gap-20">
                <div className="w-full max-w-[768px] flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch flex flex-col justify-start items-center gap-6">
                        <h2 className="self-stretch text-[#010604] text-6xl font-normal leading-[62.40px] font-source">Преподаватели</h2>
                    </div>
                </div>


                <div className="self-stretch flex flex-col justify-start items-start gap-16">
                    <div className="self-stretch inline-flex justify-start items-start gap-8 flex-wrap">
                        {teachers.map((t) => (
                            <TeacherCard key={t.name} t={t}/>
                        ))}
                    </div>
                </div>


                <div className="w-full max-w-[768px] flex flex-col justify-start items-start gap-6">
                    <div className="w-[768px] h-[27px]"/>
                </div>
            </div>
        </section>
    );
}