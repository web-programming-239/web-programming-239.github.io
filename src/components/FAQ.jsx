import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

const PROGRAMS = [{
    key: "frontend", label: "Frontend и дизайн", about: "Курс для 9-11 классов. Занятия по субботам, продолжительность 3 часа. Работаем в формате мини-лекции + практика: сначала короткое объяснение, затем самостоятельная реализация под руководством преподавателя. По итогу — проект интерфейса мессенджера с подключением к бэкенду."
}, {
    key: "algorithms", label: "Алгоритмы (5–6 класс)", about: "Курс для 5-6 классов. Занятия по четвергам и субботам 1.5 часа. Каждое занятие — понятные примеры на Python, затем задачи и мини-проекты-игры. Регулярно закрепляем материал и учимся объяснять решения."
}, {
    key: "python", label: "Web на Python", about: "Курс для 10-11 классов. Занятия по понедельникам, продолжительность 3 часа. Формат: короткая теория + разбор кода + практика. Собираем полноценный веб-проект на Flask/React с базой данных, деплоем и минимальными тестами."
},];

const data = {
    frontend: {
        left: [{
            q: "1. HTML & CSS основы", a: "Освоите разметку страниц и оформление элементов: создадите блоки, списки, ссылки и изображения, научитесь подключать шрифты и иконки. Отработаете верстку с использованием Flex и Grid, закрепите работу с позиционированием и анимацией переходов."
        }, {
            q: "2. JavaScript: базовый синтаксис", a: "Научитесь создавать переменные, работать с массивами и объектами, писать простые функции. Выполните задачи на обработку данных и первые интерактивные элементы страницы — кнопки и динамические списки."
        }, {
            q: "3. React: старт", a: "Познакомитесь с библиотекой React, создадите свои первые компоненты. Реализуете небольшое приложение с состоянием: кнопка-счетчик, переключатель темы и форма ввода текста."
        }, {
            q: "4. UI-библиотеки", a: "Освоите работу с готовыми компонентами из библиотеки Gravity UI. Соберете страницу с кнопками, карточками и формами, настроите стили и убедитесь, как ускоряется разработка с готовыми элементами."
        }, {
            q: "5. Дизайн интерфейсов", a: "Разберете, как выстраивается структура сайта: сетка, шапка, подвал и меню. На практике оформите блок с карточками и списками, подберете иконки и правильно выровняете элементы на странице."
        }], right: [{
            q: "6. Современный JS на практике", a: "Будете работать с асинхронными функциями и промисами, использовать методы массивов map, filter, reduce. Решите задачи, связанные с обработкой данных и отображением результатов на странице."
        }, {
            q: "7. Управление состоянием", a: "Научитесь грамотно обновлять состояние в React: хранить сложные объекты, изменять массивы, избегать ошибок при повторных вызовах setState. Реализуете мини-приложение с формой и списком заметок."
        }, {
            q: "8. Эффекты и сеть", a: "Освоите useEffect для работы с жизненным циклом компонентов. Подключитесь к открытому API и загрузите список данных, отобразите их в таблице или карточках, добавив индикатор загрузки."
        }, {
            q: "9. Проект «Мини-Telegram»: каркас", a: "Создадите структуру интерфейса мессенджера: основной экран с чатами, боковую панель, окно настроек. На этом этапе интерфейс будет работать с тестовыми данными."
        }, {
            q: "10. Проект «Мини-Telegram»: логика", a: "Реализуете компонент сообщений: вывод текста с разных сторон экрана для своих и чужих сообщений, отображение времени и реакции. Подключите приложение к серверу через WebSocket и добавите меню чата с базовыми функциями."
        }]

    },

    algorithms: {
        left: [{
            q: "1. Среда и основы", a: "Познакомитесь с IDE и напишете первые программы: работа с числами, строками, скобками. Научитесь запускать код и проверять его результат."
        }, {
            q: "2. Переменные", a: "Узнаете, как хранить данные в переменных и правильно их называть. Выполните арифметические операции и создадите интерактивные программы с вводом данных с клавиатуры."
        }, {
            q: "3. Типы данных", a: "Освоите числа, строки и дроби. Научитесь преобразовывать одни типы в другие и использовать их в расчетах и простых задачах."
        }, {
            q: "4. Логика", a: "Разберете булевы значения и логические операции. Составите первые алгоритмы с проверкой условий: доступ по возрасту, проверка пароля, выбор действий."
        }, {
            q: "5. Ветвления", a: "Будете использовать if/elif/else для выбора сценариев. Реализуете программу с несколькими вариантами действий, создадите мини-игру «Текстовый квест»."
        }], right: [{
            q: "6. Циклы while", a: "Научитесь писать повторяющиеся действия, работать со счетчиком и останавливаться по условию. Создадите игру с угадыванием числа."
        }, {
            q: "7. Случайность", a: "Научитесь генерировать случайные числа. Используете их для игр и простых симуляций — например, для броска кубика или генерации пароля."
        }, {
            q: "8. Списки и for", a: "Будете хранить данные в списках, добавлять и удалять элементы. Научитесь перебирать списки циклом for и обрабатывать строки посимвольно."
        }, {
            q: "9. Проект-игра №1", a: "Соберете игру «Камень-ножницы-бумага» с выбором действий и подсчетом очков. Программа будет работать с пользователем в реальном времени."
        }, {
            q: "10. Проект-игра №2 + функции", a: "Напишете игру «Отгадай слово»: программа загадывает слово, а игрок вводит буквы. В процессе создадите свои функции для удобства и повторного использования кода."
        }]
    },

    python: {
        left: [{
            q: "1. Введение и база", a: "Освежите основы HTML, CSS и базового JS, чтобы понимать структуру и динамику веб-страниц. Создадите простую форму и страницу с разметкой."
        }, {
            q: "2. React: основы", a: "Соберете небольшой фронтенд на React: кнопки, формы, вывод данных. Освоите работу с состоянием и событиями."
        }, {
            q: "3. HTTP и сети", a: "Разберете, как работает обмен данными через интернет. Напишете простые запросы и научитесь отправлять и получать JSON от сервера."
        }, {
            q: "4. Flask: старт", a: "Напишете свой первый сервер на Flask. Реализуете маршруты, вернете страницу пользователю и подключите фронтенд к бэкенду."
        }, {
            q: "5. React углубление", a: "Продвинетесь в React: соберете приложение с несколькими страницами, подключите Redux и React-Bootstrap для управления состоянием и внешнего вида."
        }], right: [{
            q: "6. Базы данных", a: "Познакомитесь с реляционными базами данных. Создадите таблицы и подключите SQLAlchemy, чтобы сохранять пользователей и записи."
        }, {
            q: "7. Асинхронность и realtime", a: "Научитесь писать асинхронный код. Реализуете чат или уведомления через WebSocket, разберете базовые возможности FastAPI."
        }, {
            q: "8. Git-практика", a: "Освоите Git для командной работы: создадите репозиторий, сделаете коммиты, научитесь работать с ветками и объединять изменения."
        }, {
            q: "9. Деплой", a: "Развернете проект на сервере или в Render. Настроите переменные окружения и проверите работу сайта в интернете."
        }, {
            q: "10. Тесты", a: "Напишете тесты с Pytest, чтобы убедиться, что ваш сервер отвечает правильно. Протестируете регистрацию, вход и основные эндпойнты."
        }]
    },
};


function ToggleMenu({value, onChange}) {
    return (<div className="relative inline-flex p-1 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
        {PROGRAMS.map((p) => {
            const active = value === p.key;
            return (<button
                key={p.key}
                type="button"
                onClick={() => onChange(p.key)}
                className={`cursor-pointer relative z-10 px-4 py-2 rounded-xl text-sm font-ibm transition-[color,opacity] ${active ? "text-[#010604]" : "text-white/80 hover:text-white"}`}
            >
                {p.label}
                {active && (<motion.span
                    layoutId="toggle-pill"
                    className="absolute inset-0 -z-10 rounded-xl bg-white"
                    transition={{type: "spring", stiffness: 400, damping: 30}}
                />)}
            </button>);
        })}
    </div>);
}

function QAItem({q, a}) {
    const [open, setOpen] = useState(false);
    return (<div className="self-stretch flex flex-col justify-start items-start border-t border-white/20">
        <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="cursor-pointer w-full py-5 inline-flex justify-between items-center gap-6 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
            <div className="flex-1 text-white text-lg font-bold leading-[27px] font-ibm text-left">{q}</div>
            <motion.div
                animate={{rotate: open ? 180 : 0}}
                transition={{type: "spring", stiffness: 300, damping: 24}}
                className="w-6 h-6 flex justify-center items-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M7.08691 9.02344C7.18774 9.02344 7.26471 9.05385 7.34277 9.13184L11.6455 13.459L11.999 13.8145L16.6816 9.13184C16.7593 9.05424 16.8257 9.03227 16.9062 9.03516C17.0005 9.0386 17.0819 9.07117 17.168 9.15723C17.246 9.23531 17.2764 9.31223 17.2764 9.41309C17.2763 9.51371 17.2458 9.59001 17.168 9.66797L12.249 14.5869C12.1949 14.6411 12.1522 14.667 12.124 14.6787C12.0885 14.6935 12.0486 14.7021 12 14.7021C11.9755 14.7021 11.9532 14.6993 11.9326 14.6953L11.875 14.6787L11.8223 14.6484C11.8015 14.634 11.7779 14.6138 11.751 14.5869L6.80664 9.64355C6.7328 9.56972 6.70662 9.50009 6.70996 9.40527C6.71375 9.29797 6.74977 9.2141 6.83203 9.13184C6.90996 9.05403 6.98632 9.02351 7.08691 9.02344Z"
                        fill="#ffffff" stroke="#ffffff"
                    />
                </svg>
            </motion.div>
        </button>

        <AnimatePresence initial={false}>
            {open && (<motion.div
                initial={{height: 0, opacity: 0}}
                animate={{height: "auto", opacity: 1}}
                exit={{height: 0, opacity: 0}}
                transition={{duration: 0.25, ease: "easeInOut"}}
                className="self-stretch overflow-hidden"
            >
                <p className="flex-1 pb-6 text-white text-base font-normal leading-normal font-ibm">{a}</p>
            </motion.div>)}
        </AnimatePresence>
    </div>);
}

function Column({items}) {
    return (<div className="min-w-[300px] flex-1 border-b border-white/20 inline-flex flex-col justify-start items-start">
        {items.map((item) => (<QAItem key={item.q} q={item.q} a={item.a}/>))}
    </div>);
}

export default function FAQ() {
    const [program, setProgram] = useState(PROGRAMS[0].key);
    const current = data[program];

    return (<section id="clubs" className="w-full px-16 py-28 bg-[#0b4e59] flex flex-col justify-start items-center gap-12 overflow-hidden">
        <div className="w-full max-w-[1280px] flex flex-col justify-start items-center gap-10">
            {/* ToggleMenu on top */}
            <ToggleMenu value={program} onChange={setProgram}/>

            <div className="w-full max-w-[768px] flex flex-col justify-start items-center gap-6">
                <h2 className="self-stretch text-center text-white text-[52px] font-normal leading-[62.40px] font-source">
                    {PROGRAMS.find((p) => p.key === program)?.label}
                </h2>
                <p className="self-stretch text-center text-white text-lg font-normal leading-[27px] font-ibm">
                    {PROGRAMS.find((p) => p.key === program)?.about}
                </p>
            </div>

            <div className="self-stretch inline-flex justify-start items-start gap-x-16 w-full flex-wrap">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${program}-left`}
                        initial={{opacity: 0, y: 6}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -6}}
                        transition={{duration: 0.2}}
                        className="flex-1 self-stretch inline-flex justify-start items-start"
                    >
                        <Column items={current.left}/>
                    </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${program}-right`}
                        initial={{opacity: 0, y: 6}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -6}}
                        transition={{duration: 0.2}}
                        className="flex-1 self-stretch inline-flex justify-start items-start"
                    >
                        <Column items={current.right}/>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="w-full max-w-[560px] flex flex-col justify-start items-center gap-6">
                <div className="self-stretch h-[27px]"/>
            </div>
        </div>
    </section>);
}
