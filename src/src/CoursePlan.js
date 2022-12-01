import {Accordion, Container} from "react-bootstrap";
import Themes from "./Themes";

function CoursePlan(props) {
    return (
        <Container>
            <h2 className={"mb-1"}>{props.course}</h2>
            <p className={"text-muted mb-3"}>{props.subtitle}</p>
            <Accordion className={"mt-3 mb-3"}>
                {props.themes.map((el, index) =>
                    <Accordion.Item eventKey={index}>
                        <Accordion.Header>
                            <div className={"theme-desc"}><b>{el.item}</b></div>
                        </Accordion.Header>
                        <Accordion.Body>
                            {el.description}
                            <Themes list={el.themes}/>
                        </Accordion.Body>
                    </Accordion.Item>)
                }
            </Accordion>
        </Container>
    );
}

export default CoursePlan