import React from "react";
import Button from "./Button.jsx";


export default function Hero() {
    const handleClick = (e, href) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
                block: "start", // центрируем секцию по экрану
            });
        }
    };
    return (
        <section className="w-full px-16 py-28 bg-[#d1f3f8] flex flex-col justify-start items-center gap-20 overflow-hidden">
            <div className="w-full max-w-[1280px] flex flex-col justify-start items-center gap-20">
                <div className="w-full max-w-[768px] flex flex-col justify-start items-center gap-8">
                    <div className="self-stretch flex flex-col justify-start items-center gap-4">
                        <div className="self-stretch flex flex-col justify-start items-center gap-6">
                            <h1 className="self-stretch text-center text-[#010604] text-7xl font-bold font-source">
                                Попробуй себя в&nbsp;роли разработчика
                            </h1>
                            <p className="self-stretch text-center text-[#010604] text-lg font-normal leading-[27px] font-ibm">
                                У нас есть три кружка для школьников разных уровней:
                                Frontend и дизайн для тех, кто хочет научиться делать современные интерфейсы,
                                Алгоритмы для ребят младших классов, чтобы шаг за шагом освоить основы логики
                                и программирования, и Веб-программирование на Python для старшеклассников,
                                готовых создавать полноценные серверы и приложения. На занятиях много практики,
                                живое общение и проекты, которыми можно гордиться. Приходите и попробуйте себя в роли разработчика
                            </p>
                        </div>
                    </div>
                    <div className="inline-flex justify-start items-center gap-6">
                        <Button onClick={e => handleClick(e, '#enroll')}>Хочу к вам</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}