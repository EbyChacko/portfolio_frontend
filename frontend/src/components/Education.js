import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Education = () => {
  const linkedin = "https://www.linkedin.com/in/eby-chacko-85695b245/";
  const github = "https://github.com/EbyChacko";

  return (
    <section className="education" id="education">
      <Container>
        <Row className="">
          <Col size={12}>
            <div>
              <h2>EDUCATION</h2>

              <Row>
                  <Col size={12} sm={6} className="edu_box">
                    <h4>Deploma in Full stack development</h4>
                    <span>May 2023 - May 2024</span>
                    <h5>Code Institute</h5>
                  </Col>

                  <Col size={12} sm={6} className="edu_box">

                  </Col>
                </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}