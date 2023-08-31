import {Card, Col, Row} from "react-bootstrap";
import React from "react";

function TeacherCard(props) {
    return (
        <Card className={"p-3 m-auto mb-3 mt-3 text-start rounded-3 border-0"} style={{width: "20rem"}}>
            <Row className={"ps-3 pe-2"}>
                <Col>
                <Card.Title >{props.name[0]}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.name[1]}</Card.Subtitle>
                </Col>
                <Col>
                    <div className={"text-end text-muted"}>{props.subtitle}</div>
                </Col>
            </Row>
            <Card.Body>
                <Card.Text className={"text-start h6"}>
                    {props.description[0]}
                </Card.Text>
                <Card.Text className={"text-start text-muted"}>
                    {props.description[1]}
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