import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

function NewsCardGrid(props) {
  const navigate = useNavigate();

  return (
    <Container className='d-flex justify-content-center' >
      <Row xs={1} md={3} className='g-4 mr-0'>
        {props.news.map((article, idx) => (
          <Col key={idx} onClick={()=>navigate(`/article/${idx}`)}>
            <Card bg="light">
              <Card.Img variant="top" src={article.image} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>
                  {article.description}
                </Card.Text>
              </Card.Body>
              <Button>Read More</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default NewsCardGrid;