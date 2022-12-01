import {Card} from "react-bootstrap";

function TeacherCard(props) {
    return (
        <Card className={"p-3 m-auto mb-3 mt-3"} style={{width: "18rem"}}>
            <Card.Title>{props.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
            <Card.Body>
                <Card.Text>
                    {props.description}
                </Card.Text>
                {props.links.map((el) => <Card.Link href={el.link} className={"link-dark"}>{el.title}</Card.Link>)}
            </Card.Body>
        </Card>
    );
}

export default TeacherCard