import './App.css';
import TeacherCard from "./TeacherCard";
import 'bootstrap/dist/css/bootstrap.min.css'
import CoursePlan from "./CoursePlan";
import {Button, Container, Row} from "react-bootstrap";

function App() {
    const plan = [
        {
            item: "Введение",
            description: "На первом занятии мы с вами поговорим про то, из чего будет состоять наше будущее приложение, как его собрать, какие программы и сервисы нам для этого потребуются.",
            themes: ["Maven", "IDE"]
        },
        {
            item: "Создаем \"скелет\" сайта",
            description: "В данном блоке вы узнаете про то, как создать простейшую страничку сайта, как красиво оформить различные кнопки, надписи и тд",
            themes: ["HTML", "CSS"]
        },
        {
            item: "Начинаем программировать",
            description: "Разберёмся, что такое интернет и как с ним работать, напишем простой сервер на Java.",
            themes: ["Java", "HTTP", "Spring"]
        },
        {
            item: "\"Оживляем\" сайт",
            description: "Узнаем как обрабатывать действия пользователя на при помощи JavaScript, Поговорим про то, что это вообще за язык и как он может пригодиться нам(вам) в будущем.",
            themes: ["JavaScript", "JQuery"]
        },
        {
            item: "Учимся работать с даннными",
            description: "Поговорим о базах данных. Как добавить на сайт пользователей, сообщения, посты и что угодно ещё",
            themes: ["Maria DB", "SQL"]
        },
        {
            item: "Если останется время",
            description: "Мы чуть более углубленно расскажем вам про процесс разработки больших приложений, подробнее затронем работу с сетью и в целом, разберём темы, которым мы уделили недостаточно внимания и которые будут вам интересны ",
            themes: ["GIT", "TCP/IP", "Что угодно ещё"]
        },
    ]
    return (
        <div className="App">
            <Container className={"align-content-center"}>
                <Container className={"w-100 m-1 mt-5 mb-5 bg-white pt-3 pb-3 rounded-4"}>
                    <h1>Что происходит?</h1>
                    <div>Если вы десятиклассник, который хотел бы написать Web-приложение и сдать его как годовой проект, то, вероятно, вас должен заинтересовать наш курс.</div>
                        <p>Мы с самого начала расскажем про то, как работает интернет, что такое сайт, из чего он состоит и как написать свой собственный</p>
                    <Button variant={"dark"} size={"lg"} className={"p-2 mb-3 mt-2"}
                            style={{width: "10rem"}} href={"https://t.me/+wFkOkMwNQrc4MzMy"}>Интересно</Button>
                    <p className={"mb-2 text-muted"}>Начало 13 января</p>
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
                    <CoursePlan course={"Как построен курс?"}
                                subtitle={"Это - примерный список тем, для каждого ученика он будет адаптирован под конкретно его проект"} themes={plan}/>
                </Container>
            </Container>
        </div>
    );
}

export default App;
