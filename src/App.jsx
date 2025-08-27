import React from "react";
import Hero from "./components/Hero.jsx";
import HeaderNav from "./components/HeaderNav.jsx";
import FAQ from "./components/FAQ.jsx";
import Teachers from "./components/Teachers.jsx";
import Footer from "./components/Footer.jsx";
import TimeLine from "./components/TimeLine.jsx";

export default function Page() {
    return (
        // <div className="w-full inline-flex flex-col justify-start items-start overflow-hidden">
        //     <div className="w-full h-[72px] px-16 bg-[#d1f3f8] flex flex-col justify-center items-center">
        //         <div className="self-stretch inline-flex justify-center items-center gap-8">
        //             <div className="flex justify-start items-center gap-8">
        //                 <div className="flex justify-center items-center gap-1">
        //                     <div className="justify-start text-[#010604] text-base font-normal font-['IBM_Plex_Sans'] leading-normal">Записаться</div>
        //                 </div>
        //                 <div className="flex justify-center items-center gap-1">
        //                     <div className="justify-start text-[#010604] text-base font-normal font-['IBM_Plex_Sans'] leading-normal">Кружки</div>
        //                 </div>
        //                 <div className="flex justify-center items-center gap-1">
        //                     <div className="justify-start text-[#010604] text-base font-normal font-['IBM_Plex_Sans'] leading-normal">Преподаватели</div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="w-full px-16 py-28 bg-[#d1f3f8] flex flex-col justify-start items-center gap-20 overflow-hidden">
        //         <div className="w-full max-w-[1280px] flex flex-col justify-start items-center gap-20">
        //             <div className="w-full max-w-[768px] flex flex-col justify-start items-center gap-8">
        //                 <div className="self-stretch flex flex-col justify-start items-center gap-4">
        //                     <div className="self-stretch flex flex-col justify-start items-center gap-6">
        //                         <div className="self-stretch text-center justify-start text-[#010604] text-[52px] font-normal font-['Source_Sans_3'] leading-[62.40px]">Изучайте программирование и создавайте Web-приложения</div>
        //                         <div className="self-stretch text-center justify-start text-[#010604] text-lg font-normal font-['IBM_Plex_Sans'] leading-[27px]">Если вы учитесь в 8-11 классе и хотите развивать свои навыки программирования, наши курсы помогут вам освоить создание собственных Web-приложений. Мы предлагаем практические занятия с опытными преподавателями, которые помогут вам достичь успеха.</div>
        //                     </div>
        //                 </div>
        //                 <div className="inline-flex justify-start items-center gap-6">
        //                     <div data-alternate="False" data-icon-position="No icon" data-small="False" data-style="Secondary" className="px-6 py-2.5 bg-[#010604]/5 rounded-xl outline outline-1 outline-white/0 flex justify-center items-center gap-2 overflow-hidden">
        //                         <div className="justify-start text-[#010604] text-base font-medium font-['IBM_Plex_Sans'] leading-normal">Записаться</div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="w-full px-16 py-28 bg-[#0b4e59] flex flex-col justify-start items-center gap-20 overflow-hidden">
        //         <div className="w-full max-w-[1280px] flex flex-col justify-start items-start gap-20">
        //             <div className="self-stretch inline-flex justify-start items-start gap-20">
        //                 <div className="flex-1 inline-flex flex-col justify-start items-start gap-8">
        //                     <div className="self-stretch flex flex-col justify-start items-start gap-4">
        //
        //                         <div className="self-stretch justify-start text-white text-[52px] font-normal font-['Source_Sans_3'] leading-[62.40px]">Программирование и IT-дисциплины для школьников</div>
        //                     </div>
        //                     <div className="inline-flex justify-start items-center gap-6">
        //                         <div data-alternate="True" data-icon-position="No icon" data-small="False" data-style="Secondary" className="px-6 py-2.5 bg-white/10 rounded-xl flex justify-center items-center gap-2 overflow-hidden">
        //                             <div className="justify-start text-white text-base font-medium font-['IBM_Plex_Sans'] leading-normal">Записаться</div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
        //                     <div className="self-stretch inline-flex justify-start items-start gap-10">
        //                         <div className="inline-flex flex-col justify-start items-center gap-4">
        //                             <div className="w-12 h-12 relative">
        //                                 <div className="w-[39.49px] h-[23.41px] left-[4.25px] top-[12.19px] absolute bg-[#e8f9fb]"/>
        //                             </div>
        //                             <div className="w-[100px] h-0 origin-top-left rotate-90 bg-white/20 outline outline-2 outline-offset-[-1px] outline-white/20"></div>
        //                         </div>
        //                         <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
        //                             <div className="self-stretch justify-start text-white text-[22px] font-normal font-['Source_Sans_3'] leading-[30.80px]">Subheading one</div>
        //                             <div className="self-stretch justify-start text-white text-base font-normal font-['IBM_Plex_Sans'] leading-normal">6 сентября в 239 лицее пройдет ярмарка кружков, где можно познакомиться с нами поближе.</div>
        //                         </div>
        //                     </div>
        //                     <div className="self-stretch inline-flex justify-start items-start gap-10">
        //                         <div className="inline-flex flex-col justify-start items-center gap-4">
        //                             <div className="w-12 h-12 relative">
        //                                 <div className="w-[39.49px] h-[23.41px] left-[4.25px] top-[12.19px] absolute bg-[#e8f9fb]"/>
        //                             </div>
        //                             <div className="w-[100px] h-0 origin-top-left rotate-90 bg-white/20 outline outline-2 outline-offset-[-1px] outline-white/20"></div>
        //                         </div>
        //                         <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
        //                             <div className="self-stretch justify-start text-white text-[22px] font-normal font-['Source_Sans_3'] leading-[30.80px]">Ярмарка кружков</div>
        //                             <div className="self-stretch justify-start text-white text-base font-normal font-['IBM_Plex_Sans'] leading-normal">До 12 сентября нужно написать обязательный онлайн-вступительный тест для записи на кружек</div>
        //                         </div>
        //                     </div>
        //                     <div className="self-stretch inline-flex justify-start items-start gap-10">
        //                         <div className="h-[204px] inline-flex flex-col justify-start items-center gap-4">
        //                             <div className="w-12 h-12 relative">
        //                                 <div className="w-[39.49px] h-[23.41px] left-[4.25px] top-[12.19px] absolute bg-[#e8f9fb]"/>
        //                             </div>
        //                             <div className="w-[100px] h-0 origin-top-left rotate-90 bg-white/20 outline outline-2 outline-offset-[-1px] outline-white/20"></div>
        //                         </div>
        //                         <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
        //                             <div className="self-stretch justify-start text-white text-[22px] font-normal font-['Source_Sans_3'] leading-[30.80px]">Вступительный тест</div>
        //                             <div className="self-stretch justify-start text-white text-base font-normal font-['IBM_Plex_Sans'] leading-normal">15 сентября стартуют первые занятия согласно расписанию</div>
        //                         </div>
        //                     </div>
        //                     <div className="self-stretch inline-flex justify-start items-start gap-10">
        //                         <div className="inline-flex flex-col justify-start items-center gap-4">
        //                             <div className="w-12 h-12 relative overflow-hidden">
        //                                 <div className="w-9 h-10 left-[6px] top-[4px] absolute bg-white"/>
        //                             </div>
        //                         </div>
        //                         <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
        //                             <div className="self-stretch justify-start text-white text-[22px] font-normal font-['Source_Sans_3'] leading-[30.80px]">с 15 сентября</div>
        //                             <div className="self-stretch justify-start text-white text-base font-normal font-['IBM_Plex_Sans'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="w-full px-16 py-28 bg-[#0b4e59] flex flex-col justify-start items-center gap-20 overflow-hidden">
        //         <div className="w-full max-w-[1280px] flex flex-col justify-start items-center gap-20">
        //             <div className="w-full max-w-[768px] flex flex-col justify-start items-center gap-6">
        //                 <div className="self-stretch text-center justify-start text-white text-[52px] font-normal font-['Source_Sans_3'] leading-[62.40px]">Frontend и дизайн</div>
        //                 <div className="self-stretch text-center justify-start text-white text-lg font-normal font-['IBM_Plex_Sans'] leading-[27px]">Здесь вы найдете ответы на самые распространенные вопросы о наших кружках и курсах.</div>
        //             </div>
        //             <div className="self-stretch inline-flex justify-start items-start gap-16">
        //                 <div className="flex-1 border-b border-white/20 inline-flex flex-col justify-start items-start">
        //                     <div className="self-stretch flex flex-col justify-start items-start">
        //                         <div className="self-stretch py-5 border-t border-white/20 inline-flex justify-start items-center gap-6 overflow-hidden">
        //                             <div className="flex-1 justify-start text-white text-lg font-bold font-['IBM_Plex_Sans'] leading-[27px]">1. Основы HTML и CSS</div>
        //                             <div className="w-6 h-6 relative overflow-hidden">
        //                                 <div className="w-[11.58px] h-[6.66px] left-[6.22px] top-[8.20px] absolute bg-white border border-white"/>
        //                             </div>
        //                         </div>
        //                         <div className="self-stretch pb-6 inline-flex justify-start items-start gap-2.5">
        //                             <div className="flex-1 justify-start text-white text-base font-normal font-['IBM_Plex_Sans'] leading-normal">Вы узнаете, как устроены сайты изнутри и научитесь создавать собственные страницы с нуля. Освоите теги, сетки Flex и Grid, стили и анимации — всё, что нужно для уверенного старта.</div>
        //                         </div>
        //                     </div>
        //                     <div className="self-stretch flex flex-col justify-start items-start">
        //                         <div className="self-stretch py-5 border-t border-white/20 inline-flex justify-start items-center gap-6 overflow-hidden">
        //                             <div className="flex-1 justify-start text-white text-lg font-bold font-['IBM_Plex_Sans'] leading-[27px]">Какие курсы доступны?</div>
        //                             <div className="w-6 h-6 relative overflow-hidden">
        //                                 <div className="w-[11.58px] h-[6.66px] left-[6.22px] top-[8.20px] absolute bg-white border border-white"/>
        //                             </div>
        //                         </div>
        //                         <div className="self-stretch pb-6 inline-flex justify-start items-start gap-2.5">
        //                             <div className="flex-1 justify-start text-white text-base font-normal font-['IBM_Plex_Sans'] leading-normal">Мы предлагаем курсы по веб-программированию, алгоритмическому программированию и дизайну. Каждый курс охватывает основные темы и практические задания. Вы можете выбрать подходящий курс в зависимости от ваших интересов.</div>
        //                         </div>
        //                     </div>
        //                     <div className="self-stretch flex flex-col justify-start items-start">
        //                         <div className="self-stretch py-5 border-t border-white/20 inline-flex justify-start items-center gap-6 overflow-hidden">
        //                             <div className="flex-1 justify-start text-white text-lg font-bold font-['IBM_Plex_Sans'] leading-[27px]">Кто ведет занятия?</div>
        //                             <div className="w-6 h-6 relative overflow-hidden">
        //                                 <div className="w-[11.58px] h-[6.66px] left-[6.22px] top-[8.20px] absolute bg-white border border-white"/>
        //                             </div>
        //                         </div>
        //                         <div className="self-stretch pb-6 inline-flex justify-start items-start gap-2.5">
        //                             <div className="flex-1 justify-start text-white text-base font-normal font-['IBM_Plex_Sans'] leading-normal">Наши занятия ведут опытные преподаватели с практическим опытом в IT-сфере. Каждый из них имеет опыт работы в крупных проектах и участия в олимпиадах. Вы получите знания от профессионалов.</div>
        //                         </div>
        //                     </div>
        //                     <div className="self-stretch flex flex-col justify-start items-start">
        //                         <div className="self-stretch py-5 border-t border-white/20 inline-flex justify-start items-center gap-6 overflow-hidden">
        //                             <div className="flex-1 justify-start text-white text-lg font-bold font-['IBM_Plex_Sans'] leading-[27px]">Какова продолжительность курсов?</div>
        //                             <div className="w-6 h-6 relative overflow-hidden">
        //                                 <div className="w-[11.58px] h-[6.66px] left-[6.22px] top-[8.20px] absolute bg-white border border-white"/>
        //                             </div>
        //                         </div>
        //                         <div className="self-stretch pb-6 inline-flex justify-start items-start gap-2.5">
        //                             <div className="flex-1 justify-start text-white text-base font-normal font-['IBM_Plex_Sans'] leading-normal">Продолжительность курсов варьируется в зависимости от программы. Обычно курсы состоят из 8-10 занятий. Каждое занятие длится 1,5-2 часа.</div>
        //                         </div>
        //                     </div>
        //                     <div className="self-stretch flex flex-col justify-start items-start">
        //                         <div className="self-stretch py-5 border-t border-white/20 inline-flex justify-start items-center gap-6 overflow-hidden">
        //                             <div className="flex-1 justify-start text-white text-lg font-bold font-['IBM_Plex_Sans'] leading-[27px]">Есть ли пробное занятие?</div>
        //                             <div className="w-6 h-6 relative overflow-hidden">
        //                                 <div className="w-[11.58px] h-[6.66px] left-[6.22px] top-[8.20px] absolute bg-white border border-white"/>
        //                             </div>
        //                         </div>
        //                         <div className="self-stretch pb-6 inline-flex justify-start items-start gap-2.5">
        //                             <div className="flex-1 justify-start text-white text-base font-normal font-['IBM_Plex_Sans'] leading-normal">Да, мы предлагаем пробное занятие для всех желающих. Это отличная возможность познакомиться с преподавателем и форматом курса. Вы сможете задать все интересующие вас вопросы.</div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex-1 border-b border-white/20 inline-flex flex-col justify-start items-start">
        //                     <div className="self-stretch flex flex-col justify-start items-start">
        //                         <div className="self-stretch py-5 border-t border-white/20 inline-flex justify-start items-center gap-6 overflow-hidden">
        //                             <div className="flex-1 justify-start text-white text-lg font-bold font-['IBM_Plex_Sans'] leading-[27px]">Каковы условия оплаты?</div>
        //                             <div className="w-6 h-6 relative overflow-hidden">
        //                                 <div className="w-[11.58px] h-[6.66px] left-[6.22px] top-[8.20px] absolute bg-white border border-white"/>
        //                             </div>
        //                         </div>
        //                         <div className="self-stretch pb-6 inline-flex justify-start items-start gap-2.5">
        //                             <div className="flex-1 justify-start text-white text-base font-normal font-['IBM_Plex_Sans'] leading-normal">Оплата производится перед началом курса. Мы принимаем различные способы оплаты, включая банковские карты и электронные кошельки. Уточните детали у нашего менеджера.</div>
        //                         </div>
        //                     </div>
        //                     <div className="self-stretch flex flex-col justify-start items-start">
        //                         <div className="self-stretch py-5 border-t border-white/20 inline-flex justify-start items-center gap-6 overflow-hidden">
        //                             <div className="flex-1 justify-start text-white text-lg font-bold font-['IBM_Plex_Sans'] leading-[27px]">Где проходят занятия?</div>
        //                             <div className="w-6 h-6 relative overflow-hidden">
        //                                 <div className="w-[11.58px] h-[6.66px] left-[6.22px] top-[8.20px] absolute bg-white border border-white"/>
        //                             </div>
        //                         </div>
        //                         <div className="self-stretch pb-6 inline-flex justify-start items-start gap-2.5">
        //                             <div className="flex-1 justify-start text-white text-base font-normal font-['IBM_Plex_Sans'] leading-normal">Занятия проходят в физико-математическом лицее №239. Мы располагаем современными классами, оборудованными всем необходимым. Также возможны онлайн-занятия.</div>
        //                         </div>
        //                     </div>
        //                     <div className="self-stretch flex flex-col justify-start items-start">
        //                         <div className="self-stretch py-5 border-t border-white/20 inline-flex justify-start items-center gap-6 overflow-hidden">
        //                             <div className="flex-1 justify-start text-white text-lg font-bold font-['IBM_Plex_Sans'] leading-[27px]">Как связаться с нами?</div>
        //                             <div className="w-6 h-6 relative overflow-hidden">
        //                                 <div className="w-[11.58px] h-[6.66px] left-[6.22px] top-[8.20px] absolute bg-white border border-white"/>
        //                             </div>
        //                         </div>
        //                         <div className="self-stretch pb-6 inline-flex justify-start items-start gap-2.5">
        //                             <div className="flex-1 justify-start text-white text-base font-normal font-['IBM_Plex_Sans'] leading-normal">Вы можете связаться с нами через контактную форму на сайте. Также доступны телефон и электронная почта. Мы всегда готовы ответить на ваши вопросы.</div>
        //                         </div>
        //                     </div>
        //                     <div className="self-stretch flex flex-col justify-start items-start">
        //                         <div className="self-stretch py-5 border-t border-white/20 inline-flex justify-start items-center gap-6 overflow-hidden">
        //                             <div className="flex-1 justify-start text-white text-lg font-bold font-['IBM_Plex_Sans'] leading-[27px]">Есть ли скидки?</div>
        //                             <div className="w-6 h-6 relative overflow-hidden">
        //                                 <div className="w-[11.58px] h-[6.66px] left-[6.22px] top-[8.20px] absolute bg-white border border-white"/>
        //                             </div>
        //                         </div>
        //                         <div className="self-stretch pb-6 inline-flex justify-start items-start gap-2.5">
        //                             <div className="flex-1 justify-start text-white text-base font-normal font-['IBM_Plex_Sans'] leading-normal">Да, мы предлагаем скидки для групповых записей и для студентов. Уточните условия у нашего менеджера. Мы стараемся сделать обучение доступным для всех.</div>
        //                         </div>
        //                     </div>
        //                     <div className="self-stretch flex flex-col justify-start items-start">
        //                         <div className="self-stretch py-5 border-t border-white/20 inline-flex justify-start items-center gap-6 overflow-hidden">
        //                             <div className="flex-1 justify-start text-white text-lg font-bold font-['IBM_Plex_Sans'] leading-[27px]">Каковы отзывы студентов?</div>
        //                             <div className="w-6 h-6 relative overflow-hidden">
        //                                 <div className="w-[11.58px] h-[6.66px] left-[6.22px] top-[8.20px] absolute bg-white border border-white"/>
        //                             </div>
        //                         </div>
        //                         <div className="self-stretch pb-6 inline-flex justify-start items-start gap-2.5">
        //                             <div className="flex-1 justify-start text-white text-base font-normal font-['IBM_Plex_Sans'] leading-normal">Наши студенты оставляют положительные отзывы о курсах и преподавателях. Они отмечают практическую направленность занятий и доступность материала. Мы гордимся успехами наших учеников.</div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="w-full max-w-[560px] flex flex-col justify-start items-center gap-6">
        //                 <div className="self-stretch h-[27px]"/>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="w-full px-16 py-28 bg-white flex flex-col justify-start items-center gap-20 overflow-hidden">
        //         <div className="w-full max-w-[1280px] flex flex-col justify-start items-start gap-20">
        //             <div className="w-full max-w-[768px] flex flex-col justify-start items-start gap-4">
        //                 <div className="self-stretch flex flex-col justify-start items-center gap-6">
        //                     <div className="self-stretch justify-start text-[#010604] text-[52px] font-normal font-['Source_Sans_3'] leading-[62.40px]">Преподаватели</div>
        //                 </div>
        //             </div>
        //             <div className="self-stretch flex flex-col justify-start items-start gap-16">
        //                 <div className="self-stretch inline-flex justify-start items-start gap-8">
        //                     <div className="flex-1 inline-flex flex-col justify-start items-start gap-6">
        //                         <div className="self-stretch flex flex-col justify-start items-center gap-4">
        //                             <div className="self-stretch flex flex-col justify-start items-center">
        //                                 <div className="self-stretch justify-start text-[#010604] text-[22px] font-semibold font-['IBM_Plex_Sans'] leading-[33px]">Гуров Матвей</div>
        //                                 <div className="self-stretch justify-start text-[#010604] text-lg font-normal font-['IBM_Plex_Sans'] leading-[27px]">Преподаватель Python</div>
        //                             </div>
        //                             <div className="self-stretch justify-start text-[#010604] text-base font-normal font-['IBM_Plex_Sans'] leading-normal">Специалист в области веб-разработки и программирования, опыт работы более 5 лет.</div>
        //                         </div>
        //                         <div className="inline-flex justify-start items-start gap-3.5">
        //                             <div className="w-6 h-6 relative overflow-hidden">
        //                                 <div className="w-[18px] h-[18px] left-[3px] top-[3.24px] absolute bg-[#010604]"/>
        //                             </div>
        //                             <div className="w-6 h-6 relative overflow-hidden">
        //                                 <div className="w-[18px] h-4 left-[3px] top-[4.24px] absolute bg-[#010604]"/>
        //                             </div>
        //                             <div className="w-6 h-6 relative overflow-hidden">
        //                                 <div className="w-[18px] h-[18px] left-[3px] top-[3px] absolute bg-[#010604]"/>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="flex-1 inline-flex flex-col justify-start items-start gap-6">
        //                         <div className="self-stretch flex flex-col justify-start items-center gap-4">
        //                             <div className="self-stretch flex flex-col justify-start items-center">
        //                                 <div className="self-stretch justify-start text-[#010604] text-[22px] font-semibold font-['IBM_Plex_Sans'] leading-[33px]">Крестьянинов Александр</div>
        //                                 <div className="self-stretch justify-start text-[#010604] text-lg font-normal font-['IBM_Plex_Sans'] leading-[27px]">Преподаватель алгоритмов</div>
        //                             </div>
        //                             <div className="self-stretch justify-start text-[#010604] text-base font-normal font-['IBM_Plex_Sans'] leading-normal">Опытный педагог с глубокими знаниями в алгоритмическом программировании и участием в олимпиадах.</div>
        //                         </div>
        //                         <div className="inline-flex justify-start items-start gap-3.5">
        //                             <div className="w-6 h-6 relative overflow-hidden">
        //                                 <div className="w-[18px] h-[18px] left-[3px] top-[3.24px] absolute bg-[#010604]"/>
        //                             </div>
        //                             <div className="w-6 h-6 relative overflow-hidden">
        //                                 <div className="w-[18px] h-4 left-[3px] top-[4.24px] absolute bg-[#010604]"/>
        //                             </div>
        //                             <div className="w-6 h-6 relative overflow-hidden">
        //                                 <div className="w-[18px] h-[18px] left-[3px] top-[3px] absolute bg-[#010604]"/>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="flex-1 inline-flex flex-col justify-start items-start gap-6">
        //                         <div className="self-stretch flex flex-col justify-start items-center gap-4">
        //                             <div className="self-stretch flex flex-col justify-start items-center">
        //                                 <div className="self-stretch justify-start text-[#010604] text-[22px] font-semibold font-['IBM_Plex_Sans'] leading-[33px]">Кондратьева Виктория</div>
        //                                 <div className="self-stretch justify-start text-[#010604] text-lg font-normal font-['IBM_Plex_Sans'] leading-[27px]">Ассистент преподавателя</div>
        //                             </div>
        //                             <div className="self-stretch justify-start text-[#010604] text-base font-normal font-['IBM_Plex_Sans'] leading-normal">Помогает в проведении занятий и поддерживает студентов в их обучении.</div>
        //                         </div>
        //                         <div className="inline-flex justify-start items-start gap-3.5">
        //                             <div className="w-6 h-6 relative overflow-hidden">
        //                                 <div className="w-[18px] h-[18px] left-[3px] top-[3.24px] absolute bg-[#010604]"/>
        //                             </div>
        //                             <div className="w-6 h-6 relative overflow-hidden">
        //                                 <div className="w-[18px] h-4 left-[3px] top-[4.24px] absolute bg-[#010604]"/>
        //                             </div>
        //                             <div className="w-6 h-6 relative overflow-hidden">
        //                                 <div className="w-[18px] h-[18px] left-[3px] top-[3px] absolute bg-[#010604]"/>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="flex-1 inline-flex flex-col justify-start items-start gap-6">
        //                         <div className="self-stretch flex flex-col justify-start items-center gap-4">
        //                             <div className="self-stretch flex flex-col justify-start items-center">
        //                                 <div className="self-stretch justify-start text-[#010604] text-[22px] font-semibold font-['IBM_Plex_Sans'] leading-[33px]">Full name</div>
        //                                 <div className="self-stretch justify-start text-[#010604] text-lg font-normal font-['IBM_Plex_Sans'] leading-[27px]">Job title</div>
        //                             </div>
        //                             <div className="self-stretch justify-start text-[#010604] text-base font-normal font-['IBM_Plex_Sans'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
        //                         </div>
        //                         <div className="inline-flex justify-start items-start gap-3.5">
        //                             <div className="w-6 h-6 relative overflow-hidden">
        //                                 <div className="w-[18px] h-[18px] left-[3px] top-[3.24px] absolute bg-[#010604]"/>
        //                             </div>
        //                             <div className="w-6 h-6 relative overflow-hidden">
        //                                 <div className="w-[18px] h-4 left-[3px] top-[4.24px] absolute bg-[#010604]"/>
        //                             </div>
        //                             <div className="w-6 h-6 relative overflow-hidden">
        //                                 <div className="w-[18px] h-[18px] left-[3px] top-[3px] absolute bg-[#010604]"/>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="w-full max-w-[768px] flex flex-col justify-start items-start gap-6">
        //                 <div className="w-[768px] h-[27px]"/>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="w-full px-16 py-20 bg-white flex flex-col justify-start items-center gap-20 overflow-hidden">
        //         <div className="w-full max-w-[1280px] flex flex-col justify-start items-start gap-20">
        //             <div className="self-stretch inline-flex justify-center items-center gap-8">
        //                 <div className="flex justify-center  gap-8">
        //                     <div className="justify-start text-[#010604] text-sm font-semibold font-['IBM_Plex_Sans'] leading-[21px]">Преподаватели</div>
        //                     <div className="justify-start text-[#010604] text-sm font-semibold font-['IBM_Plex_Sans'] leading-[21px]">Кружки</div>
        //                     <div className="justify-start text-[#010604] text-sm font-semibold font-['IBM_Plex_Sans'] leading-[21px]">Записаться</div>
        //                 </div>
        //             </div>
        //             <div className="self-stretch flex flex-col justify-start items-center gap-8">
        //                 <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-[#010604]/20"></div>
        //                 <div className="inline-flex justify-start items-start gap-6">
        //                     <div className="justify-start text-[#010604] text-sm font-normal font-['IBM_Plex_Sans'] leading-[21px]">© 2025 ФМЛ №239. Все права защищены.</div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>);
        <div className="w-full inline-flex flex-col justify-start items-start overflow-hidden">
            <HeaderNav />
            <Hero />
            <TimeLine />
            <FAQ />
            <Teachers />
            <Footer/>
        </div>)
}

