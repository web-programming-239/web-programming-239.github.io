import {Tab, Row, Col, Nav} from "react-bootstrap";
import JavaIcon from "./Icons/JavaIcon";
import PythonIcon from "./Icons/PythonIcon";
import CoursePlan from "./CoursePlan";
import { useState } from 'react';

function BottomTabs() {
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
            item: "Учимся работать с данными",
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
    const INACTIVE_COLOR = "rgba(108,117,125,0.38)"
    const ACTIVE_COLOR = "rgba(14,14,14,0.73)"
    const [isFirst, setBool] = useState(true);

    function handleClick(current) {
        if(current === isFirst){
            setBool(!isFirst);
        }
    }

    return (
        <Tab.Container transition={false} id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Tab.Content className={"p-0"}>
                    <Tab.Pane eventKey="first">
                        <CoursePlan course={"Web-разработка на Java"}
                                    subtitle={"Изучим все необходимые инструменты, чтобы в конце написать свой блог"}
                                    themes={planJava}
                                    roundbox = {"rounded-end"}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second" >
                        <CoursePlan course={"Web-разработка на Python"}
                                    subtitle={"Изучим все необходимые инструменты, чтобы в конце написать свой чат"}
                                    themes={planPython}
                                    roundbox = {"rounded-start"}/>
                    </Tab.Pane>
                </Tab.Content>
                <Nav fill className="justify-content-center p-0 h4">
                    <Nav.Item onFocus={() => handleClick(false)}
                              className={
                        `${(isFirst ? "bg-white rounded-bottom" : "")}`
                    }>
                        <Nav.Link eventKey="first" >
                            <JavaIcon color={isFirst ? ACTIVE_COLOR: INACTIVE_COLOR}/>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item onFocus={() => handleClick(true)} className={
                        (!isFirst ? "bg-white rounded-bottom" : "")}>
                        <Nav.Link eventKey="second" >
                            <PythonIcon color={!isFirst ? ACTIVE_COLOR: INACTIVE_COLOR}/>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Row>
        </Tab.Container>
    );
}

export default BottomTabs;