import { Col } from "react-bootstrap";

export const ExperienceCard = ({ role, duration, company, place }) => {
  return (
    <Col size={12} className="Education-card">
        <div className="">
          <h4>{role}</h4>
          <p>{duration}</p>
          <h5>{company}</h5>
          <p> {place}</p>
        </div>
    </Col>
  )
}