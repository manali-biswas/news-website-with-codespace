import { Container, Navbar } from "react-bootstrap";

function BreakingNewsheader(props) {
    const headlineElements = props.headlines.map((headline) => {
        return(<p>{headline} &#x2022;</p>)
    })
    return(
        <Navbar bg="danger" variant="dark">
            <Container>
                <Navbar.Brand>Breaking News</Navbar.Brand>
                    <Navbar.Text className="wrapper justify-content-center">
                        <div className="marquee">
                            {headlineElements}
                        </div>
                    </Navbar.Text>
            </Container>
        </Navbar>
    );
}

export default BreakingNewsheader;