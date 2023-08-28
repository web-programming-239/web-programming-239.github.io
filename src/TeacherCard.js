import {Card, Col, Row} from "react-bootstrap";
import IconBxlTelegram from "./Icons/TelegramIcon";
import React from "react";

function TeacherCard(props) {
    return (
        <Card className={"p-4 m-auto mb-3 mt-3 text-start rounded-4"} style={{width: "18rem"}}>
            <Row>
                <Col>
                <Card.Title>{props.name[0]}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.name[1]}</Card.Subtitle>
                </Col>
                <Col>
                    <div className={"text-end text-muted"}>{props.subtitle}</div>
                </Col>
            </Row>
            <Card.Body>
                <Card.Text>
                    {props.description}
                </Card.Text>

            </Card.Body>
            <div className={"text-end"}>
                {props.links.map((el) => <a href={el.link} className={"h3 me-2"}>
                    <el.icon/>
                </a>)}
            </div>
        </Card>
    );
}

export default TeacherCard