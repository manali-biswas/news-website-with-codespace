import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src="logo512.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            PWA News
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/politics">Politics</Nav.Link>
            <Nav.Link href="/business">Business</Nav.Link>
            <Nav.Link href="/sports">Sports</Nav.Link>
            <Nav.Link href="/technology">Technology</Nav.Link>
            <Nav.Link href="/travel">Travel</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;