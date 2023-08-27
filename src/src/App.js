import './App.css';
import TeacherCard from "./TeacherCard";
import 'bootstrap/dist/css/bootstrap.min.css'
import CoursePlan from "./CoursePlan";
import {Button, Container, Row} from "react-bootstrap";

function App() {
    const planJava = [
        {
            item: "Введение в Java",
            description: "На первых занятиях мы повторим основы языка Java, поговорим про ООП и как мы будем использовать это в дальнейшем.",
            themes: ["Java", "ООП"]
        },
        {
            item: "Создаем \"скелет\" сайта",
            description: "Посмотрим, как создать простейшую страничку сайта, как красиво оформить различные кнопки, надписи и прочее.",
            themes: ["HTML", "CSS"]
        },
        {
            item: "Начинаем программировать",
            description: "Разберёмся, что такое интернет и как с ним работать, напишем простой сервер на Java.",
            themes: ["Java HTTP Server"]
        },
        {
            item: "\"Оживляем\" сайт",
            description: "Узнаем как динамически формировать страницу, как обрабатывать действия пользователя на при помощи JavaScript",
            themes: ["Шаблонизаторы", "FreeMarker", "Javascript"]
        },
        {
            item: "Учимся работать с даннными",
            description: "Поговорим о базах данных. Как добавить на сайт пользователей, сообщения, посты и что угодно ещё.",
            themes: ["SQL", "ORM"]
        },
        {
            item: "Полезные инструменты",
            description: "Научимся пользоваться самыми распространёнными инструментами для разработки",
            themes: ["GIT", "Прочие инструменты"]
        },
    ]

    const planPython = [
        {
            item: "Статические страницы",
            description: "Изучим основы HTML и CSS, создадим простейшую страницу",
            themes: ["HTML", "CSS"]
        },
        {
            item: "Введение в JavaScript",
            description: "Научимся писать на JavaScript - языке, используемом для создания современных сложных одностраничных приложений (SPA)",
            themes: ["JavaScript"]
        },
        {
            item: "Одностраничные приложения",
            description: "Рассмотрим один из самых популярных фреймворков для написания однострничных приложений - React",
            themes: ["React"]
        },
        {
            item: "Сервер на Python",
            description: "Повторим основы языка Python и познакомимся с Flask'ом - фреймворком для написания серверов на Python",
            themes: ["Python", "Flask", "WebSockets"]
        },
        {
            item: "Работа с данными",
            description: "Поговорим о базах данных, и о том, как работать с ними в Python. Разберёмся с тем, что такое SQL, ORM и SQLAlchemy",
            themes: ["SQL", "SQLAlchemy"]
        },
        {
            item: "Полезные инструменты",
            description: "Научимся пользоваться самыми распространёнными инструментами для разработки",
            themes: ["GIT", "Bash", "SSH"]
        },
    ]
    return (
        <div className="App">
            <Container className={"align-content-center"}>
                <Container className={"w-100 m-1 mt-5 mb-5 bg-white pt-3 pb-3 rounded-4"}>
                    <h1>Что происходит?</h1>
                    <div>Если вы учитесь в 8-11 классе и:<br/>
                        Имеете базовые навыки программирования на любом языке<br/>
                        Хотели бы научиться писать собственные Web-приложения<br/>
                        Вероятно, вас заинтересует наш курс.
                    </div>
                    <p>Мы с самого начала расскажем про то, как работает интернет, что такое сайт, из чего он состоит и
                        как написать свой собственный</p>
                    <Button variant={"dark"} size={"lg"} className={"p-2 mb-3 mt-2"}
                            style={{width: "10rem"}} href={"https://t.me/+wFkOkMwNQrc4MzMy"}>Интересно</Button>
                    <p className={"mb-2 text-muted"}>Начало 9 сентября</p>
                </Container>

                <Container className={"m-1 mt-5 mb-5 bg-white pt-3 pb-3 rounded-4"}>
                    <h2 className={"mb-3"}>Кто будет вести курс?</h2>
                    <Row className={"m-auto"} style={{maxWidth: "50rem"}}>
                        <TeacherCard
                            name={"Матвей Гуров"}
                            subtitle={"13-5 класс"}
                            description={"Учусь в ИТМО, стажёр в Яндексе"}
                            links={[
                                {title: "Telegram", link: "https://t.me/obomba"},
                                {title: "Github", link: "https://github.com/matvik22000"}
                            ]}
                        />

                        <TeacherCard
                            name={"Михаил Ким"}
                            subtitle={"13-5 класс"}
                            description={"Учусь на КТ, написал сканнер"}
                            links={[
                                {title: "Telegram", link: "https://t.me/medvezhonokok"},
                                {title: "Github", link: "https://github.com/medvezhonokok"}
                            ]}
                        />
                        <TeacherCard
                            name={"Эльвира Минько"}
                            subtitle={"13-6 класс"}
                            description={"Учусь в итмо на КТ на стипендии"}
                            links={[
                                {title: "Telegram", link: "https://t.me/elvmin"},
                            ]}
                        />
                    </Row>
                </Container>
                <Container className={"bg-white p-5 rounded-4 mb-5"}>
                    <h2 className={"mb-3"}>Как построен курс?</h2>
                    <Row className={"m-auto"} style={{maxWidth: "50rem"}}>
                        <CoursePlan course={"Web-разработка на Java"}
                                    subtitle={"Изучим все необходимые инструменты, чтобы в конце написать свой блог"}
                                    themes={planJava}/>
                        <CoursePlan course={"Web-разработка на Python"}
                                    subtitle={"Изучим все необходимые инструменты, чтобы в конце написать свой чат"}
                                    themes={planPython}/>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default App;
