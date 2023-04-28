import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

function HeaderNews() {
    return(
        <Container>
            <Row>
                <Col md={6}>
                    <Image
                        src='Octocat.png'
                        width="700"
                        fluid
                    />
                </Col>
                <Col md={2}/>
                <Col md={4} className='m-auto'>
                    <p className='text-danger'>Trending</p>
                    <div>
                        <h3>This is an Octocat!</h3>
                        <p>This is some dummy news</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default HeaderNews;