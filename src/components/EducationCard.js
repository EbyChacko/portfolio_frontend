import { Col } from "react-bootstrap";

export const EducationCard = ({ cource, duration, institute, grade }) => {
  return (
    <Col size={12} sm={12} className="Education-card">
        <div className="">
          <h4>{cource}</h4>
          <p>{duration}</p>
          <h5>{institute}</h5>
          <p>Grade : {grade}</p>
        </div>
    </Col>
  )
}