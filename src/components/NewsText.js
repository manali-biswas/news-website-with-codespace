import { Container } from "react-bootstrap";

function NewsText(props) {
    return (
        <Container>
            {props.content}
        </Container>
    )
}

export default NewsText;