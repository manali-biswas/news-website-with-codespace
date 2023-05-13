import { Container, Image } from "react-bootstrap";

function Footer() {
    return (
        <Container className="bg-secondary text-white footer">
            <div className="d-flex justify-content-center">
                <Image
                    src="logo192.png"
                    height={80}
                />
            </div>
            <p className="text-center">PWA News <br/> Manali Biswas &#169; Copyright 2023</p>
        </Container>
    );
}

export default Footer;