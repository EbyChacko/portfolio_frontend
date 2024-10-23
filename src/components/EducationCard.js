import { Col } from "react-bootstrap";

export const EducationCard = ({ cource, duration, institute, grade, cert_link }) => {
  return (
    <Col size={12} md={6} xl={4} className="Education-card">
        <div className="proj-imgbx">
            <div className="proj-txtx">
            <h4>{cource}</h4>
            <span>{duration}</span>
            <h4>{institute}</h4>
            <h5>{grade}</h5>
            <br></br>
            {/* <a href={cert_link} target="_blank" rel="noopener noreferrer">
            <button className="live-btn">View Certificate</button>
            </a> */}
            </div>
        </div>

    </Col>
  )
}