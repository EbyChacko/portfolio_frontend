import { Container, Row, Col } from "react-bootstrap";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} className="text-center ">
            <p>Copyright © {new Date().getFullYear()} | Created with ❤️ by Eby Chacko</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}