import React from "react";
import Button from "./Button.jsx";


const steps = [
    {
        title: "Ярмарка кружков",
        text: "6 сентября в лицее 239 (младший корпус) пройдет ярмарка кружков. Здесь вы сможете встретиться с преподавателями лично, задать вопросы и узнать всё о наших программах"
    },
    {
        title: "Вступительный тест",
        text: "До 12 сентября необходимо пройти онлайн-тестирование. Это поможет сформировать группы и подобрать уровень занятий для каждого"
    },
    {
        title: "Результаты отбора",
        text: "13 сентября мы опубликуем итоги вступительного испытания и списки групп. Следите за обновлениями — совсем скоро вы узнаете свой формат обучения"
    },
    {
        title: "Старт занятий",
        text: "С 15 сентября начинаются первые уроки по расписанию. Ждём всех и желаем успехов на старте вашего пути в программировании", tall: false
    }
];



function StepIcon({withDivider = true, tall = false}) {
    return (
        <div className={`${tall ? "h-[204px]" : ""} inline-flex flex-col justify-start items-center gap-4`}>
            <div className="w-12 h-12 relative flex justify-center items-center">
                {withDivider ? <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" viewBox="0 0 40 25" fill="none">
                        <path
                            d="M4.61244 12.6244L13.2689 21.2809C13.6086 21.6289 13.7681 22.0287 13.7474 22.4804C13.7268 22.9321 13.5446 23.3319 13.2009 23.6799C12.8569 24.0276 12.4508 24.1994 11.9824 24.1954C11.5141 24.1917 11.1099 24.0199 10.7699 23.6799L0.919938 13.8419C0.737938 13.6579 0.605438 13.4666 0.522438 13.2679C0.439771 13.0689 0.398438 12.8579 0.398438 12.6349C0.398438 12.4119 0.439771 12.2014 0.522438 12.0034C0.605438 11.8051 0.737938 11.6142 0.919938 11.4309L10.9199 1.43089C11.2629 1.09122 11.6699 0.921387 12.1409 0.921387C12.6116 0.921387 13.0169 1.09122 13.3569 1.43089C13.6966 1.77089 13.8664 2.17822 13.8664 2.65289C13.8664 3.12789 13.6966 3.53689 13.3569 3.87989L4.61244 12.6244ZM35.6894 12.6484L27.0329 3.99189C26.6853 3.64389 26.5218 3.24405 26.5424 2.79239C26.5631 2.34072 26.7453 1.94089 27.0889 1.59289C27.4329 1.24522 27.8391 1.07339 28.3074 1.07739C28.7758 1.08105 29.1799 1.25289 29.5199 1.59289L39.3699 11.4309C39.5519 11.6149 39.6844 11.8062 39.7674 12.0049C39.8501 12.2039 39.8914 12.4149 39.8914 12.6379C39.8914 12.8609 39.8501 13.0714 39.7674 13.2694C39.6844 13.4677 39.5519 13.6586 39.3699 13.8419L29.3699 23.8419C29.0293 24.1816 28.6313 24.3451 28.1759 24.3324C27.7206 24.3197 27.3229 24.1396 26.9829 23.7919C26.6353 23.4509 26.4614 23.0444 26.4614 22.5724C26.4614 22.1007 26.6353 21.6949 26.9829 21.3549L35.6894 12.6484Z"
                            fill="#E8F9FB"/>
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
                        <path d="M19.0635 6.79785C19.1627 6.79788 19.2389 6.82834 19.3174 6.90723C19.396 6.98628 19.4267 7.06364 19.4268 7.16504C19.4268 7.26621 19.3965 7.34439 19.3184 7.42383L9.7002 17.0352C9.618 17.1167 9.54201 17.1455 9.44922 17.1455C9.35658 17.1455 9.28147 17.1173 9.20117 17.0371L4.66602 12.502C4.58904 12.4238 4.56097 12.3493 4.56348 12.252C4.56631 12.1459 4.60105 12.0636 4.68262 11.9824C4.76168 11.9038 4.83902 11.8731 4.94043 11.873C5.01685 11.873 5.08003 11.8905 5.14062 11.9326L5.20117 11.9834L9.0957 15.8965L9.44922 16.252L9.80371 15.8975L18.7959 6.91113C18.8809 6.82853 18.9627 6.79785 19.0635 6.79785Z" fill="#E8F9FB" stroke="#E8F9FB"/>
                    </svg>
                }
            </div>
            {withDivider && (
                <div className="h-[100px] w-0 origin-top-left  bg-white/20 outline-2 outline-offset-[-1px] outline-white/20"></div>
            )}
        </div>
    );
}


export default function TimeLine() {
    return (
        <section id="enroll" className="w-full px-16 py-28 bg-[#0b4e59] flex flex-col justify-start items-center gap-20 overflow-hidden">
            <div className="w-full max-w-[1280px] flex flex-col justify-start items-start gap-20">
                <div className="self-stretch inline-flex justify-start items-start gap-20 flex-wrap">
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-8">
                        <div className="self-stretch flex flex-col justify-start items-start gap-4">
                            <h2 className="self-stretch text-white text-[52px] font-normal leading-[62.40px] font-source">
                               Как к нам попасть?
                            </h2>
                        </div>
                        <div className="inline-flex justify-start items-center gap-6">
                            <a href="https://t.me/+fNRp_Y1MoXE3MjUy">
                            <Button variant="primary">
                                <span className="text-white font-ibm">Записаться</span>
                            </Button>
                        </a>
                        </div>
                    </div>


                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
                        {steps.map((s) => (
                            <div key={s.title} className="self-stretch inline-flex justify-start items-start gap-10">
                                <StepIcon withDivider={s.tall}/>
                                <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
                                    <div className="self-stretch text-white text-[22px] font-normal leading-[30.80px] font-source">{s.title}</div>
                                    <div className="self-stretch text-white text-base font-normal leading-normal font-ibm">{s.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}