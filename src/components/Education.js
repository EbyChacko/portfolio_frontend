import { Container, Row, Col } from "react-bootstrap";
import { EducationCard } from "./EducationCard";
import { ExperienceCard } from "./ExperienceCard";


export const Education = () => {
  const educations = [
        {
            cource:"Diploma in Full Stack Development",
            duration: "May 2023 - May 2024",
            institute: 'Code Institute',
            grade: 'Distinction',

        },
        {
            cource:"Bachelor of Computer Application",
            duration: "Mar 2012 - Mar 2015",
            institute: 'Ilahia Collage of Arts & Science',
            grade: 'B',
        },
        {
            cource:"Master Diploma in Animation",
            duration: "Oct 2007 - Apr 2009",
            institute: 'Cochin Cadd Center',
            grade: 'B',
        },
    ];
    const experiences = [
        {
            role:"Night Porter",
            duration: "Aug 2022 - Present",
            company: 'Shearwater Hotel & Spa',
            place: 'Ballinasloe, Co-Galway, Ireland',
        },
        {
            role:"Graphic Designer",
            duration: "Jan 2021 - Feb 2022",
            company: 'Color dots flex and vinyl printing',
            place: 'Kothamangalam, Kerala, India',
        },
        {
            role:"Sales Executive",
            duration: "Jun 2016 - Jun 2020",
            company: 'Landmark International Auto SpareParts Trading LLC',
            place: 'Sharjah, UAE',
        },
        {
            role:"Graphic Designer",
            duration: "Jun 2008 - May 2016",
            company: 'Color dots flex and vinyl printing',
            place: 'Kothamangalam, Kerala, India',
        },
    ];

  return (
    <section className="education" id="education">
      <Container>
                <Row>
                    <Col size={12} md={6}>
                        <div >
                            <h2>EDUCATION</h2>
                            <Row className="justify-content-center">
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
                    <Col size={12} md={6}>
                        <div >
                            <h2>EXPERIENCE</h2>
                            <Row className="justify-content-center">
                                {
                                experiences.map((experience, index) => {
                                    return (
                                    <ExperienceCard
                                        key={index}
                                        {...experience}
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
