import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function NewsCardGrid() {
  return (
    <Container className='d-flex justify-content-center'>
      <Row xs={1} md={3} className='g-4 mr-0'>
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card bg="light">
              <Card.Img variant="top" src="Octocat.png" />
              <Card.Body>
                <Card.Title>News Title</Card.Title>
                <Card.Text>
                  This is dummy news data description!!!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default NewsCardGrid;