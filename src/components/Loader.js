import { Button, Container, Spinner } from "react-bootstrap";

function Loader() {
    return (
        <Container className="h-70 w-100 d-flex justify-content-center align-items-center">
            <Button variant="info" disabled size="lg">
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                &#x2800; Loading...
            </Button>
        </Container>
    )
}

export default Loader;