import { Container, Row, Col } from "react-bootstrap";
import { EducationCard } from "./EducationCard";
import { ExperienceCard } from "./ExperienceCard";


export const Education = () => {
  const educations = [
        {
            cource:"Diploma in Full Stack Development",
            duration: "May 2023 - May 2024",
            institute: 'Code Institute',
            place: 'Online, Ireland',

        },
        {
            cource:"Bachelor of Computer Application",
            duration: "Mar 2012 - Mar 2015",
            institute: 'Mahatma Gandhi University',
            place: 'Muvattupuzha, Kerala, India',
        },
        {
            cource:"Master Diploma in Animation",
            duration: "Oct 2007 - Apr 2009",
            institute: 'Cochin Cadd Center',
            place: 'Aluva, Kerala, India',
        },
    ];
    const experiences = [
        {
            role:"Web Designer-Part-Time",
            duration: "Apr 2022 – Nov 2024",
            company: 'Netotech Solutions',
            place: 'Kothamangalam, Kerala, India',
        },
        {
            role:"Graphic Designer",
            duration: "Jan 2021 - Feb 2022",
            company: 'Color dots',
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
            company: 'Color dots',
            place: 'Kothamangalam, Kerala, India',
        },
    ];

  return (
    <section className="education">
      <Container>
                <Row>
                    <Col size={12} lg={6} id="education">
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
                    <Col size={12} lg={6} id="experience">
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
