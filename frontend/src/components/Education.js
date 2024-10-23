import { Container, Row, Col } from "react-bootstrap";
import { EducationCard } from "./EducationCard";
// import code_certificate from '../assets/img/certificates/code_certificate.png';
// import cadd_certificate from '../assets/img/certificates/cadd_certificate.jpg';
// import bca_certificate from '../assets/img/certificates/bca_certificate.jpg';

export const Education = () => {
  const educations = [
        {
            cource:"Diploma in Full Stack Development",
            duration: "May 2023 - May 2024",
            institute: 'Code Institute',
            grade: 'Distinction',
            // cert_link : code_certificate,
        },
        {
            cource:"Bachelor of Computer Application",
            duration: "Mar 2012 - Mar 2015",
            institute: 'Ilahia Collage of Arts & Science',
            grade: 'B',
            // cert_link:bca_certificate,
        },
        {
            cource:"Master Diploma in Animation",
            duration: "Oct 2007 - Apr 2009",
            institute: 'Cochin Cadd Center',
            grade: 'B',
            // cert_link: cadd_certificate,
        },
    ];

  return (
    <section className="education" id="education">
      <Container>
                <Row>
                    <Col size={12}>
                        <div >
                            <h2>EDUCATION</h2>
                            <Row className="row justify-content-center">
                                {
                                educations.map((education, index) => {
                                    return (
                                    <EducationCard
                                        key={index}
                                        {...education}
                                        />
                                    )
                                })
                                }
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
    </section>
  );
};
