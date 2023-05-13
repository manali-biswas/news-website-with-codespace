import { Container, Navbar } from "react-bootstrap";

function BreakingNewsheader() {
    return(
        <Navbar bg="danger" variant="dark">
            <Container>
                <Navbar.Brand>Breaking News</Navbar.Brand>
                    <Navbar.Text className="wrapper justify-content-center">
                        <div className="marquee">
                            <p>Sample Breaking News running &nbsp;</p>
                        </div>
                    </Navbar.Text>
            </Container>
        </Navbar>
    );
}

export default BreakingNewsheader;