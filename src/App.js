import TeacherCard from "./TeacherCard";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from "react-bootstrap";
import TelegramIcon from "./Icons/TelegramIcon";
import GItIcon from "./Icons/GitIcon";
import ArrowIcon from "./Icons/ArrowIcon";

import './App.css';
import BottomTabs from "./BottomTabs";

function App() {
    return (
        <div className="App">
            <Container>
                <h2 className={"text-start mt-5"}>Что происходит?</h2>
                <Container className={"m-1 mt-3 mb-5 pt-3 pb-3 rounded-4 text-start"}>
                    <Row className={"m-auto"}>
                        <Col>
                            <h5>Если вы учитесь в 8-11 классе и
                                имеете базовые навыки программирования на любом языке,
                                хотели бы научиться писать собственные Web-приложения,
                                вероятно, вас заинтересует наш курс
                            </h5>
                            <p>Мы с самого начала расскажем про то, как работает интернет, что такое сайт, из чего он
                                состоит и
                                как написать свой собственный</p>
                        </Col>
                        <Col className={"text-center"}>
                            <a  href={"http://t.me/+fNRp_Y1MoXE3MjUy"}>
                            <ArrowIcon style={{height: "8rem", width: "8rem"}}/></a>
                            <p className={"mb-2 text-muted"}>Начало 16 сентября</p>
                        </Col>
                    </Row>
                </Container>

                <Container><
                    h2 className={"mb-4 text-start"}>Как построен курс?</h2>
                    <BottomTabs></BottomTabs>
                </Container>
                <Container className={"m-1 mt-5 mb-5 pt-3 pb-3 rounded-4"}>
                    <h2 className={"mb-4 text-start"}>Кто будет вести курс?</h2>
                    <Row className={"m-auto"} style={{maxWidth: "70rem"}}>
                        <TeacherCard
                            name={["Матвей","Гуров"]}
                            subtitle={"14-5"}
                            description={["Fullstack-разработчик в DosFlores","КТ ИТМО"]}
                            links={[
                                {title: "Telegram", link: "https://t.me/obomba", icon: TelegramIcon},
                                {title: "Github", link: "https://github.com/matvik22000", icon: GItIcon}
                            ]}
                        />
                        <TeacherCard
                            name={["Александр", "Крестьянинов"]}
                            subtitle={"14-5"}
                            description={["Backend-разработчик в Ditar", "ПМИ СПбГЭУ"]}
                            links={[
                                {title: "Telegram", link: "https://t.me/AleksanderRefresher", icon: TelegramIcon},
                                {title: "Github", link: "https://github.com/hellagod", icon: GItIcon}
                            ]}
                        />
                        <TeacherCard
                            name={["Эльвира","Минько"]}
                            subtitle={"14-6 "}
                            description={["Backend-разработчик в Видком","КТ ИТМО "]}
                            links={[
                                {title: "Telegram", link: "https://t.me/elvmin", icon: TelegramIcon},
                            ]}
                        />
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default App;
