import { Col } from "react-bootstrap";

export const EducationCard = ({ cource, duration, institute, grade }) => {
  return (
    <Col size={12} md={6} className="Education-card">
        <div className="">
          <h4>{cource}</h4>
          <span>{duration}</span>
          <h5>{institute}</h5>
          <p>Grade : {grade}</p>
        </div>
    </Col>
  )
}