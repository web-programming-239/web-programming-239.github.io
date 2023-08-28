import {Container, Row} from "react-bootstrap";

function Themes (props) {

    return (
        <Container className={"m-2"}>
            <Row md={3} lg={4} xl={4}>
                {props.list.map((el) => <span className={"bg-light p-2 pe-4 ps-4 mt-2 mb-2 m-1 m-auto rounded-3"} style={{width: "16rem"}}><b>{el}</b></span>)}
            </Row>

        </Container>
    );
}

export default Themes