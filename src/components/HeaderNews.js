import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import { useNavigate } from 'react-router-dom';

function HeaderNews(props) {
    const news = props.headerNews
    const navigate = useNavigate()
    const goToArticle = ()=>navigate('/article/0')
    if (news === null || news === undefined) {
        return(
            <></>
        )
    }
    if (news.image != null) {
        return (
            <Container onClick={goToArticle}>
                <Row>
                    <Col md={6}>
                        <Image
                            src={news.image}
                            width="700"
                            fluid
                            rounded
                        />
                    </Col>
                    <Col md={2} />
                    <Col md={4} className='m-auto'>
                        <p className='text-danger'>Trending</p>
                        <div>
                            <h3>{news.title}</h3>
                            <p>{news.description}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
    return (
        <Container className='m-auto' onClick={goToArticle}>
            <p className='text-danger'>Trending</p>
            <div>
                <h3>{news.title}</h3>
                <p>{news.content}</p>
            </div>
        </Container>
    );
}

export default HeaderNews;