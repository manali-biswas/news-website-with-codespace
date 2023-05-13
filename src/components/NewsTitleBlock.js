import { Container } from "react-bootstrap";

function NewsTitleBlock(props) {
    return (
        <Container className="bg-info text-center">
            <h1>{props.title}</h1>
        </Container>
    )
}

export default NewsTitleBlock;