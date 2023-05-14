import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function NavbarComponent() {
  const [activeNav, setActive] = useState("home")
  const navigate = useNavigate()

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
            <Nav.Link
              active={activeNav === "home"}
              onClick={() => {
                setActive("home")
                navigate("/")
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              active={activeNav === "politics"}
              onClick={() => {
                setActive("politics")
                navigate("/politics")
              }}
            >
              Politics
            </Nav.Link>
            <Nav.Link
              active={activeNav === "business"}
              onClick={() => {
                setActive("business")
                navigate("/business")
              }}
            >
              Business
            </Nav.Link>
            <Nav.Link
              active={activeNav === "sports"}
              onClick={() => {
                setActive("sports")
                navigate("/sports")
              }}
            >
              Sports
            </Nav.Link>
            <Nav.Link
              active={activeNav === "tech"}
              onClick={() => {
                setActive("tech")
                navigate("/tech")
              }}>
              Technology
            </Nav.Link>
            <Nav.Link
              active={activeNav === "travel"}
              onClick={() => {
                setActive("travel")
                navigate("/travel")
              }}
            >
              Travel
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;